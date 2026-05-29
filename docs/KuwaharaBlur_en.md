# Documentation
- Class name: KuwaharaBlur
- Category: postprocessing/Filters
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The KuwaharaBlur class aims to apply the Kuwahara filter to images, a nonlinear digital filter used in image processing. It smooths images while preserving edges, particularly useful for reducing image noise without blurring important details. The node works by dividing the image into smaller blocks and replacing each with a filtered version based on local variance, thereby preserving the structural integrity of the image.

# Input types
## Required
- image
    - The image parameter is critical as it is the primary input for the Kuwahara filter processing. It is the source from which the node derives its output, and the content and quality of the image directly affect the effectiveness of noise reduction and edge preservation.
    - Comfy dtype: IMAGE
    - Python dtype: np.ndarray
- blur_radius
    - The blur radius parameter determines the degree of smoothing effect applied by the Kuwahara filter. It affects the size of the blocks used for processing, directly influencing the balance between noise reduction and detail preservation.
    - Comfy dtype: INT
    - Python dtype: int
- method
    - The method parameter determines the type of Kuwahara filter to apply, which can be 'mean' or 'gaussian'. This choice affects the filtering process and the resulting image, with 'mean' providing more uniform smoothing and 'gaussian' providing more adaptive smoothing based on the local properties of the image.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- output_image
    - The output image represents the processed image after applying the Kuwahara filter. It reflects the primary function of the node, the culmination of noise reduction and edge preservation efforts, providing a clearer and more defined result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/EllangoK/ComfyUI-post-processing-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
