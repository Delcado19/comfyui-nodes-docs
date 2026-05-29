# Documentation
- Class name: LoadImgFromDirectoryBasedOnIndex
- Category: Mikey/Image
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

This node loads an image from a specified directory based on a provided index. It ensures the directory exists, then selects an image file from the sorted list of image files in that directory. The node’s functionality focuses on retrieving the image and converting it to a tensor format suitable for further processing.

# Input types
## Required
- image_directory
    - The `image_directory` parameter specifies the path to the directory containing image files. It is essential to the node’s operation because it determines the source of the images to load.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- seed
    - The `seed` parameter determines the index of the image file to load from the sorted file list. It influences the selection process and ensures a degree of randomness in image retrieval.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The `image` output provides the loaded image in tensor format, which is crucial for downstream tasks that require image data in numerical form.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filename
    - The `filename` output returns the name of the loaded image file, useful for logging, tracking, or additional processing that requires file identification.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class LoadImgFromDirectoryBasedOnIndex:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image_directory': ('STRING', {'multiline': False, 'placeholder': 'Image Directory'}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('image', 'filename')
    FUNCTION = 'load'
    CATEGORY = 'Mikey/Image'

    def load(self, image_directory, seed):
        if not os.path.exists(image_directory):
            raise Exception(f'Image directory {image_directory} does not exist')
        files = [os.path.join(image_directory, f) for f in os.listdir(image_directory) if os.path.isfile(os.path.join(image_directory, f)) and f.endswith(('.png', '.jpg', '.jpeg', '.webp', '.bmp', '.gif'))]
        files.sort()
        offset = seed % len(files)
        filename = files[offset].split('/')[-1]
        img = Image.open(files[offset])
        img = pil2tensor(img)
        return (img, filename)
```