# Documentation
- Class name: samplerSimpleDownscaleUnet
- Category: EasyUse/Sampler
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The samplerSimpleDownscaleUnet node is designed to facilitate image downscaling and upscaling within a workflow. It selects an appropriate downscaling method and applies it to the input image, then enhances image quality through an upscaling process. This node is particularly useful for optimizing image processing workflows, ensuring images are effectively scaled without loss of detail or clarity.

# Input types
## Required
- pipe
    - The pipe parameter is required because it represents the pipeline containing the image data to be processed. It is through this parameter that the node accesses the image and performs subsequent scaling operations.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- downscale_mode
    - The downscale_mode parameter determines the method used to downscale the image. It can be set to 'Auto' for automatic selection or 'Custom' for manual configuration, which is essential for controlling the scaling process.
    - Comfy dtype: COMBO[None, Auto, Custom]
    - Python dtype: str
- block_number
    - The block_number parameter specifies the number of blocks to use during the downscaling process. It is an important factor affecting the efficiency and outcome of the scaling operation.
    - Comfy dtype: INT
    - Python dtype: int
- downscale_factor
    - The downscale_factor parameter defines the scaling factor used to reduce the image size. It plays a critical role in the downscaling process and directly affects the final dimensions of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - The start_percent parameter establishes the starting percentage of the scaling process. It is an important parameter that helps determine the initial state of the image scaling.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The end_percent parameter sets the ending percentage of the scaling process. It is a key factor in controlling the final appearance of the scaled image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- downscale_after_skip
    - The downscale_after_skip parameter indicates whether downscaling should occur after the skip connections in the network. This may affect the quality of the downscaled image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- downscale_method
    - The downscale_method parameter selects the algorithm used to downscale the image. This is a critical choice that can significantly impact the quality of the resulting image.
    - Comfy dtype: COMBO[bicubic, nearest-exact, bilinear, area, bislerp]
    - Python dtype: str
- upscale_method
    - The upscale_method parameter determines the algorithm used to upscale the image after downscaling. It is important for enhancing image quality during the upscaling phase.
    - Comfy dtype: COMBO[bicubic, nearest-exact, bilinear, area, bislerp]
    - Python dtype: str
- image_output
    - The image_output parameter indicates how the generated image should be handled. It can be set to hide the image, preview the image, save the image, or a combination of these options, which is essential for managing the node's output.
    - Comfy dtype: COMBO[Hide, Preview, Save, Hide/Save, Sender, Sender/Save]
    - Python dtype: str
- link_id
    - The link_id parameter is used to associate the node's output with a specific link or workflow. It is important for tracking and managing the node's output within a larger workflow.
    - Comfy dtype: INT
    - Python dtype: int
- save_prefix
    - The save_prefix parameter specifies the prefix used for saved image files. It is a useful parameter for organizing and identifying saved image files.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- pipe
    - The pipe output provides the processed image pipeline, which includes the scaled image and other related data. It is important because it allows further processing or analysis of the image in subsequent nodes.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- image
    - The image output represents the scaled image obtained after processing by the node. It is a key output for visual inspection and further manipulation of the image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
