# Documentation
- Class name: sv3DLoader
- Category: EasyUse/Loaders
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The sv3DLoader node serves as an efficient interface for loading and processing 3D models and their associated data. It simplifies the process of initializing and managing model states, preparing images and latent vectors for further processing in the pipeline.

# Input types
## Required
- ckpt_name
    - The checkpoint name is critical for identifying the specific model state to load. It affects model initialization and output quality.
    - Comfy dtype: COMBO
    - Python dtype: str
- vae_name
    - The VAE name parameter is essential for selecting the appropriate variational autoencoder. It influences the encoding and decoding process, thereby affecting the fidelity of the final output.
    - Comfy dtype: COMBO
    - Python dtype: str
- init_image
    - The initialization image is crucial for setting the context and content direction of 3D model generation. It directly impacts visual elements and thematic coherence of the resulting model.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- empty_latent_width
    - This parameter defines the width of the latent space used for model generation. It is important because it affects the model's ability to capture detail and output diversity.
    - Comfy dtype: INT
    - Python dtype: int
- empty_latent_height
    - Similar to empty_latent_width, this parameter sets the height of the latent space, influencing the model's ability to generate high-resolution outputs.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - The batch size parameter is important for managing computational resources and determining the number of models processed simultaneously. It affects the overall efficiency and speed of the pipeline.
    - Comfy dtype: INT
    - Python dtype: int
- interp_easing
    - The interpolation easing method determines how the model transitions between different states. It influences the smoothness and continuity of the output sequence.
    - Comfy dtype: COMBO
    - Python dtype: str
- easing_mode
    - This parameter determines the type of easing to apply, whether azimuth, elevation, or custom, affecting the trajectory of the model's movement in space.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- scheduler
    - When provided, the scheduler parameter allows detailed control over easing points, enabling precise manipulation of the model's progression through latent space.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- pipe
    - The pipeline output is a comprehensive structure containing the loaded model, encoded images, and other associated data. It is essential for passing necessary information to subsequent processing steps in the pipeline.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- model
    - The model output provides the initialized and ready-to-use 3D model. It is the core component for further manipulation and generation of new content.
    - Comfy dtype: MODEL
    - Python dtype: ModelPatcher
- interp_log
    - The interpolation log records the azimuth and elevation values used during model processing. It serves as a reference for understanding the model's progression through latent space.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
