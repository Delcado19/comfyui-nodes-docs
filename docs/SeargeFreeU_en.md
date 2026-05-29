# Documentation
- Class name: SeargeFreeU
- Category: UI_INPUTS
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node helps configure and manage parameters for systems designed to operate in search-free environments, providing a simplified method for defining operational modes and settings.

# Input types
## Required
- freeu_mode
    - Determines the system's operational mode, which is critical for adjusting system behavior and performance according to specific requirements.
    - Comfy dtype: COMBO[FREEU_MODES]
    - Python dtype: Enum
- b1
    - Affects initial parameter settings, which are essential for establishing the foundational conditions of system operation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- b2
    - Affects secondary settings that work alongside primary settings to refine the system's operational parameters.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s1
    - Modifies parameters that control system sensitivity, adjusting its response to input data to ensure optimal interaction.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s2
    - Adjusts another parameter, fine-tuning the system's operation with a focus on improving its adaptability and precision.
    - Comfy dtype: FLOAT
    - Python dtype: float
- freeu_version
    - Specifies the version of the system in use, which is important for ensuring compatibility and feature availability.
    - Comfy dtype: FREEU_VERSION
    - Python dtype: Enum

# Output types
- data
    - Contains structured configuration data used to set up and guide system operation.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
