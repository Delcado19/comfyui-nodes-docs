# Documentation
- Class name: LoadImageInspire
- Category: InspirePack/image
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node loads and preprocesses images, converting them to a format suitable for further analysis and manipulation. It converts raw image data into a structured array to prepare for downstream tasks like feature extraction or image classification.

# Input types
## Required
- image
    - Image parameters are critical as they specify the source image to be processed. Their selection affects the quality and applicability of the resulting image data.
    - Comfy dtype: COMBO[sorted(files) + ['#DATA']]
    - Python dtype: PIL.Image
## Optional
- image_data
    - This parameter contains encoded image data, which is essential for the node's primary function—image loading and conversion.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The output image is a converted and structured representation of the input, ready for further analysis or processing within the system.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- mask
    - The mask output provides a binary representation that can be used for various image-related operations, enhancing the node's versatility.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class LoadImageInspire:

    @classmethod
    def INPUT_TYPES(s):
        input_dir = folder_paths.get_input_directory()
        files = [f for f in os.listdir(input_dir) if os.path.isfile(os.path.join(input_dir, f))]
        return {'required': {'image': (sorted(files) + ['#DATA'], {'image_upload': True}), 'image_data': ('STRING', {'multiline': False})}}
    CATEGORY = 'InspirePack/image'
    RETURN_TYPES = ('IMAGE', 'MASK')
    FUNCTION = 'load_image'

    def load_image(self, image, image_data):
        image_data = base64.b64decode(image_data.split(',')[1])
        i = Image.open(BytesIO(image_data))
        i = ImageOps.exif_transpose(i)
        image = i.convert('RGB')
        image = np.array(image).astype(np.float32) / 255.0
        image = torch.from_numpy(image)[None,]
        if 'A' in i.getbands():
            mask = np.array(i.getchannel('A')).astype(np.float32) / 255.0
            mask = 1.0 - torch.from_numpy(mask)
        else:
            mask = torch.zeros((64, 64), dtype=torch.float32, device='cpu')
        return (image, mask.unsqueeze(0))
```