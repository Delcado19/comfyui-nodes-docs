# Documentation
- Class name: FeatheredMask
- Category: ♾️Mixlab/Mask
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The FeatheredMask node processes and enhances mask images by applying a feathering effect, making mask edges blend naturally and seamlessly with surrounding image content. The node takes an input mask and refines it to create a more natural and seamless blend.

# Input types
## Required
- mask
- The ‘mask’ parameter is the node’s primary input, representing the image mask to be processed. It is critical because the feathering effect is applied directly to this mask.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- start_offset
- The ‘start_offset’ parameter controls the initial distance from the mask edge where feathering begins. It is important because it determines the starting point of the smooth transition, affecting the overall appearance of the feathered mask.
    - Comfy dtype: INT
    - Python dtype: int
- feathering_weight
- The ‘feathering_weight’ parameter adjusts the intensity of the feathering effect. It is important because it allows fine-tuning of the softness and blending of mask edges, ensuring a visually pleasing result.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- masks
- The ‘masks’ output contains the mask image with the feathering effect applied. It is important because it represents the final product of the node’s operation, ready for further use or display.
    - Comfy dtype: LIST[IMAGE]
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class FeatheredMask:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'mask': ('MASK',), 'start_offset': ('INT', {'default': 1, 'min': -150, 'max': 150, 'step': 1, 'display': 'slider'}), 'feathering_weight': ('FLOAT', {'default': 0.1, 'min': 0.0, 'max': 1, 'step': 0.1, 'display': 'slider'})}}
    RETURN_TYPES = ('MASK',)
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Mask'
    OUTPUT_IS_LIST = (True,)

    def run(self, mask, start_offset, feathering_weight):
        (num, _, _) = mask.size()
        masks = []
        for i in range(num):
            mm = mask[i]
            image = tensor2pil(mm)
            image = image.convert('L')
            if start_offset > 0:
                image = ImageOps.invert(image)
            image_np = np.array(image)
            edges = cv2.Canny(image_np, 30, 150)
            for i in range(0, abs(start_offset)):
                a = int(abs(start_offset) * 0.1 * i)
                kernel = np.ones((a, a), np.uint8)
                dilated_edges = cv2.dilate(edges, kernel, iterations=1)
                smoothed_edges = cv2.GaussianBlur(dilated_edges, (5, 5), 0)
                feathering_weight = max(0, min(feathering_weight, 1))
                image_np = cv2.addWeighted(image_np, 1, smoothed_edges, feathering_weight, feathering_weight)
            result_image = Image.fromarray(np.uint8(image_np))
            result_image = result_image.convert('L')
            if start_offset > 0:
                result_image = ImageOps.invert(result_image)
            result_image = result_image.convert('L')
            mt = pil2tensor(result_image)
            masks.append(mt)
        return (masks,)
```