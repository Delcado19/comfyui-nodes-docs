
# Documentation
- Class name: OverlayInpaintedLatent
- Category: Art Venture/Inpainting
- Output node: False

The OverlayInpaintedLatent node aims to blend the original and inpainted latent representations based on a given mask, resulting in a seamless overlay effect that perfectly merges the inpainted content with the original. This process is crucial for artistic creation and image editing applications, as it can subtly incorporate new elements while preserving the integrity of the original image.

# Input types
## Required
- original
    - 'original' input represents the original latent representation before any inpainting. It serves as the basis for the overlay process, ensuring that the inpainted content is integrated in a way that respects the original image structure and content.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- inpainted
    - 'inpainted' input contains the latent representation of the inpainted region. It is critical to the overlay process because it provides the new content that will be mixed with the original latent representation according to the mask.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- mask
    - 'mask' input specifies the area in the original latent representation that should be replaced or blended with the inpainted content. It plays a key role in determining how the original and inpainted representations are combined in the overlay process.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- latent
    - The output is a latent representation that combines the original and inpainted content based on the provided mask, achieving a seamless integration of the two elements.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class OverlayInpaintedLatent:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "original": ("LATENT",),
                "inpainted": ("LATENT",),
                "mask": ("MASK",),
            }
        }

    RETURN_TYPES = ("LATENT",)
    CATEGORY = "Art Venture/Inpainting"
    FUNCTION = "overlay"

    def overlay(self, original: Dict, inpainted: Dict, mask: torch.Tensor):
        s_original: torch.Tensor = original["samples"]
        s_inpainted: torch.Tensor = inpainted["samples"]

        if s_original.shape[0] != s_inpainted.shape[0]:
            raise ValueError("original and inpainted must have same batch size")

        if s_original.shape[0] != mask.shape[0]:
            raise ValueError("original and mask must have same batch size")

        overlays = []

        for org, inp, msk in zip(s_original, s_inpainted, mask):
            latmask = tensor2pil(msk.unsqueeze(0), "L").convert("RGB").resize((org.shape[2], org.shape[1]))
            latmask = np.moveaxis(np.array(latmask, dtype=np.float32), 2, 0) / 255
            latmask = latmask[0]
            latmask = np.around(latmask)
            latmask = np.tile(latmask[None], (4, 1, 1))

            msk = torch.asarray(1.0 - latmask)
            nmask = torch.asarray(latmask)

            overlayed = inp * nmask + org * msk
            overlays.append(overlayed)

        samples = torch.stack(overlays)
        return ({"samples": samples},)

```
