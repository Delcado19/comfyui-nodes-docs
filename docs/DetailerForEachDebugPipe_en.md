# Documentation
- Class name: DetailerForEachTestPipe
- Category: ImpactPack/Detailer
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the DetailerForEachTestPipe class aims to perform detailed image processing tasks on a single image input. It enhances the image by leveraging various models and parameters, and outputs multiple types of processed images including the original, cropped, and enhanced versions. This method is a core component of the image enhancement pipeline, focused on improving the visual quality and detail of the input image.

# Input types
## Required
- image
    - The 'image' parameter is the primary input to the node, representing the image to be processed. It is essential to the node's execution, as it determines the subject of enhancement. The quality and content of the image significantly influence the node's output results.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- segs
    - The 'segs' parameter provides segmentation information of the image, which is critical for targeted enhancement and processing within specific regions. It affects how the node handles and refines different parts of the image.
    - Comfy dtype: SEGS
    - Python dtype: List[Segmentation]
- guide_size
    - The 'guide_size' parameter specifies the guide size during the enhancement process. It plays an important role in determining the scale of detail the node will focus on during image enhancement.
    - Comfy dtype: INT
    - Python dtype: int
- max_size
    - The 'max_size' parameter sets the maximum size for image processing operations. It is important for controlling the resolution and computational load of the node's execution.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The 'seed' parameter is used to initialize the random number generator, ensuring reproducibility of the node's random processes.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The 'steps' parameter defines the number of iterations or steps to be taken during the enhancement process. It directly affects the thoroughness of the enhancement.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The 'cfg' parameter contains configuration settings applied to the node's processing. It is critical for customizing the node's behavior to meet specific enhancement requirements.
    - Comfy dtype: CONFIG
    - Python dtype: Configuration
- sampler_name
    - The 'sampler_name' parameter identifies the sampling strategy the node will use during enhancement. It is important for determining the method of processing image details.
    - Comfy dtype: STRING
    - Python dtype: str
- scheduler
    - The 'scheduler' parameter is responsible for controlling the speed or pace of executing enhancement steps. It affects the efficiency and results of the node's operations.
    - Comfy dtype: SCHEDULER
    - Python dtype: Scheduler
- denoise
    - The 'denoise' parameter indicates whether denoising operations should be applied to the image. It is important for improving image clarity and reducing noise artifacts.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- feather
    - The 'feather' parameter controls the softness of edges in the processed image. It is important for achieving natural transitions between different regions of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_mask
    - The 'noise_mask' parameter determines whether a noise mask is applied during enhancement. This can be important for certain enhancement techniques that require noise management.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- force_inpaint
    - The 'force_inpaint' parameter decides whether to force inpainting operations on the image. This can be critical for filling missing or damaged areas in the image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- basic_pipe
    - The 'basic_pipe' parameter encapsulates the basic processing pipeline used for the image, including models and other components. It is essential for the initial stages of image enhancement.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[torch.nn.Module, Any, Any, Any]
## Optional
- wildcard
    - The 'wildcard' parameter allows additional flexibility in processing by providing wildcard options. It can be used to introduce variability or special conditions into the node's operations.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- enhanced_img
    - The 'enhanced_img' output is the result of the image enhancement process, showcasing improved visual quality and detail. This is a critical output as it represents the primary goal of the node's functionality.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- new_segs
    - The 'new_segs' output contains updated segmentation information after the enhancement process. This is important for applications that need to understand the segmented regions after image enhancement.
    - Comfy dtype: SEGS
    - Python dtype: List[Segmentation]
- basic_pipe
    - The 'basic_pipe' output reflects the basic processing pipeline used, which may be useful for further processing or analysis in subsequent stages of the image processing workflow.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[torch.nn.Module, Any, Any, Any]
- cropped
    - The 'cropped' output consists of a list of cropped images derived from the original input. These images can be used for focused enhancement or analysis of specific regions.
    - Comfy dtype: LIST[IMAGE]
    - Python dtype: List[torch.Tensor]
- cropped_enhanced
    - The 'cropped_enhanced' output provides a list of enhanced cropped images, highlighting the detailed improvements made to each segment.
    - Comfy dtype: LIST[IMAGE]
    - Python dtype: List[torch.Tensor]
- cropped_enhanced_alpha
    - The 'cropped_enhanced_alpha' output includes images with an alpha channel representing the transparency of the enhanced regions, suitable for layering or compositing in further image processing.
    - Comfy dtype: LIST[IMAGE]
    - Python dtype: List[torch.Tensor]
- cnet_images
    - The 'cnet_images' output is a list of images processed by the control net, which can be important for applications involving neural network-based image control.
    - Comfy dtype: LIST[IMAGE]
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
