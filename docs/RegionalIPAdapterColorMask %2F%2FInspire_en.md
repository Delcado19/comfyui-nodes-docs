# Documentation
- Class name: RegionalIPAdapterColorMask
- Category: InspirePack/Regional
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

RegionalIPAdapterColorMask node aims to apply a color mask to an image, which can be used to focus the generation process on specific areas of interest. This node leverages the power of the IPAdapter model to condition the generation based on the provided mask, enhancing control over the visual output and ensuring closer adherence to the specified color region.

# Input types
## Required
- color_mask
    - The color_mask parameter is crucial; it defines the image that will be used to generate the mask. This image is processed to create a binary mask, which will be applied to the generation, ensuring that the specified color regions are emphasized in the output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_color
    - The mask_color parameter is essential for determining the specific color used to create the mask. It is a string representing an RGB color value, used to identify and isolate the target color regions within the image.
    - Comfy dtype: STRING
    - Python dtype: str
- image
    - The image parameter is the input image processed by the node. It is the canvas on which the color mask is applied, and its content will be influenced by the mask to achieve the desired visual effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- weight
    - The weight parameter adjusts the influence of the mask on the generation. A higher weight means the mask's influence is more significant, while a lower weight reduces its effect, allowing for a more subtle integration of the mask's color regions into the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise
    - The noise parameter introduces a degree of randomness to the generation process. By adjusting this parameter, users can control the level of variation and unpredictability in the resulting image, adding creativity and diversity to the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_type
    - The weight_type parameter allows users to choose the method of applying the weight to the mask. Different weight types can alter the way the mask influences the generation, providing a range of creative control options to achieve the desired aesthetic.
    - Comfy dtype: COMBO
    - Python dtype: str
- start_at
    - The start_at parameter defines the starting point of the mask's influence on the generation. It helps control the gradual introduction of the mask effect, allowing a more nuanced and controlled application of the color mask in the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - The end_at parameter sets the point where the mask's influence on the generation reaches its peak. It works together with the start_at parameter to create a smooth transition of the mask effect throughout the generation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- unfold_batch
    - The unfold_batch parameter determines whether the batch dimension should be unfolded during the mask application process. This is useful for certain types of generation where individual elements within a batch require unique mask application.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- faceid_v2
    - The faceid_v2 parameter enables an advanced facial detection and recognition system, which can refine the mask application to more accurately focus on facial features in the image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- weight_v2
    - The weight_v2 parameter is an additional weight control for the faceid_v2 feature, allowing fine-tuning of the facial mask application for more precise and detailed facial feature representation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- REGIONAL_IPADAPTER
    - The regional_ipadapter output is a conditioned model that has been adjusted based on your input mask and color. It is ready for use in subsequent generation processes, with the mask's influence integrated to guide the creation of desired visual elements.
    - Comfy dtype: REGIONAL_IPADAPTER
    - Python dtype: object
- MASK
    - The MASK output is a binary mask created from the input color_mask and mask_color. This mask can be used for further processing or as a reference for the image region targeted by the color mask.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
