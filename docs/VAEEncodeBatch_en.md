
# Documentation
- Class name: VAEEncodeBatch
- Category: Bmad
- Output node: False

The VAEEncodeBatch node is designed to batch-process images using a specified VAE model, encoding them into latent space representations. It allows simultaneous encoding of multiple images, improving processing efficiency and scalability.

# Input types
## Required
- inputs_len
- Specify the number of images to encode in the batch. This parameter controls image iteration and subsequent encoding, affecting the node's execution and the size of the output latent representations.
    - Comfy dtype: INT
    - Python dtype: int
- vae
- The VAE model used to encode images. This parameter is crucial for determining how images are transformed into latent space representations.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module

# Output types
- latent
- The encoded latent space representations of the batch images. This output packages the input images into a format suitable for further processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class VAEEncodeBatch:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "inputs_len": ("INT", {"default": 3, "min": 2, "max": 32, "step": 1}),
            "vae": ("VAE",)
        }}

    RETURN_TYPES = ("LATENT",)
    FUNCTION = "encode"
    CATEGORY = "Bmad"

    def encode(self, inputs_len, vae, **kwargs):
        vae_encoder = nodes.VAEEncode()

        def get_latent(input_name):
            pixels = kwargs[input_name]
            pixels = vae_encoder.vae_encode_crop_pixels(pixels)
            return vae.encode(pixels[:, :, :, :3])

        latent = get_latent("image_1")
        for r in range(1, inputs_len):
            latent = torch.cat([latent, get_latent(f"image_{r + 1}")], dim=0)

        return ({"samples": latent},)

```
