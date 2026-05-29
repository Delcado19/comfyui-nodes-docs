# Documentation
- Class name: LoadTextFile
- Category: 😺dzNodes/WordCloud
- Output node: True
- Repo Ref: https://github.com/chflame163/ComfyUI_WordCloud.git

The LoadTextFile node is designed to read and retrieve the contents of a specified text file. It operates by opening the file at the given path with UTF-8 encoding, ensuring compatibility with various character sets. The primary function of this node is to provide text data for further processing or analysis within a workflow.

# Input types
## Required
- path
    - The 'path' parameter is critical to the node's operation, as it specifies the location of the text file to be loaded. It directly affects the node's ability to access and read the file's contents, which is essential for subsequent tasks in the workflow.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- Text
    - The 'Text' output parameter represents the contents of the loaded text file. It is important because it is the primary output of the node, providing text data for downstream processing or analysis.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class LoadTextFile:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'path': ('STRING', {'default': 'c:\\text.txt'})}, 'optional': {}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('Text',)
    FUNCTION = 'load_text_file'
    OUTPUT_NODE = True
    CATEGORY = '😺dzNodes/WordCloud'

    def load_text_file(self, path):
        text_content = ''
        try:
            with open(os.path.normpath(path), 'r', encoding='utf-8') as f:
                text_content = ''.join((str(l) for l in f.read()))
            print('# 😺dzNodes: Load Text File -> ' + path + ' success.')
        except Exception as e:
            print('# 😺dzNodes: Load Text File -> ERROR, ' + path + ', ' + repr(e))
        return {'ui': {'text': text_content}, 'result': (text_content,)}
```