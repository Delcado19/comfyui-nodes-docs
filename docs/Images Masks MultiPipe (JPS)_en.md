
# Documentation
- Class name: Images Masks MultiPipe (JPS)
- Category: JPS Nodes/Pipes
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Images Masks MultiPipe (JPS) node is designed to simplify the processing and manipulation of images and masks within a pipeline, supporting operations such as generation, modification, and inpainting, and can be used in conjunction with models. It is a versatile component suitable for workflows that require processing visual data and their associated masks, capable of simplifying tasks such as image generation, modification, and enhancement.

# Input types
## Optional
- generation_img
    - Specifies the initial image used in the generation process, laying the foundation for subsequent image processing or enhancement.
    - Comfy dtype: IMAGE
    - Python dtype: IMAGE
- generation_mask
    - Defines the mask associated with the generated image, used to guide or restrict specific operations in the image processing pipeline.
    - Comfy dtype: MASK
    - Python dtype: MASK
- ipa1_img
    - Represents the image after the first intermediate pipeline processing, part of a multi-step image processing workflow.
    - Comfy dtype: IMAGE
    - Python dtype: IMAGE
- ipa2_img
    - Represents the image after the second intermediate pipeline processing, further advancing the image processing task.
    - Comfy dtype: IMAGE
    - Python dtype: IMAGE
- ipa1_mask
    - Serves as the mask for the first intermediate pipeline processed image, assisting in targeted image modification or enhancement.
    - Comfy dtype: MASK
    - Python dtype: MASK
- ipa2_mask
    - Acts as the mask for the second intermediate pipeline processed image, enabling precise control over image changes.
    - Comfy dtype: MASK
    - Python dtype: MASK
- revision1_img
    - Represents the first revised image, showcasing modifications or improvements applied after initial generation or processing.
    - Comfy dtype: IMAGE
    - Python dtype: IMAGE
- revision2_img
    - Represents the second revised image, presenting further adjustments or refinements made after the initial revision.
    - Comfy dtype: IMAGE
    - Python dtype: IMAGE
- inpaint_model
    - Introduces a model supporting inpainting tasks, capable of repairing or refining images based on provided masks.
    - Comfy dtype: MODEL
    - Python dtype: MODEL

# Output types
- generation_img
    - Outputs the generated image after pipeline processing.
    - Comfy dtype: IMAGE
    - Python dtype: IMAGE
- generation_mask
    - Outputs the mask associated with the generated image, reflecting any modifications or enhancements made.
    - Comfy dtype: MASK
    - Python dtype: MASK
- ipa1_img
    - Outputs the first intermediate image processed through specific pipeline operations.
    - Comfy dtype: IMAGE
    - Python dtype: IMAGE
- ipa2_img
    - Outputs the second intermediate image showcasing further processing steps.
    - Comfy dtype: IMAGE
    - Python dtype: IMAGE
- ipa1_mask
    - Outputs the mask for the first intermediate processed image, indicating areas of focus or restriction.
    - Comfy dtype: MASK
    - Python dtype: MASK
- ipa2_mask
    - Outputs the mask for the second intermediate processed image, guiding further image modifications.
    - Comfy dtype: MASK
    - Python dtype: MASK
- revision1_img
    - Outputs the first revised image after applying modifications or enhancements.
    - Comfy dtype: IMAGE
    - Python dtype: IMAGE
- revision2_img
    - Outputs the second revised image reflecting additional adjustments or refinements.
    - Comfy dtype: IMAGE
    - Python dtype: IMAGE
- inpaint_model
    - Provides the model used for inpainting tasks, facilitating image repair or refinement.
    - Comfy dtype: MODEL
    - Python dtype: MODEL


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Images_Masks_MultiPipe:

    CATEGORY = 'JPS Nodes/Pipes'
    RETURN_TYPES = ("IMAGE","MASK","IMAGE","IMAGE","MASK","MASK","IMAGE","IMAGE","MODEL",)
    RETURN_NAMES = ("generation_img","generation_mask","ipa1_img","ipa2_img","ipa1_mask","ipa2_mask","revision1_img","revision2_img","inpaint_model",)
    FUNCTION = "get_imagemask"

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {},
            "optional": {
                "generation_img": ("IMAGE",),
                "generation_mask": ("MASK",),
                "ipa1_img": ("IMAGE",),
                "ipa2_img": ("IMAGE",),
                "ipa1_mask": ("MASK",),
                "ipa2_mask": ("MASK",),
                "revision1_img": ("IMAGE",),
                "revision2_img": ("IMAGE",),
                "inpaint_model": ("MODEL",),
            }
        }

    def get_imagemask(self,generation_img=None,generation_mask=None,ipa1_img=None,ipa2_img=None,ipa1_mask=None,ipa2_mask=None,revision1_img=None,revision2_img=None,inpaint_model=None,):
        
        return (generation_img,generation_mask,ipa1_img,ipa2_img,ipa1_mask,ipa2_mask,revision1_img,revision2_img,inpaint_model,)

```
