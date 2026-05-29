# Documentation
- Class name: WAS_FreeU_V2
- Category: _for_testing
- Output node: False
- Repo Ref: https://github.com/WASasquatch/FreeU_Advanced

This node class aims to apply a patching mechanism to blocks of a model, adjusting input, intermediate, or output blocks through provided parameters to enhance model performance. It focuses on refining the model's internal representations through multi-scale adjustment and slicing techniques.

# Input types
## Required
- model
    - The model parameter is critical as it defines the neural network structure to be modified by the patching process. It is the primary object of the node's operation, and its characteristics directly influence the patching results.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- multiscale_mode
    - The multiscale_mode parameter is essential for defining the multi-scale method used during patching. It affects how model features are adjusted across different scales, which is crucial for fine-tuning model performance.
    - Comfy dtype: LIST
    - Python dtype: list
- multiscale_strength
    - The multiscale_strength parameter controls the intensity of multi-scale adjustments. It is a key factor in determining the effectiveness of the patching process and the adaptability of the resulting model to various data scales.
    - Comfy dtype: FLOAT
    - Python dtype: float
- slice_b1
    - The slice_b1 parameter defines the size of the slice to be adjusted in the first dimension of the model's hidden layer. It is important for focusing patching work on specific regions of the model, thereby optimizing its internal feature extraction mechanisms.
    - Comfy dtype: INT
    - Python dtype: int
- slice_b2
    - The slice_b2 parameter sets the slice size for the second dimension of the model's hidden layer. This parameter is significant in refining the model's representational capacity by targeting specific feature spaces within the layer.
    - Comfy dtype: INT
    - Python dtype: int
- b1
    - The b1 parameter influences the scaling factor applied to the first dimension of the hidden layer. It is a key factor in controlling the degree of transformation applied to the model's internal features.
    - Comfy dtype: FLOAT
    - Python dtype: float
- b2
    - The b2 parameter determines the scaling factor for the second dimension of the hidden layer. Adjusting this parameter can have a significant impact on the model's ability to capture and process features within this dimension.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s1
    - The s1 parameter sets the threshold for the first dimension of the Fourier filter applied during patching. It plays a key role in filtering out irrelevant frequencies and retaining only the most relevant features.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s2
    - The s2 parameter defines the threshold for the second dimension of the Fourier filter. By adjusting this parameter, the level of detail preserved in the model's data representation can be controlled.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- input_block
    - The input_block parameter determines whether patching should be applied to the model's input block. It plays a critical role in the initial stage of data processing and can significantly affect the overall performance of the patched model.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- middle_block
    - The middle_block parameter specifies whether patching should be applied to the model's intermediate layers. These layers are crucial to the model's learning process, and their adjustment can improve the model's representational capacity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- output_block
    - The output_block parameter indicates whether patching should target the model's output block. Modifying this block can directly impact the quality and accuracy of the model's predictions.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- threshold
    - The threshold parameter is used to determine the sensitivity of the Fourier filter. A higher threshold can lead to more aggressive filtering, potentially removing more noise but also possibly discarding important information.
    - Comfy dtype: INT
    - Python dtype: int
