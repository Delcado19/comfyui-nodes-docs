# Documentation
- Class name: HEDPreprocessor_Provider_for_SEGS
- Category: InspirePack/SEGS/ControlNet
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The HEDPreprocessor_Provider_for_SEGS class is designed to provide the HED (Holistically-Nested Edge Detection) algorithm for image segmentation applications. It utilizes the HED preprocessor to enhance image edges, which is critical for segmenting and identifying regions within images. This node is indispensable for tasks requiring detailed edge detection and is part of the SEGS (Semantic Edge-Guided Segmentation) workflow.

# Input types
## Required
- safe
    - The 'safe' parameter is a boolean flag used to determine whether certain safety features are enabled or disabled during the preprocessing stage. It plays a key role in ensuring the stability and reliability of image processing while preventing potential errors or artifacts that may occur during edge detection.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- SEGS_PREPROCESSOR
    - The output of HEDPreprocessor_Provider_for_SEGS is a preprocessed image with enhanced edges using the HED algorithm. This output is a critical step in the segmentation process, as it provides a detailed representation of the image structure, which is essential for accurate segmentation.
    - Comfy dtype: SEGS_PREPROCESSOR
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
