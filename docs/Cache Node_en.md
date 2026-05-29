# Documentation
- Class name: WAS_Cache
- Category: WAS Suite/IO
- Output node: True
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Cache node is designed to efficiently manage and store input data for the WAS suite. It caches latent vectors, images, and conditioning data, ensuring data is readily available for subsequent processing stages. This node plays a critical role in optimizing workflows by reducing the need to recompute or refetch data, thereby improving overall system performance.

# Input types
## Required
- latent_suffix
    - The latent_suffix parameter defines the filename suffix for cached latent vectors. This is critical for distinguishing different sets of latent vectors and is essential for the node's ability to manage and retrieve the correct data.
    - Comfy dtype: STRING
    - Python dtype: str
- image_suffix
    - The image_suffix parameter specifies the filename suffix for cached images. This suffix is crucial for the node to correctly identify and access image data when needed, facilitating organized processing of visual information.
    - Comfy dtype: STRING
    - Python dtype: str
- conditioning_suffix
    - The conditioning_suffix parameter applies to the filename suffix for cached conditioning data. It is a key element in the node's strategy for organizing and maintaining access to conditioning information, which is vital for subsequent steps in the workflow.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- output_path
    - The output_path parameter determines the directory where cached data will be stored. It provides flexibility in selecting the storage location and is important for the node's operation, especially in scenarios where data needs to be stored in a specific directory for further processing.
    - Comfy dtype: STRING
    - Python dtype: str
- latent
    - The latent parameter represents the latent vectors to be cached. It is a critical input for the node, as it directly impacts the data that will be stored and used in subsequent stages of the workflow.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- image
    - The image parameter contains the image data that the node is expected to cache. It is a key input as it involves visual content that needs to be retained within the system for future use.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- conditioning
    - The conditioning parameter is responsible for providing the conditioning data to be cached. This data is essential for guiding the generation process and is a vital input for the node's functionality.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor

# Output types
- latent_filename
    - The latent_filename output provides the filename of the cached latent vectors. This is important as it allows for easy reference and retrieval of latent data when needed.
    - Comfy dtype: STRING
    - Python dtype: str
- image_filename
    - The image_filename output represents the filename of the cached image data. This is an important piece of information that facilitates access and use of image content in subsequent operations.
    - Comfy dtype: STRING
    - Python dtype: str
- conditioning_filename
    - The conditioning_filename output indicates the filename of the cached conditioning data. This output is critical for the system to correctly locate and use conditioning information during the generation process.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
