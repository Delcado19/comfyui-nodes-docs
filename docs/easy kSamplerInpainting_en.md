# Documentation
- Class name: samplerSimpleInpainting
- Category: EasyUse/Sampler
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node facilitates the image inpainting process by using a VAE model to fill in missing or specified areas in the image. It integrates with various conditioning options to refine the inpainting result according to user specifications.

# Input types
## Required
- pipe
    - The pipe object is required because it contains the model and image needed for the inpainting process. It serves as the primary input of the node, guiding the entire operation.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- grow_mask_by
    - This parameter affects the growth of the mask used for inpainting, determining the area that will be affected. It is crucial for defining the extent of the inpainting process.
    - Comfy dtype: INT
    - Python dtype: int
- image_output
    - The image_output parameter determines how the resulting image is handled after the inpainting process. It specifies whether to preview, save, or combine these operations, affecting the output display.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- additional
    - This parameter provides additional conditioning options for the inpainting process, such as differential diffusion or model conditioning. It enhances the flexibility and customization of the inpainting result.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- pipe
    - The updated pipe object contains the inpainting result image along with the modifications made during the process. It serves as the primary output, encapsulating the outcome of the image inpainting operation.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- image
    - The image output represents the inpainting result, which may be previewed, saved, or both depending on the image_output parameter. It is the concrete outcome of the image inpainting process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class samplerSimpleInpainting:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'pipe': ('PIPE_LINE',), 'grow_mask_by': ('INT', {'default': 6, 'min': 0, 'max': 64, 'step': 1}), 'image_output': (['Hide', 'Preview', 'Save', 'Hide/Save', 'Sender', 'Sender/Save'], {'default': 'Preview'}), 'link_id': ('INT', {'default': 0, 'min': 0, 'max': sys.maxsize, 'step': 1}), 'save_prefix': ('STRING', {'default': 'ComfyUI'}), 'additional': (['None', 'Differential Diffusion', 'Only InpaintModelConditioning'], {'default': 'None'})}, 'optional': {'model': ('MODEL',), 'mask': ('MASK',), 'patch': ('INPAINT_PATCH',)}, 'hidden': {'tile_size': 'INT', 'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO', 'my_unique_id': 'UNIQUE_ID', 'embeddingsList': (folder_paths.get_filename_list('embeddings'),)}}
    RETURN_TYPES = ('PIPE_LINE', 'IMAGE', 'VAE')
    RETURN_NAMES = ('pipe', 'image', 'vae')
    OUTPUT_NODE = True
    FUNCTION = 'run'
    CATEGORY = 'EasyUse/Sampler'

    def run(self, pipe, grow_mask_by, image_output, link_id, save_prefix, additional, model=None, mask=None, patch=None, tile_size=None, prompt=None, extra_pnginfo=None, my_unique_id=None, force_full_denoise=False, disable_noise=False):
        fooocus_model = None
        model = model if model is not None else pipe['model']
        latent = pipe['samples'] if 'samples' in pipe else None
        positive = pipe['positive']
        negative = pipe['negative']
        pixels = pipe['images'] if pipe and 'images' in pipe else None
        vae = pipe['vae'] if pipe and 'vae' in pipe else None
        if 'noise_mask' in latent and mask is None:
            mask = latent['noise_mask']
        else:
            if pixels is None:
                raise Exception('No Images found')
            if vae is None:
                raise Exception('No VAE found')
            (latent,) = VAEEncodeForInpaint().encode(vae, pixels, mask, grow_mask_by)
            mask = latent['noise_mask']
        if mask is not None:
            if additional != 'None':
                (positive, negative, latent) = InpaintModelConditioning().encode(positive, negative, pixels, vae, mask)
                if additional == 'Differential Diffusion':
                    cls = ALL_NODE_CLASS_MAPPINGS['DifferentialDiffusion']
                    if cls is not None:
                        (model,) = cls().apply(model)
                    else:
                        raise Exception('Differential Diffusion not found,please update comfyui')
            if patch is not None:
                worker = InpaintWorker(node_name='easy kSamplerInpainting')
                (fooocus_model,) = worker.patch(model, latent, patch)
            new_pipe = {**pipe, 'model': fooocus_model if fooocus_model is not None else model, 'positive': positive, 'negative': negative, 'vae': vae, 'samples': latent, 'loader_settings': pipe['loader_settings']}
        else:
            new_pipe = pipe
        del pipe
        return samplerFull().run(new_pipe, None, None, None, None, None, image_output, link_id, save_prefix, None, None, None, None, None, None, None, None, tile_size, prompt, extra_pnginfo, my_unique_id, force_full_denoise, disable_noise)
```