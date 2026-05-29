# Documentation
- Class name: SeargeOutput1
- Category: Searge/_deprecated_/UI/Outputs
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node class serves as an interface for demultiplexing input parameters into different outputs, facilitating the organization and flow of data within the system.

# Input types
## Required
- parameters
    - Parameter input is critical to the node's operation, containing various prompts and images required for node operations. It is the primary source of information for the demultiplexing process.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]

# Output types
- parameters
    - The 'parameters' output is a reflection of the input, marking the integrity of data passing through the node.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]
- main_prompt
    - The 'main_prompt' output represents the primary text input that guides subsequent processing or content generation within the system.
    - Comfy dtype: String
    - Python dtype: str
- secondary_prompt
    - This output provides supplementary text content to enrich the data for further system operations.
    - Comfy dtype: String
    - Python dtype: str
- style_prompt
    - The 'style_prompt' output is used to define style elements or themes to be incorporated into system processing or content generation.
    - Comfy dtype: String
    - Python dtype: str
- negative_prompt
    - This output contains information that the system should avoid or exclude during processing or content generation.
    - Comfy dtype: String
    - Python dtype: str
- negative_style
    - The 'negative_style' output specifies style elements or themes that the system should consciously avoid when generating content.
    - Comfy dtype: String
    - Python dtype: str
- image
    - The 'image' output is a visual element that can be provided as input or generated within the system, influencing subsequent visual processing or content creation.
    - Comfy dtype: Image
    - Python dtype: PIL.Image
- mask
    - The 'mask' output is a binary or multi-class array that indicates which parts of the image or content should be operated on or protected during processing.
    - Comfy dtype: Mask
    - Python dtype: numpy.ndarray

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeOutput1:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'parameters': ('PARAMETERS',)}}
    RETURN_TYPES = ('PARAMETERS', 'STRING', 'STRING', 'STRING', 'STRING', 'STRING', 'IMAGE', 'MASK')
    RETURN_NAMES = ('parameters', 'main_prompt', 'secondary_prompt', 'style_prompt', 'negative_prompt', 'negative_style', 'image', 'mask')
    FUNCTION = 'demux'
    CATEGORY = 'Searge/_deprecated_/UI/Outputs'

    def demux(self, parameters):
        main_prompt = parameters['main_prompt']
        secondary_prompt = parameters['secondary_prompt']
        style_prompt = parameters['style_prompt']
        negative_prompt = parameters['negative_prompt']
        negative_style = parameters['negative_style']
        image = parameters['image']
        mask = parameters['mask']
        return (parameters, main_prompt, secondary_prompt, style_prompt, negative_prompt, negative_style, image, mask)
```