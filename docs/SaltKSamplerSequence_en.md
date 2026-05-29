
# Documentation
- Class name: SaltKSamplerSequence
- Category: SALT/Scheduling/Sampling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltKSamplerSequence node is a tool designed for advanced scheduling and sequencing in audio-visual projects. It is primarily used to manipulate and generate sequences based on predefined conditions and parameters. The node integrates complex scheduling algorithms to optimize sequence generation for specific project requirements, ensuring sequences are generated or modified according to precise scheduling criteria.

# Input types
## Required
- model
    - Specifies the model used for sequence generation or manipulation, serving as the core computational resource for node operations.
    - Comfy dtype: MODEL
    - Python dtype: str
- seed_sequence
    - A list of seed values used to initialize the sequence generation process, ensuring variability and controllability of generated sequences.
    - Comfy dtype: LIST
    - Python dtype: List[int]
- steps
    - Defines the number of steps or iterations to execute during sequence generation, determining the granularity and length of the output sequence.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - A conditioning factor used to guide sequence generation, influencing the direction and characteristics of the generated sequence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Determines the specific sampling algorithm used in sequence generation, affecting the quality and nature of the output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Specifies the scheduling algorithm to use, influencing how sequences are generated and modified over time.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- denoise_start
    - The starting value for the denoising process applied to the sequence, helping to optimize and improve the clarity of the generated sequence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- denoise_sequence
    - A list of denoising values applied sequentially to the generated sequence, further improving its quality and coherence.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- positive_sequence
    - A list of positive conditioning factors used to enhance certain aspects of the generated sequence, promoting desired features.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[str]
- negative_sequence
    - A list of negative conditioning factors used to suppress certain aspects of the generated sequence, eliminating unwanted features.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[str]
- use_latent_interpolation
    - A boolean indicating whether latent space interpolation should be used, affecting the smoothness and transitions between sequence elements.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- latent_interpolation_mode
    - The mode for latent space interpolation, determining the mathematical method for blending sequence elements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- latent_interp_strength_sequence
    - A list of latent interpolation strengths, controlling the intensity of interpolation effects at different points in the sequence.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- unsample_latents
    - A boolean indicating whether anti-sampling should be applied to the latent representation, potentially enhancing the resolution and detail of the sequence.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- inject_noise
    - A boolean indicating whether noise should be injected into the sequence, introducing variability and potentially enhancing creativity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_strength_sequence
    - A list of noise intensities applied at different points in the sequence, controlling the amount of variability introduced.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- latent_image
    - The initial latent image used as the starting point for sequence generation, setting the baseline for subsequent modifications.
    - Comfy dtype: LATENT
    - Python dtype: str

# Output types
- latent
    - The final latent representation produced by the sequence generation and manipulation process, containing the cumulative effects of all applied conditions and modifications.
    - Comfy dtype: LATENT
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
