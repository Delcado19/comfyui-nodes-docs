# Documentation
- Class name: PresetRatioSelector
- Category: Mikey/Utils
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The PresetRatioSelector node is designed to calculate and select image sizes based on predefined presets. It allows customization of latent dimensions, content-to-edge ratios, target sizes, and cropping parameters. The primary function of this node is to automatically select image ratios according to user-defined presets, ensuring consistency and ease of use in image manipulation tasks.

# Input types
## Required
- select_preset
    - The select_preset parameter is critical for determining which preset ratio to apply. It sets the starting point for the node's calculation process and is essential for achieving the desired image dimensions.
    - Comfy dtype: STRING
    - Python dtype: str
- swap_axis
    - The swap_axis parameter allows users to swap the width and height dimensions of the selected preset. This can be important in scenarios where image orientation needs to be adjusted.
    - Comfy dtype: STRING
    - Python dtype: str
- use_preset_seed
    - The use_preset_seed parameter determines whether a seed value is used to select the preset. This can introduce variability in the selection process, allowing for a more diverse set of image ratios to be chosen.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - The seed parameter is used in conjunction with the use_preset_seed flag to influence the selection of preset ratios. It adds a layer of control over randomness in the selection process.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- unique_id
    - The unique_id parameter is used to uniquely identify the operation within the system. It can be important for tracking and managing node execution in larger workflows.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str
- extra_pnginfo
    - The extra_pnginfo parameter provides additional information related to the PNG image format. This can be useful for handling specific image properties associated with node operations.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: str
- prompt
    - The prompt parameter can be used to provide descriptive text that guides the node's operation. It may influence preset selection based on the context provided by the text.
    - Comfy dtype: PROMPT
    - Python dtype: str

# Output types
- latent_w
    - The latent_w output represents the calculated width of the latent space. It is a key parameter for determining the horizontal dimension of the image in the latent representation.
    - Comfy dtype: INT
    - Python dtype: int
- latent_h
    - The latent_h output represents the calculated height of the latent space. It is a key parameter for determining the vertical dimension of the image in the latent representation.
    - Comfy dtype: INT
    - Python dtype: int
- cte_w
    - The cte_w output represents the calculated width of the content-to-edge ratio. It is important for maintaining the aspect ratio and proportions of the image.
    - Comfy dtype: INT
    - Python dtype: int
- cte_h
    - The cte_h output represents the calculated height of the content-to-edge ratio. It plays a similar role to cte_w in maintaining the aspect ratio and proportions of the image.
    - Comfy dtype: INT
    - Python dtype: int
- target_w
    - The target_w output represents the calculated target width of the image. It is used to guide the resizing or scaling process to achieve the desired dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- target_h
    - The target_h output represents the calculated target height of the image. It works together with target_w to ensure the image dimensions meet the specified requirements.
    - Comfy dtype: INT
    - Python dtype: int
- crop_w
    - The crop_w output represents the calculated width of the image cropping process. It is critical for defining the area of the image that will be visible after cropping.
    - Comfy dtype: INT
    - Python dtype: int
- crop_h
    - The crop_h output represents the calculated height of the image cropping process. It works together with crop_w to determine the final visible area of the cropped image.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class PresetRatioSelector:

    @classmethod
    def INPUT_TYPES(s):
        (s.ratio_presets, s.ratio_config) = read_ratio_presets()
        return {'required': {'select_preset': (s.ratio_presets, {'default': 'none'}), 'swap_axis': (['true', 'false'], {'default': 'false'}), 'use_preset_seed': (['true', 'false'], {'default': 'false'}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}, 'hidden': {'unique_id': 'UNIQUE_ID', 'extra_pnginfo': 'EXTRA_PNGINFO', 'prompt': 'PROMPT'}}
    RETURN_TYPES = ('INT', 'INT', 'INT', 'INT', 'INT', 'INT', 'INT', 'INT')
    RETURN_NAMES = ('latent_w', 'latent_h', 'cte_w', 'cte_h', 'target_w', 'target_h', 'crop_w', 'crop_h')
    CATEGORY = 'Mikey/Utils'
    FUNCTION = 'calculate'

    def calculate(self, select_preset, swap_axis, use_preset_seed, seed, unique_id=None, extra_pnginfo=None, prompt=None):
        if use_preset_seed == 'true' and len(self.ratio_presets) > 0:
            len_presets = len(self.ratio_presets)
            offset = seed % (len_presets - 1)
            presets = [p for p in self.ratio_presets if p != 'none']
            select_preset = presets[offset]
        latent_width = self.ratio_config[select_preset]['custom_latent_w']
        latent_height = self.ratio_config[select_preset]['custom_latent_h']
        cte_w = self.ratio_config[select_preset]['cte_w']
        cte_h = self.ratio_config[select_preset]['cte_h']
        target_w = self.ratio_config[select_preset]['target_w']
        target_h = self.ratio_config[select_preset]['target_h']
        crop_w = self.ratio_config[select_preset]['crop_w']
        crop_h = self.ratio_config[select_preset]['crop_h']
        if swap_axis == 'true':
            (latent_width, latent_height) = (latent_height, latent_width)
            (cte_w, cte_h) = (cte_h, cte_w)
            (target_w, target_h) = (target_h, target_w)
            (crop_w, crop_h) = (crop_h, crop_w)
        return (latent_width, latent_height, cte_w, cte_h, target_w, target_h, crop_w, crop_h)
```