# Documentation
- Class name: AnimateDiffModuleLoader
- Category: Animate Diff
- Output node: False
- Repo Ref: https://github.com/ArtVentureX/comfyui-animatediff.git

This node aims to manage and operate motion modules within the animation framework, focusing on integrating and applying advanced motion techniques to enhance the dynamics and fluidity of animations.

# Input types
## Required
- model_name
    - The model name is crucial for identifying the specific motion module to load and manipulate. It determines the source of the animation asset and lays the foundation for subsequent operations.
    - Comfy dtype: string
    - Python dtype: str
## Optional
- lora_stack
    - The LoRa stack is an optional parameter that, when provided, allows fine-tuning of the motion module through layer-by-layer adjustments. It enhances animation adaptability and customization to meet specific requirements.
    - Comfy dtype: list
    - Python dtype: List[Tuple[Dict[str, torch.Tensor], float]]

# Output types
- motion_module
    - The output motion module is the result of the node's processing, representing the finalized and optimized animation module, ready for use in the animation pipeline.
    - Comfy dtype: object
    - Python dtype: MotionWrapper

# Usage tips
- Infra type: CPU

# Source code
```
class AnimateDiffModuleLoader:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model_name': (get_available_models(),)}, 'optional': {'lora_stack': ('MOTION_LORA_STACK',)}}
    RETURN_TYPES = ('MOTION_MODULE',)
    CATEGORY = 'Animate Diff'
    FUNCTION = 'load_motion_module'

    def inject_loras(self, motion_module: MotionWrapper, lora_stack: List[Tuple[Dict[str, Tensor], float]]):
        for lora in lora_stack:
            (state_dict, alpha) = lora
            for key in state_dict:
                layer_infos = key.split('.')
                curr_layer = motion_module
                while len(layer_infos) > 0:
                    temp_name = layer_infos.pop(0)
                    curr_layer = curr_layer.__getattr__(temp_name)
                curr_layer.weight.data += alpha * state_dict[key].to(curr_layer.weight.data.device)

    def eject_loras(self, motion_module: MotionWrapper, lora_stack: List[Tuple[float, Dict[str, Tensor]]]):
        lora_stack.reverse()
        for lora in lora_stack:
            (state_dict, alpha) = lora
            for key in state_dict:
                layer_infos = key.split('.')
                curr_layer = motion_module
                while len(layer_infos) > 0:
                    temp_name = layer_infos.pop(0)
                    curr_layer = curr_layer.__getattr__(temp_name)
                curr_layer.weight.data -= alpha * state_dict[key].to(curr_layer.weight.data.device)

    def load_motion_module(self, model_name: str, lora_stack: List=None):
        motion_module = load_motion_module(model_name)
        if motion_module.is_v2:
            if hasattr(motion_module, 'lora_stack') and isinstance(motion_module.lora_stack, list):
                self.eject_loras(motion_module, motion_module.lora_stack)
                delattr(motion_module, 'lora_stack')
            if isinstance(lora_stack, list):
                self.inject_loras(motion_module, lora_stack)
                setattr(motion_module, 'lora_stack', lora_stack)
        elif isinstance(lora_stack, list):
            logger.warning('LoRA is provided but only motion module v2 is supported.')
        return (motion_module,)
```