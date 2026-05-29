【Thinking】I will follow the required four‑round translation process. First I will refer to the Example, then translate, then proofread, and finally finalize. I will pay special attention to preserving markdown formatting and use modern colloquial English for the translation.

【Translation】


# Documentation
- Class name: AV_FaceDetailerPipe
- Category: ArtVenture/Detailer
- Output node: False

The AV_FaceDetailerPipe node is a component in the ArtVenture/Detailer category, used to enhance facial details in images. It is controlled by an optional enable flag. This node extends the FaceDetailerPipe functionality, providing a dedicated detail‑optimisation method for facial features in artworks or photographs.

# Input types
## Required
- image
    - Input image data, which will be used as the basis for facial detail enhancement.
    - Comfy dtype: IMAGE
    - Python dtype: unknown
- detailer_pipe
    - A pipeline object for detail enhancement, containing the various components and settings needed to process the image.
    - Comfy dtype: DETAILER_PIPE
    - Python dtype: unknown
- guide_size
    - A guide size parameter, used to control certain scale‑related settings during the detail‑enhancement process.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- guide_size_for
    - A boolean indicating how the guide_size parameter should be applied.
    - Comfy dtype: BOOLEAN
    - Python dtype: unknown
- max_size
    - The maximum allowed image size during processing, used to limit resource consumption.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- seed
    - A random seed, used to ensure reproducibility of the results.
    - Comfy dtype: INT
    - Python dtype: unknown
- steps
    - The number of iteration steps in the processing, affecting the degree and quality of detail enhancement.
    - Comfy dtype: INT
    - Python dtype: unknown
- cfg
    - Configuration parameters for adjusting various settings in the processing pipeline.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- sampler_name
    - The name of the sampler, used to select a specific sampling algorithm.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- scheduler
    - The scheduler choice, used to control resource allocation during processing.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- denoise
    - Denoising parameters, controlling the extent of noise removal from the image.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- feather
    - Feathering parameters, used to smooth the edges of the processed region.
    - Comfy dtype: INT
    - Python dtype: unknown
- noise_mask
    - A boolean indicating whether to use a noise mask.
    - Comfy dtype: BOOLEAN
    - Python dtype: unknown
- force_inpaint
    - A boolean forcing the use of the inpainting function.
    - Comfy dtype: BOOLEAN
    - Python dtype: unknown
- bbox_threshold
    - Threshold for bounding‑box detection, used to determine facial regions.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- bbox_dilation
    - Bounding‑box expansion parameter, used to adjust the size of the detected facial region.
    - Comfy dtype: INT
    - Python dtype: unknown
- bbox_crop_factor
    - Bounding‑box cropping factor, used to adjust the final processed region size.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- sam_detection_hint
    - SAM (Segment Anything Model) detection prompts, used to assist in segmenting facial regions.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- sam_dilation
    - Expansion parameter for SAM segmentation results.
    - Comfy dtype: INT
    - Python dtype: unknown
- sam_threshold
    - Threshold parameter for SAM segmentation.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- sam_bbox_expansion
    - Bounding‑box expansion parameter for SAM.
    - Comfy dtype: INT
    - Python dtype: unknown
- sam_mask_hint_threshold
    - Threshold parameter for SAM mask prompts.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- sam_mask_hint_use_negative
    - Option for whether to use SAM negative mask prompts.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- drop_size
    - Discard processing regions smaller than this size.
    - Comfy dtype: INT
    - Python dtype: unknown
- refiner_ratio
    - Ratio parameter for the refiner, used to control the degree of detail enhancement.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- cycle
    - Number of processing loop iterations.
    - Comfy dtype: INT
    - Python dtype: unknown
## Optional
- inpaint_model
    - Boolean value for whether to use the inpainting model.
    - Comfy dtype: BOOLEAN
    - Python dtype: unknown
- noise_mask_feather
    - Feathering parameter for noise masks.
    - Comfy dtype: INT
    - Python dtype: unknown
- enabled
    - The 'enabled' parameter controls whether the face detail processing process is activated. When set to True, the node performs face detail processing on the input image; when set to False, it skips the detail processing process and returns the original image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image
    - Output image, which may be the original image or a face detail-enhanced version, depending on the setting of the 'enabled' parameter.
    - Comfy dtype: IMAGE
    - Python dtype: Image
- cropped_refined
    - The cropped image that has undergone refinement processing.
    - Comfy dtype: IMAGE
    - Python dtype: unknown
- cropped_enhanced_alpha
    - The cropped image with an enhanced alpha channel.
    - Comfy dtype: IMAGE
    - Python dtype: unknown
- mask
    - Mask generated during processing.
    - Comfy dtype: MASK
    - Python dtype: unknown
- detailer_pipe
    - Pipeline object used for detail processing.
    - Comfy dtype: DETAILER_PIPE
    - Python dtype: unknown
- cnet_images
    - ControlNet-generated image.
    - Comfy dtype: IMAGE
    - Python dtype: unknown
- ui
    - UI component reflecting the node's processing status and results, dynamically generated based on the operation outcome.


【Thinking】I have completed the initial translation. Below I will conduct a review to ensure the translation is accurate, fluent, and conforms to modern Chinese expression habits.

【Review】After reviewing, I believe the overall quality of the translation is good, accurately conveying the original meaning with fluent expression. However, there are still some minor details that can be optimized:

1. In the "Documentation" section, the node's functionality can be described more concisely.
2. Some technical terms can be kept in their original English to help readers cross-reference and understand.
3. Some descriptions can be made more colloquial to improve readability.

I will make adjustments to these aspects in the final version.

