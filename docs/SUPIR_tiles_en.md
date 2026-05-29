
# Documentation
- Class name: SUPIR_tiles
- Category: SUPIR
- Output node: False

The SUPIR_tiles node is dedicated to image tiling. This process divides large images into smaller, more manageable blocks or tiles. This functionality is essential in the SUPIR framework for efficient processing of large images, allowing individual detailed processing and analysis of each tile before reassembling them into the original image format. The node supports operations such as previewing tile effects and may generate descriptions for each tile, enabling more refined image analysis and manipulation methods.

# Input types
## Required
- image
    - The input image that requires tiling. This parameter is critical as it determines the source image to be divided into smaller blocks for processing, directly affecting the outcome of the tiling operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- tile_size
    - Defines the size of each tile. Tile size is a key factor in determining how the image is divided into tiles, affecting the number of tiles generated and the resolution of each tile, thereby influencing the granularity of processing and analysis.
    - Comfy dtype: INT
    - Python dtype: int
- tile_stride
    - Specifies the stride for tiling. Tile stride affects the degree of overlap or spacing between tiles, playing an important role in the tiling process, potentially impacting the comprehensiveness and redundancy of image analysis.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image_tiles
    - The generated set of image tiles. This output is a collection of smaller segments of the original image, each processed individually.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- tile_size
    - The tile size used in the tiling process. This output confirms the dimensions used to divide the image into tiles, providing insight into the granularity of analysis.
    - Comfy dtype: INT
    - Python dtype: int
- tile_stride
    - The stride used in the tiling process. This output represents the spacing or overlap between tiles, providing details on the tiling pattern and coverage.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SUPIR_tiles:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "image": ("IMAGE",),
            "tile_size": ("INT", {"default": 512, "min": 64, "max": 8192, "step": 64}),
            "tile_stride": ("INT", {"default": 256, "min": 64, "max": 8192, "step": 64}),
          
            }
        }

    RETURN_TYPES = ("IMAGE", "INT", "INT",)
    RETURN_NAMES = ("image_tiles", "tile_size", "tile_stride",)
    FUNCTION = "tile"
    CATEGORY = "SUPIR"
    DESCRIPTION = """
Tiles the image with same function as the Tiled samplers use.  
Useful for previewing the tiling and generating captions per tile (WIP feature)
"""

    def tile(self, image, tile_size, tile_stride):

        def _sliding_windows(h: int, w: int, tile_size: int, tile_stride: int):
            hi_list = list(range(0, h - tile_size + 1, tile_stride))
            if (h - tile_size) % tile_stride != 0:
                hi_list.append(h - tile_size)

            wi_list = list(range(0, w - tile_size + 1, tile_stride))
            if (w - tile_size) % tile_stride != 0:
                wi_list.append(w - tile_size)

            coords = []
            for hi in hi_list:
                for wi in wi_list:
                    coords.append((hi, hi + tile_size, wi, wi + tile_size))
            return coords

        image = image.permute(0, 3, 1, 2)
        _, _, h, w = image.shape

        tiles_iterator = _sliding_windows(h, w, tile_size, tile_stride)

        tiles = []
        for hi, hi_end, wi, wi_end in tiles_iterator:
            tile = image[:, :, hi:hi_end, wi:wi_end]
            
            tiles.append(tile)
        out = torch.cat(tiles, dim=0).to(torch.float32).permute(0, 2, 3, 1)
        print(out.shape)
        print("len(tiles): ", len(tiles))
        
        return (out, tile_size, tile_stride,)

```
