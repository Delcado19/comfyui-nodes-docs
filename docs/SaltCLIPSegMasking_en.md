
# Documentation
- Class name: SaltCLIPSegMasking
- Category: SALT/Masking
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltCLIPSegMasking node is designed for batch processing of images, using the CLIPSeg model to generate segmentation masks based on text descriptions. This node combines image and text inputs to produce detailed segmentation masks that match the given text description, thereby facilitating advanced image processing and analysis tasks.

# Input types
## Required
- images
    - A batch of images to be segmented. These images are transformed and resized to match the main image size to ensure consistent mask generation.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- text
    - An optional text description to guide the segmentation process. This allows generating target masks based on text cues.
    - Comfy dtype: STRING
    - Python dtype: Optional[str]
## Optional
- clipseg_model
    - An optional preloaded CLIPSeg model and processor for performing the segmentation task. If not provided, the node loads the default model.
    - Comfy dtype: CLIPSEG_MODEL
    - Python dtype: Optional[Tuple[CLIPSegProcessor, CLIPSegForImageSegmentation]]

# Output types
- masks
    - Segmentation masks corresponding to the input images, resized to the main image size.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_images
    - RGB representation of the segmentation masks for visualization purposes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltCLIPSegMasking:
    def __init__(self):
        pass
        
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "text": ("STRING", {"default":"", "multiline": False}),
            },
            "optional": {
                "clipseg_model": ("CLIPSEG_MODEL",),
            }
        }

    RETURN_TYPES = ("MASK", "IMAGE")
    RETURN_NAMES = ("masks", "mask_images")
    FUNCTION = "CLIPSeg_image"

    CATEGORY = f"{NAME}/Masking"

    def CLIPSeg_image(self, images, text=None, clipseg_model=None):
        from transformers import CLIPSegProcessor, CLIPSegForImageSegmentation

        masks = []
        image_masks = []
        master_size = None
        
        for image in images:

            image = tensor2pil(image)
            cache = os.path.join(models_dir, 'clipseg')

            if not master_size:
                master_size = image.size

            if clipseg_model:
                inputs = clipseg_model[0]
                model = clipseg_model[1]
            else:
                inputs = CLIPSegProcessor.from_pretrained("CIDAS/clipseg-rd64-refined", cache_dir=cache)
                model = CLIPSegForImageSegmentation.from_pretrained("CIDAS/clipseg-rd64-refined", cache_dir=cache)

            with torch.no_grad():
                result = model(**inputs(text=text, images=image, padding=True, return_tensors="pt"))

            tensor = torch.sigmoid(result[0])
            mask = (tensor - tensor.min()) / tensor.max()
            mask = mask.unsqueeze(0)
            mask = tensor2pil(mask)
            mask = mask.resize(master_size)
            mask_image_tensor = pil2tensor(mask.convert("RGB"))
            mask_tensor = image2mask(mask_image_tensor)
            masks.append(mask_tensor)
            image_masks.append(mask_image_tensor)

        masks = torch.cat(masks, dim=0)
        image_masks = torch.cat(image_masks, dim=0)
                
        return (masks, image_masks)

```
