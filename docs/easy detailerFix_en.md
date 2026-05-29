# Documentation
- Class name: detailerFix
- Category: EasyUse/Fix
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The detailerFix node aims to enhance image details using advanced models and algorithms. It focuses on refining visual elements to improve overall quality and clarity. Its main goal is to provide a simple, effective detail enhancement solution without requiring extensive image processing knowledge.

# Input types
## Required
- pipe
    - The pipe parameter is required because it carries all necessary information and settings for the detailerFix node to perform its function. It includes the model, image, and other settings that determine how detail enhancement is applied.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- image_output
    - The image_output parameter determines how the processed result image is handled. It allows users to choose preview, save, or a combination, thus controlling the output flow.
    - Comfy dtype: COMBO
    - Python dtype: str
- link_id
    - When image_output is set to 'Sender' or 'Sender/Save', link_id is crucial to the node's operation. It establishes the connection for image transfer, ensuring the processed image reaches the correct destination.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- save_prefix
    - The save_prefix parameter defines a common prefix for saved image files. This helps organize output, making it easier for users to locate and manage enhanced images.
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - The model parameter provides the model needed for the detail enhancement process. This is especially important when the pipe parameter does not include a model, ensuring the node can access the required model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- prompt
    - The prompt parameter supplies additional information or instructions that can guide the detail enhancement process. It may include specific details or preferences the user wants considered during execution.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The extra_pnginfo parameter contains supplementary data that can be used to fine‑tune the detail enhancement process. It offers extra context or options to improve the quality of the output image.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]
- my_unique_id
    - The my_unique_id parameter is used to track and manage the processing of individual image details. It helps associate outputs with specific requests, ensuring accuracy and organization.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: int

# Output types
- pipe
    - The pipe output is a comprehensive structure containing the enhanced image and all related information from the input pipe. It serves as the data channel, ensuring results are correctly passed along the pipeline.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- image
    - The image output is the primary result of the detailerFix node, i.e., the enhanced image. It is the final product of the detail enhancement process and is intended to be the user's end result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- cropped_refined
    - The cropped_refined output is a cropped version of the enhanced image for better focus and clarity. It highlights areas that have been refined and improved, clearly demonstrating the node's effectiveness.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- cropped_enhanced_alpha
    - The cropped_enhanced_alpha output is a specialized version of the enhanced image that includes an alpha channel representing transparency. This output is particularly useful for applications requiring image layering or compositing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
