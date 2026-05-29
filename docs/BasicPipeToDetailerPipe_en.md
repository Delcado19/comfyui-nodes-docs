# Documentation
- Class name: BasicPipeToDetailerPipe
- Category: ImpactPack/Pipe
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The BasicPipeToDetailerPipe node is designed to convert a basic pipe structure into a more detailed pipe, enhancing the processing capability of subsequent tasks. It integrates various components such as bbox_detector, wildcard, and optional models to refine input data for more complex analysis.

# Input types
## Required
- basic_pipe
    - The basic_pipe parameter is crucial because it provides the foundational data structure required for node operation. It is a prerequisite for the transformation process facilitated by the node.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[Any, ...]
- bbox_detector
    - bbox_detector is a key component for identifying and locating regions of interest in the data. Its integration enables more precise manipulation and analysis within the node's workflow.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: Any
- wildcard
    - The wildcard parameter introduces flexibility to the node's processing by allowing dynamic placeholder substitution during execution. This feature enhances the node's adaptability to various data scenarios.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- Select to add LoRA
    - The LoRA selection parameter offers optional enhancement of node functionality, allowing additional abstraction layers or complexity to be incorporated into the processing pipe.
    - Comfy dtype: COMBO[Select the LoRA to add to the text]
    - Python dtype: Union[str, None]
- Select to add Wildcard
    - This optional parameter allows users to introduce extra wildcards into the processing flow, enabling more dynamic and diverse data operations.
    - Comfy dtype: COMBO[Select the Wildcard to add to the text]
    - Python dtype: Union[str, None]
- sam_model_opt
    - The optional sam_model_opt parameter enables the node to use advanced models for more complex analysis when default processing is insufficient.
    - Comfy dtype: SAM_MODEL
    - Python dtype: Union[Any, None]
- segm_detector_opt
    - Providing the segm_detector_opt parameter permits finer-grained segmentation detection in node operations, potentially improving result accuracy.
    - Comfy dtype: SEGM_DETECTOR
    - Python dtype: Union[Any, None]
- detailer_hook
    - detailer_hook is an optional parameter that can be used to customize or extend the node's functionality, allowing tailored processing for specific use cases.
    - Comfy dtype: DETAILER_HOOK
    - Python dtype: Union[Any, None]

# Output types
- detailer_pipe
    - The detailer_pipe output represents the enhanced pipe obtained after node processing. It is a detailed structure ready for further analysis or downstream tasks.
    - Comfy dtype: DETAILER_PIPE
    - Python dtype: Tuple[Any, ...]

# Usage tips
- Infra type: CPU

# Source code
```
class BasicPipeToDetailerPipe:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'basic_pipe': ('BASIC_PIPE',), 'bbox_detector': ('BBOX_DETECTOR',), 'wildcard': ('STRING', {'multiline': True, 'dynamicPrompts': False}), 'Select to add LoRA': (['Select the LoRA to add to the text'] + folder_paths.get_filename_list('loras'),), 'Select to add Wildcard': (['Select the Wildcard to add to the text'],)}, 'optional': {'sam_model_opt': ('SAM_MODEL',), 'segm_detector_opt': ('SEGM_DETECTOR',), 'detailer_hook': ('DETAILER_HOOK',)}}
    RETURN_TYPES = ('DETAILER_PIPE',)
    RETURN_NAMES = ('detailer_pipe',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Pipe'

    def doit(self, *args, **kwargs):
        basic_pipe = kwargs['basic_pipe']
        bbox_detector = kwargs['bbox_detector']
        wildcard = kwargs['wildcard']
        sam_model_opt = kwargs.get('sam_model_opt', None)
        segm_detector_opt = kwargs.get('segm_detector_opt', None)
        detailer_hook = kwargs.get('detailer_hook', None)
        (model, clip, vae, positive, negative) = basic_pipe
        pipe = (model, clip, vae, positive, negative, wildcard, bbox_detector, segm_detector_opt, sam_model_opt, detailer_hook, None, None, None, None)
        return (pipe,)
```