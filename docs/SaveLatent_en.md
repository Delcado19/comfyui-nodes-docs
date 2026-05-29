# Documentation
- Class name: SaveLatent
- Category: _for_testing
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaveLatent node is designed to save the latent representation of samples to disk. It handles the storage process by converting latent tensors into a file format that can be easily retrieved and used for further processing or analysis. The node ensures that latent data is written to disk securely and optionally includes metadata to provide additional context.

# Input types
## Required
- samples
    - The "samples" parameter is critical as it contains the latent representations that need to be saved. It directly affects the node's operation by determining the data written to the output file.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
## Optional
- filename_prefix
    - The "filename_prefix" parameter defines the starting part of the filename for the saved latent files. It affects how files are organized and named in the output directory.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - When the "prompt" parameter is provided, it adds a description to the metadata of the saved latent file, which is useful for tracking the context in which the latent representation was generated.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The "extra_pnginfo" parameter allows additional information to be included in the metadata of the latent file. This is useful for storing any extra details that may be relevant to the analysis or use of the latent data.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]

# Output types
- ui
    - The "ui" parameter in the output is a dictionary containing information about the saved latent file, including the filename and subfolder, which can be used for user interface display or further processing.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class SaveLatent:

    def __init__(self):
        self.output_dir = folder_paths.get_output_directory()

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples': ('LATENT',), 'filename_prefix': ('STRING', {'default': 'latents/ComfyUI'})}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    RETURN_TYPES = ()
    FUNCTION = 'save'
    OUTPUT_NODE = True
    CATEGORY = '_for_testing'

    def save(self, samples, filename_prefix='ComfyUI', prompt=None, extra_pnginfo=None):
        (full_output_folder, filename, counter, subfolder, filename_prefix) = folder_paths.get_save_image_path(filename_prefix, self.output_dir)
        prompt_info = ''
        if prompt is not None:
            prompt_info = json.dumps(prompt)
        metadata = None
        if not args.disable_metadata:
            metadata = {'prompt': prompt_info}
            if extra_pnginfo is not None:
                for x in extra_pnginfo:
                    metadata[x] = json.dumps(extra_pnginfo[x])
        file = f'{filename}_{counter:05}_.latent'
        results = list()
        results.append({'filename': file, 'subfolder': subfolder, 'type': 'output'})
        file = os.path.join(full_output_folder, file)
        output = {}
        output['latent_tensor'] = samples['samples']
        output['latent_format_version_0'] = torch.tensor([])
        comfy.utils.save_torch_file(output, file, metadata=metadata)
        return {'ui': {'latents': results}}
```