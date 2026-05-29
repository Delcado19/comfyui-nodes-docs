# Documentation
- Class name: DualCLIPLoaderGGUF
- Display name: DualCLIPLoader (GGUF)
- Category: bootleg
- Output node: False
- Repo Ref: https://github.com/city96/ComfyUI-GGUF

Loads two CLIP models in GGUF format and returns a combined CLIP object for use in text encoding. Selects between two clip files and a model type to configure the loader.

# Input types
## Required
- clip_name1
    - First GGUF-format CLIP model file to load.
    - Comfy dtype: COMBO
    - Options: populated at runtime from installed files
- clip_name2
    - Second GGUF-format CLIP model file to load.
    - Comfy dtype: COMBO
    - Options: populated at runtime from installed files
- type
    - Model type selection that configures how the two CLIP models are combined.
    - Comfy dtype: COMBO
    - Options: `sdxl`, `sd3`, `flux`, `hunyuan_video`, `hidream`, `hunyuan_image`, `hunyuan_video_15`, `kandinsky5`, `kandinsky5_image`, `ltxv`, `newbie`, `ace`

# Output types
- CLIP
    - The loaded and combined CLIP model ready for text encoding.
    - Comfy dtype: CLIP

# Source code
[View source repository on GitHub](https://github.com/city96/ComfyUI-GGUF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
