
# Documentation
- Class name: ImageDirIterator
- Category: cspnodes
- Output node: False

The ImageDirIterator node is designed to iterate over images in a specified directory and retrieve them by index. This functionality is particularly useful for applications requiring sequential or random access to image collections, such as image processing pipelines or data loading for machine learning models.

# Input types
## Required
- directory_path
    - Specifies the directory path containing the images to iterate over. This path is essential for locating and accessing image files.
    - Comfy dtype: STRING
    - Python dtype: str
- image_index
    - Determines the index of the image to retrieve from the sorted list of image files in the directory. The index is wrapped using modular arithmetic to ensure it falls within the valid range of available images.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Returns the tensor representation of the image at the specified index, preprocessed and ready for further processing or as model input.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageDirIterator:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "directory_path": ("STRING", {}),
                "image_index": ("INT", {"default": 0})
            }
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "get_image_by_index"
    CATEGORY = "cspnodes"

    def get_image_by_index(self, directory_path, image_index):
        # Get list of image files sorted by modification time (most recent first)
        image_files = sorted(
            [os.path.join(directory_path, f) for f in os.listdir(directory_path)
             if f.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif'))],
            key=lambda x: os.path.getmtime(x),
            reverse=True
        )

        # Wrap the index around using modulo
        image_index = image_index % len(image_files)

        # Load and preprocess the image
        image = Image.open(image_files[image_index])
        image = ImageOps.exif_transpose(image)  # Correct orientation
        image = image.convert("RGB")  # Ensure image is in RGB format

        # Convert image to tensor
        image_tensor = torch.from_numpy(np.array(image).astype(np.float32) / 255.0)[None,]

        return (image_tensor,)

```
