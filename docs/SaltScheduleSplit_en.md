
# Documentation
- Class name: SaltScheduleSplit
- Category: SALT/Scheduling
- Output node: False

The SaltScheduleSplit node is designed to split a given schedule list into two parts based on a specified index. This functionality is essential for dividing schedules into manageable parts for further processing or analysis.

# Input types
## Required
- schedule_list
    - The schedule item list to be split. This parameter is crucial because it defines the sequence of items to be divided into two parts.
    - Comfy dtype: LIST
    - Python dtype: List[Any]
- split_index
    - The index position at which the schedule list is split. This parameter determines the split point and affects how the list is segmented.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- schedule_list_a
    - The first part of the schedule list, containing items before the split index.
    - Comfy dtype: LIST
    - Python dtype: List[Any]
- schedule_list_b
    - The second part of the schedule list, containing items from the split index onwards.
    - Comfy dtype: LIST
    - Python dtype: List[Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltScheduleSplit:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "schedule_list": ("LIST", ),
                "split_index": ("INT", {"min": 0}),
            },
        }

    RETURN_TYPES = ("LIST", "LIST")
    RETURN_NAMES = ("schedule_list_a", "schedule_list_b")
    FUNCTION = "split"
    CATEGORY = "SALT/Scheduling"

    def split(self, schedule_list, split_index):
        if split_index >= len(schedule_list) or split_index < 0:
            raise ValueError("Schedule split_index must be within the range of the schedule_list.")
        first_part = schedule_list[:split_index]
        second_part = schedule_list[split_index:]
        return (first_part, second_part)

```
