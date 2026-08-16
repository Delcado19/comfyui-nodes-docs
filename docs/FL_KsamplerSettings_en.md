# Documentation
- Class name: FL_KsamplerSettings
- Category: 🏵️Fill Nodes/Ksamplers
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- Aspect_Ratio
    - The Aspect_Ratio input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- rotation
    - The rotation input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- batch
    - The batch input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- Pass_1_steps
    - The Pass_1_steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- Pass_2_steps
    - The Pass_2_steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- Pass_1_CFG
    - The Pass_1_CFG input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Pass_2_CFG
    - The Pass_2_CFG input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Pass_2_denoise
    - The Pass_2_denoise input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale_factor
    - The scale_factor input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler
    - The sampler input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - The scheduler input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
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
- Pass_1_steps
    - The Pass_1_steps output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- Pass_2_steps
    - The Pass_2_steps output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- Pass_1_CFG
    - The Pass_1_CFG output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Pass_2_CFG
    - The Pass_2_CFG output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Pass_2_denoise
    - The Pass_2_denoise output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- SCALE
    - The SCALE output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- SAMPLER
    - The SAMPLER output is produced by this node.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: object
- SCHEDULER
    - The SCHEDULER output is produced by this node.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
