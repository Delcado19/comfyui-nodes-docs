# Documentation
- Class name: LoadFaceModel
- Category: 🌌 ReActor
- Output node: False
- Repo Ref: https://github.com/Gourieff/comfyui-reactor-node.git

This node facilitates loading and preparing the face recognition model, which is crucial for subsequent face processing tasks. It encapsulates the complexity of model retrieval and ensures the appropriate model is used based on input specifications, thereby enhancing system flexibility and adaptability.

# Input types
## Required
- face_model
    - The 'face_model' parameter is critical because it determines which face recognition model the node will load. It affects the entire processing flow by determining the specific features and algorithms that will be applied in subsequent operations.
    - Comfy dtype: COMBO[get_model_names(get_facemodels())]
    - Python dtype: Union[str, None]

# Output types
- FACE_MODEL
    - The output represents the loaded face recognition model, which is a key component for further face analysis and processing tasks. It encapsulates the features learned by the model, ready to be applied in downstream operations.
    - Comfy dtype: Face
    - Python dtype: insightface.app.common.Face

# Usage tips
- Infra type: CPU

# Source code
```
class LoadFaceModel:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'face_model': (get_model_names(get_facemodels),)}}
    RETURN_TYPES = ('FACE_MODEL',)
    FUNCTION = 'load_model'
    CATEGORY = '🌌 ReActor'

    def load_model(self, face_model):
        self.face_model = face_model
        self.face_models_path = FACE_MODELS_PATH
        if self.face_model != 'none':
            face_model_path = os.path.join(self.face_models_path, self.face_model)
            out = load_face_model(face_model_path)
        else:
            out = None
        return (out,)
```