# Documentation
- Class name: PPFNCrossHatchSettings
- Category: Power Noise Suite/Sampling/Settings
- Output node: False
- Repo Ref: https://github.com/WASasquatch/PowerNoiseSuite

The PPFNCrossHatchSettings node configures settings for the cross‑hatch pattern generation process. It encapsulates parameters that affect pattern frequency, octaves, and persistence, as well as color attributes (such as tolerance, color count) and stylization aspects (such as angle, brightness, contrast, and blur). This node plays a key role in determining the visual characteristics and aesthetic quality of the generated cross‑hatch pattern.

# Input types
## Required
- frequency
- The frequency parameter determines the base rate at which the cross‑hatch pattern is generated. This fundamental setting influences the granularity and level of detail. Higher frequency yields finer patterns; lower frequency yields coarser patterns.
    - Comfy dtype: FLOAT
    - Python dtype: float
- octaves
- Octaves define the number of layers or iterations used to create the cross‑hatch pattern. More octaves produce more complex and detailed patterns; fewer octaves produce simpler patterns with less detail.
    - Comfy dtype: INT
    - Python dtype: int
- persistence
- Persistence controls each octave's influence on the final pattern. Higher persistence gives each octave a more significant contribution, resulting in a more complex pattern; lower persistence reduces each octave's impact, simplifying the pattern.
    - Comfy dtype: FLOAT
    - Python dtype: float
- color_tolerance
- Color tolerance measures how close colors must be to be considered part of the same cross‑hatch pattern. It affects color blending within the pattern and overall color harmony.
    - Comfy dtype: FLOAT
    - Python dtype: float
- num_colors
- The color count parameter specifies how many different colors are used in the cross‑hatch pattern. This influences color diversity and the vibrancy of the final pattern.
    - Comfy dtype: INT
    - Python dtype: int
- angle_degrees
- Angle degrees specify the angle at which cross‑hatch lines are drawn. This setting affects the pattern's orientation and can create different visual effects based on its value.
    - Comfy dtype: FLOAT
    - Python dtype: float
- brightness
- Brightness adjusts the overall lightness or darkness of the cross‑hatch pattern. Depending on the set value, the pattern can appear more vivid or softer.
    - Comfy dtype: FLOAT
    - Python dtype: float
- contrast
- Contrast affects the difference between light and dark areas in the cross‑hatch pattern. Higher contrast makes the pattern more striking with clearer differences; lower contrast yields a softer effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blur
- Blur determines the amount of blur applied to the cross‑hatch pattern. It can soften edges, creating a smoother, more diffused appearance.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- ch_settings
- ch_settings output encapsulates the configuration settings for cross‑hatch pattern generation. It includes all parameters fed into the node and guides the subsequent pattern generation process.
    - Comfy dtype: CH_SETTINGS
    - Python dtype: Dict[str, Union[float, int]]

# Usage tips
- Infra type: CPU

# Source code
```
class PPFNCrossHatchSettings:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'frequency': ('FLOAT', {'default': 320.0, 'max': 1024.0, 'min': 0.001, 'step': 0.001}), 'octaves': ('INT', {'default': 12, 'max': 32, 'min': 1, 'step': 1}), 'persistence': ('FLOAT', {'default': 1.5, 'max': 2.0, 'min': 0.001, 'step': 0.001}), 'num_colors': ('INT', {'default': 16, 'max': 256, 'min': 2, 'step': 1}), 'color_tolerance': ('FLOAT', {'default': 0.05, 'max': 1.0, 'min': 0.001, 'step': 0.001}), 'angle_degrees': ('FLOAT', {'default': 45.0, 'max': 360.0, 'min': 0.0, 'step': 0.01}), 'brightness': ('FLOAT', {'default': 0.0, 'max': 1.0, 'min': -1.0, 'step': 0.001}), 'contrast': ('FLOAT', {'default': 0.0, 'max': 1.0, 'min': -1.0, 'step': 0.001}), 'blur': ('FLOAT', {'default': 2.5, 'max': 1024, 'min': 0, 'step': 0.01})}}
    RETURN_TYPES = ('CH_SETTINGS',)
    RETURN_NAMES = ('ch_settings',)
    FUNCTION = 'cross_hatch_settings'
    CATEGORY = 'Power Noise Suite/Sampling/Settings'

    def cross_hatch_settings(self, frequency, octaves, persistence, color_tolerance, num_colors, angle_degrees, brightness, contrast, blur):
        return ({'frequency': frequency, 'octaves': octaves, 'persistence': persistence, 'color_tolerance': color_tolerance, 'num_colors': num_colors, 'angle_degrees': angle_degrees, 'brightness': brightness, 'contrast': contrast, 'blur': blur},)
```