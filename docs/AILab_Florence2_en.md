# Documentation
- Class name: AILab_Florence2
- Category: 🧪AILab/🧽RMBG
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

A sophisticated ComfyUI custom node engineered for advanced image background removal and precise segmentation of objects, faces, clothing, and fashion elements. This tool leverages a diverse array of models, including RMBG-2.0, INSPYRENET, BEN, BEN2, BiRefNet, SDMatte models, SAM, SAM2, SAM3 and GroundingDINO, while also incorporating a new feature for real-time background replacement and enhanced edge detection for improved accuracy.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- model_name
    - Base = stable, +ft = fine-tuned captions, CogFlorence = sharper phrase alignment.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- task
    - Polygon masks use prompts; phrase grounding/region proposals return boxes.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- precision
    - Lower precision saves VRAM; fp32 is safest if you hit NaNs.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- attention
    - flash_attn2 needs PyTorch 2.1+; use eager if kernels fail.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- fill_mask
    - When true, bbox tasks also output filled mask tensors.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- output_mask_select
    - Comma-separated indices or labels (e.g. 0,2,person) to limit masks.
    - Comfy dtype: STRING
    - Python dtype: str
- keep_model_loaded
    - Keep weights on the current device after execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- text_prompt
    - Used for polygon masks or phrase grounding; ignored for region proposals.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - The MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- DATA
    - The DATA output is produced by this node.
    - Comfy dtype: JSON
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/1038lab/ComfyUI-RMBG)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
