# Documentation
- Class name: PixaromaLoopStart
- Category: 👑 Pixaroma/🔀 Logic & Flow
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Opening bracket of a loop. Put your nodes between Loop Start and Loop End and the whole section repeats. Set 'total' to the number of rounds. 'index' counts the rounds starting at 0. The value slots are things you want to carry from one round into the next (for example the frames built so far, or a running counter) - wire the matching Loop End value slots back so each round picks up where the last left off. Leave the value slots empty if your loop does not need to carry anything.

# Input types
## Required
- total
    - How many times the section between Loop Start and Loop End runs.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- value1
    - Starting value carried into round 0. After that, the matching slot from Loop End takes over each round. Optional.
    - Comfy dtype: *
    - Python dtype: object
- value2
    - Starting value carried into round 0. After that, the matching slot from Loop End takes over each round. Optional.
    - Comfy dtype: *
    - Python dtype: object
- value3
    - Starting value carried into round 0. After that, the matching slot from Loop End takes over each round. Optional.
    - Comfy dtype: *
    - Python dtype: object
- value4
    - Starting value carried into round 0. After that, the matching slot from Loop End takes over each round. Optional.
    - Comfy dtype: *
    - Python dtype: object
- value5
    - Starting value carried into round 0. After that, the matching slot from Loop End takes over each round. Optional.
    - Comfy dtype: *
    - Python dtype: object
## Hidden
- start_index
    - The start_index input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object

# Output types
- value1
    - Carried value 1 for this round.
    - Comfy dtype: *
    - Python dtype: object
- value2
    - Carried value 2 for this round.
    - Comfy dtype: *
    - Python dtype: object
- value3
    - Carried value 3 for this round.
    - Comfy dtype: *
    - Python dtype: object
- value4
    - Carried value 4 for this round.
    - Comfy dtype: *
    - Python dtype: object
- value5
    - Carried value 5 for this round.
    - Comfy dtype: *
    - Python dtype: object
- loop
    - Wire this into Loop End's loop input to pair the two brackets.
    - Comfy dtype: FLOW_CONTROL
    - Python dtype: object
- index
    - Which round we are on, starting at 0 (0, 1, 2 ...).
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
