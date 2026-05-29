# Documentation
- Class name: poseEditor
- Category: EasyUse/Image
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The poseEditor node is designed to process and manipulate image data, facilitating the extraction and transformation of pose-related features from input images. It excels at handling image data from diverse sources and converting it into formats suitable for further analysis or visualization.

# Input types
## Required
- image
    - The image parameter is critical because it defines the source image to be processed by the node. It influences the node's operation by determining the content and quality of the input data, which directly impacts subsequent pose analysis and transformation.
    - Comfy dtype: COMBO[sorted(os.listdir(temp_dir))]:string
    - Python dtype: str

# Output types
- output_pose
    - output_pose represents the processed image data, transformed and ready for further analysis. It encapsulates the key information extracted from the input image, with a focus on pose-related features.
    - Comfy dtype: tuple(torch.Tensor)
    - Python dtype: Tuple[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
