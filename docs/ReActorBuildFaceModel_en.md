# Documentation
- Class name: BuildFaceModel
- Category: 🌌 ReActor
- Output node: True
- Repo Ref: https://github.com/Gourieff/comfyui-reactor-node.git

This node aims to synthesize a face model from a set of input images, utilizing advanced computer vision techniques to detect, analyze, and fuse facial features. It aims to create a composite representation of the input faces, which can be used for various applications such as recognition, authentication, or visualization. This node emphasizes the integration of image processing and machine learning techniques to achieve advanced face synthesis.

# Input types
## Required
- images
    - The 'image' parameter is crucial for the face model building process. It serves as the main input, providing the visual data needed for face detection and feature extraction. The quality and quantity of images directly affect the accuracy and detail of the synthesized face model.
    - Comfy dtype: COMBO[string]
    - Python dtype: List[Image.Image]
- face_model_name
    - The 'face_model_name' parameter is essential for identifying and organizing the output face models. It serves as a unique identifier for each model, facilitating subsequent retrieval and management of synthesized face data.
    - Comfy dtype: string
    - Python dtype: str
- compute_method
    - The 'compute_method' parameter determines the technique used to fuse multiple facial features into a single composite model. It affects the final representation of the face model, and different methods may lead to varying levels of detail and accuracy.
    - Comfy dtype: COMBO[string]
    - Python dtype: str
## Optional
- save_mode
    - The 'save_mode' parameter determines whether the synthesized face model is saved to the output directory. It allows users to control the node's output, deciding whether to retain the generated models for future use or simply discard them after processing.
    - Comfy dtype: COMBO[boolean]
    - Python dtype: bool

# Output types
- face_model_name
    - The output 'face_model_name' represents the unique identifier of the synthesized face model. It is key information for users to reference and use the generated model in subsequent processes or applications.
    - Comfy dtype: string
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Gourieff/comfyui-reactor-node)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
