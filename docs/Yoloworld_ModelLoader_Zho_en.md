# Documentation
- Class name: Yoloworld_ModelLoader_Zho
- Category: 🔎YOLOWORLD_ESAM
- Output node: False
- Repo Ref: https://github.com/ZHO-ZHO-ZHO/ComfyUI-YoloWorld-EfficientSAM.git

The Yoloworld_ModelLoader_Zho class is designed to facilitate loading and initializing YOLO (You Only Look Once) object detection models for specific applications. It encapsulates the complexity of model loading, allowing users to easily integrate YOLO models into their projects without needing to delve into the intricate details of model configuration.

# Input types
## Required
- yolo_world_model
    - The `yolo_world_model` parameter is essential for specifying the YOLO model variant to load. It determines the specific configuration and pre-trained weights the node will use, which directly impacts the model's performance and accuracy in object detection tasks.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- yolo_world_model
    - The output `yolo_world_model` represents the loaded YOLO model, ready for use in object detection tasks. It is the final product of the node's functionality, providing a structured interface for interacting with the model to perform inference on new data.
    - Comfy dtype: YOLOWORLDMODEL
    - Python dtype: YOLOWorld

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ZHO-ZHO-ZHO/ComfyUI-YoloWorld-EfficientSAM)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
