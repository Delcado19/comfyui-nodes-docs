# Documentation
- Class name: LTXVHDRDecodePostprocess
- Category: Lightricks/HDR
- Output node: True
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Decompresses VAE-decoded output from HDR IC-LoRA (LogC3) and applies Reinhard tonemapping. Place after VAE Decode. 'tonemapped' is the SDR preview; 'hdr_linear' is raw linear HDR for downstream use. Enable 'save_exr' to write an EXR image sequence.if save_exr is enabled, make sure to set OPENCV_IO_ENABLE_OPENEXR=1 environment in the command line

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- exposure
    - Exposure in stops (EV). 0 = no change, +1 = 2x brighter, -1 = half brightness.
    - Comfy dtype: FLOAT
    - Python dtype: float
- save_exr
    - Save raw linear HDR frames as EXR sequence.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- output_dir
    - Directory for EXR frames (relative to ComfyUI output directory, or absolute path).
    - Comfy dtype: STRING
    - Python dtype: str
- filename_prefix
    - The filename_prefix input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- half_precision
    - Save EXR as float16 (half). Smaller files, negligible quality loss for most workflows.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- tonemapped
    - The tonemapped output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- hdr_linear
    - The hdr_linear output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
