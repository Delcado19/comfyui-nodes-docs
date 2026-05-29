# Documentation
- Class name: pipeEdit
- Category: EasyUse/Pipe
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The pipeEdit node is a comprehensive tool for refining and adjusting elements within a processing workflow. It aims to simplify the modification of conditions, integration of models, and handling of various data types, ensuring seamless operation of complex workflows.

# Input types
## Required
- clip_skip
- This parameter determines the skip level of the CLIP model in the pipeline, crucial for controlling CLIP's overall impact.
    - Comfy dtype: INT
    - Python dtype: int
- conditioning_mode
- The adjustment mode defines the strategy for applying and combining various conditions in the pipeline, affecting the coherence of the final output and its alignment with the intended direction.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- optional_positive
- Positive adjustment text is essential for guiding the generation process toward the desired outcome. It shapes the creative direction of the model output.
    - Comfy dtype: STRING
    - Python dtype: str
- positive_token_normalization
- This parameter set determines how tokens in the positive adjustment text are normalized, significantly affecting the precision and relevance of the generated content.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- pipe
- The updated pipeline object encapsulates all modifications and configurations made by the pipeEdit node, serving as the foundation for subsequent processing steps.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- model
- Model parameters represent the neural network models used in the pipeline; updating them ensures optimal performance and customized output for specific tasks.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
