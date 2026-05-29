# Documentation
- Class name: SeargeImageAdapterV2
- Category: UI_PROMPTING
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

The SeargeImageAdapterV2 class is designed to facilitate the conversion and adaptation of image data for user interface prompt purposes. It plays a critical role in integrating source images, image masks, and uploaded masks into a structured data flow that UI components can effectively utilize.

# Input types
## Required
- source_image
    - The source_image parameter is essential to the node's operation, as it represents the raw image data to be processed. It significantly influences how the node transforms and constructs data for downstream tasks.
    - Comfy dtype: IMAGE
    - Python dtype: Union[str, bytes, io.BufferedReader]
- image_mask
    - The image_mask parameter is an optional input that defines the mask to be applied to the source image. It is important to the node because it determines which regions of the image will be processed or highlighted.
    - Comfy dtype: MASK
    - Python dtype: Union[str, bytes, io.BufferedReader]
- uploaded_mask
    - The uploaded_mask parameter allows user-uploaded masks to be included in the image processing pipeline. Its presence can alter the node's behavior by providing additional context for image operations.
    - Comfy dtype: MASK
    - Python dtype: Union[str, bytes, io.BufferedReader]
- data
    - The data parameter serves as a container for additional data that may be needed for the node's operation. It is optional and can be used to pass supplementary information to the node.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Output types
- data
    - The data output is a structured data flow that encapsulates the processed image and mask information. It is important because it provides the necessary input for subsequent UI components or downstream processing stages.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]
- S_IMAGE_INPUTS
    - The S_IMAGE_INPUTS output contains image inputs adapted for UI prompts. It is critical for proper display and interaction within the user interface.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
