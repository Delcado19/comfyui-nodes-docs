
# Documentation
- Class name: SUPIR_conditioner
- Category: SUPIR
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SUPIR_conditioner node prepares input data for the SUPIR model, readying it for subsequent processing or generation tasks. It integrates various conditioning elements, such as positive and negative prompts, to align the model’s output with specific desired results.

# Input types
## Required
- SUPIR_model
    - Represents the SUPIR model to be conditioned, the core component of the conditioning process.
    - Comfy dtype: SUPIRMODEL
    - Python dtype: SUPIRModel
- latents
    - The latent representation of the input data, modified or utilized during conditioning to influence the model’s output.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, Any]
- positive_prompt
    - A text prompt that guides the model toward a positive or desired direction in generation or processing, affecting the conditioning outcome.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - A text prompt that guides the model to avoid certain patterns or themes, balancing the positive prompt during conditioning.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- captions
    - Optional caption text that can provide additional context or guidance for the conditioning process, further customizing the output.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- positive
    - Data conditioned for positive results, preparing the SUPIR model for further processing.
    - Comfy dtype: SUPIR_cond_pos
    - Python dtype: Dict[str, Any]
- negative
    - Data conditioned to avoid certain patterns or themes, serving as a balance during generation.
    - Comfy dtype: SUPIR_cond_neg
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
