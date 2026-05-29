
# Documentation
- Class name: NormalizedAmplitudeToMask
- Category: KJNodes/audio
- Output node: False

The NormalizedAmplitudeToMask node converts normalized amplitude of an audio signal into a visual mask. It maps the amplitude range to corresponding visual representations, fusing audio data with visual elements. This enables dynamic adjustment of visual content based on audio input.

# Input types
## Required
- normalized_amp
    - Normalized amplitude values, expected in the range [0, 1], serve as the basis for generating the mask. These values determine the intensity and characteristics of the generated visual mask, directly affecting the visual output.
    - Comfy dtype: NORMALIZED_AMPLITUDE
    - Python dtype: numpy.ndarray
- width
    - Specifies the width of the output mask, allowing customization of mask dimensions based on visual representation requirements.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Determines the height of the output mask, enabling the mask size to adapt to specific visual contexts.
    - Comfy dtype: INT
    - Python dtype: int
- frame_offset
    - An integer value used to offset the amplitude, providing a way to adjust the position of the mask's visual representation relative to the audio input.
    - Comfy dtype: INT
    - Python dtype: int
- location_x
    - The x-coordinate position where the mask will be applied, allowing precise placement of visual effects within a larger image or scene.
    - Comfy dtype: INT
    - Python dtype: int
- location_y
    - The y-coordinate position where the mask is applied, aiding accurate placement of audio-driven visual effects.
    - Comfy dtype: INT
    - Python dtype: int
- size
    - Defines the size of the mask, providing control over the scale of visual effects generated from audio amplitude.
    - Comfy dtype: INT
    - Python dtype: int
- shape
    - Allows selection of the mask shape, offering options such as 'none', 'circle', 'square', and 'triangle' to customize visual effects.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- color
    - Selects the color scheme for the mask, offering options like 'white' and 'amplitude' to influence visual appearance based on audio input.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- mask
    - The output mask generated from normalized amplitude values, where amplitude information is visually encoded into the mask's structure.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class NormalizedAmplitudeToMask:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
                    "normalized_amp": ("NORMALIZED_AMPLITUDE",),
                    "width": ("INT", {"default": 512,"min": 16, "max": 4096, "step": 1}),
                    "height": ("INT", {"default": 512,"min": 16, "max": 4096, "step": 1}),
                    "frame_offset": ("INT", {"default": 0,"min": -255, "max": 255, "step": 1}),
                    "location_x": ("INT", {"default": 256,"min": 0, "max": 4096, "step": 1}),
                    "location_y": ("INT", {"default": 256,"min": 0, "max": 4096, "step": 1}),
                    "size": ("INT", {"default": 128,"min": 8, "max": 4096, "step": 1}),
                    "shape": (
                        [   
                            'none',
                            'circle',
                            'square',
                            'triangle',
                        ],
                        {
                        "default": 'none'
                        }),
                    "color": (
                        [   
                            'white',
                            'amplitude',
                        ],
                        {
                        "default": 'amplitude'
                        }),
                     },}

    CATEGORY = "KJNodes/audio"
    RETURN_TYPES = ("MASK",)
    FUNCTION = "convert"
    DESCRIPTION = """
Works as a bridge to the AudioScheduler -nodes:  
https://github.com/a1lazydog/ComfyUI-AudioScheduler  
Creates masks based on the normalized amplitude.
"""

    def convert(self, normalized_amp, width, height, frame_offset, shape, location_x, location_y, size, color):
        # Ensure normalized_amp is an array and within the range [0, 1]
        normalized_amp = np.clip(normalized_amp, 0.0, 1.0)

        # Offset the amplitude values by rolling the array
        normalized_amp = np.roll(normalized_amp, frame_offset)
        
        # Initialize an empty list to hold the image tensors
        out = []
        # Iterate over each amplitude value to create an image
        for amp in normalized_amp:
            # Scale the amplitude value to cover the full range of grayscale values
            if color == 'amplitude':
                grayscale_value = int(amp * 255)
            elif color == 'white':
                grayscale_value = 255
            # Convert the grayscale value to an RGB format
            gray_color = (grayscale_value, grayscale_value, grayscale_value)
            finalsize = size * amp
            
            if shape == 'none':
                shapeimage = Image.new("RGB", (width, height), gray_color)
            else:
                shapeimage = Image.new("RGB", (width, height), "black")

            draw = ImageDraw.Draw(shapeimage)
            if shape == 'circle' or shape == 'square':
                # Define the bounding box for the shape
                left_up_point = (location_x - finalsize, location_y - finalsize)
                right_down_point = (location_x + finalsize,location_y + finalsize)
                two_points = [left_up_point, right_down_point]

                if shape == 'circle':
                    draw.ellipse(two_points, fill=gray_color)
                elif shape == 'square':
                    draw.rectangle(two_points, fill=gray_color)
                    
            elif shape == 'triangle':
                # Define the points for the triangle
                left_up_point = (location_x - finalsize, location_y + finalsize) # bottom left
                right_down_point = (location_x + finalsize, location_y + finalsize) # bottom right
                top_point = (location_x, location_y) # top point
                draw.polygon([top_point, left_up_point, right_down_point], fill=gray_color)
            
            shapeimage = pil2tensor(shapeimage)
            mask = shapeimage[:, :, :, 0]
            out.append(mask)
        
        return (torch.cat(out, dim=0),)

```
