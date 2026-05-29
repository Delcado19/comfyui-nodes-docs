
# Documentation
- Class name: IP Adapter Settings (JPS)
- Category: JPS Nodes/Settings
- Output node: False
- Repo Ref: https://github.com/jps-yes/jps-ip-adapter

The IP Adapter Settings (JPS) node is designed to configure and adjust image processing settings for various stages of image generation or processing. It allows users to customize parameters such as weights, noise, start and end points, cropping, scaling, and model selection, enabling fine-grained control over the image processing pipeline.

# Input types
## Required
- ipa_weight
    - Specifies the weight for image processing adaptation, affecting the intensity of the applied settings.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_wtype
    - Defines the type of weight application, such as linear or ease-in-out, influencing the progression of the image processing effect.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- ipa_noise
    - Sets the level of noise to apply during image processing, adding texture or grain as specified.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_start
    - Determines the starting point of the image processing effect, allowing precise control over when adaptation begins.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_stop
    - Defines the ending point of the image processing effect, making the duration of the effect customizable.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_crop
    - Specifies cropping preferences, such as center or top, to adjust the focal area of the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- ipa_zoom
    - Sets the scaling level for image processing, allowing closer inspection or a broader view as needed.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_offset_x
    - Determines the horizontal offset for image processing, enabling lateral adjustments.
    - Comfy dtype: INT
    - Python dtype: int
- ipa_offset_y
    - Specifies the vertical offset for image processing, allowing longitudinal adjustments.
    - Comfy dtype: INT
    - Python dtype: int
- ipa_mask
    - Defines the type of mask used in image processing, such as mask editor or red in image, to target specific areas.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: int
- crop_intpol
    - Specifies the interpolation method for cropping, affecting the smoothness or sharpness of edges.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sharpening
    - Sets the sharpening intensity, enhancing the clarity and detail of the processed image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_model
    - Selects the model type for image processing, such as SDXL ViT-H, influencing the characteristics of the adaptation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: int

# Output types
- ip_adapter_single_settings
    - Represents a tuple of configured settings for a single image processing adaptation. This output encapsulates all parameters required to apply the specified image processing adjustments.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[float, str, float, float, float, str, float, int, int, int, str, float, int]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/jps-yes/jps-ip-adapter)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
