
# Documentation
- Class name: Get Models
- Category: Bmad/dump
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Get Models node retrieves and organizes model-related files from a specified directory. It supports multiple model types and configurations, allowing users to export a comprehensive list of models or specific categories as JSON files for easy access and management.

# Input types
## Required
- dump
    - Specify the model category to retrieve. This can be a specific model type such as "clip" or "vae", or "all models" to retrieve all available models. This choice determines the scope of the export operation, tailoring the output to user requirements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
The node has no output type.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class GetModels:
    dump_option = ['all models',
                   'checkpoints',
                   'clip',
                   'clip_vision',
                   'configs',
                   'controlnet',
                   'diffusers',
                   'embeddings',
                   'gligen',
                   'hypernetworks',
                   'loras',
                   'style_models',
                   'upscale_models',
                   'vae'
                   ]

    def __init__(self):
        self.output_dir = folder_paths.get_output_directory()
        self.type = "output"

    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "dump": (s.dump_option, {"default": "all models"})
        }
        }

    RETURN_TYPES = ()
    FUNCTION = "dump_it"
    CATEGORY = "Bmad/dump"
    OUTPUT_NODE = True

    def dump_it(self, dump):
        dump_data = {}

        if dump == 'all models':
            for item in self.dump_option[1:]:
                dump_data[item] = folder_paths.get_filename_list(item)
        else:
            dump_data['list'] = folder_paths.get_filename_list(dump)

        file = f"{dump}.json"
        file = os.path.join(self.output_dir, file)
        with open(file, 'w') as f:
            json.dump(dump_data, f, indent=1)

        return ()

```
