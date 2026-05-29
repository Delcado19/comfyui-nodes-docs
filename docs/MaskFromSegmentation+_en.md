
# Documentation
- Class name: MaskFromSegmentation+
- Category: essentials
- Output node: False

The MaskFromSegmentation+ node generates masks based on image segmentation, using segmentation techniques to identify and isolate specific features or objects for extraction from images. This process supports feature extraction and object recognition in image processing and computer vision tasks.

# Input types
## Required
- image
    - The input image serving as the basis for segmentation, acting as the source data for mask generation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- segments
    - Specifies the segmentation part used to create the mask, enabling targeted extraction within the image.
    - Comfy dtype: INT
    - Python dtype: List[int]
- remove_isolated_pixels
    - A boolean flag to remove isolated pixels from the generated mask, improving mask quality by eliminating noise.
    - Comfy dtype: INT
    - Python dtype: bool
- remove_small_masks
    - A boolean flag to remove small masks from the generated output, focusing on significant segments by filtering out minor parts.
    - Comfy dtype: FLOAT
    - Python dtype: bool
- fill_holes
    - A boolean flag to fill holes in the generated mask, ensuring a more continuous and coherent output mask.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- mask
    - The output mask generated from the specified image segmentation, used to isolate the desired features or objects.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class MaskFromSegmentation:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "image": ("IMAGE", ),
                "segments": ("INT", { "default": 6, "min": 1, "max": 16, "step": 1, }),
                "remove_isolated_pixels": ("INT", { "default": 0, "min": 0, "max": 32, "step": 1, }),
                "remove_small_masks": ("FLOAT", { "default": 0.0, "min": 0., "max": 1., "step": 0.01, }),
                "fill_holes": ("BOOLEAN", { "default": False }),
            }
        }

    RETURN_TYPES = ("MASK",)
    FUNCTION = "execute"
    CATEGORY = "essentials"

    def execute(self, image, segments, remove_isolated_pixels, fill_holes, remove_small_masks):
        im = image[0] # we only work on the first image in the batch
        im = Image.fromarray((im * 255).to(torch.uint8).cpu().numpy(), mode="RGB")
        im = im.quantize(palette=im.quantize(colors=segments), dither=Image.Dither.NONE)       
        im = torch.tensor(np.array(im.convert("RGB"))).float() / 255.0

        colors = im.reshape(-1, im.shape[-1])
        colors = torch.unique(colors, dim=0)

        masks = []
        for color in colors:
            mask = (im == color).all(dim=-1).float()
            # remove isolated pixels
            if remove_isolated_pixels > 0:
                mask_np = mask.cpu().numpy()
                mask_np = scipy.ndimage.binary_opening(mask_np, structure=np.ones((remove_isolated_pixels, remove_isolated_pixels)))
                mask = torch.from_numpy(mask_np)

            # fill holes
            if fill_holes:
                mask_np = mask.cpu().numpy()
                mask_np = scipy.ndimage.binary_fill_holes(mask_np)
                mask = torch.from_numpy(mask_np)

            # if the mask is too small, it's probably noise
            if mask.sum() / (mask.shape[0]*mask.shape[1]) > remove_small_masks:
                masks.append(mask)

        if masks == []:
            masks.append(torch.zeros_like(im).squeeze(-1).unsqueeze(0)) # return an empty mask if no masks were found, prevents errors

        mask = torch.stack(masks, dim=0).float()

        return (mask, )

```
