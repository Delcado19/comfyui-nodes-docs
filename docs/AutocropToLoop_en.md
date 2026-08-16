# Documentation
- Class name: AutocropToLoop
- Category: video utils
- Output node: False
- Repo Ref: https://github.com/Artificial-Sweetener/WhiteRabbit

Auto-crops the clip to create a smoother loop: tests crops from the end and scores the seam so it feels like a normal step.

# Input types
## Required
- clip_frames
    - Your full clip (NHWC, 0–1). Tries every crop from 0..max_end_crop_frames and returns the best loop.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- max_end_crop_frames
    - Largest crop to test at the END. Higher = more candidates (slower), but potentially better.
    - Comfy dtype: INT
    - Python dtype: int
- include_first_step
    - Use the first neighbor pair (frame 0→1) as a target step size/similarity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- include_last_step
    - Use the last neighbor pair inside the KEPT region as a target.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- include_global_median_step
    - Also use the median step across the KEPT region (needs ≥3 frames). Helps ignore outliers.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seam_window_frames
    - Average over multiple aligned pairs across the seam. Larger = more robust.
    - Comfy dtype: INT
    - Python dtype: int
- distance_metric
    - How to measure step size for matching. L1 is usually more forgiving; MSE penalizes big errors more.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- score_in_8bit
    - Score with an 8-bit view (simulate export). Output video still stays float.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- use_ssim_similarity
    - Include SSIM so the seam ‘looks’ like a normal neighbor—avoid freeze or jump.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- use_exposure_guard
    - Promote smooth brightness across the seam (reduces flicker pops).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- use_flow_guard
    - Encourage consistent motion across the seam (needs OpenCV; slower).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- weight_step_size
    - Importance of matching step size. Higher = less freeze/jump risk.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_similarity
    - Importance of visual similarity (SSIM). Helps avoid a frozen-looking seam.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_exposure
    - Importance of even brightness across the seam.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_flow
    - Importance of motion continuity across the seam.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ssim_downsample_scales
    - SSIM scales to average, as a comma list. Example: 1,2 = full-res and half-res.
    - Comfy dtype: STRING
    - Python dtype: str
- accelerate_with_gpu
    - If ON and CUDA is available, run scoring on GPU for a big speedup (same results).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- use_mixed_precision
    - If ON (with GPU), use mixed precision for SSIM/conv math (faster on larger clips).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- cropped_clip
    - The cropped_clip output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- end_crop_frames
    - The end_crop_frames output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- cropped_length
    - The cropped_length output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- score
    - The score output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- diagnostics_csv
    - The diagnostics_csv output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Artificial-Sweetener/WhiteRabbit)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
