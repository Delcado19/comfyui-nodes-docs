
# Documentation
- Class name: CreateShapeMaskOnPath
- Category: KJNodes/masking/generate
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The CreateShapeMaskOnPath node is used to generate shape-based masks along a specified path, enabling the creation of dynamic and animated mask effects. It utilizes shape parameters and path coordinates to create masks that can change over time, providing a versatile tool for visual effects and image processing.

# Input types
## Required
- shape
    - Specify the geometric shape of the mask to be created. This choice affects the appearance of the mask, which can be a circle, square, or triangle, providing a variety of visual style options for the mask.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- coordinates
    - Define the center position of the mask creation along the path. These coordinates determine the placement of the mask in the frame, allowing precise control over the mask's position.
    - Comfy dtype: STRING
    - Python dtype: str
- grow
    - Determine the amount of shape growth per frame, enabling the creation of animated masks that change size over time.
    - Comfy dtype: INT
    - Python dtype: int
- frame_width
    - Set the width of the frame for mask creation, defining the spatial boundaries for mask generation.
    - Comfy dtype: INT
    - Python dtype: int
- frame_height
    - Set the height of the frame for mask creation, defining the spatial boundaries for mask generation.
    - Comfy dtype: INT
    - Python dtype: int
- shape_width
    - Specify the initial width of the shape used to create the mask, affecting the size and coverage area of the mask.
    - Comfy dtype: INT
    - Python dtype: int
- shape_height
    - Specify the initial height of the shape used to create the mask, affecting the size and coverage area of the mask.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask
    - The primary output mask created based on the specified shape and path coordinates.
    - Comfy dtype: MASK
    - Python dtype: Tensor
- mask_inverted
    - The inverted version of the primary mask, providing an alternative mask option where the shape area is transparent and the surrounding area is opaque.
    - Comfy dtype: MASK
    - Python dtype: Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CreateShapeMaskOnPath:
    
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
                "coordinates": ("STRING", {"forceInput": True}),
                "grow": ("INT", {"default": 0, "min": -512, "max": 512, "step": 1}),
                "frame_width": ("INT", {"default": 512,"min": 16, "max": 4096, "step": 1}),
                "frame_height": ("INT", {"default": 512,"min": 16, "max": 4096, "step": 1}),
                "shape_width": ("INT", {"default": 128,"min": 8, "max": 4096, "step": 1}),
                "shape_height": ("INT", {"default": 128,"min": 8, "max": 4096, "step": 1}),
        },
    } 

    def createshapemask(self, coordinates, frame_width, frame_height, shape_width, shape_height, grow, shape):
        # Define the number of images in the batch
        coordinates = coordinates.replace("'", '"')
        coordinates = json.loads(coordinates)

        batch_size = len(coordinates)
        out = []
        color = "white"
        
        for i, coord in enumerate(coordinates):
            image = Image.new("RGB", (frame_width, frame_height), "black")
            draw = ImageDraw.Draw(image)

            # Calculate the size for this frame and ensure it's not less than 0
            current_width = max(0, shape_width + i*grow)
            current_height = max(0, shape_height + i*grow)

            location_x = coord['x']
            location_y = coord['y']

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
