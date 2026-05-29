
# Documentation
- Class name: LoadSinglePromptFromFile __Inspire
- Category: InspirePack/Prompt
- Output node: False

This node loads specific prompt text from a file, allowing targeted retrieval of prompts by index. It helps extract creative or guiding content from structured text files, enhancing flexibility and specificity in content generation workflows.

# Input types
## Required
- prompt_file
- Specify the file path from which to load prompt text, serving as a direct reference to the desired content source.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- index
- Identify the specific prompt to load from the file, enabling selective content retrieval.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- zipped_prompt
- Return a list of tuples, each containing the positive and negative text extracted from the specified prompt, along with the filename. This structured output, called "zipped_prompt", is available for further processing.
    - Comfy dtype: ZIPPED_PROMPT
    - Python dtype: List[Tuple[str, str, str]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LoadSinglePromptFromFile:
    @classmethod
    def INPUT_TYPES(cls):
        global prompts_path
        try:
            prompt_files = []
            for root, dirs, files in os.walk(prompts_path):
                for file in files:
                    if file.endswith(".txt"):
                        file_path = os.path.join(root, file)
                        rel_path = os.path.relpath(file_path, prompts_path)
                        prompt_files.append(rel_path)
        except Exception:
            prompt_files = []

        return {"required": {
            "prompt_file": (prompt_files,),
            "index": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
            }
        }

    RETURN_TYPES = ("ZIPPED_PROMPT",)
    OUTPUT_IS_LIST = (True,)

    FUNCTION = "doit"

    CATEGORY = "InspirePack/Prompt"

    def doit(self, prompt_file, index):
        prompt_path = os.path.join(prompts_path, prompt_file)

        prompts = []
        try:
            with open(prompt_path, "r", encoding="utf-8") as file:
                prompt_data = file.read()
                prompt_list = re.split(r'\n\s*-+\s*\n', prompt_data)
                try:
                    prompt = prompt_list[index]
                except Exception:
                    prompt = prompt_list[-1]

                pattern = r"positive:(.*?)(?:\n*|$)negative:(.*)"
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

        return (prompts, )

```
