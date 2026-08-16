# Documentation
- Class name: PixaromaCrop
- Category: 👑 Pixaroma/✂️ Resize & Crop
- Output node: True
- Repo Ref: https://github.com/pixaroma/ComfyUI-Pixaroma

Image Crop Pixaroma - crop any image visually instead of typing pixel coordinates. Three ways to provide the source: wire any upstream IMAGE into the input slot (Load Image, VAE Decode, ControlNet output, anything), drag and drop an image file onto the node body, or paste from the clipboard with Ctrl+V. Drag-drop and paste both auto-disconnect the upstream wire so your manually loaded image takes over.

The on-node panel exposes Width / Height / X / Y / Ratio / Alignment fields - math expressions like '1024+512' or '512*2' work in the number fields. Picking a non-Free Alignment auto-recenters the crop rect against the source image, so changing W or H to 512 with Center Crop selected snaps X / Y to the centered offsets automatically. The fullscreen editor shows a draggable crop rectangle with handles, plus standard preset ratios (1:1, 16:9, 9:16, etc.) for social-media-friendly aspects, and a Load Image button that lets you swap the source from inside the editor (also auto-disconnects the upstream wire).

Outputs the cropped IMAGE, a matching cropped MASK (wire a MASK in - such as Load Image's MASK output - to carry transparency through the crop with the exact same box), the new width and height, and a 'crop_info' wire. Feed crop_info into Image Uncrop Pixaroma to paste an edited version of the crop back onto the original image at the exact same spot (crop, fix/upscale, then put it back).

The 'image' input is optional - wire an upstream IMAGE into it, or load an image directly via drag-drop, Ctrl+V paste, or the editor's Load Image button (those override the wire).

# Input types
## Optional
- image
    - Wire any upstream IMAGE here to crop it (Load Image, VAE Decode, ControlNet output, anything). You can also drag-drop an image file onto the node body or paste one with Ctrl+V - those load the image directly and disconnect this wire.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - Optional. Wire a MASK here (for example Load Image's MASK output) to crop the transparency with the exact same box as the image - the result comes out the 'mask' output. Leave it unwired and the mask output is a fully-opaque mask sized to the crop (unless the loaded file itself has transparency, which is used automatically).
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- image
    - The cropped image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The cropped mask, cut with the exact same box as the image. Comes from the wired MASK input (or, for a dropped/pasted file, its own transparency); a fully-opaque mask sized to the crop when there is no transparency.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- crop_info
    - Crop info for Image Uncrop Pixaroma - carries the original image plus where this crop came from, so an edited crop can be pasted back onto the original at the exact same spot. Wire it into Image Uncrop Pixaroma.
    - Comfy dtype: PIXAROMA_CROP_INFO
    - Python dtype: object
- width
    - Cropped width in pixels.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Cropped height in pixels.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
