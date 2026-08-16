# Documentation
- Class name: WanVideoExperimentalArgs
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Experimental stuff

# Input types
## Required
- video_attention_split_steps
    - Steps to split self attention when using multiple prompts
    - Comfy dtype: STRING
    - Python dtype: str
- cfg_zero_star
    - https://github.com/WeichenFan/CFG-Zero-star
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- use_zero_init
    - The use_zero_init input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- zero_star_steps
    - Steps to split self attention when using multiple prompts
    - Comfy dtype: INT
    - Python dtype: int
- use_fresca
    - https://github.com/WikiChao/FreSca
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- fresca_scale_low
    - The fresca_scale_low input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- fresca_scale_high
    - The fresca_scale_high input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- fresca_freq_cutoff
    - The fresca_freq_cutoff input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- use_tcfg
    - https://arxiv.org/abs/2503.18137 TCFG: Tangential Damping Classifier-free Guidance. CFG artifacts reduction.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- raag_alpha
    - Alpha value for RAAG, 1.0 is default, 0.0 is disabled.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bidirectional_sampling
    - Enable bidirectional sampling, based on https://github.com/ff2416/WanFM
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- temporal_score_rescaling
    - Enable temporal score rescaling: https://github.com/temporalscorerescaling/TSR/
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- tsr_k
    - The sampling temperature
    - Comfy dtype: FLOAT
    - Python dtype: float
- tsr_sigma
    - How early TSR steer the sampling process
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- exp_args
    - The exp_args output is produced by this node.
    - Comfy dtype: EXPERIMENTALARGS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
