# Documentation
- Class name: PromptWithStyle
- Category: Mikey
- Output node: True
- Repo Ref: https://github.com/bash-j/mikey_nodes

This node aims to generate creative prompts by combining positive and negative text inputs along with a specified style, producing diverse outputs that meet various stylization and thematic needs.

# Input types
## Required
- positive_prompt
    - The positive_prompt parameter is essential for setting the positive tone of the generated content. It serves as the foundation for the node's creative output.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - The negative_prompt parameter complements the positive_prompt by introducing contrasting elements during content generation, enhancing the diversity and depth of the output.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter determines the thematic direction and aesthetic quality of the generated content. It is a key factor in achieving outputs with inherent and stylistic consistency.
    - Comfy dtype: COMBO
    - Python dtype: str
- ratio_selected
    - The ratio_selected parameter influences the structural composition of the content, ensuring the generated output aligns with the desired aspect ratio and format requirements.
    - Comfy dtype: STRING
    - Python dtype: str
- batch_size
    - The batch_size parameter determines the number of unique outputs generated in a single operation, which is critical for the efficiency and scalability of content generation.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed parameter introduces controlled randomness in the content generation process, ensuring outputs are both diverse and reproducible, facilitating consistent experimentation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- samples
    - The samples output is a potential representation of the generated content, providing a versatile foundation for further processing and analysis.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- positive_prompt_text_g
    - The positive_prompt_text_g output showcases the processed final version of the positive prompt, customized for the node's creative objectives.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The negative_prompt_text_g output provides a refined negative prompt that complements the positive content, adding depth and contrast to the overall output.
    - Comfy dtype: STRING
    - Python dtype: str
- positive_style_text_l
    - The positive_style_text_l output contains style elements associated with the positive prompt, contributing to the thematic coherence of the generated content.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_style_text_l
    - The negative_style_text_l output reflects the stylistic aspects of the negative prompt, enhancing the diversity and richness of the content.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - The width output specifies the horizontal dimension of the content structure, playing a key role in determining the layout and presentation of the generated output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output defines the vertical dimension of the content structure, crucial for the overall composition and visual appeal of the output.
    - Comfy dtype: INT
    - Python dtype: int
- refiner_width
    - The refiner_width output adjusts the width parameter to optimize the refinement process, ensuring the output is polished and meets quality standards.
    - Comfy dtype: INT
    - Python dtype: int
- refiner_height
    - The refiner_height output sets the vertical parameter for the refinement process, contributing to the precision and detail of the final output.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
