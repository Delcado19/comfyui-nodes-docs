# Documentation
- Class name: Demofusion
- Category: tests
- Output node: False
- Repo Ref: https://github.com/deroberon/demofusion-comfyui

This node performs image generation using a pre-trained diffusion model, combining text prompts to guide the creative process and generating high-resolution output.

# Input types
## Required
- ckpt_name
    - The checkpoint name is crucial for selecting the pre-trained model for image generation. It instructs the node to access the specified model architecture and weights.
    - Comfy dtype: STRING
    - Python dtype: str
- positive
    - The positive prompt acts as guiding text, enhancing desired features in the generated image, directing the output towards specific visual elements.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The negative prompt helps exclude unwanted elements from the generated image, making the output more aligned with the expected creative vision.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - Width determines the horizontal resolution of the generated image, affecting the overall detail and quality of the output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height determines the vertical resolution of the generated image, affecting the scale and aspect ratio of the final product.
    - Comfy dtype: INT
    - Python dtype: int
- inference_steps
    - Inference steps define the number of iterations the model executes to refine the image, directly affecting the level of detail and clarity of the final result.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The configuration parameter (or cfg) adjusts the model's guidance scale, controlling the strength of the text prompt's influence on image generation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed provides a value for random number generation, ensuring reproducibility of results when the same seed is used across different runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The output is a high-resolution image that embodies the creative direction provided by the text prompt, representing the peak of the diffusion model's generation capability.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/deroberon/demofusion-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
