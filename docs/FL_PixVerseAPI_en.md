# Documentation
- Class name: FL_PixVerseAPI
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
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - The negative_prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- duration
    - The duration input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- quality
    - The quality input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- motion_mode
    - The motion_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - The batch_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- nth_frame
    - The nth_frame input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- use_transition
    - The use_transition input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- first_frame_img
    - The first_frame_img input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- last_frame_img
    - The last_frame_img input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- frames_1
    - The frames_1 output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- frames_2
    - The frames_2 output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- frames_3
    - The frames_3 output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- frames_4
    - The frames_4 output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- frames_5
    - The frames_5 output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- video_urls
    - The video_urls output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- status_msg
    - The status_msg output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- credit_balance
    - The credit_balance output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
