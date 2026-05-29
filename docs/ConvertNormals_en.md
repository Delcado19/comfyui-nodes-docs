
# Documentation
- Class name: ConvertNormals
- Category: image/filters
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ConvertNormals node is specifically designed to convert normal map formats, adjust their scale, and optionally normalize or fill missing regions. It supports multiple input and output modes, allowing flexible adjustment of normal maps to suit different rendering or processing requirements. This node is particularly useful in graphics and image processing pipelines, especially when normal maps need to be converted or adjusted for specific purposes.

# Input types
## Required
- normals
    - The input normal map tensor to be converted. This is the core parameter for the node operation, which undergoes various transformations based on other input parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- input_mode
    - Specifies the format of the input normal map, affecting its initial processing method. This parameter determines the initial adjustments made to the normal map before further conversion.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- output_mode
    - Defines the desired format of the output normal map, guiding the final adjustments to the tensor. This parameter ensures the converted normal map meets specific format requirements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scale_XY
    - Scaling factors applied to the X and Y components of the normal map, affecting its overall appearance. This parameter allows fine-tuning the visual effect of the normal map on surfaces.
    - Comfy dtype: FLOAT
    - Python dtype: float
- normalize
    - A boolean flag indicating whether to normalize the normal map after conversion. Normalization ensures the normal map vectors are unit length, which is typically done to guarantee consistent lighting effects.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- fix_black
    - A boolean flag that, when enabled, corrects black regions in the normal map, potentially filling these regions based on the optional_fill parameter. This is useful for repairing or enhancing normal maps with missing data.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- optional_fill
    - An optional tensor used to fill black regions in the normal map when fix_black is enabled. This parameter allows applying custom fill patterns or colors, enhancing the node's versatility.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The converted normal map tensor, adjusted according to the specified input and output modes, scaling, normalization, and optional filling. This output can be directly used in subsequent processing or rendering steps.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ConvertNormals:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "normals": ("IMAGE",),
                "input_mode": (["BAE", "MiDaS", "Standard"],),
                "output_mode": (["BAE", "MiDaS", "Standard"],),
                "scale_XY": ("FLOAT",{"default": 1, "min": 0, "max": 100, "step": 0.001}),
                "normalize": ("BOOLEAN", {"default": True}),
                "fix_black": ("BOOLEAN", {"default": True}),
            },
            "optional": {
                "optional_fill": ("IMAGE",),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "convert_normals"

    CATEGORY = "image/filters"

    def convert_normals(self, normals, input_mode, output_mode, scale_XY, normalize, fix_black, optional_fill=None):
        t = normals.detach().clone()
        
        if input_mode == "BAE":
            t[:,:,:,0] = 1 - t[:,:,:,0] # invert R
        elif input_mode == "MiDaS":
            t[:,:,:,:3] = torch.stack([1 - t[:,:,:,2], t[:,:,:,1], t[:,:,:,0]], dim=3) # BGR -> RGB and invert R
        
        if fix_black:
            key = torch.clamp(1 - t[:,:,:,2] * 2, min=0, max=1)
            if optional_fill == None:
                t[:,:,:,0] += key * 0.5
                t[:,:,:,1] += key * 0.5
                t[:,:,:,2] += key
            else:
                fill = optional_fill.detach().clone()
                if fill.shape[1:3] != t.shape[1:3]:
                    fill = torch.nn.functional.interpolate(fill.movedim(-1,1), size=(t.shape[1], t.shape[2]), mode='bilinear').movedim(1,-1)
                if fill.shape[0] != t.shape[0]:
                    fill = fill[0].unsqueeze(0).expand(t.shape[0], -1, -1, -1)
                t[:,:,:,:3] += fill[:,:,:,:3] * key.unsqueeze(3).expand(-1, -1, -1, 3)
        
        t[:,:,:,:2] = (t[:,:,:,:2] - 0.5) * scale_XY + 0.5
        
        if normalize:
            t[:,:,:,:3] = torch.nn.functional.normalize(t[:,:,:,:3] * 2 - 1, dim=3) / 2 + 0.5
        
        if output_mode == "BAE":
            t[:,:,:,0] = 1 - t[:,:,:,0] # invert R
        elif output_mode == "MiDaS":
            t[:,:,:,:3] = torch.stack([t[:,:,:,2], t[:,:,:,1], 1 - t[:,:,:,0]], dim=3) # invert R and BGR -> RGB
        
        return (t,)

```
