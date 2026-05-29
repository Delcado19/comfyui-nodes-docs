# Documentation
- Class name: CR_ImageList
- Category: Comfyroll/Animation/Legacy
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ImageList node is designed to manage and organize image lists. It allows users to input individual images along with their corresponding aliases and combine them into a single image list. This node is particularly useful for applications that need to process or display collections of images together.

# Input types
## Optional
- image_1
    - The 'image_1' parameter represents the first image that can be added to the image list. It plays a key role in the node's operation by contributing to the final image collection managed by the node.
    - Comfy dtype: IMAGE
    - Python dtype: Union[str, torch.Tensor]
- alias1
    - The 'alias1' parameter is an optional string that can be used to provide an alias for 'image_1'. This is useful for referencing the image in a more readable format.
    - Comfy dtype: STRING
    - Python dtype: str
- image_list
    - The 'image_list' parameter is a list of tuples containing aliases and images. This parameter is essential as it allows the node to process a pre-existing collection of images and aliases.
    - Comfy dtype: image_LIST
    - Python dtype: List[Tuple[str, Union[str, torch.Tensor]]]

# Output types
- IMAGE_LIST
    - The 'IMAGE_LIST' output is a list pairing image aliases with their corresponding images. It represents the collection of all input images and aliases processed by the node.
    - Comfy dtype: image_LIST
    - Python dtype: List[Tuple[str, Union[str, torch.Tensor]]]
- show_help
    - The 'show_help' output provides a URL link to the documentation for further assistance. This is particularly useful for users seeking more information on how to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
