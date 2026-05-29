# Documentation
- Class name: WAS_CLIPSeg_Model_Loader
- Category: WAS Suite/Loaders
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_CLIPSeg_Model_Loader node is a critical component in the workflow, designed to efficiently load and integrate the CLIPSeg model into the system. It simplifies the model initialization process, ensuring the model is properly set up for subsequent tasks such as image segmentation. By abstracting the complexity of loading and caching models, this node streamlines overall operations and enhances user experience.

# Input types
## Required
- model
    - The 'model' parameter is essential for specifying which CLIPSeg model to load. It directs the node to the correct pre-trained model, which is critical for the node's execution and the quality of segmentation results. This parameter ensures appropriate resource allocation and that the model operates as expected within the system.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- clipseg_model
    - The 'clipseg_model' output provides the loaded CLIPSeg model, ready for image segmentation tasks. It represents the outcome of the node's operation, encapsulating the model's downstream application capabilities. This output is significant as it enables further processing and analysis, serving as a bridge between model loading and actual usage.
    - Comfy dtype: CLIPSEG_MODEL
    - Python dtype: Tuple[CLIPSegProcessor, CLIPSegForImageSegmentation]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
