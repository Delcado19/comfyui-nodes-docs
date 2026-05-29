# Documentation
- Class name: SeargeUpscaleModels
- Category: UI_INPUTS
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node coordinates the selection and configuration of image enhancement upscaling models, focusing on integrating various upscalers to achieve the desired output quality.

# Input types
## Required
- detail_processor
    - The detail processor is essential for improving image quality, playing a key role throughout the overall upscaling process.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- high_res_upscaler
    - High-resolution upscalers are crucial for increasing image resolution, significantly contributing to the final visual effect.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- primary_upscaler
    - The primary upscaler is critical during the initial scaling stage, setting the foundation for further enhancement.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- secondary_upscaler
    - The secondary upscaler further refines the image after the primary scaling, improving detail and clarity.
    - Comfy dtype: COMBO[str]
    - Python dtype: str

# Output types
- data
    - The output data encapsulates the configuration of the upscaling model, essential for subsequent processing and final image output.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeUpscaleModels:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'detail_processor': (UI.UPSCALERS_1x_WITH_NONE(),), 'high_res_upscaler': (UI.UPSCALERS_4x_WITH_NONE(),), 'primary_upscaler': (UI.UPSCALERS_4x_WITH_NONE(),), 'secondary_upscaler': (UI.UPSCALERS_4x_WITH_NONE(),)}, 'optional': {'data': ('SRG_DATA_STREAM',)}}
    RETURN_TYPES = ('SRG_DATA_STREAM',)
    RETURN_NAMES = ('data',)
    FUNCTION = 'get'
    CATEGORY = UI.CATEGORY_UI_INPUTS

    @staticmethod
    def create_dict(detail_processor, high_res_upscaler, primary_upscaler, secondary_upscaler):
        return {UI.F_DETAIL_PROCESSOR: detail_processor, UI.F_HIGH_RES_UPSCALER: high_res_upscaler, UI.F_PRIMARY_UPSCALER: primary_upscaler, UI.F_SECONDARY_UPSCALER: secondary_upscaler}

    def get(self, detail_processor, high_res_upscaler, primary_upscaler, secondary_upscaler, data=None):
        if data is None:
            data = {}
        data[UI.S_UPSCALE_MODELS] = self.create_dict(detail_processor, high_res_upscaler, primary_upscaler, secondary_upscaler)
        return (data,)
```