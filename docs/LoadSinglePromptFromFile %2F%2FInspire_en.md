# Documentation
- Class name: LoadSinglePromptFromFile
- Category: InspirePack/Prompt
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node is designed to extract and process text prompts from a specified file, enabling users to utilize predefined prompts in a structured way within the system.

# Input types
## Required
- prompt_file
    - The prompt_file parameter is crucial as it identifies the specific text file from which prompts will be loaded. It influences the node's operation by determining the source of the prompts.
    - Comfy dtype: COMBO[prompt_files]
    - Python dtype: str
## Optional
- index
    - The index parameter is important because it specifies the position of the desired prompt in the file. It affects the node's execution by selecting a specific prompt for processing.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- zipped_prompt
    - The output provides a tuple containing the positive and negative aspects of the prompt, as well as the filename, which is crucial for further analysis and application within the system.
    - Comfy dtype: ZIPPED_PROMPT
    - Python dtype: Tuple[str, str, str]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
