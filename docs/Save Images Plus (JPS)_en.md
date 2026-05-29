
# Documentation
- Class name: Save Images Plus (JPS)
- Category: JPS Nodes/IO
- Output node: True
- Repo Ref: https://github.com/jps-yes/ComfyUI-JPsNM

Save Images Plus (JPS) node is specifically designed to efficiently save images to disk. It provides metadata customization and compression preference settings. This node helps users manage files in an organized manner and supports dynamic adjustments based on image attributes. Additionally, it offers optional metadata embedding to enrich the context information of the files.

# Input types
## Required
- images
    - A batch of images to be saved. This parameter is crucial for determining the output filename and path as well as the actual image saving process.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- filename_prefix
    - An optional prefix for the output filename. This allows users to organize stored images and easily identify saved images.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- dummy_out
    - The specific purpose and content of this output type are unknown.
    - Comfy dtype: INT
    - Python dtype: unknown
- ui
    - The node returns a UI component for displaying saved images, thereby enhancing user interaction and feedback.
    - Comfy dtype: 未指定
    - Python dtype: 未指定


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Save_Images_Plus:
    def __init__(self):
        self.output_dir = folder_paths.get_output_directory()
        self.type = "output"
        self.prefix_append = ""
        self.compress_level = 4

    @classmethod
    def INPUT_TYPES(s):
        return {"required": 
                    {"images": ("IMAGE", ),
                     "filename_prefix": ("STRING", {"default": "ComfyUI"})},
                "hidden": {"prompt": "PROMPT", "extra_pnginfo": "EXTRA_PNGINFO"},
                }

    RETURN_TYPES = ("INT",)
    RETURN_NAMES = ("dummy_out",)
    FUNCTION = "save_images_plus"

    OUTPUT_NODE = True

    CATEGORY = "JPS Nodes/IO"

    def save_images_plus(self, images, filename_prefix="ComfyUI", prompt=None, extra_pnginfo=None):
        filename_prefix += self.prefix_append
        full_output_folder, filename, counter, subfolder, filename_prefix = folder_paths.get_save_image_path(filename_prefix, self.output_dir, images[0].shape[1], images[0].shape[0])
        results = list()
        for image in images:
            i = 255. * image.cpu().numpy()
            img = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8))
            metadata = None
            if not args.disable_metadata:
                metadata = PngInfo()
                if prompt is not None:
                    metadata.add_text("prompt", json.dumps(prompt))
                if extra_pnginfo is not None:
                    for x in extra_pnginfo:
                        metadata.add_text(x, json.dumps(extra_pnginfo[x]))

            file = f"{filename} {counter:03}.png"
            img.save(os.path.join(full_output_folder, file), pnginfo=metadata, compress_level=self.compress_level)
            results.append({
                "filename": file,
                "subfolder": subfolder,
                "type": self.type
            })
            counter += 1

        #return { "ui": { "images": results } }
        return(int(1), )            

```
