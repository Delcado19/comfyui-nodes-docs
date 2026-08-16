# Documentation
- Class name: Pixaroma3D
- Category: 👑 Pixaroma/🎨 Editors
- Output node: True
- Repo Ref: https://github.com/pixaroma/ComfyUI-Pixaroma

3D Builder Pixaroma - a full 3D scene editor that runs inside ComfyUI. Open the fullscreen editor on the node to drop in primitives (cubes, spheres, cylinders, torus, blob, terrain, rock, teapot, hollow vessels), composite assets (trees, houses, furniture, flowers), or import your own .glb / .obj models.

Camera controls (orbit, pan, zoom), realistic lighting, undo / redo, and live preview are all built in. Keyboard shortcuts use the Blender layout (G to grab, S to scale, R to rotate, Shift+D to duplicate, plus Numpad 1/3/7 for view presets).

Outputs the final render as an IMAGE plus its width and height so you can wire straight into ControlNet (great for depth maps, line art, normal maps) or any img2img workflow.

Inputs are dynamic placeholder slots created by the editor when you add a background-image layer; their tooltips live on the JS side.

# Input types
No inputs are defined in the live ComfyUI metadata.

# Output types
- image
    - The rendered 3D scene.
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
[View source repository](https://github.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
