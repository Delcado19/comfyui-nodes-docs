
# Documentation
- Class name: MotionCLIPTextEncode
- Category: MotionDiff
- Output node: False

The MotionCLIPTextEncode node is designed to encode text descriptions into a format suitable for motion generation tasks. It leverages the CLIP model and motion data to generate motion conditions, facilitating the creation of motion sequences that match a given text description.

# Input types
## Required
- md_clip
    - The md_clip parameter represents a CLIP model customized for motion data, essential for interpreting and encoding text descriptions in a motion context.
    - Comfy dtype: MD_CLIP
    - Python dtype: MD_CLIP
- motion_data
    - The motion_data parameter contains the motion information required for the encoding process, providing the necessary context for text interpretation.
    - Comfy dtype: MOTION_DATA
    - Python dtype: MOTION_DATA
- text
    - The text parameter is the text description to be encoded, serving as the input for generating motion-matched sequences.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- md_conditioning
    - The output is motion condition data, used to guide the generation of motion sequences corresponding to the input text.
    - Comfy dtype: MD_CONDITIONING
    - Python dtype: MD_CONDITIONING


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class MotionCLIPTextEncode:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "md_clip": ("MD_CLIP", ),
                "motion_data": ("MOTION_DATA", ),
                "text": ("STRING", {"default": "a person performs a cartwheel" ,"multiline": True})
            },
        }

    RETURN_TYPES = ("MD_CONDITIONING",)
    CATEGORY = "MotionDiff"
    FUNCTION = "encode_text"

    def encode_text(self, md_clip, motion_data, text):
        return (md_clip(text, motion_data), )

```
