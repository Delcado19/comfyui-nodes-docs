# Documentation
- Class name: WAS_Image_Nova_Filter
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

WAS_Image_Nova_Filter class's `nova_sine` method applies sine wave distortion to the image, enhancing its visual characteristics with a wave-like pattern. This method aims to introduce a creative and artistic effect into the image processing workflow, allowing control over the intensity and scale of the distortion by adjusting amplitude and frequency.

# Input types
## Required
- image
    - 'image' parameter is crucial for the node's operation as it is the input image to be processed. It directly affects the node's execution and final result, determining the object of the sine wave distortion.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- amplitude
    - 'amplitude' parameter controls the intensity of the sine wave distortion applied to the image. It is a key factor in determining the visual effect, allowing users to fine-tune the effect according to personal preference.
    - Comfy dtype: FLOAT
    - Python dtype: float
- frequency
    - 'frequency' parameter determines the scale of the sine wave pattern applied to the image. It is crucial for adjusting the period of the wave, thereby affecting the overall appearance of the distortion.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output_image
    - 'output_image' is the result of applying the sine wave distortion to the input image. It represents the final visually altered image with the creative effect expected from the node's functionality.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Nova_Filter:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'amplitude': ('FLOAT', {'default': 0.1, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'frequency': ('FLOAT', {'default': 3.14, 'min': 0.0, 'max': 100.0, 'step': 0.001})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'nova_sine'
    CATEGORY = 'WAS Suite/Image/Filter'

    def nova_sine(self, image, amplitude, frequency):
        img = tensor2pil(image)
        img_array = np.array(img)

        def sine(x, freq, amp):
            return amp * np.sin(2 * np.pi * freq * x)
        resolution = img.info.get('dpi')
        physical_size = img.size
        if resolution is not None:
            ppm = 25.4 / resolution
            physical_size = tuple((int(pix * ppm) for pix in physical_size))
        max_freq = img.width / 2
        if frequency > max_freq:
            frequency = max_freq
        for i in range(img_array.shape[0]):
            for j in range(img_array.shape[1]):
                for k in range(img_array.shape[2]):
                    img_array[i, j, k] = int(sine(img_array[i, j, k] / 255, frequency, amplitude) * 255)
        return (torch.from_numpy(img_array.astype(np.float32) / 255.0).unsqueeze(0),)
```