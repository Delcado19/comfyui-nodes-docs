# Documentation
- Class name: cascadeSettings
- Category: EasyUse/PreSampling
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The cascadeSettings node aims to simplify the process of configuring and managing settings for generative model pipelines. It encapsulates the necessary parameters for model encoding and decoding, as well as sampling strategies, to facilitate the creation of high-quality visual outputs. This node emphasizes ease of use and efficiency, allowing users to focus on the creative aspects of their projects without being bogged down by complex technical details.

# Input types
## Required
- pipe
    - The 'pipe' parameter is critical, as it carries the full context of the generative model pipeline, including model settings and data samples. It is essential for the correct operation of the cascadeSettings node and the integrity of the generation process.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict
- encode_vae_name
    - The 'encode_vae_name' parameter specifies the name of the encoder VAE model used in the generation process. It is important for setting the foundation of the latent space representation, directly impacting the quality of the generated images.
    - Comfy dtype: COMBO
    - Python dtype: Union[str, None]
- decode_vae_name
    - The 'decode_vae_name' parameter determines the decoder VAE model used to reconstruct images from the latent space. Its choice affects the fidelity and visual consistency of the final output.
    - Comfy dtype: COMBO
    - Python dtype: Union[str, None]
- steps
    - The 'steps' parameter defines the number of iterations or steps in the sampling process. It is a key factor in controlling the detail and refinement of the generated images.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The 'cfg' parameter adjusts the configuration of the generative model, influencing the overall behavior and performance of the pipeline. This is a critical setting that can significantly alter the final results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The 'sampler_name' parameter selects the sampling method used for image generation. It is crucial in determining the diversity and uniqueness of the visual output.
    - Comfy dtype: COMBO
    - Python dtype: str
- scheduler
    - The 'scheduler' parameter manages the sampling schedule, which is essential for balancing the trade-off between quality and computational efficiency. It plays an important role in optimizing the generation process.
    - Comfy dtype: COMBO
    - Python dtype: str
- denoise
    - The 'denoise' parameter controls the level of denoising applied during the image generation process. It affects the clarity and smoothness of the final image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The 'seed' parameter ensures reproducibility of the generation process by setting a fixed random seed. It is important for obtaining consistent results across different runs.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- image_to_latent_c
    - The 'image_to_latent_c' parameter allows an input image to be encoded into the latent space. This enables users to specify a starting point for the generation process, influencing the direction and style of the output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- latent_c
    - The 'latent_c' parameter provides a direct input of latent vectors, giving users the ability to control the generation process with higher precision. This can lead to more nuanced and targeted visual outputs.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- prompt
    - The 'prompt' parameter introduces textual guidance into the generation process, allowing users to steer the content and theme of the generated images. It is an essential tool for achieving specific creative visions.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The 'extra_pnginfo' parameter contains additional information related to the input image, which can be used to refine the generation process and improve the relevance of the output to the intended context.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]
- my_unique_id
    - The 'my_unique_id' parameter is used as a unique identifier to track and manage each instance of the generation process. It is critical for maintaining the integrity and organization of multiple parallel or sequential operations.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: Any

# Output types
- pipe_line
    - The 'pipe_line' output is an updated version of the input 'pipe' with all settings applied. It serves as the foundation for subsequent stages of the generative pipeline, ensuring that the configured parameters are correctly propagated and utilized during the image generation process.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
