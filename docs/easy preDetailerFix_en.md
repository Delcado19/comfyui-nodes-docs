# Documentation
- Class name: preDetailerFix
- Category: EasyUse/Fix
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The preDetailerFix node is designed to enhance the preprocessing stage of an image data pipeline, ensuring input images are properly prepared for further analysis and manipulation. This node focuses on fixing common issues during the initial stage of image processing, thereby improving the quality and reliability of subsequent operations.

# Input types
## Required
- pipe
    - The pipe parameter is essential, as it carries the core data and settings required for the node to operate. It includes the model, clip, and vae components, as well as images and other relevant information that determine the node's processing flow.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict
- guide_size
    - The guide_size parameter is critical for defining the resolution at which the node processes images, directly affecting the level of detail and computational efficiency.
    - Comfy dtype: FLOAT
    - Python dtype: float
- guide_size_for
    - The guide_size_for parameter determines the method by which the guide size is applied, whether through bounding boxes or cropped regions, which significantly impacts the outcome of image processing.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- max_size
    - The max_size parameter sets an upper limit on image size, ensuring processing remains within manageable bounds and preventing excessive resource consumption.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed parameter is important for ensuring reproducibility of the node's operations, allowing consistent results across different runs.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter defines the number of iterations the node will perform, which directly relates to the thoroughness of image processing and the potential for improved results.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter adjusts the node's configuration settings, influencing its behavior and the quality of image processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter is crucial for selecting the appropriate sampling method for the node, which will greatly affect the efficiency and effectiveness of image processing.
    - Comfy dtype: COMBO
    - Python dtype: str
- scheduler
    - The scheduler parameter is essential for managing the execution speed of the node, ensuring optimal performance and resource utilization.
    - Comfy dtype: COMBO
    - Python dtype: str
- denoise
    - The denoise parameter helps control the noise reduction process, improving the clarity and quality of processed images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- feather
    - The feather parameter is important for softening the edges of processed images, resulting in smoother transitions and more visually appealing results.
    - Comfy dtype: INT
    - Python dtype: int
- noise_mask
    - The noise_mask parameter enables or disables the noise masking functionality, which is crucial for managing unwanted artifacts in image processing.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- force_inpaint
    - The force_inpaint parameter is important, as it guides the node to fill in missing or damaged parts of the image, ensuring the integrity and consistency of the final output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- drop_size
    - The drop_size parameter determines the size of the area to be removed from the image, which is critical for eliminating unwanted elements and improving overall image quality.
    - Comfy dtype: INT
    - Python dtype: int
- wildcard
    - The wildcard parameter allows for dynamic adjustments and customization of the node's operations, providing flexibility in handling various image processing scenarios.
    - Comfy dtype: STRING
    - Python dtype: str
- cycle
    - The cycle parameter determines the number of times the node repeats processing, which can enhance the stability and reliability of image processing results.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- pipe
    - The output pipe is a comprehensive structure that encapsulates the processed image and related data, providing a foundation for subsequent operations in the pipeline.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
