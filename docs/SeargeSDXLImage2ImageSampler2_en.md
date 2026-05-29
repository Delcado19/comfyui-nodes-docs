# Documentation
- Class name: SeargeSDXLImage2ImageSampler2
- Category: Searge/_deprecated_/Sampling
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node facilitates advanced sampling processes for image generation, integrating multiple models and refinement techniques to enhance the quality and detail of output images. It leverages the capabilities of base and refinement models, along with conditional inputs, to produce high-resolution, stylistically consistent images.

# Input types
## Required
- base_model
    - The base model is essential for establishing the foundational architecture required for the sampling process. It determines the initial state of the generated image and sets the tone for subsequent improvements.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- base_positive
    - This input serves as a positive conditioning element, influencing the direction and quality of image generation. It provides the model with crucial guidance regarding desired aesthetic and thematic elements.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- base_negative
    - Negative conditioning input is crucial for refining the image generation process by avoiding unwanted features or styles. It helps refine the output to align with the intended creative vision.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- refiner_model
    - The refinement model plays a critical role in the final stages of image generation, focusing on enhancing details and improving overall visual quality. It ensures the output meets higher aesthetic standards.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- refiner_positive
    - This input plays an important role in guiding the refinement model to retain and emphasize positive aspects of the image, ensuring the final output aligns with the intended creative direction.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- refiner_negative
    - Refinement negative input helps identify and mitigate any unwanted elements in the image, contributing to a more refined and polished final product.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- image
    - The image input is the starting point of the sampling process, providing a visual context that is transformed and enhanced through node operations. It is essential for generating a coherent and content-rich output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- vae
    - The VAE component is essential for the sampling process, enabling encoding and decoding of image data for style and aesthetic transformations. It is key to the node's ability to produce diverse and nuanced outputs.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- noise_seed
    - The noise seed is a critical parameter that introduces variability in the sampling process, ensuring diversity in outputs. It is essential for preventing repetitive patterns and promoting creative diversity.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The number of steps in the sampling process determines the complexity and detail of the generated image. It is a key factor in achieving a balance between computational efficiency and visual quality.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The configuration parameter is essential for fine-tuning the sampling process, allowing adjustments to the level of detail and overall visual style of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler name is a critical input that determines the specific sampling method used by the node. It influences the efficiency and effectiveness of the image generation process.
    - Comfy dtype: SAMPLER_NAME
    - Python dtype: str
- scheduler
    - The scheduler determines the rhythm and progression of the sampling process, ensuring a smooth transition from initial to final state. This is essential for achieving a coherent and natural-looking output.
    - Comfy dtype: SCHEDULER_NAME
    - Python dtype: str
- base_ratio
    - The base scale parameter is important in determining the proportion of steps dedicated to the initial sampling phase. It influences the balance between base detail and refinement stages.
    - Comfy dtype: FLOAT
    - Python dtype: float
- denoise
    - The denoising parameter is crucial for controlling the level of noise reduction in the generated image. It directly impacts the clarity and visual appeal of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- softness
    - The softness parameter affects the blending of the upscaled and original image, contributing to the smoothness and natural transitions in the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- upscale_model
    - The upscale model is used to increase the resolution of the image, providing a higher-quality canvas for further refinement and enhancement.
    - Comfy dtype: UPSCALE_MODEL
    - Python dtype: torch.nn.Module
- scaled_width
    - The target width for image upscaling sets the canvas size for the refined image and influences the level of detail in the output.
    - Comfy dtype: INT
    - Python dtype: int
- scaled_height
    - The target height for image upscaling, along with the width, determines the final dimensions of the upscaled image.
    - Comfy dtype: INT
    - Python dtype: int
- noise_offset
    - The noise offset parameter introduces additional variability during the sampling process, further enhancing the diversity of generated images.
    - Comfy dtype: INT
    - Python dtype: int
- refiner_strength
    - The refinement strength parameter adjusts the intensity of the refinement process, affecting the degree of detail and clarity in the final image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output_image
    - The output image is the final result of the sampling process, representing a high-resolution, aesthetically refined representation of the input image, enhanced through the node's complex operations.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
