# Documentation
- Class name: SDParameterGenerator
- Category: SD Prompt Reader
- Output node: False
- Repo Ref: https://github.com/receyuki/comfyui-prompt-reader-node

SD Parameter Generator is a ComfyUI node registered by `custom_nodes.comfyui-prompt-reader-node`. The live metadata did not provide a longer description.

# Input types
## Required
- ckpt_name
    - The ckpt_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- vae_name
    - The vae_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- model_version
    - The model_version input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- config_name
    - The config_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- refiner_start
    - The refiner_start input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cfg
    - The cfg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - The scheduler input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- positive_ascore
    - The positive_ascore input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- negative_ascore
    - The negative_ascore input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- aspect_ratio
    - The aspect_ratio input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - The batch_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MODEL_NAME
    - The MODEL_NAME output is produced by this node.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: object
- VAE_NAME
    - The VAE_NAME output is produced by this node.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: object
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
    - The CLIP output is produced by this node.
    - Comfy dtype: CLIP
    - Python dtype: object
- VAE
    - The VAE output is produced by this node.
    - Comfy dtype: VAE
    - Python dtype: object
- SEED
    - The SEED output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- STEPS
    - The STEPS output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- REFINER_START_STEP
    - The REFINER_START_STEP output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- CFG
    - The CFG output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- SAMPLER_NAME
    - The SAMPLER_NAME output is produced by this node.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: object
- SCHEDULER
    - The SCHEDULER output is produced by this node.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: object
- POSITIVE_ASCORE
    - The POSITIVE_ASCORE output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- NEGATIVE_ASCORE
    - The NEGATIVE_ASCORE output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- WIDTH
    - The WIDTH output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- HEIGHT
    - The HEIGHT output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- BATCH_SIZE
    - The BATCH_SIZE output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- PARAMETERS
    - The PARAMETERS output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/receyuki/comfyui-prompt-reader-node)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
