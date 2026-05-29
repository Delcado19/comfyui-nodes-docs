
# Documentation
- Class name: Keyer
- Category: image/filters
- Output node: False

The Keyer node is dedicated to image processing, specifically keying operations, selectively adjusting image region transparency based on color and luminance criteria. It enables complex image manipulations, creating or modifying the alpha channel to achieve background removal or compositing effects.

# Input types
## Required
- images
    - The image to be processed, serving as the primary input for the keying operation. This parameter is crucial for defining which images undergo the keying process.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]
- operation
    - Specifies the keying operation to perform, influencing how the image's color and luminance levels are evaluated to determine transparency.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- low
    - Defines the lower threshold for the keying operation, setting the minimum value at which a pixel is considered transparent.
    - Comfy dtype: FLOAT
    - Python dtype: float
- high
    - Sets the upper threshold for the keying operation, establishing the maximum value at which a pixel is considered transparent.
    - Comfy dtype: FLOAT
    - Python dtype: float
- gamma
    - Adjusts the gamma value of the keying operation, affecting midtone contrast and the overall appearance of the keyed image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- premult
    - Determines whether the output image should be premultiplied by its alpha channel, influencing blending behavior in compositing workflows.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image
    - The image after keying, with transparency adjusted according to the specified criteria.
    - Comfy dtype: IMAGE
    - Python dtype: Image
- alpha
    - The alpha channel generated or modified by the keying operation, representing the transparency levels of the processed image.
    - Comfy dtype: IMAGE
    - Python dtype: Alpha
- mask
    - The mask derived from the keying operation, indicating transparent and opaque regions within the image.
    - Comfy dtype: MASK
    - Python dtype: Mask


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class Keyer:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE",),
                "operation": (["luminance", "saturation", "max", "min", "red", "green", "blue", "redscreen", "greenscreen", "bluescreen"],),
                "low": ("FLOAT",{"default": 0, "step": 0.001}),
                "high": ("FLOAT",{"default": 1, "step": 0.001}),
                "gamma": ("FLOAT",{"default": 1.0, "min": 0.001, "step": 0.001}),
                "premult": ("BOOLEAN", {"default": True}),
            },
        }

    RETURN_TYPES = ("IMAGE", "IMAGE", "MASK")
    RETURN_NAMES = ("image", "alpha", "mask")
    FUNCTION = "keyer"

    CATEGORY = "image/filters"

    def keyer(self, images, operation, low, high, gamma, premult):
        t = images[:,:,:,:3].detach().clone()
        
        if operation == "luminance":
            alpha = 0.2126 * t[:,:,:,0] + 0.7152 * t[:,:,:,1] + 0.0722 * t[:,:,:,2]
        elif operation == "saturation":
            minV = torch.min(t, 3)[0]
            maxV = torch.max(t, 3)[0]
            mask = maxV != 0
            alpha = maxV
            alpha[mask] = (maxV[mask] - minV[mask]) / maxV[mask]
        elif operation == "max":
            alpha = torch.max(t, 3)[0]
        elif operation == "min":
            alpha = torch.min(t, 3)[0]
        elif operation == "red":
            alpha = t[:,:,:,0]
        elif operation == "green":
            alpha = t[:,:,:,1]
        elif operation == "blue":
            alpha = t[:,:,:,2]
        elif operation == "redscreen":
            alpha = 0.7 * (t[:,:,:,1] + t[:,:,:,2]) - t[:,:,:,0] + 1
        elif operation == "greenscreen":
            alpha = 0.7 * (t[:,:,:,0] + t[:,:,:,2]) - t[:,:,:,1] + 1
        elif operation == "bluescreen":
            alpha = 0.7 * (t[:,:,:,0] + t[:,:,:,1]) - t[:,:,:,2] + 1
        else: # should never be reached
            alpha = t[:,:,:,0] * 0
        
        if low == high:
            alpha = (alpha > high).to(t.dtype)
        else:
            alpha = (alpha - low) / (high - low)
        
        if gamma != 1.0:
            alpha = torch.pow(alpha, 1/gamma)
        alpha = torch.clamp(alpha, min=0, max=1).unsqueeze(3).repeat(1,1,1,3)
        if premult:
            t *= alpha
        return (t, alpha, alpha[:,:,:,0])

```
