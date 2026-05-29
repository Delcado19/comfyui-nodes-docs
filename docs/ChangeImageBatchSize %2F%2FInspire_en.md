# Documentation
- Class name: ChangeImageBatchSize
- Category: InspirePack/image
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node aims to adjust the batch size of a given set of images, ensuring the output meets the specified batch size requirement. It achieves this by duplicating the last image to fill the batch or truncating the batch as needed, depending on the input. This node is essential for preprocessing image data to meet the input requirements of subsequent processing steps.

# Input types
## Required
- image
    - The image parameter represents a batch of images that need to be resized or adjusted to meet a specific batch size. This is a critical input, as the entire operation of the node revolves around manipulating this image data to achieve the desired output batch size.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- batch_size
    - The batch size parameter specifies the desired number of images in the output batch. This is a critical factor that determines how the input images are processed, whether through duplication or truncation, to achieve the specified size.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- mode
    - The mode parameter determines the method used to adjust the batch size. In this case, the 'simple' mode is the only supported option, which outlines the process of meeting the batch size requirement by duplicating the last image or truncating the batch.
    - Comfy dtype: COMBO[simple]
    - Python dtype: str

# Output types
- image
    - The output image parameter is the result of the batch size adjustment process. It contains the adjusted set of images, now conforming to the specified batch size, ready for further processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class ChangeImageBatchSize:

    @classmethod
    def INPUT_TYPES(s):
        input_dir = folder_paths.get_input_directory()
        files = [f for f in os.listdir(input_dir) if os.path.isfile(os.path.join(input_dir, f))]
        return {'required': {'image': ('IMAGE',), 'batch_size': ('INT', {'default': 1, 'min': 1, 'max': 4096, 'step': 1}), 'mode': (['simple'],)}}
    CATEGORY = 'InspirePack/image'
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'load_image'

    def load_image(self, image, batch_size, mode):
        if mode == 'simple':
            if len(image) < batch_size:
                last_frame = image[-1].unsqueeze(0).expand(batch_size - len(image), -1, -1, -1)
                image = torch.concat((image, last_frame), dim=0)
            else:
                image = image[:batch_size, :, :, :]
            return (image,)
        else:
            print(f'[WARN] ChangeImageBatchSize: Unknown mode `{mode}` - ignored')
            return (image,)
```