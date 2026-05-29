
# Documentation
- Class name: AV_FaceDetailer
- Category: ArtVenture/Detailer
- Output node: False

The AV_FaceDetailer node is designed to enhance facial details in images. It belongs to the ArtVenture/Detailer category, utilizing advanced detail processing techniques to improve facial features. This node provides an optional switch that allows users to enable or disable this enhancement process.

# Input types
## Required
- image
    - The input source image on which facial detail enhancement will be performed.
    - Comfy dtype: IMAGE
    - Python dtype: unknown
- model
    - The model used for facial detail enhancement.
    - Comfy dtype: MODEL
    - Python dtype: unknown
- clip
    - The CLIP model used for image processing.
    - Comfy dtype: CLIP
    - Python dtype: unknown
- vae
    - The VAE model used for image processing.
    - Comfy dtype: VAE
    - Python dtype: unknown
- guide_size
    - The size parameter for guiding the image.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- guide_size_for
    - The applicable object for guiding image size.
    - Comfy dtype: BOOLEAN
    - Python dtype: unknown
- max_size
    - The maximum size limit for processing images.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- seed
    - The random seed used to ensure reproducibility of results.
    - Comfy dtype: INT
    - Python dtype: unknown
- steps
    - The number of processing steps.
    - Comfy dtype: INT
    - Python dtype: unknown
- cfg
    - Configuration parameters that may affect the intensity or method of processing.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- sampler_name
    - The name of the sampler used.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- scheduler
    - The type of scheduler used.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- positive
    - Positive prompt conditions.
    - Comfy dtype: CONDITIONING
    - Python dtype: unknown
- negative
    - Negative prompt conditions.
    - Comfy dtype: CONDITIONING
    - Python dtype: unknown
- denoise
    - The denoising strength parameter.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- feather
    - The intensity of the feathering effect.
    - Comfy dtype: INT
    - Python dtype: unknown
- noise_mask
    - Whether to use a noise mask.
    - Comfy dtype: BOOLEAN
    - Python dtype: unknown
- force_inpaint
    - Whether to force inpainting.
    - Comfy dtype: BOOLEAN
    - Python dtype: unknown
- bbox_threshold
    - The threshold for bounding box detection.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- bbox_dilation
    - The dilation parameter for bounding boxes.
    - Comfy dtype: INT
    - Python dtype: unknown
- bbox_crop_factor
    - The cropping factor for bounding boxes.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- sam_detection_hint
    - SAM (Segment Anything Model) detection prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- sam_dilation
    - SAM dilation parameter.
    - Comfy dtype: INT
    - Python dtype: unknown
- sam_threshold
    - SAM threshold parameter.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- sam_bbox_expansion
    - SAM bounding box expansion parameter.
    - Comfy dtype: INT
    - Python dtype: unknown
- sam_mask_hint_threshold
    - SAM mask prompt threshold.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- sam_mask_hint_use_negative
    - Whether to use negative information for SAM mask prompts.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- drop_size
    - Discard size parameter.
    - Comfy dtype: INT
    - Python dtype: unknown
- bbox_detector
    - Bounding box detector.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: unknown
- wildcard
    - Wildcard parameter, possibly used for flexible configuration.
    - Comfy dtype: STRING
    - Python dtype: unknown
- cycle
    - Number of processing loops.
    - Comfy dtype: INT
    - Python dtype: unknown

## Optional
- sam_model_opt
    - Optional SAM model.
    - Comfy dtype: SAM_MODEL
    - Python dtype: unknown
- segm_detector_opt
    - Optional segmentation detector.
    - Comfy dtype: SEGM_DETECTOR
    - Python dtype: unknown
- detailer_hook
    - Detail processor hook.
    - Comfy dtype: DETAILER_HOOK
    - Python dtype: unknown
- inpaint_model
    - Whether to use the repair drawing model.
    - Comfy dtype: BOOLEAN
    - Python dtype: unknown
- noise_mask_feather
    - Feathering parameter for noise masks.
    - Comfy dtype: INT
    - Python dtype: unknown
- enabled
    - This parameter allows users to enable or disable the facial detail processing step, providing flexibility for image processing.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image
    - Output of the processed image.
    - Comfy dtype: IMAGE
    - Python dtype: unknown
- cropped_refined
    - Refined cropped image.
    - Comfy dtype: IMAGE
    - Python dtype: unknown
- cropped_enhanced_alpha
    - Cropped image with enhanced alpha channel.
    - Comfy dtype: IMAGE
    - Python dtype: unknown
- mask
    - Mask generated during processing.
    - Comfy dtype: MASK
    - Python dtype: unknown
- detailer_pipe
    - Output of the detail processing pipeline.
    - Comfy dtype: DETAILER_PIPE
    - Python dtype: unknown
- cnet_images
    - Image output related to the control network.
    - Comfy dtype: IMAGE
    - Python dtype: unknown
- ui
    - Output includes the original image (if facial detail enhancement is enabled) and additional processing information.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
    class AV_FaceDetailer(FaceDetailer):
        @classmethod
        def INPUT_TYPES(s):
            inputs = FaceDetailer.INPUT_TYPES()
            inputs["optional"]["enabled"] = (
                "BOOLEAN",
                {"default": True, "label_on": "enabled", "label_off": "disabled"},
            )
            return inputs

        CATEGORY = "ArtVenture/Detailer"

        def args_to_pipe(self, args: dict):
            hook_args = [
                "model",
                "clip",
                "vae",
                "positive",
                "negative",
                "wildcard",
                "bbox_detector",
                "segm_detector_opt",
                "sam_model_opt",
                "detailer_hook",
            ]

            pipe_args = []
            for arg in hook_args:
                pipe_args.append(args.get(arg, None))

            return tuple(pipe_args + [None, None, None, None])

        def doit(self, image, *args, enabled=True, **kwargs):
            if enabled:
                return super().doit(image, *args, **kwargs)
            else:
                pipe = self.args_to_pipe(kwargs)
                return (image, [], [], None, pipe, [])

```
