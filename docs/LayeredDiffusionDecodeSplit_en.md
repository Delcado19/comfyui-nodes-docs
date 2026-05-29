# Documentation
- Class name: LayeredDiffusionDecodeSplit
- Category: Image Processing
- Output node: False
- Repo Ref: https://github.com/huchenlei/ComfyUI-layerdiffuse.git

The LayeredDiffusionDecodeSplit class aims to efficiently decode RGBA images in a sub-batch manner, improving processing throughput and memory management. It processes large image datasets by decoding smaller groups of images, thereby optimizing computational resources and simplifying the decoding process for various applications.

# Input types
## Required
- samples
    - The “samples” parameter is required as it contains the latent representations needed for the decoding process. It directly affects the quality and accuracy of the decoded images and is the foundation of the entire operation.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- images
    - The “images” parameter is crucial for the decoding process, as it provides the input images to be processed. It is the core of the node execution and affects the final output, determining the visual aspects of the decoded images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- frames
    - The “frames” parameter determines the frequency of image decoding, effectively controlling the sub-batch size. It plays a key role in balancing computational efficiency and memory usage, ensuring a smooth and optimized processing flow.
    - Comfy dtype: INT
    - Python dtype: int
- sd_version
    - The “sd_version” parameter specifies the version of the stable diffusion model to use, which is crucial for determining the decoding algorithm and its compatibility with the input data. It affects the overall performance and the quality of the generated images.
    - Comfy dtype: ENUM
    - Python dtype: StableDiffusionVersion
- sub_batch_size
    - The “sub_batch_size” parameter is essential for managing the computational load, as it defines the number of images processed per sub-batch. It plays an important role in optimizing the speed and resource allocation of the decoding process.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The “image” output represents the decoded RGBA image and is the main result of the node operation. It encapsulates the visual information derived from the input data, demonstrating the node's ability to convert latent representations into perceptible visual content.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- alpha
    - The “alpha” output contains the alpha channel information of the decoded image, which is very important for applications requiring transparency. It highlights the node's ability to handle complex image attributes and contributes to the richness of the final visual output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/huchenlei/ComfyUI-layerdiffuse)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
