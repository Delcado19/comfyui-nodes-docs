# Documentation
- Class name: SegmDetectorForEach
- Category: ImpactPack/Detector
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SegmDetectorForEach node is designed to perform segmentation detection processing and analysis on images. It applies a segmentation model to identify different regions in an image, following a specific detection confidence threshold. The node can handle various parameters such as dilation, crop factor, and downsample size to optimize the detection process. It also allows filtering detected segments based on a label list, enhancing its utility in targeted analysis scenarios.

# Input types
## Required
- segm_detector
    - The segm_detector parameter is critical to the node's operation, as it defines the segmentation model that will be used to analyze the input image. It plays a core role in the detection process, directly affecting the accuracy and quality of segmentation results.
    - Comfy dtype: SEGM_DETECTOR
    - Python dtype: torch.nn.Module
- image
    - The image input is essential for the SegmDetectorForEach node, as it is the primary data source for segmentation detection. The quality and resolution of the image directly affect the node's ability to accurately detect and segment different regions within the image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- threshold
    - The threshold parameter is important for controlling the detection sensitivity of the segmentation model. It determines the minimum confidence level required for a segment to be considered detected, thereby affecting the node's output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- dilation
    - The dilation parameter is important for post-processing detected segments. It controls the degree of morphological dilation applied to segments, which helps refine boundaries and improve overall segmentation quality.
    - Comfy dtype: INT
    - Python dtype: int
- crop_factor
    - The crop_factor parameter is used to resize the image before processing by the segmentation model. It can help focus on specific regions of interest within the image and improve detection accuracy.
    - Comfy dtype: FLOAT
    - Python dtype: float
- drop_size
    - The drop_size parameter is related to controlling the resolution at which the segmentation model runs. It can be used to balance processing speed and the level of detail in segmentation results.
    - Comfy dtype: INT
    - Python dtype: int
- labels
    - The labels parameter allows filtering detected segments based on a specified list of segment types. It is particularly useful when analysis requires focusing on specific segments of interest.
    - Comfy dtype: STRING
    - Python dtype: str
- detailer_hook
    - The detailer_hook parameter provides a mechanism to customize the detection process. It allows integration of additional functionality or post-processing steps specific to user requirements.
    - Comfy dtype: DETAILER_HOOK
    - Python dtype: Callable

# Output types
- segs
    - The output segs parameter represents the segments detected from the input image. It is a collection of segmented regions, each with its own attributes and labels, providing a detailed analysis of the image content.
    - Comfy dtype: SEGS
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
```
class SegmDetectorForEach:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'segm_detector': ('SEGM_DETECTOR',), 'image': ('IMAGE',), 'threshold': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'dilation': ('INT', {'default': 10, 'min': -512, 'max': 512, 'step': 1}), 'crop_factor': ('FLOAT', {'default': 3.0, 'min': 1.0, 'max': 100, 'step': 0.1}), 'drop_size': ('INT', {'min': 1, 'max': MAX_RESOLUTION, 'step': 1, 'default': 10}), 'labels': ('STRING', {'multiline': True, 'default': 'all', 'placeholder': 'List the types of segments to be allowed, separated by commas'})}, 'optional': {'detailer_hook': ('DETAILER_HOOK',)}}
    RETURN_TYPES = ('SEGS',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Detector'

    def doit(self, segm_detector, image, threshold, dilation, crop_factor, drop_size, labels=None, detailer_hook=None):
        if len(image) > 1:
            raise Exception('[Impact Pack] ERROR: SegmDetectorForEach does not allow image batches.\nPlease refer to https://github.com/ltdrdata/ComfyUI-extension-tutorials/blob/Main/ComfyUI-Impact-Pack/tutorial/batching-detailer.md for more information.')
        segs = segm_detector.detect(image, threshold, dilation, crop_factor, drop_size, detailer_hook)
        if labels is not None and labels != '':
            labels = labels.split(',')
            if len(labels) > 0:
                (segs, _) = segs_nodes.SEGSLabelFilter.filter(segs, labels)
        return (segs,)
```