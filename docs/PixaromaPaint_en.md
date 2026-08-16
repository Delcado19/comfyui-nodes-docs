# Documentation
- Class name: PixaromaPaint
- Category: 👑 Pixaroma/🎨 Editors
- Output node: True
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Paint Pixaroma - a fast, simple painting editor with layers. Drop an image onto the closed node body to add it as a new top layer (opens the editor and stacks the dropped image above the auto-created Background, never replacing existing layers). Open the fullscreen editor to draw with pencil / brush / eraser / smudge / fill / shape / picker tools, on stacked layers with Photoshop-style controls (drag to reorder, opacity, blend modes, merge, flatten). The brush engine supports custom hardness / opacity, and the smudge tool gives you smooth color blending.

AI Remove Background button (rembg-powered) on image-source layers extracts subjects with one click. Save with transparent background directly to disk via the toolbar checkbox.

Outputs the final composited IMAGE plus its width and height. Inside the editor you can also drag-drop more images to add as additional layers, or wire any upstream IMAGE source into the optional input slot the editor creates.

Inputs are dynamic placeholder slots created by the editor; their tooltips live on the JS side.

# Input types
No inputs are defined in the live ComfyUI metadata.

# Output types
- image
    - The painted image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- width
    - Image width in pixels.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Image height in pixels.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
