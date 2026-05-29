# Documentation
- Class name: LDSRUpscaler
- Category: Flowty LDSR
- Output node: False
- Repo Ref: https://github.com/flowtyone/ComfyUI-Flowty-LDSR.git

The 'upscale' method of the LDSRUpscaler node aims to enhance the resolution of input images using a pretrained model. It leverages the capabilities of the LDSR algorithm to perform super-resolution, which increases the spatial resolution of images while maintaining or improving image quality. This method is particularly suitable for upscaling images with high levels of detail, such as photographs or digital artwork.

# Input types
## Required
- model
    - The 'model' parameter is the path to the pretrained model used for upscaling. It is critical to the node's functionality because it determines the specific model weights and architecture that will be applied to the input image for super-resolution.
    - Comfy dtype: STRING
    - Python dtype: str
- images
    - The 'images' parameter is the collection of images that the node will process for upscaling. This input is essential because it represents the data that will be transformed by the node to achieve higher resolution.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image.Image]
- steps
    - The 'steps' parameter defines the number of diffusion steps used in the super-resolution process. It affects the quality of the upscaled image and the computation time. More steps generally yield better results but also increase processing time.
    - Comfy dtype: INT
    - Python dtype: int
- pre_downscale
    - The 'pre_downscale' parameter specifies whether and by what proportion to downscale the image before the super-resolution process. This is an optional setting that can be used to control the initial resolution of the input image.
    - Comfy dtype: STRING
    - Python dtype: str
- post_downscale
    - The 'post_downscale' parameter determines whether and how to downscale the image after the super-resolution process. It allows control over the final resolution of the output image.
    - Comfy dtype: STRING
    - Python dtype: str
- downsample_method
    - The 'downsample_method' parameter selects the downscaling algorithm used when resizing images. It may affect the quality of the downscaled image, with options typically including 'Nearest' or 'Lanczos'.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- images
    - The 'images' output parameter contains the upscaled images produced by the super-resolution process. These are the primary results of the node's execution, representing the transformed data with increased resolution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class LDSRUpscaler:

    @classmethod
    def INPUT_TYPES(s):
        model_list = get_filename_list('upscale_models')
        candidates = [name for name in model_list if 'last.ckpt' in name]
        if len(candidates) > 0:
            default_path = candidates[0]
        else:
            default_path = 'last.ckpt'
        return {'required': {'model': (model_list, {'default': default_path}), 'images': ('IMAGE',), 'steps': (['25', '50', '100', '250', '500', '1000'], {'default': '100'}), 'pre_downscale': (['None', '1/2', '1/4'], {'default': 'None'}), 'post_downscale': (['None', 'Original Size', '1/2', '1/4'], {'default': 'None'}), 'downsample_method': (['Nearest', 'Lanczos'], {'default': 'Lanczos'})}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('images',)
    FUNCTION = 'upscale'
    CATEGORY = 'Flowty LDSR'

    def upscale(self, model, images, steps, pre_downscale='None', post_downscale='None', downsample_method='Lanczos'):
        model_path = get_full_path('upscale_models', model)
        pbar = ProgressBar(int(steps))
        p = {'prev': 0}

        def prog(i):
            i = i + 1
            if i < p['prev']:
                p['prev'] = 0
            pbar.update(i - p['prev'])
            p['prev'] = i
        ldsr = LDSR(modelPath=model_path, torchdevice=get_torch_device(), on_progress=prog)
        outputs = []
        for image in images:
            outputs.append(ldsr.superResolution(image, int(steps), pre_downscale, post_downscale, downsample_method))
        return (torch.stack(outputs),)
```