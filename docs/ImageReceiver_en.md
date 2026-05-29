# Documentation
- Class name: ImageReceiver
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The ImageReceiver node is designed to process and receive image data, providing functions for decoding, converting, and preparing image data for further analysis or processing in a workflow. It emphasizes handling different image formats and ensuring that image data is correctly converted into a format suitable for downstream tasks.

# Input types
## Required
- image
    - The 'image' parameter is critical to the node as it specifies the source of the image data. It can be a file path or a reference to an image stored elsewhere. This parameter directly affects the node's ability to retrieve and process the image.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- link_id
    - The 'link_id' parameter serves as an identifier for linking or associating image data with other elements in the workflow. Its value can range from 0 to the maximum integer value, providing flexibility in how the image is linked or referenced.
    - Comfy dtype: INT
    - Python dtype: int
- save_to_workflow
    - The 'save_to_workflow' parameter determines whether the image data should be saved as part of the workflow for future use. This is useful for persisting data across different stages of the workflow without reprocessing.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- image_data
    - The 'image_data' parameter contains the encoded image data that the node will decode and process. It should be a string representing the base64-encoded image content, which is then converted into a usable image format.
    - Comfy dtype: STRING
    - Python dtype: str
- trigger_always
    - The 'trigger_always' parameter is a boolean flag that, when set to true, indicates that the node should process the image unconditionally. This can be used to ensure the image is always processed even if other parameters suggest it might not need to be processed.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- IMAGE
    - The 'IMAGE' output provides the processed image data in tensor format, suitable for further analysis or processing in the workflow. It represents the primary output of the ImageReceiver node after successful decoding and conversion of the image data.
    - Comfy dtype: TENSOR
    - Python dtype: torch.Tensor
- MASK
    - The 'MASK' output is an optional tensor representing a mask derived from the image data. It can be used for tasks such as segmentation or identifying specific regions of interest in the image.
    - Comfy dtype: TENSOR
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class ImageReceiver:

    @classmethod
    def INPUT_TYPES(s):
        input_dir = folder_paths.get_input_directory()
        files = [f for f in os.listdir(input_dir) if os.path.isfile(os.path.join(input_dir, f))]
        return {'required': {'image': (sorted(files),), 'link_id': ('INT', {'default': 0, 'min': 0, 'max': sys.maxsize, 'step': 1}), 'save_to_workflow': ('BOOLEAN', {'default': False}), 'image_data': ('STRING', {'multiline': False}), 'trigger_always': ('BOOLEAN', {'default': False, 'label_on': 'enable', 'label_off': 'disable'})}}
    FUNCTION = 'doit'
    RETURN_TYPES = ('IMAGE', 'MASK')
    CATEGORY = 'ImpactPack/Util'

    def doit(self, image, link_id, save_to_workflow, image_data, trigger_always):
        if save_to_workflow:
            try:
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
            except Exception as e:
                print(f"[WARN] ComfyUI-Impact-Pack: ImageReceiver - invalid 'image_data'")
                mask = torch.zeros((64, 64), dtype=torch.float32, device='cpu')
                return (empty_pil_tensor(64, 64), mask)
        else:
            return nodes.LoadImage().load_image(image)

    @classmethod
    def VALIDATE_INPUTS(s, image, link_id, save_to_workflow, image_data, trigger_always):
        if image != '#DATA' and (not folder_paths.exists_annotated_filepath(image)) or image.startswith('/') or '..' in image:
            return 'Invalid image file: {}'.format(image)
        return True

    @classmethod
    def IS_CHANGED(s, image, link_id, save_to_workflow, image_data, trigger_always):
        if trigger_always:
            return float('NaN')
        elif save_to_workflow:
            return hash(image_data)
        else:
            return hash(image)
```