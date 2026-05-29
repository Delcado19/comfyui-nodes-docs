
# Documentation
- Class name: LoadPromptsFromDir __Inspire
- Category: InspirePack/Prompt
- Output node: False
- Repo Ref: https://github.com/shiimizu/ComfyUI_smZNodes

LoadPromptsFromDir node aims to load prompt data from a specified directory. It scans text files in the directory, extracts prompts matching a predefined format, and organizes them into a structured format for further processing. This node simplifies retrieving and organizing prompt data, making it readily available for creative or analytical applications within the Inspire ecosystem.

# Input types
## Required
- prompt_dir
    - Specify the directory path to load prompts from. This path locates and reads text files containing prompt data, determining the source of prompts to process within the node's operation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- zipped_prompt
    - Returns a list of tuples, each containing a prompt's positive and negative parts along with the file name from which the prompt was extracted. This structured output facilitates easy access and manipulation of loaded prompt data by subsequent nodes or processes.
    - Comfy dtype: ZIPPED_PROMPT
    - Python dtype: List[Tuple[str, str, str]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LoadPromptsFromDir:
    @classmethod
    def INPUT_TYPES(cls):
        global prompts_path
        try:
            prompt_dirs = [d for d in os.listdir(prompts_path) if os.path.isdir(os.path.join(prompts_path, d))]
        except Exception:
            prompt_dirs = []

        return {"required": {"prompt_dir": (prompt_dirs,)}}

    RETURN_TYPES = ("ZIPPED_PROMPT",)
    OUTPUT_IS_LIST = (True,)

    FUNCTION = "doit"

    CATEGORY = "InspirePack/Prompt"

    def doit(self, prompt_dir):
        global prompts_path
        prompt_dir = os.path.join(prompts_path, prompt_dir)
        files = [f for f in os.listdir(prompt_dir) if f.endswith(".txt")]
        files.sort()

        prompts = []
        for file_name in files:
            print(f"file_name: {file_name}")
            try:
                with open(os.path.join(prompt_dir, file_name), "r", encoding="utf-8") as file:
                    prompt_data = file.read()
                    prompt_list = re.split(r'\n\s*-+\s*\n', prompt_data)

                    for prompt in prompt_list:
                        pattern = r"positive:(.*?)(?:\n*|$)negative:(.*)"
                        matches = re.search(pattern, prompt, re.DOTALL)

                        if matches:
                            positive_text = matches.group(1).strip()
                            negative_text = matches.group(2).strip()
                            result_tuple = (positive_text, negative_text, file_name)
                            prompts.append(result_tuple)
                        else:
                            print(f"[WARN] LoadPromptsFromDir: invalid prompt format in '{file_name}'")
            except Exception as e:
                print(f"[ERROR] LoadPromptsFromDir: an error occurred while processing '{file_name}': {str(e)}")

        return (prompts, )

```
