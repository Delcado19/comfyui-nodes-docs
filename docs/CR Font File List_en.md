# Documentation
- Class name: CR_FontFileList
- Category: Comfyroll/List/IO
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_FontFileList is a node for generating a list of font files from a specified directory. It can retrieve fonts from the system font directory, a Comfyroll-specific directory, or a user-defined folder. The node handles large numbers of font files and provides options to specify a starting index and maximum rows to list, ensuring efficient data processing and retrieval.

# Input types
## Required
- source_folder
    - The source_folder parameter determines which directory to list font files from. It can be set to 'system' to list fonts from the system font directory, 'Comfyroll' to list fonts from the Comfyroll directory, or 'from folder' to specify a custom folder path.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- start_index
    - The start_index parameter specifies the starting point in the font file list. It allows selecting a subset of fonts from the beginning of the list, which is especially useful for large font collections.
    - Comfy dtype: INT
    - Python dtype: int
- max_rows
    - The max_rows parameter sets the maximum number of font files to list. It is a critical setting for controlling the output list size and managing memory usage effectively.
    - Comfy dtype: INT
    - Python dtype: int
- folder_path
    - The folder_path parameter is an optional input that allows users to specify a custom directory path when source_folder is set to 'from folder'. It enables the node to list font files from a user-defined location.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- LIST
    - The LIST output provides a list of font filenames selected from the specified directory based on the input parameters. It is a key output for further processing or display within the application.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- show_help
    - The show_help output provides a URL link to documentation for additional guidance on using the node. It is especially useful for users seeking more information or troubleshooting.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_FontFileList:

    @classmethod
    def INPUT_TYPES(s):
        comfyroll_font_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))), 'fonts')
        comfyroll_file_list = [f for f in os.listdir(comfyroll_font_dir) if os.path.isfile(os.path.join(comfyroll_font_dir, f)) and f.lower().endswith('.ttf')]
        sources = ['system', 'Comfyroll', 'from folder']
        return {'required': {'source_folder': (sources,), 'start_index': ('INT', {'default': 0, 'min': 0, 'max': 9999}), 'max_rows': ('INT', {'default': 1000, 'min': 1, 'max': 9999})}, 'optional': {'folder_path': ('STRING', {'default': 'C:\\Windows\\Fonts', 'multiline': False})}}
    RETURN_TYPES = (any_type, 'STRING')
    RETURN_NAMES = ('LIST', 'show_help')
    OUTPUT_IS_LIST = (True, False)
    FUNCTION = 'make_list'
    CATEGORY = icons.get('Comfyroll/List/IO')

    def make_list(self, source_folder, start_index, max_rows, folder_path='C:\\Windows\\Fonts'):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/List-Nodes#cr-font-file-list'
        if source_folder == 'system':
            system_root = os.environ.get('SystemRoot')
            system_font_dir = os.path.join(system_root, 'Fonts')
            file_list = [f for f in os.listdir(system_font_dir) if os.path.isfile(os.path.join(system_font_dir, f)) and f.lower().endswith('.ttf')]
        elif source_folder == 'Comfyroll':
            comfyroll_font_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))), 'fonts')
            file_list = [f for f in os.listdir(comfyroll_font_dir) if os.path.isfile(os.path.join(comfyroll_font_dir, f)) and f.lower().endswith('.ttf')]
        elif source_folder == 'from folder':
            if folder_path != '' and folder_path is not None:
                if not os.path.exists(folder_path):
                    print(f'[Warning] CR Font File List: The folder_path `{folder_path}` does not exist')
                    return None
                font_dir = folder_path
                file_list = [f for f in os.listdir(font_dir) if os.path.isfile(os.path.join(font_dir, f)) and f.lower().endswith('.ttf')]
            else:
                print(f'[Warning] CR Font File List: No folder_path entered')
                return None
        else:
            pass
        start_index = max(0, min(start_index, len(file_list) - 1))
        end_index = min(start_index + max_rows, len(file_list))
        selected_files = file_list[start_index:end_index]
        return (selected_files, show_help)
```