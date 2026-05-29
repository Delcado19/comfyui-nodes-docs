# Documentation
- Class name: controlnetAdvanced
- Category: EasyUse/Loaders
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The controlnetAdvanced node is designed to facilitate the application of control networks to modify and enhance image data based on specified conditions. It operates by integrating control signals into the image processing pipeline, allowing for fine-tuned adjustments and conditional transformations.

# Input types
## Required
- pipe
    - The 'pipe' parameter is critical as it carries the entire image processing pipeline data, including the model and samples. This is essential for the node to function correctly and produce the desired output.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- image
    - The 'image' parameter is the input image to be processed by the node. It serves as the foundation for all transformations and enhancements.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- control_net_name
    - The 'control_net_name' parameter specifies the control network used for image processing. It is important because it determines the type of control applied to the image, influencing the final result.
    - Comfy dtype: CONTROL_NET
    - Python dtype: str
## Optional
- control_net
    - The 'control_net' parameter is an optional control network input that can be provided directly by the user. It offers a way to customize the control network used for processing without loading from a file.
    - Comfy dtype: CONTROL_NET
    - Python dtype: Optional[torch.nn.Module]
- strength
    - The 'strength' parameter adjusts the intensity of the control network's influence on the image. It is important for fine-tuning the degree of transformation applied to the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - The 'start_percent' parameter defines the starting point at which the control network begins to take effect on the image. It is important because it determines when in the processing pipeline the control starts being applied.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The 'end_percent' parameter sets the ending point of the control network's influence, affecting how the control network's effect fades out toward the end of image processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale_soft_weights
    - The 'scale_soft_weights' parameter adjusts the softness of the control network weights, which helps achieve smoother transitions and less abrupt changes in the image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- pipe
    - The 'pipe' output is the updated image processing pipeline after control network adjustments have been applied. It is important because it represents the final state of the pipeline after control network application.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- positive
    - The 'positive' output contains the positive conditioned image obtained after applying the control network. It is critical for evaluating the effectiveness of the control network in achieving the desired visual enhancements.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]
- negative
    - The 'negative' output consists of the negative conditioned image, serving as a contrast to the 'positive' output. It is important for understanding the range of control the control network can exert on the image.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]

# Usage tips
- Infra type: CPU

# Source code
```
class controlnetAdvanced:

    @classmethod
    def INPUT_TYPES(s):

        def get_file_list(filenames):
            return [file for file in filenames if file != 'put_models_here.txt' and 'lllite' not in file]
        return {'required': {'pipe': ('PIPE_LINE',), 'image': ('IMAGE',), 'control_net_name': (get_file_list(folder_paths.get_filename_list('controlnet')),)}, 'optional': {'control_net': ('CONTROL_NET',), 'strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.01}), 'start_percent': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'end_percent': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'scale_soft_weights': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.001})}}
    RETURN_TYPES = ('PIPE_LINE', 'CONDITIONING', 'CONDITIONING')
    RETURN_NAMES = ('pipe', 'positive', 'negative')
    OUTPUT_NODE = True
    FUNCTION = 'controlnetApply'
    CATEGORY = 'EasyUse/Loaders'

    def controlnetApply(self, pipe, image, control_net_name, control_net=None, strength=1, start_percent=0, end_percent=1, scale_soft_weights=1):
        (positive, negative) = easyControlnet().apply(control_net_name, image, pipe['positive'], pipe['negative'], strength, start_percent, end_percent, control_net, scale_soft_weights)
        new_pipe = {'model': pipe['model'], 'positive': positive, 'negative': negative, 'vae': pipe['vae'], 'clip': pipe['clip'], 'samples': pipe['samples'], 'images': pipe['images'], 'seed': 0, 'loader_settings': pipe['loader_settings']}
        del pipe
        return (new_pipe, positive, negative)
```