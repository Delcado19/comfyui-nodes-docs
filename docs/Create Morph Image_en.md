# Documentation
- Class name: WAS_Image_Morph_GIF
- Category: WAS Suite/Animation
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Morph_GIF node is designed to create a morphing animation between two images. It smoothly transitions from one image to another over a specified number of frames, allowing customization of transition properties such as frame delay and loop settings. This node is particularly useful for generating animated sequences like GIFs or APNGs for various multimedia presentations or applications.

# Input types
## Required
- image_a
    - The first image used for the morphing animation. It sets the starting point of the transition and is critical to the appearance of the final output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- image_b
    - The second image that the animation morphs into. This image defines the end state of the transition and contributes to the overall effect of the morph.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
## Optional
- transition_frames
    - The number of frames used for the transition between the two images. A higher count results in a smoother transition but a longer animation duration.
    - Comfy dtype: INT
    - Python dtype: int
- still_image_delay_ms
    - The delay time (in milliseconds) for each static frame before the morphing transition begins.
    - Comfy dtype: FLOAT
    - Python dtype: float
- duration_ms
    - The duration (in milliseconds) of each frame during the morphing transition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- loops
    - The number of times the animation should loop. A value of 0 means the animation will loop infinitely.
    - Comfy dtype: INT
    - Python dtype: int
- max_size
    - The maximum size (in pixels) of the output image. May be resized to fit this limit while maintaining the aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int
- output_path
    - The path where the output GIF file is saved. If not specified, defaults to './ComfyUI/output'.
    - Comfy dtype: STRING
    - Python dtype: str
- filename
    - The desired name of the output GIF file. If not provided, defaults to 'morph'.
    - Comfy dtype: STRING
    - Python dtype: str
- filetype
    - The file format of the output animation. Supports 'GIF' or 'APNG'.
    - Comfy dtype: COMBO['GIF', 'APNG']
    - Python dtype: str

# Output types
- image_a_pass
    - The first input image, unaltered, included in the output to maintain coherence.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- image_b_pass
    - The second input image, unaltered, included in the output to maintain coherence.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- filepath_text
    - The full path of the created GIF file.
    - Comfy dtype: TEXT_TYPE
    - Python dtype: str
- filename_text
    - The filename of the created GIF.
    - Comfy dtype: TEXT_TYPE
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
