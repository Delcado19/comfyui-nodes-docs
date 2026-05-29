# Documentation
- Class name: CR_ModulePipeLoader
- Category: Comfyroll/Pipe/Module
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_ModulePipeLoader is a node designed to unify the loading and integration of various models and data types into a single pipeline. It facilitates seamless handling of models, latent representations, and other conditioning factors, enabling complex operations to execute in a structured and efficient manner.

# Input types
## Optional
- model
- Model parameters are essential for defining the core algorithmic structure of the node. They determine the type of model to load, thereby significantly affecting the node's processing capability and outcome.
    - Comfy dtype: MODEL
    - Python dtype: Union[str, Path]
- pos
- Forward conditioning input is crucial for nodes that require directional guidance or enhancement. It provides a forward reference that helps steer the node's function toward the desired result.
    - Comfy dtype: CONDITIONING
    - Python dtype: Union[str, List[str]]
- neg
- Negative conditioning parameters balance the forward input, allowing the node to fine‑tune its response by incorporating inhibitory signals and avoid unwanted effects.
    - Comfy dtype: CONDITIONING
    - Python dtype: Union[str, List[str]]
- latent
- Latent representation is vital for nodes that handle dimensionality reduction or feature extraction. This parameter enables the node to use compressed data representations, improving processing efficiency.
    - Comfy dtype: LATENT
    - Python dtype: Union[torch.Tensor, List[torch.Tensor]]
- vae
- Variational Autoencoder (VAE) parameters are critical for nodes that synthesize data using generative models. They allow the node to leverage VAE capabilities to create new data instances.
    - Comfy dtype: VAE
    - Python dtype: Union[str, Path]
- clip
- CLIP parameters are essential for nodes employing multimodal learning approaches, especially tasks involving visual and textual data. They enable the node to integrate CLIP models to enhance cross‑modal interaction.
    - Comfy dtype: CLIP
    - Python dtype: Union[str, Path]
- controlnet
- ControlNet parameters are vital for nodes that require structured control flow or conditional execution paths. They provide a framework for managing node operation logic based on predefined conditions.
    - Comfy dtype: CONTROL_NET
    - Python dtype: Union[str, Path]
- image
- Image input is foundational for nodes that process visual data. It allows the node to ingest and manipulate visual content, which is crucial for a wide range of image‑based applications.
    - Comfy dtype: IMAGE
    - Python dtype: Union[str, Path, PIL.Image]
- seed
- Seed parameter ensures reproducibility by providing a fixed point for random number generation. It is especially important in stochastic processes that require consistent results.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- pipe
- Pipeline output represents the constructed pipeline, encapsulating all inputs and settings provided to the node. It is a key component for further processing or analysis within the system.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Tuple[Any, ...]
- show_help
- The show_help output provides a link to the node documentation, offering users guidance on how to use the node effectively. It is an important resource for understanding node functionality and potential use cases.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_ModulePipeLoader:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {}, 'optional': {'model': ('MODEL',), 'pos': ('CONDITIONING',), 'neg': ('CONDITIONING',), 'latent': ('LATENT',), 'vae': ('VAE',), 'clip': ('CLIP',), 'controlnet': ('CONTROL_NET',), 'image': ('IMAGE',), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('PIPE_LINE', 'STRING')
    RETURN_NAMES = ('pipe', 'show_help')
    FUNCTION = 'pipe_input'
    CATEGORY = icons.get('Comfyroll/Pipe/Module')

    def pipe_input(self, model=0, pos=0, neg=0, latent=0, vae=0, clip=0, controlnet=0, image=0, seed=0):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Pipe-Nodes#cr-module-pipe-loader'
        pipe_line = (model, pos, neg, latent, vae, clip, controlnet, image, seed)
        return (pipe_line, show_help)
```