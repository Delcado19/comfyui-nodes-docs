
# Documentation
- Class name: Automatic CFG - Post rescale only
- Category: model_patches/automatic_cfg/presets
- Output node: False

This node is designed to perform post-processing rescaling operations on the output of a generative model, with the primary goal of adjusting the model output according to a rescaling factor. It aims to optimize the model's predictions by adjusting the scale of the output, thereby enhancing the balance between conditional and unconditional components during the generation process.

# Input types
## Required
- model
    - The generative model to which the post-processing rescaling operation will be applied. This parameter is critical, as it determines which base model's output will be adjusted.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- subtract_latent_mean
    - A boolean flag indicating whether the latent mean should be subtracted from the model output, which affects the characteristics of the final generated result.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- subtract_latent_mean_sigma_start
    - Defines the starting sigma value for the latent mean subtraction operation, affecting when this operation is applied during the generation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- subtract_latent_mean_sigma_end
    - Defines the ending sigma value for the latent mean subtraction operation, marking the endpoint of the range over which this operation is applied.
    - Comfy dtype: FLOAT
    - Python dtype: float
- latent_intensity_rescale
    - A boolean flag indicating whether the intensity of the latent space should be rescaled, which affects the visual quality and characteristics of the generated output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- latent_intensity_rescale_method
    - Specifies the method used to rescale the intensity of the latent space, affecting how the rescaling operation is performed.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- latent_intensity_rescale_cfg
    - The configuration value for the latent intensity rescaling operation, determining the intensity of the rescaling to be applied.
    - Comfy dtype: FLOAT
    - Python dtype: float
- latent_intensity_rescale_sigma_start
    - Defines the starting sigma value for the latent intensity rescaling operation, affecting when this adjustment is applied during the generation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- latent_intensity_rescale_sigma_end
    - Defines the ending sigma value for the latent intensity rescaling operation, marking the endpoint of the range over which this adjustment is applied.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The modified generative model with the post-processing rescaling operation applied. This output reflects the adjustments made to the model output scaling, aimed at improving generation quality.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class postCFGrescaleOnly:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
                                "model": ("MODEL",),
                                "subtract_latent_mean" : ("BOOLEAN", {"default": True}),
                                "subtract_latent_mean_sigma_start": ("FLOAT", {"default": 15,  "min": 0.0, "max": 10000.0, "step": 0.1, "round": 0.1}),
                                "subtract_latent_mean_sigma_end":   ("FLOAT", {"default": 7.5, "min": 0.0, "max": 10000.0, "step": 0.1, "round": 0.1}),
                                "latent_intensity_rescale"     : ("BOOLEAN", {"default": True}),
                                "latent_intensity_rescale_method" : (["soft","hard","range"], {"default": "hard"},),
                                "latent_intensity_rescale_cfg" : ("FLOAT", {"default": 7.6,  "min": 0.0, "max": 100.0, "step": 0.1, "round": 0.1}),
                                "latent_intensity_rescale_sigma_start": ("FLOAT", {"default": 15,  "min": 0.0, "max": 10000.0, "step": 0.1, "round": 0.1}),
                                "latent_intensity_rescale_sigma_end":   ("FLOAT", {"default": 7.5, "min": 0.0, "max": 10000.0, "step": 0.1, "round": 0.1}),
                              }}
    RETURN_TYPES = ("MODEL",)
    FUNCTION = "patch"

    CATEGORY = "model_patches/automatic_cfg/presets"

    def patch(self, model,
              subtract_latent_mean, subtract_latent_mean_sigma_start, subtract_latent_mean_sigma_end,
              latent_intensity_rescale, latent_intensity_rescale_method, latent_intensity_rescale_cfg, latent_intensity_rescale_sigma_start, latent_intensity_rescale_sigma_end
              ):
        advcfg = advancedDynamicCFG()
        m = advcfg.patch(model=model, 
                         subtract_latent_mean = subtract_latent_mean,
                         subtract_latent_mean_sigma_start = subtract_latent_mean_sigma_start, subtract_latent_mean_sigma_end = subtract_latent_mean_sigma_end,
                         latent_intensity_rescale = latent_intensity_rescale, latent_intensity_rescale_cfg = latent_intensity_rescale_cfg, latent_intensity_rescale_method = latent_intensity_rescale_method,
                         latent_intensity_rescale_sigma_start = latent_intensity_rescale_sigma_start, latent_intensity_rescale_sigma_end = latent_intensity_rescale_sigma_end,
                         ignore_pre_cfg_func = True
                         )[0]
        return (m, )

```
