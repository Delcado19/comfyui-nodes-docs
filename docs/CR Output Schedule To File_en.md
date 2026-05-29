# Documentation
- Class name: CR_OutputScheduleToFile
- Category: Comfyroll/Animation/Schedule
- Output node: True
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_OutputScheduleToFile node is designed to output schedule data to a file for management. It receives parameters such as output file path, file name, schedule, and file extension, then generates a file in the specified format, ensuring the file name is unique to avoid overwriting existing files.

# Input types
## Required
- output_file_path
    - The output_file_path parameter specifies the directory where the output file will be saved. It is critical for determining the file's location and is required for the node's operation, as it directs where the output should be stored.
    - Comfy dtype: STRING
    - Python dtype: str
- file_name
    - The file_name parameter defines the base name of the output file, excluding the extension. It plays a key role in identifying the file and is necessary for the node to create a unique file name that does not conflict with existing files in the directory.
    - Comfy dtype: STRING
    - Python dtype: str
- schedule
    - The schedule parameter contains the data to be written to the file. It is a critical input, as it represents the content the node is responsible for outputting. The expected schedule data format can be written to text or CSV files.
    - Comfy dtype: SCHEDULE
    - Python dtype: List[Any]
## Optional
- file_extension
    - The file_extension parameter determines the format of the output file. It is optional but important, as it decides the type of data structure the file will have. The node supports 'txt' and 'csv' extensions, which correspond to different text formats.
    - Comfy dtype: COMBO['txt', 'csv']
    - Python dtype: str

# Output types

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
