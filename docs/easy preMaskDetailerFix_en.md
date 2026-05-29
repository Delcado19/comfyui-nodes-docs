# Documentation
- Class name: preMaskDetailerFix
- Category: EasyUse/Fix
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

preMaskDetailerFix is a node designed to enhance detail preservation and editing capabilities in image processing workflows. It focuses on refining the mask application process to ensure accurate targeting of intended image regions. The node operates by considering various parameters that guide its behavior, such as mask specifications, guide size, and editing configurations. Conceptually, it centers on improving fidelity and precision in image manipulation tasks, without being limited to specific implementation details.

# Input types
## Required
- pipe
    - The 'pipe' parameter is critical because it carries the entire state of the image processing pipeline, including the model, image, and other settings. It is essential for the node's proper functionality and continuity of the processing workflow.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict
- mask
    - The 'mask' parameter is essential for defining the region of interest in the image that needs enhancement or modification. It directly affects the node's ability to apply detailed restoration to the target area.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- guide_size
    - The 'guide_size' parameter is important because it determines the size of the guide map used to refine the detail restoration process. It influences how the node identifies and processes areas requiring attention.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- pipe
    - The 'pipe' output is an updated version of the input pipeline, now with detail restoration applied and settings for further processing. This is a critical output as it allows the pipeline to continue using enhanced image data.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict

# Usage tips
- Infra type: GPU

# Source code
```
class preMaskDetailerFix:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'pipe': ('PIPE_LINE',), 'mask': ('MASK',), 'guide_size': ('FLOAT', {'default': 384, 'min': 64, 'max': MAX_RESOLUTION, 'step': 8}), 'guide_size_for': ('BOOLEAN', {'default': True, 'label_on': 'bbox', 'label_off': 'crop_region'}), 'max_size': ('FLOAT', {'default': 1024, 'min': 64, 'max': MAX_RESOLUTION, 'step': 8}), 'mask_mode': ('BOOLEAN', {'default': True, 'label_on': 'masked only', 'label_off': 'whole'}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'denoise': ('FLOAT', {'default': 0.5, 'min': 0.0001, 'max': 1.0, 'step': 0.01}), 'feather': ('INT', {'default': 5, 'min': 0, 'max': 100, 'step': 1}), 'crop_factor': ('FLOAT', {'default': 3.0, 'min': 1.0, 'max': 10, 'step': 0.1}), 'drop_size': ('INT', {'min': 1, 'max': MAX_RESOLUTION, 'step': 1, 'default': 10}), 'refiner_ratio': ('FLOAT', {'default': 0.2, 'min': 0.0, 'max': 1.0}), 'batch_size': ('INT', {'default': 1, 'min': 1, 'max': 100}), 'cycle': ('INT', {'default': 1, 'min': 1, 'max': 10, 'step': 1})}, 'optional': {'optional_image': ('IMAGE',), 'inpaint_model': ('BOOLEAN', {'default': False, 'label_on': 'enabled', 'label_off': 'disabled'}), 'noise_mask_feather': ('INT', {'default': 20, 'min': 0, 'max': 100, 'step': 1})}}
    RETURN_TYPES = ('PIPE_LINE',)
    RETURN_NAMES = ('pipe',)
    OUTPUT_IS_LIST = (False,)
    FUNCTION = 'doit'
    CATEGORY = 'EasyUse/Fix'

    def doit(self, pipe, mask, guide_size, guide_size_for, max_size, mask_mode, seed, steps, cfg, sampler_name, scheduler, denoise, feather, crop_factor, drop_size, refiner_ratio, batch_size, cycle, optional_image=None, inpaint_model=False, noise_mask_feather=20):
        model = pipe['model'] if 'model' in pipe else None
        if model is None:
            raise Exception(f"[ERROR] pipe['model'] is missing")
        clip = pipe['clip'] if 'clip' in pipe else None
        if clip is None:
            raise Exception(f"[ERROR] pipe['clip'] is missing")
        vae = pipe['vae'] if 'vae' in pipe else None
        if vae is None:
            raise Exception(f"[ERROR] pipe['vae'] is missing")
        if optional_image is not None:
            images = optional_image
        else:
            images = pipe['images'] if 'images' in pipe else None
            if images is None:
                raise Exception(f"[ERROR] pipe['image'] is missing")
        positive = pipe['positive'] if 'positive' in pipe else None
        if positive is None:
            raise Exception(f"[ERROR] pipe['positive'] is missing")
        negative = pipe['negative'] if 'negative' in pipe else None
        if negative is None:
            raise Exception(f"[ERROR] pipe['negative'] is missing")
        latent = pipe['samples'] if 'samples' in pipe else None
        if latent is None:
            raise Exception(f"[ERROR] pipe['samples'] is missing")
        if 'noise_mask' not in latent:
            if images is None:
                raise Exception('No Images found')
            if vae is None:
                raise Exception('No VAE found')
            x = images.shape[1] // 8 * 8
            y = images.shape[2] // 8 * 8
            mask = torch.nn.functional.interpolate(mask.reshape((-1, 1, mask.shape[-2], mask.shape[-1])), size=(images.shape[1], images.shape[2]), mode='bilinear')
            pixels = images.clone()
            if pixels.shape[1] != x or pixels.shape[2] != y:
                x_offset = pixels.shape[1] % 8 // 2
                y_offset = pixels.shape[2] % 8 // 2
                pixels = pixels[:, x_offset:x + x_offset, y_offset:y + y_offset, :]
                mask = mask[:, :, x_offset:x + x_offset, y_offset:y + y_offset]
            mask_erosion = mask
            m = (1.0 - mask.round()).squeeze(1)
            for i in range(3):
                pixels[:, :, :, i] -= 0.5
                pixels[:, :, :, i] *= m
                pixels[:, :, :, i] += 0.5
            t = vae.encode(pixels)
            latent = {'samples': t, 'noise_mask': mask_erosion[:, :, :x, :y].round()}
        loader_settings = pipe['loader_settings'] if 'loader_settings' in pipe else {}
        new_pipe = {'images': images, 'model': model, 'clip': clip, 'vae': vae, 'positive': positive, 'negative': negative, 'seed': seed, 'mask': mask, 'loader_settings': loader_settings, 'detail_fix_settings': {'guide_size': guide_size, 'guide_size_for': guide_size_for, 'max_size': max_size, 'seed': seed, 'steps': steps, 'cfg': cfg, 'sampler_name': sampler_name, 'scheduler': scheduler, 'denoise': denoise, 'feather': feather, 'crop_factor': crop_factor, 'drop_size': drop_size, 'refiner_ratio': refiner_ratio, 'batch_size': batch_size, 'cycle': cycle}, 'mask_settings': {'mask_mode': mask_mode, 'inpaint_model': inpaint_model, 'noise_mask_feather': noise_mask_feather}}
        del pipe
        return (new_pipe,)
```