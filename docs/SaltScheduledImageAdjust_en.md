
# Documentation
- Class name: SaltScheduledImageAdjust
- Category: SALT/Scheduling/Image
- Output node: False
- Repo Ref: https://github.com/saltruism/salt-nodes

The SaltScheduledImageAdjust node is specifically designed to apply scheduled adjustments to a batch of images, allowing dynamic changes to brightness, contrast, saturation, sharpness, Gaussian blur, and edge enhancement over time. It can create sequences where image attributes evolve according to a predetermined schedule, thereby enhancing visual storytelling or data visualization effects.

# Input types
## Required
- images
    - The collection of images to adjust. This parameter is the core of the node operation, defining the set of images that will undergo scheduled transformations.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]
## Optional
- masks
    - An optional mask to selectively apply adjustments on images. This allows more precise control over which areas of the image are affected by the adjustments.
    - Comfy dtype: MASK
    - Python dtype: List[Image]
- brightness_schedule
    - A schedule defining how image brightness changes over time. This achieves dynamic visual effects by altering image brightness according to a predetermined sequence.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- contrast_schedule
    - A schedule specifying contrast adjustments over time, allowing to increase or decrease the difference between the darkest and brightest parts of the image.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- saturation_schedule
    - Defines how image color intensity changes over time, enabling the creation of sequences of vibrant or muted colors.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- sharpness_schedule
    - A schedule that adjusts image detail sharpness or blur over time, helping to focus on specific elements or create dreamlike sequences.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- gaussian_blur_schedule
    - Determines the amount of Gaussian blur applied to images over time, allowing for the creation of soft focus effects or transitions.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- edge_enhance_schedule
    - A schedule to enhance edges within images over time, which can be used to highlight details or create a more graphical look.
    - Comfy dtype: LIST
    - Python dtype: List[float]

# Output types
- image
    - The images after applying the scheduled adjustments, showing the dynamic changes over time.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/saltruism/salt-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
