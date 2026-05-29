# Documentation
- Class name: FaceParse
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

The FaceParse node is designed to analyze and parse facial features from input images. It utilizes pre-trained models to identify and segment various facial elements, such as eyes, nose, and mouth. The primary function of this node is to convert input images into detailed facial parsing maps, which can be used for further analysis or visualization. This process enhances the understanding of facial structure and is highly useful for applications like facial expression recognition or facial feature tracking.

# Input types
## Required
- model
    - The model parameter is critical for the FaceParse node, as it defines the pre-trained neural network architecture used for facial parsing. It is the foundation of the node's functionality, enabling the identification and segmentation of facial features. Without the model, the node cannot perform its intended task.
    - Comfy dtype: FACE_PARSING_MODEL
    - Python dtype: torch.nn.Module
- processor
    - The processor parameter is essential for preprocessing input images into a format compatible with the model. It ensures the image is properly formatted and ready for the model to perform facial parsing. The processor is a key component that enables the model to effectively process the input.
    - Comfy dtype: FACE_PARSING_PROCESSOR
    - Python dtype: object
- image
    - The image parameter is the primary input for the FaceParse node. It contains the facial image to be analyzed. The quality and resolution of the image directly impact the accuracy and level of detail in the facial parsing results.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- IMAGE
    - The output image is a visualization of the facial parsing results, with different facial features highlighted in different colors. This provides an intuitive understanding of the facial structure and the accuracy of the model's predictions.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- FACE_PARSING_RESULT
    - The facial parsing result is a segmented representation of the input image, where each pixel is assigned a label corresponding to a specific facial feature. This output is crucial for further analysis and can be used in various applications, such as facial expression analysis or facial feature tracking.
    - Comfy dtype: FACE_PARSING_RESULT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class FaceParse:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'model': ('FACE_PARSING_MODEL', {}), 'processor': ('FACE_PARSING_PROCESSOR', {}), 'image': ('IMAGE', {})}}
    RETURN_TYPES = ('IMAGE', 'FACE_PARSING_RESULT')
    FUNCTION = 'main'
    CATEGORY = 'face_parsing'

    def main(self, model, processor, image: Tensor):
        images = []
        results = []
        transform = T.ToPILImage()
        colormap = cm.get_cmap('viridis', 19)
        for item in image:
            size = item.shape[:2]
            inputs = processor(images=transform(item.permute(2, 0, 1)), return_tensors='pt')
            outputs = model(**inputs)
            logits = outputs.logits.cpu()
            upsampled_logits = nn.functional.interpolate(logits, size=size, mode='bilinear', align_corners=False)
            pred_seg = upsampled_logits.argmax(dim=1)[0]
            pred_seg_np = pred_seg.detach().numpy().astype(np.uint8)
            results.append(torch.tensor(pred_seg_np))
            colored = colormap(pred_seg_np)
            colored_sliced = colored[:, :, :3]
            images.append(torch.tensor(colored_sliced))
        return (torch.cat(images, dim=0).unsqueeze(0), torch.cat(results, dim=0).unsqueeze(0))
```