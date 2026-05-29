# Documentation
- Class name: PromptImage
- Category: ♾️Mixlab/Prompt
- Output node: True
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The PromptImage node is designed to process and manipulate images based on text prompts. It takes prompts and images as input, then generates a series of image outputs influenced by the input prompts. This node has the ability to save these images to a specified directory, providing seamless integration between text and image processing for creative or analytical purposes.

# Input types
## Required
- prompts
    - The ‘prompts’ parameter is an important input of the node, as it provides textual content to guide image processing. Each prompt is associated with a set of images and influences the final output.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- images
    - The ‘images’ parameter is the basic input containing the image data to be processed. It is expected to be a list of image tensors, which the node will manipulate according to the provided prompts.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- save_to_image
    - The ‘save_to_image’ parameter determines whether the processed images should be saved to the output directory. It allows users to enable or disable the saving function as needed.
    - Comfy dtype: COMBO['enable', 'disable']
    - Python dtype: List[str]

# Output types
- ui
    - The ‘ui’ parameter in the output contains user interface elements that display the processed images and their associated prompts. It provides a structured way to present results for further interaction or analysis.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class PromptImage:

    def __init__(self):
        self.output_dir = folder_paths.get_output_directory()
        self.type = 'output'
        self.prefix_append = 'PromptImage'
        self.compress_level = 4

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'prompts': ('STRING', {'multiline': True, 'default': '', 'dynamicPrompts': False}), 'images': ('IMAGE', {'default': None}), 'save_to_image': (['enable', 'disable'],)}}
    RETURN_TYPES = ()
    OUTPUT_NODE = True
    INPUT_IS_LIST = True
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Prompt'

    def run(self, prompts, images, save_to_image):
        filename_prefix = 'mixlab_'
        filename_prefix += self.prefix_append
        (full_output_folder, filename, counter, subfolder, filename_prefix) = folder_paths.get_save_image_path(filename_prefix, self.output_dir, images[0].shape[1], images[0].shape[0])
        results = list()
        save_to_image = save_to_image[0] == 'enable'
        for index in range(len(images)):
            res = []
            imgs = images[index]
            for image in imgs:
                img = tensor2pil(image)
                metadata = None
                if save_to_image:
                    metadata = PngInfo()
                    prompt_text = prompts[index]
                    if prompt_text is not None:
                        metadata.add_text('prompt_text', prompt_text)
                file = f'{filename}_{index}_{counter:05}_.png'
                img.save(os.path.join(full_output_folder, file), pnginfo=metadata, compress_level=self.compress_level)
                res.append({'filename': file, 'subfolder': subfolder, 'type': self.type})
                counter += 1
            results.append(res)
        return {'ui': {'_images': results, 'prompts': prompts}}
```