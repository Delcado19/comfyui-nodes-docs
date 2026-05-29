
# Documentation
- Class name: LoadPromptsFromDir __Inspire
- Category: InspirePack/Prompt
- Output node: False
- Repo Ref: https://github.com/shiimizu/ComfyUI_smZNodes

LoadPromptsFromDir node aims to load prompt data from a specified directory. It scans text files in the directory, extracts prompts matching a predefined format, and organizes them into a structured format for further processing. This node simplifies retrieving and organizing prompt data, making it readily available for creative or analytical applications within the Inspire ecosystem.

# Input types
## Required
- prompt_dir
    - Specify the directory path to load prompts from. This path locates and reads text files containing prompt data, determining the source of prompts to process within the node's operation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- zipped_prompt
    - Returns a list of tuples, each containing a prompt's positive and negative parts along with the file name from which the prompt was extracted. This structured output facilitates easy access and manipulation of loaded prompt data by subsequent nodes or processes.
    - Comfy dtype: ZIPPED_PROMPT
    - Python dtype: List[Tuple[str, str, str]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/shiimizu/ComfyUI_smZNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
