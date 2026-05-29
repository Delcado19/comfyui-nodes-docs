# Documentation
- Class name: SaveImageToLocal
- Category: ♾️Mixlab/Image
- Output node: True
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The "SaveImageToLocal" node is designed to save image data to the local file system. It provides a simple mechanism to persist images, ensuring they are stored in a specified output directory. This node is particularly useful in scenarios where image visualization or further processing is required outside the computational environment.

# Input types
## Required
- images
    - The "images" parameter is critical to the node's operation, as it represents the raw image data to be saved. Its successful execution depends on the correct format and integrity of the provided image data.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- file_path
    - The "file_path" parameter indicates the location where the image will be stored on the local system. It is essential for directing the node's output and systematically organizing saved files.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - The "prompt" parameter, while optional, can add context to saved images by embedding descriptive text in the image metadata. This is particularly useful for categorizing and searching image collections.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The "extra_pnginfo" parameter allows additional metadata to be included with each saved image, enhancing the image's descriptive capabilities and facilitating more complex search or organization schemes.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, str]

# Output types

# Usage tips
- Infra type: CPU

# Source code
```
class SaveImageToLocal:

    def __init__(self):
        self.output_dir = folder_paths.get_output_directory()
        self.type = 'output'
        self.compress_level = 4

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images': ('IMAGE',), 'file_path': ('STRING', {'multiline': True, 'default': '', 'dynamicPrompts': False})}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    RETURN_TYPES = ()
    FUNCTION = 'save_images'
    OUTPUT_NODE = True
    CATEGORY = '♾️Mixlab/Image'

    def save_images(self, images, file_path, prompt=None, extra_pnginfo=None):
        filename_prefix = os.path.basename(file_path)
        if file_path == '':
            filename_prefix = 'ComfyUI'
        (filename_prefix, _) = os.path.splitext(filename_prefix)
        (_, extension) = os.path.splitext(file_path)
        if extension:
            file_path = os.path.dirname(file_path)
        (full_output_folder, filename, counter, subfolder, filename_prefix) = folder_paths.get_save_image_path(filename_prefix, self.output_dir, images[0].shape[1], images[0].shape[0])
        if not os.path.exists(file_path):
            os.makedirs(file_path)
            print('目录已创建')
        else:
            print('目录已存在')
        if file_path == '':
            files = glob.glob(full_output_folder + '/*')
        else:
            files = glob.glob(file_path + '/*')
        file_count = len(files)
        counter += file_count
        print('统计文件数量', file_count, counter)
        results = list()
        for image in images:
            i = 255.0 * image.cpu().numpy()
            img = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8))
            metadata = None
            if not args.disable_metadata:
                metadata = PngInfo()
                if prompt is not None:
                    metadata.add_text('prompt', json.dumps(prompt))
                if extra_pnginfo is not None:
                    for x in extra_pnginfo:
                        metadata.add_text(x, json.dumps(extra_pnginfo[x]))
            file = f'{filename}_{counter:05}_.png'
            if file_path == '':
                fp = os.path.join(full_output_folder, file)
                if os.path.exists(fp):
                    file = f'{filename}_{counter:05}_{generate_random_string(8)}.png'
                    fp = os.path.join(full_output_folder, file)
                img.save(fp, pnginfo=metadata, compress_level=self.compress_level)
                results.append({'filename': file, 'subfolder': subfolder, 'type': self.type})
            else:
                fp = os.path.join(file_path, file)
                if os.path.exists(fp):
                    file = f'{filename}_{counter:05}_{generate_random_string(8)}.png'
                    fp = os.path.join(file_path, file)
                img.save(os.path.join(file_path, file), pnginfo=metadata, compress_level=self.compress_level)
                results.append({'filename': file, 'subfolder': file_path, 'type': self.type})
            counter += 1
        return ()
```