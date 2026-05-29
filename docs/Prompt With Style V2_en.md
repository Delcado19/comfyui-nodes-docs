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
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
