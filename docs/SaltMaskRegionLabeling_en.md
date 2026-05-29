
# Documentation
- Class name: SaltMaskRegionLabeling
- Category: SALT/Masking/Filter
- Output node: False

This node aims to label distinct regions in a mask, converting them into visually distinct regions based on connectivity, and outputting these labeled regions as tensors. It utilizes thresholding and connected component analysis to segment and label distinct regions, enhancing the interpretability of mask regions by assigning a unique color to each region.

# Input types
## Required
- masks
    - The input mask to be labeled, where each mask is processed according to the specified threshold to identify and label connected regions.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]
## Optional
- threshold
    - A list of thresholds for binary thresholding of the masks, which is essential for isolating the regions to be labeled. If a single value is provided, it will be applied to all masks.
    - Comfy dtype: INT
    - Python dtype: List[int]

# Output types
- images
    - The output tensor containing the labeled regions, where each region is assigned a unique color to distinguish it from other regions. This correction addresses the issue in the feedback, correctly identifying the output as a tensor of labeled images, rather than just "regions_tensor".
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltMaskRegionLabeling:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "masks": ("MASK",),
            },
            "optional": {
                "threshold": ("INT", {"default": 128, "min": 0, "max": 255, "step": 1}),
            }
        }

    CATEGORY = f"{NAME}/Masking/Filter"

    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("images",)

    FUNCTION = "region_labeling"

    def region_labeling(self, masks, threshold=[128]):

        if not isinstance(threshold, list):
            threshold = [threshold]

        regions = []
        for i, mask in enumerate(masks):
            pil_image = ImageOps.invert(mask2pil(mask.unsqueeze(0)))
            image_array = np.array(pil_image.convert('L'))

            _, thresh_image = cv2.threshold(image_array, threshold[i if i < len(threshold) else -1], 255, cv2.THRESH_BINARY)

            num_labels, labels_im = cv2.connectedComponents(thresh_image)
            max_label = max(num_labels - 1, 1)

            hues = np.linspace(0, 179, num=max_label + 1, endpoint=False, dtype=np.uint8)

            label_hue = np.zeros_like(labels_im, dtype=np.uint8)
            for i in range(1, num_labels):
                label_hue[labels_im == i] = hues[i]

            saturation = np.uint8(np.where(labels_im == 0, 0, 255))
            value = np.uint8(np.where(labels_im == 0, 0, 255))

            labeled_img = cv2.merge([label_hue, saturation, value])
            labeled_img = cv2.cvtColor(labeled_img, cv2.COLOR_HSV2BGR)

            labeled_pil = Image.fromarray(labeled_img)
            region_tensor = pil2tensor(labeled_pil)
            regions.append(region_tensor)

        regions_tensor = torch.cat(regions, dim=0)
        return (regions_tensor,)

```
