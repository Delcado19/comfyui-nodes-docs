# Documentation
- Class name: FreeU
- Category: model_patches
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The FreeU node aims to modify the behavior of a given model by applying patches to its output blocks. It adjusts the scale and offset parameters of the model's intermediate representations, enhancing the model's performance on specific tasks.

# Input types
## Required
- model
    - The model parameter is critical because it defines the base model to which the FreeU node will apply its patches. This is the primary input for the node to operate and achieve the desired modifications.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- b1
    - The b1 parameter is a scaling factor that affects the first half of the model's channels. It plays a key role in the node's ability to adjust the model's output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- b2
    - The b2 parameter is another scaling factor that affects the second quarter of the model's channels. It helps fine-tune the model's behavior.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s1
    - The s1 parameter defines the offset applied to the first half of the model's channels after scaling. It is a core part of the node's functionality for modifying the model's output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s2
    - The s2 parameter specifies the offset for the second quarter of the model's channels, further customizing the model's output to meet specific requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- modified_model
    - The modified_model output is the result of applying the FreeU node's patches to the input model. It represents the enhanced model with adjusted parameters.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class FreeU:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'b1': ('FLOAT', {'default': 1.1, 'min': 0.0, 'max': 10.0, 'step': 0.01}), 'b2': ('FLOAT', {'default': 1.2, 'min': 0.0, 'max': 10.0, 'step': 0.01}), 's1': ('FLOAT', {'default': 0.9, 'min': 0.0, 'max': 10.0, 'step': 0.01}), 's2': ('FLOAT', {'default': 0.2, 'min': 0.0, 'max': 10.0, 'step': 0.01})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'patch'
    CATEGORY = 'model_patches'

    def patch(self, model, b1, b2, s1, s2):
        model_channels = model.model.model_config.unet_config['model_channels']
        scale_dict = {model_channels * 4: (b1, s1), model_channels * 2: (b2, s2)}
        on_cpu_devices = {}

        def output_block_patch(h, hsp, transformer_options):
            scale = scale_dict.get(h.shape[1], None)
            if scale is not None:
                h[:, :h.shape[1] // 2] = h[:, :h.shape[1] // 2] * scale[0]
                if hsp.device not in on_cpu_devices:
                    try:
                        hsp = Fourier_filter(hsp, threshold=1, scale=scale[1])
                    except:
                        logging.warning('Device {} does not support the torch.fft functions used in the FreeU node, switching to CPU.'.format(hsp.device))
                        on_cpu_devices[hsp.device] = True
                        hsp = Fourier_filter(hsp.cpu(), threshold=1, scale=scale[1]).to(hsp.device)
                else:
                    hsp = Fourier_filter(hsp.cpu(), threshold=1, scale=scale[1]).to(hsp.device)
            return (h, hsp)
        m = model.clone()
        m.set_model_output_block_patch(output_block_patch)
        return (m,)
```