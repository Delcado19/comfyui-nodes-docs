# Documentation
- Class name: SegmentAnythingUltra
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Improvements to [ComfyUI Segment Anything](https://github.com/storyicon/comfyui_segment_anything), incorporating the Alpha Matte node from spacepxl's [ComfyUI-Image-Filters](https://github.com/spacepxl/ComfyUI-Image-Filters) for more detailed mask edges. Thanks to the original authors.

*Please follow the installation method for ComfyUI Segment Anything to install the models. If you have already correctly installed ComfyUI Segment Anything, you can skip this step.
* Download config.json, model.safetensors, tokenizer_config.json, tokenizer.json, and vocab.txt from [here](https://huggingface.co/bert-base-uncased/tree/main) to the ```ComfyUI/models/bert-base-uncased``` folder.
* Download [GroundingDINO_SwinT_OGC config file](https://huggingface.co/ShilongLiu/GroundingDINO/resolve/main/GroundingDINO_SwinT_OGC.cfg.py), [GroundingDINO_SwinT_OGC model](https://huggingface.co/ShilongLiu/GroundingDINO/resolve/main/groundingdino_swint_ogc.pth),
[GroundingDINO_SwinB config file](https://huggingface.co/ShilongLiu/GroundingDINO/resolve/main/GroundingDINO_SwinB.cfg.py), [GroundingDINO_SwinB model](https://huggingface.co/ShilongLiu/GroundingDINO/resolve/main/groundingdino_swinb_cogcoor.pth) to the ```ComfyUI/models/grounding-dino``` folder.
* Download [sam_vit_h](https://dl.fbaipublicfiles.com/segment_anything/sam_vit_h_4b8939.pth), [sam_vit_l](https://dl.fbaipublicfiles.com/segment_anything/sam_vit_l_0b3195.pth),
[sam_vit_b](https://dl.fbaipublicfiles.com/segment_anything/sam_vit_b_01ec64.pth), [sam_hq_vit_h](https://huggingface.co/lkeab/hq-sam/resolve/main/sam_hq_vit_h.pth),
[sam_hq_vit_l](https://huggingface.co/lkeab/hq-sam/resolve/main/sam_hq_vit_l.pth), [sam_hq_vit_b](https://huggingface.co/lkeab/hq-sam/resolve/main/sam_hq_vit_b.pth),
[mobile_sam](https://github.com/ChaoningZhang/MobileSAM/blob/master/weights/mobile_sam.pt) to the ```ComfyUI/models/sams``` folder.

# Input types

## Required

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- sam_model
    - SAM model.
    - Comfy dtype: list_sam_model()
    - Python dtype: str

- grounding_dino_model
    - GroundingDINO model.
    - Comfy dtype: list_groundingdino_model()
    - Python dtype: str

- threshold
    - SAM threshold.
    - Comfy dtype: FLOAT
    - Python dtype: float

- detail_range
    - Edge detail range.
    - Comfy dtype: INT
    - Python dtype: int

- black_point
    - Edge black sampling threshold.
    - Comfy dtype: FLOAT
    - Python dtype: float

- white_point
    - Edge white sampling threshold.
    - Comfy dtype: FLOAT
    - Python dtype: float

- process_detail
    - Setting this to False will skip edge processing to save runtime.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- prompt
    - SAM prompt input.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
