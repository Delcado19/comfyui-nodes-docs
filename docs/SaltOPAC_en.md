
# Documentation
- Class name: SaltOPAC
- Category: SALT/Scheduling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltOPAC node is designed to coordinate Perlin noise sampling configurations for audiovisual content generation frameworks. It specifically targets the optimization and application of Perlin noise settings to enhance dynamic visual effects synchronized with audio or other triggers.

# Input types
## Required
- use_wiggle
    - Controls whether the jitter effect is enabled.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- frame_count
    - Specifies the number of frames to generate.
    - Comfy dtype: INT
    - Python dtype: int
- zoom_range
    - Sets the range of the scaling effect.
    - Comfy dtype: STRING
    - Python dtype: str
- zoom_tremor_scale
    - Adjusts the intensity of scaling jitter.
    - Comfy dtype: FLOAT
    - Python dtype: float
- angle_range
    - Defines the range of angle variation.
    - Comfy dtype: STRING
    - Python dtype: str
- angle_tremor_scale
    - Controls the magnitude of angle jitter.
    - Comfy dtype: FLOAT
    - Python dtype: float
- trx_range
    - Sets the range of X-axis translation.
    - Comfy dtype: STRING
    - Python dtype: str
- trx_tremor_scale
    - Adjusts the intensity of X-axis translation jitter.
    - Comfy dtype: FLOAT
    - Python dtype: float
- try_range
    - Sets the range of Y-axis translation.
    - Comfy dtype: STRING
    - Python dtype: str
- try_tremor_scale
    - Adjusts the intensity of Y-axis translation jitter.
    - Comfy dtype: FLOAT
    - Python dtype: float
- trz_range
    - Sets the range of Z-axis translation.
    - Comfy dtype: STRING
    - Python dtype: str
- trz_tremor_scale
    - Adjusts the intensity of Z-axis translation jitter.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rotx_range
    - Defines the range of X-axis rotation.
    - Comfy dtype: STRING
    - Python dtype: str
- rotx_tremor_scale
    - Controls the magnitude of X-axis rotation jitter.
    - Comfy dtype: FLOAT
    - Python dtype: float
- roty_range
    - Defines the range of Y-axis rotation.
    - Comfy dtype: STRING
    - Python dtype: str
- roty_tremor_scale
    - Controls the magnitude of Y-axis rotation jitter.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rotz_range
    - Defines the range of Z-axis rotation.
    - Comfy dtype: STRING
    - Python dtype: str
- rotz_tremor_scale
    - Controls the magnitude of Z-axis rotation jitter.
    - Comfy dtype: FLOAT
    - Python dtype: float

## Optional
- opac_perlin_settings
    - Contains a dictionary of Perlin noise settings for customizing noise generation.
    - Comfy dtype: DICT
    - Python dtype: dict

# Output types
- zoom_schdule_list
    - The generated scaling effect schedule list.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- angle_schdule_list
    - The generated angle variation schedule list.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- translation_x_schdule_list
    - The schedule list for X-axis translation effects.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- translation_y_schdule_list
    - The schedule list for Y-axis translation effects.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- translation_z_schdule_list
    - Schedule list for Z-axis translation effect.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- rotation_3d_x_schdule_list
    - Schedule list for X-axis 3D rotation effect.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- rotation_3d_y_schdule_list
    - Schedule list for Y-axis 3D rotation effect.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- rotation_3d_z_schdule_list
    - Schedule list for Z-axis 3D rotation effect.
    - Comfy dtype: LIST
    - Python dtype: List[float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
