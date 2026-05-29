
# Documentation
- Class name: ttN pipeLoader
- Category: ttN/legacy
- Output node: False

The ttN pipeLoader node initializes and manages the loading process of various data pipelines within the tinyterraNodes framework. It abstracts the complexity involved in setting up and configuring data flows, ensuring seamless integration and efficient processing across different stages of the data pipeline.

# Input types
## Required
- ckpt_name
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- config_name
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- vae_name
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- clip_skip
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown
- lora1_name
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- lora1_model_strength
    - Unknown
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- lora1_clip_strength
    - Unknown
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- lora2_name
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- lora2_model_strength
    - Unknown
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- lora2_clip_strength
    - Unknown
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- lora3_name
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- lora3_model_strength
    - Unknown
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- lora3_clip_strength
    - Unknown
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- positive
    - Define the positive conditioning inputs for the pipeline, influencing the direction and nature of data processing.
    - Comfy dtype: STRING
    - Python dtype: str
- positive_token_normalization
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- positive_weight_interpretation
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative
    - Set negative conditioning inputs, providing balance to the positive conditions and further refining the pipeline output.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_token_normalization
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative_weight_interpretation
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- empty_latent_width
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown
- empty_latent_height
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown
- batch_size
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown
- seed
    - Set the seed for random number generation, ensuring reproducibility and consistency of pipeline operations.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- model_override
    - Unknown
    - Comfy dtype: MODEL
    - Python dtype: unknown
- clip_override
    - Unknown
    - Comfy dtype: CLIP
    - Python dtype: unknown
- optional_lora_stack
    - Unknown
    - Comfy dtype: LORA_STACK
    - Python dtype: unknown

# Output types
- pipe
    - Comfy dtype: PIPE_LINE
    - Output the configured pipeline, ready for further processing or analysis.
    - Python dtype: Dict[str, Any]
- model
    - Comfy dtype: MODEL
    - Output the model component of the pipeline.
    - Python dtype: str
- positive
    - Comfy dtype: CONDITIONING
    - Output the positive conditioning component of the pipeline.
    - Python dtype: str
- negative
    - Comfy dtype: CONDITIONING
    - Output the negative conditioning component of the pipeline.
    - Python dtype: str
- latent
    - Comfy dtype: LATENT
    - Output the latent space representation used in the pipeline.
    - Python dtype: str
- vae
    - Comfy dtype: VAE
    - Output the VAE model integrated into the pipeline.
    - Python dtype: str
- clip
    - Comfy dtype: CLIP
    - Output the CLIP model component of the pipeline.
    - Python dtype: str
- seed
    - Comfy dtype: INT
    - Output the seed used for random number generation in the pipeline.
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [ttN pipeKSampler](../../ComfyUI_tinyterraNodes/Nodes/ttN pipeKSampler.md)
    - [ControlNetApply](../../Comfy/Nodes/ControlNetApply.md)



