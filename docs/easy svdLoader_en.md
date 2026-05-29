# Documentation
- Class name: svdLoader
- Category: EasyUse/Loaders
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The svdLoader node serves as a critical component for loading and processing model checkpoints, VAE, and CLIP models, facilitating the initialization and setup of complex generation pipelines. It simplifies the process of integrating various models into workflows, ensuring efficient and seamless data processing and transformation.

# Input types
## Required
- ckpt_name
    - The checkpoint name parameter is essential for specifying the model checkpoint to load, forming the foundation of the generation process. It determines the quality and characteristics of the generated output.
    - Comfy dtype: COMBO
    - Python dtype: str
- vae_name
    - The VAE name parameter is critical for selecting the appropriate variational autoencoder, which plays a key role in dimensionality reduction and latent space formation for the generative model.
    - Comfy dtype: COMBO
    - Python dtype: str
- clip_name
    - The CLIP name parameter is essential for selecting the correct CLIP model, responsible for providing text conditioning capabilities to the generation process.
    - Comfy dtype: COMBO
    - Python dtype: str
- init_image
    - The init_image parameter is critical as it provides the initial visual input as a reference for the generative model, significantly influencing the direction and quality of the generated content.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- resolution
    - The resolution parameter is essential in determining the size and proportions of the generated image, directly affecting the level of detail and clarity of the output.
    - Comfy dtype: COMBO
    - Python dtype: str
- empty_latent_width
    - The empty_latent_width parameter is important for defining the width of the latent space, affecting the diversity and variability of the generated images.
    - Comfy dtype: INT
    - Python dtype: int
- empty_latent_height
    - The empty_latent_height parameter is important for setting the height of the latent space, affecting the structural coherence and composition of the generated images.
    - Comfy dtype: INT
    - Python dtype: int
- video_frames
    - The video_frames parameter is critical for defining the number of frames in the video, directly affecting the duration and sequence of the generated video content.
    - Comfy dtype: INT
    - Python dtype: int
- motion_bucket_id
    - The motion_bucket_id parameter is critical for controlling motion and dynamics in the generated video frames, affecting the fluidity and naturalness of the motion.
    - Comfy dtype: INT
    - Python dtype: int
- fps
    - The fps parameter is essential in determining the frame rate of the generated video, directly affecting the smoothness and playback speed of the video content.
    - Comfy dtype: INT
    - Python dtype: int
- augmentation_level
    - The augmentation_level parameter is important for introducing random variations during image generation, enhancing the diversity and robustness of the generated output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- pipe
    - The pipe output is a comprehensive structure containing all necessary components for the generation pipeline, including the model, VAE, and CLIP, which are critical for subsequent processing and generation tasks.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- model
    - The model output represents the loaded generative model, serving as the core component for creating the final output based on input data and defined parameters.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- vae
    - The vae output is the variational autoencoder model, playing a key role in generating and manipulating the latent space, critical for the diversity and quality of the generated content.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
