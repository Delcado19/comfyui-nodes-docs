
# Documentation
- Class name: SaltMaskSkeletonization
- Category: SALT/Masking/Filter
- Output node: False

The SaltMaskSkeletonization node converts input mask images into their skeletonized versions, effectively simplifying masks to their simplest form while preserving their overall geometric structure. This process is useful for applications requiring a minimal representation of shapes within masks.

# Input types
## Required
- masks
    - Input masks requiring skeletonization, where each mask represents a different region to be processed into skeleton form.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

## Optional
- iterations
    - Specifies the number of erosion operations applied to each mask, affecting the fineness of the final skeleton.
    - Comfy dtype: INT
    - Python dtype: List[int]
- strength
    - Determines the intensity of the skeletonization process, affecting the prominence of the final skeleton structure.
    - Comfy dtype: INT
    - Python dtype: List[int]

# Output types
- MASKS
    - Output tensor containing skeletonized versions of input masks, where each skeleton represents the minimal structure of the original mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltMaskSkeletonization:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "masks": ("MASK",),
            },
            "optional": {
                "iterations": ("INT", {"default": 1, "min": 1, "max": 10, "step": 1}),
                "strength": ("INT", {"default": 1, "min": 1, "max": 12, "step": 1})
            }
        }

    CATEGORY = f"{NAME}/Masking/Filter"

    RETURN_TYPES = ("MASK",)
    RETURN_NAMES = ("MASKS",)

    FUNCTION = "skeletonization"

    def skeletonization(self, masks, iterations=[1], strength=[1]):
        if not isinstance(iterations, list):
            iterations = [iterations]
        if not isinstance(strength, list):
            strength = [strength]

        iterations = [int(val) for val in iterations]
        strength = [int(val) for val in strength]

        regions = []
        for i, mask in enumerate(masks):
            pil_image = ImageOps.invert(mask2pil(mask.unsqueeze(0)))
            image_array = np.array(pil_image.convert('L'))

            skeleton = np.zeros_like(image_array)
            element = cv2.getStructuringElement(cv2.MORPH_CROSS, (3, 3))
            while True:
                eroded = image_array
                for _ in range(iterations[i if i < len(iterations) else -1]):
                    eroded = cv2.erode(eroded, element)

                temp = cv2.dilate(eroded, element)
                temp = cv2.subtract(image_array, temp)
                skeleton = cv2.bitwise_or(skeleton, temp)
                image_array = eroded.copy()

                if cv2.countNonZero(image_array) == 0:
                    break

                for _ in range(strength[i if i < len(strength) else -1]):
                    image_array = image_array + image_array

            skeleton_pil = Image.fromarray(skeleton)
            region_tensor = pil2mask(skeleton_pil)
            regions.append(region_tensor)

        regions_tensor = torch.cat(regions, dim=0)
        return (regions_tensor,)

```
