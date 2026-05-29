# Documentation
- Class name: LatentSender
- Category: ImpactPack/Util
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The LatentSender node is designed to process and manage latent data, converting it into a format suitable for further use or storage. It plays a critical role in workflows, ensuring latent information is properly handled and prepared for downstream tasks.

# Input types
## Required
- samples
    - The 'samples' parameter is essential, as it contains the latent data the node operates on. It is the primary input that determines the node's processing and output generation.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
## Optional
- filename_prefix
    - The 'filename_prefix' parameter specifies the prefix for output files, which is important for organizing and identifying saved latent data files.
    - Comfy dtype: STRING
    - Python dtype: str
- link_id
    - The 'link_id' parameter is used to associate latent data with a specific link or process, which is critical for tracking and managing data across different stages.
    - Comfy dtype: INT
    - Python dtype: int
- preview_method
    - The 'preview_method' parameter determines how latent data is previewed before saving. It affects the visual representation of the data and can influence user understanding and interaction.
    - Comfy dtype: COMBO['Latent2RGB-SDXL', 'Latent2RGB-SD15', 'TAESDXL', 'TAESD15']
    - Python dtype: str
- prompt
    - The 'prompt' parameter provides additional context or instructions that can be used to guide latent data processing within the node.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The 'extra_pnginfo' parameter allows additional metadata to be included with the latent data, enriching the information associated with the output files.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]

# Output types
- ui
    - The 'ui' output provides user interface elements that can be used to display or interact with the results of the node's operations.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class LatentSender(nodes.SaveLatent):

    def __init__(self):
        super().__init__()
        self.output_dir = folder_paths.get_temp_directory()
        self.type = 'temp'

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples': ('LATENT',), 'filename_prefix': ('STRING', {'default': 'latents/LatentSender'}), 'link_id': ('INT', {'default': 0, 'min': 0, 'max': sys.maxsize, 'step': 1}), 'preview_method': (['Latent2RGB-SDXL', 'Latent2RGB-SD15', 'TAESDXL', 'TAESD15'],)}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    OUTPUT_NODE = True
    RETURN_TYPES = ()
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    @staticmethod
    def save_to_file(tensor_bytes, prompt, extra_pnginfo, image, image_path):
        compressed_data = BytesIO()
        with zipfile.ZipFile(compressed_data, mode='w') as archive:
            archive.writestr('latent', tensor_bytes)
        image = image.copy()
        exif_data = {'Exif': {piexif.ExifIFD.UserComment: compressed_data.getvalue()}}
        metadata = PngInfo()
        if prompt is not None:
            metadata.add_text('prompt', json.dumps(prompt))
        if extra_pnginfo is not None:
            for x in extra_pnginfo:
                metadata.add_text(x, json.dumps(extra_pnginfo[x]))
        exif_bytes = piexif.dump(exif_data)
        image.save(image_path, format='png', exif=exif_bytes, pnginfo=metadata, optimize=True)

    @staticmethod
    def prepare_preview(latent_tensor, preview_method):
        from comfy.cli_args import LatentPreviewMethod
        import comfy.latent_formats as latent_formats
        lower_bound = 128
        upper_bound = 256
        if preview_method == 'Latent2RGB-SD15':
            latent_format = latent_formats.SD15()
            method = LatentPreviewMethod.Latent2RGB
        elif preview_method == 'TAESD15':
            latent_format = latent_formats.SD15()
            method = LatentPreviewMethod.TAESD
        elif preview_method == 'TAESDXL':
            latent_format = latent_formats.SDXL()
            method = LatentPreviewMethod.TAESD
        else:
            latent_format = latent_formats.SDXL()
            method = LatentPreviewMethod.Latent2RGB
        previewer = core.get_previewer('cpu', latent_format=latent_format, force=True, method=method)
        image = previewer.decode_latent_to_preview(latent_tensor)
        min_size = min(image.size[0], image.size[1])
        max_size = max(image.size[0], image.size[1])
        scale_factor = 1
        if max_size > upper_bound:
            scale_factor = upper_bound / max_size
        if min_size * scale_factor < lower_bound:
            scale_factor = lower_bound / min_size
        w = int(image.size[0] * scale_factor)
        h = int(image.size[1] * scale_factor)
        image = image.resize((w, h), resample=Image.NEAREST)
        return LatentSender.attach_format_text(image)

    @staticmethod
    def attach_format_text(image):
        (width_a, height_a) = image.size
        letter_image = Image.open(latent_letter_path)
        (width_b, height_b) = letter_image.size
        new_width = max(width_a, width_b)
        new_height = height_a + height_b
        new_image = Image.new('RGB', (new_width, new_height), (0, 0, 0))
        offset_x = (new_width - width_b) // 2
        offset_y = height_a + (new_height - height_a - height_b) // 2
        new_image.paste(letter_image, (offset_x, offset_y))
        new_image.paste(image, (0, 0))
        return new_image

    def doit(self, samples, filename_prefix='latents/LatentSender', link_id=0, preview_method='Latent2RGB-SDXL', prompt=None, extra_pnginfo=None):
        (full_output_folder, filename, counter, subfolder, filename_prefix) = folder_paths.get_save_image_path(filename_prefix, self.output_dir)
        preview = LatentSender.prepare_preview(samples['samples'], preview_method)
        file = f'{filename}_{counter:05}_.latent.png'
        fullpath = os.path.join(full_output_folder, file)
        output = {'latent_tensor': samples['samples']}
        tensor_bytes = safetensors.torch.save(output)
        LatentSender.save_to_file(tensor_bytes, prompt, extra_pnginfo, preview, fullpath)
        latent_path = {'filename': file, 'subfolder': subfolder, 'type': self.type}
        PromptServer.instance.send_sync('latent-send', {'link_id': link_id, 'images': [latent_path]})
        return {'ui': {'images': [latent_path]}}
```