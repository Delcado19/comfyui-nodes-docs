# Documentation
- Class name: IterativeImageUpscale
- Category: ImpactPack/Upscale
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the IterativeImageUpscale node is designed to perform iterative image upscaling. It takes an image and progressively increases its resolution through a series of refinement steps. The node uses a latent space model to encode and decode the image, applies an upscale factor, and iterates over a specified number of steps to achieve the desired level of detail.

# Input types
## Required
- pixels
    - The 'pixels' parameter represents the input image to be upscaled. This is a key element because the entire operation revolves around improving the resolution of this image through iterative processing.
    - Comfy dtype: IMAGE
    - Python dtype: np.ndarray
- upscale_factor
    - The 'upscale_factor' parameter defines the magnification level during the upscaling process. It determines how much the input image will be enlarged after processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- steps
    - The 'steps' parameter indicates the number of iterative steps to be performed during the upscaling process. More steps typically result in a smoother and more detailed upscaled image.
    - Comfy dtype: INT
    - Python dtype: int
- upscaler
    - The 'upscaler' parameter refers to the upscaling method or model that will be applied to increase the image resolution. It is an important part of the upscaling process.
    - Comfy dtype: UPSCALER
    - Python dtype: Any
- vae
    - The 'vae' parameter is an instance of a variational autoencoder (VAE) used to encode and decode image data during the upscaling process.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
## Optional
- temp_prefix
    - The 'temp_prefix' parameter is used to specify a temporary file prefix for storing intermediate results during the upscaling process. It can be left empty to use the default behavior.
    - Comfy dtype: STRING
    - Python dtype: str
- step_mode
    - The 'step_mode' parameter determines the method used to scale the image at each step. It can be 'simple' for linear scaling or 'geometric' for exponential scaling.
    - Comfy dtype: COMBO[simple, geometric]
    - Python dtype: str
- unique_id
    - The 'unique_id' parameter is used internally to track the progress and status of the upscaling operation. It is typically hidden from the user and assigned automatically.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- image
    - The 'image' output parameter represents the upscaled image resulting from the iterative upscaling process. It is the final product of the node's function.
    - Comfy dtype: IMAGE
    - Python dtype: np.ndarray

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
