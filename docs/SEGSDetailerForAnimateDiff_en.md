# Documentation
- Class name: SEGSDetailerForAnimateDiff
- Category: ImpactPack/Detailer
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

SEGSDetailerForAnimateDiff node aims to enhance segmentation details in image frames, particularly for improving the quality of animation differences. It enhances clarity and detail level by scaling and processing parts of the image, using advanced models and sampling techniques.

# Input types
## Required
- image_frames
    - The image_frames parameter is required as it provides the raw image data that the node will process. It directly affects the output quality and the node's ability to enhance details within frames.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- segs
    - The segs parameter defines the segmentation within image_frames that the node will focus on, crucial for the node to identify and process specific regions of interest in the image data.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]
- guide_size
    - The guide_size parameter sets the scaling factor for the detail enhancement process. It is important as it determines the level of detail that will be introduced into the image segment.
    - Comfy dtype: FLOAT
    - Python dtype: float
- guide_size_for
    - The guide_size_for parameter indicates whether guide_size applies to the border or the cropping area. This choice affects how detail enhancement is focused within the image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- max_size
    - The max_size parameter sets the maximum size for the enlarged image frame. It ensures that the enhanced image does not exceed a certain resolution, maintaining performance and memory efficiency.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed parameter is used for random number generation in the sampling process. It ensures reproducibility of results when the node is run with the same seed value.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter determines the number of iterations used in the sampling process. More steps can lead to finer results but may increase processing time.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter adjusts the configuration of the sampling process, allowing fine-tuning of the behavior of the detail enhancement algorithm.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter specifies the sampling method used by the node. Different samplers can provide varying results in terms of detail and noise characteristics.
    - Comfy dtype: STRING
    - Python dtype: str
- scheduler
    - The scheduler parameter defines the scheduling strategy for sampling steps. It affects how the sampling process evolves over iterations.
    - Comfy dtype: STRING
    - Python dtype: str
- denoise
    - The denoise parameter controls the level of denoising applied to the enhanced image. It is an important factor in achieving a balance between detail and noise in the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- basic_pipe
    - The basic_pipe parameter encapsulates the core components required for the detail enhancement process, including model, clip, and vae. It is fundamental to the node's functionality.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[Any, ...]
## Optional
- refiner_ratio
    - The refiner_ratio parameter, when provided, determines the influence of an optional refiner model on detail enhancement. It allows further fine-tuning of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: Optional[float]
- refiner_basic_pipe_opt
    - The optional refiner_basic_pipe_opt parameter extends the node's capabilities by providing an additional set of components for a secondary refinement process.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Optional[Tuple[Any, ...]]

# Output types
- segs
    - The segs output contains the enhanced segmentation details of the input image frames. It marks the completion of node processing and represents the primary result of the detail enhancement operation.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[Tuple[int, int], List[SEG]]
- cnet_images
    - The cnet_images output provides a visual representation of the control network's influence on the detail enhancement process. These images can be used for further analysis or as a reference for node effectiveness.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
```
class SEGSDetailerForAnimateDiff:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image_frames': ('IMAGE',), 'segs': ('SEGS',), 'guide_size': ('FLOAT', {'default': 256, 'min': 64, 'max': MAX_RESOLUTION, 'step': 8}), 'guide_size_for': ('BOOLEAN', {'default': True, 'label_on': 'bbox', 'label_off': 'crop_region'}), 'max_size': ('FLOAT', {'default': 768, 'min': 64, 'max': MAX_RESOLUTION, 'step': 8}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'denoise': ('FLOAT', {'default': 0.5, 'min': 0.0001, 'max': 1.0, 'step': 0.01}), 'basic_pipe': ('BASIC_PIPE',), 'refiner_ratio': ('FLOAT', {'default': 0.2, 'min': 0.0, 'max': 1.0})}, 'optional': {'refiner_basic_pipe_opt': ('BASIC_PIPE',)}}
    RETURN_TYPES = ('SEGS', 'IMAGE')
    RETURN_NAMES = ('segs', 'cnet_images')
    OUTPUT_IS_LIST = (False, True)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Detailer'

    @staticmethod
    def do_detail(image_frames, segs, guide_size, guide_size_for, max_size, seed, steps, cfg, sampler_name, scheduler, denoise, basic_pipe, refiner_ratio=None, refiner_basic_pipe_opt=None, inpaint_model=False, noise_mask_feather=0):
        (model, clip, vae, positive, negative) = basic_pipe
        if refiner_basic_pipe_opt is None:
            (refiner_model, refiner_clip, refiner_positive, refiner_negative) = (None, None, None, None)
        else:
            (refiner_model, refiner_clip, _, refiner_positive, refiner_negative) = refiner_basic_pipe_opt
        segs = core.segs_scale_match(segs, image_frames.shape)
        new_segs = []
        cnet_image_list = []
        for seg in segs[1]:
            cropped_image_frames = None
            for image in image_frames:
                image = image.unsqueeze(0)
                cropped_image = seg.cropped_image if seg.cropped_image is not None else crop_tensor4(image, seg.crop_region)
                cropped_image = to_tensor(cropped_image)
                if cropped_image_frames is None:
                    cropped_image_frames = cropped_image
                else:
                    cropped_image_frames = torch.concat((cropped_image_frames, cropped_image), dim=0)
            cropped_image_frames = cropped_image_frames.cpu().numpy()
            cropped_positive = [[condition, {k: core.crop_condition_mask(v, cropped_image_frames, seg.crop_region) if k == 'mask' else v for (k, v) in details.items()}] for (condition, details) in positive]
            cropped_negative = [[condition, {k: core.crop_condition_mask(v, cropped_image_frames, seg.crop_region) if k == 'mask' else v for (k, v) in details.items()}] for (condition, details) in negative]
            (enhanced_image_tensor, cnet_images) = core.enhance_detail_for_animatediff(cropped_image_frames, model, clip, vae, guide_size, guide_size_for, max_size, seg.bbox, seed, steps, cfg, sampler_name, scheduler, cropped_positive, cropped_negative, denoise, seg.cropped_mask, refiner_ratio=refiner_ratio, refiner_model=refiner_model, refiner_clip=refiner_clip, refiner_positive=refiner_positive, refiner_negative=refiner_negative, control_net_wrapper=seg.control_net_wrapper, inpaint_model=inpaint_model, noise_mask_feather=noise_mask_feather)
            if cnet_images is not None:
                cnet_image_list.extend(cnet_images)
            if enhanced_image_tensor is None:
                new_cropped_image = cropped_image_frames
            else:
                new_cropped_image = enhanced_image_tensor.cpu().numpy()
            new_seg = SEG(new_cropped_image, seg.cropped_mask, seg.confidence, seg.crop_region, seg.bbox, seg.label, None)
            new_segs.append(new_seg)
        return ((segs[0], new_segs), cnet_image_list)

    def doit(self, image_frames, segs, guide_size, guide_size_for, max_size, seed, steps, cfg, sampler_name, scheduler, denoise, basic_pipe, refiner_ratio=None, refiner_basic_pipe_opt=None, inpaint_model=False, noise_mask_feather=0):
        (segs, cnet_images) = SEGSDetailerForAnimateDiff.do_detail(image_frames, segs, guide_size, guide_size_for, max_size, seed, steps, cfg, sampler_name, scheduler, denoise, basic_pipe, refiner_ratio, refiner_basic_pipe_opt, inpaint_model=inpaint_model, noise_mask_feather=noise_mask_feather)
        if len(cnet_images) == 0:
            cnet_images = [empty_pil_tensor()]
        return (segs, cnet_images)
```