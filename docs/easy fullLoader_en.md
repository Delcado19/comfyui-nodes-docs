# Documentation
- Class name: fullLoader
- Category: EasyUse/Loaders
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The fullLoader class encapsulates the functionality for loading and preparing various models and components required by the pipeline. It simplifies the process of integrating checkpoints, VAE, CLIP, and conditioning data, providing a coherent interface for model initialization and setup.

# Input types
## Required
- ckpt_name
    - The checkpoint name is critical for identifying the specific model to load and use in the pipeline. It guides the loader to find the correct saved state of the model, which is essential for consistency and accuracy in subsequent processing steps.
    - Comfy dtype: FILE
    - Python dtype: List[str]
- config_name
    - The configuration name plays a key role in determining the model's settings and hyperparameters. It ensures the model operates within the desired parameters, affecting overall performance and output quality.
    - Comfy dtype: ENUM
    - Python dtype: Enum
- vae_name
    - The VAE name is crucial for selecting the appropriate variational autoencoder model. It influences the pipeline's generation capabilities and the quality of the latent space representation.
    - Comfy dtype: FILE
    - Python dtype: List[str]
- clip_skip
    - The clip_skip parameter is significant for controlling the layer at which the CLIP model is applied in the pipeline. It affects the granularity of text conditioning and the model's responsiveness to text prompts.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- pipe
    - The pipe output represents the result of the fullLoader's work, providing a comprehensive pipeline setup comprising model, VAE, CLIP, and conditioning data. It is the backbone of the generation process, ensuring seamless integration of all components.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
