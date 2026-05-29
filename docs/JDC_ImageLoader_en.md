# Documentation
- Class name: LoadImagePath
- Category: image
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

The LoadImagePath node is designed to fetch and process image data from a specified path or URL. It can handle online images (by downloading) and local images (by opening files directly). The node converts images into a format suitable for further processing, including normalization and conversion to tensors, and extracts masks if available. This node is essential for initiating image-based operations in a workflow.

# Input types
## Required
- image
- The 'image' parameter is crucial because it defines the source of the image data. It can be a local file path or a URL pointing to an online image. The node uses this input to retrieve and process the image accordingly, making it a key element of the node's operation.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
- The 'image' output is a processed version of the input image, converted into a tensor format suitable for subsequent computational tasks. It is the primary result of the node's functionality, enabling further image analysis and operations.
    - Comfy dtype: TENSOR
    - Python dtype: torch.Tensor
- mask
- When the 'mack' output is present, it provides additional information in the form of a binary mask derived from the input image. This mask can be used for various purposes in an image processing workflow, such as segmentation or object recognition.
    - Comfy dtype: TENSOR
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class LoadImagePath:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('STRING', {'default': ''})}}
    CATEGORY = 'image'
    RETURN_TYPES = ('IMAGE', 'MASK')
    FUNCTION = 'load_image'

    def load_image(self, image):
        image_path = str(image)
        image_path = image_path.replace('"', '')
        i = None
        if image_path.startswith('http'):
            response = requests.get(image_path)
            i = Image.open(BytesIO(response.content)).convert('RGB')
        else:
            i = Image.open(image_path)
        i = ImageOps.exif_transpose(i)
        image = i.convert('RGB')
        image = np.array(image).astype(np.float32) / 255.0
        image = torch.from_numpy(image)[None,]
        if 'A' in i.getbands():
            mask = np.array(i.getchannel('A')).astype(np.float32) / 255.0
            mask = 1.0 - torch.from_numpy(mask)
        else:
            mask = torch.zeros((64, 64), dtype=torch.float32, device='cpu')
        return (image, mask)

    @classmethod
    def IS_CHANGED(s, image):
        image_path = str(image)
        image_path = image_path.replace('"', '')
        m = hashlib.sha256()
        if not image_path.startswith('http'):
            with open(image_path, 'rb') as f:
                m.update(f.read())
            return m.digest().hex()
        else:
            m.update(image.encode('utf-8'))
            return m.digest().hex()

    @classmethod
    def VALIDATE_INPUTS(s, image):
        image_path = str(image)
        image_path = image_path.replace('"', '')
        if image_path.startswith('http'):
            return True
        if not os.path.isfile(image_path):
            return 'No file found: {}'.format(image_path)
        return True
```