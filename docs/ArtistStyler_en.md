
# Documentation
- Class name: ArtistStyler
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ArtistStyler node dynamically applies artistic style processing to text prompts based on a predefined artistic style dataset. It allows users to enhance their text input with preset artistic styles, enabling a more creative and personalized text generation process.

# Input types
## Required
- text_positive
- The positive text input that the user wants to apply the artistic style to. This input defines the base content to be enhanced with the selected artistic style.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
- The negative text input that the user wants to apply the artistic style to. This input supplements the positive text by indicating elements that should be softened or weakened in style, providing a more nuanced approach to text stylization.
    - Comfy dtype: STRING
    - Python dtype: str
- artist
- The artistic style to apply to the text input. This choice is essential for personalizing the text, giving it a specific artistic flair.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
- A boolean indicating whether to log the prompt stylization process. Enabling this option provides transparency and insight into the stylization decisions made by the node.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
- The artistically stylized positive text output, reflecting the result of applying the selected artistic style to the original positive input.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
- The artistically stylized negative text output, reflecting the result of applying the selected artistic style to the original negative input.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
