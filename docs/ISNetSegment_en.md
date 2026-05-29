
# Documentation
- Class name: ISNetSegment
- Category: Art Venture/Segmentation
- Output node: False

ISNetSegment is a node that performs image segmentation using the ISNet model. It can process images based on a specified threshold to separate foreground from background. The node supports dynamic model loading, device selection, and optional activation, allowing flexible integration into image processing pipelines.

# Input types
## Required
- images
    - The image to be segmented, which is the core data for the segmentation operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- threshold
    - The segmentation threshold, which determines the sensitivity of the segmentation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- device_mode
    - The preferred compute device for the segmentation task ('AUTO', 'Prefer GPU', 'CPU') to optimize performance.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- enabled
    - A flag controlling whether the segmentation process is enabled, providing control over the execution flow.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- isnet_model
    - Optional ISNet model parameters for segmentation. If provided, a custom model can be used.
    - Comfy dtype: ISNET_MODEL
    - Python dtype: ISNetBase | ISNetDIS

# Output types
- segmented
    - The segmented image, with foreground and background separated.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - A binary mask indicating the segmented region in the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ISNetSegment:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE",),
                "threshold": ("FLOAT", {"default": 0.5, "min": 0, "max": 1, "step": 0.001}),
            },
            "optional": {
                "device_mode": (["AUTO", "Prefer GPU", "CPU"],),
                "enabled": ("BOOLEAN", {"default": True}),
                "isnet_model": ("ISNET_MODEL",),
            },
        }

    RETURN_TYPES = ("IMAGE", "MASK")
    RETURN_NAMES = ("segmented", "mask")
    CATEGORY = "Art Venture/Segmentation"
    FUNCTION = "segment_isnet"

    def segment_isnet(self, images: torch.Tensor, threshold, device_mode="AUTO", enabled=True, isnet_model=None):
        if not enabled:
            masks = torch.zeros((len(images), 64, 64), dtype=torch.float32)
            return (images, masks)

        if isnet_model is None:
            ckpts = folder_paths.get_filename_list("isnet")
            if len(ckpts) == 0:
                ckpts = download_model(
                    model_path=model_dir,
                    model_url=model_url,
                    ext_filter=[".pth"],
                    download_name="isnet-general-use.pth",
                )
            isnet_model = load_isnet_model(ckpts[0])

        device = gpu if device_mode != "CPU" else cpu
        isnet_model = isnet_model.to(device)

        try:
            segments = []
            masks = []
            for image in images:
                im, im_orig_size = im_preprocess(image, cache_size)
                mask = predict(isnet_model, im, im_orig_size, device)
                mask = mask / 255.0
                mask = np.clip(mask > threshold, 0, 1).astype(np.float32)
                mask = torch.from_numpy(mask).float()
                masks.append(mask)

                mask = tensor2pil(mask, "L")
                cropped = tensor2pil(image, "RGB")
                cropped.putalpha(mask)
                segments.append(pil2tensor(cropped))

            return (torch.cat(segments, dim=0), torch.stack(masks))
        finally:
            if device_mode == "AUTO":
                isnet_model = isnet_model.to(cpu)

```
