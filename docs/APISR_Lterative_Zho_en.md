# Documentation
- Class name: APISR_Lterative_Zho
- Category: 🔎APISR
- Output node: False
- Repo Ref: https://github.com/ZHO-ZHO-ZHO/ComfyUI-APISR.git

This node is designed to enhance image resolution using a specified model, focusing on improving the clarity and detail of the input image.

# Input types
## Required
- pipe
    - The ‘pipe’ parameter is crucial; it represents the model used for image super‑resolution. It is at the core of the node’s functionality and directly affects output quality.
    - Comfy dtype: APISRMODEL
    - Python dtype: torch.nn.Module
- image
    - The ‘image’ parameter is essential; it is the input to the super‑resolution process. Its quality and characteristics influence the effectiveness of the resolution enhancement.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- dtype
    - The ‘dtype’ parameter determines the data type used for processing, which impacts the performance and precision of the super‑resolution algorithm.
    - Comfy dtype: COMBO[float32, float16]
    - Python dtype: str
## Optional
- crop_for_4x
    - The ‘crop_for_4x’ parameter is an optional setting used to adjust the input image to fit the 4× scaling requirement, ensuring compatibility and optimal processing.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- processed_images
    - The ‘processed_images’ output contains the super‑resolved images, representing the main result of the node’s operation with enhanced detail and clarity.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ZHO-ZHO-ZHO/ComfyUI-APISR)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
