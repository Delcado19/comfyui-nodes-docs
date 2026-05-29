
# Documentation
- Class name: FL_ImagePixelator
- Category: 🏵️Fill Nodes
- Output node: False
- Repo Ref: https://github.com/fillmeout/image_manipulators/FL_ImagePixelator

FL_ImagePixelator node can add pixelation effect to images, supporting single image and batch image processing. It can process images in tensor format or PIL format, achieves image pixelation by applying a scaling factor, and uses a specified kernel size for additional processing to enhance the pixelation effect.

# Input types
## Required
- image
    - The image to be pixelated. It can be a single image or a batch of images, and the format can be torch.Tensor or PIL.Image. This is the main input for pixelation processing.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, PIL.Image.Image]
- scale_factor
    - Determines the strength of the pixelation effect by reducing the image resolution before enlarging.
    - Comfy dtype: FLOAT
    - Python dtype: float
- kernel_size
    - Specifies the kernel size used in the additional processing step after pixelation, affecting the appearance of the final pixelated image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The pixelated image processed according to the specified scaling factor and kernel size. It can be a single image or a batch of images, with the same format as the input.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, PIL.Image.Image]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class FL_ImagePixelator:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "image": ("IMAGE", {}),
                "scale_factor": ("FLOAT", {"default": 0.0500, "min": 0.0100, "max": 0.2000, "step": 0.0100}),
                "kernel_size": ("INT", {"default": 3, "max": 10, "step": 1}),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "pixelate_image"
    CATEGORY = "🏵️Fill Nodes"

    def pixelate_image(self, image, scale_factor, kernel_size):
        if isinstance(image, torch.Tensor):
            if image.dim() == 4:  # Batch dimension is present
                output_images = []
                total_frames = image.shape[0]
                for i, single_image in enumerate(image, start=1):
                    single_image = single_image.unsqueeze(0)  # Add batch dimension
                    single_image = self.apply_pixelation_tensor(single_image, scale_factor)
                    single_image = self.process(single_image, kernel_size)
                    output_images.append(single_image)
                    print(f"Processing frame {i}/{total_frames}")
                image = torch.cat(output_images, dim=0)  # Concatenate processed images along batch dimension
            elif image.dim() == 3:  # No batch dimension, single image
                image = image.unsqueeze(0)  # Add batch dimension
                image = self.apply_pixelation_tensor(image, scale_factor)
                image = self.process(image, kernel_size)
                image = image.squeeze(0)  # Remove batch dimension
                print("Processing single image")
            else:
                return (None,)
        elif isinstance(image, Image.Image):
            image = self.apply_pixelation_pil(image, scale_factor)
            image = self.process(image, kernel_size)
            print("Processing single PIL image")
        else:
            return (None,)

        return (image,)

    def apply_pixelation_pil(self, input_image, scale_factor):
        width, height = input_image.size
        new_size = (int(width * scale_factor), int(height * scale_factor))
        resized_image = input_image.resize(new_size, Image.NEAREST)
        pixelated_image = resized_image.resize((width, height), Image.NEAREST)
        return pixelated_image

    def apply_pixelation_tensor(self, input_image, scale_factor):
        _, num_channels, height, width = input_image.shape
        new_height, new_width = max(1, int(height * scale_factor)), max(1, int(width * scale_factor))
        resized_tensor = torch.nn.functional.interpolate(input_image, size=(new_height, new_width), mode='nearest')
        output_tensor = torch.nn.functional.interpolate(resized_tensor, size=(height, width), mode='nearest')
        return output_tensor

    def process(self, image, kernel_size):
        device = comfy.model_management.get_torch_device()
        kernel = torch.ones(kernel_size, kernel_size, device=device)
        image_k = image.to(device).movedim(-1, 1)
        output = gradient(image_k, kernel)
        img_out = output.to(comfy.model_management.intermediate_device()).movedim(1, -1)
        return img_out

```
