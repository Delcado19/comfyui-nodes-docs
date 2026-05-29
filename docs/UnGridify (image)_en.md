
# Documentation
- Class name: `UnGridify (image)`
- Category: `Bmad/image`
- Output node: `False`

UnGridify (image) node aims to decompose a gridded image into its constituent sub‑images or tiles. It effectively reverses the process of assembling multiple small images into a single large grid image, allowing each tile to be processed or analyzed individually.

# Input types
## Required
- image
- A grid image that needs to be decomposed into constituent tiles. This image is expected to have been previously constructed by arranging multiple small images into a grid format.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- columns
- Number of columns in the grid. This determines how the image is split horizontally.
    - Comfy dtype: INT
    - Python dtype: int
- rows
- Number of rows in the grid. This determines how the image is split vertically.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
- List of tiles extracted from the grid image, where each tile is a small image that is part of the original grid.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class UnGridImage:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {"image": ("IMAGE",),
                             "columns": grid_len_INPUT,
                             "rows": grid_len_INPUT,
                             }}

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "ungridify"
    CATEGORY = "Bmad/image"
    OUTPUT_IS_LIST = (True,)

    def ungridify(self, image, columns, rows):
        tiles = []
        samples = image.movedim(-1, 1)
        _, _, height, width = samples.size()
        tile_height = height // rows
        tile_width = width // columns

        for y in range(0, rows * tile_height, tile_height):
            for x in range(0, columns * tile_width, tile_width):
                tile = samples[:, :, y:y + tile_height, x:x + tile_width]
                tile = tile.movedim(1, -1)
                tiles.append(tile)

        return (tiles,)

```
