# Documentation
- Class name: UnsamplerHookProvider
- Category: ImpactPack/Upscale
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The UnsamplerHookProvider node aims to enhance the upscaling process by applying an unsampler hook during image generation. It dynamically adjusts the sampling strategy based on the current step in the upscaling process, allowing fine-tuning of image quality. This node plays a critical role in image enhancement workflows by leveraging the power of dynamic sampling techniques to ensure the highest quality final output.

# Input types
## Required
- model
    - The model parameter is essential for the UnsamplerHookProvider node, as it defines the model to be used for image upscaling. The choice of model significantly affects the node's execution and the quality of the generated images.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
## Optional
- steps
    - The steps parameter determines the number of steps taken during the upscaling process. It is a key factor controlling the level of detail and the total execution time of the node.
    - Comfy dtype: INT
    - Python dtype: int
- start_end_at_step
    - The start_end_at_step parameter specifies the starting step at which the unsampler hook operation begins. It is important for defining the initial conditions under which the unsampler hook starts influencing the upscaling process.
    - Comfy dtype: INT
    - Python dtype: int
- end_end_at_step
    - The end_end_at_step parameter marks the final step at which the unsampler hook ceases operation. It is a critical parameter for setting the endpoint of the unsampler hook's influence on the upscaling process.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter is used to configure the settings of the unsampler hook. It plays an important role in customizing the upscaling process to meet specific quality requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter identifies the sampling method to be used by the unsampler hook. It is a key component in determining the sampling strategy during the upscaling process.
    - Comfy dtype: STRING
    - Python dtype: str
- scheduler
    - The scheduler parameter determines the scheduling strategy for the unsampler hook operation. It is crucial for managing the timing and order of sampling steps during the upscaling process.
    - Comfy dtype: STRING
    - Python dtype: str
- normalize
    - The normalize parameter indicates whether the input data should be normalized before processing. It affects the node's execution by potentially altering the scaling of input values.
    - Comfy dtype: STRING
    - Python dtype: str
- positive
    - The positive parameter provides positive conditioning data to the unsampler hook, influencing the upscaling process toward desired results.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- negative
    - The negative parameter provides negative conditioning data to the unsampler hook, guiding the upscaling process away from undesired results.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- schedule_for_iteration
    - The schedule_for_iteration parameter specifies which scheduling strategy is used for the current upscaling process iteration. It is essential for iterating through different strategies to achieve optimal results.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- hook
    - The hook output provides the unsampler hook object configured according to the input parameters. It is important because it represents the core functionality of the node, enabling manipulation of the upscaling process.
    - Comfy dtype: PK_HOOK
    - Python dtype: PixelKSampleHook

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
