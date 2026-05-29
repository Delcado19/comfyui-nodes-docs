# Documentation
- Class name: DragNUWARun
- Category: DragNUWA
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

DragNUWARun node is designed to perform advanced image processing and reasoning tasks, utilizing predefined models to analyze and manipulate image data based on tracking points and other input parameters. It aims to enhance image sequences by applying motion estimation and optical flow techniques, contributing to the generation of high-quality visual outputs.

# Input types
## Required
- model
    - Model parameters are crucial because they define the underlying architecture and pre-trained weights used for image processing tasks. They determine the node's ability to interpret and transform input images based on learned patterns and features.
    - Comfy dtype: DragNUWA
    - Python dtype: torch.nn.Module
- image
    - Image input is essential for the node to perform its primary function—image analysis and reasoning. It is the raw data that the model will process, and its content directly affects the quality and accuracy of the node's output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or numpy.ndarray
- tracking_points
    - Tracking points are critical to the node because they provide the spatial information necessary for the model to understand and predict motion in image sequences. They are used to guide the transformation and enhancement process, ensuring the output aligns with the desired motion dynamics.
    - Comfy dtype: STRING
    - Python dtype: str
- inference_batch_size
    - Inference batch size parameter optimizes the node's processing efficiency by determining how many images are processed simultaneously. It affects the trade-off between computational resources and processing speed, thereby impacting the node's overall performance.
    - Comfy dtype: INT
    - Python dtype: int
- motion_bucket_id
    - Motion bucket ID is a key parameter used to classify the type of motion so that the model can apply specific transformations. It helps achieve the desired motion effect in the output by selecting the appropriate motion profile from a predefined set.
    - Comfy dtype: INT
    - Python dtype: int
- use_optical_flow
    - Use optical flow parameter enables or disables the application of optical flow techniques for motion estimation. It is important for the node to accurately predict and simulate complex motion in image sequences.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- directory
    - Directory parameter specifies the location where optical flow data is stored or retrieved. It is crucial for the node to access the necessary motion information, which is essential for accurately performing image processing tasks.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- output
    - Output parameter represents the final processed image or image sequence resulting from the node's operation. It encapsulates the node's ability to transform and enhance input data, reflecting the effectiveness of the applied models and algorithms.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or numpy.ndarray

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-DragNUWA)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
