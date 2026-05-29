# Documentation
- Class name: LLLiteLoader
- Category: loaders
- Output node: False
- Repo Ref: https://github.com/kohya-ss/ControlNet-LLLite-ComfyUI.git

The LLLiteLoader class is designed to efficiently load and process models, enabling the integration of control mechanisms into the model architecture. It abstracts the complexity of model loading and conditioning, focusing on seamlessly adapting the model to specific conditions and requirements.

# Input types
## Required
- model
    - The model parameter is crucial because it defines the base architecture that will be conditioned and modified. It is the starting point of LLLiteLoader functionality, determining the type of model to be processed.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model_name
    - The model name parameter is essential for identifying the specific model file to load. It guides LLLiteLoader to find the correct model in the file system, ensuring the right model is selected for processing.
    - Comfy dtype: STRING
    - Python dtype: str
- cond_image
    - The cond_image parameter acts as conditioning input, influencing the model's behavior and output. It is a key component in the model adaptation process, allowing fine-tuning based on visual context.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- strength
    - The strength parameter adjusts the intensity of the conditioning effect on the model. It plays an important role in determining the degree of influence of the conditioning input on the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- steps
    - The steps parameter defines the number of intervals used in the conditioning process. It is important for the progression of the model and the distribution of the conditioning effect throughout the process.
    - Comfy dtype: INT
    - Python dtype: int
- start_percent
    - The start_percent parameter specifies the start of the conditioning interval, determining when the model begins to adapt to the conditioning input. It is a key factor in controlling the timing of the model's response.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The end_percent parameter marks the end of the conditioning interval, defining when the model stops adapting to the conditioning input. It is key in determining the duration of the model's response.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The output model is the result of LLLiteLoader processing, containing the conditioning input and adjustments. It represents the final state of the model after the entire conditioning process, ready for further use or evaluation.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/kohya-ss/ControlNet-LLLite-ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