- use_override_scales
    - The use_override_scales parameter allows custom scaling values to be applied instead of defaults. This provides flexibility to tailor the patching process to specific requirements or experimental setups.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- override_scales
    - When use_override_scales is set to true, the override_scales parameter contains a string of custom scaling values used to override defaults. It allows users to fine-tune the model's response under specific data characteristics, which is useful for granular adjustments.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- model
    - The patched model is the primary output of the node, representing the neural network with modifications applied. This output is important as it embodies the enhanced capabilities and adjusted internal mechanisms of the patched model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class WAS_FreeU_V2:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'input_block': ('BOOLEAN', {'default': False}), 'middle_block': ('BOOLEAN', {'default': False}), 'output_block': ('BOOLEAN', {'default': False}), 'multiscale_mode': (list(mscales.keys()),), 'multiscale_strength': ('FLOAT', {'default': 1.0, 'max': 1.0, 'min': 0, 'step': 0.001}), 'slice_b1': ('INT', {'default': 640, 'min': 64, 'max': 1280, 'step': 1}), 'slice_b2': ('INT', {'default': 320, 'min': 64, 'max': 640, 'step': 1}), 'b1': ('FLOAT', {'default': 1.1, 'min': 0.0, 'max': 10.0, 'step': 0.001}), 'b2': ('FLOAT', {'default': 1.2, 'min': 0.0, 'max': 10.0, 'step': 0.001}), 's1': ('FLOAT', {'default': 0.9, 'min': 0.0, 'max': 10.0, 'step': 0.001}), 's2': ('FLOAT', {'default': 0.2, 'min': 0.0, 'max': 10.0, 'step': 0.001})}, 'optional': {'threshold': ('INT', {'default': 1.0, 'max': 10, 'min': 1, 'step': 1}), 'use_override_scales': (['false', 'true'],), 'override_scales': ('STRING', {'default': '# OVERRIDE SCALES\n\n# Sharpen\n# 10, 1.5', 'multiline': True})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'patch'
    CATEGORY = '_for_testing'

    def patch(self, model, input_block, middle_block, output_block, multiscale_mode, multiscale_strength, slice_b1, slice_b2, b1, b2, s1, s2, threshold=1.0, use_override_scales='false', override_scales=''):
        min_slice = 64
        max_slice_b1 = 1280
        max_slice_b2 = 640
        slice_b1 = max(min(max_slice_b1, slice_b1), min_slice)
        slice_b2 = max(min(min(slice_b1, max_slice_b2), slice_b2), min_slice)
        scales_list = []
        if use_override_scales == 'true':
            if override_scales.strip() != '':
                scales_str = override_scales.strip().splitlines()
                for line in scales_str:
                    if not line.strip().startswith('#') and (not line.strip().startswith('!')) and (not line.strip().startswith('//')):
                        scale_values = line.split(',')
                        if len(scale_values) == 2:
                            scales_list.append((int(scale_values[0]), float(scale_values[1])))
        if use_override_scales == 'true' and (not scales_list):
            print('No valid override scales found. Using default scale.')
            scales_list = None
        scales = mscales[multiscale_mode] if use_override_scales == 'false' else scales_list

        def _hidden_mean(h):
            hidden_mean = h.mean(1).unsqueeze(1)
            B = hidden_mean.shape[0]
            (hidden_max, _) = torch.max(hidden_mean.view(B, -1), dim=-1, keepdim=True)
            (hidden_min, _) = torch.min(hidden_mean.view(B, -1), dim=-1, keepdim=True)
            hidden_mean = (hidden_mean - hidden_min.unsqueeze(2).unsqueeze(3)) / (hidden_max - hidden_min).unsqueeze(2).unsqueeze(3)
            return hidden_mean

        def block_patch(h, transformer_options):
            if h.shape[1] == 1280:
                hidden_mean = _hidden_mean(h)
                h[:, :slice_b1] = h[:, :slice_b1] * ((b1 - 1) * hidden_mean + 1)
            if h.shape[1] == 640:
                hidden_mean = _hidden_mean(h)
                h[:, :slice_b2] = h[:, :slice_b2] * ((b2 - 1) * hidden_mean + 1)
            return h

        def block_patch_hsp(h, hsp, transformer_options):
            if h.shape[1] == 1280:
                h = block_patch(h, transformer_options)
                hsp = Fourier_filter(hsp, threshold=threshold, scale=s1, scales=scales, strength=multiscale_strength)
            if h.shape[1] == 640:
                h = block_patch(h, transformer_options)
                hsp = Fourier_filter(hsp, threshold=threshold, scale=s2, scales=scales, strength=multiscale_strength)
            return (h, hsp)
        m = model.clone()
        if output_block:
            print('Patching output block')
            m.set_model_output_block_patch(block_patch_hsp)
        if input_block:
            print('Patching input block')
            m.set_model_input_block_patch(block_patch)
        if middle_block:
            print('Patching middle block')
            m.set_model_patch(block_patch, 'middle_block_patch')
        return (m,)
```