## Source code
```python
class ttN_TSC_pipeLoader:
    version = '1.1.2'
    @classmethod
    def INPUT_TYPES(cls):
        return {"required": { 
                        "ckpt_name": (folder_paths.get_filename_list("checkpoints"), ),
                        "config_name": (["Default",] + folder_paths.get_filename_list("configs"), {"default": "Default"} ),
                        "vae_name": (["Baked VAE"] + folder_paths.get_filename_list("vae"),),
                        "clip_skip": ("INT", {"default": -1, "min": -24, "max": 0, "step": 1}),

                        "lora1_name": (["None"] + folder_paths.get_filename_list("loras"),),
                        "lora1_model_strength": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01}),
                        "lora1_clip_strength": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01}),

                        "lora2_name": (["None"] + folder_paths.get_filename_list("loras"),),
                        "lora2_model_strength": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01}),
                        "lora2_clip_strength": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01}),

                        "lora3_name": (["None"] + folder_paths.get_filename_list("loras"),),
                        "lora3_model_strength": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01}),
                        "lora3_clip_strength": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01}),

                        "positive": ("STRING", {"default": "Positive","multiline": True}),
                        "positive_token_normalization": (["none", "mean", "length", "length+mean"],),
                        "positive_weight_interpretation": (["comfy", "A1111", "compel", "comfy++", "down_weight"],),

                        "negative": ("STRING", {"default": "Negative", "multiline": True}),
                        "negative_token_normalization": (["none", "mean", "length", "length+mean"],),
                        "negative_weight_interpretation": (["comfy", "A1111", "compel", "comfy++", "down_weight"],),

                        "empty_latent_width": ("INT", {"default": 512, "min": 64, "max": MAX_RESOLUTION, "step": 8}),
                        "empty_latent_height": ("INT", {"default": 512, "min": 64, "max": MAX_RESOLUTION, "step": 8}),
                        "batch_size": ("INT", {"default": 1, "min": 1, "max": 64}),
                        "seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                        },                
                "optional": {"model_override": ("MODEL",), "clip_override": ("CLIP",), "optional_lora_stack": ("LORA_STACK",),},
                "hidden": {"prompt": "PROMPT", "ttNnodeVersion": ttN_TSC_pipeLoader.version}, "my_unique_id": "UNIQUE_ID",}

    RETURN_TYPES = ("PIPE_LINE" ,"MODEL", "CONDITIONING", "CONDITIONING", "LATENT", "VAE", "CLIP", "INT",)
    RETURN_NAMES = ("pipe","model", "positive", "negative", "latent", "vae", "clip", "seed",)

    FUNCTION = "adv_pipeloader"
    CATEGORY = "ttN/legacy"

    def adv_pipeloader(self, ckpt_name, config_name, vae_name, clip_skip,
                       lora1_name, lora1_model_strength, lora1_clip_strength,
                       lora2_name, lora2_model_strength, lora2_clip_strength, 
                       lora3_name, lora3_model_strength, lora3_clip_strength, 
                       positive, positive_token_normalization, positive_weight_interpretation, 
                       negative, negative_token_normalization, negative_weight_interpretation, 
                       empty_latent_width, empty_latent_height, batch_size, seed, model_override=None, clip_override=None, optional_lora_stack=None, prompt=None, my_unique_id=None):

        model: ModelPatcher | None = None
        clip: CLIP | None = None
        vae: VAE | None = None

        # Create Empty Latent
        latent = sampler.emptyLatent(None, batch_size, empty_latent_width, empty_latent_height)
        samples = {"samples":latent}

        # Clean models from loaded_objects
        loader.update_loaded_objects(prompt)

        # Load models
        model, clip, vae = loader.load_checkpoint(ckpt_name, config_name)

        if model_override is not None:
            model = model_override

        if clip_override is not None:
            clip = clip_override

        if optional_lora_stack is not None:
            for lora in optional_lora_stack:
                model, clip = loader.load_lora(lora[0], model, clip, lora[1], lora[2])

        if lora1_name != "None":
            model, clip = loader.load_lora(lora1_name, model, clip, lora1_model_strength, lora1_clip_strength)

        if lora2_name != "None":
            model, clip = loader.load_lora(lora2_name, model, clip, lora2_model_strength, lora2_clip_strength)

        if lora3_name != "None":
            model, clip = loader.load_lora(lora3_name, model, clip, lora3_model_strength, lora3_clip_strength)

        # Check for custom VAE
        if vae_name != "Baked VAE":
            vae = loader.load_vae(vae_name)

        # CLIP skip
        if not clip:
            raise Exception("No CLIP found")
        
        clipped = clip.clone()
        if clip_skip != 0:
            clipped.clip_layer(clip_skip)
        
        positive = loader.nsp_parse(positive, seed, title='pipeLoader Positive', my_unique_id=my_unique_id)

        positive_embeddings_final, positive_pooled = advanced_encode(clipped, positive, positive_token_normalization, positive_weight_interpretation, w_max=1.0, apply_to_pooled='enable')
        positive_embeddings_final = [[positive_embeddings_final, {"pooled_output": positive_pooled}]]

        negative = loader.nsp_parse(negative, seed, title='pipeLoader Negative', my_unique_id=my_unique_id)

        negative_embeddings_final, negative_pooled = advanced_encode(clipped, negative, negative_token_normalization, negative_weight_interpretation, w_max=1.0, apply_to_pooled='enable')
        negative_embeddings_final = [[negative_embeddings_final, {"pooled_output": negative_pooled}]]
        image = ttNsampler.pil2tensor(Image.new('RGB', (1, 1), (0, 0, 0)))


        pipe = {"model": model,
                "positive": positive_embeddings_final,
                "negative": negative_embeddings_final,
                "vae": vae,
                "clip": clip,

                "samples": samples,
                "images": image,
                "seed": seed,

                "loader_settings": {"ckpt_name": ckpt_name,
                                    "vae_name": vae_name,

                                    "lora1_name": lora1_name, 
                                    "lora1_model_strength": lora1_model_strength,
                                    "lora1_clip_strength": lora1_clip_strength,
                                    "lora2_name": lora2_name,
                                    "lora2_model_strength": lora2_model_strength,
                                    "lora2_clip_strength": lora2_clip_strength,
                                    "lora3_name": lora3_name,
                                    "lora3_model_strength": lora3_model_strength,
                                    "lora3_clip_strength": lora3_clip_strength,

                                    "refiner_ckpt_name": None,
                                    "refiner_vae_name": None,
                                    "refiner_lora1_name": None,
                                    "refiner_lora1_model_strength": None,
                                    "refiner_lora1_clip_strength": None,
                                    "refiner_lora2_name": None,
                                    "refiner_lora2_model_strength": None,
                                    "refiner_lora2_clip_strength": None,
                                    
                                    "clip_skip": clip_skip,
                                    "positive": positive,
                                    "positive_l": None,
                                    "positive_g": None,
                                    "positive_token_normalization": positive_token_normalization,
                                    "positive_weight_interpretation": positive_weight_interpretation,
                                    "positive_balance": None,
                                    "negative": negative,
                                    "negative_l": None,
                                    "negative_g": None,
                                    "negative_token_normalization": negative_token_normalization,
                                    "negative_weight_interpretation": negative_weight_interpretation,
                                    "negative_balance": None,
                                    "empty_latent_width": empty_latent_width,
                                    "empty_latent_height": empty_latent_height,
                                    "batch_size": batch_size,
                                    "seed": seed,
                                    "empty_samples": samples,}
        }

        return (pipe, model, positive_embeddings_final, negative_embeddings_final, samples, vae, clip, seed)

```
