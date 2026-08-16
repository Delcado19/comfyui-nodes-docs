# Documentation
- Class name: PixaromaLongestSide
- Category: 👑 Pixaroma/✂️ Resize & Crop
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Scale an image so its longest side is the size you pick, and optionally crop it to a shape on the way.

Pick a size from the tabs (864, 1024, 1216 and so on) and the longer edge of the picture becomes exactly that, with the other edge following so nothing is squashed. It works the same for a tall photo or a wide one, so you never have to decide whether you mean width or height.

The shape chips underneath crop the picture first. Keep leaves the shape alone and simply scales it. Pick 1:1, 16:9, 9:16 or any other shape and the biggest piece of that shape is taken from the middle of your picture, so nothing stretches and no empty bars appear. Which sizes and shapes appear, plus where the crop is taken from, are all in the settings behind the gear.

The small button at the top steps through Off, 8, 16, 32 and 64, and rounds both sides to that step, because most models want sizes in steps like these. Outputs the finished image plus its width and height, ready to wire into a sampler.

# Input types
## Required
- image
    - The picture to resize. Its longer edge becomes the size you picked on the node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Hidden
- LongestSideState
    - The LongestSideState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The resized picture, cropped first if you picked a shape other than keep.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- width
    - The finished width in pixels, already rounded to the step if one is set.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The finished height in pixels, already rounded to the step if one is set.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
