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
```
class SeargeImageSaving:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'save_parameters_file': ('BOOLEAN', {'default': True}), 'save_folder': (UI.SAVE_FOLDERS, {'default': UI.SAVE_TO_OUTPUT_DATE}), 'save_generated_image': ('BOOLEAN', {'default': True}), 'embed_workflow_in_generated': ('BOOLEAN', {'default': True}), 'generated_image_name': ('STRING', {'multiline': False, 'default': 'generated'}), 'save_high_res_image': ('BOOLEAN', {'default': True}), 'embed_workflow_in_high_res': ('BOOLEAN', {'default': True}), 'high_res_image_name': ('STRING', {'multiline': False, 'default': 'high-res'}), 'save_upscaled_image': ('BOOLEAN', {'default': True}), 'embed_workflow_in_upscaled': ('BOOLEAN', {'default': True}), 'upscaled_image_name': ('STRING', {'multiline': False, 'default': 'upscaled'})}, 'optional': {'data': ('SRG_DATA_STREAM',)}}
    RETURN_TYPES = ('SRG_DATA_STREAM',)
    RETURN_NAMES = ('data',)
    FUNCTION = 'get'
    CATEGORY = UI.CATEGORY_UI_INPUTS

    @staticmethod
    def create_dict(save_parameters_file, save_folder, save_generated_image, embed_workflow_in_generated, generated_image_name, save_high_res_image, embed_workflow_in_high_res, high_res_image_name, save_upscaled_image, embed_workflow_in_upscaled, upscaled_image_name):
        return {UI.F_SAVE_PARAMETERS_FILE: save_parameters_file is not None and save_parameters_file, UI.F_SAVE_FOLDER: save_folder, UI.F_SAVE_GENERATED_IMAGE: save_generated_image is not None and save_generated_image, UI.F_EMBED_WORKFLOW_IN_GENERATED: embed_workflow_in_generated is not None and embed_workflow_in_generated, UI.F_GENERATED_IMAGE_NAME: generated_image_name, UI.F_SAVE_HIGH_RES_IMAGE: save_high_res_image is not None and save_high_res_image, UI.F_EMBED_WORKFLOW_IN_HIGH_RES: embed_workflow_in_high_res is not None and embed_workflow_in_high_res, UI.F_HIGH_RES_IMAGE_NAME: high_res_image_name, UI.F_SAVE_UPSCALED_IMAGE: save_upscaled_image is not None and save_upscaled_image, UI.F_EMBED_WORKFLOW_IN_UPSCALED: embed_workflow_in_upscaled is not None and embed_workflow_in_upscaled, UI.F_UPSCALED_IMAGE_NAME: upscaled_image_name}

    def get(self, save_parameters_file, save_folder, save_generated_image, embed_workflow_in_generated, generated_image_name, save_high_res_image, embed_workflow_in_high_res, high_res_image_name, save_upscaled_image, embed_workflow_in_upscaled, upscaled_image_name, data=None):
        if data is None:
            data = {}
        data[UI.S_IMAGE_SAVING] = self.create_dict(save_parameters_file, save_folder, save_generated_image, embed_workflow_in_generated, generated_image_name, save_high_res_image, embed_workflow_in_high_res, high_res_image_name, save_upscaled_image, embed_workflow_in_upscaled, upscaled_image_name)
        return (data,)
```