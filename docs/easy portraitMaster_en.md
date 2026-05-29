# Documentation
- Class name: portraitMaster
- Category: EasyUse/Prompt
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The portraitMaster node aims to generate detailed portrait generation prompts based on a comprehensive set of parameters. It encapsulates the essence of portrait generation by combining various attributes such as facial features, expressions, and lighting conditions to achieve a high degree of customization and realism in the output.

# Input types
## Required
- shot
    - The “shot” parameter is crucial for defining the type of portrait to be generated. It affects the overall composition and framing of the image, which is essential for capturing the desired aesthetic and narrative.
    - Comfy dtype: COMBO
    - Python dtype: List[str]
## Optional
- gender
    - The “gender” parameter is essential for guiding the generation of the portrait subject. It helps determine physical features and expression details that match the selected gender, contributing to the realism and credibility of the portrait.
    - Comfy dtype: COMBO
    - Python dtype: List[str]
- age
    - The “age” parameter plays a significant role in determining the appearance of the portrait subject. It affects the rendering of facial features, skin details, and other age-related attributes, ensuring that the portrait accurately reflects the selected age group.
    - Comfy dtype: INT
    - Python dtype: int
- nationality_1
    - The “nationality_1” parameter, together with the “nationality_2” parameter, helps define the cultural and ethnic background of the portrait subject. This adds diversity and richness to the generated portrait, adding layers of depth and context.
    - Comfy dtype: COMBO
    - Python dtype: List[str]
- facial_expression
    - The “facial_expression” parameter is crucial for conveying the emotional state of the portrait subject. It guides the generation of facial features and expressions that match the selected emotion, enhancing the emotional impact and narrative of the portrait.
    - Comfy dtype: COMBO
    - Python dtype: List[str]

# Output types
- prompt
    - The “prompt” output is a comprehensive string that integrates all input parameters into a coherent and structured format. It serves as the basis for the portrait generation process, ensuring that the expected details and nuances are captured in the final image.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - The “negative_prompt” output is a supplementary string that provides additional instructions for refining the portrait. It addresses aspects that should be minimized or avoided, helping to improve the overall quality and accuracy of the generated image.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
