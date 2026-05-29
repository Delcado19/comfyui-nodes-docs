# Documentation
- Class name: SeargeSDXLImage2ImageSampler
- Category: Searge/_deprecated_/Sampling
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

The SeargeSDXLImage2ImageSampler node aims to enhance image quality through a complex sampling enhancement process that utilizes multiple models and parameters to refine the output. It combines various conditioning factors and refinement steps to improve the quality and aesthetics of the generated image.

# Input types
## Required
- base_model
    - The base model is crucial for the image sampling process, forming the foundation of image generation. It is the primary model used to generate initial image data, which will be further refined and conditioned.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- base_positive
    - This parameter serves as a positive conditioning input, influencing the style and content of the generated image. It is crucial in guiding the sampling process towards desired aesthetic and thematic outcomes.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- base_negative
    - The negative conditioning input is used to exclude certain elements or features from the generated image, ensuring the final output meets the expected specifications.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- refiner_model
    - The refinement model plays a key role in the post-processing stage. It is used to fine-tune the image for higher fidelity and better alignment with desired aesthetic qualities.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- refiner_positive
    - This input provides positive guidance for the refinement process, ensuring the enhanced image retains desired attributes and improves upon the output of the base model.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- refiner_negative
    - The negative conditioning of the refinement model helps avoid unwanted features in the final image, contributing to more controlled and precise image enhancement.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- image
    - The image parameter is the target that the node will process and refine. It is the core element of the entire sampling operation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- vae
    - The VAE (Variational Autoencoder) is used to encode and decode image data, enabling the node to manipulate the latent space of the image and generate high-quality visual results.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- noise_seed
    - The noise seed plays an important role in introducing variation during the sampling process, ensuring diversity in the output and preventing repetitive or predictable results.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The number of steps determines the complexity and duration of the sampling process, directly affecting the detail and refinement of the final image.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The configuration parameter or 'cfg' is a floating point value used to adjust the sampling configuration, affecting the overall behavior and performance of the node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler name identifies the specific sampling method to be used, which is crucial for determining the quality and characteristics of the generated image.
    - Comfy dtype: SAMPLER_NAME
    - Python dtype: str
- scheduler
    - The scheduler determines the pace and progress of the sampling process, ensuring the refinement phase is executed efficiently and orderly.
    - Comfy dtype: SCHEDULER_NAME
    - Python dtype: str
- base_ratio
    - The base ratio is a floating point value that influences the proportion of steps allocated to the base model versus the refinement model, affecting the balance between coarse and fine details in the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- denoise
    - The denoising parameter controls the level of noise reduction applied during the sampling process, directly affecting the clarity and smoothness of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- softness
    - The softness adjusts the blending intensity when merging upscaled and original images, contributing to overall visual harmony and seamless integration of details.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- upscale_model
    - When provided, an upscale model is used to increase the resolution of the image, resulting in higher quality and more detailed results.
    - Comfy dtype: UPSCALE_MODEL
    - Python dtype: torch.nn.Module
- scaled_width
    - The scale width defines the desired width for the upscaled image, which is important for setting the canvas size of the refined image output.
    - Comfy dtype: INT
    - Python dtype: int
- scaled_height
    - The scale height corresponds to the desired height for the upscaled image, working together with the scale width to determine the final dimensions of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- noise_offset
    - The noise offset introduces a variable element to the noise seed, adding extra diversity to the sampling process and ensuring unique results.
    - Comfy dtype: INT
    - Python dtype: int
- refiner_strength
    - The refinement strength is a floating point value that adjusts the intensity of the refinement process, allowing control over the level of detail and sharpness in the final image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output_image
    - The output image is the result of the sampling process, representing a high-quality, refined visual that incorporates the input parameters and conditioning, showcasing the node's capability.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
