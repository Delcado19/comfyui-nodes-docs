
# Documentation
- Class name: Stack Images
- Category: List Stuff
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Stack Images node is designed to aggregate multiple images into a composite image. It supports multiple stacking modes and configurations, including handling image batches, applying specific stacking directions, and the ability to add optional labels in both horizontal and vertical directions. This functionality is particularly useful for visualizing image collections in a structured and coherent manner.

# Input types
## Required
- images
    - A list of images to be stacked together. This parameter is crucial for defining the set of images that will be processed and combined into a single composite image.
    - Comfy dtype: IMAGE
    - Python dtype: List[Tensor]
- splits
    - Defines how images are divided into batches or groups for stacking. This parameter affects the organization of images in the final composite image.
    - Comfy dtype: INT
    - Python dtype: List[int]
- stack_mode
    - Specifies the direction (horizontal or vertical) in which images are stacked within a batch. This affects the layout of the composite image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- batch_stack_mode
    - Determines the stacking direction of image batches. This parameter is crucial for defining the overall structure of the composite image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]

## Optional
- horizontal_labels
    - Optional labels for the horizontal axis, used when the stacking direction allows horizontal labeling. Enhances the interpretability of the composite image.
    - Comfy dtype: *
    - Python dtype: Optional[List[str]]
- vertical_labels
    - Optional labels for the vertical axis, used when the stacking direction allows vertical labeling. Enhances the interpretability of the composite image.
    - Comfy dtype: *
    - Python dtype: Optional[List[str]]

# Output types
- Image
    - The composite image produced after stacking.
    - Comfy dtype: IMAGE
    - Python dtype: Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
