# Documentation
- Class name: Ideogram4PromptBuilderKJ
- Category: KJNodes/text
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Visual prompt builder for Ideogram 4's structured JSON caption format.

Drag on the canvas to draw regions; select a region to set its type (obj/text),  
description, text, and color palette. Set the background and optional style fields  
as widgets. Outputs the assembled caption JSON string.  

bbox is normalized to a 0-1000 grid as [ymin, xmin, ymax, xmax]; width/height set
the canvas aspect ratio.

Canvas controls:
- Drag: draw a new region
- Ctrl/Cmd-drag: force-draw a new region even on top of an existing one
- Click: select a region · Alt-click: cycle overlapping regions
- Double-click: edit the description inline
- Right-click: region list (select / delete / duplicate / reorder, top = front)
- Del / Backspace: remove the selected region
- Ctrl/Cmd + C / V / D: copy / paste / duplicate the selected region
- bbox fields (px / out) next to obj/text are editable

Color swatches:
- Click: edit · Drag: reorder · Right-click: remove
- Hover + Ctrl/Cmd + C / V: copy / paste the hex
- "+": add a color (uses the clipboard color if it is one)

Toolbar:
- Live: use the live sampling preview as the background (and grab the final result)
- Grab BG / Clear BG: use the last generated image as the background
- brightness slider, token estimate, and Copy / Paste / Clear all

# Input types
## Required
- width
    - Canvas aspect width (also the pixel grid the bbox is measured in). Ideogram 4 needs multiples of 16.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Canvas aspect height (also the pixel grid the bbox is measured in). Ideogram 4 needs multiples of 16.
    - Comfy dtype: INT
    - Python dtype: int
- high_level_description
    - Optional one-line overview of the whole image (blank = omitted).
    - Comfy dtype: STRING
    - Python dtype: str
- background
    - Required scene background description.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style input is used by this node during execution.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- aesthetics
    - Style descriptor (blank = omitted).
    - Comfy dtype: STRING
    - Python dtype: str
- lighting
    - Style descriptor (blank = omitted).
    - Comfy dtype: STRING
    - Python dtype: str
- medium
    - Style descriptor (blank = omitted).
    - Comfy dtype: STRING
    - Python dtype: str
- style_palette_data
    - Serialized style color palette from the editor (managed by the node UI).
    - Comfy dtype: STRING
    - Python dtype: str
- elements_data
    - Serialized regions from the editor (managed by the node UI).
    - Comfy dtype: STRING
    - Python dtype: str
- bg_brightness
    - Background image brightness % (managed by the node UI slider).
    - Comfy dtype: INT
    - Python dtype: int
- import_mode
    - How a wired import_json is used: 'when empty' only seeds the editor while it has no regions (then the editor wins, so you can edit); 'always' makes the wired JSON authoritative so its changes always propagate to the output.
    - Comfy dtype: COMBO
    - Python dtype: object
- output_format
    - Output JSON formatting (set via the editor toolbar): 'compact' (default, what Ideogram 4 expects) or 'pretty' (indented, for readability).
    - Comfy dtype: STRING
    - Python dtype: str
- coord_mode
    - bbox coordinate space (set via the editor toolbar): 'normalized' (default, the 0-1000 grid Ideogram 4 expects) or 'absolute' (pixels, scaled by width/height — NON-STANDARD for Ideogram, for other tools that want pixel coords).
    - Comfy dtype: STRING
    - Python dtype: str
- bbox_order
    - bbox axis order (set via the editor toolbar): 'yx' (default, Ideogram's [ymin,xmin,ymax,xmax]) or 'xy' ([xmin,ymin,xmax,ymax], the standard x1,y1,x2,y2 that Qwen-VL and most detectors use).
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- image
    - Optional reference image shown as the editor background (and behind the preview).
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- import_json
    - Optional: a full caption JSON. When connected, it loads into the editor and drives the output per 'import_mode'.
    - Comfy dtype: STRING
    - Python dtype: str
- bboxes
    - Optional pixel-space boxes ({x, y, width, height}) used to seed the editor's regions when it has none. Ignored once regions exist.
    - Comfy dtype: BOUNDING_BOX
    - Python dtype: object

# Output types
- prompt
    - The prompt output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- preview
    - The preview output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- bboxes
    - The bboxes output is produced by this node.
    - Comfy dtype: BOUNDING_BOX
    - Python dtype: object
- width
    - The width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
