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
```
class CR_ModuleOutput:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'pipe': ('PIPE_LINE',)}, 'optional': {'model': ('MODEL',), 'pos': ('CONDITIONING',), 'neg': ('CONDITIONING',), 'latent': ('LATENT',), 'vae': ('VAE',), 'clip': ('CLIP',), 'controlnet': ('CONTROL_NET',), 'image': ('IMAGE',), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('PIPE_LINE', 'STRING')
    RETURN_NAMES = ('pipe', 'show_help')
    FUNCTION = 'pipe_output'
    CATEGORY = icons.get('Comfyroll/Pipe/Module')

    def pipe_output(self, pipe, model=None, pos=None, neg=None, latent=None, vae=None, clip=None, controlnet=None, image=None, seed=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Pipe-Nodes#cr-module-output'
        (new_model, new_pos, new_neg, new_latent, new_vae, new_clip, new_controlnet, new_image, new_seed) = pipe
        if model is not None:
            new_model = model
        if pos is not None:
            new_pos = pos
        if neg is not None:
            new_neg = neg
        if latent is not None:
            new_latent = latent
        if vae is not None:
            new_vae = vae
        if clip is not None:
            new_clip = clip
        if controlnet is not None:
            new_controlnet = controlnet
        if image is not None:
            new_image = image
        if seed is not None:
            new_seed = seed
        pipe = (new_model, new_pos, new_neg, new_latent, new_vae, new_clip, new_controlnet, new_image, new_seed)
        return (pipe, show_help)
```