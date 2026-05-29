
# Documentation
- Class name: Breast_StateStyler
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Breast_StateStyler node dynamically customizes text prompts based on the user‑selected style options, enhancing output specificity and creativity. It uses a comprehensive style database to subtly modify text input, aligning the generation process with user preferences and thematic requirements.

# Input types
## Required
- text_positive
    - The 'text_positive' input represents the initial positive text prompt; the node modifies it according to the chosen style option. It provides the base content to be enhanced, playing a key role in shaping the final stylized output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The 'text_negative' input is the initial negative text prompt; the node adjusts it based on the selected style preference. It is essential for refining output by specifying themes or elements to be minimized or avoided.
    - Comfy dtype: STRING
    - Python dtype: str
- breast_state
    - The 'breast_state' input specifies the particular breast state or condition that the style option should emphasize or de‑emphasize, crucial for tailoring output to specific thematic or content requirements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - The 'log_prompt' input enables logging of the style processing, including the original prompt and the choices made, providing insight into how style selections affect the final output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
    - The modified positive text prompt reflects the applied style choices. It demonstrates the node's ability to enhance and personalize text generation based on user preferences.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The adjusted negative text prompt shows how style preferences influence the minimization or avoidance of certain themes or elements.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
