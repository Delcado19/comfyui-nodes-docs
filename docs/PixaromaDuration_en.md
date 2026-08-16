# Documentation
- Class name: PixaromaDuration
- Category: 👑 Pixaroma/🔢 Values
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Pick how long a video should be in seconds, and this works out the frame count the model actually wants. It replaces the pair of nodes people normally wire up for this: one to hold the number of seconds, and one doing maths on it.

Video models are fussy about length. Most will not accept just any frame count: they want it to land on a particular pattern, like every 17th frame plus 5 for MiniMax H3, or every 4th frame plus 1 for Wan and Hunyuan. Open the settings from the gear on the node, choose your model from the list, and the node handles that for you. You can also type the frame rate, the step and the plus yourself for a model that is not listed, or switch to Custom and write your own formula.

You decide what durations are allowed, so the node only ever offers lengths that make sense for the workflow it is in. Give it a short list like 3, 5 and 10 and you get buttons to click. Give it a range and you get a slider. Two of these nodes on the same canvas can be set up completely differently.

The node shows you what it will send before you run, including the true length, because snapping to the model's pattern usually changes it a little: 5 seconds at 24 frames per second becomes 124 frames, which is really 5.17 seconds.

Find it by searching for duration, seconds, length, frames, fps, or video length.

# Input types
## Hidden
- DurationState
    - The DurationState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- frames
    - The number of frames to generate, already adjusted to the pattern your model accepts. Wire this into the length or frame count input of your video node.
    - Comfy dtype: INT
    - Python dtype: int
- seconds
    - How long the video will really be, in seconds. This is the frame count divided by the frame rate, so it matches the picture exactly. Use it for anything that has to line up with the video, such as audio length. It can differ slightly from the number you picked, because rounding to the model's pattern changes the length a little.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
