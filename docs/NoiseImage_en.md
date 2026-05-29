# Documentation
- Class name: NoiseImage
- Category: ♾️Mixlab/Image
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node generates a noisy image on a solid color background based on the specified noise level, providing a versatile tool for testing image data and visual experiments.

# Input types
## Required
- width
    - Width determines the horizontal size of the output image, which is crucial for defining the canvas for noise pattern application.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height sets the vertical size of the image, working together with width to establish the overall size and range for noise generation.
    - Comfy dtype: INT
    - Python dtype: int
- noise_level
    - Noise level controls the intensity of random noise applied to the image, directly impacting the visual effect and complexity of the final result.
    - Comfy dtype: INT
    - Python dtype: int
- color_hex
    - Color hex defines the base color of the image background, which serves as the foundation for overlaying noise patterns.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- result
    - The output is a noisy image that reflects the input parameters, becoming a key artifact for further analysis or manipulation in image processing workflows.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class NoiseImage:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'width': ('INT', {'default': 512, 'min': 1, 'max': 8192, 'step': 1, 'display': 'number'}), 'height': ('INT', {'default': 512, 'min': 1, 'max': 8192, 'step': 1, 'display': 'number'}), 'noise_level': ('INT', {'default': 128, 'min': 0, 'max': 8192, 'step': 1, 'display': 'slider'}), 'color_hex': ('STRING', {'multiline': False, 'default': '#FFFFFF', 'dynamicPrompts': False})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Image'
    INPUT_IS_LIST = False
    OUTPUT_IS_LIST = (False,)

    def run(self, width, height, noise_level, color_hex):
        im = create_noisy_image(width, height, 'RGB', noise_level, color_hex)
        output_dir = folder_paths.get_temp_directory()
        (full_output_folder, filename, counter, subfolder, _) = folder_paths.get_save_image_path('tmp_', output_dir)
        image_file = f'{filename}_{counter:05}.png'
        image_path = os.path.join(full_output_folder, image_file)
        im.save(image_path, compress_level=6)
        im = pil2tensor(im)
        return {'ui': {'images': [{'filename': image_file, 'subfolder': subfolder, 'type': 'temp'}]}, 'result': (im,)}
```