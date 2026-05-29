# Documentation
- Class name: MakeImageList
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'MakeImageList' node is designed to aggregate image data into a list for batch processing of images. It plays a crucial role in workflows for image-related tasks by ensuring that images are organized in a manner compatible with downstream operations.

# Input types
## Required
- image1
    - The 'image1' parameter is critical because it represents the first image to be included in the list. Its inclusion is required for the proper functioning of the node, highlighting its importance in the overall operation of the node.
    - Comfy dtype: IMAGE
    - Python dtype: Union[str, torch.Tensor]

# Output types
- images
    - The 'images' output is a list of image data compiled by the node. It is important because it serves as the input for subsequent image processing tasks, acting as a key link in the image operation workflow.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
