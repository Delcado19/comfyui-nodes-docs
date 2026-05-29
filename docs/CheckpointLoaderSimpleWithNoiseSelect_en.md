# Load Checkpoint w/ Noise Select 🎭🅐🅓
## Documentation
- Class name: CheckpointLoaderSimpleWithNoiseSelect
- Category: Animate Diff 🎭🅐🅓/extras
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node loads model checkpoints, focusing on noise selection, allowing finer control of model initialization and behavior in generation tasks. It extends standard checkpoint loading with beta schedule adjustments and an optional noise scaling factor for advanced customization.

## Input types
### Required
- ckpt_name
    - Specify the checkpoint name to load. This parameter is essential for identifying a specific model checkpoint file from the predefined list of available checkpoints.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- beta_schedule
    - Determine the beta schedule applied to the model. This parameter enables adjustment of the model's sampling behavior, enhancing flexibility of model performance.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

### Optional
- use_custom_scale_factor
    - A boolean flag indicating whether to apply a custom noise scaling factor. When set to true, it fine‑tunes the impact of noise on the model output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- scale_factor
    - Define the magnitude of the noise scaling factor, provided 'use_custom_scale_factor' is true. It allows precise control of the noise level applied to the model.
    - Comfy dtype: FLOAT
    - Python dtype: float

## Output types
- model
    - Comfy dtype: MODEL
    - The loaded model, configured according to the specified beta schedule and noise scaling options.
    - Python dtype: torch.nn.Module
- clip
    - Comfy dtype: CLIP
    - If applicable, load the CLIP model associated with the checkpoint.
    - Python dtype: torch.nn.Module
- vae
    - Comfy dtype: VAE
    - If applicable, load the VAE model associated with the checkpoint.
    - Python dtype: torch.nn.Module

## Usage tips
- Infra type: GPU
<!-- - Common nodes:
    - [LoraLoader](../../Comfy/Nodes/LoraLoader.md)
    - [CLIPTextEncode](../../Comfy/Nodes/CLIPTextEncode.md)
    - [ADE_AnimateDiffLoaderWithContext](../../ComfyUI-AnimateDiff-Evolved/Nodes/ADE_AnimateDiffLoaderWithContext.md)
    - [BatchPromptSchedule](../../ComfyUI_FizzNodes/Nodes/BatchPromptSchedule.md)
    - [CLIPSetLastLayer](../../Comfy/Nodes/CLIPSetLastLayer.md)
    - [Lora Loader Stack (rgthree)](../../rgthree-comfy/Nodes/Lora Loader Stack (rgthree).md)
    - IPAdapterApply
    - [ToBasicPipe](../../ComfyUI-Impact-Pack/Nodes/ToBasicPipe.md) -->

## Source code
```python
class CheckpointLoaderSimpleWithNoiseSelect:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "ckpt_name": (folder_paths.get_filename_list("checkpoints"), ),
                "beta_schedule": (BetaSchedules.ALIAS_LIST, {"default": BetaSchedules.USE_EXISTING}, )
            },
            "optional": {
                "use_custom_scale_factor": ("BOOLEAN", {"default": False}),
                "scale_factor": ("FLOAT", {"default": 0.18215, "min": 0.0, "max": 1.0, "step": 0.00001})
            }
        }
    RETURN_TYPES = ("MODEL", "CLIP", "VAE")
    FUNCTION = "load_checkpoint"

    CATEGORY = "Animate Diff 🎭🅐🅓/extras"

    def load_checkpoint(self, ckpt_name, beta_schedule, output_vae=True, output_clip=True, use_custom_scale_factor=False, scale_factor=0.18215):
        ckpt_path = folder_paths.get_full_path("checkpoints", ckpt_name)
        out = load_checkpoint_guess_config(ckpt_path, output_vae=True, output_clip=True, embedding_directory=folder_paths.get_folder_paths("embeddings"))
        # register chosen beta schedule on model - convert to beta_schedule name recognized by ComfyUI
        new_model_sampling = BetaSchedules.to_model_sampling(beta_schedule, out[0])
        if new_model_sampling is not None:
            out[0].model.model_sampling = new_model_sampling
        if use_custom_scale_factor:
            out[0].model.latent_format.scale_factor = scale_factor
        return out