# Documentation
- Class name: PixaromaCompare
- Category: 👑 Pixaroma/🖼️ Image
- Output node: True
- Repo Ref: https://github.com/pixaroma/ComfyUI-Pixaroma

Image Compare Pixaroma - the easiest way to see the difference between two images. Wire any two IMAGE outputs into image1 and image2 (e.g. before / after upscaling, original / inpainted, two checkpoint variants), then run the workflow.

The on-node viewer offers three modes: side-by-side with a draggable slider, overlap with adjustable opacity, or 'diff' which highlights exactly what changed between the two. The mode a new Compare node starts in is set in this node's own settings, opened with the gear button on the node toolbar or by right-clicking the node.

Both inputs are optional. If only one image is connected (for example when a branch feeding one input is muted or bypassed), the node just shows that image; if neither is connected it shows a short note - it never throws a system error, so it is safe to leave in a workflow that toggles between text-to-image and image-to-image.

# Input types
## Optional
- image1
    - First image to compare (e.g. the 'before' image). Optional - if it isn't connected, or its branch is muted / bypassed, the node just shows the other image (or a note) instead of throwing an error.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image2
    - Second image to compare (e.g. the 'after' image). Optional - the on-node viewer compares once BOTH images arrive; with only one connected it simply shows that one, and with neither it shows a short note.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
