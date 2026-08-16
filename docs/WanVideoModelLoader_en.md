# Documentation
- Class name: WanVideoModelLoader
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- model
    - These models are loaded from the 'ComfyUI/models/diffusion_models' -folder
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- base_precision
    - The base_precision input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- quantization
    - Optional quantization method, 'disabled' acts as autoselect based by weights. Scaled modes only work with matching weights, _fast modes (fp8 matmul) require CUDA compute capability >= 8.9 (NVIDIA 4000 series and up), e4m3fn generally can not be torch.compiled on compute capability < 8.9 (3000 series and under)
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- load_device
    - Initial device to load the model to, NOT recommended with the larger models unless you have 48GB+ VRAM
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- attention_mode
    - The attention_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- compile_args
    - The compile_args input is used by this node during execution.
    - Comfy dtype: WANCOMPILEARGS
    - Python dtype: object
- block_swap_args
    - The block_swap_args input is used by this node during execution.
    - Comfy dtype: BLOCKSWAPARGS
    - Python dtype: object
- lora
    - The lora input is used by this node during execution.
    - Comfy dtype: WANVIDLORA
    - Python dtype: object
- vram_management_args
    - Alternative offloading method from DiffSynth-Studio, more aggressive in reducing memory use than block swapping, but can be slower
    - Comfy dtype: VRAM_MANAGEMENTARGS
    - Python dtype: object
- extra_model
    - Extra model to add to the main model, ie. VACE or MTV Crafter
    - Comfy dtype: VACEPATH
    - Python dtype: object
- fantasytalking_model
    - FantasyTalking model https://github.com/Fantasy-AMAP
    - Comfy dtype: FANTASYTALKINGMODEL
    - Python dtype: object
- multitalk_model
    - Multitalk model
    - Comfy dtype: MULTITALKMODEL
    - Python dtype: object
- fantasyportrait_model
    - FantasyPortrait model
    - Comfy dtype: FANTASYPORTRAITMODEL
    - Python dtype: object
- rms_norm_function
    - RMSNorm function to use, 'pytorch' is the new native torch RMSNorm, which is faster (when not using torch.compile mostly) but changes results slightly. 'default' is the original WanRMSNorm
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: WANVIDEOMODEL
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
