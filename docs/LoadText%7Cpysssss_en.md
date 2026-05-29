# Load Text 🐍
## Documentation
- Class name: LoadText|pysssss
- Category: utils
- Output node: False
- Repo Ref: https://github.com/pythongosssss/ComfyUI-Custom-Scripts

The LoadText node loads text content from files in a specified directory. It helps retrieve text data for further processing or display in a workflow.

## Input types
### Required
- root_dir
    - Specify the directory from which files will be loaded. Crucial for locating files and ensuring correct path usage for file access.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- file
    - The specific file to load. This parameter is essential for determining which text file’s content to retrieve and load.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Output types
- string
    - Comfy dtype: STRING
    - Returns the content of the specified text file as a string.
    - Python dtype: str

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
```python
class LoadText(TextFileNode):
    @classmethod
    def IS_CHANGED(self, **kwargs):
        return os.path.getmtime(self.file)

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "root_dir": (list(get_valid_dirs()), {}),
                "file": (["[none]"], {
                    "pysssss.binding": [{
                        "source": "root_dir",
                        "callback": [{
                            "type": "set",
                            "target": "$this.disabled",
                            "value": True
                        }, {
                            "type": "fetch",
                            "url": "/pysssss/text-file/{$source.value}",
                            "then": [{
                                "type": "set",
                                "target": "$this.options.values",
                                "value": "$result"
                            }, {
                                "type": "validate-combo"
                            }, {
                                "type": "set",
                                "target": "$this.disabled",
                                "value": False
                            }]
                        }],
                    }]
                })
            },
        }

    FUNCTION = "load_text"