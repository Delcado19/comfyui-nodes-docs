# Documentation
- Class name: ShowTextForGPT
- Category: ♾️Mixlab/GPT
- Output node: True
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The ShowTextForGPT node processes and outputs text data. It accepts various text inputs and writes them to an output file, ensuring each string is properly handled and stored. This node is essential for tasks requiring text generation and subsequent file management, providing a streamlined workflow for text processing.

# Input types
## Required
- text
- The `text` parameter is critical because it represents the data the node will process. It is the primary input that determines the content and nature of the output. Without this input, the node has no data to process, making it a key component for node execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- output_dir
- The `output_dir` parameter specifies where the processed text will be saved, affecting the organization and accessibility of output files and allowing better management and retrieval of results. This parameter is optional, but when used it enhances the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- ui.text
- The `ui.text` output parameter represents the processed text data. It directly reflects the input, demonstrating the node's ability to effectively process and output text. This output is important for visualizing results in the user interface.
    - Comfy dtype: STRING
    - Python dtype: str
- result
- The `result` output parameter is a collection of the processed text data, indicating successful completion of the node's operation. This output is crucial because it provides evidence of the node's functionality and the effectiveness of text processing.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
```
class ShowTextForGPT:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'forceInput': True, 'dynamicPrompts': False})}, 'optional': {'output_dir': ('STRING', {'forceInput': True, 'default': '', 'multiline': True, 'dynamicPrompts': False})}}
    INPUT_IS_LIST = True
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'run'
    OUTPUT_NODE = True
    OUTPUT_IS_LIST = (True,)
    CATEGORY = '♾️Mixlab/GPT'

    def run(self, text, output_dir=['']):
        texts = []
        for t in text:
            if not isinstance(t, str):
                t = str(t)
            texts.append(t)
        text = texts
        if len(output_dir) == 1 and (output_dir[0] == '' or os.path.dirname(output_dir[0]) == ''):
            t = '\n'.join(text)
            output_dir = [os.path.join(folder_paths.get_temp_directory(), get_unique_hash(t) + '.txt')]
        elif len(output_dir) == 1:
            base = os.path.basename(output_dir[0])
            t = '\n'.join(text)
            if base == '' or os.path.splitext(base)[1] == '':
                base = get_unique_hash(t) + '.txt'
            output_dir = [os.path.join(output_dir[0], base)]
        if len(output_dir) == 1 and len(text) > 1:
            output_dir = [output_dir[0] for _ in range(len(text))]
        for i in range(len(text)):
            o_fp = output_dir[i]
            dirp = os.path.dirname(o_fp)
            if dirp == '':
                dirp = folder_paths.get_temp_directory()
                o_fp = os.path.join(folder_paths.get_temp_directory(), o_fp)
            if not os.path.exists(dirp):
                os.mkdir(dirp)
            if not os.path.splitext(o_fp)[1].lower() == '.txt':
                o_fp = o_fp + '.txt'
            t = text[i]
            with open(o_fp, 'w') as file:
                file.write(t)
        return {'ui': {'text': text}, 'result': (text,)}
```