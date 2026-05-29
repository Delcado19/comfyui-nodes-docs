# Documentation
- Class name: LoadPromptsFromFile
- Category: InspirePack/Prompt
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The LoadPromptsFromFile node is designed to read and parse prompt files from a specified directory. It extracts positive and negative text paragraphs from each file following a predefined format and organizes them into tuples. This node plays a key role in preparing prompt data for further processing, such as training or evaluating generative models.

# Input types
## Required
- prompt_file
    - The 'prompt_file' parameter is a string specifying the relative path to the text file containing prompts. It is crucial for the node's operation as it determines the source of prompts to load and process.
    - Comfy dtype: "str"
    - Python dtype: str

# Output types
- ZIPPED_PROMPT
    - The 'ZIPPED_PROMPT' output is a list of tuples, each containing the extracted positive and negative text paragraphs from the prompt file along with the file name. This output is important as it provides structured data required for downstream tasks.
    - Comfy dtype: COMBO["str", "str", "str"]
    - Python dtype: Tuple[str, str, str]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
