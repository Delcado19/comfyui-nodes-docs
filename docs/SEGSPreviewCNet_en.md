# Documentation
- Class name: SEGSPreviewCNet
- Category: ImpactPack/Util
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

SEGSPreviewCNet is a node for processing and previewing segmentation results. It takes segmentation data as input and generates a series of preview images, enhancing visual inspection and analysis of segmentation work. This node is crucial in providing a visual summary of segmentation work, allowing quick evaluation and further operations when needed.

# Input types
## Required
- segs
    - The 'ssegs' parameter is crucial for the node's operation as it provides the segmentation data that the node will process. This is a required input, and it directly affects the node's output by determining the content of the generated preview images.
    - Comfy dtype: SEGS
    - Python dtype: List[Tuple[str, SEG]]

# Output types
- ui
    - The 'ui' parameter in the output is very important because it contains the user interface elements that will be displayed to the user. It includes a list of images representing the segmentation preview, which is crucial for user interaction and visual feedback.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]
- result
    - The 'result' parameter in the output is the collection of images processed by the node. It is the primary output of the node, containing the visual representation of the segmentation data, which is the main goal of the node's functionality.
    - Comfy dtype: COMBO[IMAGE]
    - Python dtype: Tuple[List[Image.Image], ...]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
