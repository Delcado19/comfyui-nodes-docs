# Documentation
- Class name: ipadapterApply
- Category: EasyUse/Adapter
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The ipadapterApply node aims to simplify the process of applying various image processing adapters to input images, using model and preset configurations to achieve desired transformations. It emphasizes adaptability and ease of use, providing users with a structured interface to experiment with different settings and achieve optimal results without deep knowledge of complex model-specific details.

# Input types
## Required
- model
    - The model parameter is critical because it defines the underlying image processing model used to apply transformations to the input image. It is the foundation of the node's functionality, directly affecting the quality and nature of the output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- image
    - The image input is the object processed by the node. Its content and format are crucial in determining how the model interprets and transforms it, ultimately shaping the final result.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
- preset
    - The preset parameter determines the specific transformation preset to apply, guiding the model to process the image according to the selected style or effect. This is a key factor in achieving the desired visual outcome.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- lora_strength
    - The lora_strength parameter adjusts the intensity of the style transfer process, allowing fine-tuning of the visual output to match user preferences. It plays an important role in the artistic aspect of image transformation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The output model represents the modified image processing model after the selected preset and other parameters have been applied. It is the crystallization of the node's processing and serves as the foundation for further image transformation or analysis.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- tiles
    - The tiles output provides a segmented view of the processed image, allowing detailed inspection and potential use in further image manipulation. It is an additional layer of output, enhancing the node's utility in image analysis and editing.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image or torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
