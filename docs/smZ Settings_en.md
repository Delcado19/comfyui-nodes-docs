# Documentation
- Class name: smZ_Settings
- Category: advanced
- Output node: False
- Repo Ref: https://github.com/shiimizu/ComfyUI_smZNodes.git

The smZ_Settings class is a configuration node for managing various settings related to Stable Diffusion models. It allows users to adjust parameters such as RNG source, sampler settings, and optimizations to tune model behavior for specific needs. This node is essential for users who need advanced control over the generation process to achieve desired results.

# Input types
## Optional
- Prompt word wrap length limit
    - This parameter defines the limit for wrapping prompt text into chunks that fit within the model's token limit. This is critical for handling longer prompts that exceed the model's token capacity, ensuring they are processed effectively without losing meaning.
    - Comfy dtype: INT
    - Python dtype: int
- RNG
    - The RNG source determines the random number generator used, which significantly affects output variability. Choosing the right source ensures consistent image generation across different hardware and software environments.
    - Comfy dtype: COMBO['cpu', 'gpu', 'nv']
    - Python dtype: str
- eta
    - Eta is a parameter of the k-diffusion sampler that acts as a noise multiplier. It controls the noise level during the sampling process, which can influence the detail and quality of generated images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Use previous prompt editing timelines
    - This setting allows users to select a previous prompt editing timeline version, which may be necessary for compatibility with specific workflows or achieving particular effects in image generation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- output
    - The output of the smZ_Settings node is typically a modified model or an object with updated settings based on user configuration. It reflects the customized parameters that will be used in subsequent image generation processes.
    - Comfy dtype: anytype
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shiimizu/ComfyUI_smZNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
