
# Documentation
- Class name: GetSAMEmbedding
- Category: Art Venture/Segmentation
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to generate SAM embeddings from images using a specified SAM model. It adjusts the model to the appropriate device based on the execution mode and processes the image to generate its embedding, which is essential for further image manipulation or analysis tasks.

# Input types
## Required
- sam_model
    - The SAM model used to generate embeddings. It determines the architecture and weights for processing the image.
    - Comfy dtype: AV_SAM_MODEL
    - Python dtype: torch.nn.Module
- image
    - The image to be processed. This is the input image for which the SAM embedding will be generated.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- device_mode
    - Specifies the device on which the SAM model should run (AUTO, Prefer GPU, CPU). This affects the performance and efficiency of embedding generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- sam_embedding
    - The SAM embedding generated from the input image. This embedding is used for further processing or analysis in the image operation pipeline.
    - Comfy dtype: SAM_EMBEDDING
    - Python dtype: np.ndarray


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