【Thinking】Now I will conduct a final round of review, focusing on whether the markdown format meets the requirements and whether there are any omissions or errors.

【Review】After the final round of review, I confirm that the markdown format meets the requirements and the content is complete and error-free. I will now proceed to the final version.

【Final Version】


# Documentation
- Class name: AV_FaceDetailerPipe
- Category: ArtVenture/Detailer
- Output node: False

The AV_FaceDetailerPipe node is a component in the ArtVenture/Detailer category, specifically designed to enhance facial details in images. It builds upon FaceDetailerPipe with extensions, providing more specialized facial feature detail optimization methods. The node controls its operation through an optional enable flag, allowing users to flexibly decide whether to apply face detail enhancement.

# Input types
## Required
- image
    - The input image that requires face detail enhancement.
    - Comfy dtype: IMAGE
    - Python dtype: unknown
- detailer_pipe
    - A detail enhancement pipeline object that contains various components and settings required for processing images.
    - Comfy dtype: DETAILER_PIPE
    - Python dtype: unknown
- guide_size
    - A guidance parameter that controls scale-related settings during detail enhancement.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- guide_size_for
    - A boolean value that determines how the guide_size parameter is applied.
    - Comfy dtype: BOOLEAN
    - Python dtype: unknown
- max_size
    - A parameter that limits the maximum size during image processing, used to control computational resource usage.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- seed
    - A random seed that ensures reproducibility of processing results.
    - Comfy dtype: INT
    - Python dtype: unknown
- steps
    - The number of processing iterations that affect the extent and quality of detail enhancement.
    - Comfy dtype: INT
    - Python dtype: unknown
- cfg
    - A configuration parameter for adjusting various settings in the processing workflow.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- sampler_name
    - The sampler name that selects a specific sampling algorithm.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- scheduler
    - A scheduler selection that controls resource allocation during processing.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- denoise
    - A parameter that controls the degree of image denoising.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- feather
    - A feathering parameter used to smooth the edges of processed regions.
    - Comfy dtype: INT
    - Python dtype: unknown
- noise_mask
    - A boolean value that determines whether to use a noise mask.
    - Comfy dtype: BOOLEAN
    - Python dtype: unknown
- force_inpaint
    - A boolean value for forcing the use of the inpaint function.
    - Comfy dtype: BOOLEAN
    - Python dtype: unknown
- bbox_threshold
    - A bounding box detection threshold for determining facial regions.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- bbox_dilation
    - A bounding box dilation parameter for adjusting the size of detected facial regions.
    - Comfy dtype: INT
    - Python dtype: unknown
- bbox_crop_factor
    - A bounding box crop factor for adjusting the size of the final processing area.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- sam_detection_hint
    - A SAM (Segment Anything Model) detection prompt for assisting facial region segmentation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- sam_dilation
    - Expansion parameter for SAM segmentation results.
    - Comfy dtype: INT
    - Python dtype: unknown
- sam_threshold
    - Threshold parameter for SAM segmentation.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- sam_bbox_expansion
    - Bounding‑box expansion parameter for SAM.
    - Comfy dtype: INT
    - Python dtype: unknown
- sam_mask_hint_threshold
    - The threshold parameter for the SAM mask prompt.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- sam_mask_hint_use_negative
    - Option to use a SAM negative mask prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- drop_size
    - A parameter for discarding processing regions smaller than this size.
    - Comfy dtype: INT
    - Python dtype: unknown
- refiner_ratio
    - A detailer ratio parameter that controls the degree of detail enhancement.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- cycle
    - The number of processing cycles.
    - Comfy dtype: INT
    - Python dtype: unknown
## Optional
- inpaint_model
    - A boolean value for whether to use an inpaint model.
    - Comfy dtype: BOOLEAN
    - Python dtype: unknown
- noise_mask_feather
    - Feathering parameter for noise masks.
    - Comfy dtype: INT
    - Python dtype: unknown
- enabled
    - A parameter that controls whether the facial detail processing is activated. When True, process; when False, return the original image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image
    - The output image, which may be the original or a version enhanced with facial details, depending on the 'enabled' parameter setting.
    - Comfy dtype: IMAGE
    - Python dtype: Image
- cropped_refined
    - The refined cropped image.
    - Comfy dtype: IMAGE
    - Python dtype: unknown
- cropped_enhanced_alpha
    - The cropped image with an enhanced alpha channel.
    - Comfy dtype: IMAGE
    - Python dtype: unknown
- mask
    - Mask generated during processing.
    - Comfy dtype: MASK
    - Python dtype: unknown
- detailer_pipe
    - The pipeline object used for detail processing.
    - Comfy dtype: DETAILER_PIPE
    - Python dtype: unknown
- cnet_images
    - The network-generated image.
    - Comfy dtype: IMAGE
    - Python dtype: unknown
- ui
    - UI components dynamically generated based on the operation result, reflecting the node processing status and outcome.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
    class AV_FaceDetailerPipe(FaceDetailerPipe):
        @classmethod
        def INPUT_TYPES(s):
            inputs = FaceDetailerPipe.INPUT_TYPES()
            inputs["optional"]["enabled"] = (
                "BOOLEAN",
                {"default": True, "label_on": "enabled", "label_off": "disabled"},
            )
            return inputs

        CATEGORY = "ArtVenture/Detailer"

        def doit(self, image, detailer_pipe, *args, enabled=True, **kwargs):
            if enabled:
                return super().doit(image, detailer_pipe, *args, **kwargs)
            else:
                return (image, [], [], None, detailer_pipe, [])

```
