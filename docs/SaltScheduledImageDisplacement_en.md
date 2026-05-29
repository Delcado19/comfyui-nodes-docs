
# Documentation
- Class name: SaltScheduledImageDisplacement
- Category: SALT/Scheduling/Image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltScheduledImageDisplacement node is used to apply scheduled displacement effects to a batch of images based on provided amplitude and angle schedules. This node utilizes an optimized displacement layer for image transformation, allowing dynamic manipulation of images in a sequence, adjusting the displacement effect according to predefined schedules. This method enables fine-grained control over images, creating dynamic visual effects that change over time or sequence.

# Input types
## Required
- images
    - The batch of images to be displaced. This is the key input that defines the base content to undergo displacement transformation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- displacement_images
    - Images used to determine the displacement direction and magnitude for each image in the batch. These images play a key role in guiding the displacement process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- amplitude_schedule
    - Schedule specifying the displacement magnitude for each image in the batch. It controls the intensity of the displacement effect.
    - Comfy dtype: LIST
    - Python dtype: Optional[List[float]]
- angle_schedule
    - Schedule detailing the displacement angle for each image in the batch. This parameter determines the direction of the displacement effect.
    - Comfy dtype: LIST
    - Python dtype: Optional[List[float]]

# Output types
- images
    - The batch of images after applying the scheduled displacement. This output shows the transformed images after the displacement effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
