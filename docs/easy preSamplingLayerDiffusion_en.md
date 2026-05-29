# Documentation
- Class name: layerDiffusionSettings
- Category: EasyUse/PreSampling
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node is used to customize layer diffusion settings in the neural network pipeline, allowing users to define methods of inter-layer interaction and various parameters affecting the generation process.

# Input types
## Required
- pipe
    - The 'pipe' parameter serves as the main input, passing necessary data and settings through the node. It is crucial for the correct operation of the node, ensuring that subsequent actions are executed in the right context.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict
- method
    - The 'method' parameter determines the method of layer diffusion, which is the core of node operation. It decides how different layers of the model interact and contribute to the final output.
    - Comfy dtype: COMBO[LayerMethod]
    - Python dtype: Enum[LayerMethod]
- weight
    - The 'weight' parameter adjusts the influence of the layer diffusion process. It plays an important role in fine-tuning the balance of contributions from different layers to the generation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- steps
    - The 'steps' parameter defines the number of iterations the layer diffusion process will undergo. It is critical in controlling the depth and granularity of inter-layer interactions.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The 'cfg' parameter sets the configuration value for the layer diffusion process, which is essential for adjusting the behavior of the model and achieving desired results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The 'sampler_name' parameter specifies the sampling method used in the layer diffusion process, which is crucial for the diversity and quality of generated results.
    - Comfy dtype: COMBO[comfy.samplers.KSampler.SAMPLERS]
    - Python dtype: Enum[comfy.samplers.KSampler.SAMPLERS]
- scheduler
    - The 'scheduler' parameter determines the scheduling strategy for the layer diffusion process, which is important for managing computational resources and achieving efficient execution.
    - Comfy dtype: COMBO[comfy.samplers.KSampler.SCHEDULERS]
    - Python dtype: Enum[comfy.samplers.KSampler.SCHEDULERS]
- denoise
    - The 'denoise' parameter controls the level of denoising applied during the layer diffusion process. It plays a significant role in the quality of the final output by affecting the clarity and detail of the generated content.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The 'seed' parameter introduces randomness in the layer diffusion process. It is important for ensuring non-repetitive results and providing a variety of possible outcomes.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- image
    - The 'image' parameter provides the visual input for the layer diffusion process. It is important in determining the content and context of the generated output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or np.ndarray
- blended_image
    - The 'blended_image' parameter is used to blend different layers or elements into the final output. It contributes to the complexity and richness of the generated visuals.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or np.ndarray
- mask
    - The 'mask' parameter is used to define areas of the image that should be preserved or manipulated during the layer diffusion process. It is essential for inpainting and selective editing tasks.
    - Comfy dtype: MASK
    - Python dtype: PIL.Image or np.ndarray
- prompt
    - The 'prompt' parameter provides text guidance for the layer diffusion process, influencing the thematic direction and style of the generated content.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The 'extra_pnginfo' parameter contains additional information related to the image, which can be used to refine the layer diffusion process and achieve more precise results.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: str
- my_unique_id
    - The 'my_unique_id' parameter is used to track and manage the unique identity of the layer diffusion process, ensuring traceability and personalization of results.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- pipe
    - The 'pipe' output is an updated version of the input, containing the results of the layer diffusion process and settings adjusted for further pipeline operations.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
