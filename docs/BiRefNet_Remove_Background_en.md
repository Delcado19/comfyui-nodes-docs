# Documentation  
- Class name: BiRefNet_Remove_Background  
- Category: BiRefNet🌟  
- Output node: False 
- Repo Ref: https://github.com/moon7star9/ComfyUI_BiRefNet_Universal

BiRefNet_Remove_Background node is a processing node for image background removal. It receives a loaded BiRefNet model and an input image, uses deep learning to accurately segment foreground and background, and optionally refines the foreground. The node supports multiple background options, including transparent and various solid colors, and offers foreground refinement to improve edge quality.

# Input types  
## Required  
- model  
- The 'model' parameter receives the model instance output from the BiRefNet_Loader node, containing the pretrained model and its configuration.
    - Comfy dtype: BIREFNET_MODEL  
    - Python dtype: dict  
- image  
- The 'image' parameter is the input image to process. The node automatically resizes the image to match the model's optimal working resolution.
    - Comfy dtype: IMAGE  
    - Python dtype: torch.Tensor  
- background_color  
- The 'background_color' parameter lets users choose the output background type: transparent or a specified solid color (white, black, green, blue, red).
    - Comfy dtype: COMBO  
    - Python dtype: str  
- use_refine  
- The 'use_refine' parameter controls whether to use foreground refinement. Enabling this option improves edge quality but may slightly increase processing time.
    - Comfy dtype: BOOLEAN  
    - Python dtype: bool  

# Output types  
- IMAGE  
- The output is the processed image, which may be RGBA (transparent background) or RGB (solid background) depending on the chosen background type.
    - Comfy dtype: IMAGE  
    - Python dtype: torch.Tensor  
- MASK  
- The output segmentation mask is a binary image indicating the foreground area. This mask can be used for further processing by other nodes.
    - Comfy dtype: MASK  
    - Python dtype: torch.Tensor  

# Usage tips  
- Infra type: GPU/CPU  
- Recommended to run on GPU for better performance.
- When using the transparent background option, the output will be in RGBA format.
- Enabling foreground refinement improves edge quality, especially for complex edge details.
- The output mask can be used as a mask input for other image processing nodes.

# Source code
[View source repository on GitHub](https://github.com/moon7star9/ComfyUI_BiRefNet_Universal)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
