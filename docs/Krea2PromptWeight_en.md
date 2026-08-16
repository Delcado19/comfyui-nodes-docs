# Documentation
- Class name: Krea2PromptWeight
- Category: KJNodes/experimental
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Per-token prompt weighting for Krea2 (K2) via attention value scaling. Use (word:-1) to remove a concept, (word:1.5) to emphasize one -- works through the Qwen3-VL encoder where normal weighting doesn't. Outputs the patched model + conditioning; set the sampler CFG to 1.0.

# Input types
## Required
- clip
    - The clip input is used by this node during execution.
    - Comfy dtype: CLIP
    - Python dtype: object
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- text
    - Prompt with per-token weights in parentheses, e.g. (word:-1) removes/represses a concept, (word:2) emphasizes it, plain text = 1.0. Works on Krea2 where ComfyUI's normal (word:weight) does nothing (the Qwen3-VL LLM encoder ignores it). weight<1 scales the token's attention VALUE (subtracts/removes at <0); weight>1 boosts how much the image ATTENDS to the token (adds more of it). Set sampler CFG to 1.0.
    - Comfy dtype: STRING
    - Python dtype: str
- strength
    - Global multiplier on the weighting effect. Effect compounds over all 28 blocks; lower if results break up, raise for a stronger effect. Removal (weight<0) is the reliable direction; emphasis (weight>1) works but is looser.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- conditioning
    - The conditioning output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
