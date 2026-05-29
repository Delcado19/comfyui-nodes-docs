# Documentation
- Class name: DetailerForEachPipe
- Category: ImpactPack/Detailer
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The DetailerForEachPipe node aims to enhance image details by applying a series of image processing techniques. It focuses on refining the visual quality of individual parts of the image through advanced algorithms to achieve a higher level of detail. This node plays a key role in post-processing workflows that emphasize image content details.

# Input types
## Required
- image
    - Input image is the primary data that the node will process. It is essential for the node's execution as it determines the target for detail enhancement. The characteristics of the image directly affect the node's operation and the quality of the output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- segs
    - Segmentation data provides regions of interest within the image for the node. This is critical for the node to understand which parts of the image require detailed enhancement. Segmentation data guides the node's processing, ensuring only relevant areas undergo enhancement.
    - Comfy dtype: SEGS
    - Python dtype: List[torch.Tensor]
- guide_size
    - Guide size parameter determines the scale at which detail enhancement is applied. It is a key factor in deciding the level of visible detail in the final output. The guide size must be carefully chosen to balance detail and computational resources.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_size
    - Max size parameter sets an upper limit on the size of processed image segments. It is important for controlling computational load and ensuring the node operates within available resources. This parameter helps prevent excessive memory usage during enhancement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - Seed parameter is used to initialize the random number generator, ensuring reproducibility of the node's operations. It is especially important when consistent results are desired across multiple runs of the node. The seed provides a degree of control over random elements in the enhancement process.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - Steps parameter specifies the number of iterations the enhancement algorithm will perform. It is a key determinant of the final output quality and detail. More steps generally yield better results but increase computational time.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Config parameter adjusts the settings of the enhancement algorithm to fine-tune the output. It is a key factor in achieving the desired level of detail and can significantly affect the visual result of the enhanced image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - Output image is the result of the detail enhancement process. It contains the original image with added details and improved visual quality. This is the primary output expected from the node operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- segs
    - Output segmentation data provides information about enhanced regions within the image. This is useful for further processing or analysis that requires knowledge of segmented areas of the image.
    - Comfy dtype: SEGS
    - Python dtype: List[torch.Tensor]
- basic_pipe
    - Basic pipe output is a collection of models and parameters used during the enhancement process. It can be used for additional operations or maintaining consistency across different stages of an image processing workflow.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[Any, ...]
- cnet_images
    - ControlNet image output is a list of images processed by the ControlNet during enhancement. These images can be reviewed or used for further operations.
    - Comfy dtype: COMBO[IMAGE]
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
