# Documentation
- Class name: PixaromaSetNode
- Category: 👑 Pixaroma/🔀 Logic & Flow
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Store any connection under a name, then read it back anywhere with a Get Pixaroma node. A wireless wire that keeps the canvas clean. It also has a passthrough output, so a nearby node can wire to it directly while far ones read it with a Get. It lives only in the editor: at run time the value flows straight from the original source, so it never changes the result or slows anything down. Wire anything in, type a name, and keep the node collapsed to stay tidy.

# Input types
## Required
- name
    - The variable name. A Get Pixaroma node reads this value by picking this name.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- value
    - Wire anything here to store it under the name. A Get Pixaroma node (or this node's own passthrough output) reads it back.
    - Comfy dtype: *
    - Python dtype: object

# Output types
- *
    - The same value you wired in. Connect a nearby node directly here, or read it from anywhere with Get Pixaroma.
    - Comfy dtype: *
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
