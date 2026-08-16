# Documentation
- Class name: PixaromaLoadImagesFolder
- Category: 👑 Pixaroma/🖼️ Image
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Load many images from any folder on disk and feed them through your workflow one at a time - one finished result per image. Pick all, the first N, or hand-pick specific images in a thumbnail gallery. Same resize options as Load Image Pixaroma (max megapixels, longest side, scale by, fit inside, crop to fill, match aspect ratio). Outputs are a list: image, mask, width, height, filename, index, total. Wire filename into a Save node so each result keeps its original name, and width/height into an empty latent so it matches each image's size. Hit Run once and leave the batch count at 1.

# Input types
## Hidden
- LoadImagesFolderState
    - The LoadImagesFolderState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - Each selected image, one per list item (after any resize).
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - Each image's mask from its alpha channel (blank if it has none).
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- width
    - Each image's width in pixels (after any resize) - wire into an empty latent so it matches.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Each image's height in pixels (after any resize).
    - Comfy dtype: INT
    - Python dtype: int
- filename
    - Each image's filename without the extension - wire into Save so results keep their original names. With subfolders included this is normally flattened (sub/cat becomes sub_cat) so two same-named files cannot collide; turn on 'Keep the folder structure in the name' to pass the real path instead and rebuild the same folders when saving.
    - Comfy dtype: STRING
    - Python dtype: str
- index
    - 1-based position of each image in this batch (1, 2, 3 ...).
    - Comfy dtype: INT
    - Python dtype: int
- total
    - How many images are in this batch - i.e. how many loaded (same for every item).
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
