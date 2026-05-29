# Documentation
- Class name: SeargeSDXLPromptEncoder
- Category: Searge/_deprecated_/ClipEncoding
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node aims to process and encode text input into conditioning data for generative models. It focuses on converting prompts into structured formats that can guide the generative process, emphasizing the node's role in preparing inputs for creative tasks.

# Input types
## Required
- base_clip
    - This parameter is critical as it provides the foundational CLIP model used to encode text prompts. It is essential for the node's operation and influences the quality of the generated conditioning data.
    - Comfy dtype: CLIP
    - Python dtype: CLIPModel
- refiner_clip
    - The refiner CLIP model is used to further process and refine text prompts, enhancing the effectiveness of the conditioning data. Its role in node execution and final output quality is crucial.
    - Comfy dtype: CLIP
    - Python dtype: CLIPModel
- base_width
    - The base width parameter is essential for defining the dimensions of the input space for the generative model, directly affecting the range and resolution of the generated content.
    - Comfy dtype: INT
    - Python dtype: int
- base_height
    - Similar to base width, the base height parameter is crucial for setting the vertical dimensions of the input space, influencing the overall structure and composition of the output.
    - Comfy dtype: INT
    - Python dtype: int
- crop_w
    - The crop width parameter determines the horizontal extent of the cropping area, which is essential for focusing the generation on specific regions of interest within the input.
    - Comfy dtype: INT
    - Python dtype: int
- crop_h
    - The crop height parameter sets the vertical dimensions of the cropping area, playing a key role in isolating specific elements during the generation process.
    - Comfy dtype: INT
    - Python dtype: int
- target_width
    - The target width parameter defines the desired width of the output, a critical factor in ensuring the generated content meets the required specifications and dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- target_height
    - The target height parameter specifies the desired height of the output, directly impacting the final size and layout of the generated content.
    - Comfy dtype: INT
    - Python dtype: int
- pos_ascore
    - The positive aesthetic score parameter is used to weight the importance of positive prompts during the generation process, ensuring the output reflects the desired aesthetic qualities.
    - Comfy dtype: FLOAT
    - Python dtype: float
- neg_ascore
    - The negative aesthetic score parameter helps reduce undesirable aesthetic elements in the output, improving the precision and relevance of the generated content.
    - Comfy dtype: FLOAT
    - Python dtype: float
- refiner_width
    - The refiner width parameter is important for setting the dimensions of the refiner input space, which is crucial for achieving detailed and high-quality refinement in the output.
    - Comfy dtype: INT
    - Python dtype: int
- refiner_height
    - The refiner height parameter is essential for defining the vertical dimensions of the refiner input space, affecting the granularity and precision of aesthetic refinement in the output.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- pos_g
    - This parameter contains the positive global prompt, which influences the overall theme and direction of the generated content. It is significant in setting the creative context for node operation.
    - Comfy dtype: STRING
    - Python dtype: str
- pos_l
    - The positive local prompt provides detailed guidance for specific aspects of the generation, helping the node produce targeted and nuanced output.
    - Comfy dtype: STRING
    - Python dtype: str
- pos_r
    - The positive refiner prompt is used to fine-tune the generation process, ensuring the output closely aligns with the desired aesthetic and thematic goals.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_g
    - The negative global prompt helps exclude unwanted elements from the generated content, playing a key role in shaping the characteristics of the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_l
    - The negative local prompt is used to specify particular aspects to avoid in the generation, guiding the node to produce content that meets specific exclusion criteria.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_r
    - The negative refiner prompt is used to further refine the exclusion of unwanted elements, ensuring the node's output has a high degree of precision.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- base_positive
    - This output provides conditioning data derived from the base positive prompt, serving as a foundation for guiding the generative model toward the desired creative direction.
    - Comfy dtype: CONDITIONING
    - Python dtype: ConditioningData
