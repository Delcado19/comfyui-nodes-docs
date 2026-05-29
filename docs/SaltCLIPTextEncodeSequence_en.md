
# Documentation
- Class name: SaltCLIPTextEncodeSequence
- Category: SALT/Scheduling/Conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltCLIPTextEncodeSequence node is specifically designed to generate a sequence of conditioning based on a text prompt schedule for use in audio visualization. It leverages the CLIP model to encode text prompts into conditioning, adjusts according to frame count, and applies token normalization and weight interpretation strategies to tailor the output to specific visualization requirements.

# Input types
## Required
- clip
    - The CLIP model used to encode text prompts into conditioning format. It plays a crucial role in interpreting text and converting it into a form usable for generating visualizations.
    - Comfy dtype: CLIP
    - Python dtype: object
- token_normalization
    - Specifies the normalization method for tokens generated from the text prompt, affecting how the text is processed and encoded into conditioning.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- weight_interpretation
    - Determines how weights are interpreted during the encoding process, affecting the final conditioning output used for visualization.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- frame_count
    - The total number of frames for which conditioning needs to be generated, guiding the sequence generation process.
    - Comfy dtype: INT
    - Python dtype: int
- text
    - A text prompt schedule provided in a structured format, defining the content and timing of each frame in the sequence.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- conditioning_sequence
    - A sequence of conditioning generated based on the provided text prompt and frame count, specifically for audio visualization purposes.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[object]
- frame_count
    - The total number of frames for which conditioning has been generated, reflecting the input frame count.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltCLIPTextEncodeSequence:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "clip": ("CLIP",),
                "token_normalization": (["none", "mean", "length", "length+mean"],),
                "weight_interpretation": (["comfy", "A1111", "compel", "comfy++"],),
                "frame_count": ("INT", {"default": 100, "min": 1, "max": 1024, "step": 1}),
                "text": ("STRING", {"multiline": True, "placeholder": '''"0": "A portrait of a rosebud",
"25": "A portrait of a blooming rosebud",
"50": "A portrait of a blooming rose",
"75": "A portrait of a rose"'''}),
            }
        }
        
    RETURN_TYPES = ("CONDITIONING", "INT")
    RETURN_NAMES = ("conditioning_sequence", "frame_count")

    FUNCTION = "encode"
    CATEGORY = "SALT/Scheduling/Conditioning"

    def encode(self, clip, text, frame_count, token_normalization, weight_interpretation):
        
        try:
            text_dict = json.loads("{"+text+"}")
        except json.JSONDecodeError as e:
            raise ValueError("Unable to decode propmt schedule:", e)

        conditionings = []
        prev_frame_num = 0
        prev_encoded = None
        for frame_num, prompt in sorted(text_dict.items(), key=lambda item: int(item[0])):
            frame_num = int(frame_num)
            if USE_BLK:
                encoded = blk_adv.encode(clip=clip, text=prompt, token_normalization=token_normalization, weight_interpretation=weight_interpretation)
            else:
                encoded = CLIPTextEncode.encode(clip=clip, text=prompt)
            for _ in range(prev_frame_num, frame_num):
                conditionings.append(prev_encoded)
            prev_encoded = [encoded[0][0][0], encoded[0][0][1]]
            prev_frame_num = frame_num
        for _ in range(prev_frame_num, frame_count):
            conditionings.append(prev_encoded)

        conditioning_count = len(conditionings)

        return (conditionings, conditioning_count)

    def cond_easing(self, type, frame_count, conditioning_count):
        if type == "linear":
            return np.linspace(frame_count // conditioning_count, frame_count, conditioning_count, dtype=int).tolist()
        elif type == "sinus":
            t = np.linspace(0, np.pi, conditioning_count)
            sinus_values = np.sin(t)
            normalized_values = (sinus_values - sinus_values.min()) / (sinus_values.max() - sinus_values.min())
            scaled_values = normalized_values * (frame_count - 1) + 1
            unique_keyframes = np.round(scaled_values).astype(int)
            unique_keyframes = np.unique(unique_keyframes, return_index=True)[1]
            return sorted(unique_keyframes.tolist())
        elif type == "sinus_inverted":
            return (np.cos(np.linspace(0, np.pi, conditioning_count)) * (frame_count - 1) + 1).astype(int).tolist()
        elif type == "half_sinus":
            return (np.sin(np.linspace(0, np.pi / 2, conditioning_count)) * (frame_count - 1) + 1).astype(int).tolist()
        elif type == "half_sinus_inverted":
            return (np.cos(np.linspace(0, np.pi / 2, conditioning_count)) * (frame_count - 1) + 1).astype(int).tolist()
        else:
            raise ValueError("Unsupported cond_keyframes_type: " + type)

```
