# Documentation
- Class name: CR_SDXLBasePromptEncoder
- Category: icons.get('Comfyroll/SDXL')
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_SDXLBasePromptEncoder class is designed to process and encode prompts for generating images with specific attributes. It manages the encoding of positive and negative prompts, ensuring the generated images meet desired characteristics and avoid unwanted features.

# Input types
## Required
- base_clip
    - The base_clip parameter is essential for the encoding process, providing the foundation for image generation. It is used to tokenize and encode input prompts, which then guide the creation of images.
    - Comfy dtype: CLIP
    - Python dtype: PIL.Image
- pos_g
    - The pos_g parameter represents the positive guidance text, crucial for specifying desired features in the generated image. It helps steer the image generation process toward the intended outcome.
    - Comfy dtype: STRING
    - Python dtype: str
- pos_l
    - The pos_l parameter is the positive language text, which complements the guidance text. It provides additional context to refine the image generation process, ensuring desired attributes are clearly conveyed.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_g
    - The neg_g parameter contains the negative guidance text, specifying features to avoid in the generated image. It plays a critical role in ensuring the final output aligns with user preferences.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_l
    - The neg_l parameter represents the negative language text, further refining image generation by specifying unwanted features. It is important for achieving a final image that meets user expectations.
    - Comfy dtype: STRING
    - Python dtype: str
- preset
    - The preset parameter allows users to select predefined combinations of positive and negative prompts for image generation. It simplifies the process by providing options that balance the inclusion of desired and undesired features.
    - Comfy dtype: COMBO[preset A, preset B, preset C]
    - Python dtype: str
- base_width
    - The base_width parameter defines the width of the base image used for encoding. It is an important factor in determining the resolution and aspect ratio of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- base_height
    - The base_height parameter specifies the height of the base image, and together with base_width, determines the overall dimensions of the image produced by the encoding process.
    - Comfy dtype: INT
    - Python dtype: int
- crop_w
    - The crop_w parameter indicates the width of the cropped region from the base image. It plays a role in focusing the encoding on specific areas of the image to align with the desired output.
    - Comfy dtype: INT
    - Python dtype: int
- crop_h
    - The crop_h parameter defines the height of the cropped region, working with crop_w to determine the precise portion of the base image that is encoded and used for image generation.
    - Comfy dtype: INT
    - Python dtype: int
- target_width
    - The target_width parameter sets the desired width of the final generated image. It is a key factor in achieving the expected resolution and aspect ratio of the output.
    - Comfy dtype: INT
    - Python dtype: int
- target_height
    - The target_height parameter specifies the desired height of the final image, ensuring the output meets the user's requirements in terms of dimensions and composition.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- base_positive
    - The base_positive output contains the encoded representation of the positive prompts, used to guide the generation of images with desired attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- base_negative
    - The base_negative output represents the encoded negative prompts, used to exclude unwanted features from the generated image.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- show_help
    - The show_help output provides a link to documentation for further assistance and understanding of the node's functionality and usage.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_SDXLBasePromptEncoder:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'base_clip': ('CLIP',), 'pos_g': ('STRING', {'multiline': True, 'default': 'POS_G'}), 'pos_l': ('STRING', {'multiline': True, 'default': 'POS_L'}), 'neg_g': ('STRING', {'multiline': True, 'default': 'NEG_G'}), 'neg_l': ('STRING', {'multiline': True, 'default': 'NEG_L'}), 'preset': (['preset A', 'preset B', 'preset C'],), 'base_width': ('INT', {'default': 4096.0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 64}), 'base_height': ('INT', {'default': 4096.0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 64}), 'crop_w': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 64}), 'crop_h': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 64}), 'target_width': ('INT', {'default': 4096.0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 64}), 'target_height': ('INT', {'default': 4096.0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 64})}}
    RETURN_TYPES = ('CONDITIONING', 'CONDITIONING', 'STRING')
    RETURN_NAMES = ('base_positive', 'base_negative', 'show_help')
    FUNCTION = 'encode'
    CATEGORY = icons.get('Comfyroll/SDXL')

    def encode(self, base_clip, pos_g, pos_l, neg_g, neg_l, base_width, base_height, crop_w, crop_h, target_width, target_height, preset):
        empty = base_clip.tokenize('')
        tokens1 = base_clip.tokenize(pos_g)
        tokens1['l'] = base_clip.tokenize(pos_l)['l']
        if len(tokens1['l']) != len(tokens1['g']):
            while len(tokens1['l']) < len(tokens1['g']):
                tokens1['l'] += empty['l']
            while len(tokens1['l']) > len(tokens1['g']):
                tokens1['g'] += empty['g']
        (cond1, pooled1) = base_clip.encode_from_tokens(tokens1, return_pooled=True)
        res1 = [[cond1, {'pooled_output': pooled1, 'width': base_width, 'height': base_height, 'crop_w': crop_w, 'crop_h': crop_h, 'target_width': target_width, 'target_height': target_height}]]
        tokens2 = base_clip.tokenize(neg_g)
        tokens2['l'] = base_clip.tokenize(neg_l)['l']
        if len(tokens2['l']) != len(tokens2['g']):
            while len(tokens2['l']) < len(tokens2['g']):
                tokens2['l'] += empty['l']
            while len(tokens2['l']) > len(tokens2['g']):
                tokens2['g'] += empty['g']
        (cond2, pooled2) = base_clip.encode_from_tokens(tokens2, return_pooled=True)
        res2 = [[cond2, {'pooled_output': pooled2, 'width': base_width, 'height': base_height, 'crop_w': crop_w, 'crop_h': crop_h, 'target_width': target_width, 'target_height': target_height}]]
        tokens2 = base_clip.tokenize(pos_l)
        tokens2['l'] = base_clip.tokenize(neg_l)['l']
        if len(tokens2['l']) != len(tokens2['g']):
            while len(tokens2['l']) < len(tokens2['g']):
                tokens2['l'] += empty['l']
            while len(tokens2['l']) > len(tokens2['g']):
                tokens2['g'] += empty['g']
        (cond2, pooled2) = base_clip.encode_from_tokens(tokens2, return_pooled=True)
        res3 = [[cond2, {'pooled_output': pooled2, 'width': base_width, 'height': base_height, 'crop_w': crop_w, 'crop_h': crop_h, 'target_width': target_width, 'target_height': target_height}]]
        tokens2 = base_clip.tokenize(neg_l)
        tokens2['l'] = base_clip.tokenize(neg_l)['l']
        if len(tokens2['l']) != len(tokens2['g']):
            while len(tokens2['l']) < len(tokens2['g']):
                tokens2['l'] += empty['l']
            while len(tokens2['l']) > len(tokens2['g']):
                tokens2['g'] += empty['g']
        (cond2, pooled2) = base_clip.encode_from_tokens(tokens2, return_pooled=True)
        res4 = [[cond2, {'pooled_output': pooled2, 'width': base_width, 'height': base_height, 'crop_w': crop_w, 'crop_h': crop_h, 'target_width': target_width, 'target_height': target_height}]]
        if preset == 'preset A':
            base_positive = res1
            base_negative = res2
        elif preset == 'preset B':
            base_positive = res3
            base_negative = res4
        elif preset == 'preset C':
            base_positive = res1 + res3
            base_negative = res2 + res4
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/SDXL-Nodes#cr-sdxl-base-prompt-encoder'
        return (base_positive, base_negative, show_help)
```