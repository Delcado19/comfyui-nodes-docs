
# Documentation
- Class name: Save Images Plus (JPS)
- Category: JPS Nodes/IO
- Output node: True
- Repo Ref: https://github.com/jps-yes/ComfyUI-JPsNM

Save Images Plus (JPS) node is specifically designed to efficiently save images to disk. It provides metadata customization and compression preference settings. This node helps users manage files in an organized manner and supports dynamic adjustments based on image attributes. Additionally, it offers optional metadata embedding to enrich the context information of the files.

# Input types
## Required
- images
    - A batch of images to be saved. This parameter is crucial for determining the output filename and path as well as the actual image saving process.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- filename_prefix
    - An optional prefix for the output filename. This allows users to organize stored images and easily identify saved images.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- dummy_out
    - The specific purpose and content of this output type are unknown.
    - Comfy dtype: INT
    - Python dtype: unknown
- ui
    - The node returns a UI component for displaying saved images, thereby enhancing user interaction and feedback.
    - Comfy dtype: 未指定
    - Python dtype: 未指定


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/jps-yes/ComfyUI-JPsNM)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
