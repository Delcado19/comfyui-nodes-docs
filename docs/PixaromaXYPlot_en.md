# Documentation
- Class name: PixaromaXYPlot
- Category: 👑 Pixaroma/🔀 Logic & Flow
- Output node: True
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

XY Plot Pixaroma - compare settings at a glance. Drop this node at the end of your workflow and wire your final image into it, just like a Preview node. In the node body, pick what changes ACROSS (X) and DOWN (Y) from a dropdown of the nodes already in your graph - no extra wiring. The value box adapts to what you pick: a number gives a Start/End/Steps range, a dropdown (sampler, model) gives a checklist, and a prompt gives find-and-replace. Hit Run once: the workflow runs for every combination and the results fill a labeled grid right here in the node, with Save Disk / Save Output / Copy / Open buttons. The seed is locked across cells (unless you're plotting the seed) so the only difference you see is the thing you're testing.

# Input types
## Required
- image
    - Wire your workflow's final image here, like a Preview node. Each plot run feeds one cell of the grid.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filename_prefix
    - Filename stem used by the Save buttons. Supports subfolders with '/' and the same date / native tokens as Preview Image Pixaroma.
    - Comfy dtype: STRING
    - Python dtype: str
## Hidden
- XYPlotState
    - The XYPlotState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
- grid
    - The assembled comparison grid. During a plot it's the grid built so far; after the last cell it's complete. Wire it onward (e.g. to upscale or save) if you like.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
