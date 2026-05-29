# Documentation
- Class name: Image3D
- Category: ♾️Mixlab/Image
- Output node: True
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The Image3D node is designed to process and manipulate 3D images. It accepts a base64-encoded image and optional materials as inputs, converting them into tensor form suitable for further processing by deep learning models. The node also handles the extraction of masks and background images, providing a comprehensive suite of image manipulation capabilities.

# Input types
## Required
- upload
    - The 'upload' parameter is critical to the node, as it contains the base64-encoded image data and optional materials for processing. It is essential to the node's execution, as it provides the primary input for image manipulation.
    - Comfy dtype: Dict[str, str]
    - Python dtype: Dict[str, Union[str, torch.Tensor]]
- material
    - The 'material' parameter is optional, allowing the inclusion of additional image data that can be used to enhance the primary image processing workflow. It adds flexibility to the node's functionality by enabling the use of supplementary visual elements.
    - Comfy dtype: IMAGE
    - Python dtype: Optional[torch.Tensor]

# Output types
- IMAGE
    - The 'IMAGE' output represents the processed 3D image in tensor form, which can be used for downstream tasks such as machine learning or computer vision applications.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - The 'MASK' output provides a binary mask derived from the input image, which can be used for segmentation or other image analysis tasks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- BG_IMAGE
    - The 'BG_IMAGE' output is an optional background image that complements the primary image, enhancing context for certain applications.
    - Comfy dtype: IMAGE
    - Python dtype: Optional[torch.Tensor]
- MATERIAL
    - The 'MATERIAL' output is the processed material image, which can be used alongside the primary image for more complex image processing tasks.
    - Comfy dtype: IMAGE
    - Python dtype: Optional[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class Image3D:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'upload': ('THREED',)}, 'optional': {'material': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE', 'MASK', 'IMAGE', 'IMAGE')
    RETURN_NAMES = ('IMAGE', 'MASK', 'BG_IMAGE', 'MATERIAL')
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Image'
    INPUT_IS_LIST = False
    OUTPUT_IS_LIST = (False, False, False, False)
    OUTPUT_NODE = True

    def run(self, upload, material=None):
        image = base64_to_image(upload['image'])
        mat = None
        if 'material' in upload and upload['material']:
            mat = base64_to_image(upload['material'])
            mat = mat.convert('RGB')
            mat = pil2tensor(mat)
        mask = image.split()[3]
        image = image.convert('RGB')
        mask = mask.convert('L')
        bg_image = None
        if 'bg_image' in upload and upload['bg_image']:
            bg_image = base64_to_image(upload['bg_image'])
            bg_image = bg_image.convert('RGB')
            bg_image = pil2tensor(bg_image)
        mask = pil2tensor(mask)
        image = pil2tensor(image)
        m = []
        if not material is None:
            m = create_temp_file(material[0])
        return {'ui': {'material': m}, 'result': (image, mask, bg_image, mat)}
```