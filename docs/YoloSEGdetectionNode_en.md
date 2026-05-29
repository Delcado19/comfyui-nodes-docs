# Documentation
- Class name: YoloSEGdetectionNode
- Category: Jags_vector/yoloSEG
- Output node: False
- Repo Ref: https://github.com/jags111/ComfyUI_Jags_VectorMagic

This node uses a deep learning model to perform semantic segmentation on images, identifying and classifying regions of interest. It leverages the power of the YOLO (You Only Look Once) architecture, known for its real-time object detection capabilities, to segment and classify objects in the input image. The main goal of the node is to provide a detailed understanding of the image content by delineating the boundaries of different objects, thereby enabling more complex image analysis tasks.

# Input types
## Required
- image
    - The image parameter is crucial for the operation of the node; it is the primary input. It is the medium through which the node's segmentation capability is realized. The quality and resolution of the image significantly affect the accuracy and level of detail of the segmentation results.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
- model_name
    - The model name parameter determines the YOLO model configuration used for the segmentation process. It is very important because different models can provide different levels of accuracy and performance. The choice of model directly affects the quality of segmentation and the node's ability to correctly identify and classify objects in the image.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- SEG_IMAGE
    - The output image, now segmented, provides a visual representation of the object classification performed by the node. This is a critical result as it demonstrates the node's effectiveness in understanding and processing the input image, allowing for further analysis and application.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class YoloSEGdetectionNode:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'model_name': (folder_paths.get_filename_list('yolov8'),)}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('SEG_IMAGE',)
    FUNCTION = 'detect'
    CATEGORY = 'Jags_vector/yoloSEG'

    def detect(self, image, model_name):
        image_tensor = image
        image_np = image_tensor.cpu().numpy()
        image = Image.fromarray((image_np.squeeze(0) * 255).astype(np.uint8))
        print(f"model_path: {os.path.join(folder_paths.models_dir, 'yolov8')}/{model_name}")
        model = YOLO(f"{os.path.join(folder_paths.models_dir, 'yolov8')}/{model_name}")
        results = model(image)
        im_array = results[0].plot()
        im = Image.fromarray(im_array[..., ::-1])
        image_tensor_out = torch.tensor(np.array(im).astype(np.float32) / 255.0)
        image_tensor_out = torch.unsqueeze(image_tensor_out, 0)
        return (image_tensor_out,)
```