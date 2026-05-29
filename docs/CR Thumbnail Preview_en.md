# Documentation
- Class name: CR_ThumbnailPreview
- Category: Comfyroll/Graphics/Template
- Output node: True
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ThumbnailPreview node processes and displays a series of images as thumbnails. It resizes images to a specified size, adds borders for visual distinction, and arranges them in a grid for easy review. The node is especially useful for compactly showing multiple images, such as in previews or galleries.

# Input types
## Required
- image
    - 'image' parameter represents the input tensor of images to process. It is the basis of node operation, as it is the original data that will be converted into thumbnail previews.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- rescale_factor
    - 'rescale_factor' parameter determines the scaling factor of the image. It is crucial for controlling thumbnail size, allowing users to adjust preview size as needed.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_columns
    - 'max_columns' parameter specifies the maximum number of columns in the thumbnail grid layout. It influences how images are arranged, which is important for the overall grid display.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- ui
    - 'ui' output parameter is a dictionary containing images arranged in a grid. It is important because it provides the final visual representation of thumbnails for display purposes.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, List[Dict[str, Union[str, torch.Tensor]]]]
- result
    - 'result' output parameter is a tuple containing a URL pointing to documentation. It is useful for users who need additional guidance or information about the node's functionality.
    - Comfy dtype: TUPLE
    - Python dtype: Tuple[str,]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
