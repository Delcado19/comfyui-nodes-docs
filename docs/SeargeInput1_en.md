# Documentation
- Class name: SeargeInput1
- Category: Searge/_deprecated_/UI/Inputs
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

The SeargeInput1 node serves as the input interface for the Searge system, used to collect and organize various prompts and optional inputs. It simplifies the input process by allowing users to specify primary, secondary, style, and negative prompts, along with optional images, masks, and additional parameters, encapsulating them into a structured format for downstream tasks.

# Input types
## Required
- main_prompt
    - The main_prompt parameter is essential for defining the primary context or theme of the input. It is a string that can span multiple lines, allowing detailed descriptions, which is critical for the node's operation and generating the desired output.
    - Comfy dtype: STRING
    - Python dtype: str
- secondary_prompt
    - The secondary_prompt provides additional context or details that complement the main_prompt. It enhances the node's ability to understand and process the input, contributing to more nuanced output.
    - Comfy dtype: STRING
    - Python dtype: str
- style_prompt
    - The style_prompt parameter is used to specify the style elements or tone that the output should embody. It is a key component in shaping the aesthetic or thematic quality of the final result.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - The negative_prompt is used to indicate what aspects or features should be avoided in the output. It plays an important role in guiding the node to exclude unwanted elements from the final product.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_style
    - The negative_style parameter complements the negative_prompt by further specifying styles or qualities to be omitted. It is an essential tool for fine-tuning the output to meet specific requirements.
    - Comfy dtype: STRING
    - Python dtype: str
- inputs
    - The inputs parameter is an optional dictionary that can contain other parameters used by the node. It provides flexibility in the node's operation, allowing customization based on specific use cases.
    - Comfy dtype: PARAMETER_INPUTS
    - Python dtype: Dict[str, Any]
- image
    - The image parameter is an optional input that allows visual data to be included for processing. It can significantly influence the node's execution and the nature of the output when dealing with image-related tasks.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- mask
    - The mask parameter is an optional input used to define areas of an image that should be treated differently or ignored during processing. It is essential for tasks requiring selective manipulation of visual data.
    - Comfy dtype: MASK
    - Python dtype: np.ndarray

# Output types
- inputs
    - The 'inputs' output is a structured collection of parameters encapsulating the prompts and optional inputs provided by the node. It serves as the foundation for subsequent processing steps within the Searge system.
    - Comfy dtype: PARAMETER_INPUTS
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeInput1:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'main_prompt': ('STRING', {'multiline': True, 'default': ''}), 'secondary_prompt': ('STRING', {'multiline': True, 'default': ''}), 'style_prompt': ('STRING', {'multiline': True, 'default': ''}), 'negative_prompt': ('STRING', {'multiline': True, 'default': ''}), 'negative_style': ('STRING', {'multiline': True, 'default': ''})}, 'optional': {'inputs': ('PARAMETER_INPUTS',), 'image': ('IMAGE',), 'mask': ('MASK',)}}
    RETURN_TYPES = ('PARAMETER_INPUTS',)
    RETURN_NAMES = ('inputs',)
    FUNCTION = 'mux'
    CATEGORY = 'Searge/_deprecated_/UI/Inputs'

    def mux(self, main_prompt, secondary_prompt, style_prompt, negative_prompt, negative_style, inputs=None, image=None, mask=None):
        if inputs is None:
            parameters = {}
        else:
            parameters = inputs
        parameters['main_prompt'] = main_prompt
        parameters['secondary_prompt'] = secondary_prompt
        parameters['style_prompt'] = style_prompt
        parameters['negative_prompt'] = negative_prompt
        parameters['negative_style'] = negative_style
        parameters['image'] = image
        parameters['mask'] = mask
        return (parameters,)
```