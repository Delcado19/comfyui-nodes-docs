# Documentation
- Class name: PixaromaPauseImage
- Category: 👑 Pixaroma/🖼️ Image
- Output node: True
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Pause Image Pixaroma - an inline gate that stops your workflow at this point so you can look at the image before running the expensive part that comes next (an upscale, a second pass, heavy post). Wire any IMAGE source into the input and your next node onto the output.

With the toggle on Pause, pressing Run stops here and shows the image; the rest of the workflow does not run. Press Continue and only the downstream runs, fed from the exact image you saw - the model, sampler and decode are skipped, so it is fast. Press Regenerate to roll a new image at this point (a different image if your sampler seed is on randomize). Flip the toggle to Pass to run the whole workflow end to end in one go.

The snapshot lives in ComfyUI's temp folder and is cleared when ComfyUI restarts, so after a restart pause once before using Continue.

# Input types
## Optional
- image
    - The image to gate. Wire your image source here; the same image flows out the output unchanged when the gate passes or continues.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Hidden
- PauseState
    - The PauseState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
- image
    - The image continuing downstream - the live input in Pause/Pass mode, or the reloaded snapshot in Continue mode.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
