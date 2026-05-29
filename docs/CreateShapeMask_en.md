
# Documentation
- Class name: CreateShapeMask
- Category: KJNodes/masking/generate
- Output node: False
- Repo Ref: https://github.com/kenjiqq/ComfyUI_KJNodes

CreateShapeMask is a node dedicated to generating masks of specific shapes or batches of multi-frame masks. It allows dynamic creation of animated masks by adjusting the growth of shapes across frames, providing a versatile tool for generating masks at various sizes and shapes.

# Input types
## Required
- shape
    - Specifies the geometric shape of the mask to be created. This selection affects the visual appearance and boundaries of the generated mask.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- frames
    - Determines the number of frames for the animated mask, allowing the creation of a sequence of gradually growing masks.
    - Comfy dtype: INT
    - Python dtype: int
- location_x
    - The x-coordinate of the shape's center position, defining the horizontal placement of the shape within the frame.
    - Comfy dtype: INT
    - Python dtype: int
- location_y
    - The y-coordinate of the shape's center position, defining the vertical placement of the shape within the frame.
    - Comfy dtype: INT
    - Python dtype: int
- grow
    - Controls the amount of shape growth per frame, enabling the mask to produce animation effects.
    - Comfy dtype: INT
    - Python dtype: int
- frame_width
    - The width of the frame in which the shape is placed, setting the horizontal boundary of the mask.
    - Comfy dtype: INT
    - Python dtype: int
- frame_height
    - The height of the frame in which the shape is placed, setting the vertical boundary of the mask.
    - Comfy dtype: INT
    - Python dtype: int
- shape_width
    - Specifies the initial width of the shape, determining its size before any growth is applied.
    - Comfy dtype: INT
    - Python dtype: int
- shape_height
    - Specifies the initial height of the shape, determining its size before any growth is applied.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask
    - The generated mask with the specified shape and dimensions.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_inverted
    - An inverted version of the generated mask, where the shape area is transparent and the rest is opaque.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [MaskToImage](../../Comfy/Nodes/MaskToImage.md)



## Source code
```python
class CreateShapeMask:
    
    RETURN_TYPES = ("MASK", "MASK",)
    RETURN_NAMES = ("mask", "mask_inverted",)
    FUNCTION = "createshapemask"
    CATEGORY = "KJNodes/masking/generate"
    DESCRIPTION = """
Creates a mask or batch of masks with the specified shape.  
Locations are center locations.  
Grow value is the amount to grow the shape on each frame, creating animated masks.
"""

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "shape": (
            [   'circle',
                'square',
                'triangle',
            ],
            {
            "default": 'circle'
             }),
                "frames": ("INT", {"default": 1,"min": 1, "max": 4096, "step": 1}),
                "location_x": ("INT", {"default": 256,"min": 0, "max": 4096, "step": 1}),
                "location_y": ("INT", {"default": 256,"min": 0, "max": 4096, "step": 1}),
                "grow": ("INT", {"default": 0, "min": -512, "max": 512, "step": 1}),
                "frame_width": ("INT", {"default": 512,"min": 16, "max": 4096, "step": 1}),
                "frame_height": ("INT", {"default": 512,"min": 16, "max": 4096, "step": 1}),
                "shape_width": ("INT", {"default": 128,"min": 8, "max": 4096, "step": 1}),
                "shape_height": ("INT", {"default": 128,"min": 8, "max": 4096, "step": 1}),
        },
    } 

    def createshapemask(self, frames, frame_width, frame_height, location_x, location_y, shape_width, shape_height, grow, shape):
        # Define the number of images in the batch
        batch_size = frames
        out = []
        color = "white"
        for i in range(batch_size):
            image = Image.new("RGB", (frame_width, frame_height), "black")
            draw = ImageDraw.Draw(image)

            # Calculate the size for this frame and ensure it's not less than 0
            current_width = max(0, shape_width + i*grow)
            current_height = max(0, shape_height + i*grow)

            if shape == 'circle' or shape == 'square':
                # Define the bounding box for the shape
                left_up_point = (location_x - current_width // 2, location_y - current_height // 2)
                right_down_point = (location_x + current_width // 2, location_y + current_height // 2)
                two_points = [left_up_point, right_down_point]

                if shape == 'circle':
                    draw.ellipse(two_points, fill=color)
                elif shape == 'square':
                    draw.rectangle(two_points, fill=color)
                    
            elif shape == 'triangle':
                # Define the points for the triangle
                left_up_point = (location_x - current_width // 2, location_y + current_height // 2) # bottom left
                right_down_point = (location_x + current_width // 2, location_y + current_height // 2) # bottom right
                top_point = (location_x, location_y - current_height // 2) # top point
                draw.polygon([top_point, left_up_point, right_down_point], fill=color)

            image = pil2tensor(image)
            mask = image[:, :, :, 0]
            out.append(mask)
        outstack = torch.cat(out, dim=0)
        return (outstack, 1.0 - outstack,)

```
