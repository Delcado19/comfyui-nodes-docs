# Documentation
- Class name: PixaromaCombine
- Category: 👑 Pixaroma/🔀 Logic & Flow
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Join two inputs into one batch. Wire any two things into any1 and any2 and Combine merges them: images and video frames are stacked into one batch, latents are batched, numbers and text are gathered into a list. If one side is empty it just passes the other side through, so it is safe to use as the accumulator inside a loop (round 1 has nothing to add yet). Works with any wire type.

# Input types
## Optional
- any1
    - First input. Images, video frames, latents, numbers, text - anything. Can be empty.
    - Comfy dtype: *
    - Python dtype: object
- any2
    - Second input, joined onto the first. In a loop this is usually the new round's result, with any1 carrying everything gathered so far.
    - Comfy dtype: *
    - Python dtype: object

# Output types
- batch
    - The two inputs joined together. For images/frames this is one bigger batch; for numbers/text it is a list.
    - Comfy dtype: *
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
