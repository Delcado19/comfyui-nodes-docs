
# Documentation
- Class name: easy ipadapterStyleComposition
- Category: EasyUse/Adapter
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The easy ipadapterStyleComposition node simplifies the process of applying style and composition adjustments to images through IPAdapter. It abstracts the complex workflow into a more user-friendly interface, enabling users to modify the aesthetic features and composition of images using preset or custom settings.

# Input types
## Required
- model
    - Models that will apply IPAdapter style and composition adjustments as the basis for modifications.
    - Comfy dtype: MODEL
    - Python dtype: str
- image_style
    - Specify the style image for style transfer or composition adjustments, providing a visual reference for the desired aesthetic effect.
    - Comfy dtype: IMAGE
    - Python dtype: str
- preset
    - Predefined configurations that set benchmarks for style and composition adjustments, simplifying the user's selection process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- weight_style
    - Determine the intensity of style adjustments applied to the image, allowing fine control over the aesthetic effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_composition
    - Control the degree of composition adjustment, enabling users to fine-tune the blending or arrangement of elements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- expand_style
    - Boolean flag indicating whether to apply style adjustments more broadly or restrictively in the image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- combine_embeds
    - Define the method for combining multiple embeddings or adjustments, such as concatenation or averaging, to achieve the desired effect.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- start_at
    - Specify the starting point for applying adjustments, allowing targeted modifications to specific areas in the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - Define the end point for adjustment application, enabling precise control over the affected region.
    - Comfy dtype: FLOAT
    - Python dtype: float
- embeds_scaling
    - Adjust the scaling of embeddings to influence the intensity and impact of style and composition adjustments.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- cache_mode
    - Set the caching strategy for the node to optimize performance and resource usage based on the selected mode.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Optional
- image_composition
    - Optional. Image used for composition adjustments, providing an additional layer of blending or arrangement.
    - Comfy dtype: IMAGE
    - Python dtype: str
- image_negative
    - Optional. Image representing undesirable aesthetic elements, guiding the adjustment process to avoid these features.
    - Comfy dtype: IMAGE
    - Python dtype: str
- attn_mask
    - Optional. Mask that highlights specific areas of the image for focused adjustments, improving application precision.
    - Comfy dtype: MASK
    - Python dtype: str
- clip_vision
    - Optional. Integrate visual embeddings from the CLIP model to guide style and composition adjustments, enriching contextual understanding.
    - Comfy dtype: CLIP_VISION
    - Python dtype: str
- optional_ipadapter
    - Optional. Specify IPAdapter for advanced customization and control over the adjustment process, providing extended functionality beyond presets.
    - Comfy dtype: IPADAPTER
    - Python dtype: str

# Output types
- model
    - Modified model with style and composition adjustments applied, reflecting the desired aesthetic changes.
    - Comfy dtype: MODEL
    - Python dtype: str
- ipadapter
    - IPAdapter instance used for adjustments, encapsulating specific configurations and modifications made.
    - Comfy dtype: IPADAPTER
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ipadapterStyleComposition(ipadapter):
    def __init__(self):
        super().__init__()
        pass

    @classmethod
    def INPUT_TYPES(cls):
        ipa_cls = cls()
        normal_presets = ipa_cls.normal_presets
        weight_types = ipa_cls.weight_types
        return {
            "required": {
                "model": ("MODEL",),
                "image_style": ("IMAGE",),
                "preset": (normal_presets,),
                "weight_style": ("FLOAT", {"default": 1.0, "min": -1, "max": 5, "step": 0.05}),
                "weight_composition": ("FLOAT", {"default": 1.0, "min": -1, "max": 5, "step": 0.05}),
                "expand_style": ("BOOLEAN", {"default": False}),
                "combine_embeds": (["concat", "add", "subtract", "average", "norm average"], {"default": "average"}),
                "start_at": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.001}),
                "end_at": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.001}),
                "embeds_scaling": (['V only', 'K+V', 'K+V w/ C penalty', 'K+mean(V) w/ C penalty'],),
                "cache_mode": (["insightface only", "clip_vision only", "ipadapter only", "all", "none"],
                               {"default": "insightface only"},),
            },
            "optional": {
                "image_composition": ("IMAGE",),
                "image_negative": ("IMAGE",),
                "attn_mask": ("MASK",),
                "clip_vision": ("CLIP_VISION",),
                "optional_ipadapter": ("IPADAPTER",),
            }
        }

    CATEGORY = "EasyUse/Adapter"

    RETURN_TYPES = ("MODEL", "IPADAPTER",)
    RETURN_NAMES = ("model", "ipadapter",)
    CATEGORY = "EasyUse/Adapter"
    FUNCTION = "apply"

    def apply(self, model, preset, weight_style, weight_composition, expand_style, combine_embeds, start_at, end_at, embeds_scaling, cache_mode, image_style=None , image_composition=None, image_negative=None, clip_vision=None, attn_mask=None, optional_ipadapter=None):
        model, ipadapter = self.load_model(model, preset, 0, 'CPU', clip_vision=None, optional_ipadapter=optional_ipadapter, cache_mode=cache_mode)

        if "IPAdapterAdvanced" not in ALL_NODE_CLASS_MAPPINGS:
            self.error()
        cls = ALL_NODE_CLASS_MAPPINGS["IPAdapterAdvanced"]

        model, image = cls().apply_ipadapter(model, ipadapter, start_at=start_at, end_at=end_at, weight_style=weight_style, weight_composition=weight_composition, weight_type='linear', combine_embeds=combine_embeds, weight_faceidv2=weight_composition, image_style=image_style, image_composition=image_composition, image_negative=image_negative, expand_style=expand_style, clip_vision=clip_vision, attn_mask=attn_mask, insightface=None, embeds_scaling=embeds_scaling)
        return (model, ipadapter)

```
