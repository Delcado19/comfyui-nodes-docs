
# Documentation
- Class name: Camera_AnglesStylerAdvanced
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Camera_AnglesStylerAdvanced node aims to manipulate and enhance images by adjusting camera angles, utilizing 3D geometry and perspective transformation techniques. The node applies complex algorithms to simulate changes in elevation and azimuth angles of the camera viewpoint to achieve more dynamic or aesthetically appealing compositions.

# Input types
## Required
- text_positive_g
    - Specify the positive aspects that need to be emphasized in the generated text, guiding the generation process toward favorable outcomes.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Define local positive attributes that need to be highlighted in the text, focusing on specific details or elements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Indicate negative aspects that need to be minimized or avoided in text generation, aiming to prevent undesirable outcomes.
    - Comfy dtype: STRING
    - Python dtype: str
- camera_angles
    - Control the simulation of camera angles, including elevation and azimuth, used to adjust the perspective of generated images.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- negative_prompt_to
    - Transform specific negative prompts, aiming to convert them into more positive or neutral contexts.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - Record the prompts used for text generation, helping to track and optimize the generation process.
    - Comfy dtype: BOOLEAN
    - Python dtype: str

# Output types
- text_positive_g
    - Generate globally positive text reflecting the overall positive results after transformation.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- text_positive_l
    - Produce locally positive text highlighting specific positive details or elements.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- text_positive
    - Output text positively influenced by specified prompts and camera angle adjustments.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- text_negative_g
    - Generate globally negative text, which can serve as a contrast or control for positive outputs.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- text_negative_l
    - Produce locally negative text focusing on specific negative details or elements, used for comparison or control purposes.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- text_negative
    - Output text retaining negative influence, serving as a baseline or control for comparison.
    - Comfy dtype: STRING
    - Python dtype: List[str]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
