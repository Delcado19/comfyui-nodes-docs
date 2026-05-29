# Documentation
- Class name: CLIPTextEncodeSDXL
- Category: advanced/conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The CLIPTextEncodeSDXL node is designed to encode text information into a format suitable for advanced conditioning tasks. It leverages the CLIP model's ability to understand and process text, converting it into a set of tokens that can be used for downstream applications such as image generation or text-based search. This node is critical for integrating text context into various AI models, enabling richer and more nuanced output.

# Input types
## Required
- width
    - The 'width' parameter specifies the width dimension of the encoding process. This is critical for determining the resolution of the output and ensuring compatibility with other components in the system.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' parameter sets the height dimension of the encoding process. It works in conjunction with the 'width' parameter to determine the overall size of the encoded output.
    - Comfy dtype: INT
    - Python dtype: int
- target_width
    - The 'target_width' parameter indicates the desired width of the encoded output. It guides the encoding process to produce output that meets specific size requirements.
    - Comfy dtype: INT
    - Python dtype: int
- target_height
    - The 'target_height' parameter sets the desired height of the encoded output. This is critical for maintaining the aspect ratio and ensuring the encoded data fits the intended display or processing framework.
    - Comfy dtype: INT
    - Python dtype: int
- text_g
    - The 'text_g' parameter accepts the text to be encoded as input. It is a critical component as it directly affects the quality and relevance of the encoded output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_l
    - The 'text_l' parameter provides additional text input for the encoding process. It enhances the context information available to the node, potentially improving the accuracy and depth of encoding.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
    - The 'clip' parameter should be an instance of the CLIP model, which is essential for the encoding process. It is through this model that text is tokenized and encoded.
    - Comfy dtype: CLIP
    - Python dtype: CLIP model instance
## Optional
- crop_w
    - The 'crop_w' parameter is used to define the width of the cropping area during the encoding process. It allows selective focus on specific portions of the input data.
    - Comfy dtype: INT
    - Python dtype: int
- crop_h
    - The 'crop_h' parameter determines the height of the cropping area during the encoding process. It complements 'crop_w' to control the spatial focus within the input.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- CONDITIONING
    - The output of the CLIPTextEncodeSDXL node is a 'CONDITIONING' object, which encapsulates the encoded text information. This object is critical for applications that need to integrate text context into model output.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class CLIPTextEncodeSDXL:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'width': ('INT', {'default': 1024.0, 'min': 0, 'max': MAX_RESOLUTION}), 'height': ('INT', {'default': 1024.0, 'min': 0, 'max': MAX_RESOLUTION}), 'crop_w': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION}), 'crop_h': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION}), 'target_width': ('INT', {'default': 1024.0, 'min': 0, 'max': MAX_RESOLUTION}), 'target_height': ('INT', {'default': 1024.0, 'min': 0, 'max': MAX_RESOLUTION}), 'text_g': ('STRING', {'multiline': True, 'dynamicPrompts': True}), 'clip': ('CLIP',), 'text_l': ('STRING', {'multiline': True, 'dynamicPrompts': True}), 'clip': ('CLIP',)}}
    RETURN_TYPES = ('CONDITIONING',)
    FUNCTION = 'encode'
    CATEGORY = 'advanced/conditioning'

    def encode(self, clip, width, height, crop_w, crop_h, target_width, target_height, text_g, text_l):
        tokens = clip.tokenize(text_g)
        tokens['l'] = clip.tokenize(text_l)['l']
        if len(tokens['l']) != len(tokens['g']):
            empty = clip.tokenize('')
            while len(tokens['l']) < len(tokens['g']):
                tokens['l'] += empty['l']
            while len(tokens['l']) > len(tokens['g']):
                tokens['g'] += empty['g']
        (cond, pooled) = clip.encode_from_tokens(tokens, return_pooled=True)
        return ([[cond, {'pooled_output': pooled, 'width': width, 'height': height, 'crop_w': crop_w, 'crop_h': crop_h, 'target_width': target_width, 'target_height': target_height}]],)
```