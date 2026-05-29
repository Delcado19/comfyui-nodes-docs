# Documentation
- Class name: WAS_CLIPSeg
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The CLIPSeg_image method aims to perform image segmentation using text prompts. It leverages the CLIPSeg model to generate a mask that isolates the subject in the image described by the text. This method is particularly useful for applications requiring precise object segmentation based on textual descriptions.

# Input types
## Required
- image
    - The image parameter is crucial for the segmentation process as it is the input the model will analyze to identify and isolate the desired subject. The quality and resolution of the image can significantly affect the accuracy of the generated mask.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- text
    - The text parameter provides a description that guides the segmentation process. It is optional but can improve the precision of the segmentation by specifying what the model should focus on in the image.
    - Comfy dtype: STRING
    - Python dtype: str
- clipseg_model
    - The clipseg_model parameter allows users to provide a pre-trained CLIPSeg model for segmentation. This can be beneficial for using a custom model that has been fine-tuned for specific tasks or datasets.
    - Comfy dtype: CLIPSEG_MODEL
    - Python dtype: Tuple[str, transformers.CLIPSegForImageSegmentation]

# Output types
- MASK
    - The MASK output is a binary mask that separates the segmented subject from the rest of the image based on the provided text description. It is essential for applications requiring object separation or background removal.
    - Comfy dtype: MASK
    - Python dtype: np.ndarray
- MASK_IMAGE
    - The MASK_IMAGE output is an inverted image where the segmented subject is highlighted by the mask. It can be used for visual verification or further processing steps requiring a representation of the segmented image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
