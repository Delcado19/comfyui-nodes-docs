# Documentation
- Class name: WanVideoTextEncode
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Encodes text prompts into text embeddings. For rudimentary prompt travel you can input multiple prompts separated by '|', they will be equally spread over the video length

# Input types
## Required
- positive_prompt
    - The positive_prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - The negative_prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- t5
    - The t5 input is used by this node during execution.
    - Comfy dtype: WANTEXTENCODER
    - Python dtype: object
- force_offload
    - The force_offload input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- model_to_offload
    - Model to move to offload_device before encoding
    - Comfy dtype: WANVIDEOMODEL
    - Python dtype: object
- use_disk_cache
    - Cache the text embeddings to disk for faster re-use, under the custom_nodes/ComfyUI-WanVideoWrapper/text_embed_cache directory
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- device
    - Device to run the text encoding on.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- text_embeds
    - The text_embeds output is produced by this node.
    - Comfy dtype: WANVIDEOTEXTEMBEDS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
