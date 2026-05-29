
# Documentation
- Class name: CSV Generator [Dream]
- Category: ✨ Dream/🎥 animation/📈 curves
- Output node: True
- Repo Ref: https://github.com/xXAdonesXx/NodeGallery

The CSV Generator node is specifically designed to create and append animation curve data to a CSV file. It can initialize or update a CSV file, recording frame numbers and corresponding value data, and supports customizing CSV dialects to enable flexible file formatting.

# Input types
## Required
- frame_counter
    - Used to track the current frame in the animation, ensuring that the time data recorded in the CSV accurately corresponds to the value data.
    - Comfy dtype: FRAME_COUNTER
    - Python dtype: FrameCounter
- value
    - Specifies the values to be recorded in the CSV file, which are the key elements forming the animation curve data points.
    - Comfy dtype: FLOAT
    - Python dtype: float
- csvfile
    - Path to the CSV file, used to create or update the file. This is the primary carrier for storing animation curve data.
    - Comfy dtype: STRING
    - Python dtype: str
- csv_dialect
    - Defines the formatting rules for the CSV file, allowing customization of its structure and syntax.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
The node has no output type.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamCSVGenerator:
    NODE_NAME = "CSV Generator"
    ICON = "⌗"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": SharedTypes.frame_counter | {
                "value": ("FLOAT", {"forceInput": True, "default": 0.0}),
                "csvfile": ("STRING", {"default": "", "multiline": False}),
                "csv_dialect": (csv.list_dialects(),)
            },
        }

    CATEGORY = NodeCategories.ANIMATION_CURVES
    RETURN_TYPES = ()
    RETURN_NAMES = ()
    FUNCTION = "write"
    OUTPUT_NODE = True

    @classmethod
    def IS_CHANGED(cls, *values):
        return hashed_as_strings(*values)

    def write(self, csvfile, frame_counter: FrameCounter, value, csv_dialect):
        if frame_counter.is_first_frame and csvfile:
            with open(csvfile, 'w', newline='') as csvfile:
                csvwriter = csv.writer(csvfile, dialect=csv_dialect)
                csvwriter.writerow(['Frame', 'Value'])
                csvwriter.writerow([frame_counter.current_frame, str(value)])
        else:
            with open(csvfile, 'a', newline='') as csvfile:
                csvwriter = csv.writer(csvfile, dialect=csv_dialect)
                csvwriter.writerow([frame_counter.current_frame, str(value)])
        return ()

```
