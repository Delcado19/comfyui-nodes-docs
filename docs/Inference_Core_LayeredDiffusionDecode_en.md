
# Documentation
- Class name: Inference_Core_LayeredDiffusionDecode
- Category: layer_diffuse
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Inference_Core_LayeredDiffusionDecode node decodes layered diffusion processes, converting sampled data into images through a series of diffusion steps. It uses advanced techniques to efficiently process and decode multiple diffusion layers, optimizing high‑quality image generation.

# Input types
## Required
- samples
- Provide the sampled data to be decoded into an image as the initial input for the diffusion process. This parameter starts the entire decoding pipeline and directly affects the quality and characteristics of the final image.
    - Comfy dtype: LATENT
    - Python dtype: Dict
- images
- Supply an image tensor that will be processed through diffusion steps as the basis for decoding. These images give visual context to the decoding process, influencing the detail and style of the output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- sd_version
- Specify the diffusion model version to use, which influences decoding behavior and output quality. Different model versions may produce different results, so selecting the appropriate version is essential for meeting specific requirements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sub_batch_size
- Set the sub‑batch size for processing to optimize computational efficiency and resource usage. Properly configuring this parameter improves processing speed and memory utilization while maintaining output quality.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
- The images generated from the decoded diffusion process serve as the primary output. These images are the final product of the decoding pipeline, reflecting the combined effect of input samples and processing parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
- An alpha mask associated with the decoded images provides transparency information. This mask can be used for further image processing or compositing, enhancing the flexibility of the output images.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
