# Documentation
- Class name: CR_LoadScheduleFromFile
- Category: Comfyroll/Animation/Schedule
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_LoadScheduleFromFile is a node for importing schedule data from a file, facilitating management and organization of animation sequences. It acts as a bridge between the file system and the animation workflow, allowing users to load and parse keyframe or cue data into a usable format for further processing in the animation pipeline.

# Input types
## Required
- input_file_path
    - The input_file_path parameter specifies the directory where the schedule file is located. This is essential for the node to correctly identify and access the file containing the schedule data.
    - Comfy dtype: STRING
    - Python dtype: str
- file_name
    - The file_name parameter indicates the name of the schedule file to load. It plays a crucial role in file identification and is vital for the node to process the correct dataset.
    - Comfy dtype: STRING
    - Python dtype: str
- file_extension
    - The file_extension parameter determines the format of the schedule file, allowing the node to apply the appropriate parsing method. It is a key factor in ensuring the data is accurately read and interpreted.
    - Comfy dtype: COMBO['txt', 'csv']
    - Python dtype: str

# Output types
- SCHEDULE
    - The SCHEDULE output provides the content of the schedule file after parsing, usable within the animation environment. It represents the structured data extracted from the file.
    - Comfy dtype: STRING
    - Python dtype: List[List[str]]
- show_text
    - The show_text output offers a textual representation of the parsed schedule data, useful for display or debugging purposes within the application.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
