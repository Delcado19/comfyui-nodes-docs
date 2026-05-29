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
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
