# Documentation
- Class name: InstructPixToPixConditioning
- Category: conditioning/instructpix2pix
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The InstructPixToPixConditioning node is designed to process image data by encoding it into latent representations for further manipulation or analysis. It plays a key role in converting raw pixel data into a form more suitable for conditional image generation tasks.

# Input types
## Required
- positive
    - The positive conditioning parameter is critical to the node's operation, as it provides positive examples or desired outcomes that guide the encoding process. It influences the direction of the latent space transformation.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- negative
    - The negative conditioning parameter serves as the counterpart to the positive condition, providing examples to avoid or minimize during the encoding process. It helps refine the node's output to align with desired results.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- pixels
    - The pixel parameter is the core input of the node, representing the raw image data to be encoded. Its quality and format directly impact the accuracy and effectiveness of the encoding process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- vae
    - The vae parameter is a key component of the node, representing the variational autoencoder model used to encode pixel data into the latent space. The choice and configuration of the VAE model significantly affect the node's performance.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module

# Output types
- positive
    - The positive output represents the encoded conditional data based on the provided positive examples. It is a critical component for subsequent image generation or manipulation processes that rely on positive guidance.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- negative
    - The negative output corresponds to the encoded conditional data based on negative examples. It plays a vital role in ensuring generated images avoid undesirable features.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- latent
    - The latent output is the encoded representation of the input pixel data. It serves as the foundation for further image processing tasks, capturing essential features in a simplified form.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
```
class InstructPixToPixConditioning:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'vae': ('VAE',), 'pixels': ('IMAGE',)}}
    RETURN_TYPES = ('CONDITIONING', 'CONDITIONING', 'LATENT')
    RETURN_NAMES = ('positive', 'negative', 'latent')
    FUNCTION = 'encode'
    CATEGORY = 'conditioning/instructpix2pix'

    def encode(self, positive, negative, pixels, vae):
        x = pixels.shape[1] // 8 * 8
        y = pixels.shape[2] // 8 * 8
        if pixels.shape[1] != x or pixels.shape[2] != y:
            x_offset = pixels.shape[1] % 8 // 2
            y_offset = pixels.shape[2] % 8 // 2
            pixels = pixels[:, x_offset:x + x_offset, y_offset:y + y_offset, :]
        concat_latent = vae.encode(pixels)
        out_latent = {}
        out_latent['samples'] = torch.zeros_like(concat_latent)
        out = []
        for conditioning in [positive, negative]:
            c = []
            for t in conditioning:
                d = t[1].copy()
                d['concat_latent_image'] = concat_latent
                n = [t[0], d]
                c.append(n)
            out.append(c)
        return (out[0], out[1], out_latent)
```