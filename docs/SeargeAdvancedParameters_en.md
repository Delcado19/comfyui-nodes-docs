# Documentation
- Class name: SeargeAdvancedParameters
- Category: UI_INPUTS
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node class encapsulates advanced parameters for refining image details, managing dynamic configurations, and adjusting visual elements such as contrast and saturation. It provides fine-grained control over the image enhancement process without directly involving underlying model operations.

# Input types
## Required
- dynamic_cfg_method
    - This parameter specifies the method used to dynamically configure the image enhancement process. It is critical for adjusting the node's behavior according to different input requirements and achieving the desired output quality.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- dynamic_cfg_factor
    - This factor influences the degree of dynamic configuration applied to image enhancement. It is important for fine-tuning the balance between computational efficiency and output detail.
    - Comfy dtype: FLOAT
    - Python dtype: float
- refiner_detail_boost
    - This parameter controls the level of detail enhancement applied during the refinement process. It is essential for improving the clarity and sharpness of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- contrast_factor
    - This factor adjusts the contrast of the image, which is important for creating visual impact and enhancing the overall aesthetic appeal of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- saturation_factor
    - This parameter manages the saturation level of the image, affecting the vividness of colors and the richness of the visual experience.
    - Comfy dtype: FLOAT
    - Python dtype: float
- latent_detailer
    - This parameter selects a potential detail enhancer to further enhance subtle image details. It plays a key role in achieving more nuanced and realistic visual results.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
## Optional
- data
    - This parameter is used to pass in the data to be processed by the node. It is important for the node to operate correctly and produce the expected results.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Any

# Output types
- data
    - The output contains the processed data with advanced parameters applied, ready for further use in the image enhancement pipeline.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeAdvancedParameters:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'dynamic_cfg_method': (UI.DYNAMIC_CFG_METHODS, {'default': UI.NONE}), 'dynamic_cfg_factor': ('FLOAT', {'default': 0.0, 'min': -1.0, 'max': 1.0, 'step': 0.05}), 'refiner_detail_boost': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.05}), 'contrast_factor': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.05}), 'saturation_factor': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.05}), 'latent_detailer': (UI.LATENT_DETAILERS, {'default': UI.NONE})}, 'optional': {'data': ('SRG_DATA_STREAM',)}}
    RETURN_TYPES = ('SRG_DATA_STREAM',)
    RETURN_NAMES = ('data',)
    FUNCTION = 'get'
    CATEGORY = UI.CATEGORY_UI_INPUTS

    @staticmethod
    def create_dict(dynamic_cfg_method, dynamic_cfg_factor, refiner_detail_boost, contrast_factor, saturation_factor, latent_detailer):
        return {UI.F_DYNAMIC_CFG_METHOD: dynamic_cfg_method, UI.F_DYNAMIC_CFG_FACTOR: round(dynamic_cfg_factor, 3), UI.F_REFINER_DETAIL_BOOST: round(refiner_detail_boost, 3), UI.F_CONTRAST_FACTOR: round(contrast_factor, 3), UI.F_SATURATION_FACTOR: round(saturation_factor, 3), UI.F_LATENT_DETAILER: latent_detailer}

    def get(self, dynamic_cfg_method, dynamic_cfg_factor, refiner_detail_boost, contrast_factor, saturation_factor, latent_detailer, data=None):
        if data is None:
            data = {}
        data[UI.S_ADVANCED_PARAMETERS] = self.create_dict(dynamic_cfg_method, dynamic_cfg_factor, refiner_detail_boost, contrast_factor, saturation_factor, latent_detailer)
        return (data,)
```