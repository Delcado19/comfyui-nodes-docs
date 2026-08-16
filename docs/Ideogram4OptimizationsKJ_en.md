# Documentation
- Class name: Ideogram4OptimizationsKJ
- Category: KJNodes/experimental
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

EXPERIMENTAL AND MAY CHANGE THE MODEL OUTPUT!! Reduces peak VRAM of the Ideogram4 forward. chunk_ffn splits the SwiGLU activations over the token dim; bf16_rope applies RoPE in the model dtype instead of upcasting to fp32. Both target the two largest transient tensors in the block.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- chunk_ffn
    - Chunk the feedforward activations over the sequence dim to cap the (B, L, hidden) intermediate.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- ffn_chunks
    - Number of chunks to split the feedforward sequence into. More chunks = lower peak, slightly more overhead.
    - Comfy dtype: INT
    - Python dtype: int
- ffn_seq_threshold
    - Only chunk when the token sequence length exceeds this (skips chunking for tiny sequences).
    - Comfy dtype: INT
    - Python dtype: int
- bf16_rope
    - Apply RoPE in the input dtype instead of fp32. ~Halves RoPE activation memory; matches the HF reference dtype.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
