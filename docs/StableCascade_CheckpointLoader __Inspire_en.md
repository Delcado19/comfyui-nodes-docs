
# Documentation
- Class name: StableCascade_CheckpointLoader __Inspire
- Category: InspirePack/Backend
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack

This node aims to efficiently manage and load model checkpoints using a cascading approach to optimize the process, leveraging a caching mechanism to avoid redundant loading. It supports conditional loading based on cache availability and specific requirements, thereby improving performance and resource utilization in model deployment scenarios.

# Input types
## Required
- stage_b
    - Specifies the checkpoint for the 'b' stage model. This parameter is critical for identifying and loading the correct model and can optionally leverage caching for efficiency.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- key_opt_b
    - An optional key for the 'b' stage checkpoint, used to uniquely identify it in the cache, enabling precise cache management and retrieval.
    - Comfy dtype: STRING
    - Python dtype: str
- stage_c
    - Specifies the checkpoint for the 'c' stage model. Similar to 'stage_b', it is critical for loading the appropriate model and can leverage caching for optimization.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- key_opt_c
    - An optional key for the 'c' stage checkpoint, supporting specific cache operations and ensuring efficient model management.
    - Comfy dtype: STRING
    - Python dtype: str
- cache_mode
    - Determines the caching strategy (e.g., none, stage_b, stage_c, all), affecting how checkpoints are stored or retrieved from the cache to optimize loading time.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- b_model
    - The model loaded from the 'b' stage checkpoint, ready for use.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- b_vae
    - The VAE component associated with the 'b' stage model.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- c_model
    - The model loaded from the 'c' stage checkpoint, ready for use.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- c_vae
    - The VAE component associated with the 'c' stage model.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- c_clip_vision
    - The CLIP vision component loaded alongside the 'c' stage model, facilitating multimodal operations.
    - Comfy dtype: CLIP_VISION
    - Python dtype: torch.nn.Module
- clip
    - The CLIP model component, supporting various tasks including text and image understanding.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- key_b
    - The cache key associated with the 'b' stage model, reflecting its cache status or identifier.
    - Comfy dtype: STRING
    - Python dtype: str
- key_c
    - The cache key associated with the 'c' stage model, reflecting its cache status or identifier.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
