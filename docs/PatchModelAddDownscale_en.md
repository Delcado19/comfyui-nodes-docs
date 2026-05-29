# Documentation
- Class name: PatchModelAddDownscale
- Category: _for_testing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The PatchModelAddDownscale node modifies a given model's behavior by introducing downsampling operations at specified blocks within the model architecture. It enhances the model's functionality by allowing image resolution adjustments during processing stages, which is particularly useful for optimizing performance or achieving desired output quality.

# Input types
## Required
- model
    - The model parameter is required as it defines the base model to be modified by the node. It is the primary input that determines the subsequent behavior and output nature of the node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- block_number
    - The block number parameter identifies the specific block in the model where the downsampling operation will be applied. It plays a critical role in determining the modification point within the model architecture.
    - Comfy dtype: INT
    - Python dtype: int
- downscale_factor
    - The downscale factor parameter controls the degree of downsampling applied to the input. It is a critical determinant in the transformation process, significantly affecting the resolution of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - The start percent parameter specifies the beginning of the sigma range where downsampling will take effect. It is an important factor in controlling the timing of the downsampling operation within the model's processing sequence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The end percent parameter marks the end of the sigma range for the downsampling operation. Together with the start percent, it defines the operational window of downsampling within the model workflow.
    - Comfy dtype: FLOAT
    - Python dtype: float
- downscale_after_skip
    - The skip after downsample parameter indicates whether certain blocks in the model should be skipped following downsampling. This decision affects the structural integrity of the model and the efficiency of the downsampling process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- downscale_method
    - The downscale method parameter determines the algorithm used for downsampling the input. This is a critical choice that can influence the quality and characteristics of the downsampled output.
    - Comfy dtype: STRING
    - Python dtype: str
- upscale_method
    - The upscale method parameter determines the technique used for upsampling the processed output. It plays an important role in the final resolution and visual fidelity of the model output.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- model
    - The output model is a modified version of the input model, now equipped with additional downsampling capabilities. It represents the result of the node's processing and is ready for further use or analysis.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
