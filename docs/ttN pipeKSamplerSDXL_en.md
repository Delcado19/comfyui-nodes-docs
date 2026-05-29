
# Documentation
- Class name: ttN pipeKSamplerSDXL
- Category: ttN/legacy
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ttN_pipeKSamplerSDXL node is designed for advanced image sampling, utilizing complex pipelines to enhance image generation with specific configurations and improvements. The node integrates various components such as LoRA adjustments, noise control, and optional model inputs to customize the image generation process, aiming to produce high-quality images with finely tuned characteristics.

# Input types
## Required
- sdxl_pipe
    - Represents the current state of the sampling pipeline, including configurations and intermediate results, which is crucial for continuing or adjusting the image generation process.
    - Comfy dtype: PIPE_LINE_SDXL
    - Python dtype: dict
- upscale_method
    - Specifies the method used for image upscaling, affecting the resolution and quality of the output image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- factor
    - Determines the scaling factor for upscaling, directly impacting the final image size and level of detail.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crop
    - Defines the cropping parameters applied to the generated image, adjusting composition and focal areas.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sampler_state
    - Indicates the current state of the sampler, guiding the flow of the sampling process and determining the next steps.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- base_steps
    - Specifies the number of steps for the basic sampling process, affecting the detail and quality of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- refiner_steps
    - Determines the number of steps for the refinement process, enhancing the final image quality through additional adjustments.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Controls the CFG (Classifier-Free Guidance) scale, influencing adherence to input prompts and overall image quality.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Identifies the specific sampler algorithm to be used, affecting sampling behavior and output characteristics.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Specifies the scheduler that controls the sampling process, influencing progression and adjustments during image generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- image_output
    - Determines the output format and handling of generated images, including saving and display options.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- save_prefix
    - Sets the prefix for saved image files, used for organizing and identifying outputs.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- seed
    - Provides a seed for the random number generator, ensuring reproducibility of generated images.
    - Comfy dtype: INT
    - Python dtype: int
- optional_model
    - Allows specifying an alternative model for image generation, providing flexibility in the sampling process.
    - Comfy dtype: MODEL
    - Python dtype: str
- optional_positive
    - Allows using alternative positive prompts, adjusting the thematic direction of generated images.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- optional_negative
    - Allows specifying alternative negative prompts, refining avoidance criteria in image generation.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- optional_vae
    - Provides the option to use an alternative VAE model, affecting image encoding and decoding.
    - Comfy dtype: VAE
    - Python dtype: str
- optional_refiner_model
    - Allows using a different model to refine the generated image, enhancing the final output quality.
    - Comfy dtype: MODEL
    - Python dtype: str
- optional_refiner_positive
    - Allows using alternative positive prompts during the refinement process, further guiding image enhancement.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- optional_refiner_negative
    - Allows specifying alternative negative prompts during the refinement process, fine-tuning avoidance criteria.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- optional_refiner_vae
    - Unknown
    - Comfy dtype: VAE
    - Python dtype: unknown
- optional_latent
    - Provides the option to specify an alternative latent representation, affecting the starting point of the generation process.
    - Comfy dtype: LATENT
    - Python dtype: str
- optional_clip
    - Allows using an alternative CLIP model, influencing alignment between text prompts and generated images.
    - Comfy dtype: CLIP
    - Python dtype: str

# Output types
- sdxl_pipe
    - Outputs the updated sampling pipeline state, including any changes or results from the current sampling operation.
    - Comfy dtype: PIPE_LINE_SDXL
    - Python dtype: dict
- model
    - Returns the model used in the sampling process, possibly updated or changed based on optional inputs.
    - Comfy dtype: MODEL
    - Python dtype: str
- positive
    - Provides the positive prompt used in image generation, reflecting any optional adjustments.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - Returns the negative prompt guiding image generation to avoid the default.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- vae
    - Outputs the VAE model involved in encoding and decoding images during the sampling process.
    - Comfy dtype: VAE
    - Python dtype: str
- refiner_model
    - Provides the model used for refining the generated image, possibly updated or changed based on optional inputs.
    - Comfy dtype: MODEL
    - Python dtype: str
- refiner_positive
    - Returns the positive prompt used in the refinement process, reflecting any optional adjustments.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- refiner_negative
    - Provides the negative prompt used in the refinement process, guiding avoidance of the default.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- refiner_vae
    - Unknown
    - Comfy dtype: VAE
    - Python dtype: unknown
- latent
    - Outputs the latent representation of the generated image, which is central to the image generation and refinement process.
    - Comfy dtype: LATENT
    - Python dtype: str
- clip
    - Returns the CLIP model used for aligning text prompts with generated images, possibly updated based on optional inputs.
    - Comfy dtype: CLIP
    - Python dtype: str
- image
    - Provides the final generated image, showing the results of the sampling and refinement process.
    - Comfy dtype: IMAGE
    - Python dtype: str
