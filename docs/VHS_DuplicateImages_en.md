# Documentation
- Class name: DuplicateImages
- Category: Video Helper Suite 🎥🅥🅗🅢/image
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The DuplicateImages node is designed to duplicate a given set of images a specified number of times. It is used to increase image data, suitable for scenarios like machine learning where larger datasets can improve model training. The node's functionality is straightforward: it accepts an image array and an integer multiplier, then returns a new array containing the images repeated the given number of times, along with the total count of images.

# Input types
## Required
- images
    - The 'image' parameter is the key input for the DuplicateImages node, as it represents the set of images to be duplicated. The node processes this input to create multiple copies, which is essential for certain image processing tasks or data augmentation strategies.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- multiply_by
    - The 'multiply_by' parameter determines how many times each image in the 'images' input will be duplicated. It is an integer that directly affects the size of the output dataset, making it a critical factor in the node's operation for data augmentation purposes.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The 'IMAGE' output parameter represents the duplicated image array. This is the primary result of the DuplicateImages node's operation, containing all original images repeated according to the 'multiply_by' parameter.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- count
    - The 'count' output parameter provides the total number of images after duplication. This integer value helps track the dataset size, which may be important for further processing or analysis.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
