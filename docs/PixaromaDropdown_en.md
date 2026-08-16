# Documentation
- Class name: PixaromaDropdown
- Category: 👑 Pixaroma/🔢 Values
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

A dropdown you fill in yourself. Each entry has a short name and the value it stands for, so you pick 'warm light' instead of pasting a whole sentence every time. Handy for LoRA trigger words, favourite sizes, step counts, or any value you retype often.

Open the settings from the gear on the node, add your entries, and choose what the node sends out: text, a whole number, a decimal, or on/off. The output dot renames itself to match, so you can see at a glance what will come out.

The small letter on the node decides which entry it sends each time you run, and you can click it to change: F keeps the entry you picked, I steps to the next one every run, and R picks any of them at random.

It ignores whatever it is plugged into: the list and the type are yours, set on the node. That is the difference from Control Panel Pixaroma, whose controls copy the type of the input they are wired to.

The list is saved inside the workflow, so sending someone the workflow sends your entries with it. Export and Import move a list between workflows.

Find it by searching for dropdown, list, options, preset, choose, pick, or trigger.

# Input types
## Hidden
- DropdownState
    - The DropdownState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- value
    - The value behind the entry you picked. What kind of value it is follows the type set on the node: text, a whole number, a decimal, or on/off.
    - Comfy dtype: *
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
