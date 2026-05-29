# Documentation
- Class name: LightLeak
- Category: 😺dzNodes/LayerFilter
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Simulate film light leak effect. Please download light_leak.pkl (Baidu Netdisk) or [light_leak.pkl(Google Drive)(https://drive.google.com/file/d/1DcH2Zkyj7W3OiAeeGpJk1eaZpdJwdCL-/view?usp=sharing) and copy the file to the ComfyUI/models/layerstyle folder.

# Input types

## Required

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- light
    - Provides 32 kinds of light spots. random is random selection.
    - Optional values: ['random', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14',
             '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']
    - Comfy dtype: STRING
    - Python dtype: str

- corner
    - The corner where the light spot appears, with four options: top-left, top-right, bottom-left, and bottom-right.
    - Optional values: ['left_top', 'right_top', 'left_bottom', 'right_bottom']
    - Comfy dtype: STRING
    - Python dtype: str

- hue
    - Hue of the light spot.
    - Comfy dtype: INT
    - Python dtype: int

- saturation
    - Saturation of the light spot.
    - Comfy dtype: INT
    - Python dtype: int

- opacity
    - Opacity of the light spot.
    - Comfy dtype: INT
    - Python dtype: int

# Output types

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
