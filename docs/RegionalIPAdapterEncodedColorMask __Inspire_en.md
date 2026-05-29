
# Documentation
- Class name: RegionalIPAdapterEncodedColorMask __Inspire
- Category: InspirePack/Regional
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack

RegionalIPAdapterEncodedColorMask __Inspire node is specifically designed to apply local image processing adaptation based on encoded color masks. It combines specific color-based mask areas with embedding adjustments, allowing targeted image modifications while respecting user-defined spatial and color-based constraints.

# Input types
## Required
- color_mask
    - The color mask image used to define the adaptation region. It serves as a spatial guide to determine where to apply the adaptation based on color matching.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_color
    - A string specifying the color used to identify the region of interest in the color mask. This color acts as a key to isolate specific processing areas.
    - Comfy dtype: STRING
    - Python dtype: str
- embeds
    - Embeddings representing the desired adjustments or effects to be applied within the specified region. These embeddings guide the adaptation process.
    - Comfy dtype: EMBEDS
    - Python dtype: torch.Tensor
- weight
    - A float value determining the strength or influence of the embeddings on the adaptation process. It adjusts the intensity of the specified adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_type
    - Specifies the method for applying weights to embeddings, providing options such as original, linear, or channel penalty to fine-tune the adaptation effect.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list
- start_at
    - A float representing the starting point for applying adaptation (expressed as progress of layers or steps), allowing phased or gradual application.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - A float representing the end point for adaptation application, enabling precise control over the modification range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- unfold_batch
    - A boolean indicating whether to expand batches for processing, affecting how adaptation is applied across multiple instances.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- neg_embeds
    - Optional embeddings representing negative adjustments or effects, providing a way to specify adaptations that should be avoided or counteracted within the region.
    - Comfy dtype: EMBEDS
    - Python dtype: torch.Tensor

# Output types
- regional_ipadapter
    - The result of local image processing adaptation, blending the specified embeddings and adjustments within the defined color mask region.
    - Comfy dtype: REGIONAL_IPADAPTER
    - Python dtype: IPAdapterConditioning
- mask
    - The post-processed mask used to guide the adaptation, possibly modified based on the specified color and region of interest.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class RegionalIPAdapterEncodedColorMask:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "color_mask": ("IMAGE",),
                "mask_color": ("STRING", {"multiline": False, "default": "#FFFFFF"}),

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

    RETURN_TYPES = ("REGIONAL_IPADAPTER", "MASK")
    FUNCTION = "doit"

    CATEGORY = "InspirePack/Regional"

    def doit(self, color_mask, mask_color, embeds, weight, weight_type, start_at=0.0, end_at=1.0, unfold_batch=False, neg_embeds=None):
        mask = color_to_mask(color_mask, mask_color)
        cond = IPAdapterConditioning(mask, weight, weight_type, embeds=embeds, start_at=start_at, end_at=end_at, unfold_batch=unfold_batch, neg_embeds=neg_embeds)
        return (cond, mask)

```
