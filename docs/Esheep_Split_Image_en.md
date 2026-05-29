# Documentation
- Class name: EsheepImageSplit
- Category: tests
- Output node: False
- Repo Ref: https://github.com/esheep/esheep_custom_nodes.git

This node aims to split images into grid-like tiles based on specified columns and rows, facilitating the processing of large images in a more manageable way. By decomposing images into smaller parts, it enhances workflows, enabling more focused analysis and manipulation.

# Input types
## Required
- images
    - The image parameter is critical as it provides the source data for the node's operation. It is the primary input, determining subsequent processing and output tile generation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
- columns
    - The number of columns determines how the image is horizontally divided, directly affecting the arrangement and quantity of generated tiles. It is an important parameter controlling the granularity of image segmentation.
    - Comfy dtype: INT
    - Python dtype: int
- lines
    - Similar to the column count, the number of rows determines the vertical division of the image, influencing the shape and quantity of tiles. Together with the column parameter, it defines the grid structure.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
    - The output is a collection of tiles generated from splitting the input image. It represents the primary result of the node's operation, encapsulating the processed data in a format that can be further utilized in downstream tasks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class EsheepImageSplit:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images': ('IMAGE',), 'columns': ('INT', {'default': 2, 'min': 1, 'max': 100, 'step': 1, 'display': 'number'}), 'lines': ('INT', {'default': 3, 'min': 1, 'max': 100, 'step': 1, 'display': 'number'})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'execute'
    CATEGORY = 'tests'

    def execute(self, images, columns, lines):
        image = images[0]
        i = 255.0 * image.cpu().numpy()
        pil_image = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8))
        imgwidth = pil_image.size[0]
        imgheight = pil_image.size[1]
        M = int(imgwidth / columns)
        N = int(imgheight / lines)
        tiles = []
        for i in range(0, imgheight - imgheight % N, N):
            for j in range(0, imgwidth - imgwidth % M, M):
                box = (j, i, j + M, i + N)
                tiles.append(pil_image.crop(box))
        t_tiles = []
        for tile in tiles:
            t_tile = tile.convert('RGB')
            t_tile = np.array(t_tile).astype(np.float32) / 255.0
            t_tile = torch.from_numpy(t_tile)[None,]
            t_tiles.append(t_tile)
        s = t_tiles[0]
        for i in range(1, len(t_tiles)):
            s = torch.cat((s, t_tiles[i]), dim=0)
        return (s,)
```