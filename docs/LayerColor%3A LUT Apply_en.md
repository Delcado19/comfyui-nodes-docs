# Documentation
- Class name: ColorCorrectLevels
- Category: 😺dzNodes/LayerColor
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Apply LUT to image. Only .cube format LUT files are supported.

# Input types
## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- LUT
    - This lists the available .cube files in the LUT folder. The selected LUT file will be applied to the image. *The LUT folder is defined in resource_dir.ini, located in the plugin root directory. The default filename is resource_dir.ini.example. On first use, rename the file extension to .ini. Open it with a text editor, find the line starting with "LUT_dir=", and edit the path after "=" to your custom folder path. All .cube files in this folder will be collected and displayed in the node list during ComfyUI initialization. If the folder specified in the ini is invalid, the plugin's built-in LUT folder will be used instead.
    - Comfy dtype: LUT_LIST
    - Python dtype: str

- color_space
    - For regular images, select linear. For images in log color space, select log.
    - Comfy dtype: str
    - Python dtype: str
    - Options: ['linear', 'log']

# Output types

- image
    - Output image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
