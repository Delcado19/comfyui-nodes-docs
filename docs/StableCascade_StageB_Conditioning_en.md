# Documentation
- Class name: StableCascade_StageB_Conditioning
- Category: conditioning/stable_cascade
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The `set_prior` method integrates prior information into the conditioning process, enhancing stability and predictability in the cascading stage. This method plays a key role in shaping the output by setting priors based on the provided conditioning and stage context.

# Input types
## Required
- conditioning
- The `conditioning` parameter is crucial to the node's operation because it provides the contextual information required to set the prior. It directly influences the node's execution by determining the prior's characteristics.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]
- stage_c
- The `stage_c` parameter is essential to the node's function, representing the potential stage context used to modulate the prior. Its value affects how the prior is set during node operation.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, Any]

# Output types
- conditioning
- The output `conditioning` is a modified version of the input, reflecting the updated prior information. It is important because it passes the node-processed context to subsequent stages.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
