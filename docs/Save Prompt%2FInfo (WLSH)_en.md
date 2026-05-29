# Documentation
- Class name: WLSH_Save_Prompt_File_Info
- Category: WLSH Nodes/IO
- Output node: True
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node is designed to save text information about prompt experiments, ensuring that details such as positive and negative prompts, model names, and other relevant metadata are securely stored and organized. It facilitates the preservation of valuable data for future reference and analysis.

# Input types
## Required
- filename
    - The filename parameter is critical because it defines the basic name of the file where prompt information will be saved. This is essential for identifying and organizing the stored data.
    - Comfy dtype: STRING
    - Python dtype: str
- positive
    - The positive parameter contains the positive prompt text used in the experiment. It is important because it sets the context for the data to be saved and is part of the record that will be stored in the file.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The negative parameter holds the negative prompt text, which is also part of the experimental data. This is necessary for the integrity of the saved information and for future analysis.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - The seed parameter is used to ensure the reproducibility of the experiment. It is an important part of the record because it allows the experiment to be reproduced under the same conditions.
    - Comfy dtype: INT
    - Python dtype: int
- modelname
    - The model name parameter indicates the name of the model used in the experiment. This is critical for tracking the data source and for future reference.
    - Comfy dtype: STRING
    - Python dtype: str
- counter
    - The counter parameter is an integer that can be used to distinguish between multiple saves or track the number of experiments conducted. It helps with the organization and indexing of saved files.
    - Comfy dtype: INT
    - Python dtype: int
- time_format
    - The time format parameter determines the format of the timestamp in the filename. It is important for maintaining a consistent and readable structure of saved files.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- path
    - The path parameter specifies the directory where the file will be saved. It plays an important role in organizing files within the file system and ensuring data is stored in the desired location.
    - Comfy dtype: STRING
    - Python dtype: str
- info
    - The information parameter contains additional metadata about the experiment, such as configuration settings and other details. It enriches the saved data with more context and aids in comprehensive analysis.
    - Comfy dtype: INFO
    - Python dtype: Dict[str, Any]

# Output types
- text_data
    - The text data represents the information compiled from the input, including positive and negative prompts, model names, and other metadata. It is the content that will be saved in the text file.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WLSH_Save_Prompt_File_Info:

    def __init__(self):
        self.output_dir = folder_paths.output_directory

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'filename': ('STRING', {'default': 'info', 'multiline': False}), 'path': ('STRING', {'default': '', 'multiline': False}), 'positive': ('STRING', {'default': '', 'multiline': True, 'forceInput': True})}, 'optional': {'negative': ('STRING', {'default': '', 'multiline': True, 'forceInput': True}), 'modelname': ('STRING', {'default': '', 'multiline': False, 'forceInput': True}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615, 'forceInput': True}), 'counter': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'time_format': ('STRING', {'default': '%Y-%m-%d-%H%M%S', 'multiline': False}), 'info': ('INFO',)}}
    OUTPUT_NODE = True
    RETURN_TYPES = ()
    FUNCTION = 'save_text_file'
    CATEGORY = 'WLSH Nodes/IO'

    def save_text_file(self, positive='', negative='', seed=-1, modelname='unknown', info=None, path='', counter=0, time_format='%Y-%m-%d-%H%M%S', filename=''):
        output_path = os.path.join(self.output_dir, path)
        if output_path.strip() != '':
            if not os.path.exists(output_path.strip()):
                print(f"The path `{output_path.strip()}` specified doesn't exist! Creating directory.")
                os.makedirs(output_path, exist_ok=True)
        text_data = make_comment(positive, negative, modelname, seed, info)
        filename = make_filename(filename, seed, modelname, counter, time_format)
        self.writeTextFile(os.path.join(output_path, filename + '.txt'), text_data)
        return (text_data,)

    def writeTextFile(self, file, content):
        try:
            with open(file, 'w') as f:
                f.write(content)
        except OSError:
            print(f'Error: Unable to save file `{file}`')
```