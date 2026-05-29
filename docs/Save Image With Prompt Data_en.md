# Documentation
- Class name: SaveImagesMikey
- Category: Mikey/Image
- Output node: True
- Repo Ref: https://github.com/bash-j/mikey_nodes

The SaveImagesMikey node is designed to process and save a series of images to a specified directory. It handles conversion of image data for saving and can embed metadata (such as prompts and parameters) into the image files for later reference. This node plays a key role in managing the output of image generation tasks.

# Input types
## Required
- images
    - The `images` parameter is essential because it represents the input images that the node will process and save. The node’s functionality revolves around handling these images, making this parameter a fundamental part of the node’s operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- filename_prefix
    - The `filename_prefix` parameter allows users to specify a prefix for the saved image files, which is useful for organizing and identifying files. This parameter helps customize the naming convention of output files.
    - Comfy dtype: STRING
    - Python dtype: str
- parameters
    - The `parameters` input is important because it enables the node to include additional information about the image generation process in the saved files. This is crucial for tracking and documenting the conditions under which images were created.
    - Comfy dtype: STRING
    - Python dtype: str
- positive_prompt
    - The `positive_prompt` parameter adds a positive creative direction to the image file’s metadata. It helps classify images according to the prompts that guided their creation.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - The `negative_prompt` parameter includes creative constraints in the image file’s metadata, which is important for understanding the limitations applied during image generation.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - The `prompt` parameter is hidden but important because it provides the context or description that influences image generation. It is used to add relevant information to the image metadata for future reference.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The `extra_pnginfo` parameter embeds additional PNG‑specific metadata into the saved image files. This can enrich the information available for each image and is especially useful for advanced image management.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: str

# Output types
- ui
    - The `ui` output provides a structured representation of the saved images, including their filenames and subfolders. This output is important because it enables easy tracking and management of saved image files.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, List[Dict[str, Union[str, int]]]]

# Usage tips
- Infra type: CPU

# Source code
```
class SaveImagesMikey:

    def __init__(self):
        self.output_dir = folder_paths.get_output_directory()
        self.type = 'output'

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images': ('IMAGE',), 'positive_prompt': ('STRING', {'default': 'Positive Prompt'}), 'negative_prompt': ('STRING', {'default': 'Negative Prompt'}), 'filename_prefix': ('STRING', {'default': ''}), 'parameters': ('STRING', {'default': ''})}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    RETURN_TYPES = ()
    FUNCTION = 'save_images'
    OUTPUT_NODE = True
    CATEGORY = 'Mikey/Image'

    def save_images(self, images, filename_prefix='', parameters='', prompt=None, extra_pnginfo=None, positive_prompt='', negative_prompt=''):
        filename_prefix = search_and_replace(filename_prefix, extra_pnginfo, prompt)
        (full_output_folder, filename, counter, subfolder, filename_prefix) = get_save_image_path(filename_prefix, self.output_dir, images[0].shape[1], images[0].shape[0])
        results = list()
        for image in images:
            i = 255.0 * image.cpu().numpy()
            img = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8))
            metadata = PngInfo()
            pos_trunc = ''
            if prompt is not None:
                metadata.add_text('prompt', json.dumps(prompt))
            if extra_pnginfo is not None:
                for x in extra_pnginfo:
                    if x == 'parameters':
                        text = extra_pnginfo[x].encode('utf-8').decode('utf-8')
                        metadata.add_text(x, text)
                    elif x == 'workflow':
                        metadata.add_text(x, json.dumps(extra_pnginfo[x]))
                    elif x == 'prompt':
                        metadata.add_text(x, json.dumps(extra_pnginfo[x]))
                    else:
                        metadata.add_text(x, json.dumps(extra_pnginfo[x], ensure_ascii=False))
            if positive_prompt:
                metadata.add_text('positive_prompt', positive_prompt)
                clean_pos = re.sub('[^a-zA-Z0-9 ]', '', positive_prompt)
                pos_trunc = clean_pos.replace(' ', '_')[0:80]
            if negative_prompt:
                metadata.add_text('negative_prompt', negative_prompt)
            if filename_prefix != '':
                clean_filename_prefix = re.sub('[^a-zA-Z0-9 _-]', '', filename_prefix)
                metadata.add_text('filename_prefix', json.dumps(clean_filename_prefix, ensure_ascii=False))
                file = f'{clean_filename_prefix[:75]}_{counter:05}_.png'
            else:
                ts_str = datetime.datetime.now().strftime('%y%m%d%H%M%S')
                file = f'{ts_str}_{pos_trunc}_{filename}_{counter:05}_.png'
            if parameters:
                metadata.add_text('parameters', parameters)
            img.save(os.path.join(full_output_folder, file), pnginfo=metadata, compress_level=4)
            results.append({'filename': file, 'subfolder': subfolder, 'type': self.type})
            counter += 1
        return {'ui': {'images': results}}
```