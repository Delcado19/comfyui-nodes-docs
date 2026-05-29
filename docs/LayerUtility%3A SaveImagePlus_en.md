# Documentation
- Class name: SaveImagePlus
- Category: 😺dzNodes/LayerUtility/SystemIO
- Output node: True
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Enhanced save image node. Customize the directory for saving images, add timestamp to filename, choose save format, set image compression rate, set whether to save workflow, and optionally add invisible watermark to images (add information in an imperceptible way, use the accompanying ShowBlindWaterMark node to decode the watermark). Optionally choose whether to output the workflow json file at the same time.

*Input %date for current date (YY-mm-dd), %time for current time (HH-MM-SS). You can use / to indicate subdirectories. For example, %date/name_%time will output images to the YY-mm-dd folder, with name_HH-MM-SS as the filename prefix.

# Input types

## Required

- images
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- custom_path
    - User-defined directory, enter the directory name in the correct format. If left empty, saved in ComfyUI's default output directory.
    - Comfy dtype: STRING
    - Python dtype: str

- filename_prefix
    - Filename prefix.
    - Comfy dtype: STRING
    - Python dtype: str

- timestamp
    - Add timestamp to filename, options: date, time to seconds, and time to milliseconds.
    - Comfy dtype: ["None", "second", "millisecond"]
    - Python dtype: str

- format
    - Image save format. Currently provides png and jpg. Note: RGBA mode images only support png format.
    - Comfy dtype: ["png", "jpg"]
    - Python dtype: str

- quality
    - Image quality, value range 10-100. Higher values result in better quality and larger file size.
    - Comfy dtype: INT
    - Python dtype: int

- meta_data
    - Whether to save metadata (workflow info) to png file. If you don't want to leak the workflow, set this to false.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- blind_watermark
    - The text entered here (does not support multiple languages) will be converted to a QR code and saved as an invisible watermark. Use the ShowBlindWaterMark node to decode the watermark. Note: images with watermarks are recommended to be saved in png format; low-quality jpg format will cause watermark information loss.
    - Comfy dtype: STRING
    - Python dtype: str

- save_workflow_as_json
    - Whether to also output the workflow as a json file (the output json is in the same directory as the image).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- preview
    - Preview.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

## Hidden

- prompt
    - Prompt.
    - Comfy dtype: PROMPT
    - Python dtype: str

- extra_pnginfo
    - Additional PNG info.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: dict

# Output types

- None

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
