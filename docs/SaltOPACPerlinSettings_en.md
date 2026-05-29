
# Documentation
- Class name: SaltOPACPerlinSettings
- Category: SALT/Scheduling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltOPACPerlinSettings node configures Perlin noise sampling parameters for OPAC nodes to generate dynamic visual effects based on noise patterns. It processes input settings to adjust the appearance of visual effects, such as applying the Perlin noise algorithm to modify opacity and texture.

# Input types
## Required
- zoom_octaves
    - Controls the number of Perlin noise layers to apply, affecting the complexity of the visual effect.
    - Comfy dtype: INT
    - Python dtype: int
- zoom_persistence
    - Affects the amplitude of each octave in Perlin noise, adjusting the contrast of the visual effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- zoom_lacunarity
    - Affects the frequency of each octave in Perlin noise, modifying the texture of the visual effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- zoom_repeat
    - Determines how frequently the Perlin noise pattern repeats, affecting the periodicity of the visual effect.
    - Comfy dtype: INT
    - Python dtype: int
- angle_octaves
    - Specifies the number of Perlin noise layers for angle adjustment, affecting the complexity of rotation.
    - Comfy dtype: INT
    - Python dtype: int
- angle_persistence
    - Adjusts the amplitude of each octave in angular Perlin noise, affecting the contrast of rotation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- angle_lacunarity
    - Modifies the frequency of each octave in angular Perlin noise, changing the texture of rotation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- angle_repeat
    - Sets the repetition rate of the angular Perlin noise pattern, affecting the periodicity of rotation.
    - Comfy dtype: INT
    - Python dtype: int
- trx_octaves
    - Defines the number of Perlin noise layers for X-axis translation, affecting the complexity of movement.
    - Comfy dtype: INT
    - Python dtype: int
- trx_persistence
    - Controls the amplitude of each octave in X-axis translation, adjusting the contrast of movement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- trx_lacunarity
    - Affects the frequency of each octave in X-axis translation, modifying the texture of movement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- trx_repeat
    - Determines the repetition rate of the X-axis translation Perlin noise pattern, affecting the periodicity of movement.
    - Comfy dtype: INT
    - Python dtype: int
- try_octaves
    - Specifies the number of Perlin noise layers for Y-axis translation, affecting the complexity of movement.
    - Comfy dtype: INT
    - Python dtype: int
- try_persistence
    - Adjusts the amplitude of each octave in Y-axis translation, affecting the contrast of movement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- try_lacunarity
    - Modifies the frequency of each octave in Y-axis translation, changing the texture of movement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- try_repeat
    - Sets the repetition rate of the Y-axis translation Perlin noise pattern, affecting the periodicity of movement.
    - Comfy dtype: INT
    - Python dtype: int
- trz_octaves
    - Defines the number of Perlin noise layers for Z-axis translation, affecting the complexity of depth movement.
    - Comfy dtype: INT
    - Python dtype: int
- trz_persistence
    - Controls the amplitude of each octave in Z-axis translation, adjusting the contrast of depth movement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- trz_lacunarity
    - Affects the frequency of each octave in Z-axis translation, modifying the texture of depth movement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- trz_repeat
    - Determines the repetition rate of the Z-axis translation Perlin noise pattern, affecting the periodicity of depth movement.
    - Comfy dtype: INT
    - Python dtype: int
- rotx_octaves
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown
- rotx_persistence
    - Unknown
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- rotx_lacunarity
    - Unknown
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- rotx_repeat
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown
- roty_octaves
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown
- roty_persistence
    - Unknown
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- roty_lacunarity
    - Unknown
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- roty_repeat
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown
- rotz_octaves
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown
- rotz_persistence
    - Unknown
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- rotz_lacunarity
    - Unknown
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- rotz_repeat
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown

# Output types
- opac_perlin_settings
    - Configured Perlin noise parameters that can be applied to OPAC nodes to generate dynamic visual effects.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
