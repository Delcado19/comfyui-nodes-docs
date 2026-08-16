# Documentation
- Class name: Krea2EditGroundedEncode
- Category: krea2edit
- Output node: False
- Repo Ref: https://github.com/lbouaraba/comfyui-krea2edit

Encodes the edit instruction grounded on the source image (training-matched semantic path).

# Input types
## Required
- clip
    - The clip input is used by this node during execution.
    - Comfy dtype: CLIP
    - Python dtype: object
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_b
    - 2nd reference (subject) for multi-ref LoRAs; vision blocks in training order: scene, subject
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- grounding_px
    - cap longest side fed to Qwen3-VL; 0 = native
    - Comfy dtype: INT
    - Python dtype: int
- system_prompt
    - advanced (optional): override the grounding system prompt (empty = training default). Steers what the vision encoder attends to, e.g. facial identity detail.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- CONDITIONING
    - The CONDITIONING output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/lbouaraba/comfyui-krea2edit)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
