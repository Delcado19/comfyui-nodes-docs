
# Documentation
- Class name: FL_Glitch
- Category: 🏵️Fill Nodes
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Flowty_CRM

The FL_Glitch node applies a digital glitch effect to images, with optional color offset and seed control for reproducibility. It processes a batch of images, applying a glitch effect that distorts visual content in a stylized manner, and provides progress updates during processing.

# Input types
## Required
- images
    - The images parameter is a batch of images to which the glitch effect will be applied. It is essential for defining the input data that will undergo the glitch transformation process.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
## Optional
- glitch_amount
    - The glitch_amount parameter controls the intensity of the glitch effect applied to the images. It plays a key role in determining the degree of visual distortion.
    - Comfy dtype: FLOAT
    - Python dtype: float
- color_offset
    - The color_offset parameter enables or disables the color offset in the glitch effect, adding an extra layer of visual manipulation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- seed
    - The seed parameter ensures the reproducibility of the glitch effect applied to the images, allowing consistent results across different runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is an image tensor that has been processed to contain a digital glitch effect, potentially with a color offset depending on input parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Flowty_CRM)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
