# Documentation
- Class name: WAS_Image_Grid_Image
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Grid_Image node is designed to process a series of images into a single grid image. It intelligently arranges images into a specified number of columns, scales them to the maximum cell size, and optionally adds colored borders around each image to differentiate visual effects. This node is especially suitable for creating collages or thumbnails from an image directory.

# Input types
## Required
- images_path
- The 'images_path' parameter specifies the directory path where the images to be processed are located. This path is crucial because it directs the node to the source location of images that will be organized into a grid.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- pattern_glob
- The 'pattern_glob' parameter is used to match specific files in the directory. It allows filtering images based on a pattern, which is useful when not all files in the directory are images or when a specific set of images is needed.
    - Comfy dtype: STRING
    - Python dtype: str
- include_subfolders
- The 'include_subfolders' parameter determines whether to include images from subdirectories when creating the grid. Setting it to 'true' causes the node to scan and include images from all subfolders under the specified path.
    - Comfy dtype: COMBO[false, true]
    - Python dtype: Union[str, bool]
- number_of_columns
- The 'number_of_columns' parameter defines the number of columns in the resulting grid image. It decides how images are distributed across the grid's width, affecting the overall layout.
    - Comfy dtype: INT
    - Python dtype: int
- max_cell_size
- The 'max_cell_size' parameter sets the maximum size (in pixels) for each image cell in the grid. This ensures no image exceeds these dimensions after processing, maintaining visual consistency in the grid.
    - Comfy dtype: INT
    - Python dtype: int
- border_width
- The 'border_width' parameter specifies the width of the border added around each image in the grid, if borders are included. A value of 0 indicates no border.
    - Comfy dtype: INT
    - Python dtype: int
- border_red
- The 'border_red' parameter, together with 'border_green' and 'border_blue', determines the red component of the RGB color value for the border around each image.
    - Comfy dtype: INT
    - Python dtype: int
- border_green
- The 'border_green' parameter specifies the green component of the RGB color value for the border.
    - Comfy dtype: INT
    - Python dtype: int
- border_blue
- The 'border_blue' parameter specifies the blue component of the RGB color value for the border.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- grid_image
'grid_image' output is the resulting image containing the processed image grid. It represents the final visual layout as defined by the input parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Grid_Image:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'images_path': ('STRING', {'default': './ComfyUI/input/', 'multiline': False}), 'pattern_glob': ('STRING', {'default': '*', 'multiline': False}), 'include_subfolders': (['false', 'true'],), 'border_width': ('INT', {'default': 3, 'min': 0, 'max': 100, 'step': 1}), 'number_of_columns': ('INT', {'default': 6, 'min': 1, 'max': 24, 'step': 1}), 'max_cell_size': ('INT', {'default': 256, 'min': 32, 'max': 1280, 'step': 1}), 'border_red': ('INT', {'default': 0, 'min': 0, 'max': 255, 'step': 1}), 'border_green': ('INT', {'default': 0, 'min': 0, 'max': 255, 'step': 1}), 'border_blue': ('INT', {'default': 0, 'min': 0, 'max': 255, 'step': 1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'create_grid_image'
    CATEGORY = 'WAS Suite/Image/Process'

    def create_grid_image(self, images_path, pattern_glob='*', include_subfolders='false', number_of_columns=6, max_cell_size=256, border_width=3, border_red=0, border_green=0, border_blue=0):
        if not os.path.exists(images_path):
            cstr(f'The grid image path `{images_path}` does not exist!').error.print()
            return (pil2tensor(Image.new('RGB', (512, 512), (0, 0, 0))),)
        paths = glob.glob(os.path.join(images_path, pattern_glob), recursive=False if include_subfolders == 'false' else True)
        image_paths = []
        for path in paths:
            if path.lower().endswith(ALLOWED_EXT) and os.path.exists(path):
                image_paths.append(path)
        grid_image = self.smart_grid_image(image_paths, int(number_of_columns), (int(max_cell_size), int(max_cell_size)), False if border_width <= 0 else True, (int(border_red), int(border_green), int(border_blue)), int(border_width))
        return (pil2tensor(grid_image),)

    def smart_grid_image(self, images, cols=6, size=(256, 256), add_border=False, border_color=(0, 0, 0), border_width=3):
        (max_width, max_height) = size
        row_height = 0
        images_resized = []
        for image in images:
            img = Image.open(image).convert('RGB')
            (img_w, img_h) = img.size
            aspect_ratio = img_w / img_h
            if aspect_ratio > 1:
                thumb_w = min(max_width, img_w - border_width)
                thumb_h = thumb_w / aspect_ratio
            else:
                thumb_h = min(max_height, img_h - border_width)
                thumb_w = thumb_h * aspect_ratio
            pad_w = max_width - int(thumb_w)
            pad_h = max_height - int(thumb_h)
            left = pad_w // 2
            top = pad_h // 2
            right = pad_w - left
            bottom = pad_h - top
            padding = (left, top, right, bottom)
            img_resized = ImageOps.expand(img.resize((int(thumb_w), int(thumb_h))), padding)
            if add_border:
                img_resized_bordered = ImageOps.expand(img_resized, border=border_width // 2, fill=border_color)
            images_resized.append(img_resized)
            row_height = max(row_height, img_resized.size[1])
        row_height = int(row_height)
        total_images = len(images_resized)
        rows = math.ceil(total_images / cols)
        new_image = Image.new('RGB', (cols * size[0] + (cols - 1) * border_width, rows * row_height + (rows - 1) * border_width), border_color)
        for (i, img) in enumerate(images_resized):
            if add_border:
                border_img = ImageOps.expand(img, border=border_width // 2, fill=border_color)
                x = i % cols * (size[0] + border_width)
                y = i // cols * (row_height + border_width)
                if border_img.size == (size[0], size[1]):
                    new_image.paste(border_img, (x, y, x + size[0], y + size[1]))
                else:
                    border_img = border_img.resize((size[0], size[1]))
                    new_image.paste(border_img, (x, y, x + size[0], y + size[1]))
            else:
                x = i % cols * (size[0] + border_width)
                y = i // cols * (row_height + border_width)
                if img.size == (size[0], size[1]):
                    new_image.paste(img, (x, y, x + img.size[0], y + img.size[1]))
                else:
                    img = img.resize((size[0], size[1]))
                    new_image.paste(img, (x, y, x + size[0], y + size[1]))
        new_image = ImageOps.expand(new_image, border=border_width, fill=border_color)
        return new_image
```