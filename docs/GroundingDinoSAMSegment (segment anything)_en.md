# Documentation
- Class name: GroundingDinoSAMSegment
- Category: segment_anything
- Output node: False
- Repo Ref: https://github.com/storyicon/comfyui_segment_anything

The GroundingDinoSAMSegment node processes images through text-prompt-based image segmentation. It leverages the capabilities of SAM (Segment Anything Model) and GroundingingDino models to identify and isolate objects in images, providing segmented images and their corresponding masks. This node is particularly suitable for applications requiring object-level understanding from both visual and textual inputs.

# Input types
## Required
- sam_model
    - The SAM model is essential for the segmentation process, providing the core functionality for identifying and separating objects in images. It plays a critical role in the node's ability to perform precise segmentation based on input images and prompts.
    - Comfy dtype: SAM_MODEL
    - Python dtype: torch.nn.Module
- grounding_dino_model
    - The GroundingDino model is used to predict bounding boxes of objects in images based on text prompts. It is a key component of the initial object detection step, laying the foundation for the subsequent segmentation process.
    - Comfy dtype: GROUNDING_DINO_MODEL
    - Python dtype: torch.nn.Module
- image
    - The input image is the primary data source for the node's operation. It is the object of the segmentation process, and the node's goal is to identify and separate the objects contained within it based on the provided prompts.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- prompt
    - The prompt serves as a textual description that guides the node in identifying objects of interest in the image. It is an important input that helps the node focus its segmentation efforts on relevant parts of the image.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- threshold
    - The threshold parameter is used to determine the confidence level for object detection. It influences the node's decision on which objects to segment based on grounding predictions, allowing control over which objects are included in the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- IMAGE
    - The output image is the result of the segmentation process, showing the objects separated from the input image. It represents the node's primary visual output, highlighting successful segmentation based on the provided prompts and model capabilities.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - The mask output provides a binary representation of the segmentation, outlining the precise regions in the image corresponding to the segmented objects. It is a key component for applications requiring detailed object delineation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/storyicon/comfyui_segment_anything)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
