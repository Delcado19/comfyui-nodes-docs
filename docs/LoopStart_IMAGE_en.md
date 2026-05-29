# Documentation
- Class name: LoopStart_IMAGE
- Category: DragNUWA
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

This node facilitates the initiation of loop structures, enabling iterative processing of image data. Its role is critical in scenarios requiring repeated application of operations for image manipulation or analysis.

# Input types
## Required
- first_loop
    - The first element in the loop, setting the initial state for subsequent iterations. It is crucial as it determines the starting point and nature of the loop operations.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
## Optional
- loop
    - Represents the continuation of the loop, allowing the chaining of operations. It is important as it enables the progression of the loop and the processing of complex image processing tasks.
    - Comfy dtype: LOOP
    - Python dtype: None

# Output types
- IMAGE
    - The output is the result of the loop's operations on the image data, encapsulating the cumulative effects of the iterative process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-DragNUWA)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
