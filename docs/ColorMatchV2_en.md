# Documentation
- Class name: ColorMatchV2
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

color-matcher enables color transfer across images which comes in handy for automatic  
color-grading of photographs, paintings and film sequences as well as light-field  
and stopmotion corrections.  

The methods behind the mappings are based on the approach from Reinhard et al.,  
the Monge-Kantorovich Linearization (MKL) as proposed by Pitie et al. and our analytical solution  
to a Multi-Variate Gaussian Distribution (MVGD) transfer in conjunction with classical histogram   
matching. As shown below our HM-MVGD-HM compound outperforms existing methods.   
https://github.com/hahnec/color-matcher/   

'reinhard_lab_gpu' method uses Kornia for GPU-accelerated color transfer in Lab color space.

# Input types
## Required
- image_target
    - The image_target input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_ref
    - The image_ref input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- method
    - The method input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- multithread
    - The multithread input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
