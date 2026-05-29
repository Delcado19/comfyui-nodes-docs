# Documentation
- Class name: StableZero123_Conditioning
- Category: conditioning/3d_models
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The `encode` method of the StableZero123_Conditioning class aims to convert visual and spatial information into a form usable for generating 3D models. It encodes the initial image, incorporates camera orientation, and prepares latent representations for positive and negative conditioning during the 3D model generation process.

# Input types
## Required
- clip_vision
The `clip_vision` parameter is essential for the encoding process because it provides the visual model used to understand and process the initial image. It plays a key role in converting visual data into a form usable for 3D model conditioning.
    - Comfy dtype: CLIP_VISION
    - Python dtype: Any
- init_image
The `init_image` parameter is required because it is the initial image the node uses to generate the latent representation. It directly influences the visual output of the 3D model by providing basic visual context for the encoding process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- vae
The `vae` parameter is a variational autoencoder responsible for encoding visual data into latent space. It is a key component that converts image pixels into a format suitable for 3D model generation.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
## Optional
- width
The `width` parameter specifies the width of the upscaled image, which is important for determining the resolution of analyzed image features. It affects the level of detail captured during encoding.
    - Comfy dtype: INT
    - Python dtype: int
- height
The `height` parameter sets the height of the upscaled image, which is important for resolution and structural integrity of the encoded image. It ensures the image maintains its aspect ratio and quality during encoding.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
The `batch_size` parameter defines the number of samples processed per iteration, which is crucial for managing memory usage and computational efficiency during encoding.
    - Comfy dtype: INT
    - Python dtype: int
- elevation
The `elevation` parameter represents the camera's vertical angle, which is vital for spatial conditioning of the 3D model. It influences the model's viewing perspective, thereby affecting the final render.
    - Comfy dtype: FLOAT
    - Python dtype: float
- azimuth
The `azimuth` parameter represents the camera's horizontal angle, which plays a key role in the spatial conditioning of the 3D model. It determines the model's direction on the horizontal plane, affecting the overall appearance of the generated model.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- positive
The `positive` output provides encoded image features and camera orientation as positive conditioning for the 3D model generation process. It is a key component that guides the model to generate images consistent with the input image and camera view.
    - Comfy dtype: CONDITIONING
    - Python dtype: Tuple[torch.Tensor, Dict[str, torch.Tensor]]
- negative
The `negative` output offers a baseline of zero features as negative conditioning, contrasting with the positive conditioning. It helps refine the model generation by emphasizing the difference between the desired image and a zero state.
    - Comfy dtype: CONDITIONING
    - Python dtype: Tuple[torch.Tensor, Dict[str, torch.Tensor]]
- latent
The `latent` output contains latent samples that represent the encoded image in compressed form. These samples serve as the foundation for 3D model generation, capturing essential visual and spatial information concisely.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
