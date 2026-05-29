# Documentation
- Class name: ControlNetApplyAdvancedSEGS
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The ControlNetApplyAdvancedSEGS node is designed to enhance the segmentation process by applying a control network to refine segmentation masks. It adjusts the influence of the control network across the entire image, ensuring smooth transitions from one region to another without visible seams. This node is particularly useful in scenarios requiring precise control over segmentation output.

# Input types
## Required
- segs
    - The 'segs' parameter is critical because it provides the initial segmentation data that the node will process. It directly affects the node's execution by determining the starting point for control network refinement.
    - Comfy dtype: SEGS
    - Python dtype: List[Tuple[Image, List[NamedTuple], BoundingBox, Label, ControlNetAdvancedWrapper]]
- control_net
    - The 'control_net' parameter defines the control network that will be used to guide the segmentation process. It is essential to the node's functionality, as it determines how the segmentation mask is refined.
    - Comfy dtype: CONTROL_NET
    - Python dtype: torch.nn.Module
- strength
    - The 'strength' parameter adjusts the intensity of the control network's influence on the segmentation. It is a key factor in determining the final quality of the segmentation output, allowing fine-tuning of the control network's impact.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - The 'start_percent' parameter specifies the starting percentage of the control network effect. It is important for controlling the transition area at the beginning of the segmentation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The 'end_percent' parameter defines the ending percentage of the control network effect. It is critical for managing the transition area at the end of the segmentation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- segs_preprocessor
    - The optional 'segs_preprocessor' parameter allows preprocessing of the segmentation data before it is fed into the control network. It can improve the node's performance by preparing the data in a way that is more conducive to the control network refinement process.
    - Comfy dtype: SEGS_PREPROCESSOR
    - Python dtype: Callable
- control_image
    - The optional 'control_image' parameter provides an additional image that can be used to influence the control network's decisions. It is particularly useful when additional context is needed for more accurate segmentation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Output types
- segs
    - The 'segs' output contains the refined segmentation data after applying the control network. It represents the final result of the node's operation and is important for downstream processing.
    - Comfy dtype: SEGS
    - Python dtype: List[Tuple[Image, List[NamedTuple], BoundingBox, Label, ControlNetAdvancedWrapper]]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
