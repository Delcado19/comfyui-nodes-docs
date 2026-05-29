# Documentation
- Class name: CR_ApplyControlNetStack
- Category: Comfyroll/ControlNet
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ApplyControlNetStack node is designed to apply a series of ControlNets to a pair of base images, enhancing control over the generation process. It manages the integration of multiple ControlNets based on user-defined parameters, ensuring fine-grained control over the final output.

# Input types
## Required
- base_positive
    - base_positive parameter is a key input, representing the positive conditioning image. It is used as a reference to guide the application of ControlNet, significantly influencing the direction and quality of the generated output.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- base_negative
    - base_negative parameter serves as the negative conditioning image, helping to refine the generation process by contrasting with the base_positive image. It plays a crucial role in steering the output away from undesired features.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- switch
    - switch parameter is a toggle that determines whether to activate the ControlNet stack application. It is essential for enabling or disabling the influence of ControlNet on the generation process.
    - Comfy dtype: COMBO['Off', 'On']
    - Python dtype: str
## Optional
- controlnet_stack
    - controlnet_stack parameter is an optional input that, once provided, allows a predefined set of ControlNets to be applied to the base images. Each ControlNet in the stack contributes to the overall conditioning, enhancing the specificity and precision of the generation.
    - Comfy dtype: CONTROL_NET_STACK
    - Python dtype: List[Tuple[str, torch.Tensor, float, float, float]]

# Output types
- base_pos
    - base_pos output is the modified positive conditioning image after applying the ControlNet stack. It incorporates the collective effects of all applied ControlNets, representing a refined guide for the generation process.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- base_neg
    - base_neg output corresponds to the modified negative conditioning image during the application of the ControlNet stack. It plays an instrumental role in shaping the final output by steering it away from undesired features.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- show_help
    - show_help output provides a URL linking to the documentation for the CR_ApplyControlNetStack node for further help and usage guidance. It is a useful resource for users seeking more information about the node's functionality and usage.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
```
class CR_ApplyControlNetStack:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'base_positive': ('CONDITIONING',), 'base_negative': ('CONDITIONING',), 'switch': (['Off', 'On'],), 'controlnet_stack': ('CONTROL_NET_STACK',)}}
    RETURN_TYPES = ('CONDITIONING', 'CONDITIONING', 'STRING')
    RETURN_NAMES = ('base_pos', 'base_neg', 'show_help')
    FUNCTION = 'apply_controlnet_stack'
    CATEGORY = icons.get('Comfyroll/ControlNet')

    def apply_controlnet_stack(self, base_positive, base_negative, switch, controlnet_stack=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/ControlNet-Nodes#cr-apply-multi-controlnet-stack'
        if switch == 'Off':
            return (base_positive, base_negative, show_help)
        if controlnet_stack is not None:
            for controlnet_tuple in controlnet_stack:
                (controlnet_name, image, strength, start_percent, end_percent) = controlnet_tuple
                if type(controlnet_name) == str:
                    controlnet_path = folder_paths.get_full_path('controlnet', controlnet_name)
                    controlnet = comfy.sd.load_controlnet(controlnet_path)
                else:
                    controlnet = controlnet_name
                controlnet_conditioning = ControlNetApplyAdvanced().apply_controlnet(base_positive, base_negative, controlnet, image, strength, start_percent, end_percent)
                (base_positive, base_negative) = (controlnet_conditioning[0], controlnet_conditioning[1])
        return (base_positive, base_negative, show_help)
```