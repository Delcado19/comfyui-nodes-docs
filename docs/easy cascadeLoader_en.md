# Documentation
- Class name: cascadeLoader
- Category: EasyUse/Loaders
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The cascadeLoader node class is designed to simplify the loading and processing of various models and data in a pipeline. It encapsulates the complexities of model retrieval, enhancement via LORA, and applying CLIP embeddings to positive and negative inputs. The node aims to provide seamless integration of these components, ensuring efficient data flow and optimal performance.

# Input types
## Required
- stage_c
    - The stage_c parameter is critical for specifying the checkpoint or UNet model used in the pipeline. It determines the starting point for model loading and has a direct impact on subsequent processing steps.
    - Comfy dtype: COMBO[folder_paths.get_filename_list('unet') + folder_paths.get_filename_list('checkpoints'),]
    - Python dtype: Union[str, None]
- resolution
    - The resolution input is essential for defining the dimensions of the latent space and output images. It affects the quality and resolution of the generated content, thereby influencing the overall results of the pipeline.
    - Comfy dtype: COMBO[BASE_RESOLUTIONS]
    - Python dtype: Union[str, Tuple[int, int]]

# Output types
- pipe
    - The pipe output encapsulates the processed model, embeddings, and other relevant data prepared for downstream tasks. This is a critical output that enables further operations and refinements within the pipeline.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
