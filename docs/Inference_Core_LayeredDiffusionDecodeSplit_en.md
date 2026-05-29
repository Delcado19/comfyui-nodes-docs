
# Documentation
- Class name: Inference_Core_LayeredDiffusionDecodeSplit
- Category: layer_diffuse
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is dedicated to decoding images via a hierarchical diffusion process, especially suited for segmented image data. It uses a modified diffusion decoding method to process images in segments, optimizing scenarios where splitting images into frames or layers improves inference performance.

# Input types
## Required
- samples
    - The node will process a collection of sample data. These data are critical to the decoding operation because they directly affect the segmentation, processing, and final quality of the decoded images.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- images
    - The image tensor to be decoded. This input is core to the node's function, as it operates on these images directly based on the provided samples and frames.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- frames
    - The number of frames or segments into which the image is divided. This parameter is essential for determining how the image is processed and decoded.
    - Comfy dtype: INT
    - Python dtype: int
- sd_version
    - The Stable Diffusion model version used for decoding. This influences decoding behavior and the quality of the output images.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sub_batch_size
    - The sub-batch size for processing, allowing resource optimization during decoding.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The decoded images processed via the hierarchical diffusion method. This output is crucial for assessing the effectiveness and quality of the decoding process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
