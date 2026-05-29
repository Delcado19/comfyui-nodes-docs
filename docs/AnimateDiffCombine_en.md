# Documentation
- Class name: AnimateDiffCombine
- Category: Animate Diff
- Output node: True
- Repo Ref: https://github.com/ArtVentureX/comfyui-animatediff.git

The AnimateDiffCombine node is designed to generate animated GIFs from a sequence of images. It processes input images to create coherent animations by adjusting frame rate and loop count, allowing for customized control over the final output. The node also provides the option to save the generated GIF and includes a ping-pong effect feature, enhancing the visual appeal of the animation.

# Input types
## Required
- images
    - The 'image' parameter is the sequence of image tensors used by the node to generate animation frames. It is essential to the node's operation, as it directly affects the content and quality of the output GIF.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
## Optional
- frame_rate
    - The 'frame_rate' parameter determines the speed at which the animation plays. It is an important factor in setting the rhythm of the GIF, influencing the transition speed between frames.
    - Comfy dtype: INT
    - Python dtype: int
- loop_count
    - The 'loop_count' parameter specifies how many times the animation should loop. It is important in controlling the behavior of the GIF, particularly when determining whether it should loop indefinitely or for a set number of times.
    - Comfy dtype: INT
    - Python dtype: int
- save_image
    - The 'save_image' parameter indicates whether the generated GIF should be saved to the output directory. It plays a role in the node's functionality, determining whether the final product should be saved for future use.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- filename_prefix
    - The 'filename_prefix' parameter provides a prefix for the saved GIF filename. It is essential for identifying and organizing output files, ensuring they are easily distinguishable from other files.
    - Comfy dtype: STRING
    - Python dtype: str
- format
    - The 'format' parameter defines the file format of the output GIF. It is important because it determines the type of file that will be created, affecting the animation's compatibility and appearance across different platforms.
    - Comfy dtype: COMBO[image/gif, image/webp]
    - Python dtype: str
- pingpong
    - The 'pingpong' parameter, when set to True, creates a ping-pong effect in the animation by reversing the order of frames, adding a unique visual element to the GIF.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- prompt
    - The 'prompt' parameter is used to add a text description or metadata to the GIF, which is useful for providing context or additional information about the animation.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The 'extra_pnginfo' parameter allows for the inclusion of additional metadata in the PNG files that make up the GIF. It can enhance the informational richness of the output files.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, str]

# Output types
- ui
    - The 'ui' parameter in the output is a dictionary containing information about the generated GIF, including the file path and format. It is important because it provides the user with a reference to the output file for further use or sharing.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, List[Dict[str, Union[str, Dict[str, str]]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ArtVentureX/comfyui-animatediff)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
