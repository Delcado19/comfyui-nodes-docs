# Documentation
- Class name: CR_SaveTextToFile
- Category: Comfyroll/Utils/Text
- Output node: True
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_SaveTextToFile node is designed to save text data to a file. It provides functionality for handling multiline text and writes the text to a specified file path, using a given file name and extension, ensuring the file has a unique name to avoid overwriting existing files.

# Input types
## Required
- multiline_text
    - The 'multiline_text' parameter holds the text content to be saved. It is essential because it is the main data the node processes and writes to the file.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- output_file_path
    - The 'output_file_path' parameter specifies the directory where the file will be saved. It is optional; if not provided, a default path is used.
    - Comfy dtype: STRING
    - Python dtype: str
- file_name
    - The 'file_name' parameter defines the name of the file to be created. It is important for identifying the file and ensuring its uniqueness.
    - Comfy dtype: STRING
    - Python dtype: str
- file_extension
    - The 'file_extension' parameter determines the format of the file to be saved. It can be 'txt' or 'csv', affecting how the text data is structured in the file.
    - Comfy dtype: COMBO['txt', 'csv']
    - Python dtype: str

# Output types
- show_help
    - The output 'show_help' provides a URL link to documentation for further help or guidance on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_SaveTextToFile:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'multiline_text': ('STRING', {'multiline': True, 'default': ''}), 'output_file_path': ('STRING', {'multiline': False, 'default': ''}), 'file_name': ('STRING', {'multiline': False, 'default': ''}), 'file_extension': (['txt', 'csv'],)}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('show_help',)
    OUTPUT_NODE = True
    FUNCTION = 'save_list'
    CATEGORY = icons.get('Comfyroll/Utils/Text')

    def save_list(self, multiline_text, output_file_path, file_name, file_extension):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/List-Nodes#cr-save-text-to-file'
        filepath = output_file_path + '\\' + file_name + '.' + file_extension
        index = 1
        if output_file_path == '' or file_name == '':
            print(f'[Warning] CR Save Text List. No file details found. No file output.')
            return ()
        while os.path.exists(filepath):
            if os.path.exists(filepath):
                filepath = output_file_path + '\\' + file_name + '_' + str(index) + '.' + file_extension
                index = index + 1
            else:
                break
        print(f'[Info] CR Save Text List: Saving to {filepath}')
        if file_extension == 'csv':
            text_list = []
            for i in multiline_text.split('\n'):
                text_list.append(i.strip())
            with open(filepath, 'w', newline='') as csv_file:
                csv_writer = csv.writer(csv_file)
                for line in text_list:
                    csv_writer.writerow([line])
        else:
            with open(filepath, 'w', newline='') as text_file:
                for line in multiline_text:
                    text_file.write(line)
        return (show_help,)
```