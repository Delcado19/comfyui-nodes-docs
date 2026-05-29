
# Documentation
- Class name: FL_ImageCaptionSaver
- Category: 🏵️Fill Nodes
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The FL_ImageCaptionSaver node saves a batch of images and their corresponding captions to a specified directory, with options for file naming and overwrite control. It helps organize and store generated images with their text descriptions, improving accessibility and management of visual content.

# Input types
## Required
- images
    - The batch of images to save. This input determines what will be stored and directly affects the output files created.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- folder_name
    - The folder name where images and captions are saved. It serves as the target path for output and affects how saved files are organized.
    - Comfy dtype: STRING
    - Python dtype: str
- caption_text
    - The text caption to save alongside each image. This input provides context or descriptive information for the images, enriching the content's value.
    - Comfy dtype: STRING
    - Python dtype: str
- overwrite
    - A boolean flag indicating whether existing files with the same name should be overwritten. This affects how the node handles file naming conflicts and storage management.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- string
    - A confirmation message detailing the number of images and captions saved and the directory where they are stored. It provides feedback on the operation's success.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FL_ImageCaptionSaver:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE", {}),
                "folder_name": ("STRING", {"default": "output_folder"}),
                "caption_text": ("STRING", {"default": "Your caption here"}),
                "overwrite": ("BOOLEAN", {"default": True})  # New overwrite toggle
            }
        }

    RETURN_TYPES = ("STRING",)
    FUNCTION = "save_images_with_captions"
    CATEGORY = "🏵️Fill Nodes"

    def save_images_with_captions(self, images, folder_name, caption_text, overwrite):
        # Ensure output directory exists
        os.makedirs(folder_name, exist_ok=True)

        saved_files = []
        for i, image_tensor in enumerate(images):
            base_name = f"image_{i}"
            image_file_name = f"{folder_name}/{base_name}.png"
            text_file_name = f"{folder_name}/{base_name}.txt"

            # Check if overwrite is disabled and file exists
            if not overwrite:
                counter = 1
                while os.path.exists(image_file_name) or os.path.exists(text_file_name):
                    image_file_name = f"{folder_name}/{base_name}_{counter}.png"
                    text_file_name = f"{folder_name}/{base_name}_{counter}.txt"
                    counter += 1

            # Convert tensor to image
            image = Image.fromarray((image_tensor.numpy() * 255).astype('uint8'), 'RGB')

            # Save image
            image.save(image_file_name)
            saved_files.append(image_file_name)

            # Save text file
            with open(text_file_name, "w") as text_file:
                text_file.write(caption_text)

        return (f"Saved {len(images)} images and captions in '{folder_name}'",)

```
