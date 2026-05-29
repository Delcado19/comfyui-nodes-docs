# Documentation
- Class name: SeargeConditioningParameters
- Category: UI_INPUTS
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node class encapsulates the logic for adjusting conditional parameters in search and rescue scenarios, aiming to optimize search strategies based on different ratios and scores.

# Input types
## Required
- base_conditioning_scale
    - The base condition ratio is a fundamental parameter that influences the initial conditions when search operations begin.
    - Comfy dtype: FLOAT
    - Python dtype: float
- refiner_conditioning_scale
    - This ratio refines the search process, allowing for more granular adjustments to the strategy as operations progress.
    - Comfy dtype: FLOAT
    - Python dtype: float
- target_conditioning_scale
    - The target condition ratio is critical for concentrating search efforts on high-priority areas within the operational zone.
    - Comfy dtype: FLOAT
    - Python dtype: float
- positive_conditioning_scale
    - This parameter enhances the positive reinforcement aspects of the search, directing resources toward areas with higher potential for success.
    - Comfy dtype: FLOAT
    - Python dtype: float
- negative_conditioning_scale
    - The negative condition ratio helps avoid less effective areas, ensuring resources are not wasted in regions with lower likelihood of success.
    - Comfy dtype: FLOAT
    - Python dtype: float
- positive_aesthetic_score
    - The positive aesthetic score aids the decision-making process by evaluating the visual appeal of search areas, potentially leading to more efficient operations.
    - Comfy dtype: FLOAT
    - Python dtype: float
- negative_aesthetic_score
    - This score reflects the less desirable aspects of the search area, steering the search away from regions that may hinder operational progress.
    - Comfy dtype: FLOAT
    - Python dtype: float
- precondition_mode
    - The preset mode sets the operational framework for conditions, determining how search parameters are applied at the start of a task.
    - Comfy dtype: PRECONDITION_MODES
    - Python dtype: Enum
- precondition_strength
    - The preset intensity affects the strength of initial condition application, influencing the overall search strategy.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- data
    - The data stream provides a continuous flow of information that can be used to dynamically adjust search parameters in real time.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Output types
- data
    - The data stream has updated conditional parameters, serving as the foundation for ongoing decision-making in search and rescue operations.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
