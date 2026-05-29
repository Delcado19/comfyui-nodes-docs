# Documentation
- Class name: RegionalConditioningSimple
- Category: InspirePack/Regional
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

Such nodes provide a method to apply regional conditioning to images using CLIP and specified masks. It allows fine-tuning image generation based on user input to focus on certain areas, improving the relevance and accuracy of the generated content.

# Input types
## Required
- clip
    - The “clip” parameter is crucial for the node's operation, as it defines the visual context on which image generation is based. It is the primary input of the conditioning process.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- mask
    - The “mask” parameter is essential for specifying the region of interest within the image. It guides the node to selectively apply conditioning effects, ensuring that the generated content aligns with the user's desired focus area.
    - Comfy dtype: MASK
    - Python dtype: PIL.Image
- strength
    - The “strength” parameter adjusts the intensity of regional conditioning, allowing the user to control the degree of emphasis on the specified area. It directly affects the salience of the conditioning features in the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- set_cond_area
    - The “set_cond_area” parameter determines the method of defining the regional conditioning area. It can be the default setting or based on the mask boundary, which affects how the mask is applied to the image.
    - Comfy dtype: COMBO
    - Python dtype: str
- prompt
    - The “prompt” parameter provides a text description that guides the image generation process. It is an integral part of conditioning, as it gives the AI context and direction to create content that matches the desired output.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- conditioning
    - The “conditioning” output represents the processed regional conditioning data that has been applied to the image. It encapsulates the effects of the input parameters and is a key component for further image manipulation or analysis.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
