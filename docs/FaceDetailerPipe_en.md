# Documentation
- Class name: FaceDetailerPipe
- Category: ImpactPack/Simple
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The FaceDetailerPipe node is designed to enhance facial details in images. It processes input images to refine facial features and improve overall quality, leveraging a series of advanced image processing techniques and models. Its primary goal is to deliver more detailed and refined visual output, especially for applications requiring high-quality facial representation.

# Input types
## Required
- image
    - The input image is the primary data required for the node to perform facial refinement. It is the foundation for all subsequent processing and enhancement activities. The quality and resolution of the input image directly affect the final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- detailer_pipe
    - detailer_pipe is the collection of models and parameters that guide the facial refinement process. It includes essential components such as model, clip, and vae, which are critical for achieving the desired level of detail enhancement.
    - Comfy dtype: DETAILER_PIPE
    - Python dtype: Tuple[Any, Any, Any, Any, Any, Any, Any, Any, Any, Any, Any]
- guide_size
    - The guide_size parameter determines the size of the guide image used for facial refinement. This is a critical factor that affects the level of detail achievable in the final output. Larger guide sizes generally allow for more detailed enhancement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_size
    - The max_size parameter sets the maximum size of the input image. This is an important consideration, as larger images can significantly increase processing time and resource requirements, impacting performance and memory usage.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The enhanced image output is the primary result of the FaceDetailerPipe node. It contains the refined and improved facial details extracted from the original input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- cropped_refined
    - The cropped_refined output contains a series of refined facial images cropped from the enhanced image. They can be used for further processing or as standalone detailed images.
    - Comfy dtype: LIST[IMAGE]
    - Python dtype: List[torch.Tensor]
- mask
    - The mask output is a binary image depicting the facial regions that have been enhanced. This is useful for isolating detailed regions for additional processing or analysis.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
