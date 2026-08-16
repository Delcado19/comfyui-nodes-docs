# Documentation
- Class name: NotifyPixaroma
- Category: 👑 Pixaroma/🔀 Logic & Flow
- Output node: True
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Plays a notification sound when this node is reached during a workflow run. Drop one at the end of a workflow to hear when rendering finishes, or branch one off any node mid-graph to be alerted at a checkpoint. Useful when you are in another browser tab or app while ComfyUI is running.

Sound files are auto-enumerated from assets/sounds/ - drop in a .mp3, .wav, or .ogg there to add more (restart ComfyUI to pick up new files).

Each node is also a checkpoint timer: on every Run it measures how long the workflow took to reach it, shows that time on the node, and keeps a per-node history you can open by right-clicking (Notify time history). Timing is independent of the sound (it still records when the sound is off) and can be switched off per node from the right-click menu.

A small arrow on the clock row folds the node down to just the clock when you want it compact, and folds it back out again (also on the right-click menu as Collapse / Expand).

Each node has its own sound toggle, and a master sound switch covers every Notify node at once - it lives in this node's own settings, opened with the gear button on the node toolbar or by right-clicking the node, and on the right-click menu as Mute all Notify sounds. The Preview button bypasses both toggles, since clicking it is a manual request to hear the sound right now.

# Input types
## Required
- any
    - Connect any node's output here. The notification fires when this node is reached during workflow execution. The wire's data is not used or modified - this node is a terminal (no output).
    - Comfy dtype: *
    - Python dtype: object
- enabled
    - Per-node SOUND toggle. When OFF, this specific node stays silent on every Run, but its checkpoint timer still records (right-click the node -> Notify time history). Other Notify nodes in the workflow are unaffected.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- sound
    - Notification sound to play. The dropdown lists every .mp3 / .wav / .ogg in assets/sounds/.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- volume
    - Playback volume from 0 (silent) to 100 (full). Affects both the Run-time notification and the Preview button.
    - Comfy dtype: INT
    - Python dtype: int
- label
    - Optional name shown in browser and ComfyUI console logs when the node fires. Helpful when multiple Notify nodes fire in one workflow. Leave blank to use the sound name.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
