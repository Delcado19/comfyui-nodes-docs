# Documentation
- Class name: GLSLShader
- Category: image/shader
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Apply GLSL ES fragment shaders to images. u_resolution (vec2) is always available.

# Input types
## Required
- fragment_shader
    - GLSL fragment shader source code (GLSL ES 3.00 / WebGL 2.0 compatible)
    - Comfy dtype: STRING
    - Python dtype: str
- size_mode
    - Output size: 'from_input' uses first input image dimensions, 'custom' allows manual size
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- images
    - Images are available as u_image0-4 (sampler2D) in the shader code
    - Comfy dtype: COMFY_AUTOGROW_V3
    - Python dtype: object
- floats
    - Floats are available as u_float0-19 in the shader code
    - Comfy dtype: COMFY_AUTOGROW_V3
    - Python dtype: object
- ints
    - Ints are available as u_int0-19 in the shader code
    - Comfy dtype: COMFY_AUTOGROW_V3
    - Python dtype: object
- bools
    - Booleans are available as u_bool0-9 (bool) in the shader code
    - Comfy dtype: COMFY_AUTOGROW_V3
    - Python dtype: object
- curves
    - Curves are available as u_curve0-3 (sampler2D, 1D LUT) in the shader code. Sample with texture(u_curve0, vec2(x, 0.5)).r
    - Comfy dtype: COMFY_AUTOGROW_V3
    - Python dtype: object

# Output types
- IMAGE0
    - Available via layout(location = 0) out vec4 fragColor0 in the shader code
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- IMAGE1
    - Available via layout(location = 1) out vec4 fragColor1 in the shader code
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- IMAGE2
    - Available via layout(location = 2) out vec4 fragColor2 in the shader code
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- IMAGE3
    - Available via layout(location = 3) out vec4 fragColor3 in the shader code
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
