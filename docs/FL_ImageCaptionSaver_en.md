
# Documentation
- Class name: FL_ImageCaptionSaver
- Category: 🏵️Fill Nodes
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The FL_ImageCaptionSaver node saves a batch of images and their corresponding captions to a specified directory, with options for file naming and overwrite control. It helps organize and store generated images with their text descriptions, improving accessibility and management of visual content.

# Input types
## Required
- images
    - The batch of images to save. This input determines what will be stored and directly affects the output files created.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- folder_name
    - The folder name where images and captions are saved. It serves as the target path for output and affects how saved files are organized.
    - Comfy dtype: STRING
    - Python dtype: str
- caption_text
    - The text caption to save alongside each image. This input provides context or descriptive information for the images, enriching the content's value.
    - Comfy dtype: STRING
    - Python dtype: str
- overwrite
    - A boolean flag indicating whether existing files with the same name should be overwritten. This affects how the node handles file naming conflicts and storage management.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- string
    - A confirmation message detailing the number of images and captions saved and the directory where they are stored. It provides feedback on the operation's success.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
