# Documentation
- Class name: PromptWithSDXL
- Category: Mikey
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The PromptWithSDXL node is designed to process and generate prompts for style and content generation tasks. It receives positive and negative prompts along with styles, and applies various transformations to improve the quality of generated content. This node is capable of handling complex prompt structures and is optimized for generating high-quality output.

# Input types
## Required
- positive_prompt
    - Positive prompts are key inputs that guide the generation of content with desired characteristics. They play a crucial role in steering the output toward the intended style and theme.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - Negative prompts help refine the generation process by specifying content to be avoided. They are important for ensuring the final output does not contain unwanted elements.
    - Comfy dtype: STRING
    - Python dtype: str
- positive_style
    - The positive style parameter defines the style elements to be emphasized in the generated content. This is essential for achieving a harmonious and consistent aesthetic.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_style
    - This input allows users to specify styles that should be minimized or excluded from the generated content, ensuring the final output aligns with user preferences.
    - Comfy dtype: STRING
    - Python dtype: str
- ratio_selected
    - The selected ratio parameter determines the aspect ratio of the generated content, which is critical for maintaining the visual integrity of the output.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- batch_size
    - Batch size is an optional parameter that allows users to control the number of samples generated in a single operation. It can be adjusted based on available computational resources.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed parameter is used to introduce randomness in a controlled manner, which is useful for generating diverse sets of outputs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- samples
    - The sample output contains the generated latent representations, which are the core of the content generation process. These representations can be further refined to produce the final output.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- positive_prompt_text_g
    - The positive prompt text output provides the final form of the positive prompt after all transformations have been applied. It reflects the desired characteristics to be included in the generated content.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - This output presents the negative prompt text after processing, detailing the elements that should be omitted from the generated content.
    - Comfy dtype: STRING
    - Python dtype: str
- positive_style_text_l
    - The positive style text output represents the final style preferences that have been processed and are ready to influence content generation.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_style_text_l
    - This output contains the processed negative style text, indicating the style elements that should be avoided in the generated content.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - The width parameter indicates the width of the generated content, which is essential for maintaining the desired aspect ratio and visual presentation.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter specifies the height of the generated content, working in conjunction with width to ensure proper display and aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int
- refiner_width
    - The refiner width output determines the width of the refinement process, which is important for the final quality of the generated content.
    - Comfy dtype: INT
    - Python dtype: int
- refiner_height
    - This output specifies the height of the refinement process, ensuring the generated content has appropriate detail and conforms to the desired specifications.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
