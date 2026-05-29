# Documentation
- Class name: MosaicExpandImage
- Category: Mikey/Image
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The MosaicExpandImage node aims to enhance the visual appeal of an image by creating a mosaic effect around the image borders. It intelligently expands the image in a non-uniform, artistic manner, producing results that are visually striking while maintaining the integrity of the original image content.

# Input types
## Required
- image
    - The image parameter is the core input of the node, representing the original image that will be artistically expanded with the mosaic effect. It is crucial for the operation of the node as it determines the base content to be transformed.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- left
    - The left parameter specifies the number of mosaic blocks to add on the left side of the image. It plays a key role in determining the width of the left expansion area, contributing to the overall aesthetic of the final mosaic effect.
    - Comfy dtype: INT
    - Python dtype: int
- top
    - The top parameter determines the number of mosaic blocks to add on the top of the image. It is important in shaping the height of the top expansion area, affecting the overall mosaic pattern created.
    - Comfy dtype: INT
    - Python dtype: int
- right
    - The right parameter sets the number of mosaic blocks to add on the right side of the image. It is essential for controlling the width of the right mosaic border, influencing the final visual effect of the mosaic expansion.
    - Comfy dtype: INT
    - Python dtype: int
- bottom
    - The bottom parameter determines the number of mosaic blocks to include at the bottom of the image. It is a key factor in establishing the height of the bottom mosaic border, which is crucial for the overall mosaic design.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result_img
    - The result_img output parameter represents the final image with the mosaic expansion applied. It is the result of the node's processing, showcasing the artistic enhancement achieved through the mosaic effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output parameter provides a binary mask for distinguishing the original image area from the mosaic expansion area. It is very important in applications that require differentiation between the original and expanded regions.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class MosaicExpandImage:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE', {'default': None}), 'left': ('INT', {'default': 0, 'min': 0, 'max': 5}), 'top': ('INT', {'default': 0, 'min': 0, 'max': 5}), 'right': ('INT', {'default': 0, 'min': 0, 'max': 5}), 'bottom': ('INT', {'default': 0, 'min': 0, 'max': 5})}}
    RETURN_TYPES = ('IMAGE', 'MASK')
    RETURN_NAMES = ('result_img',)
    FUNCTION = 'mosaic_expand'
    CATEGORY = 'Mikey/Image'

    def mosaic_expand(self, image, left, top, right, bottom):
        img = tensor2pil(image)
        (width, height) = img.size
        (width_5th, height_5th) = (width // 5, height // 5)

        def create_mosaic(side_img, num_fifths, vertical=False):
            block_size = 50
            num_blocks_wide = side_img.width // block_size
            num_blocks_high = num_fifths * height_5th // block_size if vertical else side_img.height // block_size
            mosaic_width = block_size * num_blocks_wide
            mosaic_height = block_size * num_blocks_high
            mosaic_img = Image.new('RGB', (mosaic_width, mosaic_height))
            for i in range(num_blocks_wide):
                for j in range(num_blocks_high):
                    section = side_img.crop((i * block_size, j * block_size, (i + 1) * block_size, (j + 1) * block_size))
                    avg_color = np.array(section).mean(axis=(0, 1)).astype(np.uint8)
                    for x in range(block_size):
                        for y in range(block_size):
                            mosaic_x = i * block_size + x
                            mosaic_y = j * block_size + y
                            mosaic_img.putpixel((mosaic_x, mosaic_y), tuple(avg_color))
            return mosaic_img
        self.new_width = width + width_5th * (left + right)
        self.new_height = height + height_5th * (top + bottom)
        new_img = Image.new('RGB', (self.new_width, self.new_height))
        if right > 0:
            right_side = img.crop((width - width_5th * right, 0, width, height))
            right_mosaic = create_mosaic(right_side, right)
            right_mosaic = right_mosaic.transpose(Image.FLIP_LEFT_RIGHT)
            right_mosaic = right_mosaic.resize((width_5th * right + 8, self.new_height))
            new_img.paste(right_mosaic, (width + width_5th * left, 0))
        if left > 0:
            left_side = img.crop((0, 0, width_5th * left, height))
            left_mosaic = create_mosaic(left_side, left)
            left_mosaic = left_mosaic.transpose(Image.FLIP_LEFT_RIGHT)
            left_mosaic = left_mosaic.resize((width_5th * left + 8, self.new_height))
            new_img.paste(left_mosaic, (0, 0))
        if top > 0:
            top_side = img.crop((0, 0, width, height_5th * top))
            top_mosaic = create_mosaic(top_side, top, vertical=True)
            top_mosaic = top_mosaic.transpose(Image.FLIP_TOP_BOTTOM)
            top_mosaic = top_mosaic.resize((width + 32, height_5th * top + 8))
            new_img.paste(top_mosaic, (width_5th * left, 0))
        if bottom > 0:
            bottom_side = img.crop((0, height - height_5th * bottom, width, height))
            bottom_mosaic = create_mosaic(bottom_side, bottom, vertical=True)
            bottom_mosaic = bottom_mosaic.transpose(Image.FLIP_TOP_BOTTOM)
            bottom_mosaic = bottom_mosaic.resize((width + 32, height_5th * bottom + 8))
            new_img.paste(bottom_mosaic, (width_5th * left, height + height_5th * top))
        new_img.paste(img, (width_5th * left, height_5th * top))
        new_img = pil2tensor(new_img)
        mask = Image.new('RGB', (self.new_width, self.new_height), (0, 0, 0))
        white = Image.new('RGB', (width, height), (255, 255, 255))
        if right > 0:
            white = white.crop((0, 0, width - 64, height))
        if left > 0:
            white = white.crop((64, 0, width, height))
        if top > 0:
            white = white.crop((0, 64, width, height))
        if bottom > 0:
            white = white.crop((0, 0, width, height - 64))
        paste_x = width_5th * left + 64
        if left > 0:
            paste_x += 64
        paste_y = height_5th * top
        if top > 0:
            paste_y += 64
        mask.paste(white, (paste_x, paste_y))
        mask = np.array(mask.getchannel('R')).astype(np.float32) / 255.0
        mask = 1.0 - torch.from_numpy(mask)
        mask = mask.unsqueeze(0)
        return (new_img, mask)
```