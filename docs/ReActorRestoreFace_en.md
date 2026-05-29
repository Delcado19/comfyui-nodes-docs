# Documentation
- Class name: RestoreFace
- Category: 🌌 ReActor
- Output node: False
- Repo Ref: https://github.com/Gourieff/comfyui-reactor-node.git

RestoreFace node aims to enhance and restore facial features in images using advanced face restoration models. It leverages deep learning techniques to improve the visual quality of faces, which is particularly useful for applications requiring high-quality facial images.

# Input types
## Required
- image
    - Image parameters are crucial for the face restoration process, as they provide the source material for facial repair. They directly affect the quality and accuracy of the restored face.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
- facedetection
    - The facedetection parameter specifies the detection model used to identify faces in the input image. It is crucial for accurate face localization, which is a prerequisite for effective face restoration.
    - Comfy dtype: COMBO[retinaface_resnet50,retinaface_mobile0.25,YOLOv5l,YOLOv5n]
    - Python dtype: str
- model
    - The model parameter determines the face restoration model to be applied, specifying the specific algorithms and techniques used to enhance facial features.
    - Comfy dtype: COMBO[get_model_names(get_restorers)]
    - Python dtype: str
- visibility
    - The visibility parameter adjusts the transparency level of the restored face, allowing fine-tuning of the blend between original and restored features.
    - Comfy dtype: FLOAT
    - Python dtype: float
- codeformer_weight
    - The codeformer_weight parameter influences the contribution of the CodeFormer model in the restoration process, with higher values emphasizing the model's impact on the final result.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output_image
    - The output image represents the final result of face restoration, where the faces in the input image have been enhanced and restored to a higher quality.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class RestoreFace:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'facedetection': (['retinaface_resnet50', 'retinaface_mobile0.25', 'YOLOv5l', 'YOLOv5n'],), 'model': (get_model_names(get_restorers),), 'visibility': ('FLOAT', {'default': 1, 'min': 0.0, 'max': 1, 'step': 0.05}), 'codeformer_weight': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1, 'step': 0.05})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'execute'
    CATEGORY = '🌌 ReActor'

    def __init__(self):
        self.face_helper = None

    def execute(self, image, model, visibility, codeformer_weight, facedetection):
        result = reactor.restore_face(self, image, model, visibility, codeformer_weight, facedetection)
        return (result,)
```