- seed
    - Outputs the seed used in the random number generator, ensuring reproducibility of the generated image.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ttN_pipeKSamplerSDXL:
    version = '1.0.2'
    upscale_methods = ["None", "nearest-exact", "bilinear", "area", "bicubic", "lanczos", "bislerp"]
    crop_methods = ["disabled", "center"]

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {"required":
                    {"sdxl_pipe": ("PIPE_LINE_SDXL",),

                    "upscale_method": (cls.upscale_methods,),
                    "factor": ("FLOAT", {"default": 2, "min": 0.0, "max": 10.0, "step": 0.25}),
                    "crop": (cls.crop_methods,),
                    "sampler_state": (["Sample", "Hold"], ),

                    "base_steps": ("INT", {"default": 20, "min": 1, "max": 10000}),
                    "refiner_steps": ("INT", {"default": 20, "min": 0, "max": 10000}),
                    "cfg": ("FLOAT", {"default": 8.0, "min": 0.0, "max": 100.0}),
                    "sampler_name": (comfy.samplers.KSampler.SAMPLERS,),
                    "scheduler": (comfy.samplers.KSampler.SCHEDULERS,),
                    "image_output": (["Hide", "Preview", "Save", "Hide/Save"],),
                    "save_prefix": ("STRING", {"default": "ComfyUI"})
                    },
                "optional": 
                    {"seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                    "optional_model": ("MODEL",),
                    "optional_positive": ("CONDITIONING",),
                    "optional_negative": ("CONDITIONING",),
                    "optional_vae": ("VAE",),
                    "optional_refiner_model": ("MODEL",),
                    "optional_refiner_positive": ("CONDITIONING",),
                    "optional_refiner_negative": ("CONDITIONING",),
                    "optional_refiner_vae": ("VAE",),
                    "optional_latent": ("LATENT",),
                    "optional_clip": ("CLIP",),
                    #"xyPlot": ("XYPLOT",),
                    },
                "hidden":
                    {"prompt": "PROMPT", "extra_pnginfo": "EXTRA_PNGINFO", "my_unique_id": "UNIQUE_ID",
                    "embeddingsList": (folder_paths.get_filename_list("embeddings"),),
                    "ttNnodeVersion": ttN_pipeKSamplerSDXL.version
                    },
        }

    RETURN_TYPES = ("PIPE_LINE_SDXL", "MODEL", "CONDITIONING", "CONDITIONING", "VAE", "MODEL", "CONDITIONING", "CONDITIONING", "VAE", "LATENT", "CLIP", "IMAGE", "INT",)
    RETURN_NAMES = ("sdxl_pipe", "model", "positive", "negative" ,"vae", "refiner_model", "refiner_positive", "refiner_negative" ,"refiner_vae", "latent", "clip", "image", "seed", )
    OUTPUT_NODE = True
    FUNCTION = "sample"
    CATEGORY = "ttN/legacy"

    def sample(self, sdxl_pipe, sampler_state,
               base_steps, refiner_steps, cfg, sampler_name, scheduler, image_output, save_prefix, denoise=1.0, 
               optional_model=None, optional_positive=None, optional_negative=None, optional_latent=None, optional_vae=None, optional_clip=None,
               optional_refiner_model=None, optional_refiner_positive=None, optional_refiner_negative=None, optional_refiner_vae=None,
               seed=None, xyPlot=None, upscale_method=None, factor=None, crop=None, prompt=None, extra_pnginfo=None, my_unique_id=None,
               start_step=None, last_step=None, force_full_denoise=False, disable_noise=False):
        
        sdxl_pipe = {**sdxl_pipe}

        # Clean Loader Models from Global
        loader.update_loaded_objects(prompt)

        my_unique_id = int(my_unique_id)

        ttN_save = ttNsave(my_unique_id, prompt, extra_pnginfo)

        sdxl_samples = optional_latent if optional_latent is not None else sdxl_pipe["samples"]

        sdxl_model = optional_model if optional_model is not None else sdxl_pipe["model"]
        sdxl_positive = optional_positive if optional_positive is not None else sdxl_pipe["positive"]
        sdxl_negative = optional_negative if optional_negative is not None else sdxl_pipe["negative"]
        sdxl_vae = optional_vae if optional_vae is not None else sdxl_pipe["vae"]
        sdxl_clip = optional_clip if optional_clip is not None else sdxl_pipe["clip"]
        sdxl_refiner_model = optional_refiner_model if optional_refiner_model is not None else sdxl_pipe["refiner_model"]
        sdxl_refiner_positive = optional_refiner_positive if optional_refiner_positive is not None else sdxl_pipe["refiner_positive"]
        sdxl_refiner_negative = optional_refiner_negative if optional_refiner_negative is not None else sdxl_pipe["refiner_negative"]
        sdxl_refiner_vae = optional_refiner_vae if optional_refiner_vae is not None else sdxl_pipe["refiner_vae"]
        sdxl_refiner_clip = sdxl_pipe["refiner_clip"]

        if seed in (None, 'undefined'):
            sdxl_seed = sdxl_pipe["seed"]
        else:
            sdxl_seed = seed      

        def process_sample_state(sdxl_pipe, sdxl_samples, sdxl_model, sdxl_positive, sdxl_negative, sdxl_vae, sdxl_clip, sdxl_seed,
                                 sdxl_refiner_model, sdxl_refiner_positive, sdxl_refiner_negative, sdxl_refiner_vae, sdxl_refiner_clip,
                                 base_steps, refiner_steps, cfg, sampler_name, scheduler, denoise,
                                 image_output, save_prefix, prompt, my_unique_id, preview_latent, disable_noise=disable_noise):
            
            total_steps = base_steps + refiner_steps

            # Upscale samples if enabled
            sdxl_samples = sampler.handle_upscale(sdxl_samples, upscale_method, factor, crop)


            if (refiner_steps > 0) and (sdxl_refiner_model not in [None, "None"]):
                # Base Sample
                sdxl_samples = sampler.common_ksampler(sdxl_model, sdxl_seed, total_steps, cfg, sampler_name, scheduler, sdxl_positive, sdxl_negative, sdxl_samples,
                                                       denoise=denoise, preview_latent=preview_latent, start_step=0, last_step=base_steps, force_full_denoise=force_full_denoise, disable_noise=disable_noise)

                # Refiner Sample
                sdxl_samples = sampler.common_ksampler(sdxl_refiner_model, sdxl_seed, total_steps, cfg, sampler_name, scheduler, sdxl_refiner_positive, sdxl_refiner_negative, sdxl_samples,
                                                       denoise=denoise, preview_latent=preview_latent, start_step=base_steps, last_step=10000, force_full_denoise=True, disable_noise=True)
                
                latent = sdxl_samples["samples"]
                sdxl_images = sdxl_refiner_vae.decode(latent)
                del latent
            else:
                sdxl_samples = sampler.common_ksampler(sdxl_model, sdxl_seed, base_steps, cfg, sampler_name, scheduler, sdxl_positive, sdxl_negative, sdxl_samples,
                                                       denoise=denoise, preview_latent=preview_latent, start_step=0, last_step=base_steps, force_full_denoise=True, disable_noise=disable_noise)

                latent = sdxl_samples["samples"]
                sdxl_images = sdxl_vae.decode(latent)
                del latent

            results = ttN_save.images(sdxl_images, save_prefix, image_output)

            sampler.update_value_by_id("results", my_unique_id, results)

            # Clean loaded_objects
            loader.update_loaded_objects(prompt)

            new_sdxl_pipe = {"model": sdxl_model,
                "positive": sdxl_positive,
                "negative": sdxl_negative,
                "vae": sdxl_vae,
                "clip": sdxl_clip,

                "refiner_model": sdxl_refiner_model,
                "refiner_positive": sdxl_refiner_positive,
                "refiner_negative": sdxl_refiner_negative,
                "refiner_vae": sdxl_refiner_vae,
                "refiner_clip": sdxl_refiner_clip,

                "samples": sdxl_samples,
                "images": sdxl_images,
                "seed": sdxl_seed,
 
                "loader_settings": sdxl_pipe["loader_settings"],
            }
            
            del sdxl_pipe

            sampler.update_value_by_id("pipe_line", my_unique_id, new_sdxl_pipe)
            
            if image_output in ("Hide", "Hide/Save"):
                return sampler.get_output_sdxl(new_sdxl_pipe)
                        
            return {"ui": {"images": results},
                    "result": sampler.get_output_sdxl(new_sdxl_pipe)}

        def process_hold_state(sdxl_pipe, image_output, my_unique_id):
            ttNl('Held').t(f'pipeKSamplerSDXL[{my_unique_id}]').p()

            last_pipe = sampler.init_state(my_unique_id, "pipe_line", sdxl_pipe)

            last_results = sampler.init_state(my_unique_id, "results", list())

            if image_output in ("Hide", "Hide/Save"):
                return sampler.get_output_sdxl(last_pipe)

            return {"ui": {"images": last_results}, "result": sampler.get_output_sdxl(last_pipe)} 
        
        preview_latent = True
        if image_output in ("Hide", "Hide/Save"):
            preview_latent = False

        if sampler_state == "Sample" and xyPlot is None:
            return process_sample_state(sdxl_pipe, sdxl_samples, sdxl_model, sdxl_positive, sdxl_negative, sdxl_vae, sdxl_clip, sdxl_seed,
                                        sdxl_refiner_model, sdxl_refiner_positive, sdxl_refiner_negative, sdxl_refiner_vae, sdxl_refiner_clip, base_steps, refiner_steps, cfg, sampler_name, scheduler, denoise, image_output, save_prefix, prompt, my_unique_id, preview_latent)

        #elif sampler_state == "Sample" and xyPlot is not None:
        #    return process_xyPlot(sdxl_pipe, lora_name, lora_model_strength, lora_clip_strength, steps, cfg, sampler_name, scheduler, denoise, image_output, save_prefix, prompt, extra_pnginfo, my_unique_id, preview_latent, xyPlot)

        elif sampler_state == "Hold":
            return process_hold_state(sdxl_pipe, image_output, my_unique_id)

```
