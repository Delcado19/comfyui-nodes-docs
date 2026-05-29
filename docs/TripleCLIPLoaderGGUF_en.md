# Documentation
- Class name: TripleCLIPLoaderGGUF
- Display name: TripleCLIPLoader (GGUF)
- Category: bootleg
- Output node: False
- Repo Ref: https://github.com/city96/ComfyUI-GGUF

Loads three CLIP models in GGUF format and merges them into a single CLIP output. This node is used in the bootleg category for specialized workflows requiring quantized CLIP models.

# Input types
## Required
- clip_name1
    - Filename of the first GGUF-format CLIP model to load.
    - Comfy dtype: COMBO
    - Options: populated at runtime from installed files
- clip_name2
    - Filename of the second GGUF-format CLIP model to load.
    - Comfy dtype: COMBO
    - Options: populated at runtime from installed files
- clip_name3
    - Filename of the third GGUF-format CLIP model to load.
    - Comfy dtype: COMBO
    - Options: populated at runtime from installed files

# Output types
- CLIP
    - The combined CLIP model output from the three loaded GGUF CLIP models.
    - Comfy dtype: CLIP

# Source code
[View source repository on GitHub](https://github.com/city96/ComfyUI-GGUF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
