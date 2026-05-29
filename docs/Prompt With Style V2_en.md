# Documentation
- Class name: PromptWithStyleV2
- Category: Mikey
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The PromptWithStyleV2 node is designed to generate and refine prompts with a specified style, ensuring that the generated content aligns with the desired artistic or thematic direction. It leverages a combination of positive and negative prompts along with style parameters to guide the creative process, producing nuanced outputs that reflect the input criteria.

# Input types
## Required
- positive_prompt
    - The positive prompt is a key input that directs content generation, setting the creative tone and helping achieve the desired style and thematic elements in the output.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - The negative prompt is used to exclude unwanted elements or features from the generated content. It refines the output by specifying what should be avoided, thereby enhancing the overall consistency and focus of the results.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter is critical for defining the aesthetic or thematic direction of the generated content. It influences the selection of artistic elements and the overall look and feel of the output.
    - Comfy dtype: STRING
    - Python dtype: str
- ratio_selected
    - The ratio_selected parameter determines the aspect ratio of the generated content, which is essential for maintaining the desired visual composition and layout.
    - Comfy dtype: STRING
    - Python dtype: str
- clip_base
    - The clip_base parameter is a reference to the base CLIP model used for encoding and decoding text prompts into latent space representations.
    - Comfy dtype: CLIP
    - Python dtype: CLIP
- clip_refiner
    - The clip_refiner parameter represents the refiner CLIP model used to further improve the quality and specificity of the generated prompts.
    - Comfy dtype: CLIP
    - Python dtype: CLIP
## Optional
- batch_size
    - Batch size is an optional parameter that allows users to control the number of samples generated in a single operation. It can be adjusted based on available computational resources and the specific requirements of the task at hand.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed is an optional parameter that ensures reproducibility of the generation process. It is particularly useful when consistent results are required across multiple runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- samples
    - The sample output contains the generated latent representations, which can be further processed or used as input to other nodes in the workflow.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- base_pos_cond
    - The base_pos_cond output provides positive conditioning information based on the base CLIP model, which can be used to guide the generation process toward desired features.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- base_neg_cond
    - The base_neg_cond output provides negative conditioning information based on the base CLIP model, helping to avoid unwanted elements in the generated content.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- refiner_pos_cond
    - The refiner_pos_cond output presents positive conditioning from the refiner CLIP model, enhancing the specificity and quality of the generated prompts.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- refiner_neg_cond
    - The refiner_neg_cond output provides negative conditioning from the refiner CLIP model, ensuring that the generated content adheres to specified constraints and avoids certain features.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- positive_prompt
    - The positive_prompt output reflects the final positive prompt used in the generation process, incorporating the desired qualities and themes encoded into the output.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - The negative_prompt output represents the final negative prompt used in the generation process, specifying the elements and features that should be omitted from the generated content.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class PromptWithStyleV2:

    @classmethod
    def INPUT_TYPES(s):
        (s.ratio_sizes, s.ratio_dict) = read_ratios()
        (s.styles, s.pos_style, s.neg_style) = read_styles()
        return {'required': {'positive_prompt': ('STRING', {'multiline': True, 'default': 'Positive Prompt'}), 'negative_prompt': ('STRING', {'multiline': True, 'default': 'Negative Prompt'}), 'style': (s.styles,), 'ratio_selected': (s.ratio_sizes,), 'batch_size': ('INT', {'default': 1, 'min': 1, 'max': 64}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'clip_base': ('CLIP',), 'clip_refiner': ('CLIP',)}}
    RETURN_TYPES = ('LATENT', 'CONDITIONING', 'CONDITIONING', 'CONDITIONING', 'CONDITIONING', 'STRING', 'STRING')
    RETURN_NAMES = ('samples', 'base_pos_cond', 'base_neg_cond', 'refiner_pos_cond', 'refiner_neg_cond', 'positive_prompt', 'negative_prompt')
    FUNCTION = 'start'
    CATEGORY = 'Mikey'

    def start(self, clip_base, clip_refiner, positive_prompt, negative_prompt, style, ratio_selected, batch_size, seed):
        """ get output from PromptWithStyle.start """
        (latent, pos_prompt, neg_prompt, pos_style, neg_style, width, height, refiner_width, refiner_height) = PromptWithStyle.start(self, positive_prompt, negative_prompt, style, ratio_selected, batch_size, seed)
        ratio = min([width, height]) / max([width, height])
        (target_width, target_height) = (4096, 4096 * ratio // 8 * 8) if width > height else (4096 * ratio // 8 * 8, 4096)
        refiner_width = target_width
        refiner_height = target_height
        sdxl_pos_cond = CLIPTextEncodeSDXL.encode(self, clip_base, width, height, 0, 0, target_width, target_height, pos_prompt, pos_style)[0]
        sdxl_neg_cond = CLIPTextEncodeSDXL.encode(self, clip_base, width, height, 0, 0, target_width, target_height, neg_prompt, neg_style)[0]
        refiner_pos_cond = CLIPTextEncodeSDXLRefiner.encode(self, clip_refiner, 6, refiner_width, refiner_height, pos_prompt)[0]
        refiner_neg_cond = CLIPTextEncodeSDXLRefiner.encode(self, clip_refiner, 2.5, refiner_width, refiner_height, neg_prompt)[0]
        return (latent, sdxl_pos_cond, sdxl_neg_cond, refiner_pos_cond, refiner_neg_cond, pos_prompt, neg_prompt)
```