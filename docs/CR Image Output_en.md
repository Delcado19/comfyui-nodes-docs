# Documentation
- Class name: CR_ImageOutput
- Category: Comfyroll/Essential/Core
- Output node: True
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_ImageOutput is a node for managing image data output, providing functionality to save or preview images, and allowing custom file naming and format. It plays a critical role in the final stage of image processing workflows, ensuring results are easily accessible and well-organized.

# Input types
## Required
- images
    - The 'image' parameter is crucial as it defines the input image data the node will process. It influences the node's execution by deciding what will be saved or previewed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- output_type
    - The 'output_type' parameter determines whether the node saves images to disk or previews them. It is important as it directs the node's primary functionality toward either output method.
    - Comfy dtype: COMBO['Preview', 'Save', 'UI (no batch)']
    - Python dtype: str
- file_format
    - The 'file_format' parameter specifies the format in which images will be saved, affecting the quality and compatibility of output files.
    - Comfy dtype: COMBO['png', 'jpg', 'webp', 'tif']
    - Python dtype: str
## Optional
- filename_prefix
    - The 'filename_prefix' parameter sets the base name for output files, which is important for organizing and identifying saved images.
    - Comfy dtype: STRING
    - Python dtype: str
- prefix_presets
    - The 'prefix_presets' allows adding date-based prefixes to filenames, useful for chronological sorting and archiving.
    - Comfy dtype: COMBO[None, 'yyyyMMdd']
    - Python dtype: str
- trigger
    - When set to True, the 'trigger' parameter initiates an action or signal in the workflow, potentially triggering subsequent processes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- prompt
    - The 'prompt' parameter is used to store descriptions or annotations related to images, helpful for metadata purposes.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The 'extra_pnginfo' parameter allows embedding additional metadata within PNG files, enhancing information associated with images.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]

# Output types
- ui
    - The 'ui' output contains a list of image objects with metadata, important for providing necessary visual and contextual information of processed images for user interfaces.
    - Comfy dtype: COMBO[{'images': List[Dict[str, Any]]}]
    - Python dtype: Dict[str, Any]
- result
    - The 'result' output represents the completion status of the node's operation and provides a URL for further assistance if needed.
    - Comfy dtype: COMBO[Tuple[BOOLEAN, str]]
    - Python dtype: Tuple[bool, str]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
