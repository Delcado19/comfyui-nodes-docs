# Documentation
- Class name: WLSH_Generate_Edge_Mask
- Category: WLSH Nodes/inpainting
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The WLSH_Generate_Edge_Mask node generates an edge mask based on a given direction and image. It creates a mask usable for inpainting tasks, ensuring the masked area aligns with the specified direction, such as 'up', 'down', 'left', or 'right'. This node's functionality is essential for image processing applications requiring selective masking.

# Input types
## Required
- image
    - The image parameter is critical for the node, as it serves as the basis for generating the edge mask. The node processes this image to create a mask corresponding to the specified direction, playing a key role in the node's overall functionality.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- direction
    - The direction parameter determines the direction of the mask to be generated. It is a critical input as it dictates how the mask will be applied to the image, affecting the final result of the inpainting process.
    - Comfy dtype: STRING
    - Python dtype: str
- pixels
    - The pixel parameter specifies the size of the mask edge in pixels, which is an important factor in controlling the extent of the masked area. This parameter directly affects the node's execution and the precision of the generated mask.
    - Comfy dtype: INT
    - Python dtype: int
- overlap
    - The overlap parameter defines the thickness of the mask edge, which is important for ensuring a smooth transition between masked and unmasked areas. It helps improve the quality of inpainting results by preventing abrupt edge transitions.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask
    - The output mask is a key result of the node's operation. It represents the area to be processed for inpainting, and its quality and alignment directly impact the final image output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WLSH_Generate_Edge_Mask:
    directions = ['left', 'right', 'up', 'down']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'direction': (s.directions,), 'pixels': ('INT', {'default': 128, 'min': 32, 'max': 512, 'step': 32}), 'overlap': ('INT', {'default': 64, 'min': 16, 'max': 256, 'step': 16})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'gen_second_mask'
    CATEGORY = 'WLSH Nodes/inpainting'

    def gen_second_mask(self, direction, image, pixels, overlap):
        image = tensor2pil(image)
        (new_width, new_height) = image.size
        mask2 = Image.new('RGBA', (new_width, new_height), (0, 0, 0, 255))
        mask_thickness = overlap
        if direction == 'up':
            new_mask = Image.new('RGBA', (new_width, mask_thickness), (0, 122, 0, 255))
            mask2.paste(new_mask, (0, pixels - int(mask_thickness / 2)))
        elif direction == 'down':
            new_mask = Image.new('RGBA', (new_width, mask_thickness), (0, 122, 0, 255))
            mask2.paste(new_mask, (0, new_height - pixels - int(mask_thickness / 2)))
        elif direction == 'left':
            new_mask = Image.new('RGBA', (mask_thickness, new_height), (0, 122, 0, 255))
            mask2.paste(new_mask, (pixels - int(mask_thickness / 2), 0))
        elif direction == 'right':
            new_mask = Image.new('RGBA', (mask_thickness, new_height), (0, 122, 0, 255))
            mask2.paste(new_mask, (new_width - pixels - int(mask_thickness / 2), 0))
        mask2 = mask2.filter(ImageFilter.GaussianBlur(radius=5))
        mask2 = np.array(mask2).astype(np.float32) / 255.0
        mask2 = torch.from_numpy(mask2)[None,]
        return (mask2,)
```