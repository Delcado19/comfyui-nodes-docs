# Documentation
- Class name: CLIPLoaderGGUF
- Display name: CLIPLoader (GGUF)
- Category: bootleg
- Output node: False
- Repo Ref: https://github.com/city96/ComfyUI-GGUF

Loads a CLIP model in GGUF format for use in the workflow. Selects the model file and model type to configure how the CLIP encoder is initialized.

# Input types
## Required
- clip_name
    - The filename of the GGUF-format CLIP model to load from the models directory.
    - Comfy dtype: COMBO
    - Options: populated at runtime from installed files
- type
    - The model type/architecture variant that determines how the GGUF CLIP weights are interpreted and initialized.
    - Comfy dtype: COMBO
    - Options: `stable_diffusion`, `stable_cascade`, `sd3`, `stable_audio`, `mochi`, `ltxv`, `pixart`, `cosmos`, `lumina2`, `wan`, `hidream`, `chroma`, `ace`, `omnigen2`, `qwen_image`, `hunyuan_image`, `flux2`, `ovis`, `longcat_image`, `cogvideox`

# Output types
- CLIP
    - The loaded CLIP model object, ready for encoding text prompts.
    - Comfy dtype: CLIP

# Source code
[View source repository on GitHub](https://github.com/city96/ComfyUI-GGUF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
