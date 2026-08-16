# Documentation
- Class name: PixaromaPreview
- Category: 👑 Pixaroma/🖼️ Image
- Output node: True
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Preview Image Pixaroma - inline image preview with Save Disk, Save Output, Copy, and Open buttons, batch-aware. Wire any IMAGE source into the input. All batch frames render in the node body; click any thumbnail to expand it inline. Arrow keys flip through the batch, click anywhere on the open image to advance, Esc or X collapses. Toggle Grid / Strip layout via the small icon in the top-right corner of the preview area.

Save Disk picks any folder on your computer; the suggested filename auto-increments per click. Save Output writes to ComfyUI's output/ folder. Copy puts the selected frame on your OS clipboard as PNG so you can paste straight into another node, paint app, message, etc. Open opens the selected frame in a new browser tab for full-screen viewing or comparing multiple side by side. All four buttons act on the currently selected frame; Save Disk and Save Output embed the workflow into the PNG so you can drag it back into ComfyUI later.

Flip save_mode to 'save' and the node becomes a drop-in replacement for SaveImage: every batch frame is automatically written to output/ on each Run with embedded workflow metadata. The preview also survives workflow tab switching, so you can leave it on a specific frame and come back to it.

The filename_prefix field supports subfolder syntax with '/' (e.g. 'SDXL/portrait'), date tokens (e.g. '%date:yyyy-MM-dd%/img' -> 'output/2026-05-10/img_00001_.png'), and native ComfyUI tokens (%year%, %month%, %day%, %hour%, %minute%, %second%, %width%, %height%). Date format codes are yyyy yy MM dd HH mm ss. It also supports node-reference tokens like %Seed Pixaroma.seed% (or %KSampler.seed%) that insert another node's field value into the name, just like the native Save Image node. See the project README for the full token reference.

Right-click the node for Preview Image settings. Add Civitai generation info there also writes the settings in the format Civitai reads, so an image posted there shows the checkpoint, the LoRAs and their strengths, plus steps, seed, sampler and size. The values come from your workflow automatically, so nothing needs wiring in. It is off by default.

# Input types
## Required
- image
    - Image (or batch) to preview. Each frame appears as a thumbnail in the strip; click one to expand it inline. Wire any IMAGE source here.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filename_prefix
    - Filename stem written to output/. The node adds a 5-digit counter and .png. Use '/' for subfolders (e.g. 'SDXL/portrait'). Supports date tokens like %date:yyyy-MM-dd%, native ComfyUI tokens like %year%, %month%, %day%, and node references like %Seed Pixaroma.seed% that print another node's field value into the name. See the node's Info panel (right sidebar) for the full token reference and examples.
    - Comfy dtype: STRING
    - Python dtype: str
- save_mode
    - preview: write each batch frame to ComfyUI's temp/ folder, auto-cleared on restart. Use this while iterating so you don't clutter output/. The temp PNGs embed the workflow, so you can drag a preview back onto the canvas to restore the graph (just like the native Preview node). save: write every batch frame to output/ with embedded workflow metadata, exactly like the native SaveImage node. The on-node preview strip works the same in both modes; the manual Save to Disk / Save to Output buttons are independent of save_mode.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object
- CivitaiMeta
    - The CivitaiMeta input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The image(s) passed through unchanged, so you can chain a preview inline without breaking the wire.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
