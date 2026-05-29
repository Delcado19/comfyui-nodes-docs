# Documentation
- Class name: LoopEnd_IMAGE
- Category: DragNUWA
- Output node: True
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

This node coordinates the flow of image data within the processing loop, ensuring the specified image is passed to subsequent stages for further analysis or processing.

# Input types
## Required
- send_to_next_loop
    - Image data that will be routed to the next stage of the loop, playing a key role in the continuity and progress of the image processing workflow.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- loop
    - The loop structure being operated to control the image data flow, essential for establishing an operation sequence within the loop.
    - Comfy dtype: LOOP
    - Python dtype: Any

# Output types
- return
    - This output indicates the node's function is complete, and the image data has been successfully directed to the next loop segment.
    - Comfy dtype: VOID
    - Python dtype: None

# Usage tips
- Infra type: CPU

# Source code
```
class LoopEnd_IMAGE:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'send_to_next_loop': ('IMAGE',), 'loop': ('LOOP',)}}
    RETURN_TYPES = ()
    FUNCTION = 'run'
    CATEGORY = 'DragNUWA'
    OUTPUT_NODE = True

    def run(self, send_to_next_loop, loop):
        loop.next = send_to_next_loop
        return ()
```