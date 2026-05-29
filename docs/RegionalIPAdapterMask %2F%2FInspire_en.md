# Documentation
- Class name: RegionalIPAdapterMask
- Category: InspirePack/Regional
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The RegionalIPAdapterMask node aims to adapt and process regional image data by applying masks and various conditional parameters. It facilitates modifications to image effects in specific regions without altering the entire dataset, enhancing control over image transformation and adaptation.

# Input types
## Required
- mask
    - The mask parameter is crucial for defining the region of the image that the node will focus on. It determines which parts of the image will be affected by the node's processing, enabling targeted modifications and enhancements.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- image
    - The image parameter is necessary because it provides the basic input for the node's operation. It is the raw data that the node will process, applying regional adaptation and enhancement according to the mask and other parameters.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
- weight
    - The weight parameter affects the intensity of the node's processing. It adjusts the strength of the regional adaptation applied to the image, allowing fine-tuning of the output according to the desired effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise
    - Noise is an important parameter that introduces variability into the node's processing. It adds a degree of randomness to the regional adaptation, which helps create more natural or diverse output variations.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_type
    - The weight type parameter determines how the weight is applied to the image. It can be raw, linear, or channel penalty, each method affecting the distribution and influence of the weight in the image, thereby changing the final result.
    - Comfy dtype: COMBO
    - Python dtype: str
- start_at
    - start_at defines the start of the node's processing range. It is a floating point value that sets the starting point for weight application, allowing controlled transitions in regional adaptation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - end_at marks the end of the node's processing range. Similar to start_at, it is a floating point value that specifies the end point of weight application, ensuring smooth and gradual transitions in regional adaptation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- unfold_batch
    - Expand batches, when enabled, changes the way the node processes image data. It can improve the efficiency of node operations, especially when processing large batches of images.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- faceid_v2
    - When the faceid_v2 parameter is enabled, additional facial recognition functions are activated within the node. This can enhance the node's ability to process and adapt specific facial regions in images.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- weight_v2
    - weight_v2 is an advanced parameter that allows further customization of weight application. It provides an additional layer of control for fine-tuning regional adaptation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output
    - The output of the RegionalIPAdapterMask node is the adapted image, which has been regionally processed according to the input parameters. This output is ready for further use or analysis, with regional adaptation and enhancement fully integrated into the final result.
    - Comfy dtype: REGIONAL_IPADAPTER
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class RegionalIPAdapterMask:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'mask': ('MASK',), 'image': ('IMAGE',), 'weight': ('FLOAT', {'default': 0.7, 'min': -1, 'max': 3, 'step': 0.05}), 'noise': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'weight_type': (['original', 'linear', 'channel penalty'],), 'start_at': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'end_at': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'unfold_batch': ('BOOLEAN', {'default': False})}, 'optional': {'faceid_v2': ('BOOLEAN', {'default': False}), 'weight_v2': ('FLOAT', {'default': 1.0, 'min': -1, 'max': 3, 'step': 0.05})}}
    RETURN_TYPES = ('REGIONAL_IPADAPTER',)
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/Regional'

    def doit(self, mask, image, weight, noise, weight_type, start_at=0.0, end_at=1.0, unfold_batch=False, faceid_v2=False, weight_v2=False):
        cond = IPAdapterConditioning(mask, weight, weight_type, noise=noise, image=image, start_at=start_at, end_at=end_at, unfold_batch=unfold_batch, faceid_v2=faceid_v2, weight_v2=weight_v2)
        return (cond,)
```