# Documentation
- Class name: CLIPTextEncodeSequence2
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/WASasquatch/WAS_Extras

The CLIPTextEncodeSequence2 node encodes text sequences into conditional sequences usable for further processing in generation models. It processes each line of text to create a set of condition vectors, then transforms these vectors according to the specified keyframe type to align with the desired number of frames.

# Input types
## Required
- clip
- The clip parameter is crucial because it provides the necessary context for the text encoding process. It determines how text is converted into a sequence of condition vectors.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- frame_count
- The frame count parameter specifies the total number of frames to generate. It is a fundamental parameter that directly affects the scale of the output condition sequence.
    - Comfy dtype: INT
    - Python dtype: int
- text
- The text parameter is the raw input for the encoding process. It is the source of information that will be converted into the condition sequence.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- token_normalization
- Token normalization is a technique used to stabilize the encoding process. It determines how tokens are normalized in text encoding, which may affect the quality of the generated condition sequence.
    - Comfy dtype: COMBO[none, mean, length, length+mean]
    - Python dtype: str
- weight_interpretation
- The weight interpretation parameter defines how to interpret the weights of encoded text. It is essential for the accuracy and reliability of the encoding process.
    - Comfy dtype: COMBO[comfy, A1111, compel, comfy++]
    - Python dtype: str
- cond_keyframes_type
- The cond_keyframes_type parameter determines how conditional keyframes are distributed across the frame count. It is important for aligning text encoding with the desired temporal structure.
    - Comfy dtype: COMBO[linear, sinus, sinus_inverted, half_sinus, half_sinus_inverted]
    - Python dtype: str

# Output types
- conditioning_sequence
- The condition sequence is a list of encoded text representations used as input to the generation model. It is a key component guiding the generation process.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[int, torch.Tensor]]
- cond_keyframes
- The cond_keyframes represent specific frames in the generated sequence that correspond to the encoded text. They are important for synchronizing text encoding with visual output.
    - Comfy dtype: INT
    - Python dtype: List[int]
- frame_count
- The frame count represents the total number of frames generated, providing a measure of the output range.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class CLIPTextEncodeSequence2:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'clip': ('CLIP',), 'token_normalization': (['none', 'mean', 'length', 'length+mean'],), 'weight_interpretation': (['comfy', 'A1111', 'compel', 'comfy++'],), 'cond_keyframes_type': (['linear', 'sinus', 'sinus_inverted', 'half_sinus', 'half_sinus_inverted'],), 'frame_count': ('INT', {'default': 100, 'min': 1, 'max': 1024, 'step': 1}), 'text': ('STRING', {'multiline': True, 'default': 'A portrait of a rosebud\nA portrait of a blooming rosebud\nA portrait of a blooming rose\nA portrait of a rose'})}}
    RETURN_TYPES = ('CONDITIONING', 'INT', 'INT')
    RETURN_NAMES = ('conditioning_sequence', 'cond_keyframes', 'frame_count')
    IS_LIST_OUTPUT = (True, True, False)
    FUNCTION = 'encode'
    CATEGORY = 'conditioning'

    def encode(self, clip, text, cond_keyframes_type, frame_count, token_normalization, weight_interpretation):
        text = text.strip()
        conditionings = []
        for line in text.splitlines():
            if USE_BLK:
                encoded = blk_adv.encode(clip=clip, text=line, token_normalization=token_normalization, weight_interpretation=weight_interpretation)
            else:
                encoded = CLIPTextEncode.encode(clip=clip, text=line)
            conditionings.append([encoded[0][0][0], encoded[0][0][1]])
        conditioning_count = len(conditionings)
        cond_keyframes = self.calculate_cond_keyframes(cond_keyframes_type, frame_count, conditioning_count)
        return (conditionings, cond_keyframes, frame_count)

    def calculate_cond_keyframes(self, type, frame_count, conditioning_count):
        if type == 'linear':
            return np.linspace(frame_count // conditioning_count, frame_count, conditioning_count, dtype=int).tolist()
        elif type == 'sinus':
            t = np.linspace(0, np.pi, conditioning_count)
            sinus_values = np.sin(t)
            normalized_values = (sinus_values - sinus_values.min()) / (sinus_values.max() - sinus_values.min())
            scaled_values = normalized_values * (frame_count - 1) + 1
            unique_keyframes = np.round(scaled_values).astype(int)
            unique_keyframes = np.unique(unique_keyframes, return_index=True)[1]
            return sorted(unique_keyframes.tolist())
        elif type == 'sinus_inverted':
            return (np.cos(np.linspace(0, np.pi, conditioning_count)) * (frame_count - 1) + 1).astype(int).tolist()
        elif type == 'half_sinus':
            return (np.sin(np.linspace(0, np.pi / 2, conditioning_count)) * (frame_count - 1) + 1).astype(int).tolist()
        elif type == 'half_sinus_inverted':
            return (np.cos(np.linspace(0, np.pi / 2, conditioning_count)) * (frame_count - 1) + 1).astype(int).tolist()
        else:
            raise ValueError('Unsupported cond_keyframes_type: ' + type)
```