# Documentation
- Class name: CR_ModuleInput
- Category: Comfyroll/Pipe/Module
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_ModuleInput is a node for processing and handling module input data. It plays a critical role in initializing and managing data flow through the system, ensuring necessary components are fed into subsequent stages of module operations.

# Input types
## Required
- pipe
    - The "pipe" parameter is required as it represents the primary data structure the node operates on. Through this parameter, the node receives input data, which is then processed and used in the module's workflow.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Tuple[Any, ...]

# Output types
- pipe
    - The "pipe" output is a continuation of the data flow, encapsulating all processed information from the input stage. It serves as a channel for passing data to subsequent nodes or module components.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Tuple[Any, ...]
- model
    - The "model" output represents the machine learning or AI model the node may use in module operations. It is a critical component for any predictive or analytical tasks the module is designed to execute.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- pos
    - The "pos" output represents positive conditioning data, which can be used to guide generation or processing within the module toward more favorable outcomes.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- neg
    - The "neg" output represents negative conditioning data, used to steer module operations away from undesired results.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- latent
    - The "latent" output refers to the latent space representation of data, a key concept in many machine learning models, particularly in the context of generative models.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- vae
    - The "vae" output is associated with the variational autoencoder component within the module, which plays a significant role in encoding and decoding information within the latent space.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- clip
    - The "clip" output involves the integration of the CLIP model within the module, which helps align generated content with text descriptions.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- controlnet
    - The "controlnet" output represents the control network within the module, which manages the direction and focus of the generation process.
    - Comfy dtype: CONTROL_NET
    - Python dtype: torch.nn.Module
- image
    - The "image" output is the visual representation of data, typically the final result of the module's image generation or processing tasks.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- seed
    - The "seed" output provides a random number or seed used to initialize the random number generator, ensuring reproducibility in stochastic processes.
    - Comfy dtype: INT
    - Python dtype: int
- show_help
    - The "show_help" output is a URL link to the node's documentation, providing users with additional information and guidance on how to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_ModuleInput:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'pipe': ('PIPE_LINE',)}}
    RETURN_TYPES = ('PIPE_LINE', 'MODEL', 'CONDITIONING', 'CONDITIONING', 'LATENT', 'VAE', 'CLIP', 'CONTROL_NET', 'IMAGE', 'INT', 'STRING')
    RETURN_NAMES = ('pipe', 'model', 'pos', 'neg', 'latent', 'vae', 'clip', 'controlnet', 'image', 'seed', 'show_help')
    FUNCTION = 'flush'
    CATEGORY = icons.get('Comfyroll/Pipe/Module')

    def flush(self, pipe):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Pipe-Nodes#cr-module-input'
        (model, pos, neg, latent, vae, clip, controlnet, image, seed) = pipe
        return (pipe, model, pos, neg, latent, vae, clip, controlnet, image, seed, show_help)
```