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
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
