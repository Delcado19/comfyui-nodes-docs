# Documentation
- Class name: CR_LoadGIFAsList
- Category: Comfyroll/List/IO
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_LoadGIFAsList is a node for loading and processing GIF files, capable of extracting individual frames and their corresponding masks. It processes a series of GIF files by specifying a starting frame and a maximum number of frames. In the Comfyroll Studio environment, this node is essential for preparing GIF data for further manipulation and analysis.

# Input types
## Required
- input_folder
    - The input_folder parameter specifies the directory containing the GIF files to load. It is critical for the node to locate and access the correct GIF files for processing.
    - Comfy dtype: STRING
    - Python dtype: str
- gif_filename
    - The gif_filename parameter defines the name of the GIF file to load. It plays a key role in identifying a specific GIF file among many options.
    - Comfy dtype: STRING
    - Python dtype: str
- start_frame
    - The start_frame parameter indicates the frame number from which the node should begin loading GIF frames. It is significant in controlling the starting point of the frame extraction process.
    - Comfy dtype: INT
    - Python dtype: int
- max_frames
    - The max_frames parameter sets the maximum number of frames to extract from the GIF. It is important for limiting the scope of frame extraction and managing resource usage.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- input_path
    - The optional input_path parameter allows specifying a custom path for the GIF file, overriding the default directory structure. It provides flexibility in file location for specific use cases.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The IMAGE output contains the frames loaded from the GIF file for further processing or visualization in Comfyroll Studio workflows.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- MASK
    - The MASK output provides masks corresponding to each frame, usable for segmentation or other image processing tasks requiring transparency information.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]
- show_help
    - The show_help output provides a link to documentation for further assistance and guidance when using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
