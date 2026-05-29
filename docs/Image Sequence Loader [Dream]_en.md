
# Documentation
- Class name: Image Sequence Loader [Dream]
- Category: ✨ Dream/🌄 image/🎥 animation
- Output node: False

The Image Sequence Loader node loads a series of images from a specified directory, selecting images by applying a pattern and indexing method. If no matching images are found, it can provide a default image as a fallback.

# Input types
## Required
- frame_counter
- Represents the current frame counter, used to determine which image to load based on its order in the sequence.
    - Comfy dtype: FRAME_COUNTER
    - Python dtype: FrameCounter
- directory_path
- Stores the directory path of the image sequence, enabling the node to locate and load images.
    - Comfy dtype: STRING
    - Python dtype: str
- pattern
- Pattern used to match filenames in the directory, allowing selective loading based on image names.
    - Comfy dtype: STRING
    - Python dtype: str
- indexing
- Method for determining image indexing, which can be numeric or alphabetical, to establish sequence order.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- default_image
- Optional default image returned when the directory contains no images matching the specified pattern and index.
    - Comfy dtype: IMAGE
    - Python dtype: Image

# Output types
- image
- Image loaded from the sequence according to the current frame counter; returns the default image if no match is found.
    - Comfy dtype: IMAGE
    - Python dtype: DreamImage
- frame_name
- Name of the frame loaded from the sequence, providing context or identification for the image.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamImageSequenceInputWithDefaultFallback:
    NODE_NAME = "Image Sequence Loader"
    ICON = "💾"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": SharedTypes.frame_counter | {
                "directory_path": ("STRING", {"default": '', "multiline": False}),
                "pattern": ("STRING", {"default": '*', "multiline": False}),
                "indexing": (["numeric", "alphabetic order"],)
            },
            "optional": {
                "default_image": ("IMAGE", {"default": None})
            }
        }

    CATEGORY = NodeCategories.IMAGE_ANIMATION
    RETURN_TYPES = ("IMAGE","STRING")
    RETURN_NAMES = ("image","frame_name")
    FUNCTION = "result"

    @classmethod
    def IS_CHANGED(cls, *values):
        return ALWAYS_CHANGED_FLAG

    def result(self, frame_counter: FrameCounter, directory_path, pattern, indexing, **other):
        default_image = other.get("default_image", None)
        entries = list_images_in_directory(directory_path, pattern, indexing == "alphabetic order")
        entry = entries.get(frame_counter.current_frame, None)
        if not entry:
            return (default_image, "")
        else:
            image_names = [os.path.basename(file_path) for file_path in entry]
            images = map(lambda f: DreamImage(file_path=f), entry)
            return (DreamImage.join_to_tensor_data(images), image_names[0]) 

```
