# Documentation
- Class name: SeargeControlnetAdapterV2
- Category: UI_PROMPTING
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node facilitates adaptation of control network mechanisms to enhance image processing tasks. It dynamically selects and applies various edge detection and image enhancement algorithms based on input parameters, aiming to improve visual output according to specific requirements.

# Input types
## Required
- controlnet_mode
    - Determine the type of control network to use, which significantly affects the processing method and final image quality.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- controlnet_preprocessor
    - Enable or disable preprocessing of control network images to optimize subsequent image processing steps.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- strength
    - Adjust the intensity of the control network's influence on the image, directly affecting the final visual result.
    - Comfy dtype: FLOAT
    - Python dtype: float
- low_threshold
    - Set the lower bound of edge detection sensitivity, influencing the granularity of detected edges in the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- high_threshold
    - Define the upper bound of edge detection sensitivity, affecting the prominence of edges in the final image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - Specify the starting percentage of the image processing range, determining the initial segment of the image that is affected.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - Indicate the ending percentage of the image processing range, establishing the final segment of the image that is affected.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_augmentation
    - Control the level of noise enhancement applied to the image, which can increase the robustness of the control network.
    - Comfy dtype: FLOAT
    - Python dtype: float
- revision_enhancer
    - Activate or deactivate the revision enhancer, which refines the control network's output to improve accuracy.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- source_image
    - Provide the base image for control network processing, serving as the fundamental input for all subsequent image operations.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- data
    - Supply additional data stream information for the control network's more complex processing.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: List[Dict[str, Any]]

# Output types
- data
    - Include updated data stream information after control network processing, which can be further utilized downstream.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]
- preview
    - Display a visual preview of the processed image, demonstrating the effect of control network adjustments.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
