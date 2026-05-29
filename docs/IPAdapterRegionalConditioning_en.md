# Documentation
- Class name: IPAdapterRegionalConditioning
- Category: ipadapter/params
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

IPAdapterRegionalConditioning node is a tool for generating images with regional conditioning. The node primarily handles attention masks and text conditioning for specified image regions during generation.

# Input types

## Required
- image
- Reference image, which will be encoded and used as a condition for generating a new image. Ensure the key parts of the reference image are centered to achieve better results.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_weight
- Image weight, used to adjust the influence of the image. This parameter balances the relationship between image and text, ensuring the generated image meets expectations.
    - Comfy dtype: FLOAT
    - Python dtype: float
- prompt_weight
- Text weight, used to adjust the influence of text. This parameter balances the relationship between text and image, ensuring the generated image meets expectations.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_type
- Weight type, used to specify the calculation method for weights. This parameter controls how weights are computed to achieve better generation results.
    - Comfy dtype: WEIGHT_TYPES
    - Python dtype: str
- start_at
- Start position, used to specify the starting point of conditioned generation. This parameter controls where the image generation begins for better results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
- End position, used to specify the ending point of conditioned generation. This parameter controls where the image generation ends for better results.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- mask
- Attention mask, used to specify the attention region for the generated image. This parameter controls the focus area of the image for better results.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- positive
- Positive conditioning, used to specify the positive condition for the generated image. This parameter controls the positive condition of the image for better results.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative
- Negative conditioning, used to specify the negative condition for the generated image. This parameter controls the negative condition of the image for better results.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor


# Output types

- IPADAPTER_PARAMS
- IP adapter parameters, containing all input parameter contents.
- POSITIVE
- Positive conditioning, containing all input parameter contents.
- NEGATIVE
- Negative conditioning, containing all input parameter contents.

# Usage tips
- Infra type: GPU

# Source code
```
class IPAdapterRegionalConditioning:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            #"set_cond_area": (["default", "mask bounds"],),
            "image": ("IMAGE",),
            "image_weight": ("FLOAT", { "default": 1.0, "min": -1.0, "max": 3.0, "step": 0.05 }),
            "prompt_weight": ("FLOAT", { "default": 1.0, "min": 0.0, "max": 10.0, "step": 0.05 }),
            "weight_type": (WEIGHT_TYPES, ),
            "start_at": ("FLOAT", { "default": 0.0, "min": 0.0, "max": 1.0, "step": 0.001 }),
            "end_at": ("FLOAT", { "default": 1.0, "min": 0.0, "max": 1.0, "step": 0.001 }),
        }, "optional": {
            "mask": ("MASK",),
            "positive": ("CONDITIONING",),
            "negative": ("CONDITIONING",),
        }}

    RETURN_TYPES = ("IPADAPTER_PARAMS", "CONDITIONING", "CONDITIONING", )
    RETURN_NAMES = ("IPADAPTER_PARAMS", "POSITIVE", "NEGATIVE")
    FUNCTION = "conditioning"

    CATEGORY = "ipadapter/params"

    def conditioning(self, image, image_weight, prompt_weight, weight_type, start_at, end_at, mask=None, positive=None, negative=None):
        set_area_to_bounds = False #if set_cond_area == "default" else True

        if mask is not None:
            if positive is not None:
                positive = conditioning_set_values(positive, {"mask": mask, "set_area_to_bounds": set_area_to_bounds, "mask_strength": prompt_weight})
            if negative is not None:
                negative = conditioning_set_values(negative, {"mask": mask, "set_area_to_bounds": set_area_to_bounds, "mask_strength": prompt_weight})

        ipadapter_params = {
            "image": [image],
            "attn_mask": [mask],
            "weight": [image_weight],
            "weight_type": [weight_type],
            "start_at": [start_at],
            "end_at": [end_at],
        }

        return (ipadapter_params, positive, negative, )
```