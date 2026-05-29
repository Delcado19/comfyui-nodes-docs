
# Documentation
- Class name: ReActorOptions
- Category: 🌌 ReActor
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ReActorOptions node provides a mechanism for configuring various options for face swapping operations within the ReActor framework. It allows customization of face detection, gender detection, and log levels to tailor the face swapping process to specific needs.

# Input types
## Required
- input_faces_order
    - Specifies the processing order of input faces, providing multiple strategies such as left-right order, top-bottom order, or size-based order. This affects the priority of face selection and manipulation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- input_faces_index
    - Determines the face indexes to be processed in the input image, enabling operations targeting specific faces.
    - Comfy dtype: STRING
    - Python dtype: str
- detect_gender_input
    - Enables gender detection for input faces, allowing gender-based processing or filtering.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- source_faces_order
    - Defines the processing order of source faces, similar to input_faces_order, but applied to the source image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- source_faces_index
    - Specifies the face indexes from the source image to use, achieving precise control over source face selection.
    - Comfy dtype: STRING
    - Python dtype: str
- detect_gender_source
    - Activates gender detection for source faces, which can be used to apply gender-based adjustments or selection.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- console_log_level
    - Sets the verbosity level of console logs, allowing users to control the amount of log output generated during operations.
    - Comfy dtype: COMBO[INT]
    - Python dtype: List[int]

# Output types
- options
    - Outputs configuration options for the face swapping operation, including settings such as face and gender detection preferences.
    - Comfy dtype: OPTIONS
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
