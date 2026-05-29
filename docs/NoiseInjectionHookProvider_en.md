# Documentation
- Class name: NoiseInjectionHookProvider
- Category: ImpactPack/Upscale
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The NoiseInjectionHookProvider node injects noise into the image generation process, enabling the creation of variations or "un-sampling" of images. It provides a simple schedule to control the noise injection process and handles both CPU and GPU sources. This node is essential for workflows requiring fine-grained control over noise, such as generating subtle variations or reconstructing images with specific noise characteristics.

# Input types
## Required
- schedule_for_iteration
    - The schedule_for_iteration parameter determines the noise injection schedule, which is critical for consistently applying noise across iterations. It is a key factor in the node's ability to generate variations or "un-sample" images.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- source
    - The source parameter specifies whether noise generation should use the CPU or GPU. This choice can significantly impact the performance and efficiency of the noise injection process.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- seed
    - The seed parameter initializes the noise generation process, ensuring that noise patterns are reproducible. It plays a vital role in maintaining consistency across different runs of the node.
    - Comfy dtype: INT
    - Python dtype: int
- start_strength
    - The start_strength parameter sets the initial strength of the noise to be injected. It is a key factor in determining the degree of variation or "un-sampling" that will be achieved.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_strength
    - The end_strength parameter defines the final strength of the noise at the end of the injection process. It works in conjunction with start_strength to create a gradient of noise strength throughout the process.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- hook
    - The hook output provides a way to integrate the noise injection functionality into larger image generation workflows. It encapsulates the settings and behavior defined by the node, allowing seamless application within broader pipelines.
    - Comfy dtype: PK_HOOK
    - Python dtype: PixelKSampleHook

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
