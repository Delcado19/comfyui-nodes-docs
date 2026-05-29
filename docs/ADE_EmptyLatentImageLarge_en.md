# Empty Latent Image (Big Batch) 🎭🅐🅓
## Documentation
- Class name: ADE_EmptyLatentImageLarge
- Category: Animate Diff 🎭🅐🅓/extras
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The ADE_EmptyLatentImageLarge node is designed to initialize a large latent image tensor filled with zeros. This tensor serves as a blank canvas for further generation processes, enabling image creation and manipulation at the latent level.

## Input types
### Required
- width
    - Specifies the width of the latent image to be generated. It determines the horizontal dimension of the generated tensor.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Determines the height of the latent image. It affects the vertical dimension of the generated tensor.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - Controls the number of latent images generated at once. It affects the first dimension of the generated tensor, allowing batch processing of multiple images.
    - Comfy dtype: INT
    - Python dtype: int

## Output types
- latent
    - Comfy dtype: LATENT
    - The output is a tensor representing a batch of blank latent images. Each image is initialized with zeros, ready for subsequent generation modifications.
    - Python dtype: torch.Tensor

## Usage tips
- Infra type: GPU
<!-- - Common nodes:
    - [BatchPromptScheduleLatentInput](../../ComfyUI_FizzNodes/Nodes/BatchPromptScheduleLatentInput.md)
    - [KSampler](../../Comfy/Nodes/KSampler.md) -->

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
