# Documentation
- Class name: TransitionFromSize
- Category: AIGC
- Output node: False
- Repo Ref: https://github.com/esheep/esheep_custom_nodes.git

The TransitionFromSize node is designed to generate a series of images that depict a smooth transition from one image size to another. It uses Bezier curves to control the morphing process, ensuring visually appealing transitions. The node's functionality focuses on creating dynamic visual content that can be used in various applications such as animation or visual effects.

# Input types
## Required
- image
    - The image parameter is the source image from which the transition sequence will be generated. It is a key input because it defines the content and starting point of the transition.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or numpy.ndarray
- from_image_width
    - The from_image_width parameter specifies the initial width of the image at the start of the transition. It plays an important role in determining the starting size for the morphing.
    - Comfy dtype: INT
    - Python dtype: int
- from_image_height
    - The from_image_height parameter defines the initial height of the image. It is crucial for establishing the vertical dimensions of the starting frame in the transition sequence.
    - Comfy dtype: INT
    - Python dtype: int
- total_frames
    - The total_frames parameter specifies the total number of frames in the transition sequence. It affects the duration and level of detail of the morphing process.
    - Comfy dtype: INT
    - Python dtype: int
- begin_and_end_frames
    - The begin_and_end_frames parameter determines the number of duplicate frames added at the beginning and end of the transition. This can be used to create a more gradual start and end to the sequence.
    - Comfy dtype: INT
    - Python dtype: int
- beiser_point_x
    - The beiser_point_x parameter is a control point on the Bezier curve that affects the horizontal aspect of the transition. It is a key factor in shaping the curvature of the morphing path.
    - Comfy dtype: FLOAT
    - Python dtype: float
- beiser_point_y
    - The beiser_point_y parameter is a control point on the Bezier curve that affects the vertical aspect of the transition. It is crucial for defining the vertical curvature of the morphing path.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- IMAGE
    - The output of the TransitionFromSize node is a series of images representing the transition from the original size to the new size. Each frame in the sequence is the result of the morphing process controlled by Bezier curves.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/esheep/esheep_custom_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
