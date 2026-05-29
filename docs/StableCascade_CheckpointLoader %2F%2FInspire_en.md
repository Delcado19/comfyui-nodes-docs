# Documentation
- Class name: StableCascade_CheckpointLoader
- Category: InspirePack/Backend
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node efficiently loads and manages checkpoints from a specified directory, categorizes them into different stages, and facilitates retrieval of models and related data. It enhances the workflow with caching, which can significantly speed up repeated tasks by reusing previously loaded checkpoints.

# Input types
## Required
- stage_b
    - The stage_b parameter specifies the checkpoint file name for the second cascade stage. It is crucial for the node to identify the correct checkpoint for loading and caching, directly affecting subsequent processing and results.
    - Comfy dtype: STRING
    - Python dtype: str
- stage_c
    - The stage_c parameter indicates the checkpoint file for the third cascade stage. It is essential for the node to correctly load the advanced model and related data, influencing the final output and model utilization effectiveness.
    - Comfy dtype: STRING
    - Python dtype: str
- cache_mode
    - The cache_mode parameter controls the node's caching behavior. It determines whether to load checkpoints from the cache or directly from the file system, and whether to cache loaded checkpoints for future use. This parameter significantly impacts the node's performance and efficiency.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- key_opt_b
    - The key_opt_b parameter serves as an optional identifier for the checkpoint. It allows custom naming, useful for referencing a specific checkpoint in the cache. If provided, it is used as the cache key; otherwise, 'stage_b' is used.
    - Comfy dtype: STRING
    - Python dtype: str
- key_opt_c
    - The key_opt_c parameter is an alternative key for the stage_c checkpoint. It lets users tag the checkpoint with a unique name for better cache management and referencing. If left empty, 'stage_c' is used as the default key.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- b_model
    - The b_model output represents the second‑stage model loaded from the checkpoint. It is a key component for further processing and analysis, containing the learned parameters and architecture required for model functionality.
    - Comfy dtype: MODEL
    - Python dtype: Any
- b_vae
    - The b_vae output provides the variational auto‑encoder (VAE) associated with the second stage. It plays an important role in generating new data points or reconstructing existing ones, essential for tasks involving generative models.
    - Comfy dtype: VAE
    - Python dtype: Any
- c_model
    - The c_model output is the third‑stage model retrieved from the checkpoint. It is critical in the overall workflow, as it is typically more refined than the second‑stage model and can perform higher‑level tasks.
    - Comfy dtype: MODEL
    - Python dtype: Any
- c_vae
    - The c_vae output denotes the variational auto‑encoder (VAE) for the third stage. It is vital for tasks requiring advanced data generation and manipulation capabilities, such as feature extraction and dimensionality reduction.
    - Comfy dtype: VAE
    - Python dtype: Any
- clip_vision
    - The clip_vision output is a specialized component of the third‑stage model focused on vision‑related tasks. It is important for applications involving image processing and understanding, providing a solid foundation for visual data analysis.
    - Comfy dtype: CLIP_VISION
    - Python dtype: Any
- clip
    - The clip output represents the contextual language model (CLM) associated with the second stage. It is crucial for tasks needing natural language understanding and generation, offering powerful tools for text‑based applications.
    - Comfy dtype: CLIP
    - Python dtype: Any
- key_b
    - The key_b output is the identifier used to cache the second‑stage checkpoint. It is important for effective cache management, allowing quick retrieval and reuse of the checkpoint in subsequent operations.
    - Comfy dtype: STRING
    - Python dtype: str
- key_c
    - The key_c output corresponds to the cache identifier for the third‑stage checkpoint. It plays a key role in cache management, ensuring efficient access to the advanced model and its components.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class StableCascade_CheckpointLoader:

    @classmethod
    def INPUT_TYPES(s):
        ckpts = folder_paths.get_filename_list('checkpoints')
        default_stage_b = ''
        default_stage_c = ''
        sc_ckpts = [x for x in ckpts if 'cascade' in x.lower()]
        sc_b_ckpts = [x for x in sc_ckpts if 'stage_b' in x.lower()]
        sc_c_ckpts = [x for x in sc_ckpts if 'stage_c' in x.lower()]
        if len(sc_b_ckpts) == 0:
            sc_b_ckpts = [x for x in ckpts if 'stage_b' in x.lower()]
        if len(sc_c_ckpts) == 0:
            sc_c_ckpts = [x for x in ckpts if 'stage_c' in x.lower()]
        if len(sc_b_ckpts) == 0:
            sc_b_ckpts = ckpts
        if len(sc_c_ckpts) == 0:
            sc_c_ckpts = ckpts
        if len(sc_b_ckpts) > 0:
            default_stage_b = sc_b_ckpts[0]
        if len(sc_c_ckpts) > 0:
            default_stage_c = sc_c_ckpts[0]
        return {'required': {'stage_b': (ckpts, {'default': default_stage_b}), 'key_opt_b': ('STRING', {'multiline': False, 'placeholder': "If empty, use 'stage_b' as the key."}), 'stage_c': (ckpts, {'default': default_stage_c}), 'key_opt_c': ('STRING', {'multiline': False, 'placeholder': "If empty, use 'stage_c' as the key."}), 'cache_mode': (['none', 'stage_b', 'stage_c', 'all'], {'default': 'none'})}}
    RETURN_TYPES = ('MODEL', 'VAE', 'MODEL', 'VAE', 'CLIP_VISION', 'CLIP', 'STRING', 'STRING')
    RETURN_NAMES = ('b_model', 'b_vae', 'c_model', 'c_vae', 'c_clip_vision', 'clip', 'key_b', 'key_c')
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/Backend'

    def doit(self, stage_b, key_opt_b, stage_c, key_opt_c, cache_mode):
        if key_opt_b.strip() == '':
            key_b = stage_b
        else:
            key_b = key_opt_b.strip()
        if key_opt_c.strip() == '':
            key_c = stage_c
        else:
            key_c = key_opt_c.strip()
        if cache_mode in ['stage_b', 'all']:
            if key_b not in cache:
                res_b = nodes.CheckpointLoaderSimple().load_checkpoint(ckpt_name=stage_b)
                cache[key_b] = ('ckpt', (False, res_b))
                print(f"[Inspire Pack] StableCascade_CheckpointLoader: Ckpt '{stage_b}' is cached to '{key_b}'.")
            else:
                (_, (_, res_b)) = cache[key_b]
                print(f"[Inspire Pack] StableCascade_CheckpointLoader: Cached ckpt '{key_b}' is loaded. (Loading skip)")
            (b_model, clip, b_vae) = res_b
        else:
            (b_model, clip, b_vae) = nodes.CheckpointLoaderSimple().load_checkpoint(ckpt_name=stage_b)
        if cache_mode in ['stage_c', 'all']:
            if key_c not in cache:
                res_c = nodes.CheckpointLoaderSimple().load_checkpoint(ckpt_name=stage_c)
                cache[key_c] = ('unclip_ckpt', (False, res_c))
                print(f"[Inspire Pack] StableCascade_CheckpointLoader: Ckpt '{stage_c}' is cached to '{key_c}'.")
            else:
                (_, (_, res_c)) = cache[key_c]
                print(f"[Inspire Pack] StableCascade_CheckpointLoader: Cached ckpt '{key_c}' is loaded. (Loading skip)")
            (c_model, _, c_vae, clip_vision) = res_c
        else:
            (c_model, _, c_vae, clip_vision) = nodes.unCLIPCheckpointLoader().load_checkpoint(ckpt_name=stage_c)
        return (b_model, b_vae, c_model, c_vae, clip_vision, clip, key_b, key_c)
```