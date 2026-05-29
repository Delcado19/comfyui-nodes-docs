
# Documentation
- Class name: Unpack SDXL Tuple
- Category: Efficiency Nodes/Misc
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The "Unpack SDXL Tuple" node is designed to decompose complex tuple structures into their constituent components, specifically for efficiently processing data related to models, clips, and conditioning elements. It facilitates the separation and individual handling of base and refiner elements, improving modularity and flexibility when working with SDXL tuples.

# Input types
## Required
- sdxl_tuple
    - The SDXL tuple to be unpacked, containing combined model, clip, and conditioning information for both base and refiner stages.
    - Comfy dtype: SDXL_TUPLE
    - Python dtype: Tuple[torch.nn.Module, Any, str, str, torch.nn.Module, Any, str, str]

# Output types
- BASE_MODEL
    - The base model component extracted from the SDXL tuple.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- BASE_CLIP
    - The base clip component extracted from the SDXL tuple.
    - Comfy dtype: CLIP
    - Python dtype: Any
- BASE_CONDITIONING+
    - The positive base conditioning component extracted from the SDXL tuple.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- BASE_CONDITIONING-
    - The negative base conditioning component extracted from the SDXL tuple.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- REFINER_MODEL
    - The refiner model component extracted from the SDXL tuple.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- REFINER_CLIP
    - The refiner clip component extracted from the SDXL tuple.
    - Comfy dtype: CLIP
    - Python dtype: Any
- REFINER_CONDITIONING+
    - The positive refiner conditioning component extracted from the SDXL tuple.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- REFINER_CONDITIONING-
    - The negative refiner conditioning component extracted from the SDXL tuple.
    - Comfy dtype: CONDITIONING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [Pack SDXL Tuple](../../efficiency-nodes-comfyui/Nodes/Pack SDXL Tuple.md)
    - [TonemapNoiseWithRescaleCFG](../../ComfyUI_experiments/Nodes/TonemapNoiseWithRescaleCFG.md)
    - [FreeU_V2](../../Comfy/Nodes/FreeU_V2.md)

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
