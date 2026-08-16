# Documentation
- Class name: AILab_QwenVL_PromptEnhancer
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
- use_torch_compile
    - Enable torch.compile('reduce-overhead') on supported CUDA/Torch 2.1+ builds for extra throughput after the first compile.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- device
    - Choose where to run the model: auto, cpu, mps, or cuda:x for multi-GPU systems.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- prompt_text
    - Prompt text to enhance. Leave blank to just emit the preset instruction.
    - Comfy dtype: STRING
    - Python dtype: str
- enhancement_style
    - The enhancement_style input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- custom_system_prompt
    - The custom_system_prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- max_tokens
    - The max_tokens input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- temperature
    - The temperature input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- top_p
    - The top_p input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- repetition_penalty
    - The repetition_penalty input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- keep_model_loaded
    - The keep_model_loaded input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- ENHANCED_OUTPUT
    - The ENHANCED_OUTPUT output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/1038lab/ComfyUI-QwenVL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
