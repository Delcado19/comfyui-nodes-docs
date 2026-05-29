# Documentation
- Class name: MagicAnimateModelLoader
- Category: ComfyUI Magic Animate
- Output node: False
- Repo Ref: https://github.com/thecooltechguy/ComfyUI-MagicAnimate

The MagicAnimateModelLoader class is responsible for managing and loading the components of the magic animation model. It serves as a centralized repository for the control network, appearance encoder, motion module, and other related modules. The load_model method aims to clear any existing models, load new configurations, and initialize model components for animation purposes.

# Input types
## Optional
- controlnet
    - The controlnet parameter specifies the checkpoint or path of the control network, which is a key part of the animation model. It is used to guide the generation process.
    - Comfy dtype: str
    - Python dtype: str
- appearance_encoder
    - The appearance_encoder parameter indicates the checkpoint or file path of the appearance encoder, which is responsible for encoding the input visual features.
    - Comfy dtype: str
    - Python dtype: str
- motion_module
    - The motion_module parameter points to the checkpoint or file path of the motion module, which is crucial for animating the input according to a given motion.
    - Comfy dtype: str
    - Python dtype: str
- device
    - The device parameter determines the computing device for model execution, typically 'cuda' for GPU acceleration or 'cpu'.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- MAGIC_ANIMATE_MODEL
    - The output is a dictionary containing the loaded models and configurations. It includes the VAE, text encoder, appearance encoder, tokenizer, UNet, control network, and animation pipeline.
    - Comfy dtype: dict
    - Python dtype: Dict[str, torch.nn.Module]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/thecooltechguy/ComfyUI-MagicAnimate)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
