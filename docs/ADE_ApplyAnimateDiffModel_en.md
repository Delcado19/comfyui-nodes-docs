# Apply AnimateDiff Model (Adv.) 🎭🅐🅓②
## Documentation
- Class name: ADE_ApplyAnimateDiffModel
- Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The ADE_ApplyAnimateDiffModel node aims to apply advanced AnimateDiff model configurations to generate motion in images. It utilizes a comprehensive set of parameters to fine-tune the animation process, adapting to various motion effects and styles.

## Input types
### Required
- motion_model
    - Specifies the motion model used for animation. It is crucial for defining the behavior and characteristics of the animation.
    - Comfy dtype: MOTION_MODEL_ADE
    - Python dtype: MotionModelPatcher
- start_percent
    - Defines the starting percentage of the animation effect, marking the beginning of motion application.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - Specifies the ending percentage of the animation effect, determining the point where motion stops.
    - Comfy dtype: FLOAT
    - Python dtype: float

### Optional
- motion_lora
    - Optional parameter that allows adjustment of motion using LoRA (Low-Rank Adaptation) technology, enhancing animation quality.
    - Comfy dtype: MOTION_LORA
    - Python dtype: MotionLoraList
- scale_multival
    - Optional parameter that affects the scale of the animation effect, allowing fine-tuning of the animation intensity.
    - Comfy dtype: MULTIVAL
    - Python dtype: float
- effect_multival
    - Optional parameter that adjusts the overall effect of the animation, allowing customization of the visual result.
    - Comfy dtype: MULTIVAL
    - Python dtype: float
- ad_keyframes
    - Optional parameter that specifies the keyframes of the animation, allowing precise control over the timing and sequence of motion.
    - Comfy dtype: AD_KEYFRAMES
    - Python dtype: ADKeyframeGroup
- prev_m_models
    - Optional parameter that includes previous motion models to be considered in the current animation process, allowing cumulative effects.
    - Comfy dtype: M_MODELS
    - Python dtype: M_MODELS

## Output types
- m_models
    - Comfy dtype: M_MODELS
    - Outputs the motion model used during the animation process, including all adjustments and configurations.
    - Python dtype: M_MODELS

## Usage tips
- Infra type: GPU
<!-- - Common nodes:
    - [ADE_UseEvolvedSampling](../../ComfyUI-AnimateDiff-Evolved/Nodes/ADE_UseEvolvedSampling.md) -->

## Source code
```python
class ApplyAnimateDiffModelNode:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "motion_model": ("MOTION_MODEL_ADE",),
                "start_percent": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.001}),
                "end_percent": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.001}),
            },
            "optional": {
                "motion_lora": ("MOTION_LORA",),
                "scale_multival": ("MULTIVAL",),
                "effect_multival": ("MULTIVAL",),
                "ad_keyframes": ("AD_KEYFRAMES",),
                "prev_m_models": ("M_MODELS",),
            }
        }

    RETURN_TYPES = ("M_MODELS",)
    CATEGORY = "Animate Diff 🎭🅐🅓/② Gen2 nodes ②"
    FUNCTION = "apply_motion_model"

    def apply_motion_model(self, motion_model: MotionModelPatcher, start_percent: float=0.0, end_percent: float=1.0,
                           motion_lora: MotionLoraList=None, ad_keyframes: ADKeyframeGroup=None,
                           scale_multival=None, effect_multival=None,
                           prev_m_models: MotionModelGroup=None,):
        # set up motion models list
        if prev_m_models is None:
            prev_m_models = MotionModelGroup()
        prev_m_models = prev_m_models.clone()
        motion_model = motion_model.clone()
        # check if internal motion model already present in previous model - create new if so
        for prev_model in prev_m_models.models:
            if motion_model.model is prev_model.model:
                # need to create new internal model based on same state_dict
                motion_model = create_fresh_motion_module(motion_model)
        # apply motion model to loaded_mm
        if motion_lora is not None:
            for lora in motion_lora.loras:
                load_motion_lora_as_patches(motion_model, lora)
        motion_model.scale_multival = scale_multival
        motion_model.effect_multival = effect_multival
        motion_model.keyframes = ad_keyframes.clone() if ad_keyframes else ADKeyframeGroup()
        motion_model.timestep_percent_range = (start_percent, end_percent)
        # add to beginning, so that after injection, it will be the earliest of prev_m_models to be run
        prev_m_models.add_to_start(mm=motion_model)
        return (prev_m_models,)