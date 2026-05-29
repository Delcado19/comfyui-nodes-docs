
# Documentation
- Class name: GLIGENTextBoxApplyBatch
- Category: KJNodes/experimental
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

GLIGENTextBoxApplyBatch node is a node for batch processing text box applications, efficiently applying text overlays or modifications across multiple images or frames. This node streamlines the process of adding text to images, especially suitable for scenarios that require consistent text elements across a series of images, such as video frames or related image collections.

# Input types
## Required
- conditioning_to
    - Specifies the target condition data to which the text box modification will be applied, serving as the basis for the text overlay process.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- latents
    - Provides the latent representation of images in the batch, used as the basis for applying the text box modification.
    - Comfy dtype: LATENT
    - Python dtype: list
- clip
    - Represents the CLIP model used for encoding text input, facilitating the generation of text-based features applied to images.
    - Comfy dtype: CLIP
    - Python dtype: object
- gligen_textbox_model
    - Specifies the model used to generate text box overlays, enabling customization and application of text to images.
    - Comfy dtype: GLIGEN
    - Python dtype: object
- text
    - Allows specifying the text content to be applied across the entire image batch, serving as the main content for text overlay or modification.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - Defines the width of the text box overlay, allowing customization of the overlay size according to the image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Specifies the height of the text box overlay, enabling precise control of the overlay dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- coordinates
    - Provides positioning information for the text box overlay, determining where the text will be applied on the image.
    - Comfy dtype: STRING
    - Python dtype: tuple
- interpolation
    - Determines the interpolation method for the text box application, affecting the smoothness and blending effect of the text overlay on the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- conditioning
    - Reflects the modified condition data after applying the text box overlay, integrating the text modification into the condition framework.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- image
    - Displays the final image after applying the text box overlay, showing the visual modifications made to the image batch.
    - Comfy dtype: IMAGE
    - Python dtype: list


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class GLIGENTextBoxApplyBatch:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {"conditioning_to": ("CONDITIONING", ),
                              "latents": ("LATENT", ),
                              "clip": ("CLIP", ),
                              "gligen_textbox_model": ("GLIGEN", ),
                              "text": ("STRING", {"multiline": True}),
                              "width": ("INT", {"default": 64, "min": 8, "max": MAX_RESOLUTION, "step": 8}),
                              "height": ("INT", {"default": 64, "min": 8, "max": MAX_RESOLUTION, "step": 8}),
                              "coordinates": ("STRING", {"multiline": True}),
                              "interpolation": (
                                [   
                                    'straight',
                                    'CubicSpline',
                                ],
                                {
                                "default": 'CubicSpline'
                                 }),
                             }}
    RETURN_TYPES = ("CONDITIONING", "IMAGE",)
    FUNCTION = "append"
    CATEGORY = "KJNodes/experimental"
    DESCRIPTION = """
Experimental, does not function yet as ComfyUI base changes are needed
"""

    def append(self, latents, conditioning_to, clip, gligen_textbox_model, text, width, height, coordinates, interpolation):

        coordinates_dict = parse_coordinates(coordinates)
        batch_size = sum(tensor.size(0) for tensor in latents.values())
        c = []
        cond, cond_pooled = clip.encode_from_tokens(clip.tokenize(text), return_pooled=True)

        # Interpolate coordinates for the entire batch
        if interpolation == 'CubicSpline':
            interpolated_coords = interpolate_coordinates_with_curves(coordinates_dict, batch_size)
        if interpolation == 'straight':
            interpolated_coords = interpolate_coordinates(coordinates_dict, batch_size)

        plot_image_tensor = plot_to_tensor(coordinates_dict, interpolated_coords, 512, 512, height)
        for t in conditioning_to:
            n = [t[0], t[1].copy()]
            
            position_params_batch = [[] for _ in range(batch_size)]  # Initialize a list of empty lists for each batch item
            
            for i in range(batch_size):
                x_position, y_position = interpolated_coords[i] 
                position_param = (cond_pooled, height // 8, width // 8, y_position // 8, x_position // 8)
                position_params_batch[i].append(position_param)  # Append position_param to the correct sublist
                print("x ",x_position, "y ", y_position)
            prev = []
            if "gligen" in n[1]:
                prev = n[1]['gligen'][2]
            else:
                prev = [[] for _ in range(batch_size)]
            # Concatenate prev and position_params_batch, ensuring both are lists of lists
            # and each sublist corresponds to a batch item
            combined_position_params = [prev_item + batch_item for prev_item, batch_item in zip(prev, position_params_batch)]
            n[1]['gligen'] = ("position", gligen_textbox_model, combined_position_params)
            c.append(n)
        
        return (c, plot_image_tensor,)

```
