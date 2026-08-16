# Documentation
- Class name: FL_GeminiVideoCaptioner
- Category: 🏵️Fill Nodes/AI
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- api_key
    - The api_key input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- frames_per_second
    - The frames_per_second input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_duration_minutes
    - The max_duration_minutes input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- process_audio
    - The process_audio input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- temperature
    - The temperature input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_output_tokens
    - The max_output_tokens input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- top_p
    - The top_p input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- top_k
    - The top_k input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- thinking_level
    - The thinking_level input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- video_path
    - The video_path input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- caption
    - The caption output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- sampled_frame
    - The sampled_frame output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
