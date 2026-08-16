# Documentation
- Class name: AILab_QwenVL
- Category: 🧪AILab/QwenVL
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-QwenVL

ComfyUI-QwenVL custom node: Integrates the Qwen-VL series, including Qwen2.5-VL and the latest Qwen3-VL, with GGUF support for advanced multimodal AI in text generation, image understanding, and video analysis.

# Input types
## Required
- model_name
    - Pick the Qwen-VL checkpoint. First run downloads weights into models/LLM/Qwen-VL, so leave disk space.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- quantization
    - Precision vs VRAM. FP16 gives the best quality if memory allows; 8-bit suits 8–16 GB GPUs; 4-bit fits 6 GB or lower but is slower.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- attention_mode
    - auto tries flash-attn v2 when installed and falls back to SDPA. Only override when debugging attention backends.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- preset_prompt
    - Built-in instruction describing how Qwen-VL should analyze the media input.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- custom_prompt
    - Optional override—when filled it completely replaces the preset template.
    - Comfy dtype: STRING
    - Python dtype: str
- max_tokens
    - Maximum number of new tokens to decode. Larger values yield longer answers but consume more time and memory.
    - Comfy dtype: INT
    - Python dtype: int
- keep_model_loaded
    - Keeps the model resident in VRAM/RAM after the run so the next prompt skips loading.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - Seed controlling sampling and frame picking; reuse it to reproduce results.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- video
    - The video input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- RESPONSE
    - The RESPONSE output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/1038lab/ComfyUI-QwenVL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
