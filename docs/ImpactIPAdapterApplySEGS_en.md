# Documentation
- Class name: IPAdapterApplySEGS
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The IPAdapterApplySEGS node is designed to integrate and apply segmentation masks, as part of the ImpactPack tool suite. It leverages the power of the IPAdapter framework to condition image generation based on reference images, allowing for transfer of subjects or styles. This node is essential for tasks that require precise control over the generation process, ensuring the output closely follows the desired aesthetic or thematic elements.

# Input types
## Required
- segs
    - The ‘segs’ parameter is crucial as it defines the segmentation masks that the node will process. These masks are essential for guiding the generation of images that meet specific standards or constraints. Proper application of this parameter directly affects the node's ability to produce accurate and relevant outputs.
    - Comfy dtype: SEGS
    - Python dtype: List[NamedTuple]
- ipadapter_pipe
    - The ‘ipadapter_pipe’ parameter is a key component for implementing the IPAdapter model integration. It is responsible for seamlessly applying image-to-image conditioning, which is critical for achieving the desired style or subject transfer in the generated images.
    - Comfy dtype: IPADAPTER_PIPE
    - Python dtype: Tuple[Any, ...]
- weight
    - The ‘weight’ parameter plays an important role in adjusting the influence of the reference image on the generation process. It allows fine-tuning the degree of style or subject transfer, ensuring the final output meets user expectations without being overly dominated by the reference image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- SEGS
    - The output ‘SEGS’ represents the processed segmentation masks conditioned by the IPAdapter model. This output is important because it encapsulates the node's ability to refine and adjust input masks to better align with the desired generation criteria.
    - Comfy dtype: SEGS
    - Python dtype: List[NamedTuple]

# Usage tips
- Infra type: GPU

# Source code
```
class IPAdapterApplySEGS:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'segs': ('SEGS',), 'ipadapter_pipe': ('IPADAPTER_PIPE',), 'weight': ('FLOAT', {'default': 0.7, 'min': -1, 'max': 3, 'step': 0.05}), 'noise': ('FLOAT', {'default': 0.4, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'weight_type': (['original', 'linear', 'channel penalty'], {'default': 'channel penalty'}), 'start_at': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'end_at': ('FLOAT', {'default': 0.9, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'unfold_batch': ('BOOLEAN', {'default': False}), 'faceid_v2': ('BOOLEAN', {'default': False}), 'weight_v2': ('FLOAT', {'default': 1.0, 'min': -1, 'max': 3, 'step': 0.05}), 'context_crop_factor': ('FLOAT', {'default': 1.2, 'min': 1.0, 'max': 100, 'step': 0.1}), 'reference_image': ('IMAGE',)}, 'optional': {'combine_embeds': (['concat', 'add', 'subtract', 'average', 'norm average'],), 'neg_image': ('IMAGE',)}}
    RETURN_TYPES = ('SEGS',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, segs, ipadapter_pipe, weight, noise, weight_type, start_at, end_at, unfold_batch, faceid_v2, weight_v2, context_crop_factor, reference_image, combine_embeds='concat', neg_image=None):
        if len(ipadapter_pipe) == 4:
            print(f'[Impact Pack] IPAdapterApplySEGS: Installed Inspire Pack is outdated.')
            raise Exception('Inspire Pack is outdated.')
        new_segs = []
        (h, w) = segs[0]
        if reference_image.shape[2] != w or reference_image.shape[1] != h:
            reference_image = tensor_resize(reference_image, w, h)
        for seg in segs[1]:
            context_crop_region = make_crop_region(w, h, seg.crop_region, context_crop_factor)
            cropped_image = crop_image(reference_image, context_crop_region)
            control_net_wrapper = core.IPAdapterWrapper(ipadapter_pipe, weight, noise, weight_type, start_at, end_at, unfold_batch, weight_v2, cropped_image, neg_image=neg_image, prev_control_net=seg.control_net_wrapper, combine_embeds=combine_embeds)
            new_seg = SEG(seg.cropped_image, seg.cropped_mask, seg.confidence, seg.crop_region, seg.bbox, seg.label, control_net_wrapper)
            new_segs.append(new_seg)
        return ((segs[0], new_segs),)
```