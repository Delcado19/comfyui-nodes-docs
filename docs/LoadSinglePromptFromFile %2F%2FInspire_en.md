# Documentation
- Class name: LoadSinglePromptFromFile
- Category: InspirePack/Prompt
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node is designed to extract and process text prompts from a specified file, enabling users to utilize predefined prompts in a structured way within the system.

# Input types
## Required
- prompt_file
    - The prompt_file parameter is crucial as it identifies the specific text file from which prompts will be loaded. It influences the node's operation by determining the source of the prompts.
    - Comfy dtype: COMBO[prompt_files]
    - Python dtype: str
## Optional
- index
    - The index parameter is important because it specifies the position of the desired prompt in the file. It affects the node's execution by selecting a specific prompt for processing.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- zipped_prompt
    - The output provides a tuple containing the positive and negative aspects of the prompt, as well as the filename, which is crucial for further analysis and application within the system.
    - Comfy dtype: ZIPPED_PROMPT
    - Python dtype: Tuple[str, str, str]

# Usage tips
- Infra type: CPU

# Source code
```
class LoadSinglePromptFromFile:

    @classmethod
    def INPUT_TYPES(cls):
        global prompts_path
        try:
            prompt_files = []
            for (root, dirs, files) in os.walk(prompts_path):
                for file in files:
                    if file.endswith('.txt'):
                        file_path = os.path.join(root, file)
                        rel_path = os.path.relpath(file_path, prompts_path)
                        prompt_files.append(rel_path)
        except Exception:
            prompt_files = []
        return {'required': {'prompt_file': (prompt_files,), 'index': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('ZIPPED_PROMPT',)
    OUTPUT_IS_LIST = (True,)
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/Prompt'

    def doit(self, prompt_file, index):
        prompt_path = os.path.join(prompts_path, prompt_file)
        prompts = []
        try:
            with open(prompt_path, 'r', encoding='utf-8') as file:
                prompt_data = file.read()
                prompt_list = re.split('\\n\\s*-+\\s*\\n', prompt_data)
                try:
                    prompt = prompt_list[index]
                except Exception:
                    prompt = prompt_list[-1]
                pattern = 'positive:(.*?)(?:\\n*|$)negative:(.*)'
                matches = re.search(pattern, prompt, re.DOTALL)
                if matches:
                    positive_text = matches.group(1).strip()
                    negative_text = matches.group(2).strip()
                    result_tuple = (positive_text, negative_text, prompt_file)
                    prompts.append(result_tuple)
                else:
                    print(f"[WARN] LoadPromptsFromFile: invalid prompt format in '{prompt_file}'")
        except Exception as e:
            print(f"[ERROR] LoadPromptsFromFile: an error occurred while processing '{prompt_file}': {str(e)}")
        return (prompts,)
```