
# Documentation
- Class name: SaltThresholdSchedule
- Category: SALT/Scheduling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltThresholdSchedule node aims to apply fade effects to the schedule list based on specific parameters such as fade type and intensity. This node can dynamically adjust schedule values, creating smooth transitions or highlighting certain parts of the schedule through fade-in, fade-out, or both.

# Input types
## Required
- float_schedule
    - List of schedule values to which the fade effect will be applied. This parameter is crucial for determining the base values on which the fade effect will be applied.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- max_frames
    - Specifies the maximum number of frames for the schedule. This parameter limits the length of the output schedule list.
    - Comfy dtype: INT
    - Python dtype: int
- output_mode
    - Defines the format of the output schedule list, such as 'prompt_schedule', 'float_list', 'int_list', or 'raw'. This parameter determines how the modified schedule values are presented.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- schedule_values
    - A string detailing specific schedule values and their corresponding descriptions or settings. This parameter allows customization of schedule values based on text descriptions.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- value_schedule_list
    - The modified schedule list after applying the specified fade effect, showing dynamic transitions between values.
    - Comfy dtype: *
    - Python dtype: List[float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltThresholdSchedule:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "float_schedule": ("LIST", ),
                "max_frames": ("INT", {"min": 1, "max": 4096, "default": 16}),
                "output_mode": (["prompt_schedule", "float_list", "int_list", "raw"],),
                "schedule_values": ("STRING", {"multiline": True, "default": '''"0.0": "A beautiful forest, (green:1.2) color scheme",
"0.5": "A beautiful forest, (autumn:1.2) color scheme",
"1.0": "A beautiful forest, (winter:1.2) color scheme"'''}),
            }
        }

    RETURN_TYPES = (WILDCARD,)
    RETURN_NAMES = ("value_schedule_list",)

    FUNCTION = "generate_sequence"
    CATEGORY = "SALT/Scheduling"

    def generate_sequence(self, float_schedule, schedule_values, max_frames, output_mode):
        try:
            text_dict = json.loads("{" + schedule_values + "}")
        except json.JSONDecodeError as e:
            raise ValueError("Unable to decode prompt schedule:", e)

        prompt_sequence = []
        prompt_dict = dict(sorted({float(key): value for key, value in text_dict.items()}.items(), key=lambda x: x[0]))
        default_prompt = next(iter(prompt_dict.values())) if prompt_dict else None

        adjusted_float_schedule = [float_schedule[i] if i < len(float_schedule) else 0 for i in range(max_frames)]

        for float_val in adjusted_float_schedule:
            closest_prompt = default_prompt
            min_diff = float('inf')
            
            for prompt_key, prompt_val in prompt_dict.items():
                diff = abs(float_val - prompt_key)
                
                if diff < min_diff:
                    closest_prompt = prompt_val
                    min_diff = diff

            prompt_sequence.append(closest_prompt)

        if output_mode == "prompt_schedule":
            output = ", ".join(f'"{i}": "{prompt}"' for i, prompt in enumerate(prompt_sequence))
        elif output_mode == "float_list":
            output = [float(value) for value in prompt_sequence]
        else:
            output = [int(value) for value in prompt_sequence]

        return (output, )  

```
