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
```
class CR_OutputScheduleToFile:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'output_file_path': ('STRING', {'multiline': False, 'default': ''}), 'file_name': ('STRING', {'multiline': False, 'default': ''}), 'file_extension': (['txt', 'csv'],), 'schedule': ('SCHEDULE',)}}
    RETURN_TYPES = ()
    OUTPUT_NODE = True
    FUNCTION = 'csvoutput'
    CATEGORY = icons.get('Comfyroll/Animation/Schedule')

    def csvoutput(self, output_file_path, file_name, schedule, file_extension):
        filepath = output_file_path + '\\' + file_name + '.' + file_extension
        index = 2
        if output_file_path == '' or file_name == '':
            print(f'[Warning] CR Output Schedule To File. No file details found. No file output.')
            return ()
        while os.path.exists(filepath):
            if os.path.exists(filepath):
                filepath = output_file_path + '\\' + file_name + str(index) + '.' + file_extension
                index = index + 1
            else:
                break
        print(f'[Info] CR Output Schedule To File: Saving to {filepath}')
        if file_extension == 'csv':
            with open(filepath, 'w', newline='') as csv_file:
                csv_writer = csv.writer(csv_file)
                csv_writer.writerows(schedule)
        else:
            with open(filepath, 'w', newline='') as text_writer:
                for line in schedule:
                    str_item = f'{line[0]},"{line[1]}"\n'
                    text_writer.write(str_item)
        return ()
```