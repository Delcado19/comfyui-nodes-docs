# Documentation
- Class name: CR_ImageOutput
- Category: Comfyroll/Essential/Core
- Output node: True
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_ImageOutput is a node for managing image data output, providing functionality to save or preview images, and allowing custom file naming and format. It plays a critical role in the final stage of image processing workflows, ensuring results are easily accessible and well-organized.

# Input types
## Required
- images
    - The 'image' parameter is crucial as it defines the input image data the node will process. It influences the node's execution by deciding what will be saved or previewed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- output_type
    - The 'output_type' parameter determines whether the node saves images to disk or previews them. It is important as it directs the node's primary functionality toward either output method.
    - Comfy dtype: COMBO['Preview', 'Save', 'UI (no batch)']
    - Python dtype: str
- file_format
    - The 'file_format' parameter specifies the format in which images will be saved, affecting the quality and compatibility of output files.
    - Comfy dtype: COMBO['png', 'jpg', 'webp', 'tif']
    - Python dtype: str
## Optional
- filename_prefix
    - The 'filename_prefix' parameter sets the base name for output files, which is important for organizing and identifying saved images.
    - Comfy dtype: STRING
    - Python dtype: str
- prefix_presets
    - The 'prefix_presets' allows adding date-based prefixes to filenames, useful for chronological sorting and archiving.
    - Comfy dtype: COMBO[None, 'yyyyMMdd']
    - Python dtype: str
- trigger
    - When set to True, the 'trigger' parameter initiates an action or signal in the workflow, potentially triggering subsequent processes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- prompt
    - The 'prompt' parameter is used to store descriptions or annotations related to images, helpful for metadata purposes.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The 'extra_pnginfo' parameter allows embedding additional metadata within PNG files, enhancing information associated with images.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]

# Output types
- ui
    - The 'ui' output contains a list of image objects with metadata, important for providing necessary visual and contextual information of processed images for user interfaces.
    - Comfy dtype: COMBO[{'images': List[Dict[str, Any]]}]
    - Python dtype: Dict[str, Any]
- result
    - The 'result' output represents the completion status of the node's operation and provides a URL for further assistance if needed.
    - Comfy dtype: COMBO[Tuple[BOOLEAN, str]]
    - Python dtype: Tuple[bool, str]

# Usage tips
- Infra type: CPU

# Source code
```
class CR_ImageOutput:

    def __init__(self):
        self.output_dir = folder_paths.get_output_directory()
        self.type = 'output'

    @classmethod
    def INPUT_TYPES(cls):
        presets = ['None', 'yyyyMMdd']
        return {'required': {'images': ('IMAGE',), 'output_type': (['Preview', 'Save', 'UI (no batch)'],), 'filename_prefix': ('STRING', {'default': 'CR'}), 'prefix_presets': (presets,), 'file_format': (['png', 'jpg', 'webp', 'tif'],)}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO'}, 'optional': {'trigger': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('BOOLEAN',)
    RETURN_NAMES = ('trigger',)
    FUNCTION = 'save_images'
    OUTPUT_NODE = True
    CATEGORY = icons.get('Comfyroll/Essential/Core')

    def save_images(self, images, file_format, prefix_presets, filename_prefix='CR', trigger=False, output_type='Preview', prompt=None, extra_pnginfo=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Core-Nodes#cr-image-output'

        def map_filename(filename):
            prefix_len = len(os.path.basename(filename_prefix))
            prefix = filename[:prefix_len + 1]
            try:
                digits = int(filename[prefix_len + 1:].split('_')[0])
            except:
                digits = 0
            return (digits, prefix)
        if output_type == 'Save':
            self.output_dir = folder_paths.get_output_directory()
            self.type = 'output'
        elif output_type == 'Preview':
            self.output_dir = folder_paths.get_temp_directory()
            self.type = 'temp'
        date_formats = {'yyyyMMdd': lambda d: '{}{:02d}{:02d}'.format(str(d.year), d.month, d.day)}
        current_datetime = datetime.datetime.now()
        for (format_key, format_lambda) in date_formats.items():
            preset_prefix = f'{format_lambda(current_datetime)}'
        if prefix_presets != 'None':
            filename_prefix = filename_prefix + '_' + preset_prefix
        if filename_prefix[0] == '_':
            filename_prefix = filename_prefix[1:]
        subfolder = os.path.dirname(os.path.normpath(filename_prefix))
        filename = os.path.basename(os.path.normpath(filename_prefix))
        full_output_folder = os.path.join(self.output_dir, subfolder)
        if os.path.commonpath((self.output_dir, os.path.abspath(full_output_folder))) != self.output_dir:
            return {}
        try:
            counter = max(filter(lambda a: a[1][:-1] == filename and a[1][-1] == '_', map(map_filename, os.listdir(full_output_folder))))[0] + 1
        except ValueError:
            counter = 1
        except FileNotFoundError:
            os.makedirs(full_output_folder, exist_ok=True)
            counter = 1
        if output_type == 'UI (no batch)':
            results = []
            for tensor in images:
                array = 255.0 * tensor.cpu().numpy()
                image = Image.fromarray(np.clip(array, 0, 255).astype(np.uint8))
                server = PromptServer.instance
                server.send_sync(BinaryEventTypes.UNENCODED_PREVIEW_IMAGE, ['PNG', image, None], server.client_id)
                results.append({'source': 'websocket', 'content-type': 'image/png', 'type': 'output'})
            return {'ui': {'images': results}}
        else:
            results = list()
            for image in images:
                i = 255.0 * image.cpu().numpy()
                img = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8))
                metadata = PngInfo()
                if prompt is not None:
                    metadata.add_text('prompt', json.dumps(prompt))
                if extra_pnginfo is not None:
                    for x in extra_pnginfo:
                        metadata.add_text(x, json.dumps(extra_pnginfo[x]))
                file_name = f'{filename}_{counter:05}_.{file_format}'
                img_params = {'png': {'compress_level': 4}, 'webp': {'method': 6, 'lossless': False, 'quality': 80}, 'jpg': {'format': 'JPEG'}, 'tif': {'format': 'TIFF'}}
                resolved_image_path = os.path.join(full_output_folder, file_name)
                img.save(resolved_image_path, **img_params[file_format], pnginfo=metadata)
                results.append({'filename': file_name, 'subfolder': subfolder, 'type': self.type})
                counter += 1
            return {'ui': {'images': results}, 'result': (trigger, show_help)}
```