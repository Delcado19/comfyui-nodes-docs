
# Documentation
- Class name: ttN pipe2DETAILER
- Category: ttN/pipe
- Output node: False

ttN pipe2DETAILER node aims to enhance and refine a given pipeline by introducing additional features and processing steps, including bounding box detection, optional segmentation, and other refinement functions, to improve output quality.

# Input types
## Required
- pipe
    - Represents the pipeline to be enhanced and refined, serving as the base structure for further processing.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- bbox_detector
    - Specifies the bounding box detector for identifying regions of interest in the pipeline output.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: Callable
- wildcard
    - A flexible input for additional specifications or configurations, allowing custom adjustments to the refinement process.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional
- sam_model_opt
    - Optional semantic segmentation model that provides additional detail through segmentation masks.
    - Comfy dtype: SAM_MODEL
    - Python dtype: Optional[Callable]
- segm_detector_opt
    - Optional segmentation detector to further refine the output with segmentation details.
    - Comfy dtype: SEGM_DETECTOR
    - Python dtype: Optional[Callable]
- detailer_hook
    - Hooks for custom refinement functions, enabling further customization of the refinement process.
    - Comfy dtype: DETAILER_HOOK
    - Python dtype: Optional[Callable]

# Output types
- detailer_pipe
    - Enhanced and refined version of the input pipeline, containing additional features and processing steps.
    - Comfy dtype: DETAILER_PIPE
    - Python dtype: Tuple[Optional[Any], ...]
- pipe
    - The original input pipeline, returned for reference or further processing.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ttN_pipe_2DETAILER:
    version = '1.2.0'
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {"pipe": ("PIPE_LINE",),
                             "bbox_detector": ("BBOX_DETECTOR", ), 
                             "wildcard": ("STRING", {"multiline": True, "placeholder": "wildcard spec: if kept empty, this option will be ignored"}),
                            },
                "optional": {"sam_model_opt": ("SAM_MODEL", ), 
                             "segm_detector_opt": ("SEGM_DETECTOR",),
                             "detailer_hook": ("DETAILER_HOOK",),
                            },
                "hidden": {"ttNnodeVersion": ttN_pipe_2DETAILER.version},
                }

    RETURN_TYPES = ("DETAILER_PIPE", "PIPE_LINE" )
    RETURN_NAMES = ("detailer_pipe", "pipe")
    FUNCTION = "flush"

    CATEGORY = "ttN/pipe"

    def flush(self, pipe, bbox_detector, wildcard, sam_model_opt=None, segm_detector_opt=None, detailer_hook=None):
        detailer_pipe = (pipe.get('model'), pipe.get('clip'), pipe.get('vae'), pipe.get('positive'), pipe.get('negative'), wildcard,
                         bbox_detector, segm_detector_opt, sam_model_opt, detailer_hook, None, None, None, None)
        return (detailer_pipe, pipe, )

```
