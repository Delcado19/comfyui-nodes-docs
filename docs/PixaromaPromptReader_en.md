# Documentation
- Class name: PixaromaPromptReader
- Category: 👑 Pixaroma/💬 Prompt & Text
- Output node: True
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Prompt Reader Pixaroma - load an image generated with ComfyUI (or Automatic1111 / Forge) and read the positive prompt saved inside its PNG metadata. No image preview, just the text. Outputs the prompt as STRING so you can wire it into a CLIPTextEncode or any other text input and re-use it. Drag-drop a PNG onto the node, click Upload Image, or pick from the file combo. The readout updates the moment a file is selected, so you see the prompt before running the workflow. If the image has no embedded prompt (JPG, screenshot, or a PNG that lost its metadata), the readout shows a short explanation and the STRING output carries the same explanation so downstream wiring does not break. Handles ComfyUI workflows with chained text nodes (ConditioningCombine, StringConcatenate, SDXL dual-text encoders) and the Automatic1111 / Forge 'parameters' format. You can also wire a filename into the optional 'filename' input (for example from Load Image Pixaroma's 'filename' output) - while it is connected the node ignores its own picker and reads the prompt from that image instead. Pick, upload, or drop a file to take over and the wire disconnects.

# Input types
## Required
- image
    - The image to read the prompt from. Upload, drag-drop, or pick a PNG made with ComfyUI / Automatic1111 / Forge so its embedded prompt can be recovered. The readout updates as soon as you pick a file.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- filename
    - Optional. Wire an image's filename here (for example Load Image Pixaroma's 'filename' output) to read that image's prompt automatically. While connected, the node ignores its own picker. Pick, upload, or drop a file on the node to take over and disconnect the wire.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text
    - The prompt recovered from the image's metadata, or an explanatory message if none was found.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
