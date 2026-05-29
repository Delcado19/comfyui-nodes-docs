# Documentation
- Class name: DetailerHookCombine
- Category: PixelKSampleHookCombine
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

DetailerHookCombine node acts as a coordinator for two independent hooks during pixel-level sampling. It ensures that each hook is applied sequentially to latent space, segmentation, and pasted image, thereby enhancing the detail and consistency of the generated output.

# Input types
## Required
- latent
    - The "latent" parameter represents the latent space vector being processed. It is a key component because it carries the encoded information required for the detail enhancement process.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- segs
    - The "segs" parameter is a list of segmentation tensors used to refine image details. Each tensor in the list corresponds to a different part of the image.
    - Comfy dtype: List[torch.Tensor]
    - Python dtype: List[torch.Tensor]
- image
    - The "image" parameter is a tensor representing the pasted image that will undergo further processing to enhance its visual details.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Output types
- cycled_latent
    - The "cycled_latent" output is the result of applying the two hooks to the input latent vector, aimed at improving the level of detail in the latent representation.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- refined_segs
    - The "refined_segs" output consists of the segmentation tensors processed by the two hooks to achieve a more detailed and accurate segmentation of the image.
    - Comfy dtype: List[torch.Tensor]
    - Python dtype: List[torch.Tensor]
- processed_image
    - The "processed_image" output is the final image tensor enhanced by the two hooks, resulting in an image with improved visual quality and detail.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class DetailerHookCombine(PixelKSampleHookCombine):

    def cycle_latent(self, latent):
        latent = self.hook1.cycle_latent(latent)
        latent = self.hook2.cycle_latent(latent)
        return latent

    def post_detection(self, segs):
        segs = self.hook1.post_detection(segs)
        segs = self.hook2.post_detection(segs)
        return segs

    def post_paste(self, image):
        image = self.hook1.post_paste(image)
        image = self.hook2.post_paste(image)
        return image
```