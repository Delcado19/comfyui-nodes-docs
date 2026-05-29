
# Documentation
- Class name: PromptExtractor __Inspire
- Category: InspirePack/Prompt
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The PromptExtractor node belongs to the Inspire package, designed to extract and process prompt information from images, facilitating the customization and manipulation of prompts based on specific inputs. It acts as a bridge between visual content and the text prompt generation process, enabling dynamic prompt creation and modification.

# Input types
## Required
- image
    - The 'image' input type provides visual content from which prompts are extracted or generated.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- positive_id
    - The 'positive_id' input specifies the identifier for selecting positive prompt text from available options.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_id
    - The 'negative_id' input specifies the identifier for selecting negative prompt text from available options.
    - Comfy dtype: STRING
    - Python dtype: str
- info
    - The 'info' input type provides additional information or context that may influence the prompt extraction process.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- positive
    - This output type represents the extracted positive prompt text.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - This output type represents the extracted negative prompt text.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
