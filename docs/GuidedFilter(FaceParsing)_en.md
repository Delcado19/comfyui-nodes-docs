# Documentation
- Class name: GuidedFilter
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

The GuidedFilter node applies a nonlinear filtering technique that uses a guide image to influence the filtering process, aiming to remove noise or smooth appearance while preserving the original image's structure and edges.

# Input types
## Required
- image
    - The image parameter is required because it provides the input image data on which the guided filtering operation will be performed, which significantly impacts output quality and detail.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- radius
    - The radius parameter determines the size of the local neighborhood considered by the filter, affecting how much the filter smooths the image while preserving edges.
    - Comfy dtype: INT
    - Python dtype: int
- eps
    - The eps parameter controls the sensitivity of the guided filter; lower values lead to more aggressive smoothing, higher values retain more detail.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- guide
    - When a guide parameter is provided, it serves as a reference image to guide the filtering process, allowing selective enhancement or suppression of features based on the guide content.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- output_image
    - The output image is the result of the guided filtering operation, reflecting the combination of the input image and the guidance provided by the guide image (if any).
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class GuidedFilter:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'radius': ('INT', {'default': 3, 'min': 0, 'step': 1}), 'eps': ('FLOAT', {'default': 125, 'min': 0, 'step': 1})}, 'optional': {'guide': ('IMAGE', {'default': None})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'guided_filter'
    CATEGORY = 'face_parsing'

    def guided_filter(self, image: Tensor, radius: int, eps: float, guide: Tensor | None=None):
        results = []
        for item in image:
            image_cv2 = cv2.cvtColor(item.mul(255).byte().numpy(), cv2.COLOR_RGB2BGR)
            guide_cv2 = image_cv2 if guide is None else cv2.cvtColor(guide.numpy(), cv2.COLOR_RGB2BGR)
            result_cv2 = cv2.ximgproc.guidedFilter(guide_cv2, image_cv2, radius, eps)
            result_cv2_rgb = cv2.cvtColor(result_cv2, cv2.COLOR_BGR2RGB)
            result = torch.tensor(result_cv2_rgb).float().div(255)
            results.append(result)
        return (torch.cat(results, dim=0).unsqueeze(0),)
```