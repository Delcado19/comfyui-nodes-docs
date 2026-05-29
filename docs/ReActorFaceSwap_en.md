# Documentation
- Class name: reactor
- Category: 🌌 ReActor
- Output node: False
- Repo Ref: https://github.com/Gourieff/comfyui-reactor-node.git

The reactor class is a comprehensive face manipulation toolkit designed to perform advanced face swapping and restoration operations. It leverages the power of deep learning models to analyze, restore, and swap faces in images, while providing options for gender detection and face visibility adjustment.

# Input types
## Required
- enabled
    - Enable or disable the execution of the face processing pipeline. When set to false, the input image and face model are returned without modification.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- input_image
    - Contains the source image with faces to be processed by the reactor node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- swap_model
    - Specifies the face detection model used during face swapping.
    - Comfy dtype: COMBO[retinaface_resnet50, retinaface_mobile0.25, YOLOv5l, YOLOv5n]
    - Python dtype: str
- face_restore_model
    - Indicates the face restoration model used to improve the quality of detected faces.
    - Comfy dtype: COMBO[none, CodeFormer, other models...]
    - Python dtype: str
- face_restore_visibility
    - A floating point value that controls the visibility of the restored face, with 1 meaning fully visible and 0.1 meaning almost invisible.
    - Comfy dtype: FLOAT
    - Python dtype: float
- codeformer_weight
    - Applies a weight factor to the output of the codeformer model when restoring faces, affecting the balance between original face features and restored face features.
    - Comfy dtype: FLOAT
    - Python dtype: float
- detect_gender_input
    - Selects the gender to detect in the input faces, which can affect the selection and processing of faces during face swapping operations.
    - Comfy dtype: COMBO[no, female, male]
    - Python dtype: str
- input_faces_index
    - A string representing the index or indices of input faces to consider for processing, with indices separated by commas.
    - Comfy dtype: STRING
    - Python dtype: str
- console_log_level
    - Sets the verbosity level of console logs generated during node execution, with 0 for warnings, 1 for status messages, and 2 for detailed information.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result_image
    - The output image after processing by face swapping and restoration operations.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- face_model
    - The face model used during execution, which can be the default model or a user-specified model.
    - Comfy dtype: FACE_MODEL
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/Gourieff/comfyui-reactor-node)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
