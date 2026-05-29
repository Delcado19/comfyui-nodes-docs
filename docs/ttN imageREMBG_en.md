
# Documentation
- Class name: ttN imageREMBG
- Category: ttN/image
- Output node: True
- Repo Ref: https://github.com/ttN-dev/ComfyUI_tinyterraNodes

The ttN_imageREMBG node aims to remove the background from images, leveraging the capabilities of the REMBG library. It abstracts the complexity of background removal into a simple interface, making it easy to integrate into image processing workflows.

# Input types
## Required
- image
    - The input image from which the background needs to be removed. This is the primary input for the background removal process.
    - Comfy dtype: IMAGE
    - Python dtype: Image
- image_output
    - Specifies the output mode for the processed image, including options such as "Hide", "Preview", "Save", and "Hide/Save", allowing flexible handling of the output image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Enum['Hide', 'Preview', 'Save', 'Hide/Save']
- save_prefix
    - The filename prefix used when saving the processed image, providing a simple way to organize and identify output files.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The processed image with the background removed.
    - Comfy dtype: IMAGE
    - Python dtype: Image
- mask
    - A mask indicating the regions where the background was removed from the image.
    - Comfy dtype: MASK
    - Python dtype: Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
    class ttN_imageREMBG:
        version = '1.0.0'
        def __init__(self):
            pass
        
        @classmethod
        def INPUT_TYPES(s):
            return {"required": { 
                    "image": ("IMAGE",),
                    "image_output": (["Hide", "Preview", "Save", "Hide/Save"],{"default": "Preview"}),
                    "save_prefix": ("STRING", {"default": "ComfyUI"}),
                    },
                    "hidden": {"prompt": "PROMPT", "extra_pnginfo": "EXTRA_PNGINFO", "my_unique_id": "UNIQUE_ID",
                               "ttNnodeVersion": ttN_imageREMBG.version},
                }
            

        RETURN_TYPES = ("IMAGE", "MASK")
        RETURN_NAMES = ("image", "mask")
        FUNCTION = "remove_background"
        CATEGORY = "ttN/image"
        OUTPUT_NODE = True

        def remove_background(self, image, image_output, save_prefix, prompt, extra_pnginfo, my_unique_id):
            image = remove(ttNsampler.tensor2pil(image))
            tensor = ttNsampler.pil2tensor(image)
            
            #Get alpha mask
            if image.getbands() != ("R", "G", "B", "A"):
                image = image.convert("RGBA")
            mask = None
            if "A" in image.getbands():
                mask = np.array(image.getchannel("A")).astype(np.float32) / 255.0
                mask = torch.from_numpy(mask)
                mask = 1. - mask
            else:
                mask = torch.zeros((64,64), dtype=torch.float32, device=sampler.device)

            if image_output == "Disabled":
                results = []
            else:
                ttN_save = ttNsave(my_unique_id, prompt, extra_pnginfo)
                results = ttN_save.images(tensor, save_prefix, image_output)

            if image_output in ("Hide", "Hide/Save"):
                return (tensor, mask)

            # Output image results to ui and node outputs
            return {"ui": {"images": results},
                    "result": (tensor, mask)}

```
