# Documentation
- Class name: CR_ApplyMultiUpscale
- Category: Comfyroll/Upscale
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_ApplyMultiUpscale is a node designed to improve image resolution through a multi-stage upscaling process. It utilizes a series of upscaling models to sequentially refine image quality. The node can adjust resampling methods and rounding modulus, providing users with fine-grained control over the upscaling process. Its primary goal is to deliver high-resolution images with improved clarity and detail.

# Input types
## Required
- image
    - The input image is the primary data processed by the node. It is the starting point for all upscaling operations, and its quality directly affects the final output. The image parameter is required because it determines the subject of enhancement.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- resampling_method
    - The resampling method determines how the image is interpolated during the upscaling process. It is a critical parameter that affects the smoothness and clarity of the upscaled image, allowing users to choose different algorithms for optimal results.
    - Comfy dtype: COMBO[lanczos, nearest, bilinear, bicubic]
    - Python dtype: str
- supersample
    - The Supersample parameter allows control over oversampling during the upscaling process. It is important because it can enhance image detail and clarity, especially for high-resolution outputs.
    - Comfy dtype: COMBO[true, false]
    - Python dtype: bool
- rounding_modulus
    - The rounding modulus is used to determine the rounding behavior during the upscaling process. It is an important parameter that ensures the dimensions of the upscaled image are consistent and optimized for display or further processing.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_stack
    - The upscale stack is a collection of models and factors that define the sequence of upscaling operations. It is critical because it determines the complexity and order in which models are applied to the image, significantly affecting the final result.
    - Comfy dtype: UPSCALE_STACK
    - Python dtype: List[Tuple[str, float]]

# Output types
- IMAGE
    - The upscaled image is the primary output of the node, representing the final result of the multi-stage upscaling process. It is important because it is the direct result of the node's operation, used for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - The show_help output provides a URL to documentation for further assistance. It is useful for users who need more information about the node's operation or require troubleshooting guidance.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
```
class CR_ApplyMultiUpscale:

    @classmethod
    def INPUT_TYPES(s):
        resampling_methods = ['lanczos', 'nearest', 'bilinear', 'bicubic']
        return {'required': {'image': ('IMAGE',), 'resampling_method': (resampling_methods,), 'supersample': (['true', 'false'],), 'rounding_modulus': ('INT', {'default': 8, 'min': 8, 'max': 1024, 'step': 8}), 'upscale_stack': ('UPSCALE_STACK',)}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('IMAGE', 'show_help')
    FUNCTION = 'apply'
    CATEGORY = icons.get('Comfyroll/Upscale')

    def apply(self, image, resampling_method, supersample, rounding_modulus, upscale_stack):
        pil_img = tensor2pil(image)
        (original_width, original_height) = pil_img.size
        params = list()
        params.extend(upscale_stack)
        for tup in params:
            (upscale_model, rescale_factor) = tup
            print(f'[Info] CR Apply Multi Upscale: Applying {upscale_model} and rescaling by factor {rescale_factor}')
            up_model = load_model(upscale_model)
            up_image = upscale_with_model(up_model, image)
            pil_img = tensor2pil(up_image)
            (upscaled_width, upscaled_height) = pil_img.size
            if upscaled_width == original_width and rescale_factor == 1:
                image = up_image
            else:
                scaled_images = []
                mode = 'rescale'
                resize_width = 1024
                for img in up_image:
                    scaled_images.append(pil2tensor(apply_resize_image(tensor2pil(img), original_width, original_height, rounding_modulus, mode, supersample, rescale_factor, resize_width, resampling_method)))
                image = torch.cat(scaled_images, dim=0)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Upscale-Nodes#cr-apply-multi-upscale'
        return (image, show_help)
```