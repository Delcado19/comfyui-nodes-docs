# Documentation
- Class name: WAS_Text_Save
- Category: WAS Suite/IO
- Output node: True
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Text_Save node manages the process of saving text data to a file. It handles directory creation, checks for empty text, and generates filenames with appropriate padding and separators. The node ensures saved files have unique names and are stored at the specified path.

# Input types
## Required
- text
    - The text parameter represents the text content intended to be saved to a file. It is the foundational part of the node's operation, as it is the primary data being managed.
    - Comfy dtype: STRING
    - Python dtype: str
- path
    - The path parameter specifies the directory where the text file will be saved. It is critical for determining the file's location in the file system.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- filename_prefix
    - The filename prefix parameter sets the starting characters of the filename. It helps with the uniqueness and organization of saved files.
    - Comfy dtype: STRING
    - Python dtype: str
- filename_delimiter
    - The filename separator parameter defines the character used to separate the filename prefix and the numeric portion. It helps distinguish the different parts of the filename.
    - Comfy dtype: STRING
    - Python dtype: str
- filename_number_padding
    - The filename number padding parameter determines the number of digits used for the numeric portion of the filename. It ensures consistent formatting of filenames.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- text
    - The text output parameter returns the text saved to the file, providing confirmation of the data that was written.
    - Comfy dtype: STRING
    - Python dtype: str
- ui
    - The ui output parameter is used to provide user interface feedback. It typically contains a string representation of the saved text.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Dict[str, str]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Text_Save:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'text': ('STRING', {'forceInput': True}), 'path': ('STRING', {'default': './ComfyUI/output/[time(%Y-%m-%d)]', 'multiline': False}), 'filename_prefix': ('STRING', {'default': 'ComfyUI'}), 'filename_delimiter': ('STRING', {'default': '_'}), 'filename_number_padding': ('INT', {'default': 4, 'min': 2, 'max': 9, 'step': 1})}}
    OUTPUT_NODE = True
    RETURN_TYPES = ()
    FUNCTION = 'save_text_file'
    CATEGORY = 'WAS Suite/IO'

    def save_text_file(self, text, path, filename_prefix='ComfyUI', filename_delimiter='_', filename_number_padding=4):
        tokens = TextTokens()
        path = tokens.parseTokens(path)
        filename_prefix = tokens.parseTokens(filename_prefix)
        if not os.path.exists(path):
            cstr(f"The path `{path}` doesn't exist! Creating it...").warning.print()
            try:
                os.makedirs(path, exist_ok=True)
            except OSError as e:
                cstr(f'The path `{path}` could not be created! Is there write access?\n{e}').error.print()
        if text.strip() == '':
            cstr(f'There is no text specified to save! Text is empty.').error.print()
        delimiter = filename_delimiter
        number_padding = int(filename_number_padding)
        file_extension = '.txt'
        filename = self.generate_filename(path, filename_prefix, delimiter, number_padding, file_extension)
        file_path = os.path.join(path, filename)
        self.writeTextFile(file_path, text)
        update_history_text_files(file_path)
        return (text, {'ui': {'string': text}})

    def generate_filename(self, path, prefix, delimiter, number_padding, extension):
        pattern = f'{re.escape(prefix)}{re.escape(delimiter)}(\\d{{{number_padding}}})'
        existing_counters = [int(re.search(pattern, filename).group(1)) for filename in os.listdir(path) if re.match(pattern, filename)]
        existing_counters.sort(reverse=True)
        if existing_counters:
            counter = existing_counters[0] + 1
        else:
            counter = 1
        filename = f'{prefix}{delimiter}{counter:0{number_padding}}{extension}'
        while os.path.exists(os.path.join(path, filename)):
            counter += 1
            filename = f'{prefix}{delimiter}{counter:0{number_padding}}{extension}'
        return filename

    def writeTextFile(self, file, content):
        try:
            with open(file, 'w', encoding='utf-8', newline='\n') as f:
                f.write(content)
        except OSError:
            cstr(f'Unable to save file `{file}`').error.print()
```