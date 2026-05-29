# 🚫[DEPR] Motion Model Settings (Adv. Attn) 🎭🅐🅓①
## Documentation
- Class name: ADE_AnimateDiffModelSettingsAdvancedAttnStrengths
- Category: 
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is intended to configure advanced attention strength settings in the AnimateDiff model settings. It allows fine-tuning the model's attention mechanism by adjusting the strength of various attention components, thereby providing more detailed control over the animation generation process.

## Input types
### Required
- pe_strength
- Specify the strength of position encoding adjustment, affecting the model's spatial perception.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_strength
- Define the overall strength of the attention mechanism, influencing how the model focuses on different parts of the input.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_q_strength
- Adjust the strength of the query component in the attention mechanism, fine-tuning the model's query process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_k_strength
- Modify the strength of the key component in the attention mechanism, affecting how the model matches queries and keys.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_v_strength
- Change the strength of the value component in the attention mechanism, influencing the output based on matched queries and keys.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_out_weight_strength
- Control the strength of attention output weights, affecting the impact of the final attention output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_out_bias_strength
- Adjust the strength of attention output bias, fine-tuning the bias applied to the attention output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- other_strength
- Specify the strength of other model adjustments directly related to attention, providing broader control over model behavior.
    - Comfy dtype: FLOAT
    - Python dtype: float
- motion_pe_stretch
- Define the stretching factor of position encoding in motion, affecting the spatial representation of motion.
    - Comfy dtype: INT
    - Python dtype: int
- cap_initial_pe_length
- Limit the length of the initial position encoding, restricting the spatial range at the start of the animation.
    - Comfy dtype: INT
    - Python dtype: int
- interpolate_pe_to_length
- Determine the length of position encoding interpolation, affecting spatial resolution over time.
    - Comfy dtype: INT
    - Python dtype: int
- initial_pe_idx_offset
- Set the initial offset of position encoding indices, adjusting the starting spatial reference point.
    - Comfy dtype: INT
    - Python dtype: int
- final_pe_idx_offset
- Set the final offset of position encoding indices, adjusting the ending spatial reference point.
    - Comfy dtype: INT
    - Python dtype: int

### Optional
- mask_motion_scale
- Optional tensor for selective scaling of motion, allowing scaling of different parts of the animation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- min_motion_scale
- Set the minimum scaling of motion, ensuring a lower bound on motion strength.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_motion_scale
- Set the maximum scaling of motion, ensuring an upper bound on motion strength.
    - Comfy dtype: FLOAT
    - Python dtype: float

## Output types
- ad_settings
    - Comfy dtype: AD_SETTINGS
- Return the advanced attention strength settings of the AnimateDiff model, enabling precise control over the animation generation process.
    - Python dtype: AnimateDiffSettings

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
```python
class AnimateDiffModelSettingsAdvancedAttnStrengths:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "pe_strength": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.0001}),
                "attn_strength": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.0001}),
                "attn_q_strength": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.0001}),
                "attn_k_strength": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.0001}),
                "attn_v_strength": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.0001}),
                "attn_out_weight_strength": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.0001}),
                "attn_out_bias_strength": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.0001}),
                "other_strength": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.0001}),
                "motion_pe_stretch": ("INT", {"default": 0, "min": 0, "step": 1}),
                "cap_initial_pe_length": ("INT", {"default": 0, "min": 0, "step": 1}),
                "interpolate_pe_to_length": ("INT", {"default": 0, "min": 0, "step": 1}),
                "initial_pe_idx_offset": ("INT", {"default": 0, "min": 0, "step": 1}),
                "final_pe_idx_offset": ("INT", {"default": 0, "min": 0, "step": 1}),
            },
            "optional": {
                "mask_motion_scale": ("MASK",),
                "min_motion_scale": ("FLOAT", {"default": 1.0, "min": 0.0, "step": 0.001}),
                "max_motion_scale": ("FLOAT", {"default": 1.0, "min": 0.0, "step": 0.001}),
            }
        }
    
    RETURN_TYPES = ("AD_SETTINGS",)
    CATEGORY = ""  #"Animate Diff 🎭🅐🅓/① Gen1 nodes ①/motion settings/experimental"
    FUNCTION = "get_motion_model_settings"

    def get_motion_model_settings(self, pe_strength: float, attn_strength: float,
                                  attn_q_strength: float,
                                  attn_k_strength: float,
                                  attn_v_strength: float,
                                  attn_out_weight_strength: float,
                                  attn_out_bias_strength: float,
                                  other_strength: float,
                                  motion_pe_stretch: int,
                                  cap_initial_pe_length: int, interpolate_pe_to_length: int,
                                  initial_pe_idx_offset: int, final_pe_idx_offset: int,
                                  mask_motion_scale: torch.Tensor=None, min_motion_scale: float=1.0, max_motion_scale: float=1.0):
        adjust_pe = AdjustGroup(AdjustPE(motion_pe_stretch=motion_pe_stretch,
                             cap_initial_pe_length=cap_initial_pe_length, interpolate_pe_to_length=interpolate_pe_to_length,
                             initial_pe_idx_offset=initial_pe_idx_offset, final_pe_idx_offset=final_pe_idx_offset))
        adjust_weight = AdjustGroup(AdjustWeight(
            pe_MULT=pe_strength,
            attn_MULT=attn_strength,
            attn_q_MULT=attn_q_strength,
            attn_k_MULT=attn_k_strength,
            attn_v_MULT=attn_v_strength,
            attn_out_weight_MULT=attn_out_weight_strength,
            attn_out_bias_MULT=attn_out_bias_strength,
            other_MULT=other_strength,
        ))
        motion_model_settings = AnimateDiffSettings(
            adjust_pe=adjust_pe,
            adjust_weight=adjust_weight,
            mask_attn_scale=mask_motion_scale,
            mask_attn_scale_min=min_motion_scale,
            mask_attn_scale_max=max_motion_scale,
        )

        return (motion_model_settings,)