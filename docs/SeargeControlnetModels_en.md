# Documentation
- Class name: SeargeControlnetModels
- Category: UI_INPUTS
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node coordinates the retrieval and integration of various ControlNet models for image processing tasks, facilitating customized visual outputs based on different model checkpoints.

# Input types
## Required
- clip_vision
    - The clip_vision parameter is critical for selecting model checkpoints that influence the visual style and content of the generated image.
    - Comfy dtype: COMBO[UI.CLIP_VISION_WITH_NONE()]
    - Python dtype: Union[str, None]
- canny_checkpoint
    - This parameter is essential for edge detection in images, enabling the node to refine structural elements of the output based on the selected checkpoint.
    - Comfy dtype: COMBO[UI.CONTROLNETS_WITH_NONE()]
    - Python dtype: Union[str, None]
- depth_checkpoint
    - The depth_checkpoint parameter is crucial for controlling depth perception in generated images, enhancing the three-dimensional aspects of the presentation.
    - Comfy dtype: COMBO[UI.CONTROLNETS_WITH_NONE()]
    - Python dtype: Union[str, None]
- recolor_checkpoint
    - This parameter is vital for adjusting the color palette of the image, allowing a wide range of stylistic variations in the final visual product.
    - Comfy dtype: COMBO[UI.CONTROLNETS_WITH_NONE()]
    - Python dtype: Union[str, None]
- sketch_checkpoint
    - The sketch_checkpoint parameter plays a significant role in rendering images in a sketch style, providing a unique artistic interpretation.
    - Comfy dtype: COMBO[UI.CONTROLNETS_WITH_NONE()]
    - Python dtype: Union[str, None]
- custom_checkpoint
    - This parameter allows the implementation of custom ControlNet models, extending the node's functionality to meet specific user-defined requirements.
    - Comfy dtype: COMBO[UI.CONTROLNETS_WITH_NONE()]
    - Python dtype: Union[str, None]

# Output types
- data
    - The data output is a structured dictionary containing the selected ControlNet models, providing a foundation for further image processing operations.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeControlnetModels:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'clip_vision': (UI.CLIP_VISION_WITH_NONE(),), 'canny_checkpoint': (UI.CONTROLNETS_WITH_NONE(),), 'depth_checkpoint': (UI.CONTROLNETS_WITH_NONE(),), 'recolor_checkpoint': (UI.CONTROLNETS_WITH_NONE(),), 'sketch_checkpoint': (UI.CONTROLNETS_WITH_NONE(),), 'custom_checkpoint': (UI.CONTROLNETS_WITH_NONE(),)}, 'optional': {'data': ('SRG_DATA_STREAM',)}}
    RETURN_TYPES = ('SRG_DATA_STREAM',)
    RETURN_NAMES = ('data',)
    FUNCTION = 'get'
    CATEGORY = UI.CATEGORY_UI_INPUTS

    @staticmethod
    def create_dict(clip_vision, canny_checkpoint, depth_checkpoint, recolor_checkpoint, sketch_checkpoint, custom_checkpoint):
        return {UI.F_CLIP_VISION_CHECKPOINT: clip_vision, UI.F_CANNY_CHECKPOINT: canny_checkpoint, UI.F_DEPTH_CHECKPOINT: depth_checkpoint, UI.F_RECOLOR_CHECKPOINT: recolor_checkpoint, UI.F_SKETCH_CHECKPOINT: sketch_checkpoint, UI.F_CUSTOM_CHECKPOINT: custom_checkpoint}

    def get(self, clip_vision, canny_checkpoint, depth_checkpoint, recolor_checkpoint, sketch_checkpoint, custom_checkpoint, data=None):
        if data is None:
            data = {}
        data[UI.S_CONTROLNET_MODELS] = self.create_dict(clip_vision, canny_checkpoint, depth_checkpoint, recolor_checkpoint, sketch_checkpoint, custom_checkpoint)
        return (data,)
```