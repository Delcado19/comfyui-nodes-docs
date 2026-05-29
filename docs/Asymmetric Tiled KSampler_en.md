# Documentation
- Class name: Asymmetric_Tiled_KSampler
- Category: Sampling/Tiled
- Output node: False
- Repo Ref: https://github.com/FlyingFireCo/tiled_ksampler.git

The Asymmetric_Tiled_KSampler node is designed to perform efficient and customizable sampling operations on the latent space. It achieves this by applying asymmetric tiling to the convolutional layers of the model, allowing generation of images with seamless textures. This node is particularly suitable for creating large, high-resolution images by tiling smaller image segments. It emphasizes flexibility and control during the sampling process, meeting various creative and technical needs without delving into specific details of the underlying method.

# Input types
## Required
- model
    - The model parameter is crucial because it defines the neural network architecture used for the sampling process. It directly affects the node's ability to generate images and the quality of the results.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
## Optional
- seed
    - The seed parameter is important for reproducibility of the sampling process. It ensures that the same initial conditions lead to the same result, which is valuable for debugging and consistent output generation.
    - Comfy dtype: INT
    - Python dtype: int
- tileX
    - The tileX parameter determines the tiling behavior along the X-axis. It is essential for controlling how the image is divided into segments for generating seamless textures.
    - Comfy dtype: INT
    - Python dtype: int
- tileY
    - The tileY parameter controls tiling along the Y-axis, similar to tileX but for the vertical direction. It plays an important role in the overall image composition.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter specifies the number of iterations the sampling process will undergo. It is a key factor determining the level of detail and the appearance of the final output.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter, representing the configuration scale, is used to adjust the sensitivity of the sampling process to the conditioning input. It is a key factor for fine-tuning the output to meet specific requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter selects the sampling method to use from a predefined set of options. It is essential for tailoring the sampling technique to the specific needs of the task at hand.
    - Comfy dtype: STRING
    - Python dtype: str
- scheduler
    - The scheduler parameter determines the scheduling algorithm that will guide the sampling process. It is a significant factor in the efficiency and effectiveness of the sampling operation.
    - Comfy dtype: STRING
    - Python dtype: str
- positive
    - The positive parameter provides positive conditioning information to the model, used to guide the sampling process towards a desired result.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, torch.Tensor]
- negative
    - The negative parameter provides negative conditioning, which helps avoid unwanted features or artifacts in the generated image.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, torch.Tensor]
- latent_image
    - The latent_image parameter is an input to the sampling process, representing the initial state or encoded representation of the image to be generated.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- denoise
    - The denoise parameter adjusts the level of denoising applied during the sampling process. It is an important control for balancing the trade-off between image detail and noise.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- latent
    - The latent output represents the final state of the image in the latent space after the sampling process. It is important because it can be further processed or used to generate the final image.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class Asymmetric_Tiled_KSampler:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'model': ('MODEL',), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'tileX': ('INT', {'default': 1, 'min': 0, 'max': 1}), 'tileY': ('INT', {'default': 1, 'min': 0, 'max': 1}), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'latent_image': ('LATENT',), 'denoise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'sample'
    CATEGORY = 'Sampling/Tiled'

    def apply_asymmetric_tiling(self, model, tileX, tileY):
        for layer in [layer for layer in model.modules() if isinstance(layer, torch.nn.Conv2d)]:
            layer.padding_modeX = 'circular' if tileX else 'constant'
            layer.padding_modeY = 'circular' if tileY else 'constant'
            layer.paddingX = (layer._reversed_padding_repeated_twice[0], layer._reversed_padding_repeated_twice[1], 0, 0)
            layer.paddingY = (0, 0, layer._reversed_padding_repeated_twice[2], layer._reversed_padding_repeated_twice[3])
            print(layer.paddingX, layer.paddingY)

    def __hijackConv2DMethods(self, model, tileX: bool, tileY: bool):
        for layer in [l for l in model.modules() if isinstance(l, torch.nn.Conv2d)]:
            layer.padding_modeX = 'circular' if tileX else 'constant'
            layer.padding_modeY = 'circular' if tileY else 'constant'
            layer.paddingX = (layer._reversed_padding_repeated_twice[0], layer._reversed_padding_repeated_twice[1], 0, 0)
            layer.paddingY = (0, 0, layer._reversed_padding_repeated_twice[2], layer._reversed_padding_repeated_twice[3])

            def make_bound_method(method, current_layer):

                def bound_method(self, *args, **kwargs):
                    return method(current_layer, *args, **kwargs)
                return bound_method
            bound_method = make_bound_method(self.__replacementConv2DConvForward, layer)
            layer._conv_forward = bound_method.__get__(layer, type(layer))

    def __replacementConv2DConvForward(self, layer, input: torch.Tensor, weight: torch.Tensor, bias: Optional[torch.Tensor]):
        working = torch.nn.functional.pad(input, layer.paddingX, mode=layer.padding_modeX)
        working = torch.nn.functional.pad(working, layer.paddingY, mode=layer.padding_modeY)
        return torch.nn.functional.conv2d(working, weight, bias, layer.stride, (0, 0), layer.dilation, layer.groups)

    def __restoreConv2DMethods(self, model):
        for layer in [l for l in model.modules() if isinstance(l, torch.nn.Conv2d)]:
            layer._conv_forward = torch.nn.Conv2d._conv_forward.__get__(layer, torch.nn.Conv2d)

    def sample(self, model, seed, tileX, tileY, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, denoise=1.0):
        self.__hijackConv2DMethods(model.model, tileX == 1, tileY == 1)
        result = nodes.common_ksampler(model, seed, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, denoise=denoise)
        self.__restoreConv2DMethods(model.model)
        return result
```