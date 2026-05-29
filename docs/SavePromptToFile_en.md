# Documentation
- Class name: SavePromptToFile
- Category: OneButtonPrompt
- Output node: True
- Repo Ref: https://github.com/AIrjen/OneButtonPrompt

This node facilitates saving prompts to files, ensuring information is stored in an organized and accessible manner. It enhances workflow by automating file naming and storage processes, which is essential for maintaining clear records of prompts and their associated data.

# Input types
## Required
- filename_prefix
    - The filename prefix is crucial for generating unique and identifiable file names, aiding in efficient organization and referencing of saved prompts.
    - Comfy dtype: STRING
    - Python dtype: str
- positive_prompt
    - The positive prompt is a key input that sets the tone and content of the saved prompt, influencing the overall context and utility of the stored data.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - The negative prompt serves as a counterpoint to the positive prompt, providing a contrasting perspective, which is valuable for understanding the nuances of the prompt.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- prompt_g
    - Additional prompts can provide supplementary information or context, enriching the saved data and offering a more comprehensive understanding of the prompt's scope.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt_l
    - Longer prompts can provide extended details or examples, which may enhance the depth and applicability of the saved prompt.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- status
    - The status output confirms the successful execution of the save operation, ensuring the prompt has been correctly saved and stored.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SavePromptToFile:

    def __init__(self):
        self.output_dir = folder_paths.get_output_directory()
        self.type = 'output'
        self.prefix_append = ''

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'filename_prefix': ('STRING', {'default': 'Prompt'}), 'positive_prompt': ('STRING', {'multiline': True}), 'negative_prompt': ('STRING', {'multiline': True})}, 'optional': {'prompt_g': ('STRING', {'multiline': True}), 'prompt_l': ('STRING', {'multiline': True})}}
    OUTPUT_NODE = True
    RETURN_TYPES = ()
    FUNCTION = 'saveprompttofile'
    CATEGORY = 'OneButtonPrompt'

    def saveprompttofile(self, positive_prompt, prompt_g, prompt_l, negative_prompt, filename_prefix):
        filename_prefix += self.prefix_append
        pattern = '%date:([^\\%]+)%'
        match = re.search(pattern, filename_prefix)
        if match:
            date_format = match.group(1)
            current_date = datetime.now()
            date_format = date_format.replace('M', 'X')
            date_format = date_format.replace('m', 'Z')
            if platform.system() == 'Windows':
                date_format = date_format.replace('yyyy', '%Y')
                date_format = date_format.replace('yy', '%#y')
                date_format = date_format.replace('X', '%#m')
                date_format = date_format.replace('d', '%#d')
                date_format = date_format.replace('h', '%#H')
                date_format = date_format.replace('Z', '%#M')
                date_format = date_format.replace('s', '%#S')
            else:
                date_format = date_format.replace('yyyy', '%Y')
                date_format = date_format.replace('yy', '%-y')
                date_format = date_format.replace('X', '%-m')
                date_format = date_format.replace('d', '%-d')
                date_format = date_format.replace('h', '%-H')
                date_format = date_format.replace('Z', '%-M')
                date_format = date_format.replace('s', '%-S')
            formatted_date = current_date.strftime(date_format)
            filename_prefix = re.sub(pattern, formatted_date, filename_prefix)
        (full_output_folder, filename_short, counter, subfolder, filename_prefix) = folder_paths.get_save_image_path(filename_prefix, self.output_dir)
        if positive_prompt.find('of a ') != -1:
            start_index = positive_prompt.find('of a ') + len('of a ')
            end_index = positive_prompt.find(',', start_index)
            if end_index == -1:
                end_index = len(positive_prompt)
        else:
            start_index = 0
            end_index = 128
        filename = positive_prompt[start_index:end_index]
        filename = filename.replace('"', '')
        filename = filename.replace('[', '')
        filename = filename.replace('|', '')
        filename = filename.replace(']', '')
        filename = filename.replace('<', '')
        filename = filename.replace('>', '')
        filename = filename.replace(':', '_')
        filename = filename.replace('.', '')
        filename = re.sub('[0-9]+', '', filename)
        safe_characters = set('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.')
        filename = re.sub('[^{}]+'.format(re.escape(''.join(safe_characters))), '', filename)
        if filename == '':
            filename = str(uuid.uuid4())
        if filename_prefix == '':
            now = datetime.now()
            filenamecomplete = now.strftime('%Y%m%d%H%M%S') + '_' + filename.replace(' ', '_').strip() + '.txt'
        else:
            formatted_counter = str(counter + 1).zfill(5)
            filenamecomplete = filename_short + '_' + formatted_counter + '_' + filename.replace(' ', '_').strip() + '.txt'
        directoryandfilename = os.path.abspath(os.path.join(full_output_folder, filenamecomplete))
        with open(directoryandfilename, 'w', encoding='utf-8') as file:
            file.write('prompt: ' + positive_prompt + '\n')
            if len(prompt_g) > 0:
                file.write('prompt_g: ' + prompt_g + '\n')
            if len(prompt_l) > 0:
                file.write('prompt_l: ' + prompt_l + '\n')
            file.write('negative prompt: ' + negative_prompt + '\n')
        return 'done'
```