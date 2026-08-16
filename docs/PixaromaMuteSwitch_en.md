# Documentation
- Class name: PixaromaMuteSwitch
- Category: 👑 Pixaroma/🔀 Logic & Flow
- Output node: True
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Mute Switch Pixaroma - toggle whole branches of your workflow on and off with one node. Wire the last node of each scene (usually a KSampler) into a row, then click the row's pill to skip or enable that scene on the next Run.

The pill at top-left switches between Single mode (exactly one scene runs at a time, like a radio button) and Multi mode (any combination of scenes can run). The pill at top-right switches between Mute (the scene does not run at all) and Bypass (each node in the scene passes its input through unchanged).

When several scenes share an upstream node, that node only gets muted when every scene that depends on it is OFF - so you never accidentally break a scene that is still active.

# Input types
## Optional
- input_1
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_2
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_3
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_4
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_5
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_6
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_7
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_8
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_9
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_10
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_11
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_12
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_13
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_14
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_15
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_16
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_17
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_18
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_19
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_20
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_21
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_22
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_23
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_24
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_25
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_26
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_27
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_28
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_29
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_30
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_31
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object
- input_32
    - Wire any node from a scene here. Clicking this row's pill on the node body toggles the whole branch upstream of this wire on or off.
    - Comfy dtype: *
    - Python dtype: object

# Output types
- out
    - Phantom pass-through used to CHAIN Mute Switches. Wire this into another Mute Switch's input row; toggling that outer row OFF will then also mute every node THIS switch controls (cascade). For normal data flow, wire your real nodes directly into Mute Switch rows - this output carries no real data.
    - Comfy dtype: PIXAROMA_MUTE_CHAIN
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
