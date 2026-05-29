
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
[View source repository on GitHub](https://github.com/xXAdonesXx/NodeGallery)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
