# Documentation
- Class name: MiDaS_Background_Foreground_Removal
- Category: WAS Suite/Image/AI
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

This node uses the MiDaS model to estimate depth from images and removes background or foreground based on user input, enhancing visual clarity and focus of the image.

# Input types
## Required
- image
    - Source image, from which depth is estimated and background or foreground is removed.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- midas_model
    - Specifies the size of the MiDaS model for depth estimation; larger models typically provide more accurate results but require more computational resources.
    - Comfy dtype: COMBO[ ['DPT_Large', 'DPT_Hybrid', 'DPT_Small' ]]
    - Python dtype: str
- remove
    - Indicates whether to remove background or foreground from the image, affecting the composition of the output.
    - Comfy dtype: COMBO[ ['background', 'foreground' ]]
    - Python dtype: str
## Optional
- use_cpu
    - Determines whether to use CPU for processing. Offloading to GPU is usually faster but requires compatible hardware.
    - Comfy dtype: COMBO[ ['false', 'true' ]]
    - Python dtype: str
- threshold
    - Applies thresholding to the depth map, which can refine the separation of the removed element from the rest of the image.
    - Comfy dtype: COMBO[ ['false', 'true' ]]
    - Python dtype: str
- threshold_low
    - Sets the lower limit of the depth value threshold range, affecting segmentation precision.
    - Comfy dtype: FLOAT
    - Python dtype: float
- threshold_mid
    - Defines the midpoint of the threshold range, further adjusting the transition between retained and removed image parts.
    - Comfy dtype: FLOAT
    - Python dtype: float
- threshold_high
    - Establishes the upper limit of the threshold range, which can affect the processing of the deepest parts of the image during removal.
    - Comfy dtype: FLOAT
    - Python dtype: float
- smoothing
    - Controls the amount of smoothing applied to the depth map, which helps reduce noise and artifacts in the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- background_red
    - Sets the red component of the background color used to fill removed areas, affecting the visual appearance of the resulting image.
    - Comfy dtype: INT
    - Python dtype: int
- background_green
    - Determines the green component of the background color, contributing to the overall color scheme of the removed element area.
    - Comfy dtype: INT
    - Python dtype: int
- background_blue
    - Specifies the blue component of the background color, used to achieve the desired color balance in the edited image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result_image
    - The processed image with the specified background or foreground elements removed, ready for further use or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- depth_map
    - The depth map derived from the input image, visually representing estimated distances in the scene and used internally for the removal process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: GPU

# Source code
```
class MiDaS_Background_Foreground_Removal:

    def __init__(self):
        self.midas_dir = os.path.join(MODELS_DIR, 'midas')

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'use_cpu': (['false', 'true'],), 'midas_model': (['DPT_Large', 'DPT_Hybrid', 'DPT_Small'],), 'remove': (['background', 'foregroud'],), 'threshold': (['false', 'true'],), 'threshold_low': ('FLOAT', {'default': 10, 'min': 0, 'max': 255, 'step': 1}), 'threshold_mid': ('FLOAT', {'default': 200, 'min': 0, 'max': 255, 'step': 1}), 'threshold_high': ('FLOAT', {'default': 210, 'min': 0, 'max': 255, 'step': 1}), 'smoothing': ('FLOAT', {'default': 0.25, 'min': 0.0, 'max': 16.0, 'step': 0.01}), 'background_red': ('INT', {'default': 0, 'min': 0, 'max': 255, 'step': 1}), 'background_green': ('INT', {'default': 0, 'min': 0, 'max': 255, 'step': 1}), 'background_blue': ('INT', {'default': 0, 'min': 0, 'max': 255, 'step': 1})}}
    RETURN_TYPES = ('IMAGE', 'IMAGE')
    FUNCTION = 'midas_remove'
    CATEGORY = 'WAS Suite/Image/AI'

    def midas_remove(self, image, midas_model, use_cpu='false', remove='background', threshold='false', threshold_low=0, threshold_mid=127, threshold_high=255, smoothing=0.25, background_red=0, background_green=0, background_blue=0):
        global MIDAS_INSTALLED
        if not MIDAS_INSTALLED:
            self.install_midas()
        import cv2 as cv
        i = 255.0 * image.cpu().numpy().squeeze()
        img = i
        img_original = tensor2pil(image).convert('RGB')
        cstr('Downloading and loading MiDaS Model...').msg.print()
        torch.hub.set_dir(self.midas_dir)
        midas = torch.hub.load('intel-isl/MiDaS', midas_model, trust_repo=True)
        device = torch.device('cuda') if torch.cuda.is_available() and use_cpu == 'false' else torch.device('cpu')
        cstr(f'MiDaS is using device: {device}').msg.print()
        midas.to(device).eval()
        midas_transforms = torch.hub.load('intel-isl/MiDaS', 'transforms')
        if midas_model == 'DPT_Large' or midas_model == 'DPT_Hybrid':
            transform = midas_transforms.dpt_transform
        else:
            transform = midas_transforms.small_transform
        img = cv.cvtColor(img, cv.COLOR_BGR2RGB)
        input_batch = transform(img).to(device)
        cstr('Approximating depth from image.').msg.print()
        with torch.no_grad():
            prediction = midas(input_batch)
            prediction = torch.nn.functional.interpolate(prediction.unsqueeze(1), size=img.shape[:2], mode='bicubic', align_corners=False).squeeze()
        if remove == 'foreground':
            depth = 255 - prediction.cpu().numpy().astype(np.uint8)
            depth = depth.astype(np.float32)
        else:
            depth = prediction.cpu().numpy().astype(np.float32)
        depth = depth * 255 / np.max(depth) / 255
        depth = Image.fromarray(np.uint8(depth * 255))
        if threshold == 'true':
            levels = self.AdjustLevels(threshold_low, threshold_mid, threshold_high)
            depth = levels.adjust(depth.convert('RGB')).convert('L')
        if smoothing > 0:
            depth = depth.filter(ImageFilter.GaussianBlur(radius=smoothing))
        depth = depth.resize(img_original.size).convert('L')
        background_red = int(background_red) if isinstance(background_red, (int, float)) else 0
        background_green = int(background_green) if isinstance(background_green, (int, float)) else 0
        background_blue = int(background_blue) if isinstance(background_blue, (int, float)) else 0
        background_color = (background_red, background_green, background_blue)
        background = Image.new(mode='RGB', size=img_original.size, color=background_color)
        result_img = Image.composite(img_original, background, depth)
        del midas, device, midas_transforms
        del transform, img, img_original, input_batch, prediction
        return (pil2tensor(result_img), pil2tensor(depth.convert('RGB')))

    class AdjustLevels:

        def __init__(self, min_level, mid_level, max_level):
            self.min_level = min_level
            self.mid_level = mid_level
            self.max_level = max_level

        def adjust(self, im):
            im_arr = np.array(im)
            im_arr[im_arr < self.min_level] = self.min_level
            im_arr = (im_arr - self.min_level) * (255 / (self.max_level - self.min_level))
            im_arr[im_arr < 0] = 0
            im_arr[im_arr > 255] = 255
            im_arr = im_arr.astype(np.uint8)
            im = Image.fromarray(im_arr)
            im = ImageOps.autocontrast(im, cutoff=self.max_level)
            return im

    def install_midas(self):
        global MIDAS_INSTALLED
        if 'timm' not in packages():
            install_package('timm')
        MIDAS_INSTALLED = True
```