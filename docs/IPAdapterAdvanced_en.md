# Documentation
- Class name: IPAdapterAdvanced
- Category: ipadapter
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The IPAdapterAdvanced node is designed to apply advanced image processing techniques using the IPAdapter model. It intelligently combines different embeddings and weights to enhance the model's performance on tasks such as style and composition transfer. This node plays a key role in adapting the model to specific image processing requirements, ensuring the output meets desired aesthetic and technical standards.

# Input types
## Required
- model
    - Model parameters are critical for the IPAdapterAdvanced node because they define the baseline model on which image processing techniques will be applied. They directly affect the node's execution and the quality of the processed image.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- ipadapter
    - The ipadapter parameter is a key component of the node's functionality, providing the necessary adaptation and configuration for image processing tasks. It determines how the model interacts with input images to achieve the desired results.
    - Comfy dtype: IPADAPTER
    - Python dtype: Dict[str, Any]
- image
    - The image parameter is essential because it represents the input image that the node will process. The image's quality and characteristics significantly influence the node's operation and final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- weight
    - The weight parameter allows users to adjust the impact of image processing on the model. This is important for fine‑tuning the node's performance to achieve the desired balance between the original and processed images.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The output model of the IPAdapterAdvanced node is a processed model that incorporates advanced image processing techniques. It is important because it represents the final state of the model after all transformations have been applied.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
