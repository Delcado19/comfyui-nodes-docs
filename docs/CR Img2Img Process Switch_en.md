# Documentation
- Class name: CR_Img2ImgProcessSwitch
- Category: Comfyroll/Utils/Process
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_Img2ImgProcessSwitch node acts as a decision component in the ComfyUI workflow. It is designed to intelligently route the processing of image data based on the input type, whether it is text-to-image conversion or image-to-image conversion. This node is essential for streamlining the image processing pipeline, ensuring that the appropriate processing method is applied to the input data for optimal results.

# Input types
## Required
- Input
    - The ‘Input’ parameter is crucial as it determines the path of image processing in the workflow. It indicates whether the node will perform text-to-image or image-to-image conversion, thereby affecting the entire processing sequence.
    - Comfy dtype: COMBO['txt2img', 'img2img']
    - Python dtype: str
## Optional
- txt2img
    - When the ‘Input’ parameter is set to ‘txt2img’, the ‘txt2img’ parameter is used. It represents the latent representation of the text-to-image process, which is essential for carrying out the conversion.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- img2img
    - When the ‘Input’ parameter is set to ‘img2img’, the ‘img2img’ parameter becomes relevant. It holds the latent data required for the image-to-image conversion process.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Output types
- LATENT
    - The ‘LATENT’ output contains the processed latent data, which is the result of the text-to-image or image-to-image conversion based on the input selection.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- show_help
    - The ‘show_help’ output provides a URL to documentation for further help or guidance on how to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
