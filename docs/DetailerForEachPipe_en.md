# Documentation
- Class name: DetailerForEachPipe
- Category: ImpactPack/Detailer
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The DetailerForEachPipe node aims to enhance image details by applying a series of image processing techniques. It focuses on refining the visual quality of individual parts of the image through advanced algorithms to achieve a higher level of detail. This node plays a key role in post-processing workflows that emphasize image content details.

# Input types
## Required
- image
    - Input image is the primary data that the node will process. It is essential for the node's execution as it determines the target for detail enhancement. The characteristics of the image directly affect the node's operation and the quality of the output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- segs
    - Segmentation data provides regions of interest within the image for the node. This is critical for the node to understand which parts of the image require detailed enhancement. Segmentation data guides the node's processing, ensuring only relevant areas undergo enhancement.
    - Comfy dtype: SEGS
    - Python dtype: List[torch.Tensor]
- guide_size
    - Guide size parameter determines the scale at which detail enhancement is applied. It is a key factor in deciding the level of visible detail in the final output. The guide size must be carefully chosen to balance detail and computational resources.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_size
    - Max size parameter sets an upper limit on the size of processed image segments. It is important for controlling computational load and ensuring the node operates within available resources. This parameter helps prevent excessive memory usage during enhancement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - Seed parameter is used to initialize the random number generator, ensuring reproducibility of the node's operations. It is especially important when consistent results are desired across multiple runs of the node. The seed provides a degree of control over random elements in the enhancement process.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - Steps parameter specifies the number of iterations the enhancement algorithm will perform. It is a key determinant of the final output quality and detail. More steps generally yield better results but increase computational time.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Config parameter adjusts the settings of the enhancement algorithm to fine-tune the output. It is a key factor in achieving the desired level of detail and can significantly affect the visual result of the enhanced image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - Output image is the result of the detail enhancement process. It contains the original image with added details and improved visual quality. This is the primary output expected from the node operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- segs
    - Output segmentation data provides information about enhanced regions within the image. This is useful for further processing or analysis that requires knowledge of segmented areas of the image.
    - Comfy dtype: SEGS
    - Python dtype: List[torch.Tensor]
- basic_pipe
    - Basic pipe output is a collection of models and parameters used during the enhancement process. It can be used for additional operations or maintaining consistency across different stages of an image processing workflow.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[Any, ...]
- cnet_images
    - ControlNet image output is a list of images processed by the ControlNet during enhancement. These images can be reviewed or used for further operations.
    - Comfy dtype: COMBO[IMAGE]
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
```
class DetailerForEachPipe:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'segs': ('SEGS',), 'guide_size': ('FLOAT', {'default': 384, 'min': 64, 'max': nodes.MAX_RESOLUTION, 'step': 8}), 'guide_size_for': ('BOOLEAN', {'default': True, 'label_on': 'bbox', 'label_off': 'crop_region'}), 'max_size': ('FLOAT', {'default': 1024, 'min': 64, 'max': nodes.MAX_RESOLUTION, 'step': 8}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'denoise': ('FLOAT', {'default': 0.5, 'min': 0.0001, 'max': 1.0, 'step': 0.01}), 'feather': ('INT', {'default': 5, 'min': 0, 'max': 100, 'step': 1}), 'noise_mask': ('BOOLEAN', {'default': True, 'label_on': 'enabled', 'label_off': 'disabled'}), 'force_inpaint': ('BOOLEAN', {'default': True, 'label_on': 'enabled', 'label_off': 'disabled'}), 'basic_pipe': ('BASIC_PIPE',), 'wildcard': ('STRING', {'multiline': True, 'dynamicPrompts': False}), 'refiner_ratio': ('FLOAT', {'default': 0.2, 'min': 0.0, 'max': 1.0}), 'cycle': ('INT', {'default': 1, 'min': 1, 'max': 10, 'step': 1})}, 'optional': {'detailer_hook': ('DETAILER_HOOK',), 'refiner_basic_pipe_opt': ('BASIC_PIPE',), 'inpaint_model': ('BOOLEAN', {'default': False, 'label_on': 'enabled', 'label_off': 'disabled'}), 'noise_mask_feather': ('INT', {'default': 20, 'min': 0, 'max': 100, 'step': 1})}}
    RETURN_TYPES = ('IMAGE', 'SEGS', 'BASIC_PIPE', 'IMAGE')
    RETURN_NAMES = ('image', 'segs', 'basic_pipe', 'cnet_images')
    OUTPUT_IS_LIST = (False, False, False, True)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Detailer'

    def doit(self, image, segs, guide_size, guide_size_for, max_size, seed, steps, cfg, sampler_name, scheduler, denoise, feather, noise_mask, force_inpaint, basic_pipe, wildcard, refiner_ratio=None, detailer_hook=None, refiner_basic_pipe_opt=None, cycle=1, inpaint_model=False, noise_mask_feather=0):
        if len(image) > 1:
            raise Exception('[Impact Pack] ERROR: DetailerForEach does not allow image batches.\nPlease refer to https://github.com/ltdrdata/ComfyUI-extension-tutorials/blob/Main/ComfyUI-Impact-Pack/tutorial/batching-detailer.md for more information.')
        (model, clip, vae, positive, negative) = basic_pipe
        if refiner_basic_pipe_opt is None:
            (refiner_model, refiner_clip, refiner_positive, refiner_negative) = (None, None, None, None)
        else:
            (refiner_model, refiner_clip, _, refiner_positive, refiner_negative) = refiner_basic_pipe_opt
        (enhanced_img, cropped, cropped_enhanced, cropped_enhanced_alpha, cnet_pil_list, new_segs) = DetailerForEach.do_detail(image, segs, model, clip, vae, guide_size, guide_size_for, max_size, seed, steps, cfg, sampler_name, scheduler, positive, negative, denoise, feather, noise_mask, force_inpaint, wildcard, detailer_hook, refiner_ratio=refiner_ratio, refiner_model=refiner_model, refiner_clip=refiner_clip, refiner_positive=refiner_positive, refiner_negative=refiner_negative, cycle=cycle, inpaint_model=inpaint_model, noise_mask_feather=noise_mask_feather)
        if len(cnet_pil_list) == 0:
            cnet_pil_list = [empty_pil_tensor()]
        return (enhanced_img, new_segs, basic_pipe, cnet_pil_list)
```