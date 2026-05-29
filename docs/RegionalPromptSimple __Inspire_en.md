
# Documentation
- Class name: RegionalPromptSimple __Inspire
- Category: InspirePack/Regional
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack

The RegionalPromptSimple node generates regional prompts based on a given base pipeline configuration and mask. It utilizes the fundamental components of a generative model pipeline, including model, clip, and VAE settings, along with positive and negative prompts, to create new prompts targeting specific regions. This node is essential for tasks requiring precise prompt generation within specific areas of an image, enabling users to exert more precise control over the generation process.

# Input types
## Required
- basic_pipe
    - Represents the foundational components of the generative model pipeline, including model, clip, VAE, and positive and negative prompts. It defines the basis for regional prompt generation.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[torch.nn.Module, torch.nn.Module, torch.nn.Module, List[Tuple[str, Dict]], List[Tuple[str, Dict]]]
- mask
    - A binary mask used to specify the region of interest in the image. It plays a critical role in determining where the regional prompt is applied, allowing for targeted prompt generation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- cfg
    - Configuration settings for the generative model, influencing the detail and quality of the generated prompts.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Specifies the sampling method used during generation, affecting the diversity and quality of the output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Determines the scheduling algorithm for the generative model, affecting the progression and variation of the generated prompts.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- wildcard_prompt
    - An optional prompt that can be dynamically inserted into the generation process, providing flexibility and creativity in prompt design.
    - Comfy dtype: STRING
    - Python dtype: str
- controlnet_in_pipe
    - A boolean flag indicating whether to retain or overwrite existing control settings in the pipeline, affecting the influence of control mechanisms on the generation process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- sigma_factor
    - A scaling factor for the noise level during the sampling process, allowing fine-tuning of the randomness and variability in prompt generation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- regional_prompts
    - The generated regional prompt, customized for the specified region of interest in the image, enabling precise and targeted control over content generation.
    - Comfy dtype: REGIONAL_PROMPTS
    - Python dtype: List[Tuple[str, Dict]]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
