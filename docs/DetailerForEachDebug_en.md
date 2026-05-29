# Documentation
- Class name: DetailerForEachTest
- Category: ImpactPack/Detailer
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The DetailerForEachTest node is designed to enhance image details by processing each image segment individually. It utilizes advanced models and techniques to refine and enhance image quality, focusing on regions of interest within the image. The node aims to improve visual clarity and detail without compromising the integrity of the original image.

# Input types
## Required
- image
    - Input image tensor that the node will process to enhance its details. This is a basic parameter because all operations of the node revolve around this image.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- segs
    - Segmentation data that defines regions of interest within the image. It is crucial for the node to determine which parts of the image require focused detail enhancement.
    - Comfy dtype: List[seg]
    - Python dtype: List[Any]
- model
    - Model used for detail enhancement. It plays an important role in the node's ability to refine and enhance image details based on input parameters.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- guide_size
    - Guidance size parameter that determines the scale of detail enhancement. It is crucial for controlling the level of detail the node will apply to the image.
    - Comfy dtype: int
    - Python dtype: int
- guide_size_for
    - Guidance size used parameter that specifies the reference size for the detail enhancement process. This is important for aligning the enhancement with the desired output size.
    - Comfy dtype: int
    - Python dtype: int
- max_size
    - Maximum size parameter that limits the resolution of the enhanced image. It ensures that the enhanced image does not exceed a certain size, which can be important for performance or storage considerations.
    - Comfy dtype: int
    - Python dtype: int
- seed
    - Random seed used to initialize random processes within the node. It ensures reproducibility of results when the node is run with the same parameters.
    - Comfy dtype: int
    - Python dtype: int
- steps
    - Number of steps to run the enhancement process. It affects the thoroughness of the enhancement and the time required to complete the operation.
    - Comfy dtype: int
    - Python dtype: int
- cfg
    - Configuration settings that control various aspects of the enhancement process. This is a critical parameter that allows fine-tuning the node's behavior to achieve the desired result.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]
- sampler_name
    - Sampler name used to select samples during the enhancement process. It affects the sampling strategy and can influence the quality of the enhanced image.
    - Comfy dtype: str
    - Python dtype: str
- scheduler
    - Learning rate scheduler used during model training. It is important for adjusting the learning rate over time to improve training efficiency and model performance.
    - Comfy dtype: torch.optim.lr_scheduler
    - Python dtype: torch.optim.lr_scheduler
- positive
    - A list of positive conditions and their associated details that guide the enhancement process towards the desired result. This is a critical parameter for directing the node's behavior.
    - Comfy dtype: List[condition_details]
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- negative
    - A list of negative conditions and their associated details that prevent unwanted results during the enhancement process. This is crucial for controlling the node's behavior to avoid undesired outcomes.
    - Comfy dtype: List[condition_details]
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
## Optional
- clip
    - CLIP tensor that provides contextual information to guide the enhancement process. This is an optional parameter that can be used to influence the style and content of the enhanced image.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- vae
    - Variational Autoencoder (VAE) used to generate or refine image details. This is an optional component that can be used to introduce or improve specific features in the image.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- denoise
    - Denoising toggle that determines whether to apply a denoising step to the enhanced image. It can improve visual quality by reducing noise.
    - Comfy dtype: bool
    - Python dtype: bool
- feather
    - Feather parameter that controls the smoothness of edges in the enhanced image. It is important for creating natural transitions between enhanced and original areas of the image.
    - Comfy dtype: float
    - Python dtype: float
- noise_mask
    - Noise mask tensor that defines image regions where noise reduction should be applied. This is an optional parameter that can be used to selectively reduce noise in certain parts of the image.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- force_inpaint
    - Force inpainting toggle that determines whether to forcibly apply inpainting to the image. It can be used to fill in missing or damaged areas of the image.
    - Comfy dtype: bool
    - Python dtype: bool
- wildcard
    - Wildcard parameter that allows dynamic selection of enhancement options based on certain conditions. It provides flexibility in how the node applies enhancement to different segments of the image.
    - Comfy dtype: str
    - Python dtype: str
- detailer_hook
    - An optional hook function that can be used to perform custom operations after the detail enhancement process. It allows for additional processing of the image.
    - Comfy dtype: Callable
    - Python dtype: Callable[..., Any]
- cycle
    - Number of cycles to repeat the enhancement process. It can be used to apply multiple enhancement iterations for more refined results.
    - Comfy dtype: int
    - Python dtype: int
- inpaint_model
    - An optional inpainting model that can be used to fill missing or damaged areas of the image during the enhancement process.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- noise_mask_feather
    - The feather value of the noise mask, controlling the smoothness of the noise reduction edge. It helps create a smoother transition between the denoised and original areas.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- enhanced_img
    - The enhanced image tensor generated by the detail enhancement process. It represents the primary output of the node, showcasing improved visual clarity and detail.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- cropped
    - A list of cropped image tensors processed for detail enhancement. These tensors represent the parts of the image focused on for enhancement.
    - Comfy dtype: List[torch.Tensor]
    - Python dtype: List[torch.Tensor]
- cropped_enhanced
    - A list of enhanced cropped image tensors. Each tensor corresponds to an enhanced portion of the original image, showcasing improved detail.
    - Comfy dtype: List[torch.Tensor]
    - Python dtype: List[torch.Tensor]
- cropped_enhanced_alpha
    - A list of enhanced cropped image tensors with an alpha channel. These tensors contain transparency information, usable for further processing or compositing.
    - Comfy dtype: List[torch.Tensor]
    - Python dtype: List[torch.Tensor]
- cnet_images
    - A list of PIL images generated by the control net during the enhancement process. These images can provide visual feedback or be used for additional analysis.
    - Comfy dtype: List[PIL.Image]
    - Python dtype: List[PIL.Image]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
