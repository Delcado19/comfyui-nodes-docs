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
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
