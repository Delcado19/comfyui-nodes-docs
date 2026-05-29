# Documentation
- Class name: CR_LoadAnimationFrames
- Category: Comfyroll/Animation/IO
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_LoadAnimationFrames is a node that loads and processes image sequences from a specified directory. It allows manipulation and analysis of frame data within a workflow. It facilitates conversion of image files for further processing, such as animation or video editing tasks.

# Input types
## Required
- image_sequence_folder
- The image_sequence_folder parameter specifies the directory containing the image sequence to load. For the node, locating and accessing the correct image sequence is essential for processing.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- start_index
- The start_index parameter determines the starting point of the image sequence to load. It is important for controlling the first frame of the sequence, allowing selective loading of frames.
    - Comfy dtype: INT
    - Python dtype: int
- max_frames
- The max_frames parameter sets the maximum number of frames to load from the image sequence. It plays a key role in limiting the amount of data processed, which is vital for optimizing resource usage and workflow efficiency.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
- The IMAGE output provides the loaded image sequence as a frame stack, enabling downstream processing and analysis in the workflow.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
- The show_help output provides a link to documentation for further guidance on using the node and understanding its functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
