
# Documentation
- Class name: Moondream Interrogator
- Category: Hangover
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Moondream Interrogator node uses the Moondream vision-language model to generate text descriptions based on input images and prompts. It dynamically adapts to model revisions, supports device selection, and adjusts response diversity via temperature settings.

# Input types
## Required
- image
    - Input image tensor, analyzed and described by the Moondream model. This is the key input for generating text output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- prompt
    - Text prompt used to guide the model in generating image descriptions. It influences the context and specific content of the generated text.
    - Comfy dtype: STRING
    - Python dtype: str
- separator
    - String used to separate multiple descriptions in the output, making boundaries between different generated texts clear.
    - Comfy dtype: STRING
    - Python dtype: str
- model_revision
    - Specifies the revision of the Moondream model to use, allowing selection of different model versions for varied outputs.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- temperature
    - Controls randomness in generated descriptions, affecting output variability and creativity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- device
    - Determines the computational device (CPU or GPU) on which the model runs, affecting performance and efficiency.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- trust_remote_code
    - A security setting that must be enabled to use remote code execution in the Moondream model.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- description
    - Text description generated for the input image, influenced by the provided prompt and model settings.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
