# Documentation
- Class name: SvgImage
- Category: ♾️Mixlab/Image
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node processes SVG images, converting them into tensor format suitable for further manipulation and analysis within neural network frameworks. It emphasizes SVG data conversion and adaptation for integration with deep learning models.

# Input types
## Required
- upload
    - The ‘upload’ parameter is critical to the node's operation; it contains SVG image data and related metadata. It directly affects the node's ability to process and convert SVG to tensors.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]

# Output types
- IMAGE
    - The ‘IMAGE’ output provides a tensor representation of the input SVG image, usable for further processing in deep learning environments.
    - Comfy dtype: Tensor
    - Python dtype: torch.Tensor
- layers
    - The ‘layers’ output contains individual components or layers extracted from the SVG data, useful for detailed analysis or manipulation of the image structure.
    - Comfy dtype: List[Any]
    - Python dtype: List[Any]

# Usage tips
- Infra type: CPU

# Source code
```
class SvgImage:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'upload': ('SVG',)}}
    RETURN_TYPES = ('IMAGE', 'LAYER')
    RETURN_NAMES = ('IMAGE', 'layers')
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Image'
    INPUT_IS_LIST = False
    OUTPUT_IS_LIST = (False, True)

    def run(self, upload):
        layers = []
        image = base64_to_image(upload['image'])
        image = image.convert('RGB')
        image = pil2tensor(image)
        for layer in upload['data']:
            layers.append(layer)
        return (image, layers)
```