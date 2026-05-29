
# Documentation
- Class name: JWSaveImageSequence
- Category: jamesWalker55
- Output node: True

The JWSaveImageSequence node is designed to batch save image sequences to a specified path, allowing custom file naming, index numbering, and providing an option to overwrite existing files. It outputs image data in an organized manner and supports adding additional metadata and prompt information for each saved image.

# Input types
## Required
- images
    - The image tensor to be saved. This collection represents the image sequence that will be saved in a batch operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- path_pattern
    - A string pattern defining the file naming convention and path for each image in the saved sequence. Supports using formatted syntax to include indices.
    - Comfy dtype: STRING
    - Python dtype: str
- start_index
    - The starting index used for naming saved image files, which is combined with the path pattern to generate file names.
    - Comfy dtype: INT
    - Python dtype: int
- overwrite
    - A string indicating whether existing files at the target save location should be overwritten. Accepts 'true' or 'false' as values.
    - Comfy dtype: ['false', 'true']
    - Python dtype: str

# Output types
This node has no output types.


## Usage tips
- Infra type: `CPU`
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
