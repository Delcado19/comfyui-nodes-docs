# Documentation
- Class name: hiresFix
- Category: EasyUse/Fix
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The hiresFix node aims to increase image resolution while maintaining or improving visual quality. It achieves this through various upsampling techniques and allows adjustments for specific requirements. The primary goal is to provide an easy-to-use image enhancement interface that abstracts the complexity of underlying models and algorithms.

# Input types
## Required
- model_name
    - The model_name parameter is critical for selecting the appropriate upsampling model. It determines the specific algorithm used for image enhancement, significantly affecting output quality and performance.
    - Comfy dtype: COMBO
    - Python dtype: List[str]
- rescale_after_model
    - The rescale_after_model parameter determines whether to resize the image after upsampling. This affects the final dimensions of the processed image and may be critical for meeting specific display or print requirements.
    - Comfy dtype: BOOL
    - Python dtype: bool
- rescale_method
    - The rescale_method parameter defines the technique used for resizing the image after upsampling. It plays a key role in maintaining the image's aspect ratio and overall visual coherence.
    - Comfy dtype: COMBO
    - Python dtype: str
- percent
    - The percentage parameter specifies the percentage by which the image should be scaled up when using 'by percentage' resizing. It directly affects the final image size, with higher values resulting in significant dimension increases.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- pipe
    - The pipe output provides a structured representation of the processing pipeline, including the model and parameters used. It is essential for maintaining consistency and reproducibility in image enhancement workflows.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- image
    - The image output contains the enhanced, high-resolution version of the input image. It is the primary result of the node's operation and is critical for visual verification of the upsampling process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- latent
    - The latent output represents an encoded version of the image that can be used for further processing or analysis. It serves as an intermediate representation capturing the essential features of the image.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class hiresFix:
    upscale_methods = ['nearest-exact', 'bilinear', 'area', 'bicubic', 'lanczos', 'bislerp']
    crop_methods = ['disabled', 'center']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model_name': (folder_paths.get_filename_list('upscale_models'),), 'rescale_after_model': ([False, True], {'default': True}), 'rescale_method': (s.upscale_methods,), 'rescale': (['by percentage', 'to Width/Height', 'to longer side - maintain aspect'],), 'percent': ('INT', {'default': 50, 'min': 0, 'max': 1000, 'step': 1}), 'width': ('INT', {'default': 1024, 'min': 64, 'max': MAX_RESOLUTION, 'step': 8}), 'height': ('INT', {'default': 1024, 'min': 64, 'max': MAX_RESOLUTION, 'step': 8}), 'longer_side': ('INT', {'default': 1024, 'min': 64, 'max': MAX_RESOLUTION, 'step': 8}), 'crop': (s.crop_methods,), 'image_output': (['Hide', 'Preview', 'Save', 'Hide/Save', 'Sender', 'Sender/Save'], {'default': 'Preview'}), 'link_id': ('INT', {'default': 0, 'min': 0, 'max': sys.maxsize, 'step': 1}), 'save_prefix': ('STRING', {'default': 'ComfyUI'})}, 'optional': {'pipe': ('PIPE_LINE',), 'image': ('IMAGE',), 'vae': ('VAE',)}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO', 'my_unique_id': 'UNIQUE_ID'}}
    RETURN_TYPES = ('PIPE_LINE', 'IMAGE', 'LATENT')
    RETURN_NAMES = ('pipe', 'image', 'latent')
    FUNCTION = 'upscale'
    CATEGORY = 'EasyUse/Fix'
    OUTPUT_NODE = True

    def vae_encode_crop_pixels(self, pixels):
        x = pixels.shape[1] // 8 * 8
        y = pixels.shape[2] // 8 * 8
        if pixels.shape[1] != x or pixels.shape[2] != y:
            x_offset = pixels.shape[1] % 8 // 2
            y_offset = pixels.shape[2] % 8 // 2
            pixels = pixels[:, x_offset:x + x_offset, y_offset:y + y_offset, :]
        return pixels

    def upscale(self, model_name, rescale_after_model, rescale_method, rescale, percent, width, height, longer_side, crop, image_output, link_id, save_prefix, pipe=None, image=None, vae=None, prompt=None, extra_pnginfo=None, my_unique_id=None):
        new_pipe = {}
        if pipe is not None:
            image = image if image is not None else pipe['images']
            vae = vae if vae is not None else pipe.get('vae')
        elif image is None or vae is None:
            raise ValueError('pipe or image or vae missing.')
        model_path = folder_paths.get_full_path('upscale_models', model_name)
        sd = comfy.utils.load_torch_file(model_path, safe_load=True)
        upscale_model = model_loading.load_state_dict(sd).eval()
        device = comfy.model_management.get_torch_device()
        upscale_model.to(device)
        in_img = image.movedim(-1, -3).to(device)
        tile = 128 + 64
        overlap = 8
        steps = in_img.shape[0] * comfy.utils.get_tiled_scale_steps(in_img.shape[3], in_img.shape[2], tile_x=tile, tile_y=tile, overlap=overlap)
        pbar = comfy.utils.ProgressBar(steps)
        s = comfy.utils.tiled_scale(in_img, lambda a: upscale_model(a), tile_x=tile, tile_y=tile, overlap=overlap, upscale_amount=upscale_model.scale, pbar=pbar)
        upscale_model.cpu()
        s = torch.clamp(s.movedim(-3, -1), min=0, max=1.0)
        if rescale_after_model == True:
            samples = s.movedim(-1, 1)
            orig_height = samples.shape[2]
            orig_width = samples.shape[3]
            if rescale == 'by percentage' and percent != 0:
                height = percent / 100 * orig_height
                width = percent / 100 * orig_width
                if width > MAX_RESOLUTION:
                    width = MAX_RESOLUTION
                if height > MAX_RESOLUTION:
                    height = MAX_RESOLUTION
                width = easySampler.enforce_mul_of_64(width)
                height = easySampler.enforce_mul_of_64(height)
            elif rescale == 'to longer side - maintain aspect':
                longer_side = easySampler.enforce_mul_of_64(longer_side)
                if orig_width > orig_height:
                    (width, height) = (longer_side, easySampler.enforce_mul_of_64(longer_side * orig_height / orig_width))
                else:
                    (width, height) = (easySampler.enforce_mul_of_64(longer_side * orig_width / orig_height), longer_side)
            s = comfy.utils.common_upscale(samples, width, height, rescale_method, crop)
            s = s.movedim(1, -1)
        pixels = self.vae_encode_crop_pixels(s)
        t = vae.encode(pixels[:, :, :, :3])
        if pipe is not None:
            new_pipe = {'model': pipe['model'], 'positive': pipe['positive'], 'negative': pipe['negative'], 'vae': vae, 'clip': pipe['clip'], 'samples': {'samples': t}, 'images': s, 'seed': pipe['seed'], 'loader_settings': {**pipe['loader_settings']}}
            del pipe
        else:
            new_pipe = {}
        results = easySave(s, save_prefix, image_output, prompt, extra_pnginfo)
        if image_output in ('Sender', 'Sender/Save'):
            PromptServer.instance.send_sync('img-send', {'link_id': link_id, 'images': results})
        if image_output in ('Hide', 'Hide/Save'):
            return (new_pipe, s, {'samples': t})
        return {'ui': {'images': results}, 'result': (new_pipe, s, {'samples': t})}
```