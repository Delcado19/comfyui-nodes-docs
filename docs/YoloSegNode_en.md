# Documentation
- Class name: YoloSegNode
- Category: Jags_vector/yoloSEG
- Output node: False
- Repo Ref: https://github.com/jags111/ComfyUI_Jags_VectorMagic

This node aims to perform semantic segmentation using a YOLO-based model, identifying and masking specific categories of instances in an image. It processes the input image to identify the required categories and outputs a segmented image and a corresponding mask highlighting the identified instances.

# Input types
## Required
- image
    - The input image is essential for the node to perform segmentation. It is the primary data source for the model to analyze and identify the specified categories.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- model_name
    - This parameter determines the specific YOLO model used for segmentation. It is critical as it determines the accuracy and effectiveness of the segmentation process.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- class_id
    - The category ID parameter allows users to specify which categories in the image should be segmented, influencing the node's output to focus on the desired categories.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- SEG_IMAGE
    - The segmented image represents the input image with identified category instances highlighted, providing a visual output of the segmentation process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- SEG_MASK
    - The mask output is a binary representation of the segmented category instances, serving as a precise tool for further analysis or manipulation of the identified categories in the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class YoloSegNode:

    def __init__(self) -> None:
        ...

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'model_name': (folder_paths.get_filename_list('yolov8'),), 'class_id': ('INT', {'default': 0})}}
    RETURN_TYPES = ('IMAGE', 'MASK')
    RETURN_NAMES = ('SEG_IMAGE', 'SEG_MASK')
    FUNCTION = 'seg'
    CATEGORY = 'Jags_vector/yoloSEG'

    def seg(self, image, model_name, class_id):
        image_tensor = image
        image_np = image_tensor.cpu().numpy()
        image = Image.fromarray((image_np.squeeze(0) * 255).astype(np.uint8))
        print(f"model_path: {os.path.join(folder_paths.models_dir, 'yolov8')}/{model_name}")
        model = YOLO(f"{os.path.join(folder_paths.models_dir, 'yolov8')}/{model_name}")
        results = model(image)
        masks = results[0].masks.data
        boxes = results[0].boxes.data
        clss = boxes[:, 5]
        people_indices = torch.where(clss == class_id)
        people_masks = masks[people_indices]
        people_mask = torch.any(people_masks, dim=0).int() * 255
        im_array = results[0].plot()
        im = Image.fromarray(im_array[..., ::-1])
        image_tensor_out = torch.tensor(np.array(im).astype(np.float32) / 255.0)
        image_tensor_out = torch.unsqueeze(image_tensor_out, 0)
        return (image_tensor_out, people_mask)
```