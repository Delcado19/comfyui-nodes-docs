
# Documentation
- Class name: Merge Latent Batch Gridwise
- Category: Bmad/latent
- Output node: False

This node merges a batch of latent representations into a single grid layout to efficiently organize and visualize multiple latent samples. It uses a mask to determine the grid size and each sample's position, thereby creating a combined latent representation.

# Input types
## Required
- batch
    - The batch of latent representations to merge into the grid. By providing the individual samples to arrange, it plays a crucial role in determining the final merged output.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- mask
    - Image mask for obtaining the grid layout size. Although not directly used in the merging process, it is essential for determining the grid dimensions.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- rows
    - Number of rows in the grid layout. It defines how latent samples are vertically arranged in the grid.
    - Comfy dtype: INT
    - Python dtype: int
- columns
    - Number of columns in the grid layout. It defines how latent samples are horizontally arranged in the grid.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent
    - Latent representations merged into the grid layout, combining multiple individual samples into a single composite representation.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class MergeLatentsBatchGridwise:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "batch": ("LATENT",),
            "mask": ("IMAGE",),  # only to fetch the sizes, not really needed.
            "rows": ("INT", {"default": 1, "min": 1, "max": 16}),
            "columns": ("INT", {"default": 1, "min": 1, "max": 16})
        }}

    RETURN_TYPES = ("LATENT",)
    FUNCTION = "merge"
    CATEGORY = "Bmad/latent"

    def merge(self, batch, mask, rows, columns):
        _, mask_height, mask_width, _ = mask.size()
        mask_height //= 8
        mask_width //= 8
        _, cs, hs, ws = batch["samples"].size()
        print(f'{batch["samples"].size()}')
        merged = torch.empty(size=(1, cs, hs, ws), dtype=batch["samples"].dtype, device=batch["samples"].device)
        for r in range(rows):
            for c in range(columns):
                x2 = x1 = mask_width * c
                x2 += mask_width
                y2 = y1 = mask_height * r
                y2 += mask_height
                merged[0, :, y1:y2, x1:x2] = batch["samples"][c + r * columns, :, y1:y2, x1:x2]

        return ({"samples": merged},)

```
