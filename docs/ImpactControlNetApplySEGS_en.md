# Documentation
- Class name: ControlNetApplySEGS
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The ControlNetApplySEGS node aims to enhance the segmentation process by applying a control network to refine segmentation masks. It adjusts the influence of the control network based on the specified strength parameter, ensuring seamless integration of the control network's output with the segmentation results.

# Input types
## Required
- segs
    - The 'segs' parameter is critical as it provides the initial segmentation data that the node will process. It is essential to the node's execution as it forms the foundation for applying the control network.
    - Comfy dtype: SEGS
    - Python dtype: List[impact.core.SEG]
- control_net
    - The 'control_net' parameter is crucial to the node as it defines the control network used to refine the segmentation. It directly impacts the quality and accuracy of the final segmentation output.
    - Comfy dtype: CONTROL_NET
    - Python dtype: impact.core.ControlNet
- strength
    - The 'strength' parameter determines the degree of influence the control network has on the segmentation process. It is a key factor in balancing segmentation refinement with the original segmentation data.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- segs_preprocessor
    - The optional 'segs_preprocessor' parameter allows preprocessing of the segmentation data before the control network is applied. This may be important for ensuring the input data is in the correct format or has undergone necessary transformations.
    - Comfy dtype: SEGS_PREPROCESSOR
    - Python dtype: Callable
- control_image
    - The provided 'control_image' parameter is used to enhance the application of the control network by providing additional image context. This can improve the node's ability to make more informed adjustments to the segmentation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Output types
- SEGS
    - The output 'SEGS' contains the refined segmentation masks after applying the control network. It represents the outcome of the node's processing and is significant for further analysis or downstream tasks.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[str, List[impact.core.SEG]]

# Usage tips
- Infra type: CPU

# Source code
```
class ControlNetApplySEGS:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'segs': ('SEGS',), 'control_net': ('CONTROL_NET',), 'strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.01})}, 'optional': {'segs_preprocessor': ('SEGS_PREPROCESSOR',), 'control_image': ('IMAGE',)}}
    RETURN_TYPES = ('SEGS',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, segs, control_net, strength, segs_preprocessor=None, control_image=None):
        new_segs = []
        for seg in segs[1]:
            control_net_wrapper = core.ControlNetWrapper(control_net, strength, segs_preprocessor, seg.control_net_wrapper, original_size=segs[0], crop_region=seg.crop_region, control_image=control_image)
            new_seg = SEG(seg.cropped_image, seg.cropped_mask, seg.confidence, seg.crop_region, seg.bbox, seg.label, control_net_wrapper)
            new_segs.append(new_seg)
        return ((segs[0], new_segs),)
```