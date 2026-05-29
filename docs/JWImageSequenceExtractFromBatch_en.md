
# Documentation
- Class name: JWImageSequenceExtractFromBatch
- Category: jamesWalker55
- Output node: False

The JWImageSequenceExtractFromBatch node is designed to extract a specified range of image sequences from a batch of images. By setting start and end indices, users can selectively retrieve specific subsets from large image collections, facilitating subsequent operations and analysis on targeted image data. This node enhances flexibility and precise control over image batch processing.

# Input types
## Required
- images
    - This parameter is the core input for the image extraction operation, representing the batch of images to be processed. It directly determines the range of images available for selection and is critical to the node's functionality.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- i_start
    - The i_start parameter specifies the starting position for sequence extraction, determining the first image in the output sequence. It plays a key role in controlling the extraction range.
    - Comfy dtype: INT
    - Python dtype: int
- i_stop
    - The i_stop parameter marks the ending position for sequence extraction, affecting the last image in the output sequence. Together with i_start, it defines the range of images to be extracted.
    - Comfy dtype: INT
    - Python dtype: int
- inclusive
    - The inclusive parameter is a boolean flag that determines whether the image at the end index is included in the extraction result. This provides users with finer-grained control.
    - Comfy dtype: ['false', 'true']
    - Python dtype: str

# Output types
- image
    - The output image is a tensor containing the image sequence extracted from the original batch according to the specified index range. This output serves as the foundation for subsequent image processing and analysis.
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
