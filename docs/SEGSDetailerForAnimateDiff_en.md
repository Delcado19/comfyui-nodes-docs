# Documentation
- Class name: SEGSDetailerForAnimateDiff
- Category: ImpactPack/Detailer
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

SEGSDetailerForAnimateDiff node aims to enhance segmentation details in image frames, particularly for improving the quality of animation differences. It enhances clarity and detail level by scaling and processing parts of the image, using advanced models and sampling techniques.

# Input types
## Required
- image_frames
    - The image_frames parameter is required as it provides the raw image data that the node will process. It directly affects the output quality and the node's ability to enhance details within frames.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- segs
    - The segs parameter defines the segmentation within image_frames that the node will focus on, crucial for the node to identify and process specific regions of interest in the image data.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]
- guide_size
    - The guide_size parameter sets the scaling factor for the detail enhancement process. It is important as it determines the level of detail that will be introduced into the image segment.
    - Comfy dtype: FLOAT
    - Python dtype: float
- guide_size_for
    - The guide_size_for parameter indicates whether guide_size applies to the border or the cropping area. This choice affects how detail enhancement is focused within the image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- max_size
    - The max_size parameter sets the maximum size for the enlarged image frame. It ensures that the enhanced image does not exceed a certain resolution, maintaining performance and memory efficiency.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed parameter is used for random number generation in the sampling process. It ensures reproducibility of results when the node is run with the same seed value.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter determines the number of iterations used in the sampling process. More steps can lead to finer results but may increase processing time.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter adjusts the configuration of the sampling process, allowing fine-tuning of the behavior of the detail enhancement algorithm.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter specifies the sampling method used by the node. Different samplers can provide varying results in terms of detail and noise characteristics.
    - Comfy dtype: STRING
    - Python dtype: str
- scheduler
    - The scheduler parameter defines the scheduling strategy for sampling steps. It affects how the sampling process evolves over iterations.
    - Comfy dtype: STRING
    - Python dtype: str
- denoise
    - The denoise parameter controls the level of denoising applied to the enhanced image. It is an important factor in achieving a balance between detail and noise in the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- basic_pipe
    - The basic_pipe parameter encapsulates the core components required for the detail enhancement process, including model, clip, and vae. It is fundamental to the node's functionality.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[Any, ...]
## Optional
- refiner_ratio
    - The refiner_ratio parameter, when provided, determines the influence of an optional refiner model on detail enhancement. It allows further fine-tuning of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: Optional[float]
- refiner_basic_pipe_opt
    - The optional refiner_basic_pipe_opt parameter extends the node's capabilities by providing an additional set of components for a secondary refinement process.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Optional[Tuple[Any, ...]]

# Output types
- segs
    - The segs output contains the enhanced segmentation details of the input image frames. It marks the completion of node processing and represents the primary result of the detail enhancement operation.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[Tuple[int, int], List[SEG]]
- cnet_images
    - The cnet_images output provides a visual representation of the control network's influence on the detail enhancement process. These images can be used for further analysis or as a reference for node effectiveness.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
