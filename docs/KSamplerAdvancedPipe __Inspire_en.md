[Thought] First, carefully read the original text to understand the meaning and function of each part. Then translate according to the format in the Example, maintaining the original markdown structure. When translating, use easy-to-understand modern language while ensuring the accuracy of technical terms.

【Translation】


# Documentation
- Class name: KSamplerAdvancedPipe __Inspire
- Category: InspirePack/a1111_compat
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The KSamplerAdvancedInspire node aims to enhance the inspiration process by providing advanced sampling capabilities in the pipeline. It utilizes complex algorithms to generate or process data, with the goal of stimulating creativity and innovation through its output.

# Input types
## Required
- basic_pipe
    - The 'basic_pipe' input is essential for providing the foundational components of the model, clip, vae, and conditioning elements, laying the groundwork for advanced sampling operations.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: tuple
- add_noise
    - The 'add_noise' input determines whether noise should be added during the sampling process, affecting the variability and uniqueness of the generated output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_seed
    - The 'noise_seed' input specifies the seed for noise generation, ensuring the reproducibility and consistency of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The 'steps' input defines the number of steps to take during the sampling process, affecting the depth and detail of the generation.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The 'cfg' input sets the configuration for the sampling process, adjusting the control and guidance of the generation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The 'sampler_name' input selects the specific sampler algorithm to use, tailoring the sampling process to specific requirements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - The 'scheduler' input specifies the scheduling algorithm for the sampling process, influencing the progression and variation of the generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- latent_image
    - The 'latent_image' input provides an initial latent image, serving as the starting point for the sampling process, influencing the direction of the generation.
    - Comfy dtype: LATENT
    - Python dtype: object
- start_at_step
    - The 'start_at_step' input determines the starting step of the sampling process, allowing customization of the generation's progression.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - The 'end_at_step' input defines the ending step of the sampling process, setting the boundaries for the generation.
    - Comfy dtype: INT
    - Python dtype: int
- noise_mode
    - The 'noise_mode' input selects the computation mode for noise generation (GPU or CPU), affecting the performance and efficiency of the sampling process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- return_with_leftover_noise
    - The 'return_with_leftover_noise' input indicates whether leftover noise should be returned, providing additional control over output variability.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- batch_seed_mode
    - The 'batch_seed_mode' input specifies the mode for seed generation in batch operations, affecting the diversity and consistency of the output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- variation_seed
    - The 'variation_seed' input provides a seed for generating variations, enabling fine-tuning of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- variation_strength
    - The 'variation_strength' input controls the strength of the applied variations, allowing fine-tuning of the generation's diversity.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- noise_opt
    - If the 'noise_opt' input is provided, it specifies custom noise options for the sampling process, offering further customization.
    - Comfy dtype: NOISE
    - Python dtype: object

# Output types
- latent
    - This output represents the generated latent image, serving as a foundational element for further processing or visualization.
    - Comfy dtype: LATENT
    - Python dtype: object
- vae
    - This output provides the variational autoencoder used in the process, facilitating additional manipulation or analysis of the generated data.
    - Comfy dtype: VAE
    - Python dtype: object


[Thought] Check if the translation matches the original meaning, uses easy-to-understand modern language, and maintains the original markdown format. Compare with the translation format in the Example to ensure consistency.

[Review] The translation basically meets the requirements, but some fine-tuning is still needed:
1. Add the "Repo Ref" link in the Documentation section.
2. Ensure all Comfy dtypes and Python dtypes remain unchanged from the original.
3. Adjust some expressions to make them easier to understand.

[Final Review] Check whether the translation format fully matches the format of the Example translation, including punctuation, code blocks, lists, headings, etc. Once confirmed, finalize the draft.

[Finalized] The final translation is as shown above and meets the requirements.

## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
