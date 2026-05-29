# Documentation
- Class name: WLSH_CLIP_Positive_Negative_XL
- Category: WLSH Nodes/conditioning
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node is designed to process and encode positive and negative image pairs for contrastive learning. It uses the CLIP model to extract visual features and align them with text descriptions, facilitating the creation of meaningful image-text associations.

# Input types
## Required
- width
Width is a key parameter that defines the horizontal resolution of input images. It is essential for the node to correctly process and adjust image dimensions, ensuring encoded features are extracted from the correct dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- height
Similar to width, height is an important parameter that specifies the vertical resolution of input images. It works together with width to ensure accurate image processing and feature encoding.
    - Comfy dtype: INT
    - Python dtype: int
- positive_g
The positive_g parameter is the text description associated with the positive image. It is essential for the node to create semantic connections between image content and text, which is crucial for the encoding process.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_g
negative_g is the text description for the negative image. This parameter is important because it provides the necessary contrast to the positive image, enhancing the node's ability to distinguish and learn from the two different image-text pairs.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- positive
The positive output contains the encoded features and metadata of the positive image. It is a key part of the node's output because it represents one aspect of the contrastive learning process.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Dict[str, Union[str, torch.Tensor]]]
- negative
The negative output corresponds to the positive output but is for the negative image. It is equally important because it provides the contrasting perspective necessary for effective contrastive learning.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Dict[str, Union[str, torch.Tensor]]]

# Usage tips
- Infra type: GPU

# Source code
```
class WLSH_CLIP_Positive_Negative_XL:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'width': ('INT', {'default': 1024.0, 'min': 0, 'max': MAX_RESOLUTION}), 'height': ('INT', {'default': 1024.0, 'min': 0, 'max': MAX_RESOLUTION}), 'crop_w': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION}), 'crop_h': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION}), 'target_width': ('INT', {'default': 1024.0, 'min': 0, 'max': MAX_RESOLUTION}), 'target_height': ('INT', {'default': 1024.0, 'min': 0, 'max': MAX_RESOLUTION}), 'positive_g': ('STRING', {'multiline': True, 'default': 'POS_G'}), 'positive_l': ('STRING', {'multiline': True, 'default': 'POS_L'}), 'negative_g': ('STRING', {'multiline': True, 'default': 'NEG_G'}), 'negative_l': ('STRING', {'multiline': True, 'default': 'NEG_L'}), 'clip': ('CLIP',)}}
    RETURN_TYPES = ('CONDITIONING', 'CONDITIONING')
    RETURN_NAMES = ('positive', 'negative')
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
        return ([[condP, {'pooled_output': pooledP, 'width': width, 'height': height, 'crop_w': crop_w, 'crop_h': crop_h, 'target_width': target_width, 'target_height': target_height}]], [[condN, {'pooled_output': pooledP, 'width': width, 'height': height, 'crop_w': crop_w, 'crop_h': crop_h, 'target_width': target_width, 'target_height': target_height}]])
```