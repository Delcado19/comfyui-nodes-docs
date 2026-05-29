
# Documentation
- Class name: SoundReactive
- Category: KJNodes/audio
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SoundReactive node is designed to process audio input and adjust its behavior based on sound level. It dynamically responds to changes in sound intensity within a specified frequency range and offers customization options through parameters such as sound level, frequency range, and normalization. This node is especially suitable for creating real‑time audio‑reactive visualizations or effects.

# Input types
## Required
- sound_level
    - Specifies the current sound level to process. It scales the node’s output according to multiplier and normalization settings, directly affecting the dynamic response to audio input.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_range_hz
    - Defines the lower bound of the frequency range of interest. This parameter helps focus the node’s sensitivity on a specific part of the audio spectrum.
    - Comfy dtype: INT
    - Python dtype: int
- end_range_hz
    - Sets the upper bound of the frequency range to consider. It works with start_range_hz to fine‑tune the node’s responsiveness to the desired band.
    - Comfy dtype: INT
    - Python dtype: int
- multiplier
    - Applies a scaling factor to the sound level, allowing finer control over the node’s response to audio input.
    - Comfy dtype: FLOAT
    - Python dtype: float
- smoothing_factor
    - Determines the amount of smoothing applied to the sound level, aiding in creating smoother transitions and effects.
    - Comfy dtype: FLOAT
    - Python dtype: float
- normalize
    - Enables or disables normalization of the sound level, which standardizes the input range for consistent processing across different audio sources.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- sound_level
    - The processed sound level, adjusted according to the node’s parameters. It reflects dynamic changes in audio intensity after scaling and optional normalization.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sound_level_int
    - Integer representation of the processed sound level, providing a simplified or quantized output for scenarios requiring discrete levels.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SoundReactive:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {  
            "sound_level": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 99999, "step": 0.01}),
            "start_range_hz": ("INT", {"default": 150, "min": 0, "max": 9999, "step": 1}),
            "end_range_hz": ("INT", {"default": 2000, "min": 0, "max": 9999, "step": 1}),
            "multiplier": ("FLOAT", {"default": 1.0, "min": 0.01, "max": 99999, "step": 0.01}),
            "smoothing_factor": ("FLOAT", {"default": 0.5, "min": 0.0, "max": 1.0, "step": 0.01}),
            "normalize": ("BOOLEAN", {"default": False}),
            },
            }
    
    RETURN_TYPES = ("FLOAT","INT",)
    RETURN_NAMES =("sound_level", "sound_level_int",)
    FUNCTION = "react"
    CATEGORY = "KJNodes/audio"
    DESCRIPTION = """
Reacts to the sound level of the input.  
Uses your browsers sound input options and requires.  
Meant to be used with realtime diffusion with autoqueue.
"""
        
    def react(self, sound_level, start_range_hz, end_range_hz, smoothing_factor, multiplier, normalize):

        sound_level *= multiplier

        if normalize:
            sound_level /= 255

        sound_level_int = int(sound_level)
        return (sound_level, sound_level_int, )     

```
