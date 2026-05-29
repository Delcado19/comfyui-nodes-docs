
# Documentation
- Class name: ttN pipeKSamplerAdvanced
- Category: ttN/legacy
- Output node: True

ttN pipeKSamplerAdvanced node enhances the sampling process in the sampling pipeline by introducing advanced techniques and parameters. It aims to provide greater control and flexibility over the generation process, allowing custom sampling strategies that adapt to various needs and scenarios.

# Input types
## Required
- pipe
    - Unknown
    - Comfy dtype: PIPE_LINE
    - Python dtype: unknown
- lora_name
    - Define the LoRA (Low-Rank Adaptation) model name to use, enhancing the sampling process through specific model adaptation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lora_model_strength
    - Specify the intensity of LoRA adaptation applied to model adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_clip_strength
    - Determine the strength of clip adjustments applied via LoRA adaptation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- upscale_method
    - Indicate the method used for image upscaling during sampling, affecting image quality and resolution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- factor
    - Define the upscaling factor, directly influencing the output image size.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crop
    - Specify whether and how to crop the output image, affecting the final composition.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sampler_state
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- add_noise
    - Indicate whether to add noise during sampling, affecting the texture and detail of the generated image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- steps
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown
- cfg
    - Unknown
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- sampler_name
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- scheduler
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- start_at_step
    - Define the starting step of the sampling process, allowing control over the initial state of generation.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - Set the ending step of the sampling process, determining when generation stops.
    - Comfy dtype: INT
    - Python dtype: int
- return_with_leftover_noise
    - Specify whether the output includes residual noise, affecting the final image texture and detail.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- image_output
    - Indicate the format or destination of the generated image, affecting how and where the output is saved.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- save_prefix
    - Define the prefix for the saved file name to organize outputs consistently.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- noise_seed
    - Set the seed for noise generation, ensuring reproducibility of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- optional_model
    - Allow specifying an alternative model for sampling, providing flexibility in model usage.
    - Comfy dtype: MODEL
    - Python dtype: str
- optional_positive
    - Allow including additional positive conditions to refine generation toward desired attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- optional_negative
    - Allow adding negative conditions to steer generation away from certain attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- optional_latent
    - Provide an option to include a specific latent space configuration, influencing the generation starting point.
    - Comfy dtype: LATENT
    - Python dtype: str
- optional_vae
    - Allow using an alternative VAE model, affecting encoding and decoding.
    - Comfy dtype: VAE
    - Python dtype: str
- optional_clip
    - Allow specifying an alternative CLIP model, affecting alignment between text and image features.
    - Comfy dtype: CLIP
    - Python dtype: str
- xyPlot
    - Specify the configuration for XY data plotting, possibly used to visualize various aspects of the sampling process.
    - Comfy dtype: XYPLOT
    - Python dtype: str

# Output types
- pipe
    - Pipeline configuration modified after applying advanced sampling techniques.
    - Comfy dtype: PIPE_LINE
    - Python dtype: object
- model
    - Model used or modified during the advanced sampling process.
    - Comfy dtype: MODEL
    - Python dtype: str
- positive
    - Positive condition factors applied or generated during sampling.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - Negative conditioning factors applied or generated during the sampling process.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- latent
    - Latent space configurations produced by the sampling process.
    - Comfy dtype: LATENT
    - Python dtype: str
- vae
    - VAE model used or modified during the sampling process.
    - Comfy dtype: VAE
    - Python dtype: str
- clip
    - CLIP model used or modified during the sampling process.
    - Comfy dtype: CLIP
    - Python dtype: str
- image
    - Final image output generated by the advanced sampling process.
    - Comfy dtype: IMAGE
    - Python dtype: str
- seed
    - Seed used during the sampling process, affecting reproducibility.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ttN_pipeKSamplerAdvanced:
    version = '1.0.5'
    upscale_methods = ["None", "nearest-exact", "bilinear", "area", "bicubic", "lanczos", "bislerp"]
    crop_methods = ["disabled", "center"]

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {"required":
                {"pipe": ("PIPE_LINE",),

                "lora_name": (["None"] + folder_paths.get_filename_list("loras"),),
                "lora_model_strength": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01}),
                "lora_clip_strength": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01}),

                "upscale_method": (cls.upscale_methods,),
                "factor": ("FLOAT", {"default": 2, "min": 0.0, "max": 10.0, "step": 0.25}),
                "crop": (cls.crop_methods,),
                "sampler_state": (["Sample", "Hold"], ),

                "add_noise": (["enable", "disable"], ),

                "steps": ("INT", {"default": 20, "min": 1, "max": 10000}),
                "cfg": ("FLOAT", {"default": 8.0, "min": 0.0, "max": 100.0}),
                "sampler_name": (comfy.samplers.KSampler.SAMPLERS,),
                "scheduler": (comfy.samplers.KSampler.SCHEDULERS,),

                "start_at_step": ("INT", {"default": 0, "min": 0, "max": 10000}),
                "end_at_step": ("INT", {"default": 10000, "min": 0, "max": 10000}),
                "return_with_leftover_noise": (["disable", "enable"], ),

                "image_output": (["Hide", "Preview", "Save", "Hide/Save"],),
                "save_prefix": ("STRING", {"default": "ComfyUI"})
                },
                "optional": 
                {"noise_seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                 "optional_model": ("MODEL",),
                 "optional_positive": ("CONDITIONING",),
                 "optional_negative": ("CONDITIONING",),
                 "optional_latent": ("LATENT",),
                 "optional_vae": ("VAE",),
                 "optional_clip": ("CLIP",),
                 "xyPlot": ("XYPLOT",),
                },
                "hidden":
                {"prompt": "PROMPT", "extra_pnginfo": "EXTRA_PNGINFO", "my_unique_id": "UNIQUE_ID",
                 "embeddingsList": (folder_paths.get_filename_list("embeddings"),),
                 "ttNnodeVersion": ttN_pipeKSamplerAdvanced.version},
        }

    RETURN_TYPES = ("PIPE_LINE", "MODEL", "CONDITIONING", "CONDITIONING", "LATENT", "VAE", "CLIP", "IMAGE", "INT",)
    RETURN_NAMES = ("pipe", "model", "positive", "negative", "latent","vae", "clip", "image", "seed", )
    OUTPUT_NODE = True
    FUNCTION = "sample"
    CATEGORY = "ttN/legacy"

    def sample(self, pipe,
               lora_name, lora_model_strength, lora_clip_strength,
               sampler_state, add_noise, steps, cfg, sampler_name, scheduler, image_output, save_prefix, denoise=1.0, 
               noise_seed=None, optional_model=None, optional_positive=None, optional_negative=None, optional_latent=None, optional_vae=None, optional_clip=None, xyPlot=None, upscale_method=None, factor=None, crop=None, prompt=None, extra_pnginfo=None, my_unique_id=None, start_at_step=None, end_at_step=None, return_with_leftover_noise=False):
        
        force_full_denoise = True
        if return_with_leftover_noise == "enable":
            force_full_denoise = False

        disable_noise = False
        if add_noise == "disable":
            disable_noise = True
            
        out = ttN_TSC_pipeKSampler.sample(self, pipe, lora_name, lora_model_strength, lora_clip_strength, sampler_state, steps, cfg, sampler_name, scheduler, image_output, save_prefix, denoise, 
               optional_model, optional_positive, optional_negative, optional_latent, optional_vae, optional_clip, noise_seed, xyPlot, upscale_method, factor, crop, prompt, extra_pnginfo, my_unique_id, start_at_step, end_at_step, force_full_denoise, disable_noise)

        return out 

```
