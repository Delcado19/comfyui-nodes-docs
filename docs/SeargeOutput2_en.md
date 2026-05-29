# Documentation
- Class name: SeargeOutput2
- Category: Searge/_deprecated_/UI/Outputs
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node is designed to process and demultiplex input parameters, assigning them to specific outputs to meet various post-processing and analysis tasks.

# Input types
## Required
- parameters
    - This parameter is a dictionary containing all inputs required for the node's operation. It is crucial because it determines the node's behavior and the data it processes.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]

# Output types
- parameters
    - The original input parameters are passed as the basis for subsequent operations.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]
- seed
    - The seed value is essential for ensuring reproducibility of the output generation process.
    - Comfy dtype: Int
    - Python dtype: int
- image_width
    - This output defines the width of the generated image, which is critical for image processing and display purposes.
    - Comfy dtype: Int
    - Python dtype: int
- image_height
    - This output specifies the height of the image, which is a key factor in determining image dimensions and layout.
    - Comfy dtype: Int
    - Python dtype: int
- steps
    - The steps output indicates the sequence or progress of the process, which may affect the complexity and duration of the operation.
    - Comfy dtype: Int
    - Python dtype: int
- cfg
    - The configuration parameters hold settings crucial for adjusting node behavior and output characteristics.
    - Comfy dtype: Float
    - Python dtype: float
- sampler_name
    - The sampler name is a string that identifies the specific sampling method used, which is important for the accuracy and diversity of results.
    - Comfy dtype: Str
    - Python dtype: str
- scheduler
    - The scheduler name output provides information about the scheduling method, which is crucial for resource management and timing.
    - Comfy dtype: Str
    - Python dtype: str
- save_image
    - This boolean output determines whether to save the image, which is significant for preserving operation results.
    - Comfy dtype: Bool
    - Python dtype: bool
- save_directory
    - The save directory output specifies where the results will be stored, which is essential for organizing and accessing output data.
    - Comfy dtype: Str
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeOutput2:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'parameters': ('PARAMETERS',)}}
    RETURN_TYPES = ('PARAMETERS', 'INT', 'INT', 'INT', 'INT', 'FLOAT', 'SAMPLER_NAME', 'SCHEDULER_NAME', 'ENABLE_STATE', 'SAVE_FOLDER')
    RETURN_NAMES = ('parameters', 'seed', 'image_width', 'image_height', 'steps', 'cfg', 'sampler_name', 'scheduler', 'save_image', 'save_directory')
    FUNCTION = 'demux'
    CATEGORY = 'Searge/_deprecated_/UI/Outputs'

    def demux(self, parameters):
        seed = parameters['seed']
        image_width = parameters['image_width']
        image_height = parameters['image_height']
        steps = parameters['steps']
        cfg = parameters['cfg']
        sampler_name = parameters['sampler_name']
        scheduler = parameters['scheduler']
        save_image = parameters['save_image']
        save_directory = parameters['save_directory']
        return (parameters, seed, image_width, image_height, steps, cfg, sampler_name, scheduler, save_image, save_directory)
```