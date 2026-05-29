# Documentation
- Class name: PromptImage
- Category: ♾️Mixlab/Prompt
- Output node: True
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The PromptImage node is designed to process and manipulate images based on text prompts. It takes prompts and images as input, then generates a series of image outputs influenced by the input prompts. This node has the ability to save these images to a specified directory, providing seamless integration between text and image processing for creative or analytical purposes.

# Input types
## Required
- prompts
    - The ‘prompts’ parameter is an important input of the node, as it provides textual content to guide image processing. Each prompt is associated with a set of images and influences the final output.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- images
    - The ‘images’ parameter is the basic input containing the image data to be processed. It is expected to be a list of image tensors, which the node will manipulate according to the provided prompts.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- save_to_image
    - The ‘save_to_image’ parameter determines whether the processed images should be saved to the output directory. It allows users to enable or disable the saving function as needed.
    - Comfy dtype: COMBO['enable', 'disable']
    - Python dtype: List[str]

# Output types
- ui
    - The ‘ui’ parameter in the output contains user interface elements that display the processed images and their associated prompts. It provides a structured way to present results for further interaction or analysis.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
