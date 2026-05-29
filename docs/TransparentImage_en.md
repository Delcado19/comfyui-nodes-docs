# Documentation
- Class name: TransparentImage
- Category: ♾️Mixlab/Image
- Output node: True
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The TransparentImage node handles and manipulates images with transparency, providing functions to create and manage images with masks. It can invert colors, save processed images, and handle various image formats. The node plays a key role in enhancing visual content by applying masks to images, enabling innovative visual effects and modifications.

# Input types
## Required
- images
    - The `images` parameter is essential for the node's operation because it is the input image to be processed. It is a critical element that directly affects the node's output, determining the visual content that will be transformed and manipulated.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- masks
    - The `masks` parameter defines the masks to be applied to the input image. It is a necessary component of the node's functionality because it determines which areas of the image will be affected by the mask processing.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- invert
    - The `invert` parameter allows color inversion in the processed image. This optional feature can significantly alter the visual result, providing a way to create contrast effects within the image.
    - Comfy dtype: COMBO['yes', 'no']
    - Python dtype: str
- save
    - The `save` parameter decides whether the processed image will be saved to disk. This is a key decision point for the node because it impacts the persistence of visual changes made to the image.
    - Comfy dtype: COMBO['yes', 'no']
    - Python dtype: str
- filename_prefix
    - The `filename_prefix` parameter specifies the prefix for saved image files. It offers a more efficient method to organize and identify output files, enhancing manageability of the saved visual content.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- file_path
    - The `file_path` output provides the path to the saved image file. It is important because it allows users to locate and access the processed image for further use or distribution.
    - Comfy dtype: STRING
    - Python dtype: str
- IMAGE
    - The `IMAGE` output represents the processed image in RGB format. It is the direct result of the node's operation and is crucial for visualizing the modifications made to the input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- RGBA
    - The `RGBA` output contains the processed image with transparency information. This is important for applications that need to retain the original image's alpha channel for further editing or compositing.
    - Comfy dtype: RGBA
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class TransparentImage:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images': ('IMAGE',), 'masks': ('MASK',), 'invert': (['yes', 'no'],), 'save': (['yes', 'no'],)}, 'optional': {'filename_prefix': ('STRING', {'multiline': False, 'default': 'Mixlab_save'})}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    RETURN_TYPES = ('STRING', 'IMAGE', 'RGBA')
    RETURN_NAMES = ('file_path', 'IMAGE', 'RGBA')
    OUTPUT_NODE = True
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Image'
    OUTPUT_IS_LIST = (True, True, True)

    def run(self, images, masks, invert, save, filename_prefix, prompt=None, extra_pnginfo=None):
        ui_images = []
        image_paths = []
        count = images.shape[0]
        masks_new = []
        nh = masks.shape[0] // count
        masks_new = masks
        if images.shape[0] == masks.shape[0] and images.shape[1] == masks.shape[1] and (images.shape[2] == masks.shape[2]):
            print('TransparentImage', images.shape, images.size(), masks.shape, masks.size())
        elif nh * count == masks.shape[0]:
            masks_new = split_mask_by_new_height(masks, nh)
        else:
            masks_new = split_mask_by_new_height(masks, masks.shape[0])
        is_save = True if save == 'yes' else False
        images_rgb = []
        images_rgba = []
        for i in range(len(images)):
            image = images[i]
            mask = masks_new[i]
            result = doMask(image, mask, is_save, filename_prefix, invert, not is_save, prompt, extra_pnginfo)
            for item in result['result']:
                ui_images.append(item)
            image_paths.append(result['image_path'])
            images_rgb.append(result['im_tensor'])
            images_rgba.append(result['im_rgba_tensor'])
        return {'ui': {'images': ui_images, 'image_paths': image_paths}, 'result': (image_paths, images_rgb, images_rgba)}
```