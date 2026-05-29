
# Documentation
- Class name: StabilityAPI_SD3
- Category: KJNodes/experimental
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The StabilityAPI_SD3 node interacts with the StabilityAI API to generate images or transform existing ones. The node simplifies API interaction complexity, allowing users to focus on creative tasks.

# Input types
## Required
- prompt
- Accepts text descriptions or prompts to guide the image generation process, influencing visual output based on the provided text.
    - Comfy dtype: STRING
    - Python dtype: str
- n_prompt
- Specifies the number of prompts to use, allowing multiple prompts to affect the generation process.
    - Comfy dtype: STRING
    - Python dtype: int
- seed
- Provides a seed value for the random number generator, ensuring reproducibility of generated images.
    - Comfy dtype: INT
    - Python dtype: int
- model
- Defines the model used for image generation, enabling selection based on desired features or capabilities.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- aspect_ratio
- Sets the aspect ratio of the output image, controlling image dimensions.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- output_format
- Determines the output image format, such as JPEG or PNG, to meet user preferences.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Optional
- api_key
- Supplies the API key required to access the StabilityAI API, ensuring authorized use.
    - Comfy dtype: STRING
    - Python dtype: str
- image
- Provides an initial image for img2img tasks, serving as the basis for transformation or enhancement.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- img2img_strength
- Controls the strength of transformations applied to the initial image in img2img tasks, adjusting the degree of change.
    - Comfy dtype: FLOAT
    - Python dtype: float
- disable_metadata
- Disables embedding metadata in generated images, offering control over privacy and data storage.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image
- Outputs the generated or transformed image as the node's result.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- ui
- Returns a UI component, typically used to display the generated or transformed image.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
