# Documentation
- Class name: Canvas_Tab
- Category: image
- Output node: False
- Repo Ref: https://github.com/Lerc/canvas_tab.git

Canvas_Tab acts as a mediator, handling and processing visual content data in a separate tab environment.

# Input types
## Required
- unique_id
Image buffer instance identifiers are crucial for managing and linking image data across different tabs or sessions.
    - Comfy dtype: str
    - Python dtype: str
- mask
Mask parameters define the interest regions in images, enabling selective processing and analysis.
    - Comfy dtype: str
    - Python dtype: str
- canvas
Canvas parameters represent the source image, serving as the foundation for all image operations and edits.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- images
Optional image sets can be used for comparison or additional processing, enhancing the versatility of the image buffer.
    - Comfy dtype: list
    - Python dtype: list

# Output types
- rgb_image
Processed RGB format image data is prepared for further analysis or operations.
    - Comfy dtype: tensor
    - Python dtype: torch.Tensor
- mask_data
Extracted mask data defines interest regions, which are essential for target image analysis and editing.
    - Comfy dtype: tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Lerc/canvas_tab)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
