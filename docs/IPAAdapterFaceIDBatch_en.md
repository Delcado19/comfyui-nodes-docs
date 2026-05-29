# Documentation
- Class name: IPAAdapterFaceIDBatch
- Category: Adapter
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The IPAAdapterFaceIDBatch node acts as an intermediary between input data and the FaceID model, ensuring efficient batch data processing. It aims to simplify the process of applying the FaceID model to data batches, improving the overall performance and throughput of the system.

# Input types
## Required
- input_data
    - The input_data parameter is critical because it represents the batch of images the node will process. Its organization and quality directly affect the node's ability to correctly apply the FaceID model and produce accurate results.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Output types
- output_data
    - output_data represents the processed results after applying the FaceID model to the input batch. It contains the model's predictions or recognitions, which are important for further analysis or downstream tasks.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
