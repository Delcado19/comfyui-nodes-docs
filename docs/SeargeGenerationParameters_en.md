# Documentation
- Class name: SeargeGenerationParameters
- Category: UI_INPUTS
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This type of node encapsulates the parameters required for image generation through search methods. It simplifies the configuration process by allowing users to specify key attributes such as seed, image dimensions, and sampling presets, which collectively influence the quality and characteristics of the generated image.

# Input types
## Required
- seed
    - The seed parameter is crucial for initializing the random number generator, ensuring reproducibility of the image generation process. It determines the starting point for the algorithm's random elements, thus playing a key role in determining the uniqueness and consistency of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- image_size_preset
    - The image size preset parameter allows users to select a predefined resolution for the generated image. This choice directly affects the level of detail in the image and the computational resources required for image generation, with higher resolutions demanding more processing power.
    - Comfy dtype: COMBO
    - Python dtype: str
- image_width
    - The image width parameter specifies the horizontal dimension of the generated image. It is a key factor in determining the aspect ratio and overall appearance of the image, and works together with the image height parameter to determine the final dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- image_height
    - The image height parameter defines the vertical dimension of the generated image. Together with the image width, it sets the canvas size for the image generation process, affecting the scale and layout of the content.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter refers to the number of iterations the generation process will undergo. More steps typically produce finer and more detailed images, but also increase the computational cost and time required for generation.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The configuration parameter, commonly denoted as 'cfg', is a floating-point value used to adjust the balance between image quality and generation speed. Lower values may produce images faster but with less detail, while higher values can enhance detail at the cost of processing time.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_preset
    - The sampler preset parameter enables users to choose from a set of predefined sampling strategies. Each preset is designed to optimize the generation process for specific types of content or desired outcomes, influencing the diversity and consistency of the generated image.
    - Comfy dtype: COMBO
    - Python dtype: str
- sampler_name
    - The sampler name parameter is essential for selecting the specific algorithm used for image generation. Different samplers offer different methods of image refinement, affecting the visual style and quality of the final output.
    - Comfy dtype: COMBO
    - Python dtype: str
- scheduler
    - The scheduler parameter determines the optimization strategy employed during the image generation process. It regulates the balance between exploration and exploitation, thereby influencing the convergence speed and quality of the generated image.
    - Comfy dtype: COMBO
    - Python dtype: str
- base_vs_refiner_ratio
    - The base-to-refiner ratio parameter adjusts the balance between the base and refinement stages of image generation. It affects the allocation of computational resources between the initial creation of the image and the subsequent enhancement of image details.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- data
    - The data output of this node represents a structured information flow containing the generation parameters. It serves as the blueprint for the image generation process, encapsulating all user-defined settings and guiding the algorithm to produce the desired image.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: SRG_DATA_STREAM

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeGenerationParameters:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551600}), 'image_size_preset': (UI.RESOLUTION_PRESETS,), 'image_width': ('INT', {'default': 1024, 'min': 0, 'max': UI.MAX_RESOLUTION, 'step': 8}), 'image_height': ('INT', {'default': 1024, 'min': 0, 'max': UI.MAX_RESOLUTION, 'step': 8}), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 200}), 'cfg': ('FLOAT', {'default': 7.0, 'min': 0.5, 'max': 30.0, 'step': 0.5}), 'sampler_preset': (UI.SAMPLER_PRESETS,), 'sampler_name': (UI.SAMPLERS, {'default': 'dpmpp_2m'}), 'scheduler': (UI.SCHEDULERS, {'default': 'karras'}), 'base_vs_refiner_ratio': ('FLOAT', {'default': 0.8, 'min': 0.0, 'max': 1.0, 'step': 0.05})}, 'optional': {'data': ('SRG_DATA_STREAM',)}}
    RETURN_TYPES = ('SRG_DATA_STREAM',)
    RETURN_NAMES = ('data',)
    FUNCTION = 'get'
    CATEGORY = UI.CATEGORY_UI_INPUTS

    @staticmethod
    def create_dict(seed, image_size_preset, image_width, image_height, steps, cfg, sampler_preset, sampler_name, scheduler, base_vs_refiner_ratio):
        if sampler_preset == UI.SAMPLER_PRESET_DPMPP_2M_KARRAS:
            (sampler_name, scheduler) = ('dpmpp_2m', 'karras')
        elif sampler_preset == UI.SAMPLER_PRESET_EULER_A:
            (sampler_name, scheduler) = ('euler_ancestral', 'normal')
        elif sampler_preset == UI.SAMPLER_PRESET_DPMPP_2M_SDE_KARRAS:
            (sampler_name, scheduler) = ('dpmpp_2m_sde', 'karras')
        elif sampler_preset == UI.SAMPLER_PRESET_DPMPP_3M_SDE_EXPONENTIAL:
            (sampler_name, scheduler) = ('dpmpp_3m_sde', 'exponential')
        elif sampler_preset == UI.SAMPLER_PRESET_DDIM_UNIFORM:
            (sampler_name, scheduler) = ('ddim', 'ddim_uniform')
        return {UI.F_SEED: seed, UI.F_IMAGE_SIZE_PRESET: image_size_preset, UI.F_IMAGE_WIDTH: image_width, UI.F_IMAGE_HEIGHT: image_height, UI.F_STEPS: steps, UI.F_CFG: round(cfg, 3), UI.F_SAMPLER_PRESET: sampler_preset, UI.F_SAMPLER_NAME: sampler_name, UI.F_SCHEDULER: scheduler, UI.F_BASE_VS_REFINER_RATIO: round(base_vs_refiner_ratio, 3)}

    def get(self, seed, image_size_preset, image_width, image_height, steps, cfg, sampler_preset, sampler_name, scheduler, base_vs_refiner_ratio, data=None):
        if data is None:
            data = {}
        data[UI.S_GENERATION_PARAMETERS] = self.create_dict(seed, image_size_preset, image_width, image_height, steps, cfg, sampler_preset, sampler_name, scheduler, base_vs_refiner_ratio)
        return (data,)
```