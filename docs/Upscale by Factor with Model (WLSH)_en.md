# Documentation
- Class name: WLSH_Upscale_By_Factor_With_Model
- Category: WLSH Nodes/upscaling
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The `upscale` method of the WLSH_Upscale_By_Factor_With_Model node is designed to enhance the resolution of input images through a specified scaling factor. It uses a pretrained model to perform upsampling and provides method options such as 'nearest-exact', 'bilinear', or 'area' for the upsampling process. The node's functionality focuses on improving the visual quality and details of images, making it an important tool in image enhancement tasks.

# Input types
## Required
- upscale_model
- The parameter `upscale_model` is crucial for the node's operation as it specifies the pretrained model used to upsample the image. The choice of model can significantly affect the quality of upsampling and the node's execution efficiency.
    - Comfy dtype: UPSCALE_MODEL
    - Python dtype: torch.nn.Module
- image
- The parameter `image` represents the input image that the node will process. This is a fundamental input because all of the node's operations revolve around enhancing the resolution of this image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- upscale_method
- The parameter `upscale_method` determines the algorithm used to upsample the image. Different methods may result in varying levels of detail and quality in the upsampled image, affecting the final output's appearance.
    - Comfy dtype: COMBO['nearest-exact', 'bilinear', 'area']
    - Python dtype: str
- factor
- The parameter `factor` defines the scaling factor by which the input image will be upsampled. It is essential for controlling the final size of the image and directly affects the node's output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- upscaled_image
- The output `upscaled_image` represents the processed image with enhanced resolution. It is the primary result of the node's operation, demonstrating the effectiveness of the selected upsampling model and method.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class WLSH_Upscale_By_Factor_With_Model:
    upscale_methods = ['nearest-exact', 'bilinear', 'area']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'upscale_model': ('UPSCALE_MODEL',), 'image': ('IMAGE',), 'upscale_method': (s.upscale_methods,), 'factor': ('FLOAT', {'default': 2.0, 'min': 0.1, 'max': 8.0, 'step': 0.1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'upscale'
    CATEGORY = 'WLSH Nodes/upscaling'

    def upscale(self, image, upscale_model, upscale_method, factor):
        device = model_management.get_torch_device()
        upscale_model.to(device)
        in_img = image.movedim(-1, -3).to(device)
        s = comfy.utils.tiled_scale(in_img, lambda a: upscale_model(a), tile_x=128 + 64, tile_y=128 + 64, overlap=8, upscale_amount=upscale_model.scale)
        upscale_model.cpu()
        upscaled = torch.clamp(s.movedim(-3, -1), min=0, max=1.0)
        old_width = image.shape[2]
        old_height = image.shape[1]
        new_width = int(old_width * factor)
        new_height = int(old_height * factor)
        print('Processing image with shape: ', old_width, 'x', old_height, 'to ', new_width, 'x', new_height)
        samples = upscaled.movedim(-1, 1)
        s = comfy.utils.common_upscale(samples, new_width, new_height, upscale_method, crop='disabled')
        s = s.movedim(1, -1)
        return (s,)
```