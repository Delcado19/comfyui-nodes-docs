# Documentation
- Class name: FromDetailerPipe
- Category: ImpactPack/Pipe
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the FromDetailerPipe node is designed to orchestrate the extraction and organization of various components from the detailer pipeline. It serves as a pipeline for integrating diverse elements such as models, clips, and detectors into subsequent stages of the impact analysis workflow.

# Input types
## Required
- detailer_pipe
    - The 'detailer_pipe' parameter is required, as it provides the input pipeline containing all components needed for the node's operation. It is the primary source from which the node extracts models, clips, and other relevant data for further processing.
    - Comfy dtype: DETAILER_PIPE
    - Python dtype: Tuple[Any, ...]

# Output types
- model
    - The 'model' output represents the core computational model used within the pipeline, playing a critical role in data analysis and processing.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The 'clip' output is a key component for generating and manipulating visual representations, often used alongside the model for feature extraction.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- vae
    - The 'vae' output represents the variational autoencoder model, essential for tasks involving encoding and decoding of data representations.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- positive
    - The 'positive' output serves as a form of conditioning data that positively influences the behavior of subsequent models or algorithms.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative
    - The 'negative' output is similar to the 'positive' output, but provides conditioning data that negatively influences the model's behavior.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- bbox_detector
    - The 'bbox_detector' output is responsible for identifying and locating regions of interest within images, commonly used in object detection tasks.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: torch.nn.Module
- sam_model_opt
    - The 'sam_model_opt' output refers to an optional scene-aware model that can be used for more complex scene analysis and understanding.
    - Comfy dtype: SAM_MODEL
    - Python dtype: Optional[torch.nn.Module]
- segm_detector_opt
    - The 'segm_detector_opt' output is an optional component for image segmentation, aiding tasks requiring detailed image analysis.
    - Comfy dtype: SEGM_DETECTOR
    - Python dtype: Optional[torch.nn.Module]
- detailer_hook
    - The 'detailer_hook' output is an additional hook that can be used to extend or customize the node's functionality for specific use cases.
    - Comfy dtype: DETAILER_HOOK
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
```
class FromDetailerPipe:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'detailer_pipe': ('DETAILER_PIPE',)}}
    RETURN_TYPES = ('MODEL', 'CLIP', 'VAE', 'CONDITIONING', 'CONDITIONING', 'BBOX_DETECTOR', 'SAM_MODEL', 'SEGM_DETECTOR', 'DETAILER_HOOK')
    RETURN_NAMES = ('model', 'clip', 'vae', 'positive', 'negative', 'bbox_detector', 'sam_model_opt', 'segm_detector_opt', 'detailer_hook')
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Pipe'

    def doit(self, detailer_pipe):
        (model, clip, vae, positive, negative, wildcard, bbox_detector, segm_detector_opt, sam_model_opt, detailer_hook, _, _, _, _) = detailer_pipe
        return (model, clip, vae, positive, negative, bbox_detector, sam_model_opt, segm_detector_opt, detailer_hook)
```