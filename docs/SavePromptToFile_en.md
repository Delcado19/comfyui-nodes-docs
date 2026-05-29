# Documentation
- Class name: SavePromptToFile
- Category: OneButtonPrompt
- Output node: True
- Repo Ref: https://github.com/AIrjen/OneButtonPrompt

This node facilitates saving prompts to files, ensuring information is stored in an organized and accessible manner. It enhances workflow by automating file naming and storage processes, which is essential for maintaining clear records of prompts and their associated data.

# Input types
## Required
- filename_prefix
    - The filename prefix is crucial for generating unique and identifiable file names, aiding in efficient organization and referencing of saved prompts.
    - Comfy dtype: STRING
    - Python dtype: str
- positive_prompt
    - The positive prompt is a key input that sets the tone and content of the saved prompt, influencing the overall context and utility of the stored data.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - The negative prompt serves as a counterpoint to the positive prompt, providing a contrasting perspective, which is valuable for understanding the nuances of the prompt.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- prompt_g
    - Additional prompts can provide supplementary information or context, enriching the saved data and offering a more comprehensive understanding of the prompt's scope.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt_l
    - Longer prompts can provide extended details or examples, which may enhance the depth and applicability of the saved prompt.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- status
    - The status output confirms the successful execution of the save operation, ensuring the prompt has been correctly saved and stored.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/AIrjen/OneButtonPrompt)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
