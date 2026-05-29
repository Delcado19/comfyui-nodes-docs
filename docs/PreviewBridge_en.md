# Documentation
- Class name: PreviewBridge
- Category: ImpactPack/Util
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The PreviewBridge node is designed to handle and manage image data, providing a bridge between input images and subsequent processing stages. It loads, transforms, and caches images to optimize workflow and ensure effective handling of visual data within the system.

# Input types
## Required
- images
    - The `images` parameter is crucial for the node because it represents the input image data to be processed. It plays a key role in the node's execution, directly affecting output and subsequent image operations.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- unique_id
    - The `unique_id` parameter is essential for the node's functionality because it uniquely identifies each image or dataset the node processes. It ensures the node can accurately track and manage images, which is vital for operation and result integrity.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str
## Optional
- image
    - The `image` parameter serves as an optional identifier for a specific image in node operations. It can be used to reference or retrieve particular image data based on the provided identifier, thus playing an important role in customizing node behavior.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- ui
    - The `ui` output parameter is important because it contains user‑interface elements related to the node operation. It typically includes image data that can be displayed or used for further interaction within the system UI.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]
- result
    - The `result` output parameter encapsulates the processed image data and its corresponding mask. It is a key component of the node's functionality, providing the final output that can be used for downstream tasks or analysis.
    - Comfy dtype: TUPLE[torch.Tensor, torch.Tensor]
    - Python dtype: Tuple[torch.Tensor, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
