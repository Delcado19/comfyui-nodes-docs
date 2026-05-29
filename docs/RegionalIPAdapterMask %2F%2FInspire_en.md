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
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
