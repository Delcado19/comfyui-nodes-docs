# Documentation
- Class name: controlnetSimple
- Category: EasyUse/Loaders
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The controlnetSimple node is designed to make it easy for users to apply ControlNet to improve the output of generative models. It takes a set of images and a ControlNet name, and outputs an enhanced model pipeline that incorporates the influence of the ControlNet. This node is useful for users looking to integrate control mechanisms into their generative process for more precise and detailed results.

# Input types
## Required
- pipe
    - The 'pipe' parameter is a key input to the controlnetSimple node, representing the entire generative model pipeline. It includes the model, conditioning data, and other necessary related settings. These settings are critical to the proper functioning of the node. The pipe input directly affects the generative process and the final output, enabling the node to effectively apply the ControlNet.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- image
    - The 'image' parameter is the visual input to the controlnetSimple node. It is essential for the node to understand the context and desired direction of the generative process. By incorporating the image into the ControlNet application, the node can produce outputs that better align with the user's visual intent.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- control_net_name
    - The 'control_net_name' parameter is the key input that specifies which ControlNet the node uses. It determines the control mechanism to be applied to the generative model, affecting the quality of the final output and its adherence to the user's creative vision.
    - Comfy dtype: CONTROL_NET
    - Python dtype: str
## Optional
- strength
    - The 'strength' parameter is used to adjust the intensity of the ControlNet's influence on the generative process. This is an optional input that allows users to fine-tune the effect of the ControlNet, balancing the level of control with the model's creative freedom.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale_soft_weights
    - The 'scale_soft_weights' parameter is used to modify the softness of the ControlNet weights. This input can be adjusted to achieve smoother transitions in the generative output, providing more nuanced control over the final visual result.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- pipe
    - The 'pipe' output is the enhanced generative model pipeline modified by the application of the ControlNet. It includes the updated model and conditioning data, now reflecting the influence of the ControlNet. This output is essential for users to continue their generative work with the improved pipeline.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- positive
    - The 'positive' output represents refined conditioning data adjusted according to the influence of the ControlNet. It serves as guidance for the generative model to produce outputs that are more precise and aligned with the user's creative intent.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]
- negative
    - The 'negative' output is optimized conditioning data used to counteract unwanted features or elements in the generative process. It helps the model learn from the ControlNet's guidance and avoid producing undesired results.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]

# Usage tips
- Infra type: CPU

# Source code
```
class controlnetSimple:

    @classmethod
    def INPUT_TYPES(s):

        def get_file_list(filenames):
            return [file for file in filenames if file != 'put_models_here.txt' and 'lllite' not in file]
        return {'required': {'pipe': ('PIPE_LINE',), 'image': ('IMAGE',), 'control_net_name': (get_file_list(folder_paths.get_filename_list('controlnet')),)}, 'optional': {'control_net': ('CONTROL_NET',), 'strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.01}), 'scale_soft_weights': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.001})}}
    RETURN_TYPES = ('PIPE_LINE', 'CONDITIONING', 'CONDITIONING')
    RETURN_NAMES = ('pipe', 'positive', 'negative')
    OUTPUT_NODE = True
    FUNCTION = 'controlnetApply'
    CATEGORY = 'EasyUse/Loaders'

    def controlnetApply(self, pipe, image, control_net_name, control_net=None, strength=1, scale_soft_weights=1):
        (positive, negative) = easyControlnet().apply(control_net_name, image, pipe['positive'], pipe['negative'], strength, 0, 1, control_net, scale_soft_weights)
        new_pipe = {'model': pipe['model'], 'positive': positive, 'negative': negative, 'vae': pipe['vae'], 'clip': pipe['clip'], 'samples': pipe['samples'], 'images': pipe['images'], 'seed': 0, 'loader_settings': pipe['loader_settings']}
        del pipe
        return (new_pipe, positive, negative)
```