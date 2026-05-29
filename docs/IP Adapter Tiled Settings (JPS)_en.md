
# Documentation
- Class name: IP Adapter Tiled Settings (JPS)
- Category: JPS Nodes/Settings
- Output node: False
- Repo Ref: https://github.com/jps326/ComfyUI_JPS_Nodes

This node aims to configure and adjust image processing settings for tiled image generation, allowing detailed customization of the image processing pipeline. It facilitates adjusting various parameters such as model selection, weight type, noise level, and interpolation method to tailor the image generation process to specific needs.

# Input types
## Required
- ipa_model
    - Specifies the model used for image processing operations, affecting the overall quality and characteristics of the generated image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- ipa_wtype
    - Determines the weight type for image processing, influencing how weights are applied during the generation process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- ipa_weight
    - Sets the weight for image processing, adjusting the degree to which certain parameters affect the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_noise
    - Defines the noise level to be added to the image processing, affecting the texture and detail of the generated image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_start
    - Marks the starting point of the image processing operation, setting initial conditions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_end
    - Indicates the ending point of the image processing operation, determining the final conditions of image generation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tile_short
    - Specifies the shortest side of the tile, affecting the overall tiling strategy and output size.
    - Comfy dtype: INT
    - Python dtype: int
- tile_weight
    - Determines the weight applied to tiles during image processing, influencing the balance between different tiles.
    - Comfy dtype: FLOAT
    - Python dtype: float
- zoom
    - Sets the scaling level for image processing, changing the focus and proportion of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- offset_w
    - Adjusts the horizontal offset for image processing, shifting the focus of image generation horizontally.
    - Comfy dtype: INT
    - Python dtype: int
- offset_h
    - Adjusts the vertical offset for image processing, shifting the focus of image generation vertically.
    - Comfy dtype: INT
    - Python dtype: int
- prepare_type
    - Defines the preparation type for image processing, setting the method by which the image is prepared before processing.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- prepare_intpol
    - Specifies the interpolation method used in image processing, affecting the smoothness and quality of the generated image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- prepare_sharpening
    - Sets the sharpening level applied during image processing, enhancing the clarity and detail of the generated image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- ip_adapter_tiled_settings
    - Returns a comprehensive set of settings optimized for tiled image processing, including model details, weight adjustments, noise levels, etc., to optimize the image generation pipeline.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[int, str, float, float, float, float, int, float, int, int, int, int, str, float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/jps326/ComfyUI_JPS_Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
