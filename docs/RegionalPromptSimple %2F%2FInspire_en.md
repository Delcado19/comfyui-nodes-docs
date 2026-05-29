# Documentation
- Class name: RegionalPromptSimple
- Category: InspirePack/Regional
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The RegionalPromptSimple node enhances the image synthesis process through a localized approach. It uses a mask to focus on specific areas of the image, allowing detailed control over the sampling process. The node improves overall image quality by ensuring the desired region receives proper attention, resulting in finer and more targeted output.

# Input types
## Required
- basic_pipe
    - The basic_pipe parameter is essential for the regional prompting process, providing the foundational elements needed to synthesize the image. It includes the model, clip, vae, and other necessary components. These elements directly affect the quality and accuracy of the final output.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple
- mask
    - The mask parameter is crucial for defining the area of interest within the image. It serves as a guide for the node, directing its focus and ensuring the specified region is enhanced with higher detail and clarity. The effectiveness of the mask directly correlates with the precision of the desired image enhancement.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- cfg
    - The cfg parameter is a floating‑point value that adjusts the node's configuration settings, influencing the overall behavior of the regional prompting process. It plays a key role in balancing detail and efficiency, ensuring the node operates optimally for the expected results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter determines the sampling strategy adopted by the node, which is critical to the quality of the synthesized image. By selecting an appropriate sampler, the node can tailor its output to meet the specific requirements of the task, achieving more accurate and targeted enhancement.
    - Comfy dtype: SAMPLERS
    - Python dtype: str
- scheduler
    - The scheduler parameter plays an important role in managing the node's iterative process, ensuring regional prompting is executed in a controlled and efficient manner. It helps optimize the sampling process, avoid unnecessary computational overhead, and focus on the most impactful steps.
    - Comfy dtype: SCHEDULERS
    - Python dtype: str
## Optional
- wildcard_prompt
    - The wildcard_prompt parameter allows dynamic text input, which can be used to customize the node's prompt. This feature enhances the node's flexibility, enabling it to adapt to various image synthesis scenarios and produce more tailored results.
    - Comfy dtype: STRING
    - Python dtype: str
- controlnet_in_pipe
    - The controlnet_in_pipe parameter determines whether to preserve or override existing control settings in the pipeline. This allows fine‑tuning of the node's behavior, ensuring regional prompting aligns with the desired creative direction.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- sigma_factor
    - The sigma_factor parameter adjusts the level of denoising applied during the image synthesis process. By tuning this value, the node can balance detail retention and noise reduction, yielding cleaner and more refined image output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- regional_prompts
    - The regional_prompts output consists of a set of prompts tailored to specific image regions. These prompts aim to enhance the image synthesis process by focusing on areas of interest, resulting in more detailed and accurate representations of the desired outcome.
    - Comfy dtype: REGIONAL_PROMPTS
    - Python dtype: List[Dict[str, Any]]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
