# Documentation
- Class name: LayeredDiffusionDecodeSplit
- Category: Image Processing
- Output node: False
- Repo Ref: https://github.com/huchenlei/ComfyUI-layerdiffuse.git

The LayeredDiffusionDecodeSplit class aims to efficiently decode RGBA images in a sub-batch manner, improving processing throughput and memory management. It processes large image datasets by decoding smaller groups of images, thereby optimizing computational resources and simplifying the decoding process for various applications.

# Input types
## Required
- samples
    - The “samples” parameter is required as it contains the latent representations needed for the decoding process. It directly affects the quality and accuracy of the decoded images and is the foundation of the entire operation.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- images
    - The “images” parameter is crucial for the decoding process, as it provides the input images to be processed. It is the core of the node execution and affects the final output, determining the visual aspects of the decoded images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- frames
    - The “frames” parameter determines the frequency of image decoding, effectively controlling the sub-batch size. It plays a key role in balancing computational efficiency and memory usage, ensuring a smooth and optimized processing flow.
    - Comfy dtype: INT
    - Python dtype: int
- sd_version
    - The “sd_version” parameter specifies the version of the stable diffusion model to use, which is crucial for determining the decoding algorithm and its compatibility with the input data. It affects the overall performance and the quality of the generated images.
    - Comfy dtype: ENUM
    - Python dtype: StableDiffusionVersion
- sub_batch_size
    - The “sub_batch_size” parameter is essential for managing the computational load, as it defines the number of images processed per sub-batch. It plays an important role in optimizing the speed and resource allocation of the decoding process.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The “image” output represents the decoded RGBA image and is the main result of the node operation. It encapsulates the visual information derived from the input data, demonstrating the node's ability to convert latent representations into perceptible visual content.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- alpha
    - The “alpha” output contains the alpha channel information of the decoded image, which is very important for applications requiring transparency. It highlights the node's ability to handle complex image attributes and contributes to the richness of the final visual output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class LayeredDiffusionDecodeSplit(LayeredDiffusionDecodeRGBA):
    """Decode RGBA every N images."""

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples': ('LATENT',), 'images': ('IMAGE',), 'frames': ('INT', {'default': 2, 'min': 2, 'max': s.MAX_FRAMES, 'step': 1}), 'sd_version': ([StableDiffusionVersion.SD1x.value, StableDiffusionVersion.SDXL.value], {'default': StableDiffusionVersion.SDXL.value}), 'sub_batch_size': ('INT', {'default': 16, 'min': 1, 'max': 4096, 'step': 1})}}
    MAX_FRAMES = 3
    RETURN_TYPES = ('IMAGE',) * MAX_FRAMES

    def decode(self, samples, images: torch.Tensor, frames: int, sd_version: str, sub_batch_size: int):
        sliced_samples = copy.copy(samples)
        sliced_samples['samples'] = sliced_samples['samples'][::frames]
        return tuple((super(LayeredDiffusionDecodeSplit, self).decode(sliced_samples, imgs, sd_version, sub_batch_size)[0] if i == 0 else imgs for i in range(frames) for imgs in (images[i::frames],))) + (None,) * (self.MAX_FRAMES - frames)
```