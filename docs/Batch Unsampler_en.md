# Documentation
- Class name: BatchUnsampler
- Category: tests
- Output node: False
- Repo Ref: https://github.com/deroberon/demofusion-comfyui

The BatchUnsampler node is designed to generate a sequence of reverse-order latent representations starting from a given latent image. It uses the model's noise schedule to progressively add noise, simulating the reverse process of latent diffusion as described in the original paper. This node is essential for testing and analyzing the behavior of diffusion models under various noise conditions and sampling strategies.

# Input types
## Required
- model
    - The model parameter is critical for the BatchUnsampler node, as it provides the underlying diffusion model that the node will use to generate latent representations. The model's noise schedule is particularly important for simulating the reverse diffusion process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- steps
    - The steps parameter determines the number of intermediate latent representations to be generated. It is a key factor in controlling the granularity of the reverse diffusion process and the level of detail in the generated latent sequence.
    - Comfy dtype: INT
    - Python dtype: int
- sampler_name
    - The sampler_name parameter specifies the type of sampler used by the BatchUnsampler node. This choice affects the method of noise addition to the latent representations, thereby influencing the characteristics of the generated sequence.
    - Comfy dtype: STRING
    - Python dtype: str
- latent_image
    - The latent_image parameter is a critical input for the BatchUnsampler node, as it represents the source latent image from which the noisy latent sequence will be generated. This image serves as the starting point for the reverse diffusion process.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- latent_batch
    - The latent_batch output of the BatchUnsampler node contains a batch of latent representations generated through the reverse diffusion process. These latent representations are important for further analysis or as inputs to other nodes in the diffusion model pipeline.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/deroberon/demofusion-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
