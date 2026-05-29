
# Documentation
- Class name: Inference_Core_PromptExpansion
- Category: utils
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Inference_Core_PromptExpansion node aims to enhance and expand input prompts using a pre‑trained language model. It automatically adjusts the input prompt based on a given seed, enriching the prompt by adding additional context or variants, and outputs the expanded version. The purpose of this process is to improve prompt quality and relevance for subsequent processing or generation tasks.

# Input types
## Required
- model_name
- Specify the model used for prompt expansion. It determines the language style and capability of the expansion.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- text
- Provide the initial text prompt to be expanded. It serves as the base content that will be enriched and expanded to generate more detailed or varied output.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
- Supply an integer seed to influence variations in the expanded prompt. It ensures reproducibility of the expansion process, allowing consistent results across runs.
    - Comfy dtype: INT
    - Python dtype: int
- log_prompt
- Include a boolean flag to control whether to log the original and expanded prompts for debugging or analysis.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- expanded_prompt
- The enriched and expanded version of the original prompt, produced by integrating additional context or variants based on the seed.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
- The seed value used in the expansion process, returned for reference or further use.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
