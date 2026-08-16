# Documentation
- Class name: WanVideoTextEncodeCached
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Encodes text prompts into text embeddings. This node loads and completely unloads the T5 after done,  
leaving no VRAM or RAM imprint. If prompts have been cached before T5 is not loaded at all.  
negative output is meant to be used with NAG, it contains only negative prompt embeddings.  

Additionally you can provide a Qwen LLM model to extend the positive prompt with either one  
of the original Wan templates or a custom system prompt.

# Input types
## Required
- model_name
    - These models are loaded from 'ComfyUI/models/text_encoders'
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- precision
    - The precision input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- positive_prompt
    - The positive_prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - The negative_prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- quantization
    - optional quantization method
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- use_disk_cache
    - Cache the text embeddings to disk for faster re-use, under the custom_nodes/ComfyUI-WanVideoWrapper/text_embed_cache directory
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- device
    - Device to run the text encoding on.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- extender_args
    - Use this node to extend the prompt with additional text.
    - Comfy dtype: WANVIDEOPROMPTEXTENDER_ARGS
    - Python dtype: object

# Output types
- text_embeds
    - The text embeddings for both prompts
    - Comfy dtype: WANVIDEOTEXTEMBEDS
    - Python dtype: object
- negative_text_embeds
    - The text embeddings for the negative prompt only (for NAG)
    - Comfy dtype: WANVIDEOTEXTEMBEDS
    - Python dtype: object
- positive_prompt
    - Positive prompt to display prompt extender results
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
