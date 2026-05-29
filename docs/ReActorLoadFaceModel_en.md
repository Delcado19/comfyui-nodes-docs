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
[View source repository on GitHub](https://github.com/Gourieff/comfyui-reactor-node)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
