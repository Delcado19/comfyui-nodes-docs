# Documentation
- Class name: samplerSimpleLayerDiffusion
- Category: EasyUse/Sampler
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node simplifies the sampling process in hierarchical diffusion models, focusing on generating high-quality images based on provided inputs. It streamlines the sampling process by handling the complexities of the underlying model, allowing users to obtain results with minimal configuration.

# Input types
## Required
- pipe
    - The 'pipe' parameter serves as the primary input channel for the node, providing the necessary data and settings required for the sampling process. Proper configuration ensures the correct flow of information and resources during execution.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- image_output
    - The 'image_output' parameter determines how the generated images are handled, with options ranging from hiding to saving or previewing. This parameter affects user interaction with the output, determining the visibility and retention of generated content.
    - Comfy dtype: COMBO
    - Python dtype: str
- link_id
    - The 'link_id' parameter is crucial for linking the node's output to other system components, ensuring data is correctly routed and available for further processing or analysis.
    - Comfy dtype: INT
    - Python dtype: int
- save_prefix
    - The 'save_prefix' parameter sets the prefix for saving output files, which is essential for organizing and identifying saved results in the file system. Proper use of this parameter helps maintain a structured and easily accessible output library.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- model
    - The 'model' parameter allows users to specify a particular model for the sampling process. This is crucial for ensuring the desired model's characteristics and capabilities are utilized when generating output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- prompt
    - The 'prompt' parameter plays a key role in guiding the sampling process by providing textual descriptions or conditions that influence output generation. It shapes the creative direction and thematic content of the generated images.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The 'extra_pnginfo' parameter contains additional information related to PNG images, potentially used to refine the sampling process. It plays a role in enhancing the detail and quality of output based on specific image requirements.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: str
- my_unique_id
    - The 'my_unique_id' parameter is used to uniquely identify operations within the system, ensuring results can be accurately tracked and associated with the correct user or process.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- pipe
    - The 'pipe' output provides a comprehensive structure containing all data and settings required for subsequent operations or analysis. It is essential for maintaining workflow continuity and consistency.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- final_image
    - The 'final_image' output represents the primary result of the sampling process, showcasing images generated according to specified conditions and creative guidance.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- original_image
    - The 'original_image' output provides a reference to the initial input image or data that served as the basis for the sampling process. This is useful for comparison and analysis purposes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- alpha
    - The 'alpha' output contains the alpha channel data of the generated images, which is important for applications requiring transparency control or image layering.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
