
# Documentation
- Class name: GLIGENTextBoxApplyBatchCoords
- Category: KJNodes/experimental
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

GLIGENTextBoxApplyBatchCoords node is specifically designed to apply text box transformations to a batch of coordinates, integrating text-based conditional control and geometric transformations. It utilizes the CLIP model for text encoding and supports different interpolation methods for coordinate transformation, aiming to enhance the image generation process through text-driven spatial adjustments.

# Input types
## Required
- conditioning_to
    - Indicates the target condition or context for text encoding, guiding the transformation process to align with text descriptions.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- latents
    - Represents the latent space vector to which transformations are applied, serving as the foundation for subsequent image generation processes.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- clip
    - The CLIP model used for text encoding, facilitating the integration of text-based conditional control into the transformation process.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- gligen_textbox_model
    - The specific model responsible for applying text box transformations, serving as the core for executing spatial adjustments.
    - Comfy dtype: GLIGEN
    - Python dtype: torch.nn.Module
- coordinates
    - Specifies the target coordinates for transformation, determining the spatial adjustments to be applied across the entire batch.
    - Comfy dtype: STRING
    - Python dtype: str
- text
    - Text input used for conditional control, driving spatial transformations based on text descriptions.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - Width parameter of the output image, affecting the scale of the applied transformation.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height parameter of the output image, determining the vertical scale of the transformation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- conditioning
    - Comfy dtype: CONDITIONING
    - Modified conditional control data, enriched with text-driven spatial adjustments.
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]
- image
    - Comfy dtype: IMAGE
    - The generated image after applying text box transformations and conditional control, demonstrating the effects of spatial adjustments.
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
