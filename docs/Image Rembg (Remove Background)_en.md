# Documentation
- Class name: WAS_Remove_Rembg
- Category: WAS Suite/Image/AI
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Remove_Rembg node is designed to seamlessly remove the background from images using advanced AI algorithms. It focuses on providing a clean and efficient way to isolate subjects and backgrounds, enhancing the usability of images in various applications such as graphic design, content creation, and more.

# Input types
## Required
- images
    - The 'images' parameter is crucial as it defines the input images from which the background will be removed. The quality and resolution of these images directly affect the node's output, determining the clarity and precision of subject separation.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image.Image]
## Optional
- transparency
    - The 'transparency' parameter determines whether the background should be made transparent after removal. This is particularly useful for images that will be overlaid on other graphics or backgrounds.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- model
    - The 'model' parameter is used to select the AI model for background removal. Different models may offer varying levels of detail and accuracy, so this choice is critical for achieving the desired results.
    - Comfy dtype: COMBO[u2net, u2netp, u2net_human_seg, silueta, isnet-general-use, isnet-anime]
    - Python dtype: str
- post_processing
    - When 'post_processing' is enabled, additional image enhancements are applied to the output, potentially improving the visual appeal of the final result.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- only_mask
    - When set to true, the 'only_mask' parameter returns only the mask without applying the background removal process to the original image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- alpha_matting
    - The 'alpha_matting' parameter activates alpha matting technology to refine the edges of the mask, making them look more natural.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- alpha_matting_foreground_threshold
    - This parameter, along with other parameters related to alpha matting, fine-tunes the edge detection of the mask. It determines the threshold for what is considered the foreground.
    - Comfy dtype: INT
    - Python dtype: int
- alpha_matting_background_threshold
    - It works together with the foreground threshold to define what constitutes the background during the alpha matting process.
    - Comfy dtype: INT
    - Python dtype: int
- alpha_matting_erode_size
    - The 'alpha_matting_erode_size' parameter controls the size of the erosion effect applied to the mask, which helps refine the edges of the mask.
    - Comfy dtype: INT
    - Python dtype: int
- background_color
    - The 'background_color' parameter allows users to specify a solid color to serve as the new background after the original background is removed.
    - Comfy dtype: COMBO[none, black, white, magenta, chroma green, chroma blue]
    - Python dtype: str

# Output types
- images
    - The 'images' output parameter represents the processed images with the background removed. It is the result of the node's operation and is important for downstream tasks that use these images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Remove_Rembg:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'images': ('IMAGE',), 'transparency': ('BOOLEAN', {'default': True}), 'model': (['u2net', 'u2netp', 'u2net_human_seg', 'silueta', 'isnet-general-use', 'isnet-anime'],), 'post_processing': ('BOOLEAN', {'default': False}), 'only_mask': ('BOOLEAN', {'default': False}), 'alpha_matting': ('BOOLEAN', {'default': False}), 'alpha_matting_foreground_threshold': ('INT', {'default': 240, 'min': 0, 'max': 255}), 'alpha_matting_background_threshold': ('INT', {'default': 10, 'min': 0, 'max': 255}), 'alpha_matting_erode_size': ('INT', {'default': 10, 'min': 0, 'max': 255}), 'background_color': (['none', 'black', 'white', 'magenta', 'chroma green', 'chroma blue'],)}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('images',)
    FUNCTION = 'image_rembg'
    CATEGORY = 'WAS Suite/Image/AI'

    def __convertToBool(self, x):
        if type(x) == str:
            x = x.strip()
            if x.lower() == 'false' or x.lower() == 'none' or x == '0' or (x == '0.0') or (x == '0j') or (x == "''") or (x == '""') or (x == '()') or (x == '[]') or (x == '{}') or (x.lower() == 'decimal(0)') or (x.lower() == 'fraction(0,1)') or (x.lower() == 'set()') or (x.lower() == 'range(0)'):
                return False
            else:
                return True
        return bool(x)

    def image_rembg(self, images, transparency=True, model='u2net', alpha_matting=False, alpha_matting_foreground_threshold=240, alpha_matting_background_threshold=10, alpha_matting_erode_size=10, post_processing=False, only_mask=False, background_color='none'):
        transparency = transparency if type(transparency) is bool else self.__convertToBool(transparency)
        alpha_matting = alpha_matting if type(alpha_matting) is bool else self.__convertToBool(alpha_matting)
        post_processing = post_processing if type(post_processing) is bool else self.__convertToBool(post_processing)
        only_mask = only_mask if type(only_mask) is bool else self.__convertToBool(only_mask)
        if 'rembg' not in packages():
            install_package('rembg')
        from rembg import remove, new_session
        os.environ['U2NET_HOME'] = os.path.join(MODELS_DIR, 'rembg')
        os.makedirs(os.environ['U2NET_HOME'], exist_ok=True)
        bgrgba = None
        if background_color == 'black':
            bgrgba = [0, 0, 0, 255]
        elif background_color == 'white':
            bgrgba = [255, 255, 255, 255]
        elif background_color == 'magenta':
            bgrgba = [255, 0, 255, 255]
        elif background_color == 'chroma green':
            bgrgba = [0, 177, 64, 255]
        elif background_color == 'chroma blue':
            bgrgba = [0, 71, 187, 255]
        else:
            bgrgba = None
        if transparency and bgrgba is not None:
            bgrgba[3] = 0
        batch_tensor = []
        for image in images:
            image = tensor2pil(image)
            batch_tensor.append(pil2tensor(remove(image, session=new_session(model), post_process_mask=post_processing, alpha_matting=alpha_matting, alpha_matting_foreground_threshold=alpha_matting_foreground_threshold, alpha_matting_background_threshold=alpha_matting_background_threshold, alpha_matting_erode_size=alpha_matting_erode_size, only_mask=only_mask, bgcolor=bgrgba).convert('RGBA' if transparency else 'RGB')))
        batch_tensor = torch.cat(batch_tensor, dim=0)
        return (batch_tensor,)
```