
# Documentation
- Class name: GLIGENTextBoxApplyBatch
- Category: KJNodes/experimental
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

GLIGENTextBoxApplyBatch node is a node for batch processing text box applications, efficiently applying text overlays or modifications across multiple images or frames. This node streamlines the process of adding text to images, especially suitable for scenarios that require consistent text elements across a series of images, such as video frames or related image collections.

# Input types
## Required
- conditioning_to
    - Specifies the target condition data to which the text box modification will be applied, serving as the basis for the text overlay process.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- latents
    - Provides the latent representation of images in the batch, used as the basis for applying the text box modification.
    - Comfy dtype: LATENT
    - Python dtype: list
- clip
    - Represents the CLIP model used for encoding text input, facilitating the generation of text-based features applied to images.
    - Comfy dtype: CLIP
    - Python dtype: object
- gligen_textbox_model
    - Specifies the model used to generate text box overlays, enabling customization and application of text to images.
    - Comfy dtype: GLIGEN
    - Python dtype: object
- text
    - Allows specifying the text content to be applied across the entire image batch, serving as the main content for text overlay or modification.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - Defines the width of the text box overlay, allowing customization of the overlay size according to the image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Specifies the height of the text box overlay, enabling precise control of the overlay dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- coordinates
    - Provides positioning information for the text box overlay, determining where the text will be applied on the image.
    - Comfy dtype: STRING
    - Python dtype: tuple
- interpolation
    - Determines the interpolation method for the text box application, affecting the smoothness and blending effect of the text overlay on the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- conditioning
    - Reflects the modified condition data after applying the text box overlay, integrating the text modification into the condition framework.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- image
    - Displays the final image after applying the text box overlay, showing the visual modifications made to the image batch.
    - Comfy dtype: IMAGE
    - Python dtype: list


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
