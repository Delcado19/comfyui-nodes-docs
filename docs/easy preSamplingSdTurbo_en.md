# Documentation
- Class name: sdTurboSettings
- Category: EasyUse/PreSampling
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The sdTurboSettings node simplifies the sampling process by configuring a series of parameters that enhance sample quality and controllability. It is designed to integrate seamlessly with the sampling pipeline, offering a wide range of options to meet different creative needs and computational constraints.

# Input types
## Required
- pipe
    - The pipe parameter is the backbone of the node, encapsulating the entire sampling pipeline and its associated data. It is essential for the correct operation of the node and the integrity of the sampling process.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- steps
    - The steps parameter determines the number of iterations the sampling process will undergo, directly affecting the depth and diversity of the generated samples. This is a critical factor in achieving the desired results.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter adjusts the model's configuration, fine-tuning the sampling process to produce samples that meet user expectations. It plays a key role in the overall quality of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter selects the sampling method from predefined options, each offering unique characteristics and advantages. It is crucial in shaping the creative direction and computational efficiency of the node.
    - Comfy dtype: COMBO
    - Python dtype: str
- eta
    - The eta parameter influences the noise level during the sampling process, affecting the clarity and detail of the generated images. It is a key control for achieving a balance between quality and computational efficiency.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s_noise
    - The s_noise parameter adjusts the signal-to-noise ratio, which is essential for ensuring the fidelity of the generated samples. It helps maintain high standards of output quality.
    - Comfy dtype: FLOAT
    - Python dtype: float
- upscale_ratio
    - The upscale_ratio parameter determines the scaling factor for the generated images, which is crucial for achieving the desired resolution and visual impact. It significantly affects the final presentation of the samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_step
    - The start_step parameter sets the initial point at which the sampling process begins, influencing the progression and development of the samples. It is important for controlling the overall sampling trajectory.
    - Comfy dtype: INT
    - Python dtype: int
- end_step
    - The end_step parameter defines the final point at which the sampling process ends, affecting the duration and completeness of the samples. It is crucial for managing the sampling timeline.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_n_step
    - The upscale_n_step parameter specifies the number of steps for image upscaling, which is essential for achieving high-resolution results without compromising quality. It plays a key role in the enhancement of the final output.
    - Comfy dtype: INT
    - Python dtype: int
- unsharp_kernel_size
    - The unsharp_kernel_size parameter adjusts the kernel size of the sharpening mask, which is essential for enhancing the sharpness and clarity of the images. It significantly improves the visual quality of the output.
    - Comfy dtype: INT
    - Python dtype: int
- unsharp_sigma
    - The unsharp_sigma parameter controls the sigma value of the sharpening mask, influencing the degree of sharpness enhancement. It is an important factor in achieving the desired visual effects.
    - Comfy dtype: FLOAT
    - Python dtype: float
- unsharp_strength
    - The unsharp_strength parameter determines the intensity of the sharpening mask effect, affecting the overall sharpness and detail of the images. It is crucial for fine-tuning the visual appeal of the samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed parameter ensures the reproducibility of the sampling process by providing a fixed point for random number generation. It is essential for obtaining consistent results across different runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- pipe
    - The output pipe is an updated version of the input pipe, now equipped with the configured settings and ready to proceed to the next stage of the sampling process. It is crucial for the continuity and progression of the pipeline.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
