# Documentation
- Class name: WLSH_CLIP_Text_Positive_Negative_XL
- Category: WLSH Nodes/conditioning
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The WLSH_CLIP_Text_Positive_Negative_XL node processes text input and encodes it into a format suitable for conditional generation models. It receives positive and negative text examples and converts them into encoded representations that can guide the generation process. This node plays a key role in shaping the output of the generation model by providing contextual cues based on the text input.

# Input types
## Required
- width
    - The width parameter defines the width dimension for the node's image processing component. It is essential for setting an appropriate resolution and ensuring the output image meets the required specifications.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter specifies the vertical dimension of the image to be processed. It works together with the width parameter to determine the overall image resolution.
    - Comfy dtype: INT
    - Python dtype: int
- target_width
    - The target_width parameter sets the desired width of the final output image. It is a key factor for resizing and scaling operations within the node.
    - Comfy dtype: INT
    - Python dtype: int
- target_height
    - The target_height parameter defines the desired height of the final output image, ensuring the image meets the required size after processing.
    - Comfy dtype: INT
    - Python dtype: int
- positive_g
    - The positive_g parameter accepts a string representing positive guidance text. It is crucial for steering the generation process toward more favorable results.
    - Comfy dtype: STRING
    - Python dtype: str
- positive_l
    - The positive_l parameter provides additional text to supplement the positive guidance text. It helps refine the positive conditioning cues for the generation model.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_g
    - The negative_g parameter contains negative guidance text used to steer the generation process away from undesired outcomes.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_l
    - The negative_l parameter supplements the negative guidance text, further defining the boundaries of content to avoid in the generated output.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
    - The clip parameter should be an instance of a CLIP model, which is essential for text encoding within the node. It enables the conversion of text input into a form usable by the generation model.
    - Comfy dtype: CLIP
    - Python dtype: Any
## Optional
- crop_w
    - The crop_w parameter defines the width of the cropping region in the image. It allows selective focus on a specific area of the image for further processing.
    - Comfy dtype: INT
    - Python dtype: int
- crop_h
    - The crop_h parameter determines the height of the cropping region in the image. It is used to extract a specific part of the image for more detailed analysis or processing.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- positive
    - The positive output provides the encoded representation of the positive guidance text, used to steer the generation process toward the desired result.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Any]
- negative
    - The negative output contains the encoded representation of the negative guidance text, used to direct the generation process away from unwanted directions.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Any]
- positive_text
    - The positive_text output is a concatenated string of the positive guidance text, offering a readable form of the positive cues used during generation.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_text
    - The negative_text output is a concatenated string of the negative guidance text, providing a readable form of the negative cues used to avoid certain results during generation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WLSH_CLIP_Text_Positive_Negative_XL:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'width': ('INT', {'default': 1024.0, 'min': 0, 'max': MAX_RESOLUTION}), 'height': ('INT', {'default': 1024.0, 'min': 0, 'max': MAX_RESOLUTION}), 'crop_w': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION}), 'crop_h': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION}), 'target_width': ('INT', {'default': 1024.0, 'min': 0, 'max': MAX_RESOLUTION}), 'target_height': ('INT', {'default': 1024.0, 'min': 0, 'max': MAX_RESOLUTION}), 'positive_g': ('STRING', {'multiline': True, 'default': 'POS_G'}), 'positive_l': ('STRING', {'multiline': True, 'default': 'POS_L'}), 'negative_g': ('STRING', {'multiline': True, 'default': 'NEG_G'}), 'negative_l': ('STRING', {'multiline': True, 'default': 'NEG_L'}), 'clip': ('CLIP',)}}
    RETURN_TYPES = ('CONDITIONING', 'CONDITIONING', 'STRING', 'STRING')
    RETURN_NAMES = ('positive', 'negative', 'positive_text', 'negative_text')
    FUNCTION = 'encode'
    CATEGORY = 'WLSH Nodes/conditioning'

    def encode(self, clip, width, height, crop_w, crop_h, target_width, target_height, positive_g, positive_l, negative_g, negative_l):
        tokens = clip.tokenize(positive_g)
        tokens['l'] = clip.tokenize(positive_l)['l']
        if len(tokens['l']) != len(tokens['g']):
            empty = clip.tokenize('')
            while len(tokens['l']) < len(tokens['g']):
                tokens['l'] += empty['l']
            while len(tokens['l']) > len(tokens['g']):
                tokens['g'] += empty['g']
        (condP, pooledP) = clip.encode_from_tokens(tokens, return_pooled=True)
        tokensN = clip.tokenize(negative_g)
        tokensN['l'] = clip.tokenize(negative_l)['l']
        if len(tokensN['l']) != len(tokensN['g']):
            empty = clip.tokenize('')
            while len(tokensN['l']) < len(tokensN['g']):
                tokensN['l'] += empty['l']
            while len(tokensN['l']) > len(tokensN['g']):
                tokensN['g'] += empty['g']
        (condN, pooledN) = clip.encode_from_tokens(tokensN, return_pooled=True)
        positive_text = positive_g + ', ' + positive_l
        negative_text = negative_g + ', ' + negative_l
        return ([[condP, {'pooled_output': pooledP, 'width': width, 'height': height, 'crop_w': crop_w, 'crop_h': crop_h, 'target_width': target_width, 'target_height': target_height}]], [[condN, {'pooled_output': pooledP, 'width': width, 'height': height, 'crop_w': crop_w, 'crop_h': crop_h, 'target_width': target_width, 'target_height': target_height}]], positive_text, negative_text)
```