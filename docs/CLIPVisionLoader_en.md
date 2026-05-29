# Documentation
- Class name: CLIPVisionLoader
- Category: loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The CLIPVisionLoader node is designed to efficiently load and process visual data from the CLIP model. It abstracts the complexity of file processing and provides a simplified interface for accessing visual representations.

# Input types
## Required
- clip_name
    - The parameter 'clip_name' is crucial for specifying the unique identifier of the visual data to be loaded. It plays a key role in the node's operation as it guides the retrieval process.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- CLIP_VISION
    - The output 'CLIP_VISION' represents the loaded visual data in tensor form, which is essential for further processing and analysis within the model pipeline.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
