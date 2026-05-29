
# Documentation
- Class name: RegionalIPAdapterEncodedMask __Inspire
- Category: InspirePack/Regional
- Output node: False

This node is specifically used to apply image processing adjustments based on encoded masks within the InspirePack framework, utilizing regional IP adapter technology to conditionally modify image embeddings according to specified masks and weights.

# Input types
## Required
- mask
    - The mask input specifies the region in the image that requires conditional embedding adjustments, playing a key role in node operations by defining the area to be focused on.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- embeds
    - Represents the embedding of desired adjustments or features to be applied to the specified area of the image, influencing the final output based on the mask.
    - Comfy dtype: EMBEDS
    - Python dtype: torch.Tensor
- weight
    - A floating point value used to determine the strength of the embedding adjustment applied to the image, allowing fine-tuning of the effect intensity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_type
    - Specifies the method for applying weights to the embedding, offering options such as original, linear, or channel penalty to achieve diverse adjustment effects.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- start_at
    - Defines the starting point for effect application in image processing, enabling phased adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - Sets the end point for effect application, allowing precise control over the scope of adjustment.
    - Comfy dtype: FLOAT
    - Python dtype: float
- unfold_batch
    - A boolean flag that, when true, processes each item in the batch individually, enhancing flexibility for handling batch inputs.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

## Optional
- neg_embeds
    - An optional negative embedding that can be used to specify features or adjustments to avoid in specific areas, adding the ability for reverse effects.
    - Comfy dtype: EMBEDS
    - Python dtype: torch.Tensor

# Output types
- regional_ipadapter
    - Generates a conditional version of the input based on the encoded mask and specified parameters, reflecting the target adjustments.
    - Comfy dtype: REGIONAL_IPADAPTER
    - Python dtype: IPAdapterConditioning


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class RegionalIPAdapterEncodedMask:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "mask": ("MASK",),

                "embeds": ("EMBEDS",),
                "weight": ("FLOAT", {"default": 0.7, "min": -1, "max": 3, "step": 0.05}),
                "weight_type": (["original", "linear", "channel penalty"],),
                "start_at": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.001}),
                "end_at": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.001}),
                "unfold_batch": ("BOOLEAN", {"default": False}),
            },
            "optional": {
                "neg_embeds": ("EMBEDS",),
            }
        }

    RETURN_TYPES = ("REGIONAL_IPADAPTER", )
    FUNCTION = "doit"

    CATEGORY = "InspirePack/Regional"

    def doit(self, mask, embeds, weight, weight_type, start_at=0.0, end_at=1.0, unfold_batch=False, neg_embeds=None):
        cond = IPAdapterConditioning(mask, weight, weight_type, embeds=embeds, start_at=start_at, end_at=end_at, unfold_batch=unfold_batch, neg_embeds=neg_embeds)
        return (cond, )

```
