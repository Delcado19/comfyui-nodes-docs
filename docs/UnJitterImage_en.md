
# Documentation
- Class name: UnJitterImage
- Category: image/filters/jitter
- Output node: False

The UnJitterImage node aims to eliminate or reduce jitter effects in images. It uses a predefined matrix to adjust the positions of pixels in the image, with the goal of restoring the original or a more stable visual representation.

# Input types
## Required
- images
    - The input image that needs to be processed to correct jitter. This parameter is critical for determining the target image to which the de-jitter operation will be applied.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- jitter_scale
    - Defines the scale of jitter correction to be applied. This parameter adjusts the strength of the de-jitter effect, allowing fine-tuning of the correction process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- oflow_align
    - A boolean flag indicating whether optical flow alignment should be used as part of the de-jittering process. This can enhance the correction effect by aligning frames based on detected motion, providing a more dynamic approach to jitter correction.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image
    - The output image after de-jitter processing is applied. This image is expected to have reduced or eliminated jitter effects, presenting a more stable and visually coherent result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class UnJitterImage:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE",),
                "jitter_scale": ("FLOAT", {"default": 1.0, "min": 0.1, "step": 0.1}),
                "oflow_align": ("BOOLEAN", {"default": False}),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "jitter"

    CATEGORY = "image/filters/jitter"

    def jitter(self, images, jitter_scale, oflow_align):
        t = images.detach().clone().movedim(-1,1) # [B x C x H x W]
        
        if oflow_align:
            pbar = ProgressBar(t.shape[0] // 9)
            raft_model, raft_device = load_raft()
            batch = []
            for i in trange(t.shape[0] // 9):
                batch1 = t[i*9].unsqueeze(0).repeat(9,1,1,1)
                batch2 = t[i*9:i*9+9]
                flows = raft_flow(raft_model, raft_device, batch1, batch2)
                batch.append(flows)
                pbar.update(1)
            flows = torch.cat(batch, dim=0)
            t = flow_warp(t, flows)
        else:
            theta = jitter_matrix.detach().clone().to(t.device)
            theta[:,0,2] *= jitter_scale * -2 / t.shape[3]
            theta[:,1,2] *= jitter_scale * -2 / t.shape[2]
            affine = torch.nn.functional.affine_grid(theta, torch.Size([9, t.shape[1], t.shape[2], t.shape[3]]))
            batch = []
            for i in range(t.shape[0] // 9):
                jb = t[i*9:i*9+9]
                jb = torch.nn.functional.grid_sample(jb, affine, mode='bicubic', padding_mode='border', align_corners=None)
                batch.append(jb)
            t = torch.cat(batch, dim=0)
        
        t = t.movedim(1,-1) # [B x H x W x C]
        return (t,)

```
