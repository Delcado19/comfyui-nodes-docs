# Documentation
- Class name: SeargeInput3
- Category: Searge/_deprecated_/UI/Inputs
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node acts as a multiplexer for various input parameters, simplifying the process of integrating diverse configurations into the system. It is designed to handle both required and optional inputs, ensuring efficient transfer of necessary data without information loss.

# Input types
## Required
- base_ratio
    - The base scale parameter is critical for establishing the fundamental scaling ratio of the input data. It significantly affects the initial dimensions of the processed output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- refiner_strength
    - The refinement intensity determines the strength of post-processing steps applied to the scaled data. It influences the final quality and detail of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- refiner_intensity
    - The refinement intensity setting adjusts the level of detail preservation during the upscaling process. It is essential for balancing performance and output clarity.
    - Comfy dtype: ENUM
    - Python dtype: Enum
- precondition_steps
    - The number of preprocessing steps determines the complexity of preliminary processing. It is a key factor in optimizing the efficiency and effectiveness of the upscaling process.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - The batch size affects the number of data points processed simultaneously. It is a critical parameter for managing computational resources and accelerating execution speed.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_resolution_factor
    - This factor directly impacts the final resolution of the upscaled image. It is crucial in determining the visual fidelity and computational requirements of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- save_upscaled_image
    - The decision to save the upscaled image affects the outcome of the workflow. It ensures results are preserved for further analysis or use.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- inputs
    - This parameter allows the inclusion of additional input parameters, enhancing the node's versatility and ability to adapt to different scenarios.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]
- denoise
    - The denoising parameter is critical for the noise reduction process, controlling the level of noise filtered out from the upscaled image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- inputs
    - The output is a comprehensive parameter set containing all inputs, providing a structured and organized representation for further data processing.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeInput3:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'base_ratio': ('FLOAT', {'default': 0.8, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'refiner_strength': ('FLOAT', {'default': 1.0, 'min': 0.1, 'max': 1.0, 'step': 0.05}), 'refiner_intensity': (SeargeParameterProcessor.REFINER_INTENSITY, {'default': SeargeParameterProcessor.REFINER_INTENSITY[1]}), 'precondition_steps': ('INT', {'default': 0, 'min': 0, 'max': 10}), 'batch_size': ('INT', {'default': 1, 'min': 1, 'max': 4}), 'upscale_resolution_factor': ('FLOAT', {'default': 2.0, 'min': 0.25, 'max': 4.0, 'step': 0.25}), 'save_upscaled_image': (SeargeParameterProcessor.STATES, {'default': SeargeParameterProcessor.STATES[1]})}, 'optional': {'inputs': ('PARAMETER_INPUTS',), 'denoise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('PARAMETER_INPUTS',)
    RETURN_NAMES = ('inputs',)
    FUNCTION = 'mux'
    CATEGORY = 'Searge/_deprecated_/UI/Inputs'

    def mux(self, base_ratio, refiner_strength, refiner_intensity, precondition_steps, batch_size, upscale_resolution_factor, save_upscaled_image, inputs=None, denoise=None):
        if inputs is None:
            parameters = {}
        else:
            parameters = inputs
        parameters['denoise'] = denoise
        parameters['base_ratio'] = base_ratio
        parameters['refiner_strength'] = refiner_strength
        parameters['refiner_intensity'] = refiner_intensity
        parameters['precondition_steps'] = precondition_steps
        parameters['batch_size'] = batch_size
        parameters['upscale_resolution_factor'] = upscale_resolution_factor
        parameters['save_upscaled_image'] = save_upscaled_image
        return (parameters,)
```