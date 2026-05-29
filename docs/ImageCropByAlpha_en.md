# Documentation
- Class name: ImageCropByAlpha
- Category: ♾️Mixlab/Image
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The ImageCropByAlpha node is designed to intelligently crop images based on the alpha channel, effectively isolating the opaque regions of the image. It enhances image processing workflows by providing a precise and automated method for content extraction, particularly useful in applications involving complex image compositions or requiring clear separation of image elements.

# Input types
## Required
- image
    - The 'image' parameter is the primary input to the node, representing the original image to be processed. Its importance lies in it being the source for alpha channel-based cropping. The node's execution and resulting image heavily depend on the content and quality of this input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- RGBA
    - The 'RGBA' parameter is a necessary input, providing the alpha channel information essential for the cropping process. This parameter directly affects how the node identifies and isolates non-transparent regions of the image, thus playing a critical role in determining the final cropped image.
    - Comfy dtype: RGBA
    - Python dtype: torch.Tensor

# Output types
- IMAGE
    - The 'IMAGE' output is the result of the cropping operation, providing the user with the image content isolated based on the alpha channel. It is important as it represents the primary content of the node's functionality, demonstrating the effectiveness of the image processing task.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - The 'MASK' output is a binary mask corresponding to the non-transparent regions of the original image, serving as a visual guide for the cropping operation. It is important for applications requiring precise spatial information.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- AREA_MASK
    - The 'AREA_MASK' output is a mask depicting the regions of the image identified as non-transparent. This is useful for further image analysis or processing steps that may require knowledge of specific regions within the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- x
    - The 'x' output provides the x-coordinate of the top-left corner of the cropped region, crucial for understanding the spatial location of the cropped content within the original image.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - The 'y' output provides the y-coordinate of the top-left corner of the cropped region, further defining the spatial location of the cropped content.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The 'width' output represents the width of the cropped region, a key measurement for understanding the dimensions of the isolated image content.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' output represents the height of the cropped region, complementing the width to fully describe the size of the extracted image segment.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class ImageCropByAlpha:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'RGBA': ('RGBA',)}}
    RETURN_TYPES = ('IMAGE', 'MASK', 'MASK', 'INT', 'INT', 'INT', 'INT')
    RETURN_NAMES = ('IMAGE', 'MASK', 'AREA_MASK', 'x', 'y', 'width', 'height')
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Image'
    INPUT_IS_LIST = True
    OUTPUT_IS_LIST = (True, True, True, True, True, True, True)

    def run(self, image, RGBA):
        image = image[0]
        RGBA = RGBA[0]
        bf_im = tensor2pil(image)
        im = tensor2pil(RGBA)
        im = im.convert('RGBA')
        (red, green, blue, alpha) = im.split()
        im = naive_cutout(bf_im, alpha)
        (x, y, w, h) = get_not_transparent_area(im)
        x = min(x, image.shape[2] - 1)
        y = min(y, image.shape[1] - 1)
        to_x = w + x
        to_y = h + y
        x_1 = x
        y_1 = y
        width_1 = w
        height_1 = h
        img = image[:, y:to_y, x:to_x, :]
        ori = RGBA[:, y:to_y, x:to_x, :]
        ori = tensor2pil(ori)
        new_image = Image.new('RGBA', ori.size)
        pixel_data = ori.load()
        new_pixel_data = new_image.load()
        for y in range(ori.size[1]):
            for x in range(ori.size[0]):
                (r, g, b, a) = pixel_data[x, y]
                if a != 0:
                    new_pixel_data[x, y] = (255, 255, 255, 255)
                else:
                    new_pixel_data[x, y] = (0, 0, 0, 0)
        ori = new_image.convert('L')
        ori = pil2tensor(ori)
        b_image = AreaToMask_run(RGBA)
        return ([img], [ori], [b_image], [x_1], [y_1], [width_1], [height_1])
```