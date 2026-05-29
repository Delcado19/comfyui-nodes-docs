# Documentation
- Class name: PreviewBridgeLatent
- Category: ImpactPack/Util
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The PreviewBridgeLatent class serves as an efficient bridge for visualizing and managing image latent representations, offering a method to convert these latents into a preview format that can be easily interpreted and used within the system.

# Input types
## Required
- latent
- The latent parameter is required because it contains the encoded representation of the image to be visualized. It provides the raw data needed for the image reconstruction process, playing a key role in the node's functionality.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, Any]
- image
- The image parameter is critical to the node because it identifies the specific image to process. It influences the node's execution by determining which image's latent representation to visualize.
    - Comfy dtype: STRING
    - Python dtype: str
- preview_method
- The preview_method parameter determines the method used to generate a visual representation from the latent data. It is part of the node operation, shaping the output image according to the selected visualization method.
    - Comfy dtype: COMBO
    - Python dtype: Union[str, None]
## Optional
- vae_opt
- When the vae_opt parameter is provided, a specific VAE model can be used to decode the latent data. Its inclusion can significantly affect the quality and style of the final preview image.
    - Comfy dtype: VAE
    - Python dtype: Union[torch.nn.Module, None]
- unique_id
- The unique_id parameter is used to track and manage cached processed images. It is important for node efficiency because it helps avoid redundant processing and ensures the latest version of each image is always available.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- ui
- The ui output provides a user‑interface representation of the processed image, including information such as filename and subfolder location. This output is essential for integrating the visualized data into the system's user interface.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]
- result
- The result output contains the latent representation and mask of the processed image. This output is indispensable because it supplies the raw data needed for further analysis or manipulation within the system.
    - Comfy dtype: TUPLE
    - Python dtype: Tuple[Dict[str, Any], torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
