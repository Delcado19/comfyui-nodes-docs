# Documentation
- Class name: LaMa
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

根据图像遮罩擦除物体。本节点是对[IOPaint](https://www.iopaint.com/)的封装，由 SOTA AI 模型提供支持， 感谢原作者。
提供LaMa, [LDM](https://github.com/CompVis/latent-diffusion), [ZITS](https://github.com/DQiaole/ZITS_inpainting),[MAT](https://github.com/fenglinglwb/MAT), [FcF](https://github.com/SHI-Labs/FcF-Inpainting), [Manga](https://github.com/msxie92/MangaInpainting) 模型以及 SPREAD 擦除方法。请查看链接了解各个模型的介绍。
请下载模型文件 [lama models(百度网盘)](https://pan.baidu.com/s/1LllR9TJHP1G9uEwWT3Mvkg?pwd=tvzv) 或者 [lama models(Google Drive)](https://drive.google.com/drive/folders/1Aq0a4sybb3SRxi7j1e1_ZbBRjaWDdP9e?usp=sharing), 将文件放到ComfyUI/models/lama

# Input types

## Required

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- lama_model
    - LaMa模型。
    - Comfy dtype: STRING_ONEOF
    - Python dtype: str
    - Options:
        - lama
        - ldm
        - zits
        - mat
        - fcf
        - manga
        - spread

- device
    - 在正确安装torch和Nvidia CUDA驱动程序后，使用cuda将明显提高运行速度。
    - Comfy dtype: STRING_ONEOF
    - Python dtype: str
    - Options:
        - cuda
        - cpu

- invert_mask
    - Invert mask.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- mask_grow
    - 遮罩扩张幅度。正值是向外扩张，负值是向内收缩。
    - Comfy dtype: INT
    - Python dtype: int

- mask_blur
    - 蒙版模糊。
    - Comfy dtype: INT
    - Python dtype: int

# Output types

- image
    - 修复后的图片。
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```python
class LaMa:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        model_list = ['lama', 'ldm', 'zits', 'mat', 'fcf', 'manga', 'spread']
        device_list = ['cuda', 'cpu']
        return {
            "required": {
                "image": ("IMAGE", ),  #
                "mask": ("MASK",),  #
                "lama_model": (model_list,),
                "device": (device_list,),
                "invert_mask": ("BOOLEAN", {"default": False}),  # 反转mask
                "mask_grow": ("INT", {"default": 25, "min": -255, "max": 255, "step": 1}),
                "mask_blur": ("INT", {"default": 8, "min": -255, "max": 255, "step": 1}),
            },
            "optional": {
            }
        }

    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("image",)
    FUNCTION = 'lama'
    CATEGORY = '😺dzNodes/LayerUtility'

    def lama(self, image, mask, lama_model, device, invert_mask, mask_grow, mask_blur):

        l_images = []
        l_masks = []
        ret_images = []

        for l in image:
            l_images.append(torch.unsqueeze(l, 0))
            m = tensor2pil(l)
            if m.mode == 'RGBA':
                l_masks.append(m.split()[-1])
        if mask is not None:
            if mask.dim() == 2:
                layer_mask = torch.unsqueeze(mask, 0)
            l_masks = []
            for m in mask:
                if invert_mask:
                    m = 1 - m
                l_masks.append(tensor2pil(torch.unsqueeze(m, 0)).convert('L'))
        if len(l_masks) == 0:
            log(f"Error: {NODE_NAME} skipped, because the available mask is not found.", message_type='error')
            return (image,)

        max_batch = max(len(l_images), len(l_masks))

        for i in range(max_batch):
            _image = l_images[i] if i < len(l_images) else l_images[-1]
            _mask = l_masks[i] if i < len(l_masks) else l_masks[-1]
            if mask_grow or mask_blur:
                _mask = tensor2pil(expand_mask(image2mask(_mask), mask_grow, mask_blur))

            if lama_model == 'spread':
                ret_image = pixel_spread(tensor2pil(_image).convert('RGB'), ImageChops.invert(_mask.convert('RGB')))
            else:
                temp_dir = os.path.join(folder_paths.get_temp_directory(), generate_random_name('_lama_', '_temp', 16))
                if os.path.isdir(temp_dir):
                    shutil.rmtree(temp_dir)
                image_dir = os.path.join(temp_dir, 'image')
                mask_dir = os.path.join(temp_dir, 'mask')
                result_dir = os.path.join(temp_dir, 'result')
                try:
                    os.makedirs(image_dir)
                    os.makedirs(mask_dir)
                    os.makedirs(result_dir)
                except Exception as e:
                    print(e)
                    log(f"Error: {NODE_NAME} skipped, because unable to create temporary folder.", message_type='error')
                    return (image, )
                file_name = os.path.join(generate_random_name('lama_', '_temp', 16) + '.png')
                try:
                    tensor2pil(_image).save(os.path.join(image_dir, file_name))
                    _mask.save(os.path.join(mask_dir, file_name))
                except IOError as e:
                    print(e)
                    log(f"Error: {NODE_NAME} skipped, because unable to create temporary file.", message_type='error')
                    return (image, )
                # process
                from iopaint import cli
                cli.run(model=lama_model, device=device, image=Path(image_dir), mask=Path(mask_dir), output=Path(result_dir))
                ret_image = check_image_file(os.path.join(result_dir, file_name), 500)
                shutil.rmtree(temp_dir)
            ret_images.append(pil2tensor(ret_image))


        log(f"{NODE_NAME} Processed {len(ret_images)} image(s).", message_type='finish')
        return (torch.cat(ret_images, dim=0),)
```