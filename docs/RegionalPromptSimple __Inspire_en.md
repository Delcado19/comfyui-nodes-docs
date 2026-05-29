
# Documentation
- Class name: RegionalPromptSimple __Inspire
- Category: InspirePack/Regional
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack

The RegionalPromptSimple node generates regional prompts based on a given base pipeline configuration and mask. It utilizes the fundamental components of a generative model pipeline, including model, clip, and VAE settings, along with positive and negative prompts, to create new prompts targeting specific regions. This node is essential for tasks requiring precise prompt generation within specific areas of an image, enabling users to exert more precise control over the generation process.

# Input types
## Required
- basic_pipe
    - Represents the foundational components of the generative model pipeline, including model, clip, VAE, and positive and negative prompts. It defines the basis for regional prompt generation.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[torch.nn.Module, torch.nn.Module, torch.nn.Module, List[Tuple[str, Dict]], List[Tuple[str, Dict]]]
- mask
    - A binary mask used to specify the region of interest in the image. It plays a critical role in determining where the regional prompt is applied, allowing for targeted prompt generation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- cfg
    - Configuration settings for the generative model, influencing the detail and quality of the generated prompts.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Specifies the sampling method used during generation, affecting the diversity and quality of the output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Determines the scheduling algorithm for the generative model, affecting the progression and variation of the generated prompts.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- wildcard_prompt
    - An optional prompt that can be dynamically inserted into the generation process, providing flexibility and creativity in prompt design.
    - Comfy dtype: STRING
    - Python dtype: str
- controlnet_in_pipe
    - A boolean flag indicating whether to retain or overwrite existing control settings in the pipeline, affecting the influence of control mechanisms on the generation process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- sigma_factor
    - A scaling factor for the noise level during the sampling process, allowing fine-tuning of the randomness and variability in prompt generation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- regional_prompts
    - The generated regional prompt, customized for the specified region of interest in the image, enabling precise and targeted control over content generation.
    - Comfy dtype: REGIONAL_PROMPTS
    - Python dtype: List[Tuple[str, Dict]]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class RegionalPromptSimple:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "basic_pipe": ("BASIC_PIPE",),
                "mask": ("MASK",),
                "cfg": ("FLOAT", {"default": 8.0, "min": 0.0, "max": 100.0}),
                "sampler_name": (comfy.samplers.KSampler.SAMPLERS,),
                "scheduler": (common.SCHEDULERS,),
                "wildcard_prompt": ("STRING", {"multiline": True, "dynamicPrompts": False, "placeholder": "wildcard prompt"}),
                "controlnet_in_pipe": ("BOOLEAN", {"default": False, "label_on": "Keep", "label_off": "Override"}),
                "sigma_factor": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.01}),
            },
        }

    RETURN_TYPES = ("REGIONAL_PROMPTS", )
    FUNCTION = "doit"

    CATEGORY = "InspirePack/Regional"

    def doit(self, basic_pipe, mask, cfg, sampler_name, scheduler, wildcard_prompt, controlnet_in_pipe=False, sigma_factor=1.0):
        if 'RegionalPrompt' not in nodes.NODE_CLASS_MAPPINGS:
            utils.try_install_custom_node('https://github.com/ltdrdata/ComfyUI-Impact-Pack',
                                          "To use 'RegionalPromptSimple' node, 'Impact Pack' extension is required.")
            raise Exception(f"[ERROR] To use RegionalPromptSimple, you need to install 'ComfyUI-Impact-Pack'")

        model, clip, vae, positive, negative = basic_pipe

        iwe = nodes.NODE_CLASS_MAPPINGS['ImpactWildcardEncode']()
        kap = nodes.NODE_CLASS_MAPPINGS['KSamplerAdvancedProvider']()
        rp = nodes.NODE_CLASS_MAPPINGS['RegionalPrompt']()

        if wildcard_prompt != "":
            model, clip, new_positive, _ = iwe.doit(model=model, clip=clip, populated_text=wildcard_prompt)

            if controlnet_in_pipe:
                prev_cnet = None
                for t in positive:
                    if 'control' in t[1] and 'control_apply_to_uncond' in t[1]:
                        prev_cnet = t[1]['control'], t[1]['control_apply_to_uncond']
                        break

                if prev_cnet is not None:
                    for t in new_positive:
                        t[1]['control'] = prev_cnet[0]
                        t[1]['control_apply_to_uncond'] = prev_cnet[1]

        else:
            new_positive = positive

        basic_pipe = model, clip, vae, new_positive, negative

        sampler = kap.doit(cfg, sampler_name, scheduler, basic_pipe, sigma_factor=sigma_factor)[0]
        regional_prompts = rp.doit(mask, sampler)[0]

        return (regional_prompts, )

```
