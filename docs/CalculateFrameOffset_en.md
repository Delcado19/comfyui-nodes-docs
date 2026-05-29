# Documentation
- Class name: CalculateFrameOffset
- Category: FizzNodes 📅🅕🅝/HelperNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

CalculateFrameOffset node aims to calculate and assign frame numbers in a sequence based on the current frame, maximum frame count, and number of latent inputs. It plays a crucial role in managing the order of operations related to frames.

# Input types
## Required
- current_frame
    - current_frame parameter specifies the current position in the frame sequence. This is crucial for determining the starting point of frame number allocation.
    - Comfy dtype: INT
    - Python dtype: int
- max_frames
    - max_frames parameter sets the upper bound of frame numbers. This is crucial for ensuring frame numbers remain within a valid range.
    - Comfy dtype: INT
    - Python dtype: int
- num_latent_inputs
    - num_latent_inputs parameter indicates the number of latent inputs used for frame calculation. It significantly influences how frame numbers are allocated within the sequence.
    - Comfy dtype: INT
    - Python dtype: int
- index
    - index parameter represents a specific index in the latent inputs. It is used to compute the offset for assigning frame numbers.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- frame_offset
    - frame_offset output represents the frame number calculated for a given input. It is of great importance for subsequent processing of frames in the sequence.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/FizzleDorf/ComfyUI_FizzNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
