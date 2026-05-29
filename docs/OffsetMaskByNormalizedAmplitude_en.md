
# Documentation
- Class name: OffsetMaskByNormalizedAmplitude
- Category: KJNodes/audio
- Output node: False

The OffsetMaskByNormalizedAmplitude node transforms the mask based on the normalized amplitude of the audio signal. It adjusts the orientation and position of the mask, using the amplitude to determine the degree of rotation and displacement, thereby achieving dynamic visual effects synchronized with audio intensity.

# Input types
## Required
- normalized_amp
    - Array of normalized amplitude values of the audio signal, used to determine the extent of the transformation.
    - Comfy dtype: NORMALIZED_AMPLITUDE
    - Python dtype: numpy.ndarray
- mask
    - The mask to be transformed, representing a visual element whose modification is driven by audio amplitude.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- x
    - Horizontal displacement factor, affecting the lateral movement of the mask in response to amplitude changes.
    - Comfy dtype: INT
    - Python dtype: float
- y
    - Vertical displacement factor, affecting the longitudinal displacement of the mask according to amplitude changes.
    - Comfy dtype: INT
    - Python dtype: float
- rotate
    - Boolean value indicating whether to rotate the mask based on the normalized amplitude.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- angle_multiplier
    - Multiplier for the rotation angle, used to scale the effect of normalized amplitude on the mask rotation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- mask
    - Transformed mask after applying rotation and displacement adjustments based on the audio normalized amplitude.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class OffsetMaskByNormalizedAmplitude:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "normalized_amp": ("NORMALIZED_AMPLITUDE",),
                "mask": ("MASK",),
                "x": ("INT", { "default": 0, "min": -4096, "max": MAX_RESOLUTION, "step": 1, "display": "number" }),
                "y": ("INT", { "default": 0, "min": -4096, "max": MAX_RESOLUTION, "step": 1, "display": "number" }),
                "rotate": ("BOOLEAN", { "default": False }),
                "angle_multiplier": ("FLOAT", { "default": 0.0, "min": -1.0, "max": 1.0, "step": 0.001, "display": "number" }),
            }
        }

    RETURN_TYPES = ("MASK",)
    RETURN_NAMES = ("mask",)
    FUNCTION = "offset"
    CATEGORY = "KJNodes/audio"
    DESCRIPTION = """
Works as a bridge to the AudioScheduler -nodes:  
https://github.com/a1lazydog/ComfyUI-AudioScheduler  
Offsets masks based on the normalized amplitude.
"""

    def offset(self, mask, x, y, angle_multiplier, rotate, normalized_amp):

         # Ensure normalized_amp is an array and within the range [0, 1]
        offsetmask = mask.clone()
        normalized_amp = np.clip(normalized_amp, 0.0, 1.0)
       
        batch_size, height, width = mask.shape

        if rotate:
            for i in range(batch_size):
                rotation_amp = int(normalized_amp[i] * (360 * angle_multiplier))
                rotation_angle = rotation_amp
                offsetmask[i] = TF.rotate(offsetmask[i].unsqueeze(0), rotation_angle).squeeze(0)
        if x != 0 or y != 0:
            for i in range(batch_size):
                offset_amp = normalized_amp[i] * 10
                shift_x = min(x*offset_amp, width-1)
                shift_y = min(y*offset_amp, height-1)
                if shift_x != 0:
                    offsetmask[i] = torch.roll(offsetmask[i], shifts=int(shift_x), dims=1)
                if shift_y != 0:
                    offsetmask[i] = torch.roll(offsetmask[i], shifts=int(shift_y), dims=0)
        
        return offsetmask,

```
