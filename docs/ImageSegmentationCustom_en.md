
# Documentation
- Class name: ImageSegmentationCustom
- Category: image/segmentation
- Output node: False

The ImageSegmentationCustom node is specifically designed for custom image segmentation tasks, utilizing advanced configurations and models to precisely delineate and separate different elements in images. It is designed for scenarios requiring customized segmentation methods, providing flexible processing capabilities to enhance image analysis.

# Input types
## Required
- images
    - The input image to be segmented. This parameter is critical as it directly affects the segmentation results, determining the visual elements to be analyzed and separated.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]
- model
    - Specifies the segmentation model to be used. This choice has a significant impact on the accuracy and quality of segmentation, allowing customization based on specific needs.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- alpha_matting
    - A boolean flag indicating whether alpha matting should be applied to improve the edge quality of the segmentation, particularly helpful for achieving more precise and refined edges.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- alpha_matting_foreground_threshold
    - Determines the threshold for foreground elements in the alpha matting context, helping to improve segmentation accuracy around object boundaries.
    - Comfy dtype: INT
    - Python dtype: float
- alpha_matting_background_threshold
    - Identifies the threshold for background elements during the alpha matting process, contributing to improved clarity and precision in the background regions of the segmented image.
    - Comfy dtype: INT
    - Python dtype: float
- alpha_matting_erode_size
    - Defines the erosion size applied in alpha matting, which can help reduce noise around edges and improve overall segmentation quality.
    - Comfy dtype: INT
    - Python dtype: int
- post_process_mask
    - Indicates whether post-processing should be applied to the segmentation mask to improve its quality, such as smoothing edges or removing noise.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- mean
    - The mean used for normalizing the input image, playing a key role in adjusting the image's color properties when preparing the image for segmentation.
    - Comfy dtype: FLOAT
    - Python dtype: Tuple[float, float, float]
- std
    - The standard deviation value for image normalization, essential for adjusting the scale of pixel values to match the expected input distribution of the model.
    - Comfy dtype: FLOAT
    - Python dtype: Tuple[float, float, float]
- size
    - Specifies the target size to which the image should be resized before segmentation, affecting the resolution and level of detail in the segmentation output.
    - Comfy dtype: INT
    - Python dtype: Tuple[int, int]

# Output types
- image
    - The segmented image, where different elements within each image are precisely delineated and separated, ready for further analysis or processing.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageSegmentationCustom:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "model": (folder_paths.get_filename_list("onnx"),),
                "alpha_matting": (["true", "false"],),
                "alpha_matting_foreground_threshold": ("INT", {
                    "default": 240,
                    "max": 250,
                    "step": 5
                }),
                "alpha_matting_background_threshold": ("INT", {
                    "default": 20,
                    "max": 250,
                    "step": 5
                }),
                "alpha_matting_erode_size": ("INT", {
                    "default": 10,
                    "step": 1
                }),
                "post_process_mask": (["false", "true"],),
                "mean": ("FLOAT", {
                    "default": 0.485,
                    "max": 1.0,
                    "step": 0.01
                }),
                "std": ("FLOAT", {
                    "default": 1.0,
                    "max": 1.0,
                    "step": 0.01
                }),
                "size": ("INT", {
                    "default": 1024,
                    "step": 8
                }),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/segmentation"

    def node(
            self,
            images,
            model,
            alpha_matting,
            alpha_matting_foreground_threshold,
            alpha_matting_background_threshold,
            alpha_matting_erode_size,
            post_process_mask,
            mean,
            std,
            size
    ):
        container = CustomSessionContainer(mean, mean, mean, std, std, std, size, size)

        class CustomSession(CustomAbstractSession):
            def __init__(self):
                super().__init__(model)

            @classmethod
            def name(cls, *args, **kwargs):
                return model

        session = CustomSession().from_container(container)

        return ImageSegmentation().node(
            images,
            model,
            alpha_matting,
            alpha_matting_foreground_threshold,
            alpha_matting_background_threshold,
            alpha_matting_erode_size,
            post_process_mask,
            session
        )

```
