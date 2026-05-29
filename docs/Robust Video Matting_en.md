
# Documentation
- Class name: `Robust Video Matting`
- Category: `Video Matting`
- Output node: `False`

Robust Video Matting node aims to perform high quality matting on video frames, separating foreground elements from the background. It utilizes advanced deep learning models for precise segmentation, performs well even under challenging conditions, and supports dynamic background replacement.

# Input types
## Required
- **`video_frames`**
    - The sequence of video frames to be processed for matting. This is the main input of the node operation, used to determine foreground and background elements.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- **`backbone`**
    - Specifies the backbone model architecture for video matting, options include 'mobilenetv3' and 'resnet50'. This choice affects the accuracy and performance of the matting process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- **`fp16`**
    - A flag to indicate whether to use half-precision floating point (FP16) computation, which may improve performance on compatible hardware.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- **`bg_color`**
    - The background color to apply when separating the foreground from the original background, specified as a string.
    - Comfy dtype: STRING
    - Python dtype: str
- **`batch_size`**
    - The number of frames processed in a single batch, affecting memory usage and processing speed.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- **`image`**
    - The processed video frames with background replaced or removed, showing the foreground elements.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- **`mask`**
    - A binary mask indicating the presence of foreground elements in each frame, useful for further processing or analysis.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class RobustVideoMatting:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "video_frames": ("IMAGE",), 
                "backbone": (["mobilenetv3", "resnet50"], {"default": "resnet50"}),
                "fp16": ("BOOLEAN", {"default": True}),
                "bg_color": ("STRING", {"default": "green"}),
                "batch_size": ("INT", {"min": 1, "max": 64, "default": 4})
            }
        }
    
    RETURN_TYPES = ("IMAGE", "MASK")
    FUNCTION = "matting"
    CATEGORY = "Video Matting"

    def matting(self, video_frames, backbone, fp16, bg_color, batch_size):
        model_path = load_file_from_url(download_url_template.format(backbone=backbone, dtype="fp16" if fp16 else "fp32"), model_dir=CKPTS_PATH)
        model = torch.jit.load(model_path, map_location=device)
        video_frames, orig_num_frames, bg_color = prepare_frames_color(video_frames, bg_color, batch_size)
        bg_color = bg_color.to(device)
        if fp16:
            model.half()
            bg_color.half()
        model = torch.jit.freeze(model)
        rec, fgrs, masks = [None] * 4, [], []
        for i in range(video_frames.shape[0] // batch_size):
            input = video_frames[i*batch_size:(i+1)*batch_size].to(device)
            if fp16:
                input = input.half()
            fgr, pha, *rec = model(input, *rec, auto_downsample_ratio(*video_frames.shape[2:]))
            mask = pha.gt(0) #Remove blur
            fgr = fgr * mask + bg_color * ~mask
            fgrs.append(fgr.cpu())
            masks.append(mask.cpu().to(fgr.dtype))
            soft_empty_cache()
        fgrs = rearrange(torch.cat(fgrs, dim=0), "n c h w -> n h w c")[:orig_num_frames].detach().float()
        masks = torch.cat(masks, dim=0).squeeze(1)[:orig_num_frames].detach().float()
        soft_empty_cache()
        return (fgrs, masks)

```
