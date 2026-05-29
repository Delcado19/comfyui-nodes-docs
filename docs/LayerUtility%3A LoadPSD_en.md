# Documentation
- Class name: LoadPSD
- Category: 😺dzNodes/LayerUtility/SystemIO
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Load PSD format file and export layers. Note that this node requires the psd_tools dependency package. If you encounter ModuleNotFoundError: No module named 'docopt' error when installing psd_tool, please download [docopt's whl](https://www.piwheels.org/project/docopt/) and install it manually.

# Input types

## Required

- image
    - The *.psd files under ComfyUI/input are listed here. Previously loaded psd images can be selected from here.
    - Comfy dtype: FILE
    - Supports uploading PSD files.

- file_path
    - The full path and file name of the psd file.
    - Comfy dtype: STRING
    - Python dtype: str

- include_hidden_layer
    - Whether to include hidden layers.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- find_layer_by
    - Method to find layers, you can choose to search by layer index number or layer name. Layer groups are treated as a single layer.
    - Optional values: ["layer_index", "layer_name"]
    - Comfy dtype: STRING
    - Python dtype: str

- layer_index
    - Layer index number, 0 is the bottom layer, increasing sequentially. If include_hidden_layer is set to false, hidden layers are not counted. Set to -1 to output the topmost layer.
    - Comfy dtype: INT
    - Python dtype: int

- layer_name
    - Layer name. Note that case and punctuation must match exactly.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types

- flat_image
    - Flat image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- layer_image
    - Layer image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- all_layers
    - All layers.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
