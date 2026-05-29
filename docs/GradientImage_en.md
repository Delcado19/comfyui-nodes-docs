# Documentation
- Class name: GradientImage
- Category: ♾️Mixlab/Image
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The GradientImage node generates a gradient image from a specified start color to an end color. It integrates seamlessly with image processing libraries to create visually appealing gradient effects for various applications such as backgrounds or design elements.

# Input types
## Required
- width
    - The width parameter determines the width of the generated gradient image. It is a key factor in setting the image dimensions, which in turn affects the overall visual layout and design.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the vertical dimension of the gradient image. It works together with the width to determine the overall image size, which is essential for fitting the image into a specific design space.
    - Comfy dtype: INT
    - Python dtype: int
- start_color_hex
    - The start_color_hex parameter specifies the hex color code at the start of the gradient. It is a fundamental input that determines the starting point of the color transition in the gradient image.
    - Comfy dtype: STRING
    - Python dtype: str
- end_color_hex
    - The end_color_hex parameter defines the hex color code at the end of the gradient. It is crucial for determining the final color in the gradient, thus completing the color transition effect.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The IMAGE output provides the generated gradient image, which can be used for various purposes such as visual presentations or graphic design projects.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - The MASK output includes a mask image that can be used for selective editing or applying specific effects to particular regions of the gradient image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class GradientImage:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'width': ('INT', {'default': 512, 'min': 1, 'max': 8192, 'step': 1, 'display': 'number'}), 'height': ('INT', {'default': 512, 'min': 1, 'max': 8192, 'step': 1, 'display': 'number'}), 'start_color_hex': ('STRING', {'multiline': False, 'default': '#FFFFFF', 'dynamicPrompts': False}), 'end_color_hex': ('STRING', {'multiline': False, 'default': '#000000', 'dynamicPrompts': False})}}
    RETURN_TYPES = ('IMAGE', 'MASK')
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Image'
    INPUT_IS_LIST = False
    OUTPUT_IS_LIST = (False, False)

    def run(self, width, height, start_color_hex, end_color_hex):
        (im, mask) = generate_gradient_image(width, height, start_color_hex, end_color_hex)
        output_dir = folder_paths.get_temp_directory()
        (full_output_folder, filename, counter, subfolder, _) = folder_paths.get_save_image_path('tmp_', output_dir)
        image_file = f'{filename}_{counter:05}.png'
        image_path = os.path.join(full_output_folder, image_file)
        im.save(image_path, compress_level=6)
        im = pil2tensor(im)
        mask = pil2tensor(mask)
        return {'ui': {'images': [{'filename': image_file, 'subfolder': subfolder, 'type': 'temp'}]}, 'result': (im, mask)}
```