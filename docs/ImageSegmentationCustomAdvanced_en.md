
# Documentation
- Class name: ImageSegmentationCustomAdvanced
- Category: image/segmentation
- Output node: False

The ImageSegmentationCustomAdvanced node is designed for advanced image segmentation tasks, providing customizable options to process images using specific models and settings. It allows fine-tuning of segmentation parameters and post-processing techniques to achieve precise and customized segmentation results.

# Input types
## Required
- images
    - The image to be segmented. This parameter is critical as it directly affects the segmentation results by providing visual data.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]
- model
    - The segmentation model to be used. This choice impacts the accuracy and type of segmentation, allowing flexibility for various segmentation challenges.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- alpha_matting
    - A boolean flag indicating whether alpha matting should be applied to refine segmentation edges. This improves segmentation quality by providing smoother and more natural edges.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- alpha_matting_foreground_threshold
    - The threshold for determining foreground pixels in alpha matting. This parameter helps fine-tune the edge refinement process.
    - Comfy dtype: INT
    - Python dtype: int
- alpha_matting_background_threshold
    - The threshold for determining background pixels in alpha matting. It plays a critical role in accurately separating background and foreground.
    - Comfy dtype: INT
    - Python dtype: int
- alpha_matting_erode_size
    - The erosion size applied during the alpha matting process. This affects the level of detail at the segmentation edges, allowing more precise edge control.
    - Comfy dtype: INT
    - Python dtype: int
- post_process_mask
    - A boolean flag indicating whether the segmentation mask should be post-processed. This may include operations such as smoothing or filtering to improve mask quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- mean_r
    - The mean red channel value used for normalizing the image. This value is essential for ensuring image data is properly scaled before processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mean_g
    - The mean green channel value used for normalizing the image. This value is essential for ensuring image data is properly scaled before processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mean_b
    - The mean blue channel value used for normalizing the image. This value is essential for ensuring image data is properly scaled before processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- std_r
    - The standard deviation of the red channel used for image normalization. This value ensures image data is consistently normalized across all images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- std_g
    - The standard deviation of the green channel used for image normalization. This value ensures image data is consistently normalized across all images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- std_b
    - The standard deviation of the blue channel used for image normalization. This value ensures image data is consistently normalized across all images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- width
    - The target width to which the image will be resized before segmentation. This parameter ensures all images are processed at a consistent scale, affecting segmentation accuracy and performance.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The target height to which the image will be resized before segmentation. This parameter ensures all images are processed at a consistent scale, affecting segmentation accuracy and performance.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The segmented image or set of images. This output represents the final segmentation result, showing the foreground separated from the background.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageSegmentationCustomAdvanced:
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
                "mean_r": ("FLOAT", {
                    "default": 0.485,
                    "max": 1.0,
                    "step": 0.01
                }),
                "mean_g": ("FLOAT", {
                    "default": 0.456,
                    "max": 1.0,
                    "step": 0.01
                }),
                "mean_b": ("FLOAT", {
                    "default": 0.406,
                    "max": 1.0,
                    "step": 0.01
                }),
                "std_r": ("FLOAT", {
                    "default": 1.0,
                    "max": 1.0,
                    "step": 0.01
                }),
                "std_g": ("FLOAT", {
                    "default": 1.0,
                    "max": 1.0,
                    "step": 0.01
                }),
                "std_b": ("FLOAT", {
                    "default": 1.0,
                    "max": 1.0,
                    "step": 0.01
                }),
                "width": ("INT", {
                    "default": 1024,
                    "step": 8
                }),
                "height": ("INT", {
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
            mean_x,
            mean_y,
            mean_z,
            std_x,
            std_y,
            std_z,
            width,
            height
    ):
        container = CustomSessionContainer(mean_x, mean_y, mean_z, std_x, std_y, std_z, width, height)

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
