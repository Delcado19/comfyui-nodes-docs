# Documentation
- Class name: InstantIDFaceAnalysis
- Category: InstantID
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_InstantID.git

InstantIDFaceAnalysis is a node for performing advanced facial analysis, utilizing pre-trained models to identify and analyze facial features and attributes, and is suitable for application scenarios that require precise facial recognition and demographic analysis.

# Input types
## Required
- provider
    - The provider parameter is crucial to the execution environment of the facial analysis node. It determines the compute backend that will be used for facial analysis tasks, impacting the performance and efficiency of the node.
    - Comfy dtype: COMBO['CPU', 'CUDA', 'ROCM']
    - Python dtype: str

# Output types
- FACEANALYSIS
    - The output of the InstantIDFaceAnalysis node is detailed facial analysis results, containing insights derived from the input facial data. This output is very important as it provides a basis for further analysis or decision-making processes.
    - Comfy dtype: Tuple[FaceAnalysis]
    - Python dtype: Tuple[FaceAnalysis]

# Usage tips
- Infra type: CPU

# Source code
```
class InstantIDFaceAnalysis:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'provider': (['CPU', 'CUDA', 'ROCM'],)}}
    RETURN_TYPES = ('FACEANALYSIS',)
    FUNCTION = 'load_insight_face'
    CATEGORY = 'InstantID'

    def load_insight_face(self, provider):
        model = FaceAnalysis(name='antelopev2', root=INSIGHTFACE_DIR, providers=[provider + 'ExecutionProvider'])
        model.prepare(ctx_id=0, det_size=(640, 640))
        return (model,)
```