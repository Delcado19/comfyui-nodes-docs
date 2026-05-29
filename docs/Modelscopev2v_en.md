
# Documentation
- Class name: Modelscopev2v
- Category: cspnodes/modelscope
- Output node: False
- Repo Ref: https://github.com/modelscope/modelscope

The Modelscopev2v node is designed to achieve cross-domain transformation of visual content, utilizing advanced models for sophisticated understanding and manipulation of visual data. It focuses on implementing complex visual transformations and enhancements, suitable for tasks requiring deep understanding and modification of visual information.

# Input types
## Required
- video_frames
    - Specifies the video frames to be transformed. This is the key input defining the visual content that will undergo transformation.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- prompt
    - A textual description of the desired transformation or result, used to guide the model in understanding and manipulating the visual content.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - A textual description of elements or results that are not desired, helping to steer the model away from certain transformation directions.
    - Comfy dtype: STRING
    - Python dtype: str
- model_path
    - The model path used for transformation, determining the specific capabilities and characteristics of the transformation process.
    - Comfy dtype: STRING
    - Python dtype: str
- strength
    - Controls the strength of the transformation, allowing fine-tuning of how closely the visual output aligns with the prompt.
    - Comfy dtype: FLOAT
    - Python dtype: float
- num_inference_steps
    - Determines the number of steps the model takes to perform the transformation, affecting the quality and detail of the output.
    - Comfy dtype: INT
    - Python dtype: int
- guidance_scale
    - Adjusts the degree to which the prompt influences the transformation, balancing fidelity between the prompt and the original content.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed value for random number generation, ensuring reproducibility of the transformation process.
    - Comfy dtype: INT
    - Python dtype: int
- enable_forward_chunking
    - Enables or disables forward chunking, which may improve performance when processing large video frames.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- enable_vae_slicing
    - Enables or disables VAE slicing, which may affect the model's efficiency and output quality.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image
    - The transformed video frames, representing the visual content after the specified transformation has been applied.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/modelscope/modelscope)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
