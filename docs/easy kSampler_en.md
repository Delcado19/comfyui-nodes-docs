# Documentation
- Class name: samplerSimple
- Category: EasyUse/Sampler
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node simplifies the sampling process by abstracting complex configurations, allowing users to generate images with minimal input. It focuses on ease of use and operational simplicity, providing a direct interface for image generation tasks.

# Input types
## Required
- pipe
    - The pipe parameter serves as the primary data source and settings source for node operations. It is critical because it contains the context required for the sampling process, including model information and previous processing steps.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict
- image_output
    - This parameter determines how the generated image should be handled after processing. It is significant in determining the output format and subsequent actions such as displaying, saving, or sending the image.
    - Comfy dtype: COMBO
    - Python dtype: Union[str, None]
- link_id
    - The link_id parameter is essential for establishing connections between different components within the system, ensuring correct data flow to the appropriate destination.
    - Comfy dtype: INT
    - Python dtype: int
- save_prefix
    - This parameter defines the prefix for saved files, which is important for organizing and identifying outputs in directories that may contain a large number of outputs.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- model
    - The model parameter provides the neural network architecture used for the sampling process. It is optional but can significantly influence the quality and characteristics of the generated image.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- tile_size
    - The tile_size parameter is relevant when generating tiled images, affecting how the output is segmented and constructed. It plays a role in the efficiency and appearance of the final image.
    - Comfy dtype: INT
    - Python dtype: int
- prompt
    - The prompt parameter is a text description that guides the image generation. It is important for steering the creative process toward the desired result.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - This parameter contains additional information related to PNG images, which can be used to refine the image generation process.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict
- my_unique_id
    - The my_unique_id parameter is used to track and manage individual instances of node operations, ensuring each operation can be uniquely identified and referenced.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- pipe
    - The pipe output is a structured collection of data including the updated model, samples, and other relevant information after the sampling process. It is critical for passing the system state to subsequent nodes or for review.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict
- image
    - The image output contains the generated visual content, representing the primary result of the node operation. It is important because it demonstrates the outcome of the sampling process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class samplerSimple:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'pipe': ('PIPE_LINE',), 'image_output': (['Hide', 'Preview', 'Save', 'Hide/Save', 'Sender', 'Sender/Save'], {'default': 'Preview'}), 'link_id': ('INT', {'default': 0, 'min': 0, 'max': sys.maxsize, 'step': 1}), 'save_prefix': ('STRING', {'default': 'ComfyUI'})}, 'optional': {'model': ('MODEL',)}, 'hidden': {'tile_size': 'INT', 'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO', 'my_unique_id': 'UNIQUE_ID', 'embeddingsList': (folder_paths.get_filename_list('embeddings'),)}}
    RETURN_TYPES = ('PIPE_LINE', 'IMAGE')
    RETURN_NAMES = ('pipe', 'image')
    OUTPUT_NODE = True
    FUNCTION = 'run'
    CATEGORY = 'EasyUse/Sampler'

    def run(self, pipe, image_output, link_id, save_prefix, model=None, tile_size=None, prompt=None, extra_pnginfo=None, my_unique_id=None, force_full_denoise=False, disable_noise=False):
        return samplerFull().run(pipe, None, None, None, None, None, image_output, link_id, save_prefix, None, model, None, None, None, None, None, None, None, prompt, extra_pnginfo, my_unique_id, force_full_denoise, disable_noise)
```