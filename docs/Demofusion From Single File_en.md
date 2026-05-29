# Documentation
- Class name: DemofusionFromSingleFile
- Category: tests
- Output node: False
- Repo Ref: https://github.com/deroberon/demofusion-comfyui

This node facilitates the execution of diffusion models for image generation, utilizing pre-trained checkpoints to synthesize new visual content based on text prompts. It emphasizes the node's role in creative AI applications, focusing on the generation process without delving into specific implementation details.

# Input types
## Required
- ckpt_name
    - The checkpoint name parameter is crucial for specifying the pre-trained model used for image generation. It guides the node to locate and load the appropriate model weights and configuration, which is essential for the subsequent generation process.
    - Comfy dtype: STRING
    - Python dtype: str
- positive
    - The positive parameter serves as a text prompt that guides the image generation process. Its importance lies in setting the thematic direction for the output, influencing the overall style and content of the synthesized image.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The negative parameter acts as an exclusionary filter for image generation, steering the output away from certain elements or themes. It refines the creative direction by specifying aspects to avoid in the final result.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - The width parameter determines the horizontal resolution of the generated image, affecting the overall detail and quality. It plays a key role in determining the proportions and dimensions of the output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the vertical resolution of the image, working with width to determine the canvas size of the generation process. It is a component of the final output dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- inference_steps
    - The inference steps parameter controls the number of iterations used in the diffusion process, directly affecting the complexity and refinement of the generated image. It is a key factor in achieving the desired level of detail.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter adjusts the model's configuration settings, fine-tuning the generation process to achieve specific visual effects. It influences the stylistic output and consistency of the generated content.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed parameter ensures reproducibility of results by initializing the random number generator with a fixed value. It is essential for consistent experimentation and result comparison across different runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output image is the culmination of the node's functionality, encapsulating the visual content generated based on the provided text prompts and model configuration. It is the primary result of the creative process, demonstrating the node's ability to synthesize new images.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/deroberon/demofusion-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
