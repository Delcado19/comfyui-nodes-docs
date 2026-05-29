# Documentation
- Class name: WAS_BLIP_Analyze_Image
- Category: WAS Suite/Text/AI
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_BLIP_Analyze_Image node is designed to analyze and interpret image content using the BLIP (Bootstrapped Language Image Pretraining) model. It provides capabilities to generate captions and ask natural‑language questions about an image, offering insight into visual and contextual aspects of the input image.

# Input types
## Required
- image
- The image parameter is critical to the node’s operation because it is the input the model analyzes to generate a caption or answer a question. It directly affects output quality and analysis results.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
- mode
- The mode parameter determines the type of analysis the node will perform on the image. It can be "caption" to generate a description, or "interrogate" to answer questions about the image content.
    - Comfy dtype: COMBO['caption', 'interrogate']
    - Python dtype: str
## Optional
- question
- When mode is set to "interrogate," use the question parameter. It specifies the query the model will attempt to answer based on the image content. The wording of the question can affect answer accuracy and relevance.
    - Comfy dtype: STRING
    - Python dtype: str
- blip_model
- The blip_model parameter allows users to provide a pre‑loaded BLIP model to the node instead of downloading a new one. This can improve efficiency and is especially useful when running the node multiple times.
    - Comfy dtype: BLIP_MODEL
    - Python dtype: Tuple[torch.nn.Module, str]

# Output types
- output
- The output parameter represents the result of the node’s analysis, which may be a caption describing the image or an answer to the posed interrogative question. It summarizes the node’s understanding of the image content.
    - Comfy dtype: TEXT
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
