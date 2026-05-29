# Documentation
- Class name: DetailerForEachPipeForAnimateDiff
- Category: ImpactPack/Detailer
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The DetailerForEachPipeForAnimateDiff node enhances image frame details by leveraging segmentation information. It processes each segment individually to improve visual quality for animated diffusion, focusing on regions defined by bounding boxes or crop areas. The node uses advanced sampling techniques and denoising strategies to achieve higher detail levels in the output.

# Input types
## Required
- image_frames
    - The image_frames parameter is critical as it provides the raw image data the node will process. It is the foundation for applying detail enhancement, and its quality directly affects the final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- segs
    - The segs parameter defines the segmentation information the node uses to identify different regions of the image for processing. It is essential for the node to understand which parts of the image require detail enhancement.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[torch.Tensor, List[SEG]]
- guide_size
    - The guide_size parameter determines the size of the guide image used for detail enhancement. It is a key factor controlling the level of detail added to image frames.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_size
    - The max_size parameter sets the maximum dimension of image frames, ensuring enhanced details do not exceed a certain resolution. It plays a role in optimizing processing and maintaining a balance between detail and performance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed parameter is used for random number generation within the node, ensuring reproducibility of results. This is an important aspect when consistent results across multiple runs are desired.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter specifies the number of detail enhancement iterations the node will perform. More steps generally result in higher quality output but may increase processing time.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter adjusts the configuration settings of the detail enhancement process. It is a critical parameter that influences the overall behavior of the node and the final appearance of enhanced details.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter selects the sampling method used during detail enhancement. Different sampling methods can produce varying results in terms of detail quality and processing speed.
    - Comfy dtype: STRING
    - Python dtype: str
- scheduler
    - The scheduler parameter determines the scheduling algorithm used for the detail enhancement process. It affects how the node manages enhancement steps to achieve optimal results.
    - Comfy dtype: STRING
    - Python dtype: str
- denoise
    - The denoise parameter controls the level of noise reduction applied to image frames. This is an important setting for achieving clean and clear output without compromising enhanced details.
    - Comfy dtype: FLOAT
    - Python dtype: float
- feather
    - The feather parameter is used to soften the edges of enhanced segments, providing a smoother transition between detailed areas and the rest of the image.
    - Comfy dtype: INT
    - Python dtype: int
- basic_pipe
    - The basic_pipe parameter provides the foundational models and components necessary for the detail enhancement process. It is a critical input that enables the node to perform its function.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[Any, Any, Any, Any, Any]
- refiner_ratio
    - The refiner_ratio parameter specifies the proportion of the refiner model's contribution to detail enhancement. It allows fine-tuning of the enhancement process to achieve the desired level of detail.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The image output parameter represents the final enhanced image frames with improved details. It is the primary result of node processing, reflecting the effectiveness of the applied detail enhancement techniques.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- segs
    - The segs output parameter provides updated segmentation information after the detail enhancement process. It includes new segments integrating enhanced details into the original segmentation data.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[torch.Tensor, List[SEG]]
- basic_pipe
    - The basic_pipe output parameter returns the foundational models and components used during detail enhancement. It may be useful for further processing or analysis purposes.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[Any, Any, Any, Any, Any]
- cnet_images
    - The cnet_images output parameter contains a list of control net images generated during the detail enhancement process. These images can provide insight into intermediate stages of enhancement and aid in debugging and quality assessment.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
