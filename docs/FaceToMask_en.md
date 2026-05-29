# Documentation
- Class name: FaceToMask
- Category: ♾️Mixlab/Mask
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node uses image processing techniques to identify and isolate facial features from the input image, focusing on the green channel to create a mask that highlights the detected faces.

# Input types
## Required
- image
    - The input image is critical to the node's operation, as it is the source from which facial features are extracted and the mask is generated.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Output types
- MASK
    - The output mask represents the facial regions in the input image, using green channel data to indicate the presence of faces.
    - Comfy dtype: TENSOR
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class FaceToMask:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',)}}
    RETURN_TYPES = ('MASK',)
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Mask'
    INPUT_IS_LIST = False
    OUTPUT_IS_LIST = (False,)

    def run(self, image):
        im = tensor2pil(image)
        mask = detect_faces(im)
        mask = pil2tensor(mask)
        channels = ['red', 'green', 'blue', 'alpha']
        mask = mask[:, :, :, channels.index('green')]
        return (mask,)
```