# Documentation
- Class name: Trigger
- Category: 😺dzNodes
- Output node: True
- Repo Ref: https://github.com/chflame163/ComfyUI_MSSpeech_TTS

The node acts as a conditional gate, evaluating inputs to determine whether they meet specified conditions, thereby controlling data flow through the system.

# Input types
## Required
- always_true
    - A boolean flag that, when true, directly triggers the node's action. It is a key parameter because it represents the primary condition for node activation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- anything
    - An optional input that, if present, can help trigger the node, adding flexibility to the conditions required for activation.
    - Comfy dtype: ANY
    - Python dtype: Any

# Output types
- ret
    - The result of the node's evaluation, indicating whether the activation condition has been satisfied.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_MSSpeech_TTS)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
