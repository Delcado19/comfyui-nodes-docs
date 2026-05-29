# Documentation
- Class name: CR_PromptMixer
- Category: Comfyroll/Essential/Legacy
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_PromptMixer is a node designed to blend different prompts and styles to generate refined outputs. It receives positive and negative prompts along with style inputs, then applies selected presets to mix these inputs in specific ways. The node's functionality focuses on improving the quality and consistency of generated text through intelligent combination of various text elements.

# Input types
## Optional
- prompt_positive
    - Positive prompts are critical inputs in the text generation process, providing constructive examples or guidelines. They play a crucial role in guiding the output toward desired quality and attributes.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt_negative
    - Negative prompts are used to provide examples or guidelines to avoid in text generation. They play an important role in shaping the output by specifying what to exclude.
    - Comfy dtype: STRING
    - Python dtype: str
- style_positive
    - Positive style inputs are used to refine text generation by adding style elements considered beneficial. They enhance the output with specific stylistic characteristics.
    - Comfy dtype: STRING
    - Python dtype: str
- style_negative
    - Negative style inputs allow specifying style elements to omit from text generation. This is important for ensuring the final output aligns with the intended style.
    - Comfy dtype: STRING
    - Python dtype: str
- preset
    - The preset parameter determines the specific blending strategy applied to inputs. Each preset represents a different approach to combining positive and negative prompts and styles.
    - Comfy dtype: COMBO['preset 1', 'preset 2', 'preset 3', 'preset 4', 'preset 5']
    - Python dtype: str

# Output types
- pos_g
    - The 'pos_g' output represents the mixed positive prompt generated according to the selected preset. It is a key component of the final output, reflecting the combined effect of inputs.
    - Comfy dtype: STRING
    - Python dtype: str
- pos_l
    - The 'pos_l' output is another mixed positive prompt, reflecting different aspects of the input mixing process. It contributes to the overall coherence and quality of generated text.
    - Comfy dtype: STRING
    - Python dtype: str
- pos_r
    - The 'pos_r' output represents a further variation of the mixed positive prompt, providing additional depth to the text generation process.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_g
    - The 'neg_g' output is a mixed negative prompt, processed to exclude unwanted elements from the final text generation.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_l
    - The 'neg_l' output represents another mixed negative prompt, ensuring specific unwanted style elements are excluded from text generation.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_r
    - The 'neg_r' output is the final variation of the mixed negative prompt, providing comprehensive exclusion of unwanted elements for text generation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
