# Documentation
- Class name: FL_WanVideoContinue
- Category: 🏵️Fill Nodes/WIP
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Creates a continuation video with symmetrical overlap - uses last N frames from input video at start and first N frames from end video at end.

# Input types
## Required
- input_video_frames
    - Input video frames to create continuation from.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- total_output_frames
    - Total number of frames for the output continuation video. Must satisfy: (frames - 1) divisible by 4.
    - Comfy dtype: INT
    - Python dtype: int
- overlap_frames
    - Number of frames to use for overlap at both start (from end of input video) and end (from start of end video frames).
    - Comfy dtype: INT
    - Python dtype: int
- empty_frame_fill_level
    - Grayscale level (0.0 black, 1.0 white) for empty continuation frames.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- end_video_frames
    - Optional video frames - first X frames (where X=overlap_frames) will be placed at the end of the continuation video.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- control_images
    - Optional control images to fill the empty frames.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- inpaint_mask
    - Optional inpaint mask to use for the empty frames, overriding the default mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- how_to_use_control_images
    - If start_sequence_at_beginning_and_prioritise_input_frames is selected, control images align with frame 0 but input overlap frames take priority, so control images become visible after the overlap period. If start_sequence_after_overlap_frames_and_prioritise_input_frames is selected, control images start being placed after the overlap frames from the input video.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- how_to_use_inpaint_masks
    - If start_sequence_at_beginning_and_prioritise_input_frames is selected, inpaint masks align with frame 0 but preserve input overlap frames as known. If start_sequence_after_overlap_frames_and_prioritise_input_frames is selected, inpaint masks only affect frames after the overlap period.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- continuation_video_frames
    - The continuation_video_frames output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- continuation_frame_masks
    - The continuation_frame_masks output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
