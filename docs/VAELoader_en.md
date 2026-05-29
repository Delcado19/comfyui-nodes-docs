# Documentation
- Class name: VAELoader
- Category: loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The VAELoader node is designed to manage the loading and preparation of Variational Autoencoder (VAE) models. It abstracts the complexity of handling different VAE configurations and provides a unified interface for accessing these models. The node’s functionality focuses on listing available VAEs, loading them by name, and ensuring they are correctly initialized and ready for downstream tasks.

# Input types
## Required
- vae_name
    - The parameter 'vae_name' is crucial for identifying the specific VAE model to load. It determines which model configuration and weights will be used, affecting the node’s execution. This parameter is essential for ensuring the correct model is prepared for subsequent processing steps.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- VAE
    - The output parameter 'VAE' represents the loaded Variational Autoencoder model. It is important because it is the node’s primary output, encapsulating the model’s configuration and learned parameters. This output allows the model to be used in further analysis or generation tasks.
    - Comfy dtype: VAE
    - Python dtype: comfy.sd.VAE

# Usage tips
- Infra type: CPU

# Source code
```
class VAELoader:

    @staticmethod
    def vae_list():
        vaes = folder_paths.get_filename_list('vae')
        approx_vaes = folder_paths.get_filename_list('vae_approx')
        sdxl_taesd_enc = False
        sdxl_taesd_dec = False
        sd1_taesd_enc = False
        sd1_taesd_dec = False
        for v in approx_vaes:
            if v.startswith('taesd_decoder.'):
                sd1_taesd_dec = True
            elif v.startswith('taesd_encoder.'):
                sd1_taesd_enc = True
            elif v.startswith('taesdxl_decoder.'):
                sdxl_taesd_dec = True
            elif v.startswith('taesdxl_encoder.'):
                sdxl_taesd_enc = True
        if sd1_taesd_dec and sd1_taesd_enc:
            vaes.append('taesd')
        if sdxl_taesd_dec and sdxl_taesd_enc:
            vaes.append('taesdxl')
        return vaes

    @staticmethod
    def load_taesd(name):
        sd = {}
        approx_vaes = folder_paths.get_filename_list('vae_approx')
        encoder = next(filter(lambda a: a.startswith('{}_encoder.'.format(name)), approx_vaes))
        decoder = next(filter(lambda a: a.startswith('{}_decoder.'.format(name)), approx_vaes))
        enc = comfy.utils.load_torch_file(folder_paths.get_full_path('vae_approx', encoder))
        for k in enc:
            sd['taesd_encoder.{}'.format(k)] = enc[k]
        dec = comfy.utils.load_torch_file(folder_paths.get_full_path('vae_approx', decoder))
        for k in dec:
            sd['taesd_decoder.{}'.format(k)] = dec[k]
        if name == 'taesd':
            sd['vae_scale'] = torch.tensor(0.18215)
        elif name == 'taesdxl':
            sd['vae_scale'] = torch.tensor(0.13025)
        return sd

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'vae_name': (s.vae_list(),)}}
    RETURN_TYPES = ('VAE',)
    FUNCTION = 'load_vae'
    CATEGORY = 'loaders'

    def load_vae(self, vae_name):
        if vae_name in ['taesd', 'taesdxl']:
            sd = self.load_taesd(vae_name)
        else:
            vae_path = folder_paths.get_full_path('vae', vae_name)
            sd = comfy.utils.load_torch_file(vae_path)
        vae = comfy.sd.VAE(sd=sd)
        return (vae,)
```