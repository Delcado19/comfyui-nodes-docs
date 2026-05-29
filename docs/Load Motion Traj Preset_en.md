# Documentation
- Class name: LoadMotionTrajPreset
- Category: motionctrl
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-MotionCtrl.git

The LoadMotionTrajPreset node is designed to load and process predefined motion trajectories for motion control applications. It accepts a specific motion trajectory preset and frame length, then reads and scales points from a text file to match the desired frame length, ensuring seamless integration with the motion control system.

# Input types
## Required
- motion_traj
    - The motion_traj parameter specifies the name of the motion trajectory preset to load. It is crucial for determining the specific motion pattern the node will process.
    - Comfy dtype: STRING
    - Python dtype: str
- frame_length
    - The frame_length parameter allows users to define the number of frames for the motion trajectory. This is important for adjusting the motion to fit the required duration for animation or simulation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- POINTS
    - The POINTS output contains the processed list of points representing the motion trajectory, ready for downstream motion control processes.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-MotionCtrl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
