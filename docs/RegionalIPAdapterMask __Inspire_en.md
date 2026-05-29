
# Documentation
- Class name: RegionalIPAdapterMask __Inspire
- Category: InspirePack/Regional
- Output node: False

This node is specifically used to apply regional image processing adaptation using masks, thereby affecting the generation process. It fine-tunes image generation by adjusting the influence of specific areas of the image, enhancing control over visual output.

# Input types
## Required
- mask
    - The mask parameter specifies the areas in the image to be affected by IPAdapter, allowing targeted adjustments.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- image
    - The image parameter represents the target image to be adapted, serving as the canvas for regional processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- weight
    - Weight determines the strength of influence applied within the masked area, providing a way to balance between the original and adapted aspects of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise
    - Noise adds a degree of randomness or texture during the adaptation process within the specified area, enhancing realism or artistic effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_type
    - Weight type defines the method of applying weights within the masked area, allowing different influence strategies (e.g., linear, original, channel penalty).
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- start_at
    - Starting point specifies the start point of the adaptation effect during the generation process, enabling phased application.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - End point defines the endpoint of the adaptation effect, allowing precise control over the duration of influence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- unfold_batch
    - Expand batches is a Boolean parameter that, when enabled, allows batch processing of multiple images for improved efficiency.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

## Optional
- faceid_v2
    - FaceID v2 is an optional Boolean parameter that, when enabled, applies the second version of face recognition technology for more precise adaptation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- weight_v2
    - Weight v2 allows the use of an alternative weighting mechanism, providing additional control over adaptation strength.
    - Comfy dtype: FLOAT
    - Python dtype: float
- combine_embeds
    - Combined embedding specifies the method for combining multiple embedding vectors, influencing the overall style or feature representation within the masked area.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- neg_image
    - Negative image allows specifying an image that negatively influences the generation within the masked area, providing a way to subtract certain features or styles.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- regional_ipadapter
    - Output is a conditioned model or process adapted based on the specified regional parameters, which can be used for further image generation tasks.
    - Comfy dtype: REGIONAL_IPADAPTER
    - Python dtype: CustomType


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class RegionalIPAdapterMask:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "mask": ("MASK",),

                "image": ("IMAGE",),
                "weight": ("FLOAT", {"default": 0.7, "min": -1, "max": 3, "step": 0.05}),
                "noise": ("FLOAT", {"default": 0.5, "min": 0.0, "max": 1.0, "step": 0.01}),
                "weight_type": (["original", "linear", "channel penalty"],),
                "start_at": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.001}),
                "end_at": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.001}),
                "unfold_batch": ("BOOLEAN", {"default": False}),
            },
            "optional": {
                "faceid_v2": ("BOOLEAN", {"default": False}),
                "weight_v2": ("FLOAT", {"default": 1.0, "min": -1, "max": 3, "step": 0.05}),
                "combine_embeds": (["concat", "add", "subtract", "average", "norm average"],),
                "neg_image": ("IMAGE",),
            }
        }

    RETURN_TYPES = ("REGIONAL_IPADAPTER", )
    FUNCTION = "doit"

    CATEGORY = "InspirePack/Regional"

    def doit(self, mask, image, weight, noise, weight_type, start_at=0.0, end_at=1.0, unfold_batch=False, faceid_v2=False, weight_v2=False, combine_embeds="concat", neg_image=None):
        cond = IPAdapterConditioning(mask, weight, weight_type, noise=noise, image=image, neg_image=neg_image, start_at=start_at, end_at=end_at, unfold_batch=unfold_batch, weight_v2=weight_v2, combine_embeds=combine_embeds)
        return (cond, )

```
