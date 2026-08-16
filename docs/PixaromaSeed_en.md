# Documentation
- Class name: PixaromaSeed
- Category: 👑 Pixaroma/🔢 Values
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Seed Pixaroma - a seed source you wire into KSampler (or any node with a seed input). One Seed node can feed several samplers at once so they all share the same seed.

Two modes: Random rolls a fresh seed every run; Fixed keeps the same seed for repeatable results. Buttons: New fixed random rolls a new seed and locks it; Use last seed brings back the previous run's seed; Copy puts the current seed on your clipboard. In Random mode a Last run line shows the seed that actually generated the last image.

Outputs the seed as INT. State saves and restores with the workflow.

To print the seed into a saved file name, put %Seed Pixaroma.seed% in the filename field of a Save Image, Save Mp4 Pixaroma, or Preview Image Pixaroma node (use this node's name, not the sampler's; rename the node to change the token).

# Input types
## Hidden
- SeedState
    - The SeedState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- seed
    - The chosen seed as a whole number. Wire it into a sampler's seed input.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
