
# Documentation
- Class name: RemapWarpPolar
- Category: Bmad/CV/Transform
- Output node: False

The RemapWarpPolar node is used to transform an image by applying a polar warp effect. This effect can include adjustments to radius, center point, and choice of applying the transform logarithmically or linearly. This node supports inverse transform and optionally crops to the transformed area.

# Input types
## Required
- max_radius
    - Specifies the maximum radius of the polar warp transform, affecting the distance the effect extends from the center.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: int
- radius_adjust
    - Adjusts the effective radius of the transform by scaling the maximum radius to fine-tune the coverage of the effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- center_x_adjust
    - Adjusts the position of the transform center point on the x-axis, allowing horizontal movement of the effect's origin.
    - Comfy dtype: FLOAT
    - Python dtype: float
- center_y_adjust
    - Adjusts the position of the transform center point on the y-axis, allowing vertical movement of the effect's origin.
    - Comfy dtype: FLOAT
    - Python dtype: float
- log
    - Determines whether the transform applies logarithmic mapping, changing the visual appearance of the warp.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- inverse
    - When enabled, applies the inverse of the polar warp transform, potentially reversing the effect.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- crop
    - Enables cropping of the transformed image, retaining only the area affected by the warp and removing extra parts.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- remap
    - The node returns the transformed image and optional mask processed with the polar warp effect, both possibly cropped.
    - Comfy dtype: REMAP
    - Python dtype: Tuple[numpy.ndarray, numpy.ndarray, NoneType]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RemapWarpPolar(RemapBase):
    MAX_RADIUS = {
        "half min shape": lambda shape: np.min(shape[:2]) / 2,
        "half max shape": lambda shape: np.max(shape[:2]) / 2,
        "hypot": lambda shape: np.hypot(shape[1] / 2, shape[0] / 2),
        "raw": lambda _: 1  # uses value set by radius_adjust
    }
    MAX_RADIUS_KEYS = list(MAX_RADIUS.keys())

    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "max_radius": (s.MAX_RADIUS_KEYS, {"default": s.MAX_RADIUS_KEYS[0]}),
            "radius_adjust": ("FLOAT", {"default": 1, "min": .1, "max": 2048, "step": 0.01}),
            "center_x_adjust": ("FLOAT", {"default": 0, "min": -3, "max": 3, "step": 0.01}),
            "center_y_adjust": ("FLOAT", {"default": 0, "min": -3, "max": 3, "step": 0.01}),
            "log": ("BOOLEAN", {"default": False}),
            "inverse": ("BOOLEAN", {"default": True}),
            "crop": ("BOOLEAN", {"default": True})
        }
        }

    @staticmethod
    def warp(custom_data, src, interpolation, mask=None):
        max_radius, radius_adj, center_x_adj, center_y_adj, log, inverse, crop = custom_data

        center = (
        src.shape[1] / 2 + src.shape[1] / 2 * center_x_adj, src.shape[0] / 2 + src.shape[0] / 2 * center_y_adj)
        radius = RemapWarpPolar.MAX_RADIUS[max_radius](src.shape) * radius_adj
        flags = interpolation | cv.WARP_FILL_OUTLIERS
        flags |= cv.WARP_POLAR_LOG if log else cv.WARP_POLAR_LINEAR
        if inverse:
            flags |= cv.WARP_INVERSE_MAP

        img = cv.warpPolar(src, (src.shape[1], src.shape[0]), center, radius, flags)
        if mask is not None:
            mask = cv.warpPolar(mask, (mask.shape[1], mask.shape[0]), center, radius, flags)

        if crop:
            left, right = int(max(center[0] - radius, 0)), int(min(center[0] + radius, src.shape[1]))
            top, bottom = int(max(center[1] - radius, 0)), int(min(center[1] + radius, src.shape[0]))
            img = img[top:bottom, left:right]
            mask = mask[top:bottom, left:right]

        return img, mask, None

    def send_remap(self, max_radius, radius_adjust, center_x_adjust, center_y_adjust, log, inverse, crop):
        remap_data = {
            "func": lambda _, mr, ra, cx, cy, l, i, c: (mr, ra, cx, cy, l, i, c),  # does nothing, just returns args
            "xargs": [max_radius, radius_adjust, center_x_adjust, center_y_adjust, log, inverse, crop],
            "custom": RemapWarpPolar.warp
        }
        return (remap_data,)

```
