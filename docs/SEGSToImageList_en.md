# Documentation
- Class name: SEGSToImageList
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SEGSToImageList node is designed to convert segmentation data into a list of image tensors. It scales and processes the segmentation data to match the dimensions of the provided fallback image, or generates a default tensor if no image is provided. This node plays a crucial role in preparing image data for further analysis or visualization within the ImpactPack utility suite.

# Input types
## Required
- segs
    - The 's segs' parameter is the segmentation data collection processed by the node. It is crucial to the node's operation as it directly affects the content and structure of the output image list.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]
## Optional
- fallback_image_opt
    - The optional 'fallback_image_opt' parameter provides a default image used when no segmentation image is available. It ensures that the node can produce consistent output even when data is incomplete.
    - Comfy dtype: IMAGE
    - Python dtype: Optional[torch.Tensor]

# Output types
- results
    - The 'results' output is a list of image tensors derived from the segmentation data. It represents the primary output of the node and is significant for downstream tasks that require image data.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class SEGSToImageList:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'segs': ('SEGS',)}, 'optional': {'fallback_image_opt': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE',)
    OUTPUT_IS_LIST = (True,)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, segs, fallback_image_opt=None):
        results = list()
        if fallback_image_opt is not None:
            segs = core.segs_scale_match(segs, fallback_image_opt.shape)
        for seg in segs[1]:
            if seg.cropped_image is not None:
                cropped_image = to_tensor(seg.cropped_image)
            elif fallback_image_opt is not None:
                cropped_image = to_tensor(crop_image(fallback_image_opt, seg.crop_region))
            else:
                cropped_image = empty_pil_tensor()
            results.append(cropped_image)
        if len(results) == 0:
            results.append(empty_pil_tensor())
        return (results,)
```