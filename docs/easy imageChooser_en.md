
# Documentation
- Class name: easy imageChooser
- Category: EasyUse/Image
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The easy imageChooser node provides users with the functionality to select specific images from a given batch of images. It integrates user interface components to display images and capture user selections, thereby streamlining the workflow of image processing tasks. This node significantly improves the efficiency of image processing and analysis by allowing users to visually select images of interest.

# Input types
## Optional
- images
    - The images parameter represents the batch of images from which the user can choose. It is essential for the execution of the node, as it determines which images are available for user selection, directly affecting the visual content displayed in the user interface.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The image output parameter returns the tensor of images selected by the user. These selected images can be used for subsequent processing or analysis, making the workflow more flexible and efficient.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ui
    - The ui output parameter contains user interface elements, specifically the images selected by the user. It plays a key role in feeding back the selection results to the user or subsequent processing steps, ensuring that user selections are accurately passed to the next stage of the workflow.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
