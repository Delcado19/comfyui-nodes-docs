# Documentation
- Class name: LatentReceiver
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the LatentReceiver node handles latent data. It takes a latent file as input and outputs a tensor representing the latent space. This node is essential for processing transformations and loading of latent representations, which are indispensable for various machine learning tasks.

# Input types
## Required
- latent
    - The 'latent' parameter is the file path of the latent file that the node will process. It is critical to the node's operation, as it determines the specific latent data to be loaded and used for subsequent computations.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- link_id
    - The 'link_id' parameter is an identifier used to track or link latent data. While not required, it can be useful for organizing or referencing data in larger systems or workflows.
    - Comfy dtype: INT
    - Python dtype: int
- trigger_always
    - The 'trigger_always' parameter is a boolean flag that, when set to true, indicates the node should always trigger its process regardless of changes in input data.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- result
    - The 'result' output is a tensor representing the processed latent data. It is the node's primary output and is used for further analysis or as input to other nodes in the workflow.
    - Comfy dtype: TENSOR
    - Python dtype: torch.Tensor
- ui
    - The 'ui' output is a dictionary that may contain UI elements for visualization purposes, such as images. It provides a way to present processed data in a user-friendly format.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, List[str]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
