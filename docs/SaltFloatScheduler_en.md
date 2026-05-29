
# Documentation
- Class name: SaltFloatScheduler
- Category: SALT/Scheduling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltFloatScheduler node creates and manages float schedules, which are sequences of float values used to control various parameters over time. This node enables precise scheduling of float values, allowing dynamic adjustment and temporal control of parameters in audio-visual projects.

# Input types
## Required
- repeat_sequence_times
    - Specifies how many times the sequence should repeat, extending the schedule's length.
    - Comfy dtype: INT
    - Python dtype: int
- curves_mode
    - Determines the curve application mode for the schedule, affecting the shape and progression of values.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- use_perlin_tremors
    - Indicates whether Perlin noise is applied to the schedule to generate natural, smooth variations in float values.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- tremor_scale
    - Sets the scale of Perlin tremor, controlling the frequency of the applied noise.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tremor_octaves
    - Specifies the number of octaves for Perlin noise, affecting the level of detail in the tremor.
    - Comfy dtype: INT
    - Python dtype: int
- tremor_persistence
    - Determines the persistence of Perlin noise, affecting the amplitude of each octave.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tremor_lacunarity
    - Controls the lacunarity of Perlin noise, affecting the frequency growth of each octave.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sequence
    - The initial sequence of float values to be scheduled and potentially modified by node operations.
    - Comfy dtype: STRING
    - Python dtype: List[float]
## Optional
- max_sequence_length
    - The maximum allowed length of the sequence, ensuring the schedule stays within predefined bounds.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- schedule_list
    - The resulting list of float values after scheduling operations, representing the modified or generated schedule.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- schedule_length
    - The length of the generated or modified schedule list, representing the total number of scheduled values.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltFloatScheduler:
    @classmethod
    def INPUT_TYPES(cls):
        easing_fns = list(easing_functions.keys())
        easing_fns.insert(0, "None")
        return {
            "required": {
                "repeat_sequence_times": ("INT", {"default": 0, "min": 0}),
                "curves_mode": (easing_fns, ),
                "use_perlin_tremors": ("BOOLEAN", {"default": True}),
                "tremor_scale": ("FLOAT", {"default": 64, "min": 0.01, "max": 1024.0, "step": 0.01}),
                "tremor_octaves": ("INT", {"default": 1, "min": 1, "max": 10}),
                "tremor_persistence": ("FLOAT", {"default": 0.5, "min": 0.01, "max": 1.0, "step": 0.01}),
                "tremor_lacunarity": ("FLOAT", {"default": 2.0, "min": 1.0, "max": 3.0, "step": 0.01}),
                "sequence": ("STRING", {"multiline": True, "placeholder": "[1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.0]"}),
            },
            "optional": {
                "max_sequence_length": ("INT", {"default": 0, "min": 0, "max": 4096}),
            }
        }

    RETURN_TYPES = ("LIST", "INT")
    RETURN_NAMES = ("schedule_list", "schedule_length")
    FUNCTION = "generate_sequence"
    CATEGORY = "SALT/Scheduling"

    def apply_curve(self, sequence, mode):
        if mode in easing_functions.keys():
            sequence = [easing_functions[mode](t) for t in sequence]
        else:
            print(f"The easing mode `{mode}` does not exist in the valid easing functions: {', '.join(easing_functions.keys())}")
        return sequence

    def apply_perlin_noise(self, sequence, scale, octaves, persistence, lacunarity):
        perlin = PerlinNoise()
        noise_values = [perlin.sample(i, scale=scale, octaves=octaves, persistence=persistence, lacunarity=lacunarity) for i, _ in enumerate(sequence)]
        sequence = [val + noise for val, noise in zip(sequence, noise_values)]
        return sequence

    def generate_sequence(self, sequence, repeat_sequence_times, curves_mode, use_perlin_tremors, tremor_scale, tremor_octaves, tremor_persistence, tremor_lacunarity, max_sequence_length=0):
        sequence_list = [float(val.strip()) for val in sequence.replace("[", "").replace("]", "").split(',')]
        if use_perlin_tremors:
            sequence_list = self.apply_perlin_noise(sequence_list, tremor_scale, tremor_octaves, tremor_persistence, tremor_lacunarity)
        if curves_mode != "None":
            sequence_list = self.apply_curve(sequence_list, curves_mode)
        sequence_list = sequence_list * (repeat_sequence_times + 1)
        sequence_list = sequence_list[:max_sequence_length] if max_sequence_length != 0 else sequence_list
        return (sequence_list, len(sequence_list))

```