- base_negative
    - The base negative output contains conditioning data from the base negative prompt, helping to exclude unwanted elements from the generated content.
    - Comfy dtype: CONDITIONING
    - Python dtype: ConditioningData
- refiner_positive
    - This output includes conditioning data from the refiner positive prompt, focusing on fine-tuning the aesthetic and thematic aspects of the generated content.
    - Comfy dtype: CONDITIONING
    - Python dtype: ConditioningData
- refiner_negative
    - The refiner negative output provides conditioning data based on the refiner negative prompt, ensuring the final output is refined to avoid unwanted features.
    - Comfy dtype: CONDITIONING
    - Python dtype: ConditioningData

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeSDXLPromptEncoder:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'base_clip': ('CLIP',), 'refiner_clip': ('CLIP',), 'pos_g': ('STRING', {'multiline': True, 'default': 'POS_G'}), 'pos_l': ('STRING', {'multiline': True, 'default': 'POS_L'}), 'pos_r': ('STRING', {'multiline': True, 'default': 'POS_R'}), 'neg_g': ('STRING', {'multiline': True, 'default': 'NEG_G'}), 'neg_l': ('STRING', {'multiline': True, 'default': 'NEG_L'}), 'neg_r': ('STRING', {'multiline': True, 'default': 'NEG_R'}), 'base_width': ('INT', {'default': 4096, 'min': 0, 'max': nodes.MAX_RESOLUTION, 'step': 8}), 'base_height': ('INT', {'default': 4096, 'min': 0, 'max': nodes.MAX_RESOLUTION, 'step': 8}), 'crop_w': ('INT', {'default': 0, 'min': 0, 'max': nodes.MAX_RESOLUTION, 'step': 8}), 'crop_h': ('INT', {'default': 0, 'min': 0, 'max': nodes.MAX_RESOLUTION, 'step': 8}), 'target_width': ('INT', {'default': 4096, 'min': 0, 'max': nodes.MAX_RESOLUTION, 'step': 8}), 'target_height': ('INT', {'default': 4096, 'min': 0, 'max': nodes.MAX_RESOLUTION, 'step': 8}), 'pos_ascore': ('FLOAT', {'default': 6.0, 'min': 0.0, 'max': 1000.0, 'step': 0.01}), 'neg_ascore': ('FLOAT', {'default': 2.5, 'min': 0.0, 'max': 1000.0, 'step': 0.01}), 'refiner_width': ('INT', {'default': 2048, 'min': 0, 'max': nodes.MAX_RESOLUTION, 'step': 8}), 'refiner_height': ('INT', {'default': 2048, 'min': 0, 'max': nodes.MAX_RESOLUTION, 'step': 8})}}
    RETURN_TYPES = ('CONDITIONING', 'CONDITIONING', 'CONDITIONING', 'CONDITIONING')
    RETURN_NAMES = ('base_positive', 'base_negative', 'refiner_positive', 'refiner_negative')
    FUNCTION = 'encode'
    CATEGORY = 'Searge/_deprecated_/ClipEncoding'

    def encode(self, base_clip, refiner_clip, pos_g, pos_l, pos_r, neg_g, neg_l, neg_r, base_width, base_height, crop_w, crop_h, target_width, target_height, pos_ascore, neg_ascore, refiner_width, refiner_height):
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
        tokens3 = refiner_clip.tokenize(pos_r)
        (cond3, pooled3) = refiner_clip.encode_from_tokens(tokens3, return_pooled=True)
        res3 = [[cond3, {'pooled_output': pooled3, 'aesthetic_score': pos_ascore, 'width': refiner_width, 'height': refiner_height}]]
        tokens4 = refiner_clip.tokenize(neg_r)
        (cond4, pooled4) = refiner_clip.encode_from_tokens(tokens4, return_pooled=True)
        res4 = [[cond4, {'pooled_output': pooled4, 'aesthetic_score': neg_ascore, 'width': refiner_width, 'height': refiner_height}]]
        return (res1, res2, res3, res4)
```