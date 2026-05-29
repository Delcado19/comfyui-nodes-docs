
# Documentation
- Class name: SaltAIStableVideoDiffusion
- Category: SALT/API/Stability API
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltAIStableVideoDiffusion node is intended to interact with the Stability AI API to generate video content from a given image. It employs advanced diffusion techniques, through a series of API calls and image processing steps, to transform a static image into a high-quality video animation sequence, producing dynamic video content.

# Input types
## Required
- image
    - Input image to be converted into a video sequence. It plays a crucial role in determining the visual content of the generated video.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- api_key
    - API key used to authenticate requests to the Stability AI API. It is essential for accessing the video generation capabilities of the API.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - Seed value used to ensure reproducibility of the video generation process. It influences the randomness of the video's visual evolution.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - CFG scale parameter controls the creativity of the video generation. Higher values encourage more novel video content.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mbi
    - Motion bucket ID parameter affects the motion dynamics in the generated video, influencing how the image animates over time.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- frames
    - A batch of video frames as a tensor, representing the generated video sequence. Each frame is a transformation of the input image, collectively forming a coherent video.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
