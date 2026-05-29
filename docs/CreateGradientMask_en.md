# Documentation
- Class name: CreateGradientMask
- Category: KJNodes/masking/generate
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The CreateGradientMask node is designed to generate gradient masks for various image processing tasks. It creates a mask by computing a linear gradient across the image width, then adjusts the gradient based on the current frame in the frame sequence. This enables dynamic masking effects that can change over time or vary across different parts of the image.

# Input types
## Required
- invert
    - The 'invert' parameter determines whether the gradient mask should be inverted. This is useful for creating complementary masks or applying different effects based on the mask's direction.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- frames
    - The 'frames' parameter specifies the number of frames for which masks are generated. It directly affects the batch size of the output and is essential for creating animations or time-varying effects.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The 'width' parameter sets the width of the gradient mask in pixels. It is critical for defining the spatial resolution of the mask and influencing the granularity of the gradient.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' parameter sets the height of the gradient mask in pixels. It works together with the 'width' parameter to determine the overall size of the mask.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASK
    - The output MASK is a tensor representing the gradient mask. It is a key component for subsequent image operations and effect applications.
    - Comfy dtype: TORCH.TENSOR
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class CreateGradientMask:
    RETURN_TYPES = ('MASK',)
    FUNCTION = 'createmask'
    CATEGORY = 'KJNodes/masking/generate'

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'invert': ('BOOLEAN', {'default': False}), 'frames': ('INT', {'default': 0, 'min': 0, 'max': 255, 'step': 1}), 'width': ('INT', {'default': 256, 'min': 16, 'max': 4096, 'step': 1}), 'height': ('INT', {'default': 256, 'min': 16, 'max': 4096, 'step': 1})}}

    def createmask(self, frames, width, height, invert):
        batch_size = frames
        out = []
        image_batch = np.zeros((batch_size, height, width), dtype=np.float32)
        for i in range(batch_size):
            gradient = np.linspace(1.0, 0.0, width, dtype=np.float32)
            time = i / frames
            offset_gradient = gradient - time
            image_batch[i] = offset_gradient.reshape(1, -1)
        output = torch.from_numpy(image_batch)
        mask = output
        out.append(mask)
        if invert:
            return (1.0 - torch.cat(out, dim=0),)
        return (torch.cat(out, dim=0),)
```