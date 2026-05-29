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
[View source repository on GitHub](https://github.com/pythongosssss/ComfyUI-Custom-Scripts)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
