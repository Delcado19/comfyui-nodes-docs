# Documentation
- Class name: IPAdapterInsightFaceLoader
- Category: ipadapter/loaders
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The IPAdapterInsightFaceLoader node is designed to facilitate loading and preparing InsightFace models for facial analysis tasks. It encapsulates the complexity of initializing the model using the specified execution provider, abstracting away the underlying technical details. This node ensures the InsightFace model is ready for advanced operations such as facial detection and recognition.

# Input types
## Required
- provider
    - The 'provider' parameter specifies the execution provider for the InsightFace model. This is critical for determining how the model is executed, which can significantly impact performance and compatibility with different hardware setups.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- model
    - The 'model' output represents the loaded and prepared InsightFace model, ready for use in facial analysis operations. It is the end product of the node's functionality, providing users with a high-level interface to interact with the model.
    - Comfy dtype: FaceAnalysis
    - Python dtype: insightface.app.FaceAnalysis

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
