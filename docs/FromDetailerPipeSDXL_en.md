# Documentation
- Class name: FromDetailerPipe_SDXL
- Category: ImpactPack/Pipe
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the FromDetailerPipe_SDXL node orchestrates the processing pipeline by unpacking and organizing various components (such as models, conditioners, and detectors) from the detailer pipe. It plays a critical role in the data and functionality flow within the ImpactPack framework, ensuring seamless integration between different modules.

# Input types
## Required
- detailer_pipe
    - The parameter 'detailer_pipe' is required because it serves as the channel through which the node receives a structured collection of components needed for its operations. It is the primary input that determines the node's execution path and subsequent output.
    - Comfy dtype: DETAILER_PIPE
    - Python dtype: Tuple[DETAILER_PIPE, MODEL, CLIP, VAE, CONDITIONING, CONDITIONING, BBOX_DETECTOR, SAM_MODEL, SEGM_DETECTOR, DETAILER_HOOK]

# Output types
- detailer_pipe
    - The output 'detailer_pipe' is a structured collection of components processed and organized by the node. It is important because it forms the foundation for further processing in subsequent stages of the pipeline.
    - Comfy dtype: DETAILER_PIPE
    - Python dtype: DETAILER_PIPE
- model
    - The output 'model' represents a machine learning model used in the node's processing pipeline. It is a critical component for tasks requiring predictive analysis or pattern recognition.
    - Comfy dtype: MODEL
    - Python dtype: MODEL
- clip
    - The output 'clip' is a component that may involve text or image processing, contributing to the node's ability to process and interpret contextual data.
    - Comfy dtype: CLIP
    - Python dtype: CLIP
- vae
    - The output 'vae' stands for variational autoencoder, a type of neural network used for unsupervised learning tasks. It plays an important role in the node's ability to generate or reconstruct data.
    - Comfy dtype: VAE
    - Python dtype: VAE
- bbox_detector
    - The output 'bbox_detector' is a module responsible for detecting bounding boxes in images or videos. It is very important for applications requiring spatial localization of objects or regions of interest.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: BBOX_DETECTOR
- sam_model_opt
    - The output 'sam_model_opt' is an optimized version of the scene attention model, which enhances the node's ability to focus on and process specific regions in the data.
    - Comfy dtype: SAM_MODEL
    - Python dtype: SAM_MODEL
- segm_detector_opt
    - The output 'segm_detector_opt' is an optimized segmentation detector, crucial for tasks involving identifying and separating different regions within images.
    - Comfy dtype: SEGM_DETECTOR
    - Python dtype: SEGM_DETECTOR
- detailer_hook
    - The output 'detailer_hook' is a mechanism that allows customization or extension of the node's functionality, providing flexibility for handling specific use cases.
    - Comfy dtype: DETAILER_HOOK
    - Python dtype: DETAILER_HOOK
- refiner_model
    - The output 'refiner_model' is another machine learning model, possibly used to refine or enhance the output of the primary model in the node's workflow.
    - Comfy dtype: MODEL
    - Python dtype: MODEL

# Usage tips
- Infra type: CPU

# Source code
```
class FromDetailerPipe_SDXL:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'detailer_pipe': ('DETAILER_PIPE',)}}
    RETURN_TYPES = ('DETAILER_PIPE', 'MODEL', 'CLIP', 'VAE', 'CONDITIONING', 'CONDITIONING', 'BBOX_DETECTOR', 'SAM_MODEL', 'SEGM_DETECTOR', 'DETAILER_HOOK', 'MODEL', 'CLIP', 'CONDITIONING', 'CONDITIONING')
    RETURN_NAMES = ('detailer_pipe', 'model', 'clip', 'vae', 'positive', 'negative', 'bbox_detector', 'sam_model_opt', 'segm_detector_opt', 'detailer_hook', 'refiner_model', 'refiner_clip', 'refiner_positive', 'refiner_negative')
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Pipe'

    def doit(self, detailer_pipe):
        (model, clip, vae, positive, negative, wildcard, bbox_detector, segm_detector_opt, sam_model_opt, detailer_hook, refiner_model, refiner_clip, refiner_positive, refiner_negative) = detailer_pipe
        return (detailer_pipe, model, clip, vae, positive, negative, bbox_detector, sam_model_opt, segm_detector_opt, detailer_hook, refiner_model, refiner_clip, refiner_positive, refiner_negative)
```