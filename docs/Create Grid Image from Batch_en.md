# Documentation
- Class name: WAS_Image_Grid_Image_Batch
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The 'smart_grid_image' function of the WAS_Image_Grid_Image_Batch node aims to intelligently arrange a batch of images into a grid layout. It dynamically adjusts the size of each image to fit the specified maximum cell size while maintaining the original aspect ratio. The node also provides options to add a colored border around each image for better visual distinction. Its main goal is to enable the creation of visually appealing and well-organized image grids, which is particularly useful for presentations and image collections.

# Input types
## Required
- images
    - The 'image' parameter is the collection of image tensors that the node will process to create the grid. This is a key input, as all operations of the node revolve around arranging these images. This parameter directly affects the composition and visual result of the output grid.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
## Optional
- number_of_columns
    - The 'number_of_columns' parameter specifies the number of columns in the generated grid. It plays an important role in determining the grid layout, affecting how images are distributed across the width of the grid. The default value is 6, but it can be adjusted based on the desired grid configuration.
    - Comfy dtype: INT
    - Python dtype: int
- max_cell_size
    - The 'max_cell_size' parameter sets the maximum size (in pixels) of each cell in the grid. It is important for controlling the overall size of the grid and ensuring that images are scaled appropriately. The default value is 256 pixels, but it can be modified for different display needs.
    - Comfy dtype: INT
    - Python dtype: int
- add_border
    - The 'add_border' parameter is a boolean flag that, when set to True, instructs the node to add a border around each image in the grid. This can enhance the visual separation between images, and is particularly useful for grids where individual images need to be distinguished.
    - Comfy dtype: BOOL
    - Python dtype: bool
- border_red
    - The 'border_red' parameter defines the red component of the border color when adding borders to images. It contributes to customizing the appearance of the border, and is used together with 'border_green' and 'border_blue' to create the complete border color.
    - Comfy dtype: INT
    - Python dtype: int
- border_green
    - The 'border_green' parameter sets the green component of the border color. When 'add_border' is enabled, it works with 'border_red' and 'border_blue' to determine the exact hue of the border.
    - Comfy dtype: INT
    - Python dtype: int
- border_blue
    - The 'border_blue' parameter specifies the blue component of the border color. It is one of three color components that, together with 'border_red' and 'border_green', determines the visual style of the border when applied to images.
    - Comfy dtype: INT
    - Python dtype: int
- border_width
    - The 'border_width' parameter determines the thickness of the border around each image. It is an important styling element that can influence the overall appearance of the grid, making images stand out more.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output_image
    - The 'output_image' is the resulting grid image composed of the input images arranged in a structured layout. It represents the final outcome of the node's processing, incorporating the visual arrangement and style choices made through the input parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Grid_Image_Batch:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'images': ('IMAGE',), 'border_width': ('INT', {'default': 3, 'min': 0, 'max': 100, 'step': 1}), 'number_of_columns': ('INT', {'default': 6, 'min': 1, 'max': 24, 'step': 1}), 'max_cell_size': ('INT', {'default': 256, 'min': 32, 'max': 2048, 'step': 1}), 'border_red': ('INT', {'default': 0, 'min': 0, 'max': 255, 'step': 1}), 'border_green': ('INT', {'default': 0, 'min': 0, 'max': 255, 'step': 1}), 'border_blue': ('INT', {'default': 0, 'min': 0, 'max': 255, 'step': 1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'smart_grid_image'
    CATEGORY = 'WAS Suite/Image/Process'

    def smart_grid_image(self, images, number_of_columns=6, max_cell_size=256, add_border=False, border_red=255, border_green=255, border_blue=255, border_width=3):
        cols = number_of_columns
        border_color = (border_red, border_green, border_blue)
        images_resized = []
        max_row_height = 0
        for tensor_img in images:
            img = tensor2pil(tensor_img)
            (img_w, img_h) = img.size
            aspect_ratio = img_w / img_h
            if img_w > img_h:
                cell_w = min(img_w, max_cell_size)
                cell_h = int(cell_w / aspect_ratio)
            else:
                cell_h = min(img_h, max_cell_size)
                cell_w = int(cell_h * aspect_ratio)
            img_resized = img.resize((cell_w, cell_h))
            if add_border:
                img_resized = ImageOps.expand(img_resized, border=border_width // 2, fill=border_color)
            images_resized.append(img_resized)
            max_row_height = max(max_row_height, cell_h)
        max_row_height = int(max_row_height)
        total_images = len(images_resized)
        rows = math.ceil(total_images / cols)
        grid_width = cols * max_cell_size + (cols - 1) * border_width
        grid_height = rows * max_row_height + (rows - 1) * border_width
        new_image = Image.new('RGB', (grid_width, grid_height), border_color)
        for (i, img) in enumerate(images_resized):
            x = i % cols * (max_cell_size + border_width)
            y = i // cols * (max_row_height + border_width)
            (img_w, img_h) = img.size
            paste_x = x + (max_cell_size - img_w) // 2
            paste_y = y + (max_row_height - img_h) // 2
            new_image.paste(img, (paste_x, paste_y, paste_x + img_w, paste_y + img_h))
        if add_border:
            new_image = ImageOps.expand(new_image, border=border_width, fill=border_color)
        return (pil2tensor(new_image),)
```