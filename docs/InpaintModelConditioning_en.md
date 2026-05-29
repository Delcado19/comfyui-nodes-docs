# Documentation
- Class name: InpaintModelConditioning
- Category: conditioning/inpaint
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The 'encode' method of the InpaintModelConditioning node is designed to process images by encoding them into latent space representations. It intelligently handles image conditioning by applying masks to pixels and resizing images to ensure compatibility with the encoding model. This method is critical for inpainting tasks, where it fills missing or masked regions of an image with synthesized content.

# Input types
## Required
- positive
    - The 'positive' parameter is important for defining positive conditioning during image encoding. It determines how image content is influenced by positive conditioning factors during the encoding process.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative
    - The 'negative' parameter plays a key role in image encoding, specifying negative conditioning aspects that should be excluded or minimized during encoding.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- pixels
    - The 'pixels' parameter is essential, as it represents the input image data that the node will process. It is the core element for the node to perform encoding tasks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- vae
    - The 'vae' parameter is important, as it refers to the Variational Autoencoder model used by the node to encode images into latent representations.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- mask
    - The 'mask' parameter is critical for the inpainting process, as it identifies regions of the image that need to be filled or synthesized.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- positive
    - The 'positive' output is important, as it represents encoded positive conditioning information derived from the input image.
    - Comfy dtype: CONDITIONING
    - Python dtype: Tuple[torch.Tensor, Dict[str, torch.Tensor]]
- negative
    - The 'negative' output represents encoded negative conditioning information that the model should avoid incorporating into the image.
    - Comfy dtype: CONDITIONING
    - Python dtype: Tuple[torch.Tensor, Dict[str, torch.Tensor]]
- latent
    - The 'latent' output is a key component, as it contains the latent space representation of the image, which is the result of the encoding process.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, Union[torch.Tensor, torch.Tensor]]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
