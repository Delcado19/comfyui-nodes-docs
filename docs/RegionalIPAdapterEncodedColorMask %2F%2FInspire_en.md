# Documentation
- Class name: RegionalIPAdapterEncodedColorMask
- Category: InspirePack/Regional
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node applies a color mask to an image, encoding it for use by the IPAdapter model. It allows precise control over the application of the mask, enabling users to focus on specific areas of the image for conditional processing during generation.

# Input types
## Required
- color_mask
    - The input image to which the color mask will be applied. This image is the basis for regional conditioning during generation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_color
    - The color value used to define the mask. This parameter is critical as it determines which parts of the input image will be emphasized or ignored during conditioning.
    - Comfy dtype: STRING
    - Python dtype: str
- embeds
    - The embedding vector provides additional context to the model, enhancing the conditioning process. These embeddings are crucial for shaping the final output according to input prompts and desired style.
    - Comfy dtype: EMBEDS
    - Python dtype: List[torch.Tensor]
- weight
    - The weight parameter adjusts the influence of the mask on generation. Higher weights result in stricter adherence to the mask, while lower weights allow more variation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_type
    - This parameter determines the type of weight application, which can significantly alter the conditioning effect. It allows different strategies in how the mask influences generated content.
    - Comfy dtype: COMBO
    - Python dtype: str
- start_at
    - The starting point of the mask effect, ranging from 0.0 to 1.0. It controls the initial strength of the mask's influence on the generation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - The ending point of the mask effect, also ranging from 0.0 to 1.0. It determines how the mask's influence gradually fades towards the end of the generation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- unfold_batch
    - Enabling this option allows batch application of the mask, which is beneficial for processing multiple images at once.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- REGIONAL_IPADAPTER
    - The output is a regionally conditioned IPAdapter object that can be used in subsequent generation steps, carrying encoded mask information to guide the model.
    - Comfy dtype: REGIONAL_IPADAPTER
    - Python dtype: IPAdapterConditioning
- MASK
    - The processed mask image, ready to be applied in the generation pipeline. It is a key component for achieving desired regional effects.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class RegionalIPAdapterEncodedColorMask:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'color_mask': ('IMAGE',), 'mask_color': ('STRING', {'multiline': False, 'default': '#FFFFFF'}), 'embeds': ('EMBEDS',), 'weight': ('FLOAT', {'default': 0.7, 'min': -1, 'max': 3, 'step': 0.05}), 'weight_type': (['original', 'linear', 'channel penalty'],), 'start_at': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'end_at': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'unfold_batch': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('REGIONAL_IPADAPTER', 'MASK')
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/Regional'

    def doit(self, color_mask, mask_color, embeds, weight, weight_type, start_at=0.0, end_at=1.0, unfold_batch=False):
        mask = color_to_mask(color_mask, mask_color)
        cond = IPAdapterConditioning(mask, weight, weight_type, embeds=embeds, start_at=start_at, end_at=end_at, unfold_batch=unfold_batch)
        return (cond, mask)
```