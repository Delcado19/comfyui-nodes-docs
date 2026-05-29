
# Documentation
- Class name: AnimeFace_SemSegPreprocessor
- Category: ControlNet Preprocessors/Semantic Segmentation
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AnimeFace_SemSegPreprocessor node is specifically designed to preprocess images for anime face semantic segmentation tasks. It uses a specialized model to segment anime faces from the background, optionally removes the background based on the provided settings, and prepares the image and mask for further processing.

# Input types
## Required
- image
    - The input image to be processed for anime face segmentation. This is the primary object for the segmentation task.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- remove_background_using_abg
    - A flag that determines whether the background should be removed from the image during segmentation. This affects the output mask and the segmented image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- resolution
    - The resolution to which the input image is resized before processing. This ensures consistent segmentation output across different image sizes.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The segmented anime face image with the background optionally removed based on the input flag.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ABG_CHARACTER_MASK (MASK)
    - A mask indicating the segmented anime face regions in the image. Used for further image processing or manipulation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class AnimeFace_SemSegPreprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "image": ("IMAGE",)
            },
            "optional": {
                #This preprocessor is only trained on 512x resolution
                #https://github.com/siyeong0/Anime-Face-Segmentation/blob/main/predict.py#L25
                "remove_background_using_abg": ("BOOLEAN", {"default": True}),
                "resolution": ("INT", {"default": 512, "min": 512, "max": 512, "step": 64})
            }
        }

    RETURN_TYPES = ("IMAGE", "MASK")
    RETURN_NAMES = ("IMAGE", "ABG_CHARACTER_MASK (MASK)")
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Semantic Segmentation"

    def execute(self, image, remove_background_using_abg=True, resolution=512, **kwargs):
        from controlnet_aux.anime_face_segment import AnimeFaceSegmentor

        model = AnimeFaceSegmentor.from_pretrained().to(model_management.get_torch_device())
        if remove_background_using_abg:
            out_image_with_mask = common_annotator_call(model, image, resolution=resolution, remove_background=True)
            out_image = out_image_with_mask[..., :3]
            mask = out_image_with_mask[..., 3:]
            mask = rearrange(mask, "n h w c -> n c h w")
        else:
            out_image = common_annotator_call(model, image, resolution=resolution, remove_background=False)
            N, H, W, C = out_image.shape
            mask = torch.ones(N, C, H, W)
        del model
        return (out_image, mask)

```
