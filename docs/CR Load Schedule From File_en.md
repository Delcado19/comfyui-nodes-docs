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
```
class CR_LoadScheduleFromFile:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'input_file_path': ('STRING', {'multiline': False, 'default': ''}), 'file_name': ('STRING', {'multiline': False, 'default': ''}), 'file_extension': (['txt', 'csv'],)}}
    RETURN_TYPES = ('SCHEDULE', 'STRING')
    RETURN_NAMES = ('SCHEDULE', 'show_text')
    FUNCTION = 'csvinput'
    CATEGORY = icons.get('Comfyroll/Animation/Schedule')

    def csvinput(self, input_file_path, file_name, file_extension):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Schedule-Nodes#cr-load-schedule-from-file'
        filepath = input_file_path + '\\' + file_name + '.' + file_extension
        print(f'CR Load Schedule From File: Loading {filepath}')
        lists = []
        if file_extension == 'csv':
            with open(filepath, 'r') as csv_file:
                reader = csv.reader(csv_file)
                for row in reader:
                    lists.append(row)
        else:
            with open(filepath, 'r') as txt_file:
                for row in txt_file:
                    parts = row.strip().split(',', 1)
                    if len(parts) >= 2:
                        second_part = parts[1].strip('"')
                        lists.append([parts[0], second_part])
        return (lists, str(lists))
```