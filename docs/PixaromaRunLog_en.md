# Documentation
- Class name: PixaromaRunLog
- Category: 👑 Pixaroma/🔀 Logic & Flow
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Run Log Pixaroma - a companion to Run Timer that keeps the last 10 run times for the current workflow visible right on the node. Every time you press Run it times the whole workflow and adds the finished time to the top of the list, newest first, so you can watch a workflow get faster or notice when it suddenly slows down.

The most recent run is highlighted and the fastest one is marked. Double-click any row to write a short note about that run, such as with style lora or seed 12345, so you can tell the times apart; the note travels with its own run as newer ones push it down the list. The list is for this workflow only. Right-click the node to copy the times or clear the list.

It does not need to be wired to anything. The list is saved with the workflow, so it is still there after you switch tabs, reload the page, or restart ComfyUI. Only completed runs are logged; a run you stop or that errors out is skipped.

# Input types
No inputs are defined in the live ComfyUI metadata.

# Output types
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
