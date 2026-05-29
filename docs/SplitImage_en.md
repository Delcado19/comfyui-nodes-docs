# Documentation
- Class name: SplitImage
- Category: ♾️Mixlab/Layer
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The SplitImage node divides the input image into a smaller image grid and generates corresponding masks. It enhances image processing workflows by enabling segmented outputs, which can be used for image editing, feature extraction, and data augmentation.

# Input types
## Required
- image
- The image parameter is critical because it is the primary input for the node operation. It determines the quality and resolution of the generated segmented images and masks. The image's characteristics directly affect the node's effectiveness in segmentation and mask creation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- num
- The num parameter determines into how many segments the image will be divided. It is important because it influences the granularity of the segmented images and the level of detail in the masks. Higher values produce more segments, which can be beneficial for detailed analysis or processing.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- seed
- The seed parameter controls the randomness of the grid coordinates. It is essential for ensuring reproducibility of the image segmentation process, especially when the node is used in larger workflows requiring consistent results.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- grids
- The grids output is a collection of segmented images derived from the original input. It represents the main result of the node operation, demonstrating the effectiveness of the image segmentation.
    - Comfy dtype: _GRID
    - Python dtype: List[Tuple[int, int, int, int]]
- grid
- The grid output is a single segmented image selected based on the seed parameter. It is important because it provides a detailed view of a specific segment for focused analysis or further processing.
    - Comfy dtype: _GRID
    - Python dtype: Tuple[int, int, int, int]
- mask
- The mask output is a binary image corresponding to the selected grid. It is crucial for isolating and highlighting specific regions of the image for further analysis or manipulation.
    - Comfy dtype: MASK
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
```
class SplitImage:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'num': ('INT', {'default': 4, 'min': 1, 'max': 500, 'step': 1, 'display': 'number'}), 'seed': ('INT', {'default': 4, 'min': 1, 'max': 500, 'step': 1, 'display': 'number'})}}
    RETURN_TYPES = ('_GRID', '_GRID', 'MASK')
    RETURN_NAMES = ('grids', 'grid', 'mask')
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Layer'
    INPUT_IS_LIST = False

    def run(self, image, num, seed):
        image = tensor2pil(image)
        grids = splitImage(image, num)
        if seed > num:
            num = int(seed / 500 * num) - 1
        else:
            num = seed - 1
        num = max(0, num)
        g = grids[num]
        (x, y, w, h) = g
        mask = createMask(image, x, y, w, h)
        mask = pil2tensor(mask)
        return (grids, g, mask)
```