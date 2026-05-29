# Documentation
- Class name: zero123Loader
- Category: EasyUse/Loaders
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The zero123Loader node serves as an interface for loading and managing various models and images, facilitating the initialization of complex image processing and generation workflows. It simplifies subsequent operations by handling retrieval and configuration of essential components such as VAE and CLIP models, ensuring efficient execution.

# Input types
## Required
- ckpt_name
- The ckpt_name parameter specifies the checkpoint containing trained model parameters to load. This is essential for the node to run correctly and to start subsequent image processing and generation tasks.
    - Comfy dtype: COMBO[[['stable_zero123.ckpt']]]
    - Python dtype: str
- vae_name
- The vae_name parameter selects the appropriate VAE model used to generate and process latent representations of images. The choice of VAE model significantly affects the quality and characteristics of images produced by the node.
    - Comfy dtype: COMBO[['Baked VAE'] + folder_paths.get_filename_list('vae')]
    - Python dtype: str
- init_image
- The init_image parameter is crucial because it provides the initial image data that serves as the starting point for image processing and generation tasks. The content and quality of this image directly influence the output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- empty_latent_width
- The empty_latent_width parameter defines the width of the empty latent space that will be filled with generated content. It is a key factor determining the resolution and scale of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- empty_latent_height
- The empty_latent_height parameter sets the height of the empty latent space, corresponding to the vertical dimension of the generated image. This parameter is important for controlling the aspect ratio and size of the output.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - 
    - Comfy dtype: INT
    - Python dtype: int
- elevation
- The elevation parameter specifies the vertical angle of the viewing perspective, affecting the perspective and appearance of the rendered output. It is an important factor for creating realistic and visually appealing images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- azimuth
- The azimuth parameter determines the horizontal angle of observation, influencing the direction and layout of the generated image. It is crucial for aligning the output with the desired visual orientation.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- prompt
- The prompt parameter provides textual guidance for the image generation process, helping shape the content and style of the generated image. It is optional but useful for directing the creative direction of the node's output.
    - Comfy dtype: PROMPT
    - Python dtype: str
- my_unique_id
- The my_unique_id parameter tracks and manages unique instances of node operations, ensuring each execution is identifiable and distinct. This aids debugging and maintains process integrity.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- pipe
- The pipe output is a comprehensive structure that encapsulates all components and settings required for image processing and generation. It serves as the foundation for subsequent operations, ensuring smooth and coordinated workflow.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- model
- The model output provides the loaded and configured model, ready for image processing tasks. It directly impacts the quality and accuracy of image generation.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_management.ModelPatcher
- vae
- The vae output contains the initialized VAE model prepared for generating and processing latent image representations. It plays a central role in image creation, enabling the node to produce high-quality visuals.
    - Comfy dtype: VAE
    - Python dtype: comfy.sd.VAE

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
