
# Documentation
- Class name: Framed Mask Grab Cut 2
- Category: Bmad/CV/GrabCut
- Output node: False

This node applies the GrabCut algorithm with border options to segment the foreground and background in an image. It allows specifying regions that may be foreground or background and can adjust the segmentation result based on border options to exclude certain edge areas.

# Input types
## Required
- image
    - The input image to which the GrabCut algorithm will be applied. This image will be preprocessed to meet the algorithm's requirements.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- thresh_maybe
    - A thresholded version of the image representing possible foreground regions, used to refine the segmentation result.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- thresh_sure
    - A thresholded version of the image representing definite foreground regions, further refining the segmentation result.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- iterations
    - The number of iterations the GrabCut algorithm runs, affecting the accuracy and detail of the segmentation.
    - Comfy dtype: INT
    - Python dtype: int
- margin
    - The size of edges to exclude from the border, which can be used to ignore certain edges of the image.
    - Comfy dtype: INT
    - Python dtype: int
- frame_option
    - Specifies image edges to exclude from foreground or background consideration, allowing finer control over segmentation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- binary_threshold
    - The threshold used to distinguish possible foreground and background in 'thresh_maybe' and 'thresh_sure' images.
    - Comfy dtype: INT
    - Python dtype: float
- maybe_black_is_sure_background
    - A flag indicating whether regions identified as possible background in 'thresh_maybe' should be treated as definite background, affecting the final segmentation result.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- output_format
    - The desired output format, which can be a mask indicating the segmented foreground or another required format.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The node's output is an image segmented by the GrabCut algorithm, where the foreground has been separated from the background.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class FramedMaskGrabCut2:
    # TODO option to ignore probable background in sure_thresh

    frame_options = ['FULL_FRAME', 'IGNORE_BOTTOM', 'IGNORE_TOP', 'IGNORE_RIGHT', 'IGNORE_LEFT', 'IGNORE_HORIZONTAL'
        , 'IGNORE_VERTICAL']
    frame_options_values = {
        'FULL_FRAME': 0,
        'IGNORE_BOTTOM': 1,
        'IGNORE_TOP': 2,
        'IGNORE_RIGHT': 4,
        'IGNORE_LEFT': 8,
        'IGNORE_HORIZONTAL': 12,
        'IGNORE_VERTICAL': 3,
    }

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "image": ("IMAGE",),
                "thresh_maybe": ("IMAGE",),
                "thresh_sure": ("IMAGE",),
                "iterations": ("INT", {
                    "default": 25,
                    "min": 0,
                    "max": 200,
                    "step": 1
                }),
                "margin": ("INT", {
                    "default": 2,
                    "min": 1,
                    "max": 100,
                    "step": 1
                }),
                "frame_option": (s.frame_options, {
                    "default": 'FULL_FRAME'
                }),
                # source thresh may not be only 0s and 1s, use this as a safeguard
                "binary_threshold": ("INT", {
                    "default": 128,
                    "min": 1,
                    "max": 255,
                    "step": 1
                }),
                "maybe_black_is_sure_background": ("BOOLEAN", {"default": False}),
                "output_format": (image_output_formats_options, {
                    "default": image_output_formats_options[0]
                })
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "grab_cut"

    CATEGORY = "Bmad/CV/GrabCut"

    def grab_cut(self, image, thresh_maybe, thresh_sure, iterations,
                 margin, frame_option, binary_threshold,
                 maybe_black_is_sure_background, output_format):
        image = tensor2opencv(image)

        thresh_maybe = tensor2opencv(thresh_maybe, 1)
        thresh_sure = tensor2opencv(thresh_sure, 1)

        fg_model = np.zeros((1, 65), dtype="float")
        bg_model = np.zeros((1, 65), dtype="float")
        mask = np.full(image.shape[:2], cv.GC_PR_BGD, dtype=np.uint8)  # probable background
        mask[thresh_maybe >= binary_threshold] = cv.GC_PR_FGD  # probable foreground
        mask[thresh_sure >= binary_threshold] = cv.GC_FGD  # foreground

        frame_option = self.frame_options_values[frame_option]
        include_bottom = not (frame_option & self.frame_options_values['IGNORE_BOTTOM'])
        include_top = not (frame_option & self.frame_options_values['IGNORE_TOP'])
        include_right = not (frame_option & self.frame_options_values['IGNORE_RIGHT'])
        include_left = not (frame_option & self.frame_options_values['IGNORE_LEFT'])

        if include_bottom:
            mask[-margin:, :] = cv.GC_BGD
        if include_top:
            mask[0:margin, :] = cv.GC_BGD
        if include_right:
            mask[:, -margin:] = cv.GC_BGD
        if include_left:
            mask[:, 0:margin] = cv.GC_BGD

        if maybe_black_is_sure_background:
            mask[thresh_maybe < binary_threshold] = cv.GC_BGD  # background

        mask, bg_model, fg_model = cv.grabCut(image, mask, None, bg_model, fg_model, iterCount=iterations,
                                              mode=cv.GC_INIT_WITH_MASK)

        # generate mask with "pixels" classified as background/foreground
        output_mask = np.where((mask == cv.GC_BGD) | (mask == cv.GC_PR_BGD), 0, 1)
        output_mask = (output_mask * 255).astype("uint8")

        output_mask = maybe_convert_img(output_mask, 1, image_output_formats_options_map[output_format])
        image = opencv2tensor(output_mask)

        return (image,)

```
