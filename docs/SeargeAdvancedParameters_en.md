# Documentation
- Class name: SeargeAdvancedParameters
- Category: UI_INPUTS
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node class encapsulates advanced parameters for refining image details, managing dynamic configurations, and adjusting visual elements such as contrast and saturation. It provides fine-grained control over the image enhancement process without directly involving underlying model operations.

# Input types
## Required
- dynamic_cfg_method
    - This parameter specifies the method used to dynamically configure the image enhancement process. It is critical for adjusting the node's behavior according to different input requirements and achieving the desired output quality.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- dynamic_cfg_factor
    - This factor influences the degree of dynamic configuration applied to image enhancement. It is important for fine-tuning the balance between computational efficiency and output detail.
    - Comfy dtype: FLOAT
    - Python dtype: float
- refiner_detail_boost
    - This parameter controls the level of detail enhancement applied during the refinement process. It is essential for improving the clarity and sharpness of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- contrast_factor
    - This factor adjusts the contrast of the image, which is important for creating visual impact and enhancing the overall aesthetic appeal of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- saturation_factor
    - This parameter manages the saturation level of the image, affecting the vividness of colors and the richness of the visual experience.
    - Comfy dtype: FLOAT
    - Python dtype: float
- latent_detailer
    - This parameter selects a potential detail enhancer to further enhance subtle image details. It plays a key role in achieving more nuanced and realistic visual results.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
## Optional
- data
    - This parameter is used to pass in the data to be processed by the node. It is important for the node to operate correctly and produce the expected results.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Any

# Output types
- data
    - The output contains the processed data with advanced parameters applied, ready for further use in the image enhancement pipeline.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
