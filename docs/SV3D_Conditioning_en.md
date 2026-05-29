# Documentation
- Class name: SV3D_Conditioning
- Category: conditioning/3d_models
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SV3D_Conditioning node is designed to process and encode visual and spatial information to generate 3D conditioning data. It accepts various inputs such as images, vision models, and spatial parameters to produce conditioning signals usable in 3D model generation tasks. This node plays a critical role in aligning the generated 3D model with the input visual and spatial context.

# Input types
## Required
- clip_vision
    - The clip_vision parameter is essential to the node, as it provides the vision model used to encode the initial image. This input directly impacts the quality and accuracy of the encoded image representation, which is critical for the subsequent 3D model generation process.
    - Comfy dtype: CLIP_VISION
    - Python dtype: torch.nn.Module
- init_image
    - The init_image parameter is a key input to the node, representing the initial image that will be used to condition the 3D model. It is crucial in defining the visual aspects of the output 3D model and must be carefully selected to ensure the desired result.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- vae
    - The vae parameter represents the Variational Autoencoder (VAE) used within the node to encode pixel data into latent space. This transformation is essential for creating rich feature representations that can be used to condition 3D model generation.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- width
    - The width parameter specifies the width required for the upscaled image. It is a critical factor in determining the resolution and level of detail of the final 3D model, with higher values generally resulting in more detailed output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the height required for the upscaled image. Together with width, it determines the overall dimensions of the image used for encoding, which subsequently affects the detail and fidelity of the 3D model.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- video_frames
    - The video_frames parameter determines the number of frames to generate for video output. It is an optional input that can be adjusted according to the specific requirements of the 3D model generation task.
    - Comfy dtype: INT
    - Python dtype: int
- elevation
    - The elevation parameter provides the vertical angle from which the 3D model is viewed. It is an optional input that allows adjustment of the viewing angle to achieve the desired perspective in the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- positive
    - The positive output consists of encoded image embeddings and spatial parameters, serving as the positive conditioning signal for 3D model generation. This output is important as it directly contributes to shaping the final 3D model according to the input image and spatial context.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, Any]]}
- negative
    - The negative output contains zero-valued image embeddings and spatial parameters, serving as the negative conditioning signal. This output is used to provide contrast to the positive signal, helping to refine the 3D model generation process.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, Any]]
- latent
    - The latent output represents the latent space representation of the upscaled image. It is a critical component of 3D model generation, as it contains the visual features extracted from the input image.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
