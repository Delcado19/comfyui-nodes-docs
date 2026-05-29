# Documentation
- Class name: RegionalConditioningColorMask
- Category: InspirePack/Regional
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The RegionalConditioningColorMask node aims to apply a color mask to the text encoding of the CLIP model, enhancing the model's attention to specific regions of the image. It does this by converting the color mask image into a binary mask, which is then used for conditioning text encoding. This allows for more fine-grained control over the image generation process, ensuring that the generated image is closely aligned with the desired subject elements.

# Input types
## Required
- clip
    - Parameter 'clip' is the input text prompt that the CLIP model will encode. It is crucial for defining the semantic content that the model should focus on during image generation. The effectiveness of the node largely depends on the relevance and specificity of the input clip.
    - Comfy dtype: CLIP
    - Python dtype: str
- color_mask
    - Parameter 'color_mask' is an image that defines the region of interest within the image. This image is used to create a mask that will guide the model to focus on the specified area. The quality and accuracy of the color mask directly affect the precision of the region conditioning.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- mask_color
    - Parameter 'mask_color' specifies the color used for masking in the 'color_mask' image. It is important for identifying the target area in the image and should be provided in a valid RGB color format. The choice of mask color affects the node's ability to isolate the desired area.
    - Comfy dtype: STRING
    - Python dtype: str
- strength
    - Parameter 'strength' controls the intensity of the mask's influence on the text encoding. Higher values increase the emphasis on the masked area, potentially leading to more prominent features in the generated image. It is a key factor in fine-tuning the balance between regional focus and overall image coherence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- prompt
    - Parameter 'prompt' is a detailed text description that further refines the image generation process. It provides additional context and guidance to the model, ensuring that the generated image better aligns with the user's creative vision. The content of the prompt has a significant impact on the final output.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- set_cond_area
    - Parameter 'set_cond_area' determines how the mask is applied to the conditioning. It can use default behavior or explicitly set mask boundaries. This choice can affect the node's ability to target specific regions within the image for enhanced region conditioning.
    - Comfy dtype: COMBO['default', 'mask bounds']
    - Python dtype: str

# Output types
- conditioning
    - Output 'conditioning' represents the text encoding that has been modified by the color mask. It is used to guide the image generation process, ensuring that the generated image reflects the subject elements specified in the input prompt.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- mask
    - Output 'mask' is a binary mask derived from the 'color_mask' image. It is used internally by the node to apply region conditioning to the text encoding, allowing for more precise control over the image generation process.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
