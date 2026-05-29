# Documentation
- Class name: ipadapterApplyAdvanced
- Category: EasyUse/Adapter
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node facilitates advanced applications of image processing models, allowing users to seamlessly integrate various presets, weights, and other parameters to refine and customize the transformation process. It emphasizes adaptability and control, providing an advanced interface for users to achieve complex image manipulations without delving into the details of the underlying algorithms.

# Input types
## Required
- model
    - The model parameters are crucial as they define the core of the image processing framework. They determine the type of transformation and analysis to be performed on the input image, significantly influencing the quality and characteristics of the final output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- image
    - The image parameter is the main input for the node operation. Its content and format are critical in determining how the model processes and transforms it, ultimately shaping the outcome of the image operation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
- preset
    - The preset parameter allows users to select predefined settings to adjust the model's behavior for specific use cases. It simplifies the process by providing an optimized configuration, ensuring the node operates effectively for its intended purpose.
    - Comfy dtype: COMBO
    - Python dtype: str
- lora_strength
    - The lora_strength parameter fine-tunes the model's adaptability to the input image, allowing subtle adjustments to improve the fidelity and consistency of the final output. It plays a key role in achieving a balance between model generalization and customization.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The output model represents an enhanced or improved version of the input model after processing by the node. It contains the results of the image operation, reflecting the node's effectiveness in achieving the desired transformation.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- tiles
    - The tiles output consists of segmented parts of the input image, each processed through the application of the model and parameters. It provides a detailed view of the image operation at a granular level, demonstrating the node's ability to handle complex transformations.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image or torch.Tensor]
- masks
    - The masks output is a series of binary matrices corresponding to the processed tiles. It plays an important role in isolating and highlighting specific areas of the transformed image, demonstrating the node's precision and control in the editing process.
    - Comfy dtype: MASK
    - Python dtype: List[PIL.Image or torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
