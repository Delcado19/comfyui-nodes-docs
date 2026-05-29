# Documentation
- Class name: WAS_Image_Morph_GIF_Writer
- Category: WAS Suite/Animation/Writer
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Morph_GIF_Writer node creates an animated GIF from a series of images or frames. It manages transitions between frames, controls delays, and sets GIF looping behavior. This node is ideal for generating seamless, efficient animations for visual effects, presentations, or web content.

# Input types
## Required
- image
- Input images or image series used to create GIF animation frames. This parameter is essential because it directly affects the visual content of the generated animation.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor] 或 torch.Tensor
## Optional
- transition_frames
- Number of transition frames generated between each pair of images. This parameter controls the speed of each frame transition, affecting animation smoothness.
    - Comfy dtype: INT
    - Python dtype: int
- image_delay_ms
- Delay time before each frame transition starts, in milliseconds. This parameter controls animation timing and can be adjusted to create the desired effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- duration_ms
- Total duration of the GIF animation, in milliseconds. This parameter sets the overall length from start to finish.
    - Comfy dtype: FLOAT
    - Python dtype: float
- loops
- Number of GIF loops. A value of 0 means the GIF loops indefinitely.
    - Comfy dtype: INT
    - Python dtype: int
- max_size
- Maximum size of the output GIF, in pixels. This parameter scales the animation to fit specific display requirements or constraints.
    - Comfy dtype: INT
    - Python dtype: int
- output_path
- Path to save the output GIF file. This parameter determines where the final animation is stored in the file system.
    - Comfy dtype: STRING
    - Python dtype: str
- filename
- Name of the output GIF file. This parameter lets users specify the desired name for the animation file.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image_pass
- Processed images or image series used to create the GIF. This output reflects the visual content after the node processes it.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor] 或 torch.Tensor
- filepath_text
- Full file path of the created GIF animation. This output is useful for referencing or further processing the animation file.
    - Comfy dtype: TEXT_TYPE
    - Python dtype: str
- filename_text
- Name of the created GIF file. This output provides the specific name given to the animation file.
    - Comfy dtype: TEXT_TYPE
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
