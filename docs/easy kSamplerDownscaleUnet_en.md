# Documentation
- Class name: samplerSimpleDownscaleUnet
- Category: EasyUse/Sampler
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The samplerSimpleDownscaleUnet node is designed to facilitate image downscaling and upscaling within a workflow. It selects an appropriate downscaling method and applies it to the input image, then enhances image quality through an upscaling process. This node is particularly useful for optimizing image processing workflows, ensuring images are effectively scaled without loss of detail or clarity.

# Input types
## Required
- pipe
    - The pipe parameter is required because it represents the pipeline containing the image data to be processed. It is through this parameter that the node accesses the image and performs subsequent scaling operations.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- downscale_mode
    - The downscale_mode parameter determines the method used to downscale the image. It can be set to 'Auto' for automatic selection or 'Custom' for manual configuration, which is essential for controlling the scaling process.
    - Comfy dtype: COMBO[None, Auto, Custom]
    - Python dtype: str
- block_number
    - The block_number parameter specifies the number of blocks to use during the downscaling process. It is an important factor affecting the efficiency and outcome of the scaling operation.
    - Comfy dtype: INT
    - Python dtype: int
- downscale_factor
    - The downscale_factor parameter defines the scaling factor used to reduce the image size. It plays a critical role in the downscaling process and directly affects the final dimensions of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - The start_percent parameter establishes the starting percentage of the scaling process. It is an important parameter that helps determine the initial state of the image scaling.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The end_percent parameter sets the ending percentage of the scaling process. It is a key factor in controlling the final appearance of the scaled image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- downscale_after_skip
    - The downscale_after_skip parameter indicates whether downscaling should occur after the skip connections in the network. This may affect the quality of the downscaled image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- downscale_method
    - The downscale_method parameter selects the algorithm used to downscale the image. This is a critical choice that can significantly impact the quality of the resulting image.
    - Comfy dtype: COMBO[bicubic, nearest-exact, bilinear, area, bislerp]
    - Python dtype: str
- upscale_method
    - The upscale_method parameter determines the algorithm used to upscale the image after downscaling. It is important for enhancing image quality during the upscaling phase.
    - Comfy dtype: COMBO[bicubic, nearest-exact, bilinear, area, bislerp]
    - Python dtype: str
- image_output
    - The image_output parameter indicates how the generated image should be handled. It can be set to hide the image, preview the image, save the image, or a combination of these options, which is essential for managing the node's output.
    - Comfy dtype: COMBO[Hide, Preview, Save, Hide/Save, Sender, Sender/Save]
    - Python dtype: str
- link_id
    - The link_id parameter is used to associate the node's output with a specific link or workflow. It is important for tracking and managing the node's output within a larger workflow.
    - Comfy dtype: INT
    - Python dtype: int
- save_prefix
    - The save_prefix parameter specifies the prefix used for saved image files. It is a useful parameter for organizing and identifying saved image files.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- pipe
    - The pipe output provides the processed image pipeline, which includes the scaled image and other related data. It is important because it allows further processing or analysis of the image in subsequent nodes.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- image
    - The image output represents the scaled image obtained after processing by the node. It is a key output for visual inspection and further manipulation of the image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class samplerSimpleDownscaleUnet:

    def __init__(self):
        pass
    upscale_methods = ['bicubic', 'nearest-exact', 'bilinear', 'area', 'bislerp']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'pipe': ('PIPE_LINE',), 'downscale_mode': (['None', 'Auto', 'Custom'], {'default': 'Auto'}), 'block_number': ('INT', {'default': 3, 'min': 1, 'max': 32, 'step': 1}), 'downscale_factor': ('FLOAT', {'default': 2.0, 'min': 0.1, 'max': 9.0, 'step': 0.001}), 'start_percent': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'end_percent': ('FLOAT', {'default': 0.35, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'downscale_after_skip': ('BOOLEAN', {'default': True}), 'downscale_method': (s.upscale_methods,), 'upscale_method': (s.upscale_methods,), 'image_output': (['Hide', 'Preview', 'Save', 'Hide/Save', 'Sender', 'Sender/Save'], {'default': 'Preview'}), 'link_id': ('INT', {'default': 0, 'min': 0, 'max': sys.maxsize, 'step': 1}), 'save_prefix': ('STRING', {'default': 'ComfyUI'})}, 'optional': {'model': ('MODEL',)}, 'hidden': {'tile_size': 'INT', 'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO', 'my_unique_id': 'UNIQUE_ID', 'embeddingsList': (folder_paths.get_filename_list('embeddings'),)}}
    RETURN_TYPES = ('PIPE_LINE', 'IMAGE')
    RETURN_NAMES = ('pipe', 'image')
    OUTPUT_NODE = True
    FUNCTION = 'run'
    CATEGORY = 'EasyUse/Sampler'

    def run(self, pipe, downscale_mode, block_number, downscale_factor, start_percent, end_percent, downscale_after_skip, downscale_method, upscale_method, image_output, link_id, save_prefix, model=None, tile_size=None, prompt=None, extra_pnginfo=None, my_unique_id=None, force_full_denoise=False, disable_noise=False):
        downscale_options = None
        if downscale_mode == 'Auto':
            downscale_options = {'block_number': block_number, 'downscale_factor': None, 'start_percent': 0, 'end_percent': 0.35, 'downscale_after_skip': True, 'downscale_method': 'bicubic', 'upscale_method': 'bicubic'}
        elif downscale_mode == 'Custom':
            downscale_options = {'block_number': block_number, 'downscale_factor': downscale_factor, 'start_percent': start_percent, 'end_percent': end_percent, 'downscale_after_skip': downscale_after_skip, 'downscale_method': downscale_method, 'upscale_method': upscale_method}
        return samplerFull().run(pipe, None, None, None, None, None, image_output, link_id, save_prefix, None, model, None, None, None, None, None, None, tile_size, prompt, extra_pnginfo, my_unique_id, force_full_denoise, disable_noise, downscale_options)
```