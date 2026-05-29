# Documentation
- Class name: AddCLIPSDXLParams
- Category: conditioning/advanced
- Output node: False
- Repo Ref: https://github.com/BlenderNeko/ComfyUI_ADV_CLIP_emb

The AddCLIPSDXLParams node is designed to handle advanced encoding tasks and enhance conditioning data. It accepts various parameters related to image size and cropping, applying them to the conditioning input to prepare subsequent encoding steps. The node plays a key role in ensuring the encoding process meets the specific requirements of the target application, such as image resolution and cropping specifications.

# Input types
## Required
- conditioning
- Conditioning parameters are critical to the node because they provide the base data that will be manipulated and prepared for encoding. This key input directly affects the node's output and the subsequent encoding process.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Any]
- width
- The width parameter specifies the width of the image to be processed. This important input determines the horizontal resolution, which can significantly impact encoding quality and performance.
    - Comfy dtype: INT
    - Python dtype: int
- height
- The height parameter defines the vertical resolution of the image. This key input, together with width, determines the overall image size and is essential to the encoding process.
    - Comfy dtype: INT
    - Python dtype: int
- target_width
- The target_width parameter sets the desired width of the final encoded image. This important parameter influences the scaling and aspect ratio of the image after encoding.
    - Comfy dtype: INT
    - Python dtype: int
- target_height
- The target_height parameter sets the desired height of the final encoded image. Used with target_width, it maintains the expected aspect ratio and size of the image after encoding.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- crop_w
- The crop_w parameter indicates the width of the cropping region within the image. This optional input can be used to adjust the area of interest during encoding.
    - Comfy dtype: INT
    - Python dtype: int
- crop_h
- The crop_h parameter specifies the height of the cropping region. It works with crop_w to define the size of the crop area, which may be important for focusing encoding on a specific part of the image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- encoded_conditioning
- The encoded_conditioning output represents the processed and enhanced conditioning data for use in later stages of the encoding pipeline. It contains modifications to the original conditioning based on the input parameters.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/BlenderNeko/ComfyUI_ADV_CLIP_emb)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
