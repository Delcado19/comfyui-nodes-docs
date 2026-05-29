
# Documentation
- Class name: ImageUpscaleWithModelBatched
- Category: KJNodes/image
- Output node: False

ImageUpscaleWithModelBatched node is an optimized image upscaling tool. It uses a specified model to enlarge images and reduces VRAM usage through batch processing. Compared to ComfyUI's native model upscaling node, it offers greater flexibility when handling many images or images requiring extensive compute resources.

# Input types
## Required
- upscale_model
- Model used for image upscaling. It determines the upscaling algorithm and its quality. This parameter is critical for node performance and output quality.
    - Comfy dtype: UPSCALE_MODEL
    - Python dtype: torch.nn.Module
- images
- Batch of images to upscale. This input allows processing multiple images in a single operation, optimizing efficiency. It provides convenience for batch processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- per_batch
- Number of images per sub-batch to process, allowing control of VRAM usage during upscaling. This parameter helps users balance performance and resource consumption.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
- Upscaled images returned as a batch, in the same order as the input. This output format facilitates direct comparison or further processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageUpscaleWithModelBatched:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": { "upscale_model": ("UPSCALE_MODEL",),
                              "images": ("IMAGE",),
                              "per_batch": ("INT", {"default": 16, "min": 1, "max": 4096, "step": 1}),
                              }}
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "upscale"
    CATEGORY = "KJNodes/image"
    DESCRIPTION = """
Same as ComfyUI native model upscaling node,  
but allows setting sub-batches for reduced VRAM usage.
"""
    def upscale(self, upscale_model, images, per_batch):
        
        device = model_management.get_torch_device()
        upscale_model.to(device)
        in_img = images.movedim(-1,-3).to(device)
        
        steps = in_img.shape[0]
        pbar = comfy.utils.ProgressBar(steps)
        t = []
        
        for start_idx in range(0, in_img.shape[0], per_batch):
            sub_images = upscale_model(in_img[start_idx:start_idx+per_batch])
            t.append(sub_images.cpu())
            # Calculate the number of images processed in this batch
            batch_count = sub_images.shape[0]
            # Update the progress bar by the number of images processed in this batch
            pbar.update(batch_count)
        upscale_model.cpu()
        
        t = torch.cat(t, dim=0).permute(0, 2, 3, 1).cpu()

        return (t,)

```
