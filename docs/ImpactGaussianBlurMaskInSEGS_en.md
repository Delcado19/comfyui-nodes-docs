# Documentation
- Class name: GaussianBlurMaskInSEGS
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The GaussianBlurMaskInSEGS node applies Gaussian blur to the mask portion of each segment in a list of SEG objects. This operation enhances the smoothness of mask edges, which can be beneficial for certain image segmentation tasks requiring more diffused masks.

# Input types
## Required
- segs
    - The segs parameter is the list of SEG objects that the node will process. Each SEG object contains image data, mask, and other relevant information essential for the node's operation.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]
- kernel_size
    - The kernel_size parameter determines the size of the Gaussian blur kernel. A larger kernel size results in a more pronounced blur effect, which can smooth mask edges more significantly.
    - Comfy dtype: INT
    - Python dtype: int
- sigma
    - The sigma parameter controls the standard deviation of the Gaussian kernel, affecting the extent of the blur. Higher sigma values will produce stronger blur, while lower values will result in a more subtle effect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- segs
    - The output segs are the original SEG objects with their masks modified through the Gaussian blur operation. This allows for subsequent processing or analysis of the smoothed mask data.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[List[SEG], List[SEG]]

# Usage tips
- Infra type: GPU

# Source code
```
class GaussianBlurMaskInSEGS:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'segs': ('SEGS',), 'kernel_size': ('INT', {'default': 10, 'min': 0, 'max': 100, 'step': 1}), 'sigma': ('FLOAT', {'default': 10.0, 'min': 0.1, 'max': 100.0, 'step': 0.1})}}
    RETURN_TYPES = ('SEGS',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, segs, kernel_size, sigma):
        new_segs = []
        for seg in segs[1]:
            mask = utils.tensor_gaussian_blur_mask(seg.cropped_mask, kernel_size, sigma)
            mask = torch.squeeze(mask, dim=-1).squeeze(0).numpy()
            seg = SEG(seg.cropped_image, mask, seg.confidence, seg.crop_region, seg.bbox, seg.label, seg.control_net_wrapper)
            new_segs.append(seg)
        return ((segs[0], new_segs),)
```