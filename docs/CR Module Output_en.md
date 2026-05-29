# Documentation
- Class name: CR_ModuleOutput
- Category: Comfyroll/Pipe/Module
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_ModuleOutput is a node designed to manage and modify pipeline output, ensuring that data flow is guided and optimized according to specific conditions and inputs.

# Input types
## Required
- pipe
    - pipe parameter is necessary as it represents the main data stream being processed and transformed by the node.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Tuple
## Optional
- model
    - model parameter allows adjusting the underlying model in the pipeline, affecting the node's processing capabilities.
    - Comfy dtype: MODEL
    - Python dtype: Any
- pos
    - pos parameter serves as a conditioning input, refining output based on positive reinforcement or desired outcomes.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- neg
    - neg parameter introduces negative conditioning, enabling the node to avoid undesired outcomes in the output.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- latent
    - latent parameter is used to incorporate latent variables into the node's operations, adding complexity and nuance to the output.
    - Comfy dtype: LATENT
    - Python dtype: Any
- vae
    - vae parameter is used to integrate variational autoencoder capabilities, enhancing the node's ability to handle unsupervised learning tasks.
    - Comfy dtype: VAE
    - Python dtype: Any
- clip
    - clip parameter enables the node to apply CLIP model features, improving contextual understanding and generation capabilities in the output.
    - Comfy dtype: CLIP
    - Python dtype: Any
- controlnet
    - controlnet parameter is used to introduce control mechanisms that can guide the node's behavior and refine its output.
    - Comfy dtype: CONTROL_NET
    - Python dtype: Any
- image
    - image parameter allows the node to incorporate visual data, enhancing the multimodal capabilities of the output.
    - Comfy dtype: IMAGE
    - Python dtype: Any
- seed
    - seed parameter is crucial for ensuring reproducibility and consistency in the node's random operations.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- pipe
    - output pipe is a modified version of the input, now optimized and tailored to meet specific requirements and conditions set by the node.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Tuple
- show_help
    - show_help output provides a reference link to documentation for further understanding and guidance on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
