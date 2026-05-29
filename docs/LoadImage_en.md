# Documentation
- Class name: LoadImage
- Category: image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LoadImage node is designed to ingest image files from a specified directory, process them, and output the images along with their corresponding masks. It can handle image sequences and convert them into a format suitable for further processing, emphasizing its role in preparing data for image-related tasks.

# Input types
## Required
- image
    - The 'image' parameter is the path to the image file to be processed. It is essential to the node's operation, as it determines the specific image to be loaded and manipulated.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- IMAGE
    - The 'IMAGE' output is a tensor representing the processed image data, which has been converted to float format and normalized. This output is important as it is the primary data structure used for subsequent image analysis or manipulation tasks.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- MASK
    - The 'MASK' output is a tensor representing the binary mask associated with the image, used to distinguish different regions or objects within the image. It is essential for tasks requiring segmentation or object recognition.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class LoadImage:

    @classmethod
    def INPUT_TYPES(s):
        input_dir = folder_paths.get_input_directory()
        files = [f for f in os.listdir(input_dir) if os.path.isfile(os.path.join(input_dir, f))]
        return {'required': {'image': (sorted(files), {'image_upload': True})}}
    CATEGORY = 'image'
    RETURN_TYPES = ('IMAGE', 'MASK')
    FUNCTION = 'load_image'

    def load_image(self, image):
        image_path = folder_paths.get_annotated_filepath(image)
        img = Image.open(image_path)
        output_images = []
        output_masks = []
        for i in ImageSequence.Iterator(img):
            i = ImageOps.exif_transpose(i)
            if i.mode == 'I':
                i = i.point(lambda i: i * (1 / 255))
            image = i.convert('RGB')
            image = np.array(image).astype(np.float32) / 255.0
            image = torch.from_numpy(image)[None,]
            if 'A' in i.getbands():
                mask = np.array(i.getchannel('A')).astype(np.float32) / 255.0
                mask = 1.0 - torch.from_numpy(mask)
            else:
                mask = torch.zeros((64, 64), dtype=torch.float32, device='cpu')
            output_images.append(image)
            output_masks.append(mask.unsqueeze(0))
        if len(output_images) > 1:
            output_image = torch.cat(output_images, dim=0)
            output_mask = torch.cat(output_masks, dim=0)
        else:
            output_image = output_images[0]
            output_mask = output_masks[0]
        return (output_image, output_mask)

    @classmethod
    def IS_CHANGED(s, image):
        image_path = folder_paths.get_annotated_filepath(image)
        m = hashlib.sha256()
        with open(image_path, 'rb') as f:
            m.update(f.read())
        return m.digest().hex()

    @classmethod
    def VALIDATE_INPUTS(s, image):
        if not folder_paths.exists_annotated_filepath(image):
            return 'Invalid image file: {}'.format(image)
        return True
```