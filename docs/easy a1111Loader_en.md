# Documentation
- Class name: a1111Loader
- Category: EasyUse/Loaders
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node facilitates loading and integrating various model components, including checkpoints, VAE, and LORA stacks, to establish a comprehensive pipeline for processing and generating images based on provided prompts and parameters.

# Input types
## Required
- ckpt_name
    - The checkpoint name is critical for specifying the model state to load, directly affecting the node's ability to generate images according to the desired configuration.
    - Comfy dtype: COMBO
    - Python dtype: str
- vae_name
    - The VAE name parameter is essential for selecting the appropriate variational autoencoder model, which plays a key role in the image generation process.
    - Comfy dtype: COMBO
    - Python dtype: str
- clip_skip
    - The clip_skip parameter is important for controlling the interaction between CLIP and the model, affecting the node's efficiency and the quality of generated images.
    - Comfy dtype: INT
    - Python dtype: int
- lora_name
    - The LORA name parameter is critical for applying model-specific enhancements, which can significantly improve the node's performance in image generation tasks.
    - Comfy dtype: COMBO
    - Python dtype: str
- lora_model_strength
    - The lora_model_strength parameter adjusts the impact of LORA enhancements on the model, affecting the node's ability to fine-tune image generation according to specific requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_clip_strength
    - The lora_clip_strength parameter modifies the strength of CLIP and LORA integration, which is essential for achieving a balanced and coordinated image generation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resolution
    - The resolution parameter defines the size of the output image, a key factor in determining the node's ability to produce high-quality visual results.
    - Comfy dtype: COMBO
    - Python dtype: str
- empty_latent_width
    - The empty_latent_width parameter sets the width of the latent space, critical for the node's ability to generate diverse and complex image patterns.
    - Comfy dtype: INT
    - Python dtype: int
- empty_latent_height
    - The empty_latent_height parameter establishes the height of the latent space, influencing the node's ability to create detailed and nuanced images.
    - Comfy dtype: INT
    - Python dtype: int
- positive
    - The positive parameter provides positive prompts to guide the image generation process, significantly affecting the node's output quality and relevance.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The negative parameter provides negative prompts to refine image generation, focusing on the node's ability to avoid unwanted features in the output.
    - Comfy dtype: STRING
    - Python dtype: str
- batch_size
    - The batch_size parameter determines the number of images processed simultaneously, which affects the node's throughput and efficiency.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- pipe
    - The pipe output encapsulates the loaded model and settings, providing a foundation for subsequent image generation and processing tasks.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- model
    - The model output provides the loaded model, which is essential for executing image generation based on input prompts and parameters.
    - Comfy dtype: MODEL
    - Python dtype: ModelPatcher
- vae
    - The vae output contains the loaded VAE model, which is critical for generating and processing latent spaces and images.
    - Comfy dtype: VAE
    - Python dtype: VAE

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
