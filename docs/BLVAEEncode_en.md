# Documentation
- Class name: BLVAEEncode
- Category: latent
- Output node: False
- Repo Ref: https://github.com/WASasquatch/WAS_Extras

The BLVAEEncode node is designed to encode images into latent space representations using a Variational Autoencoder (VAE). It provides the functionality to load existing latent representations or encode new representations from input images. The node also offers options for managing latent data, such as storing it for future use or removing it from the workflow.

# Input types
## Required
- vae
    - The VAE parameter is critical for the encoding process, as it represents the Variational Autoencoder model that will be used to convert the input image into a latent representation.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
## Optional
- tiled
    - The tiled parameter determines whether the encoding process should be performed in a tiled manner, which can be beneficial for processing larger images that may not fit entirely into memory when encoded as a whole.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- tile_size
    - The tile_size parameter specifies the tile size into which the image will be divided for tiled encoding. This is an important parameter when processing large images that require a tiled approach.
    - Comfy dtype: INT
    - Python dtype: int
- store_or_load_latent
    - The store_or_load_latent parameter controls whether the node should attempt to load a latent representation from the workflow or store a newly encoded latent representation back into the workflow for future use.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- remove_latent_on_load
    - When set to true, the remove_latent_on_load parameter instructs the node to remove the latent representation from the workflow after successfully loading it, to free up space and resources.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- delete_workflow_latent
    - When set to true, the delete_workflow_latent parameter instructs the node to delete any existing latent representations in the workflow, regardless of whether a new representation is being encoded.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- image
    - The image parameter is the input image to be encoded into the latent space. This is a mandatory parameter when there is no existing latent representation that can be loaded from the workflow.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- extra_pnginfo
    - The extra_pnginfo parameter is used to store and retrieve additional information related to the image, such as metadata or other auxiliary data that may be required by the encoding process.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]
- unique_id
    - The unique_id parameter is a unique identifier for the node instance in the workflow, used for managing the storage and retrieval of latent representations.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- latent
    - The latent parameter represents the encoded latent space representation of the input image. It is the primary output of the BLVAEEncode node and is used for further processing or analysis in the workflow.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/WAS_Extras)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
