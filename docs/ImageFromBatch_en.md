# Documentation
- Class name: ImageFromBatch
- Category: image/batch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageFromBatch node is designed to extract a series of images from a batch of images. It acts as a key component in image processing workflows, enabling users to efficiently isolate and manipulate specific segments of image data. The functionality of this node is crucial when processing large amounts of image data, allowing focused analysis and processing on specific subsets of images.

# Input types
## Required
- image
    - The 'image' parameter is the primary input of the node, representing the batch of images to be processed. It is crucial because it forms the basis for all subsequent operations within the node. The performance of the node and the quality of the extracted images heavily depend on the integrity and format of the input image batch.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- batch_index
    - The 'batch_index' parameter specifies the starting index for extraction within the image batch. It plays an important role in determining the subset of images to be processed, allowing precise control over which images are selected for further analysis.
    - Comfy dtype: INT
    - Python dtype: int
- length
    - The 'length' parameter indicates the number of consecutive images to extract from the batch starting from the specified 'batch_index'. It is important because it determines the size of the image sequence that the node will output, affecting the scope of subsequent image processing tasks.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image_sequence
    - The 'image_sequence' output is the collection of images extracted from the input batch based on the specified index and length. It represents the primary output of the node and is significant for downstream tasks that require a focused set of images for analysis or manipulation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class ImageFromBatch:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'batch_index': ('INT', {'default': 0, 'min': 0, 'max': 4095}), 'length': ('INT', {'default': 1, 'min': 1, 'max': 4096})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'frombatch'
    CATEGORY = 'image/batch'

    def frombatch(self, image, batch_index, length):
        s_in = image
        batch_index = min(s_in.shape[0] - 1, batch_index)
        length = min(s_in.shape[0] - batch_index, length)
        s = s_in[batch_index:batch_index + length].clone()
        return (s,)
```