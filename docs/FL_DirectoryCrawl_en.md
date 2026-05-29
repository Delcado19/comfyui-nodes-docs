
# Documentation
- Class name: FL_DirectoryCrawl
- Category: 🏵️Fill Nodes
- Output node: False

The FL_DirectoryCrawl node is designed to scan a specified directory and its subdirectories for image files, supporting multiple common image formats. It loads these images, applies necessary orientation correction, converts them to a unified RGB format, and finally aggregates them into a batch of tensors. This process facilitates batch processing of images from the file system for further image operations or analysis.

# Input types
## Required
- directory_path
    - Specifies the directory path where the node will scan for image files. This path is critical as it determines the starting point for the image search, thereby influencing which images are loaded and processed.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - A batch of loaded, correctly oriented, RGB-converted, and standardized images, encapsulated in tensors. This output facilitates further processing or analysis in image-based machine learning workflows.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class FL_DirectoryCrawl:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "directory_path": ("STRING", {"default": ""}),
            }
        }

    RETURN_TYPES = ("IMAGE",)  # Output a batch of images
    FUNCTION = "load_image_batch"
    CATEGORY = "🏵️Fill Nodes"

    def load_image_batch(self, directory_path):
        if not directory_path:
            raise ValueError("Directory path is not provided.")

        image_paths = self.crawl_directories(directory_path)
        if not image_paths:
            raise ValueError("No images found in the specified directory and its subdirectories.")

        batch_images = []
        for img_path in image_paths:
            image = Image.open(img_path)
            image = ImageOps.exif_transpose(image)  # Correct orientation
            image = image.convert("RGB")
            image_np = np.array(image).astype(np.float32) / 255.0
            batch_images.append(image_np)

        batch_images_np = np.stack(batch_images, axis=0)  # Create a numpy array batch
        batch_images_tensor = torch.from_numpy(batch_images_np)  # Convert to tensor

        return (batch_images_tensor,)

    def crawl_directories(self, directory):
        supported_formats = ["jpg", "jpeg", "png", "bmp", "gif"]
        image_paths = []
        for root, dirs, files in os.walk(directory):
            for file in files:
                if file.split('.')[-1].lower() in supported_formats:
                    full_path = os.path.join(root, file)
                    image_paths.append(full_path)
        return image_paths

```
