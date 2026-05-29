
# Documentation
- Class name: JWLoadImageSequenceWithStopIndex
- Category: jamesWalker55
- Output node: False
- Repo Ref: https://github.com/jamesWalker55/comfyui-various-scripts

The JWLoadImageSequenceWithStopIndex node is designed to batch-load image sequences with specified start and stop indices, with options to include or exclude the stop index and ignore missing images. It supports dynamic loading of image sequences from the file system, providing flexible data processing for image processing workflows.

# Input types
## Required
- path_pattern
    - Specify the pattern or path used to locate images to load, using placeholders for indices.
    - Comfy dtype: STRING
    - Python dtype: str
- start_index
    - Define the starting index of the image sequence to load.
    - Comfy dtype: INT
    - Python dtype: int
- stop_index
    - Set the stop index for the image sequence, determining the range of images to include.
    - Comfy dtype: INT
    - Python dtype: int
- inclusive
    - Decide whether to include the stop index in the loaded sequence, allowing inclusive or exclusive range selection.
    - Comfy dtype: ['false', 'true']
    - Python dtype: str
- ignore_missing_images
    - Control whether to ignore missing images within the specified range, enabling robust handling of incomplete sequences.
    - Comfy dtype: ['false', 'true']
    - Python dtype: str

# Output types
- image
    - Return the loaded image sequence as a tensor for further processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/jamesWalker55/comfyui-various-scripts)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
