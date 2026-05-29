
# Documentation
- Class name: Get Prompt
- Category: Bmad/dump
- Output node: True
- Repo Ref: https://github.com/bmad4ever/ComfyUI-Bmad-Custom-Nodes

This node processes and modifies a given prompt structure for API interactions by removing unnecessary elements and adjusting it according to the specified output mode (e.g., print to console or save to file). It plays a critical role in preparing prompts for execution or review, ensuring only relevant data is retained and presented in the appropriate format.

# Input types
## Required
- api_prompt
    - Specifies the output mode for the processed prompt, such as printing to console or saving to a file. This choice determines how the final prompt structure is handled, affecting the node's execution flow and the presentation of prompt data.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]

# Output types
The node has no output type.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class GetPrompt:
    prompt_mode = ["print to console", "save to file"]

    def __init__(self):
        self.output_dir = folder_paths.get_output_directory()
        self.type = "output"

    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "api_prompt": (s.prompt_mode, {"default": "print to console"})
        },
            "hidden": {"prompt": "PROMPT", "unique_id": "UNIQUE_ID"},
        }

    RETURN_TYPES = ()
    FUNCTION = "getPrompt"
    CATEGORY = "Bmad/dump"
    OUTPUT_NODE = True

    def getPrompt(self, api_prompt, prompt, unique_id):
        # changing the original will mess the prompt execution, therefore make a copy
        prompt = copy.deepcopy(prompt)

        # remove this node from the prompt
        this_node = prompt[unique_id]
        del prompt[unique_id]

        # remove widgtes inputs from RequestInputs, only "values" is needed.
        for key in prompt:
            if prompt[key]["class_type"] == "RequestInputs":
                inputs = prompt[key]["inputs"]
                for attribute in list(inputs.keys()):
                    if attribute != "values":
                        del inputs[attribute]
                break  # supposes only 1 RequestInputs node exists

        prompt = {"prompt": prompt}

        # print to console or file
        if api_prompt == "print to console":
            print(json.dumps(prompt))
        elif api_prompt == "save to file":
            # TODO
            # avoid collisions (maybe just name it w/ date/time prefix?)
            # instead of owerriding the file
            file = "prompt.json"
            file = os.path.join(self.output_dir, file)
            with open(file, 'w') as f:
                json.dump(prompt, f, indent=1)
        else:
            pass

        return ()

```
