
# Documentation
- Class name: EmptyMotionData
- Category: MotionDiff
- Output node: False

The EmptyMotionData node is designed to generate motion data templates with a specified frame length. It is primarily used to create a foundational structure of motion data that can be further processed or manipulated, providing a standardized format for initializing motion-related tasks within the MotionDiff framework.

# Input types
## Required
- frames
    - Specifies the number of frames of the generated motion data. This parameter directly affects the shape of the motion tensor, thereby determining the temporal length of the motion data.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- motion_data
    - Outputs a dictionary containing motion, motion mask, and motion length tensors, establishing a foundational structure for motion data with zeroed-out motion values and appropriate masks.
    - Comfy dtype: MOTION_DATA
    - Python dtype: Dict[str, torch.Tensor]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class EmptyMotionData:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "frames": ("INT", {"default": 196, "min": 1, "max": 196})
            }
        }

    RETURN_TYPES = ("MOTION_DATA", )
    CATEGORY = "MotionDiff"
    FUNCTION = "encode_text"

    def encode_text(self, frames):
        return ({
            'motion': torch.zeros(1, frames, 263),
            'motion_mask': torch.ones(1, frames),
            'motion_length': torch.Tensor([frames]).long(),
        }, )

```
