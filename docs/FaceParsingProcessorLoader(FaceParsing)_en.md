# Documentation
- Class name: FaceParsingProcessorLoader
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

FaceParsingProcessorLoader is a node for loading and initializing a face parsing processor. It abstracts the complexity of setting up a face parsing model, allowing users to seamlessly integrate face parsing capabilities into their applications without needing in-depth knowledge of the underlying model architecture or preprocessing steps.

# Input types
## Required
- face_parsing_path
    - The face_parsing_path parameter is crucial for the FaceParsingProcessorLoader node as it specifies the location to load the face parsing processor. This path is essential for the node to access the model files and configurations required for face parsing operations.
    - Comfy dtype: "str"
    - Python dtype: str

# Output types
- processor
    - The output of the FaceParsingProcessorLoader node is a processor object that is initialized and ready for face parsing tasks. This processor encapsulates the functionality to preprocess images required by face parsing models, making it easier for developers to use these models.
    - Comfy dtype: SegformerImageProcessor
    - Python dtype: transformers.SegformerImageProcessor

# Usage tips
- Infra type: CPU

# Source code
```
class FaceParsingProcessorLoader:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {}}
    RETURN_TYPES = ('FACE_PARSING_PROCESSOR',)
    FUNCTION = 'main'
    CATEGORY = 'face_parsing'

    def main(self):
        from transformers import SegformerImageProcessor
        processor = SegformerImageProcessor.from_pretrained(face_parsing_path)
        return (processor,)
```