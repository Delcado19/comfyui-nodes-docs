# Documentation
- Class name: SeargeImageSaving
- Category: UI_INPUTS
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node coordinates the saving of procedurally generated images, allowing customization of parameters related to saving images at different resolutions, and optionally embedding the workflow.

# Input types
## Required
- save_parameters_file
    - This parameter determines whether image saving parameters should be saved, which is critical for preserving the settings used for image generation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- save_folder
    - The destination folder for saving generated images, essential for organizing and accessing the output of the image generation process.
    - Comfy dtype: COMBO
    - Python dtype: str
- save_generated_image
    - Determines whether the initially generated image should be saved, affecting the preservation and availability of the primary output of the image generation process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- embed_workflow_in_generated
    - This controls whether workflow information is included in the generated image, enhancing the context and traceability of the image creation process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- generated_image_name
    - Specifies the filename of the generated image, which is important for identifying and referencing the output in the system.
    - Comfy dtype: STRING
    - Python dtype: str
- save_high_res_image
    - Indicates whether a high-resolution version of the image should be saved, affecting the quality of the saved image and its utility for further use.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- embed_workflow_in_high_res
    - Determines whether the high-resolution image should include embedded workflow information, which is important for maintaining the integrity and context of the image creation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- high_res_image_name
    - Defines the filename for the high-resolution image, ensuring the output is easily distinguishable and accessible in the system.
    - Comfy dtype: STRING
    - Python dtype: str
- save_upscaled_image
    - Controls whether an upscaled version of the image should be saved, which is important for applications requiring larger dimensions without loss of detail.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- embed_workflow_in_upscaled
    - This specifies whether the upscaled image should include workflow information, ensuring the upscaling process is documented and traceable.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- upscaled_image_name
    - Sets the filename for the upscaled image, which is essential for managing and referencing the enhanced-resolution output in the system.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- data
    - This parameter serves as a container for additional data that may be needed during the image saving process, ensuring flexibility and adaptability across various scenarios.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Any

# Output types
- data
    - The output contains the configured image saving parameters, providing a structured format that is critical for downstream processes to perform image saving as intended.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
