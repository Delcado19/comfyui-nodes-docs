# Documentation
- Class name: FaceParsingModelLoader
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

The FaceParsingModelLoader node is designed to efficiently load and utilize a pre-trained semantic segmentation model specific to facial parsing tasks. It abstracts the complexity of model initialization, allowing users to seamlessly integrate facial parsing functionality into their applications. The node ensures the model is properly instantiated and ready for inference, focusing on facilitating advanced facial feature extraction without delving into the details of the model loading process.

# Input types
## Required
- face_parsing_path
    - The 'face_parsing_path' parameter specifies the file path to the pre-trained facial parsing model. This path is critical as it directs the node to load the correct model, enabling subsequent facial parsing tasks. This parameter ensures the model used is suitable for the intended application, thereby influencing the accuracy and performance of facial parsing operations.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- FACE_PARSING_MODEL
    - The 'FACE_PARSING_MODEL' output provides the loaded pre-trained facial parsing model, ready for semantic segmentation tasks. This output is significant as it represents the primary asset for facial feature extraction, allowing downstream processing and analysis of facial data. The model output ensures users have access to a robust tool for parsing and understanding facial structures in images.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/Ryuukeisyou/comfyui_face_parsing)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
