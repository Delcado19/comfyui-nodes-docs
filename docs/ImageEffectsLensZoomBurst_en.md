
# Documentation
- Class name: `ImageEffectsLensZoomBurst`
- Category: `image/effects/lens`
- Output node: `False`

The ImageEffectsLensZoomBurst node applies a zoom burst effect to images, altering their appearance through dynamic scaling, rotation, and optional stabilization, creating motion-like visual effects. It enhances visual content by simulating a rapid zoom-in effect, commonly used to add dramatic impact or focus to specific areas of an image.

# Input types
## Required
- **`images`**
    - The input image to which the zoom burst effect will be applied. These images are the primary objects of the transformation, with effect parameters applied to them to create the desired visual effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- **`scale`**
    - Defines the scaling factor for the zoom burst effect, determining how much the image will be zoomed in or out during effect application.
    - Comfy dtype: FLOAT
    - Python dtype: float
- **`samples`**
    - Specifies the number of samples used to create the zoom burst effect, affecting the smoothness and intensity of the final output.
    - Comfy dtype: INT
    - Python dtype: int
- **`position_x`**
    - The x-coordinate position of the zoom burst effect center on the image, allowing targeted visual emphasis on specific image areas.
    - Comfy dtype: FLOAT
    - Python dtype: int
- **`position_y`**
    - The y-coordinate position of the zoom burst effect center on the image, allowing targeted visual emphasis on specific image areas.
    - Comfy dtype: FLOAT
    - Python dtype: int
- **`rotation`**
    - Determines the rotation angle applied to the image alongside the zoom effect, adding a dynamic twist to the visual effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- **`method`**
    - The method of applying the zoom burst effect, which may influence the appearance and performance of the effect.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- **`stabilization`**
    - Indicates whether stabilization techniques are applied to reduce potential blur or distortion effects, enhancing the visual clarity of the zoom burst.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool

# Output types
- **`image`**
    - The output image after the zoom burst effect has been applied, showcasing the transformed visual appearance with the desired motion-like, dynamic visual effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageEffectsLensZoomBurst:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "scale": ("FLOAT", {
                    "default": 1.5,
                    "min": 1.0,
                    "step": 0.01
                }),
                "samples": ("INT", {
                    "default": 100,
                    "min": 1,
                }),
                "position_x": ("FLOAT", {
                    "default": 0.5,
                    "max": 1.0,
                    "step": 0.01
                }),
                "position_y": ("FLOAT", {
                    "default": 0.5,
                    "max": 1.0,
                    "step": 0.01
                }),
                "rotation": ("FLOAT", {
                    "default": 0.0,
                    "min": 0.0,
                    "max": 360.0,
                }),
                "method": (["circle", "point"],),
                "stabilization": (["true", "false"],),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/effects/lens"

    # noinspection PyUnresolvedReferences
    def zoom_burst(
            self,
            image,
            scale,
            samples,
            position,
            rotation,
            method,
            stabilization,
    ):
        if scale < 1.0:
            raise ValueError("Parameter scale can't be smaller then initial image size.")

        h, w = image.shape[:2]

        x = np.arange(w)
        y = np.arange(h)

        xx, yy = np.meshgrid(x, y)

        cx = int(w * position[0])
        cy = int(h * position[1])

        if method == "circle":
            d = np.sqrt((xx - cx) ** 2 + (yy - cy) ** 2)
            max_d = np.sqrt((w / 2) ** 2 + (h / 2) ** 2)

            map_x_up = (xx - d * (scale - 1.0) / max_d * (xx - cx) / samples).astype(np.float32)
            map_y_up = (yy - d * (scale - 1.0) / max_d * (yy - cy) / samples).astype(np.float32)

            map_x_down = (xx + d * (scale - 1.0) / max_d * (xx - cx) / samples).astype(np.float32)
            map_y_down = (yy + d * (scale - 1.0) / max_d * (yy - cy) / samples).astype(np.float32)
        elif method == "point":
            map_x_up = (xx - (xx - cx) * (scale - 1.0) / samples).astype(np.float32)
            map_y_up = (yy - (yy - cy) * (scale - 1.0) / samples).astype(np.float32)

            map_x_down = (xx + (xx - cx) * (scale - 1.0) / samples).astype(np.float32)
            map_y_down = (yy + (yy - cy) * (scale - 1.0) / samples).astype(np.float32)
        else:
            raise ValueError("Unsupported method.")

        if rotation > 0.0:
            angle_step = rotation / samples

            rm_up = cv2.getRotationMatrix2D((cx, cy), angle_step, 1)
            rm_down = cv2.getRotationMatrix2D((cx, cy), -angle_step, 1)
        else:
            vibration_angle = 1.0
            vibration_step = vibration_angle / samples

            rm_up_even = cv2.getRotationMatrix2D((cx, cy), vibration_step, 1)
            rm_down_even = cv2.getRotationMatrix2D((cx, cy), -vibration_step, 1)

            rm_up_odd = cv2.getRotationMatrix2D((cx, cy), -vibration_step, 1)
            rm_down_odd = cv2.getRotationMatrix2D((cx, cy), vibration_step, 1)

        for i in range(samples):
            if stabilization:
                tmp_up = cv2.remap(image, map_x_up, map_y_up, cv2.INTER_LINEAR)
                tmp_down = cv2.remap(image, map_x_down, map_y_down, cv2.INTER_LINEAR, borderMode=cv2.BORDER_REFLECT)

                if rotation > 0.0:
                    tmp_up = cv2.warpAffine(tmp_up, rm_up, (w, h), borderMode=cv2.BORDER_REFLECT)
                    tmp_down = cv2.warpAffine(tmp_down, rm_down, (w, h), borderMode=cv2.BORDER_REFLECT)
                else:
                    if i % 2 == 0:
                        tmp_up = cv2.warpAffine(tmp_up, rm_up_even, (w, h), borderMode=cv2.BORDER_REFLECT)
                        tmp_down = cv2.warpAffine(tmp_down, rm_down_even, (w, h), borderMode=cv2.BORDER_REFLECT)
                    else:
                        tmp_up = cv2.warpAffine(tmp_up, rm_up_odd, (w, h), borderMode=cv2.BORDER_REFLECT)
                        tmp_down = cv2.warpAffine(tmp_down, rm_down_odd, (w, h), borderMode=cv2.BORDER_REFLECT)

                image = cv2.addWeighted(tmp_up, 0.5, tmp_down, 0.5, 0)
            else:
                tmp = cv2.remap(image, map_x_up, map_y_up, cv2.INTER_LINEAR)

                if rotation > 0.0:
                    rm = cv2.getRotationMatrix2D((cx, cy), angle_step, 1)
                    tmp = cv2.warpAffine(tmp, rm, (w, h), borderMode=cv2.BORDER_REFLECT)
                else:
                    if i % 2 == 0:
                        tmp = cv2.warpAffine(tmp, rm_up_even, (w, h), borderMode=cv2.BORDER_REFLECT)
                    else:
                        tmp = cv2.warpAffine(tmp, rm_up_odd, (w, h), borderMode=cv2.BORDER_REFLECT)

                image = cv2.addWeighted(tmp, 0.5, image, 0.5, 0)

        return image

    def node(self, images, scale, samples, position_x, position_y, rotation, method, stabilization):
        tensor = images.clone().detach()

        return (cv2_layer(tensor, lambda x: self.zoom_burst(
            x, scale, samples, (position_x, position_y), rotation, method, True if stabilization == "true" else False
        )),)

```
