
# Documentation
- Class name: ScaleBatchPromptSchedule
- Category: KJNodes
- Output node: False

The ScaleBatchPromptSchedule node is designed to adapt a batch schedule from one frame count to another, effectively scaling the schedule to fit a new frame duration. This is particularly useful in scenarios where the frame count of an animation or video is modified, ensuring that the timing of prompts or operations stays synchronized with the new frame length.

# Input types
## Required
- input_str
    - A string representation of the original batch schedule, specifying keyframes and their associated values. It serves as the basis for scaling to the new frame count.
    - Comfy dtype: STRING
    - Python dtype: str
- old_frame_count
    - The original frame count of the batch schedule. This value is critical for calculating the scaling factor to adjust the schedule to the new frame count.
    - Comfy dtype: INT
    - Python dtype: int
- new_frame_count
    - The target frame count to which the original schedule will be scaled. This determines the new timing and distribution of keyframes in the schedule.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- string
    - The scaled batch schedule, presented in string format, reflecting the keyframes and values adjusted for the new frame count.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ScaleBatchPromptSchedule:
    
    RETURN_TYPES = ("STRING",)
    FUNCTION = "scaleschedule"
    CATEGORY = "KJNodes"
    DESCRIPTION = """
Scales a batch schedule from Fizz' nodes BatchPromptSchedule
to a different frame count.
"""

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                 "input_str": ("STRING", {"forceInput": True,"default": "0:(0.0),\n7:(1.0),\n15:(0.0)\n"}),
                 "old_frame_count": ("INT", {"forceInput": True,"default": 1,"min": 1, "max": 4096, "step": 1}),
                 "new_frame_count": ("INT", {"forceInput": True,"default": 1,"min": 1, "max": 4096, "step": 1}),
                
        },
    } 
    
    def scaleschedule(self, old_frame_count, input_str, new_frame_count):
        print("input_str:", input_str)
        pattern = r'"(\d+)"\s*:\s*"(.*?)"(?:,|\Z)'
        frame_strings = dict(re.findall(pattern, input_str))
        
        # Calculate the scaling factor
        scaling_factor = (new_frame_count - 1) / (old_frame_count - 1)
        
        # Initialize a dictionary to store the new frame numbers and strings
        new_frame_strings = {}
        
        # Iterate over the frame numbers and strings
        for old_frame, string in frame_strings.items():
            # Calculate the new frame number
            new_frame = int(round(int(old_frame) * scaling_factor))
            
            # Store the new frame number and corresponding string
            new_frame_strings[new_frame] = string
        
        # Format the output string
        output_str = ', '.join([f'"{k}":"{v}"' for k, v in sorted(new_frame_strings.items())])
        print(output_str)
        return (output_str,)

```
