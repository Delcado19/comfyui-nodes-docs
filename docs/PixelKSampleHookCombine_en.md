# Documentation
- Class name: PixelKSampleHookCombine
- Category: image_processing
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

PixelKSampleHookCombine is a node designed to apply two independent hooks in sequence to a series of image processing operations. It coordinates the hooks to pre‑process, decode, upscale, and encode pixel data in a specific order, ensuring a collaborative workflow for image operation tasks.

# Input types
## Required
- hook1
    - The first hook to be applied in sequence. It plays a crucial role in the initial stage of image processing, laying the foundation for subsequent operations.
    - Comfy dtype: PixelKSampleHook
    - Python dtype: PixelKSampleHook
- hook2
    - The second hook to be applied in sequence, which further refines the image processing pipeline after the first hook, improving overall output quality.
    - Comfy dtype: PixelKSampleHook
    - Python dtype: PixelKSampleHook

# Output types
- processed_pixels
    - The output of the PixelKSampleHookCombine node is the result after applying both hooks to the input pixel data. It represents the final state of the image after all processing steps are completed.
    - Comfy dtype: COMBO[str, torch.Tensor]
    - Python dtype: Union[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
