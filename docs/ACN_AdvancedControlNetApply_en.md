# Documentation
- Class name: AdvancedControlNetApply
- Category: Adv-ControlNet 🛂🅐🅒🅝
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

The AdvancedControlNetApply node is designed to apply control signals to a neural network model. It integrates positive and negative conditioning inputs along with a control network to influence the model's output. This node is capable of adjusting the strength and range of control signals, ensuring fine-grained and precise manipulation of the model's behavior.

# Input types
## Required
- positive
    - Positive conditioning input is essential for guiding the model toward desired results. It serves as a reference that the model learns from and applies during the generation process.
    - Comfy dtype: CONDITIONING
    - Python dtype: Union[Tensor, Iterable[Tuple[str, Dict]]]
- negative
    - Negative conditioning input helps the model avoid undesirable outputs by providing examples that should be excluded during the generation process.
    - Comfy dtype: CONDITIONING
    - Python dtype: Union[Tensor, Iterable[Tuple[str, Dict]]]
- control_net
    - The control network is a critical component that determines how the model's output is influenced. It is used to apply specific control signals to different parts of the model.
    - Comfy dtype: CONTROL_NET
    - Python dtype: ControlBase
- image
    - Image input provides visual context for the model, which is essential for generating outputs consistent with the provided visual information.
    - Comfy dtype: IMAGE
    - Python dtype: Tensor
- strength
    - The intensity parameter determines the strength of the control signal applied to the model. It allows fine-tuning of the control network's influence on the model's output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - The start percentage parameter defines the starting point of the control signal's influence, allowing control over when the control effect begins to take effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The end percentage parameter marks the ending point of the control signal's influence, making the duration of the control effect controllable.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- mask_optional
    - An optional mask input can be used to selectively apply control signals to specific regions of the model's output, providing a means to fine-tune local control effects.
    - Comfy dtype: MASK
    - Python dtype: Optional[Tensor]
- model_optional
    - The model_optional parameter allows providing another model that can be used to further refine the control signals applied to the main model.
    - Comfy dtype: MODEL
    - Python dtype: Optional[ModelPatcher]
- timestep_kf
    - Timestep keyframe input is used to define the temporal structure of the control signal, enabling dynamic control over time.
    - Comfy dtype: TIMESTEP_KEYFRAME
    - Python dtype: Optional[TimestepKeyframeGroup]
- latent_kf_override
    - Latent keyframe overlay allows customization of the control signal's influence on the model's latent space, providing a method to directly affect the model's internal representations.
    - Comfy dtype: LATENT_KEYFRAME
    - Python dtype: Optional[LatentKeyframeGroup]
- weights_override
    - The weight override parameter allows specifying custom weights for the control network, enabling a higher level of control over fine-tuning the control signal.
    - Comfy dtype: CONTROL_NET_WEIGHTS
    - Python dtype: Optional[ControlWeights]

# Output types
- positive
    - The positive output represents the modified conditioning input after applying the control network, reflecting the model's understanding of the desired result.
    - Comfy dtype: CONDITIONING
    - Python dtype: Union[Tensor, Iterable[Tuple[str, Dict]]]
- negative
    - The negative output includes the modified conditioning inputs that the model should avoid, based on the influence of the control network.
    - Comfy dtype: CONDITIONING
    - Python dtype: Union[Tensor, Iterable[Tuple[str, Dict]]]
- model_opt
    - The optional model output provides any updates or improvements to the model during the application of the control network.
    - Comfy dtype: MODEL
    - Python dtype: Optional[ModelPatcher]

# Usage tips
- Infra type: GPU

# Source code
```
class AdvancedControlNetApply:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'control_net': ('CONTROL_NET',), 'image': ('IMAGE',), 'strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.01}), 'start_percent': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'end_percent': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.001})}, 'optional': {'mask_optional': ('MASK',), 'timestep_kf': ('TIMESTEP_KEYFRAME',), 'latent_kf_override': ('LATENT_KEYFRAME',), 'weights_override': ('CONTROL_NET_WEIGHTS',), 'model_optional': ('MODEL',)}}
    RETURN_TYPES = ('CONDITIONING', 'CONDITIONING', 'MODEL')
    RETURN_NAMES = ('positive', 'negative', 'model_opt')
    FUNCTION = 'apply_controlnet'
    CATEGORY = 'Adv-ControlNet 🛂🅐🅒🅝'

    def apply_controlnet(self, positive, negative, control_net, image, strength, start_percent, end_percent, mask_optional: Tensor=None, model_optional: ModelPatcher=None, timestep_kf: TimestepKeyframeGroup=None, latent_kf_override: LatentKeyframeGroup=None, weights_override: ControlWeights=None):
        if strength == 0:
            return (positive, negative, model_optional)
        if model_optional:
            model_optional = model_optional.clone()
        control_hint = image.movedim(-1, 1)
        cnets = {}
        out = []
        for conditioning in [positive, negative]:
            c = []
            for t in conditioning:
                d = t[1].copy()
                prev_cnet = d.get('control', None)
                if prev_cnet in cnets:
                    c_net = cnets[prev_cnet]
                else:
                    c_net = convert_to_advanced(control_net.copy()).set_cond_hint(control_hint, strength, (start_percent, end_percent))
                    if is_advanced_controlnet(c_net):
                        c_net.disarm()
                        if c_net.require_model:
                            if not model_optional:
                                raise Exception(f"Type '{type(c_net).__name__}' requires model_optional input, but got None.")
                            c_net.patch_model(model=model_optional)
                        if timestep_kf is not None:
                            c_net.set_timestep_keyframes(timestep_kf)
                        if latent_kf_override is not None:
                            c_net.latent_keyframe_override = latent_kf_override
                        if weights_override is not None:
                            c_net.weights_override = weights_override
                        c_net.verify_all_weights()
                        if mask_optional is not None:
                            mask_optional = mask_optional.clone()
                            if len(mask_optional.shape) < 3:
                                mask_optional = mask_optional.unsqueeze(0)
                            c_net.set_cond_hint_mask(mask_optional)
                    c_net.set_previous_controlnet(prev_cnet)
                    cnets[prev_cnet] = c_net
                d['control'] = c_net
                d['control_apply_to_uncond'] = False
                n = [t[0], d]
                c.append(n)
            out.append(c)
        return (out[0], out[1], model_optional)
```