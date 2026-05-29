# Documentation
- Class name: WAS_Text_File_History
- Category: WAS Suite/History
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Text_File_History node is designed to manage and retrieve historical text file data. It provides functionality to read from a specified file path, process its content, and maintain a history of accessed text files. This node is essential for applications that need to track and review the evolution of text documents over time.

# Input types
## Required
- file
    - The ‘file’ parameter is critical because it specifies the path of the text file from which the node will read data. The node's operation heavily relies on the validity and accessibility of this file path. It directly affects the node's ability to process and return text content.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- dictionary_name
    - The ‘dictionary_name’ parameter allows users to define a custom name for the dictionary that will contain the text file content. This is particularly useful for applications that need to specify naming conventions for data structures.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text
    - The ‘text’ output parameter represents the processed text file content. It is a key element because it contains the actual data that the node has read and prepared for subsequent operations.
    - Comfy dtype: STRING
    - Python dtype: str
- dictionary
    - The ‘dictionary’ output parameter is a dictionary that stores the processed text lines under a specified key, which is typically the filename. It serves as a structured way to access and use the content of the text file in downstream processes.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, List[str]]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Text_File_History:

    def __init__(self):
        self.HDB = WASDatabase(WAS_HISTORY_DATABASE)
        self.conf = getSuiteConfig()

    @classmethod
    def INPUT_TYPES(cls):
        HDB = WASDatabase(WAS_HISTORY_DATABASE)
        conf = getSuiteConfig()
        paths = ['No History']
        if HDB.catExists('History') and HDB.keyExists('History', 'TextFiles'):
            history_paths = HDB.get('History', 'TextFiles')
            if conf.__contains__('history_display_limit'):
                history_paths = history_paths[-conf['history_display_limit']:]
                paths = []
            for path_ in history_paths:
                paths.append(os.path.join('...' + os.sep + os.path.basename(os.path.dirname(path_)), os.path.basename(path_)))
        return {'required': {'file': (paths,), 'dictionary_name': ('STRING', {'default': '[filename]', 'multiline': True})}}
    RETURN_TYPES = (TEXT_TYPE, 'DICT')
    FUNCTION = 'text_file_history'
    CATEGORY = 'WAS Suite/History'

    def text_file_history(self, file=None, dictionary_name='[filename]]'):
        file_path = file.strip()
        filename = os.path.basename(file_path).split('.', 1)[0] if '.' in os.path.basename(file_path) else os.path.basename(file_path)
        if dictionary_name != '[filename]' or dictionary_name not in [' ', '']:
            filename = dictionary_name
        if not os.path.exists(file_path):
            cstr(f'The path `{file_path}` specified cannot be found.').error.print()
            return ('', {filename: []})
        with open(file_path, 'r', encoding='utf-8', newline='\n') as file:
            text = file.read()
        update_history_text_files(file_path)
        import io
        lines = []
        for line in io.StringIO(text):
            if not line.strip().startswith('#'):
                if not line.strip().startswith('\n'):
                    line = line.replace('\n', '')
                lines.append(line.replace('\n', ''))
        dictionary = {filename: lines}
        return ('\n'.join(lines), dictionary)

    @classmethod
    def IS_CHANGED(cls, **kwargs):
        return float('NaN')
```