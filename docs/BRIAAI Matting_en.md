
# Documentation
- Class name: BRIAAI Matting
- Category: Video Matting
- Output node: False

The BRIAAI Matting node is designed for video frame background removal, using deep learning models to separate foreground elements from the background. It can batch-process video frames, applying complex neural network architectures to precisely extract foreground objects. The node also provides options for adjusting background color, using FP16 precision to optimize performance, and handling various input sizes and batch processing requirements.

# Input types
## Required
- video_frames
    - A sequence of video frames requiring background removal processing. This input is crucial for determining the foreground elements to be extracted in each frame.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- version
    - Specifies the BRIAAI model version to use, allowing flexible selection of model capabilities based on version.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- fp16
    - A flag indicating whether to use FP16 precision for model computation to optimize performance on compatible hardware.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- bg_color
    - The color used for the background in output frames, enabling customization of background appearance after matting.
    - Comfy dtype: STRING
    - Python dtype: torch.Tensor
- batch_size
    - The number of frames processed in a single batch, affecting memory usage and computational efficiency.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The foreground elements extracted from video frames, with the background removed or changed to the specified color.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- mask
    - A binary mask indicating the foreground region in each frame, usable for further processing or analysis.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class BriaaiRembg:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "video_frames": ("IMAGE",),
                "version": (["v1.4"], {"default": "v1.4"}),
                "fp16": ("BOOLEAN", {"default": True}),
                "bg_color": ("STRING", {"default": "green"}),
                "batch_size": ("INT", {"min": 1, "max": 64, "default": 4})
            }
        }
    
    RETURN_TYPES = ("IMAGE", "MASK")
    FUNCTION = "matting"
    CATEGORY = "Video Matting"


    def matting(self, video_frames, version, fp16, bg_color, batch_size, **kwargs):
        model_path = load_file_from_url(download_url, file_name=f"briaai_rmbg_{version}.pth", model_dir=CKPTS_PATH)
        model = BriaRMBG()
        model.load_state_dict(torch.load(model_path, map_location="cpu"))
        model.to(device).eval()

        video_frames, orig_num_frames, bg_color = prepare_frames_color(video_frames, bg_color, batch_size)
        bg_color = bg_color.to(device)
        orig_frame_size = video_frames.shape[2:4]
        if fp16:
            model.half()
            bg_color.half()
        
        fgrs, masks = [], []
        for i in range(video_frames.shape[0] // batch_size):
            batch_imgs = video_frames[i*batch_size:(i+1)*batch_size].to(device)
            resized_input = batch_imgs
            if fp16:
                resized_input = resized_input.half()
            resized_input = F.interpolate(resized_input, size=model_input_size, mode='bilinear')
            resized_input = normalize(resized_input,[0.5,0.5,0.5],[1.0,1.0,1.0])

            mask = model(resized_input)[0][0]
            mask = (mask-mask.min())/(mask.max()-mask.min())
            mask = F.interpolate(mask, size=orig_frame_size)

            fgr = batch_imgs * mask + bg_color * (1 - mask)
            fgrs.append(fgr.cpu())
            masks.append(mask.cpu().to(fgr.dtype))
            soft_empty_cache()
        
        fgrs = rearrange(torch.cat(fgrs), "n c h w -> n h w c")[:orig_num_frames].float().detach()
        masks = torch.cat(masks)[:orig_num_frames].squeeze(1).float().detach()
        return (fgrs, masks)

```
