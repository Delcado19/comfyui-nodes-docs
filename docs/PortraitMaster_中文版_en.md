# Documentation
- Class name: PortraitMaster_中文版
- Category: 📸肖像大师
- Output node: False
- Repo Ref: https://github.com/ZHO-ZHO-ZHO/comfyui-portrait-master-zh-cn

This node aims to generate detailed portrait generation prompts based on multiple customizable parameters. It is designed to provide users with a comprehensive set of options to fine-tune the generation process, enabling highly personalized and realistic portrait creation.

# Input types
## Required
- Lens Type
    - This parameter determines the lens type or perspective of the generated portrait. It is critical in setting the scene and framing the portrait, thereby significantly influencing the final visual result.
    - Comfy dtype: COMBO[string]
    - Python dtype: str
- Gender
    - The gender parameter is essential in determining the physical characteristics and overall appearance of the portrait subject. It guides the generation process to produce a subject that matches the specified gender.
    - Comfy dtype: COMBO[string]
    - Python dtype: str
- Age
    - Age plays an important role in shaping the facial features and skin details of the portrait. It helps generate subjects with realistic age characteristics, ensuring authenticity in the depiction.
    - Comfy dtype: INT
    - Python dtype: int
- Nationality_1
    - The first nationality parameter contributes to the cultural and ethnic background of the portrait subject, influencing the selection of features that reflect a specific nationality.
    - Comfy dtype: COMBO[string]
    - Python dtype: str
- Nationality_2
    - The second nationality parameter, when combined with the first, allows blending features from two different nationalities, adding diversity and complexity to the portrait.
    - Comfy dtype: COMBO[string]
    - Python dtype: str
- Nationality Blend
    - This parameter adjusts the blending ratio of the two nationalities, ensuring the final portrait reflects a subtle balance of the selected ethnic characteristics.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- positive
    - The positive output is a detailed prompt that incorporates all input parameters, serving as a guide for the portrait generation process. It is a critical component as it directly influences the final result.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The negative output contains a set of prompts designed to be excluded from the portrait generation. It helps refine the final output by preventing unwanted features or styles from being included.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ZHO-ZHO-ZHO/comfyui-portrait-master-zh-cn)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
