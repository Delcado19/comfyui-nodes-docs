# Documentation
- Class name: CLIPSave
- Category: advanced/model_merging
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The CLIPSave node is designed to efficiently save the state of a CLIP model to a file, allowing preservation and future reuse of the model's learned parameters. It simplifies the model serialization process, ensuring the model's state can be captured and stored in a compact and standardized format.

# Input types
## Required
- clip
    - The 'clip' parameter is essential for the node's operation, as it represents the CLIP model to be saved. This is a fundamental input that enables the node to access the model's state for serialization.
    - Comfy dtype: CLIP
    - Python dtype: CLIP model instance
- filename_prefix
    - The 'filename_prefix' parameter determines the beginning of the saved file name, which is crucial for identifying and organizing saved model files. It plays an important role in the node's functionality, providing a naming convention for the output file.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- prompt
    - The optional 'prompt' parameter can be used to include additional context or description in the saved model. It enhances the node's functionality by allowing metadata to be associated with the model, which is useful for later reference or annotation purposes.
    - Comfy dtype: PROMPT
    - Python dtype: Any
- extra_pnginfo
    - The 'extra_pnginfo' parameter allows saving additional information along with the model. This is particularly useful for storing auxiliary data that complements the model's primary functionality, thereby enriching the node's capabilities.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]

# Output types
- output
    - The output of the CLIPSave node is an empty dictionary, indicating the completion of the save operation. It signifies that the model's state has been successfully serialized and stored, ready for future use.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: GPU

# Source code
```
class CLIPSave:

    def __init__(self):
        self.output_dir = folder_paths.get_output_directory()

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'clip': ('CLIP',), 'filename_prefix': ('STRING', {'default': 'clip/ComfyUI'})}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    RETURN_TYPES = ()
    FUNCTION = 'save'
    OUTPUT_NODE = True
    CATEGORY = 'advanced/model_merging'

    def save(self, clip, filename_prefix, prompt=None, extra_pnginfo=None):
        prompt_info = ''
        if prompt is not None:
            prompt_info = json.dumps(prompt)
        metadata = {}
        if not args.disable_metadata:
            metadata['prompt'] = prompt_info
            if extra_pnginfo is not None:
                for x in extra_pnginfo:
                    metadata[x] = json.dumps(extra_pnginfo[x])
        comfy.model_management.load_models_gpu([clip.load_model()])
        clip_sd = clip.get_sd()
        for prefix in ['clip_l.', 'clip_g.', '']:
            k = list(filter(lambda a: a.startswith(prefix), clip_sd.keys()))
            current_clip_sd = {}
            for x in k:
                current_clip_sd[x] = clip_sd.pop(x)
            if len(current_clip_sd) == 0:
                continue
            p = prefix[:-1]
            replace_prefix = {}
            filename_prefix_ = filename_prefix
            if len(p) > 0:
                filename_prefix_ = '{}_{}'.format(filename_prefix_, p)
                replace_prefix[prefix] = ''
            replace_prefix['transformer.'] = ''
            (full_output_folder, filename, counter, subfolder, filename_prefix_) = folder_paths.get_save_image_path(filename_prefix_, self.output_dir)
            output_checkpoint = f'{filename}_{counter:05}_.safetensors'
            output_checkpoint = os.path.join(full_output_folder, output_checkpoint)
            current_clip_sd = comfy.utils.state_dict_prefix_replace(current_clip_sd, replace_prefix)
            comfy.utils.save_torch_file(current_clip_sd, output_checkpoint, metadata=metadata)
        return {}
```