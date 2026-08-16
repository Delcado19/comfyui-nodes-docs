# Documentation
- Class name: PixaromaLoopEnd
- Category: 👑 Pixaroma/🔀 Logic & Flow
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Closing bracket of a loop. Wire 'loop' from Loop Start. Feed the values you want to carry to the next round into the value slots (for example a Combine node that piles up each round's frames). When all rounds are done, the value slots output the final carried values. Everything between Loop Start and Loop End is what repeats.

# Input types
## Optional
- value1
    - The updated carried value to hand to the next round. Wire the matching Loop Start value slot's downstream result here. Optional.
    - Comfy dtype: *
    - Python dtype: object
- value2
    - The updated carried value to hand to the next round. Wire the matching Loop Start value slot's downstream result here. Optional.
    - Comfy dtype: *
    - Python dtype: object
- value3
    - The updated carried value to hand to the next round. Wire the matching Loop Start value slot's downstream result here. Optional.
    - Comfy dtype: *
    - Python dtype: object
- value4
    - The updated carried value to hand to the next round. Wire the matching Loop Start value slot's downstream result here. Optional.
    - Comfy dtype: *
    - Python dtype: object
- value5
    - The updated carried value to hand to the next round. Wire the matching Loop Start value slot's downstream result here. Optional.
    - Comfy dtype: *
    - Python dtype: object
- loop
    - Wire this from Loop Start's loop output. Required for the loop to run.
    - Comfy dtype: FLOW_CONTROL
    - Python dtype: object
## Hidden
- dynprompt
    - The dynprompt input is used by this node during execution.
    - Comfy dtype: DYNPROMPT
    - Python dtype: object
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object

# Output types
- value1
    - Final carried value 1, after the last round.
    - Comfy dtype: *
    - Python dtype: object
- value2
    - Final carried value 2, after the last round.
    - Comfy dtype: *
    - Python dtype: object
- value3
    - Final carried value 3, after the last round.
    - Comfy dtype: *
    - Python dtype: object
- value4
    - Final carried value 4, after the last round.
    - Comfy dtype: *
    - Python dtype: object
- value5
    - Final carried value 5, after the last round.
    - Comfy dtype: *
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
