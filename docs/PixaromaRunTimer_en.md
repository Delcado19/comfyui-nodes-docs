# Documentation
- Class name: PixaromaRunTimer
- Category: 👑 Pixaroma/🔀 Logic & Flow
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Run Timer Pixaroma - a clock that times how long a workflow takes. It resets to zero when you press Run, counts up while the workflow is working, and freezes on the total time the moment it finishes, then plays a chime so you know it is done even when you are in another tab.

The node face shows only the clock. Right-click the node for settings: turn the chime on or off, pick the sound and volume (with a Preview button), choose how many decimals to show, and set the clock color.

Chime sounds are the same library as Notify Pixaroma - drop a .mp3, .wav, or .ogg with a simple name (letters, numbers, dashes) into assets/sounds/ to add more (restart ComfyUI to pick up new files). A master mute for every run timer chime sits at the top of this node's own settings, opened with the gear button on the node toolbar or by right-clicking the node.

# Input types
No inputs are defined in the live ComfyUI metadata.

# Output types
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
