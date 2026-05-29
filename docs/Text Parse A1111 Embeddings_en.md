# Documentation
- Class name: WAS_Text_Parse_Embeddings_By_Name
- Category: WAS Suite/Text/Parse
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

`text_parse_embeddings` method parses and replaces text with corresponding embeddings. It identifies specific patterns in the input text that match embedding file names and replaces them with a predefined format containing the word 'embedding' followed by the file name. This process is essential for preparing text data for further processing or analysis using embedding-based models.

# Input types
## Required
- text
- The `text` parameter is crucial because it provides the raw text data that the node will process. It is the input for the node to perform pattern matching and replacement to embed appropriate references to embedding files.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- parsed_text
- The `parsed_text` output contains the modified text with properly formatted embedding references. It is the result of the node's operation and is important for any subsequent steps that require embedding data.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Text_Parse_Embeddings_By_Name:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'text': (TEXT_TYPE, {'forceInput': True if TEXT_TYPE == 'STRING' else False})}}
    RETURN_TYPES = (TEXT_TYPE,)
    FUNCTION = 'text_parse_embeddings'
    CATEGORY = 'WAS Suite/Text/Parse'

    def text_parse_embeddings(self, text):
        return (self.convert_a1111_embeddings(text),)

    def convert_a1111_embeddings(self, text):
        for embeddings_path in comfy_paths.folder_names_and_paths['embeddings'][0]:
            for filename in os.listdir(embeddings_path):
                (basename, ext) = os.path.splitext(filename)
                pattern = re.compile('\\b{}\\b'.format(re.escape(basename)))
                replacement = 'embedding:{}'.format(basename)
                text = re.sub(pattern, replacement, text)
        return text
```