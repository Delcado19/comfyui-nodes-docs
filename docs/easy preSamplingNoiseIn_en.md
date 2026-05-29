# Documentation
- Class name: samplerSettingsNoiseIn
- Category: EasyUse/PreSampling
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node is designed to configure and apply noise settings for the sampling process, which can enhance the diversity and quality of generated samples. It allows adjusting noise factors and schedules, helping achieve a more refined and controllable generation workflow.

# Input types
## Required
- pipe
    - The 'pipe' parameter is essential because it carries the necessary information about the model and samples being processed. It is the backbone of the node's operation, facilitating the data flow required for applying noise and subsequent sampling steps.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- factor
    - The 'factor' parameter is crucial in determining the degree of noise introduced during the sampling process. It directly affects the balance between original noise and varied noise, thereby influencing the diversity and consistency of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- steps
    - The 'steps' parameter defines the number of iterations the sampling process will undergo. It is important because it determines the complexity and depth of sampling, with more steps potentially leading to more refined results.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The 'cfg' parameter is used to fine-tune the configuration of the sampling process. It plays a role in adjusting the overall behavior of the node, ensuring sampling proceeds according to the desired specifications.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The 'sampler_name' parameter is crucial in selecting the appropriate sampling method. It influences the strategy employed when generating samples, with different samplers offering different approaches to noise application and sample diversity.
    - Comfy dtype: COMBO
    - Python dtype: str
- scheduler
    - The 'scheduler' parameter is important in managing the application of noise across sampling steps. It helps control the rate at which noise is introduced, ensuring smooth transitions from one stage of the sampling process to the next.
    - Comfy dtype: COMBO
    - Python dtype: str
- denoise
    - The 'denoise' parameter is responsible for specifying the level of denoising to be applied. It affects the clarity and sharpness of generated samples, with higher values resulting in clearer outputs.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The 'seed' parameter is essential for ensuring reproducibility in the sampling process. It initializes the random number generator, allowing consistent results when using the same settings across different runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- pipe
    - The 'pipe' output is a modified version of the input 'pipe', now containing adjusted noise settings and generated samples. It is the result of the node's processing, encapsulating the enhanced sampling data for further use.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
