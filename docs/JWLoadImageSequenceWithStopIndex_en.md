
# Documentation
- Class name: JWLoadImageSequenceWithStopIndex
- Category: jamesWalker55
- Output node: False
- Repo Ref: https://github.com/jamesWalker55/comfyui-various-scripts

The JWLoadImageSequenceWithStopIndex node is designed to batch-load image sequences with specified start and stop indices, with options to include or exclude the stop index and ignore missing images. It supports dynamic loading of image sequences from the file system, providing flexible data processing for image processing workflows.

# Input types
## Required
- path_pattern
    - Specify the pattern or path used to locate images to load, using placeholders for indices.
    - Comfy dtype: STRING
    - Python dtype: str
- start_index
    - Define the starting index of the image sequence to load.
    - Comfy dtype: INT
    - Python dtype: int
- stop_index
    - Set the stop index for the image sequence, determining the range of images to include.
    - Comfy dtype: INT
    - Python dtype: int
- inclusive
    - Decide whether to include the stop index in the loaded sequence, allowing inclusive or exclusive range selection.
    - Comfy dtype: ['false', 'true']
    - Python dtype: str
- ignore_missing_images
    - Control whether to ignore missing images within the specified range, enabling robust handling of incomplete sequences.
    - Comfy dtype: ['false', 'true']
    - Python dtype: str

# Output types
- image
    - Return the loaded image sequence as a tensor for further processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
@register_node("JWLoadImageSequence", "Batch Load Image Sequence")
class _:
    CATEGORY = "jamesWalker55"
    INPUT_TYPES = lambda: {
        "required": {
            "path_pattern": (
                "STRING",
                {"default": "./frame{:06d}.png", "multiline": False},
            ),
            "start_index": ("INT", {"default": 0, "min": 0, "step": 1}),
            "frame_count": ("INT", {"default": 16, "min": 1, "step": 1}),
            "ignore_missing_images": (("false", "true"), {"default": "false"}),
        }
    }
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    def execute(
        self,
        path_pattern: str,
        start_index: int,
        frame_count: int,
        ignore_missing_images: str,
    ):
        ignore_missing_images: bool = ignore_missing_images == "true"

        # generate image paths to load
        image_paths = []
        for i in range(start_index, start_index + frame_count):
            try:
                image_paths.append(path_pattern.format(i))
            except KeyError:
                image_paths.append(path_pattern.format(i=i))

        if ignore_missing_images:
            # remove missing images
            image_paths = [p for p in image_paths if os.path.exists(p)]
        else:
            # early check for missing images
            for path in image_paths:
                if not os.path.exists(path):
                    raise FileNotFoundError(f"Image does not exist: {path}")

        if len(image_paths) == 0:
            raise RuntimeError("Image sequence empty - no images to load")

        imgs = []
        for path in image_paths:
            img = load_image(path)
            # img.shape => torch.Size([1, 768, 768, 3])
            imgs.append(img)

        imgs = torch.cat(imgs, dim=0)

        return (imgs,)

```
