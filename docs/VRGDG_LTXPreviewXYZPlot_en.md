# Documentation
- Class name: VRGDG_LTXPreviewXYZPlot
- Category: VRGDG/Training
- Output node: False
- Repo Ref: https://github.com/vrgamegirl19/comfyui-vrgamedevgirl

Creates a final checkpoint comparison video from saved preview videos once training reaches the target step.

# Input types
## Required
- vhs_filenames
    - Trigger input from VideoHelperSuite Combine Video so this node runs after preview videos are written.
    - Comfy dtype: *
    - Python dtype: object
- preview_folder
    - Folder containing the saved preview videos, or the VHS filename_prefix from the trainer node. If a filename_prefix is provided, this node automatically uses its parent output folder.
    - Comfy dtype: STRING
    - Python dtype: str
- output_name
    - LoRA/output name used to filter matching preview videos and to name the final XYZ video.
    - Comfy dtype: STRING
    - Python dtype: str
- completed_steps
    - Current completed training step from the trainer node.
    - Comfy dtype: INT
    - Python dtype: int
- total_target_steps
    - Final training target step. The XYZ compare video is only created when completed_steps reaches this value.
    - Comfy dtype: INT
    - Python dtype: int
- cell_width
    - Width of each tile in the final comparison grid. Use 0 to auto-detect from the first preview video. Examples: 320 for many checkpoints, 512 for a balanced layout, 768 for larger tiles.
    - Comfy dtype: INT
    - Python dtype: int
- cell_height
    - Height of each tile in the final comparison grid. Use 0 to auto-detect from the first preview video. If labels are enabled, the label band is added automatically.
    - Comfy dtype: INT
    - Python dtype: int
- label_tiles
    - Adds a label band above each tile using the preview filename, which should include the LoRA name and step.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- output_fps
    - FPS for the final comparison video. Example: 24 for standard preview playback.
    - Comfy dtype: INT
    - Python dtype: int
- render_backend
    - Final XYZ export backend. CPU uses libx264. NVIDIA GPU uses NVENC for faster encoding when ffmpeg has NVENC support. Note: the grid compose filters still run in ffmpeg, so GPU mode mainly speeds up the encode stage.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- xyz_video_path
    - The xyz_video_path output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- created
    - The created output is produced by this node.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- status
    - The status output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/vrgamegirl19/comfyui-vrgamedevgirl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
