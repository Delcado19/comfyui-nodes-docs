# Documentation
- Class name: GetImageCount
- Category: Video Helper Suite 🎥🅥🅗🅢/image
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The GetImageCount node is designed to efficiently determine the total number of images present in a given dataset. It is a critical component in video processing workflows, providing a straightforward method to understand the size of the dataset without delving into the complexities of individual image data. The primary goal of this node is to offer a concise and reliable count, which is essential for planning and managing computational resources.

# Input types
## Required
- images
    - The 'image' parameter is the input dataset containing image data. It is the fundamental element of the node's operation, as it directly influences the counting result. The node processes this input to determine the total number of images, which is crucial for various downstream tasks such as analysis, indexing, and resource allocation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- count
    - The 'count' output provides the total number of images processed by the node. It is a single integer value representing the scale of the dataset in terms of image count. This output is important for users who need to know the dataset size for further processing or making informed decisions regarding application requirements.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
