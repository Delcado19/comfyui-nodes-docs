# Documentation
- Class name: GLIGENTextBoxApply
- Category: conditioning/gligen
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The GLIGENTextBoxApply node is designed to add text-based conditions to an existing conditioning set. It processes input text, integrates it with a given model, and allows manipulation of text-based elements in a graph or data-driven context.

# Input types
## Required
- conditioning_to
    - The conditioning_to parameter is critical, as it defines the target to which text-based conditions will be appended. It plays a key role in determining the context in which the text is applied.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Any]
- clip
    - The clip parameter is required to encode the text into a format the model can process. It is essential for converting text information into a suitable representation for further analysis.
    - Comfy dtype: CLIP
    - Python dtype: Dict[str, Any]
- gligen_textbox_model
    - The gligen_textbox_model parameter is necessary for applying text conditions. It handles the model-specific logic that governs how text is integrated into the conditioning set.
    - Comfy dtype: GLIGEN
    - Python dtype: torch.nn.Module
- text
    - The text parameter is the core input of the node, containing the text information to be processed and appended as a condition. It is the primary data source for the node's operation.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - The width parameter specifies the width dimension for the text application, which is important for defining the spatial context of the text within the conditioning set.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter defines the height dimension for the text application, playing a significant role in establishing the vertical context of the text within the conditioning framework.
    - Comfy dtype: INT
    - Python dtype: int
- x
    - The x parameter determines the horizontal position at which the text is applied within the conditioning set, influencing the overall layout of the text-based conditions.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - The y parameter sets the vertical position for the text application, which is critical for the precise placement of the text within the conditioning framework.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- conditioning
    - The output conditioning parameter represents the updated conditioning set now containing text-based elements. It is significant because it reflects the changes made by the node's operation.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
