# Save Text 🐍
## Documentation
- Class name: SaveText|pysssss
- Category: utils
- Output node: False
- Repo Ref: https://github.com/pythongosssss/ComfyUI-Custom-Scripts

The SaveText node writes text to a file, with options to append to an existing file or create a new one. It abstracts the complexity of file handling, ensuring text data is saved accurately according to the specified parameters.

## Input types
### Required
- root_dir
    - Specifies the root directory where the file will be saved. Essential for determining the file's save location and ensuring the file path is constructed correctly.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- file
    - The name of the file to save text to. This parameter is critical for determining the specific file to write to or create.
    - Comfy dtype: STRING
    - Python dtype: str
- append
    - Controls whether the text should be appended to an existing file or a new file should be created. It affects how the text is saved, either by adding to existing content or starting fresh.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- insert
    - Determines whether a newline should be inserted before appending text to an existing file. It affects the formatting of the appended text.
    - Comfy dtype: BOOLEAN
    - Python dtype: str
- text
    - The text content to write to the file. This parameter is core to the node's functionality, as it specifies the actual data to be saved.
    - Comfy dtype: STRING
    - Python dtype: str

## Output types
- string
    - Comfy dtype: STRING
    - Returns the text written to the file, providing feedback that the operation was successful.
    - Python dtype: str

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
```python
class SaveText(TextFileNode):
    @classmethod
    def IS_CHANGED(self, **kwargs):
        return float("nan")

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "root_dir": (list(get_valid_dirs()), {}),
                "file": ("STRING", {"default": "file.txt"}),
                "append": (["append", "overwrite", "new only"], {}),
                "insert": ("BOOLEAN", {
                    "default": True, "label_on": "new line", "label_off": "none",
                    "pysssss.binding": [{
                        "source": "append",
                        "callback": [{
                            "type": "if",
                            "condition": [{
                                "left": "$source.value",
                                "op": "eq",
                                "right": '"append"'
                            }],
                            "true": [{
                                "type": "set",
                                "target": "$this.disabled",
                                "value": False
                            }],
                            "false": [{
                                "type": "set",
                                "target": "$this.disabled",
                                "value": True
                            }],
                        }]
                    }]
                }),
                "text": ("STRING", {"forceInput": True, "multiline": True})
            },
        }

    FUNCTION = "write_text"

    def write_text(self, **kwargs):
        self.file = get_file(kwargs["root_dir"], kwargs["file"])
        if kwargs["append"] == "new only" and os.path.exists(self.file):
            raise FileExistsError(
                self.file + " already exists and 'new only' is selected.")
        with open(self.file, "a+" if kwargs["append"] == "append" else "w") as f:
            is_append = f.tell() != 0
            if is_append and kwargs["insert"]:
                f.write("\n")
            f.write(kwargs["text"])

        return super().load_text(**kwargs)