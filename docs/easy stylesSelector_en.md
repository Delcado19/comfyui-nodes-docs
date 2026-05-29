# Documentation
- Class name: stylesPromptSelector
- Category: EasyUse/Prompt
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node abstractly manages the selection and application of stylized prompts to guide the generation process, ensuring thematic consistency and stylistic diversity without involving specific implementation details.

# Input types
## Required
- styles
    - The "style" parameter is critical as it determines the stylistic direction of the output. It allows the node to select from a predefined set of styles, influencing the overall aesthetic and thematic outcome of the generated content.
    - Comfy dtype: COMBO[fooocus_styles, bar_styles, baz_styles]
    - Python dtype: Union[str, List[str]]
## Optional
- positive
    - The "positive" parameter serves as a guide for the node to include certain elements or themes in the output. It refines the generation process by focusing on desired aspects, enhancing the relevance and appeal of the final result.
    - Comfy dtype: STRING
    - Python dtype: Optional[str]
- negative
    - The "negative" parameter is essential in defining what should be excluded from the output. It helps the node avoid unwanted elements or themes, ensuring the final result aligns with the intended vision.
    - Comfy dtype: STRING
    - Python dtype: Optional[str]
- prompt
    - The "prompt" parameter is a hidden input that, when present in the "my_unique_id" section of the input, provides additional context for the node. It can contain specific instructions or preferences to further tailor the output to the user's needs.
    - Comfy dtype: PROMPT
    - Python dtype: Dict[str, Any]
- extra_pnginfo
    - When provided, the "extra_pnginfo" parameter can offer supplementary information that the node may utilize to enhance the detail and quality of the output. It plays a role in refining the generation process to meet specific user requirements.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Any
- my_unique_id
    - The "my_unique_id" parameter is a hidden input used to uniquely identify the request. It enables the node to manage and associate inputs for specific user requests, ensuring personalized and targeted output generation.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: Any

# Output types
- positive
    - The "positive" output represents the stylized prompts tailored and selected based on the input criteria. It is a critical component of the final output, ensuring the generated content aligns with the desired themes and elements.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The "negative" output captures the elements or themes explicitly excluded from the generation process. This ensures the final result remains free from unwanted aspects, strictly adhering to the user's specifications.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
