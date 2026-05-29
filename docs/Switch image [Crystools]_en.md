
# Documentation
- Class name: Switch image [Crystools]
- Category: crystools 🪛/Switch
- Output node: False
- Repo Ref: https://github.com/crystian/ComfyUI-Crystools

'Switch image [Crystools]' node allows conditional selection between two image inputs based on a boolean value. It functions as a control flow mechanism in an image processing pipeline, enabling dynamic path selection and facilitating conditional image operations or routing.

# Input types
## Required
- on_true
    - Specify the image to select when the boolean condition evaluates to true. It plays a key role in determining the output based on the condition.
    - Comfy dtype: IMAGE
    - Python dtype: IMAGE
- on_false
    - Specify the image to select when the boolean condition evaluates to false. This input ensures an alternative image can be chosen, providing flexibility for conditional image processing.
    - Comfy dtype: IMAGE
    - Python dtype: IMAGE
- boolean
    - Determine which image ('on_true' or 'on_false') to output based on the boolean condition. This parameter lies at the core of the node's conditional logic.
    - Comfy dtype: BOOLEAN
    - Python dtype: BOOLEAN

# Output types
- image
    - Output the image selected by evaluating the boolean condition. This allows dynamic image selection within the processing workflow.
    - Comfy dtype: IMAGE
    - Python dtype: IMAGE


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/crystian/ComfyUI-Crystools)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
