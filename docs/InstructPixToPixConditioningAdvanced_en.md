
# Documentation
- Class name: InstructPixToPixConditioningAdvanced
- Category: conditioning/instructpix2pix
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The InstructPixToPixConditioningAdvanced node is designed for advanced conditioning setup in Pix2Pix image translation tasks. It receives positive and negative conditioning inputs, as well as new and original latent representations, to produce modified conditioning and latent outputs. The node aims to facilitate complex image manipulation tasks by allowing additional latent information to be integrated into the conditioning process.

# Input types
## Required
- positive
    - Represents the positive conditioning input, used to guide the image translation process toward the desired direction.
    - Comfy dtype: CONDITIONING
    - Python dtype: Tuple[CONDITIONING]
- negative
    - Represents the negative conditioning input, used to steer the image translation away from undesired features.
    - Comfy dtype: CONDITIONING
    - Python dtype: Tuple[CONDITIONING]
- new
    - Represents the new latent representation to be integrated into the conditioning process.
    - Comfy dtype: LATENT
    - Python dtype: Dict with key 'samples' and value as a tensor
- original
    - Represents the original latent representation, used for shape consistency comparison with the new representation and integration into the conditioning setup.
    - Comfy dtype: LATENT
    - Python dtype: Dict with key 'samples' and value as a tensor

# Output types
- cond1
    - Modified positive conditioning output.
    - Comfy dtype: CONDITIONING
    - Python dtype: CONDITIONING
- cond2
    - Modified negative conditioning output.
    - Comfy dtype: CONDITIONING
    - Python dtype: CONDITIONING
- negative
    - Unmodified negative conditioning input, passed through for consistency.
    - Comfy dtype: CONDITIONING
    - Python dtype: CONDITIONING
- latent
    - New latent representation with samples integrated into the conditioning output.
    - Comfy dtype: LATENT
    - Python dtype: Dict with key 'samples' and value as a tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class InstructPixToPixConditioningAdvanced:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {"positive": ("CONDITIONING", ),
                             "negative": ("CONDITIONING", ),
                             "new": ("LATENT", ),
                             "original": ("LATENT", ),
                             }}

    RETURN_TYPES = ("CONDITIONING","CONDITIONING","CONDITIONING","LATENT")
    RETURN_NAMES = ("cond1", "cond2", "negative", "latent")
    FUNCTION = "encode"

    CATEGORY = "conditioning/instructpix2pix"

    def encode(self, positive, negative, new, original):
        new_shape, orig_shape = new["samples"].shape, original["samples"].shape
        if new_shape != orig_shape:
            raise Exception(f"Latent shape mismatch: {new_shape} and {orig_shape}")
        
        out_latent = {}
        out_latent["samples"] = new["samples"]
        out = []
        for conditioning in [positive, negative]:
            c = []
            for t in conditioning:
                d = t[1].copy()
                d["concat_latent_image"] = original["samples"]
                n = [t[0], d]
                c.append(n)
            out.append(c)
        return (out[0], out[1], negative, out_latent)

```
