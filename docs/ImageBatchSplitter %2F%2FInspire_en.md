# Documentation
- Class name: ImageBatchSplitter
- Category: InspirePack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The ImageBatchSplitter node is designed to efficiently manage and manipulate image batches by splitting them into smaller subsets based on a user-defined count. It ensures the batch size aligns with the specified count, even when the total number of images is not perfectly divisible by the split count. This node plays a crucial role in preparing data for further processing that requires uniform batch sizes and contributes to overall data pipeline management in machine learning or image processing workflows.

# Input types
## Required
- images
    - The 'image' parameter is the primary input to the ImageBatchSplitter node, representing the collection of image data to be processed. This parameter directly affects the node's operation and output quality, as the node organizes and operates on these images into subsets based on the 'split_count'.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image]
## Optional
- split_count
    - The 'split_count' parameter is essential to the ImageBatchSplitter node's functionality. It determines how many desired subsets the input images are divided into. This parameter affects the granularity of the output and is critical for ensuring the processed data meets the requirements of downstream machine learning models or image processing tasks.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The output of the ImageBatchSplitter node is a tuple containing the processed images, organized into subsets based on the 'split_count' parameter. This output is critical for subsequent operations that require uniform batch sizes, facilitating smooth data flow through the pipeline.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class ImageBatchSplitter:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images': ('IMAGE',), 'split_count': ('INT', {'default': 4, 'min': 0, 'max': 50, 'step': 1})}}
    RETURN_TYPES = ByPassTypeTuple(('IMAGE',))
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/Util'

    def doit(self, images, split_count):
        cnt = min(split_count, len(images))
        res = [image.unsqueeze(0) for image in images[:cnt]]
        if split_count >= len(images):
            lack_cnt = split_count - cnt + 1
            empty_image = empty_pil_tensor()
            for x in range(0, lack_cnt):
                res.append(empty_image)
        elif cnt < len(images):
            remained_cnt = len(images) - cnt
            remained_image = images[-remained_cnt:]
            res.append(remained_image)
        return tuple(res)
```