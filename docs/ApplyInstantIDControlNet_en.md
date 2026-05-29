# Documentation
- Class name: ApplyInstantIDControlNet
- Category: InstantID
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_InstantID.git

The node applies a control network to modify facial features in the image based on given embeddings and keypoint information. It adjusts facial appearance according to specified positive and negative conditioning inputs, allowing fine-tuning of expressions and structure.

# Input types
## Required
- face_embeds
    - This parameter contains facial embeddings, essential for the node's operation because they provide the foundational representation of the face to be manipulated.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]
- control_net
    - The control network is crucial for applying changes to facial features. It uses the conditioning inputs as a guide for modification.
    - Comfy dtype: CONTROL_NET
    - Python dtype: torch.nn.Module
- image_kps
    - Image keypoint information is vital as it supplies spatial context for facial features, ensuring precise adjustments according to the control network.
    - Comfy dtype: IMAGE
    - Python dtype: np.ndarray
- positive
    - Positive conditioning input serves as a reference for the desired facial features, guiding the node to achieve the intended appearance.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- negative
    - Negative conditioning input contrasts with the positive input, helping to avoid unwanted features and improve adjustment accuracy.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- strength
    - The strength parameter determines how strongly the control network influences facial features, allowing subtle or pronounced changes based on the input value.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_at
    - This parameter defines the starting point of the control network's influence, enabling the node to apply changes gradually or from the outset.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - The endpoint parameter specifies when to stop the control network's adjustments, ensuring controlled transitions in facial feature modifications.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- mask
    - When a mask parameter is provided, it enables targeted adjustments by specifying image regions where changes should be applied or excluded.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- positive
    - The output positive parameter represents the modified facial features based on the positive conditioning input, reflecting the node's adjustments.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- negative
    - The output negative parameter shows the changes made from the negative conditioning input, demonstrating the node's ability to refine facial features while avoiding undesired traits.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]

# Usage tips
- Infra type: GPU

# Source code
```
class ApplyInstantIDControlNet:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'face_embeds': ('FACE_EMBEDS',), 'control_net': ('CONTROL_NET',), 'image_kps': ('IMAGE',), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.01}), 'start_at': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'end_at': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.001})}, 'optional': {'mask': ('MASK',)}}
    RETURN_TYPES = ('CONDITIONING', 'CONDITIONING')
    RETURN_NAMES = ('positive', 'negative')
    FUNCTION = 'apply_controlnet'
    CATEGORY = 'InstantID'

    def apply_controlnet(self, face_embeds, control_net, image_kps, positive, negative, strength, start_at, end_at, mask=None):
        self.device = comfy.model_management.get_torch_device()
        if strength == 0:
            return (positive, negative)
        if mask is not None:
            mask = mask.to(self.device)
        if mask is not None and len(mask.shape) < 3:
            mask = mask.unsqueeze(0)
        image_prompt_embeds = face_embeds['cond']
        uncond_image_prompt_embeds = face_embeds['uncond']
        cnets = {}
        cond_uncond = []
        control_hint = image_kps.movedim(-1, 1)
        is_cond = True
        for conditioning in [positive, negative]:
            c = []
            for t in conditioning:
                d = t[1].copy()
                prev_cnet = d.get('control', None)
                if prev_cnet in cnets:
                    c_net = cnets[prev_cnet]
                else:
                    c_net = control_net.copy().set_cond_hint(control_hint, strength, (start_at, end_at))
                    c_net.set_previous_controlnet(prev_cnet)
                    cnets[prev_cnet] = c_net
                d['control'] = c_net
                d['control_apply_to_uncond'] = False
                d['cross_attn_controlnet'] = image_prompt_embeds.to(comfy.model_management.intermediate_device()) if is_cond else uncond_image_prompt_embeds.to(comfy.model_management.intermediate_device())
                if mask is not None and is_cond:
                    d['mask'] = mask
                    d['set_area_to_bounds'] = False
                n = [t[0], d]
                c.append(n)
            cond_uncond.append(c)
            is_cond = False
            print(cond_uncond[0])
        return (cond_uncond[0], cond_uncond[1])
```