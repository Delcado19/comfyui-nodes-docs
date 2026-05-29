# Documentation
- Class name: PromptControlSimple
- Category: promptcontrol
- Output node: False
- Repo Ref: https://github.com/asagi4/comfyui-prompt-control.git

These nodes encapsulate management and application of prompt schedules and model filtering, thereby controlling the generation process. They abstract prompt operation complexity and provide a structured method to refine model output based on specified conditions.

# Input types
## Required
- model
- Model parameters are critical because they define the AI system that processes input and generates output. They are the core component driving the node's operation.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
- Clip parameters are essential for managing the context and structure of input data, ensuring the model processes information within the intended framework.
    - Comfy dtype: CLIP
    - Python dtype: ClipModel
- positive
- Positive input serves as an affirmative prompt, guiding the model's generation toward the desired result and shaping output direction.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
- Negative input acts as a constraint, preventing the model from generating unwanted content and ensuring output aligns with specified boundaries.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- tags
- Labels classify and filter generated content, allowing targeted control over specific aspects of the output.
    - Comfy dtype: STRING
    - Python dtype: str
- start
- Start parameters define the starting point in the prompt schedule, determining when the prompt's influence begins.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end
- End parameters mark the endpoint in the prompt schedule, establishing when the prompt's influence ends.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
- Output model is the updated AI system that incorporates applied prompts and filters, ready to generate content that follows the specified guidelines.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
- Positive output represents refined prompts that have been processed and now form part of the model's guidance system.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict]]
- negative
- Negative output includes applied constraints, ensuring generated content adheres to defined limits.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict]]
- model_filtered
- Filtered model output is the AI system adjusted according to specified labels and percentage ranges, fine‑tuning its generation capability.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- pos_filtered
- Positive filter output denotes prompts filtered by labels and percentage ranges, focusing the model's generation on desired elements.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict]]
- neg_filtered
- Negative filter output denotes constraints refined through label and percentage range filtering, enhancing the model's ability to avoid unwanted content.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/asagi4/comfyui-prompt-control)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
