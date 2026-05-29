# Documentation
- Class name: WAS_Lucy_Sharpen
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

WAS_Lucy_Sharpen node aims to enhance image clarity and detail by applying a sharpening filter. It uses an iterative process to refine the image, making edges and details clearer without introducing significant artifacts. This node is particularly useful for improving visual quality of images that may be blurry or soft, helping to produce sharper, more well-defined output.

# Input types
## Required
- images
    - ‘images’ parameter is crucial for node operation as it specifies input images to be sharpened. Sharpening effect quality is directly affected by initial state of these images, making this parameter essential for achieving desired results.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image.Image]
## Optional
- iterations
    - ‘iterations’ parameter determines number of times sharpening process is applied to each image channel. More iterations can produce more pronounced effect but increase computational load. This optional parameter allows users to control sharpening strength.
    - Comfy dtype: INT
    - Python dtype: int
- kernel_size
    - ‘kernel_size’ parameter defines size of convolution kernel used in sharpening process. Larger kernel size can capture more context but may introduce more blur. This optional parameter affects balance between sharpness and smoothness in output images.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- sharpened_images
    - ‘sharpened_images’ output parameter contains resulting images after applying sharpening process. Compared to input images, these images are expected to have better clarity and detail, with enhanced edges and textures.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Lucy_Sharpen:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'images': ('IMAGE',), 'iterations': ('INT', {'default': 2, 'min': 1, 'max': 12, 'step': 1}), 'kernel_size': ('INT', {'default': 3, 'min': 1, 'max': 16, 'step': 1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'sharpen'
    CATEGORY = 'WAS Suite/Image/Filter'

    def sharpen(self, images, iterations, kernel_size):
        tensors = []
        if len(images) > 1:
            for img in images:
                tensors.append(pil2tensor(self.lucy_sharpen(tensor2pil(img), iterations, kernel_size)))
            tensors = torch.cat(tensors, dim=0)
        else:
            return (pil2tensor(self.lucy_sharpen(tensor2pil(images), iterations, kernel_size)),)
        return (tensors,)

    def lucy_sharpen(self, image, iterations=10, kernel_size=3):
        from scipy.signal import convolve2d
        image_array = np.array(image, dtype=np.float32) / 255.0
        kernel = np.ones((kernel_size, kernel_size), dtype=np.float32) / kernel_size ** 2
        sharpened_channels = []
        padded_image_array = np.pad(image_array, ((kernel_size, kernel_size), (kernel_size, kernel_size), (0, 0)), mode='edge')
        for channel in range(3):
            channel_array = padded_image_array[:, :, channel]
            for _ in range(iterations):
                blurred_channel = convolve2d(channel_array, kernel, mode='same')
                ratio = channel_array / (blurred_channel + 1e-06)
                channel_array *= convolve2d(ratio, kernel, mode='same')
            sharpened_channels.append(channel_array)
        cropped_sharpened_image_array = np.stack(sharpened_channels, axis=-1)[kernel_size:-kernel_size, kernel_size:-kernel_size, :]
        sharpened_image_array = np.clip(cropped_sharpened_image_array * 255.0, 0, 255).astype(np.uint8)
        sharpened_image = Image.fromarray(sharpened_image_array)
        return sharpened_image
```