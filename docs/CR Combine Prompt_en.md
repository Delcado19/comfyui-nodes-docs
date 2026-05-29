# Documentation
- Class name: CR_CombinePrompt
- Category: Essential
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_CombinePrompt node concatenates multiple string inputs into a single output string. It simplifies creating complex prompts by combining various text elements with a specified delimiter.

# Input types
## Optional
- part1
- The first text segment to combine in the final output. It forms the basic component of the overall prompt structure.
    - Comfy dtype: STRING
    - Python dtype: str
- part2
- The second text segment included in the output string. It shapes the details of the prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- part3
- The third text segment of the prompt. This optional element can be included based on user needs.
    - Comfy dtype: STRING
    - Python dtype: str
- part4
- The fourth and final text segment merged into the prompt. It completes the information delivery and provides closure to the overall prompt structure.
    - Comfy dtype: STRING
    - Python dtype: str
- separator
- The character or string used to separate the prompt parts. It determines the structure and readability of the combined output.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- prompt
- The string formed by combining input parts using the specified delimiter. It represents the node's final output, ready for further processing or display.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
- A URL link to the node's help documentation page. It provides users a reference resource for consultation when needed.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
