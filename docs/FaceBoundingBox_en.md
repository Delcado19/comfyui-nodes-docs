# Documentation
- Class name: FaceBoundingBox
- Category: FaceAnalysis
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_FaceAnalysis.git

This node aims to analyze images and detect facial bounding boxes, providing critical functionality for image processing applications that require face detection and analysis.

# Input types
## Required
- analysis_models
    - This parameter contains the models and libraries used for face detection in images, significantly impacting the node's ability to process and analyze input data.
    - Comfy dtype: DICT[str, Any]
    - Python dtype: Dict[str, Any]
- image
    - The image parameter is essential for the node's operation, as it is the primary input for facial bounding box detection, directly affecting the accuracy and effectiveness of the analysis.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- padding
    - Padding is an important parameter that ensures detected faces have sufficient margins, preventing cropping issues and improving the overall quality of detection.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- index
    - The index parameter allows selecting a specific face from multiple detections, focusing the node's output on the desired facial bounding box.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The output image tensor represents the cropped and processed image of detected faces, serving as a critical component for further analysis or display purposes.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- x
    - The x-coordinate of the top-left corner of the bounding box provides a reference point for facial detection, aiding in precise localization of faces within the image.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - The y-coordinate of the top-left corner of the bounding box is crucial for accurately positioning detected faces within the image context.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The width of the bounding box is important as it determines the size of the detected face, affecting the resolution and level of detail in the output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height of the bounding box is critical for maintaining the aspect ratio and proportions of detected faces, ensuring the integrity of facial features in the output.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class FaceBoundingBox:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'analysis_models': ('ANALYSIS_MODELS',), 'image': ('IMAGE',), 'padding': ('INT', {'default': 0, 'min': 0, 'max': 4096, 'step': 1}), 'index': ('INT', {'default': -1, 'min': -1, 'max': 4096, 'step': 1})}}
    RETURN_TYPES = ('IMAGE', 'INT', 'INT', 'INT', 'INT')
    RETURN_NAMES = ('IMAGE', 'x', 'y', 'width', 'height')
    FUNCTION = 'bbox'
    CATEGORY = 'FaceAnalysis'

    def bbox(self, analysis_models, image, padding, index=-1):
        out_img = []
        out_x = []
        out_y = []
        out_w = []
        out_h = []
        for i in image:
            img = T.ToPILImage()(i.permute(2, 0, 1)).convert('RGB')
            if analysis_models['library'] == 'insightface':
                faces = analysis_models['detector'].get(np.array(img))
                for face in faces:
                    (x, y, w, h) = face.bbox.astype(int)
                    w = w - x
                    h = h - y
                    x = max(0, x - padding)
                    y = max(0, y - padding)
                    w = min(img.width, w + 2 * padding)
                    h = min(img.height, h + 2 * padding)
                    crop = img.crop((x, y, x + w, y + h))
                    out_img.append(T.ToTensor()(crop).permute(1, 2, 0))
                    out_x.append(x)
                    out_y.append(y)
                    out_w.append(w)
                    out_h.append(h)
            else:
                faces = analysis_models['detector'](np.array(img), 1)
                for face in faces:
                    (x, y, w, h) = (face.left(), face.top(), face.width(), face.height())
                    x = max(0, x - padding)
                    y = max(0, y - padding)
                    w = min(img.width, w + 2 * padding)
                    h = min(img.height, h + 2 * padding)
                    crop = img.crop((x, y, x + w, y + h))
                    out_img.append(T.ToTensor()(crop).permute(1, 2, 0))
                    out_x.append(x)
                    out_y.append(y)
                    out_w.append(w)
                    out_h.append(h)
        if not out_img:
            raise Exception('No face detected in image.')
        if len(out_img) == 1:
            index = 0
        if index > len(out_img) - 1:
            index = len(out_img) - 1
        if index != -1:
            out_img = out_img[index].unsqueeze(0)
            out_x = out_x[index]
            out_y = out_y[index]
            out_w = out_w[index]
            out_h = out_h[index]
        else:
            w = out_img[0].shape[1]
            h = out_img[0].shape[0]
            out_img = [comfy.utils.common_upscale(img.unsqueeze(0).movedim(-1, 1), w, h, 'bilinear', 'center').movedim(1, -1).squeeze(0) for img in out_img]
            out_img = torch.stack(out_img)
        return (out_img, out_x, out_y, out_w, out_h)
```