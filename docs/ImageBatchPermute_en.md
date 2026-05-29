---
tags:
- Batch
- Image
- ImageBatch

---

# ImageBatchPermute
## Documentation Overview
### Class Name: `ImageBatchPermute`
### Category: `image/batch`
### Output Node: `False`

The `ImageBatchPermute` node is designed to reorder a batch of images according to a specified permutation. It allows dynamic reorganization of image sequences, facilitating operations such as shuffling or specific ordering for processing or visualization.

## Input Types
### Required
- **`images`**
    - The `images` parameter represents the set of images to be rearranged. It is key to defining the image set that will be reorganized according to the permutation pattern.
    - Comfy dtype：`IMAGE`
    - Python dtype：`torch.Tensor`
- **`permute`**
    - The `permute` parameter specifies how the images in the batch should be arranged. It directly affects the final image arrangement, allowing custom sequences or shuffling.
    - Comfy dtype：`STRING`
    - Python dtype：`str`
- **`start_with_zero`**
    - The `start_with_zero` parameter indicates whether the permutation indices start from zero. This affects how the permutation pattern is applied to the image batch, matching zero-based or one-based indexing conventions.
    - Comfy dtype：`BOOLEAN`
    - Python dtype：`bool`

## Output Types
- **`image`**
    - Comfy dtype：`IMAGE`
    - The output is a set of rearranged images, arranged according to the specified permutation pattern. It allows dynamic reorganization of image sequences for further processing or visualization.
    - Python dtype：`torch.Tensor`

## Usage Tips
### Base Type: `GPU`
### Common Node: Unknown

## Source Code
```python
class ImageBatchPermute:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "permute": ("STRING", {"multiline": False}),
                "start_with_zero": ("BOOLEAN",),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/batch"

    def node(self, images, permute, start_with_zero):
        # 从置换字符串中提取数字，并转换为整数索引
        order = [int(num) - 1 if not start_with_zero else int(num) for num in re.findall(r'\d+', permute)]
        
        # 创建一个张量来存储排序后的顺序
        order = torch.tensor(order)
        
        # 确保索引在有效范围内（0到图像数量减一）
        order = order.clamp(0, images.shape[0] - 1)

        # 使用索引选择函数对输入图像进行重新排列
        return (images.index_select(0, order),)

```