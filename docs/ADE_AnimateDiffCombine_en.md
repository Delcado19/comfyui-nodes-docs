# Documentation
- Class name: WeightAdjustIndivAttnMultNode
- Category: Animate Diff 🎭🅐🅓
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

Originally designed to combine multiple animation frames into a cohesive sequence, this node helps create complex animations from a single frame.

# Input types
## Required

- images
    - a collection of animation frames combined into a single sequence, supporting the creation of complex animations from a single frame.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image.Image]

- frame_rate
    - Specify the playback speed of the combined animation sequence, determining the frame display speed.
    - Comfy dtype: INT
    - Python dtype: int
- loop_count
    - Define the number of repetitions for the animation sequence, where 0 indicates infinite looping.
    - Comfy dtype: INT
    - Python dtype: int
- filename_prefix
    - Prefix for the output filename, aiding in organizing and identifying generated animations.
    - Comfy dtype: STRING
    - Python dtype: str
- format
    - Format of the output animation file, such as GIF, allowing customizable output types.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- pingpong
    - A boolean indicating whether the animation should play forward and backward, creating a seamless looping effect.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- save_image
    - Determines whether the combined animation sequence should be saved as an image file, providing flexible output handling.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

## Output types
- gif
    - The generated animation file, combining input frames according to the specified parameters.
    - Comfy dtype: GIF
    - Python dtype: str

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
