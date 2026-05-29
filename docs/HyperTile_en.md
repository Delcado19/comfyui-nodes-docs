# Documentation
- Class name: HyperTile
- Category: model_patches
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The HyperTile node aims to modify model behavior by dynamically adjusting tiling of input data during processing. It achieves this by implementing a patching mechanism that alters the model's attention mechanism to process tiles of a specified size. This node is particularly useful for optimizing model performance across different data granularities without changing the model architecture.

# Input types
## Required
- model
    - The model parameter is required, as it represents the machine learning model to be patched. The patching process adjusts the model's internal workings to process data in a tiled manner, which is essential for certain types of data processing tasks.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
## Optional
- tile_size
    - The tile_size parameter determines the dimensions of the tiles into which the input data will be divided. It is important for controlling the granularity of data processing and can significantly impact model efficiency and output quality.
    - Comfy dtype: INT
    - Python dtype: int
- swap_size
    - The swap_size parameter affects how tiles are rearranged within the model. It is a critical factor in the optimization process, as it can directly influence the model's ability to process data efficiently.
    - Comfy dtype: INT
    - Python dtype: int
- max_depth
    - The max_depth parameter sets a limit on the depth of the tiling process. It is important for controlling the complexity of the data structures the model needs to process, preventing over-complication and maintaining performance.
    - Comfy dtype: INT
    - Python dtype: int
- scale_depth
    - The scale_depth flag indicates whether the depth of tiling should be adjusted based on the model's channel dimensions. This is an important consideration for optimizing model performance for data characteristics.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- model
    - The output of the HyperTile node is the modified model, now containing patching logic for the attention mechanism to process tiled data. This allows for more efficient data processing at different granularities.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
