# Documentation
- Class name: PixaromaSaveImage
- Category: 👑 Pixaroma/🖼️ Image
- Output node: True
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Save Image Pixaroma - save images to any folder on your computer, not just ComfyUI's output folder. Type or paste a path, or click Browse to pick a folder with your system's own folder dialog; leave the field empty to use the output folder. The filename field supports tokens and shows a live 'Will save as' preview of the exact file that will be written. Tokens: %input% (the wired name input, e.g. the filename from Load Image Pixaroma), %date:yyyy-MM-dd% (and any date/time format), %counter% (auto-incrementing, never overwrites), %width%, %height%, %batch_num%, plus node references like %Seed Pixaroma.seed%. Use / in the name to create subfolders. Three formats: PNG (lossless, keeps transparency, drags back into ComfyUI to reload the workflow), WebP (much smaller, keeps transparency, and it also drags back in to reload the workflow), or JPG (small and universal, no transparency, and ComfyUI cannot reload a workflow from it). Open the settings with the gear on the node or by right-clicking it: date style, counter digits, quality, WebP lossless, workflow embedding, Civitai generation info, which buttons the node shows, and whether folders in a wired name are kept. Batches save every frame with the counter increasing.

Add Civitai generation info (right-click) also writes the settings in the format Civitai reads, so an image posted there shows the checkpoint, the LoRAs and their strengths, plus steps, seed, sampler and size. The values are read from your workflow automatically, so nothing needs wiring into this node. The first save after adding a new model pauses briefly to fingerprint it, then it is remembered.

Saved images show in a large preview on the node: one image fills the area, a batch shows as a grid. Click a picture in the grid to view it big, click it or hover for the arrows to flip through, and the X returns to the grid. Copy puts the shown image on the clipboard, Open shows it in a new browser tab. Resize the node to make the preview bigger. The Save and Preview pills switch between writing files on every run and only showing images on the node with nothing written to your folder, so it can double as a preview node. Folder shows the save location in your file explorer; the window can appear on the taskbar.

# Input types
## Required
- images
    - Image (or batch) to save. Every frame in a batch is written, with the counter increasing per file.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- name
    - Optional text used by the %input% token in the filename, e.g. wire the filename output of Load Image Pixaroma here to keep the original name. To save into a folder named after this text, click the + Input folder chip. If the text already contains folders they become underscores, unless you turn on 'Keep folders from the wired name' in the settings.
    - Comfy dtype: STRING
    - Python dtype: str
## Hidden
- SaveImageState
    - The SaveImageState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
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

# Output types
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
