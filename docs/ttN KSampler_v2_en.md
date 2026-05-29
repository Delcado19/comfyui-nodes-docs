
# Documentation
- Class name: ttN KSampler_v2
- Category: ttN
- Output node: True

The ttN KSampler_v2 node is an advanced sampling operation tool that utilizes various techniques to generate or manipulate data based on specific input parameters. This node focuses on providing a flexible and efficient method for sampling from complex distributions, commonly used in generative model tasks.

# Input types
## Required
- model
    - Specifies the generative model used for sampling. This parameter is critical as it determines the underlying mechanism and the quality of generated samples.
    - Comfy dtype: MODEL
    - Python dtype: str
- positive
    - Provides positive condition guidance to steer sampling toward desired features or characteristics.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - Provides negative condition guidance to steer sampling away from certain features or characteristics.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- latent
    - Optionally includes a latent representation as a starting point or reference for the sampling process.
    - Comfy dtype: LATENT
    - Python dtype: str
- vae
    - Specifies the VAE model used with the generative model for sampling.
    - Comfy dtype: VAE
    - Python dtype: str
- clip
    - Specifies the CLIP model used to condition the sampling process.
    - Comfy dtype: CLIP
    - Python dtype: str
- lora_name
    - Specifies the LoRA model used to adjust the sampling process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lora_strength
    - Determines the strength of LoRA adjustments applied during the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- upscale_method
    - Specifies the method used for upscaling images during the sampling process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- upscale_model_name
    - Specifies the upscaler model name used for upscaling images during the sampling process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- factor
    - Specifies the upscaling factor for images during the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rescale
    - Determines whether and how images are rescaled during the sampling process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- percent
    - Specifies the percentage by which images are rescaled during the sampling process.
    - Comfy dtype: INT
    - Python dtype: float
- width
    - Specifies the width of the image after rescaling or cropping.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Specifies the height of the image after rescaling or cropping.
    - Comfy dtype: INT
    - Python dtype: int
- longer_side
    - Specifies the longer side dimension of the image after rescaling.
    - Comfy dtype: INT
    - Python dtype: int
- crop
    - Specifies the cropping parameters used during the sampling process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sampler_state
    - Specifies the sampler state used during the sampling process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- steps
    - Defines the number of steps to take during the sampling process, affecting the granularity and potential quality of generated samples.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Controls the conditioning factor, which can influence the direction and space of the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Determines the specific sampling algorithm to use, affecting the efficiency and characteristics of sampling.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Selects the scheduling algorithm used to control the sampling process, which can influence the convergence and quality of samples.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- denoise
    - Adjusts the denoising level applied during the sampling process, affecting the clarity and detail of generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- image_output
    - Specifies the output format of the images generated during the sampling process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- save_prefix
    - Specifies the save prefix for the images generated during the sampling process.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- seed
    - Set the initial seed for random number generation to ensure reproducibility of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- input_image_override
    - Allows input images to override the starting point of the sampling process.
    - Comfy dtype: IMAGE
    - Python dtype: str
- adv_xyPlot
    - Specifies the advanced plotting options for visualization during the sampling process.
    - Comfy dtype: ADV_XYPLOT
    - Python dtype: str

# Output types
- pipe
    - Comfy dtype: PIPE_LINE
    - Generates a comprehensive output including model configuration and sampling data, ready for further processing.
    - Python dtype: dict
- model
    - Comfy dtype: MODEL
    - Returns the model used in the sampling process, including any modifications or configurations.
    - Python dtype: str
- positive
    - Comfy dtype: CONDITIONING
    - Returns the positive conditioning parameters used in the sampling process.
    - Python dtype: str
- negative
    - Comfy dtype: CONDITIONING
    - Returns the negative conditioning parameters used in the sampling process.
    - Python dtype: str
- latent
    - Comfy dtype: LATENT
    - unknown
    - Python dtype: unknown
- vae
    - Comfy dtype: VAE
    - Returns the VAE model used in the sampling process.
    - Python dtype: str
- clip
    - Comfy dtype: CLIP
    - Returns the CLIP model used for conditioning in the sampling process.
    - Python dtype: str
- image
    - Comfy dtype: IMAGE
    - Returns the image or set of images generated from the sampling process.
    - Python dtype: str
