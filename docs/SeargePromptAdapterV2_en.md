# Documentation
- Class name: SeargePromptAdapterV2
- Category: UI_PROMPTING
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node helps construct and retrieve prompt data by integrating primary prompts, secondary prompts, style prompts, and their negative counterparts, enabling the generation of diverse prompts for different scenarios.

# Input types
## Optional
- main_prompt
    - Primary prompts are key elements that set the main context or theme for prompt generation. They are crucial in guiding the direction and content of the output.
    - Comfy dtype: SRG_PROMPT_TEXT
    - Python dtype: str
- secondary_prompt
    - Secondary prompts provide additional information or context to primary prompts, enriching the complexity and depth of the generated content.
    - Comfy dtype: SRG_PROMPT_TEXT
    - Python dtype: str
- style_prompt
    - Style prompts are used to define the specific tone or manner in which the content should be presented, adding a creative layer to the output.
    - Comfy dtype: SRG_PROMPT_TEXT
    - Python dtype: str
- negative_main_prompt
    - Negative primary prompts balance the primary prompts by introducing opposing viewpoints, enhancing the nuance and soundness of the generated content.
    - Comfy dtype: SRG_PROMPT_TEXT
    - Python dtype: str
- negative_secondary_prompt
    - These prompts supplement negative primary prompts by providing a secondary opposing viewpoint, further diversifying content possibilities.
    - Comfy dtype: SRG_PROMPT_TEXT
    - Python dtype: str
- negative_style_prompt
    - Negative style prompts introduce an alternative tone or presentation, ensuring the output includes a wider range of style choices.
    - Comfy dtype: SRG_PROMPT_TEXT
    - Python dtype: str
- data
    - Data is the basic input for node operations, which may contain previous prompt results or other relevant information that may affect the generation process.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Output types
- data
    - Output data stream contains structured prompt information, which can be used as input for subsequent processes or for analysis.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
