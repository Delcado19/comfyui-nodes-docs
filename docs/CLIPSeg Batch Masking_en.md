# Documentation
- Class name: WAS_CLIPSeg_Batch
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The CLIPSeg_images method of the WAS_CLIPSeg_Batch node performs image segmentation based on text prompts. It uses the CLIPSeg model to generate masks corresponding to entities described in the image. The node can handle multiple images and texts, providing a powerful solution for complex segmentation tasks that require understanding of visual and textual inputs.

# Input types
## Required
- image_a
- The image_a parameter is the primary image input required for the segmentation process. It is crucial because it directly affects the model's ability to understand and segment the desired elements in the image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- text_a
- The text_a parameter provides a textual prompt that guides the segmentation model to identify and segment specific parts of the image. Its importance lies in refining the segmentation process by focusing on the provided textual description.
    - Comfy dtype: STRING
    - Python dtype: str
- image_b
- The image_b parameter is a secondary image input used together with image_a, applicable to more complex segmentation scenarios. It allows additional visual context to be considered, enhancing segmentation results.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- text_b
- The text_b parameter is another textual prompt that complements text_a, offering alternative or additional guidance to the segmentation model. It increases the node's flexibility in handling diverse segmentation tasks.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- image_c
- The optional image_c parameter allows inclusion of another image in the segmentation process. To be processed correctly, its dimensions should match those of image_a.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- text_c
- The optional text_c parameter extends the textual guidance for the segmentation model, providing further description that can aid in more complex segmentation tasks.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGES_BATCH
- The IMAGES_BATCH output contains the batch of input images processed by the node. It is important because it enables review and further analysis of the original images after segmentation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASKS_BATCH
- The MASKS_BATCH output provides the generated masks corresponding to regions of interest in the input images. These masks are essential for isolating and further processing the specific parts described by the text prompts.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- MASK_IMAGES_BATCH
- The MASK_IMAGES_BATCH output includes images that have been masked, highlighting the segmented regions according to the text prompts. It is a key output for visualizing the results of the segmentation process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