- seed
    - Comfy dtype: INT
    - Returns the seed value used for random number generation during the sampling process.
    - Python dtype: int


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ttN_KSampler_v2:
    version = '2.0.0'
    upscale_methods = ["None",
                       "[latent] nearest-exact", "[latent] bilinear", "[latent] area", "[latent] bicubic", "[latent] lanczos", "[latent] bislerp",
                       "[hiresFix] nearest-exact", "[hiresFix] bilinear", "[hiresFix] area", "[hiresFix] bicubic", "[hiresFix] lanczos", "[hiresFix] bislerp"]
    crop_methods = ["disabled", "center"]

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {"required":
                {
                "model": ("MODEL",),
                "positive": ("CONDITIONING",),
                "negative": ("CONDITIONING",),
                "latent": ("LATENT",),
                "vae": ("VAE",),
                "clip": ("CLIP",),

                "lora_name": (["None"] + folder_paths.get_filename_list("loras"),),
                "lora_strength": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01}),

                "upscale_method": (cls.upscale_methods, {"default": "None"}),
                "upscale_model_name": (folder_paths.get_filename_list("upscale_models"),),
                "factor": ("FLOAT", {"default": 2, "min": 0.0, "max": 10.0, "step": 0.25}),
                "rescale": (["by percentage", "to Width/Height", 'to longer side - maintain aspect', 'None'],),
                "percent": ("INT", {"default": 50, "min": 0, "max": 1000, "step": 1}),
                "width": ("INT", {"default": 1024, "min": 64, "max": MAX_RESOLUTION, "step": 8}),
                "height": ("INT", {"default": 1024, "min": 64, "max": MAX_RESOLUTION, "step": 8}),
                "longer_side": ("INT", {"default": 1024, "min": 64, "max": MAX_RESOLUTION, "step": 8}),
                "crop": (cls.crop_methods,),

                "sampler_state": (["Sample", "Hold"], ),
                "steps": ("INT", {"default": 20, "min": 1, "max": 10000}),
                "cfg": ("FLOAT", {"default": 8.0, "min": 0.0, "max": 100.0}),
                "sampler_name": (comfy.samplers.KSampler.SAMPLERS,),
                "scheduler": (comfy.samplers.KSampler.SCHEDULERS,),
                "denoise": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.01}),
                "image_output": (["Hide", "Preview", "Save", "Hide/Save", "Disabled"],),
                "save_prefix": ("STRING", {"default": "ComfyUI"})
                },
                "optional": 
                {"seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                "input_image_override": ("IMAGE",),
                "adv_xyPlot": ("ADV_XYPLOT",),
                },
                "hidden":
                {"prompt": "PROMPT", "extra_pnginfo": "EXTRA_PNGINFO", "my_unique_id": "UNIQUE_ID",
                 "embeddingsList": (folder_paths.get_filename_list("embeddings"),),
                 "lorasList": (folder_paths.get_filename_list("loras"),),
                 "ttNnodeVersion": ttN_pipeKSampler_v2.version},
        }

    RETURN_TYPES = ("PIPE_LINE", "MODEL", "CONDITIONING", "CONDITIONING", "LATENT", "VAE", "CLIP", "IMAGE", "INT",)
    RETURN_NAMES = ("pipe", "model", "positive", "negative", "latent","vae", "clip", "image", "seed", )
    OUTPUT_NODE = True
    FUNCTION = "sample"
    CATEGORY = "ttN"

    def sample( self, model, positive, negative, latent, vae, clip,
                lora_name, lora_strength,
                sampler_state, steps, cfg, sampler_name, scheduler, image_output, save_prefix, denoise=1.0, 
                input_image_override=None,
                seed=None, adv_xyPlot=None, upscale_model_name=None, upscale_method=None, factor=None, rescale=None, percent=None, width=None, height=None, longer_side=None, crop=None,
                prompt=None, extra_pnginfo=None, my_unique_id=None, start_step=None, last_step=None, force_full_denoise=False, disable_noise=False):

        pipe = {"model": model,
                "positive": positive,
                "negative": negative,
                "vae": vae,
                "clip": clip,

                "samples": latent,
                "images": input_image_override,
                "seed": seed,

                "loader_settings": None
                }

        return ttN_pipeKSampler_v2.sample(self, pipe, lora_name, lora_strength, sampler_state, steps, cfg, sampler_name, scheduler, image_output, save_prefix, denoise, 
                None, None, None, None, None, None, input_image_override, seed, adv_xyPlot, upscale_model_name, upscale_method, factor, rescale, percent, width, height, longer_side, crop, prompt, extra_pnginfo, my_unique_id, None, None, force_full_denoise, disable_noise)

```
