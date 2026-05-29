
# Documentation
- Class name: Deflicker (SuperBeasts.AI)
- Category: SuperBeastsAI/Animation
- Output node: False

The Deflicker node reduces flicker in an image sequence by adjusting each image's brightness based on the average brightness of surrounding images, and incorporates denoising, gradient smoothing, and dithering to improve visual quality.

# Input types
## Required
- images
    - The image sequence that requires flicker reduction. This input is essential for establishing context and applying necessary adjustments to each frame.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- context_length
    - The number of neighboring images to consider when calculating average brightness, which influences the strength of flicker correction.
    - Comfy dtype: INT
    - Python dtype: int
- brightness_threshold
    - The minimum brightness difference between the current image and the contextual average that triggers an adjustment, controlling flicker sensitivity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blending_strength
    - The blend intensity between the original and processed images, affecting the subtlety of the deflickering effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_reduction_strength
    - The level of denoising applied to each image, enhancing clarity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- gradient_smoothing_strength
    - The degree of gradient smoothing, reducing visual noise and improving image coherence.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - The number of images processed at once, impacting performance and memory usage.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The image sequence after deflickering and additional enhancements, ready for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class Deflicker:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "context_length": ("INT", {"default": 5, "min": 1, "max": 20, "step": 1}),
                "brightness_threshold": ("FLOAT", {"default": 0.05, "min": 0.01, "max": 0.5, "step": 0.01}),
                "blending_strength": ("FLOAT", {"default": 0.1, "min": 0.0, "max": 1.0, "step": 0.01}),
                "noise_reduction_strength": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 5.0, "step": 0.1}),
                "gradient_smoothing_strength": ("INT", {"default": 1, "min": 0, "max": 3, "step": 1}),
                "batch_size": ("INT", {"default": 10, "min": 1, "max": 100, "step": 1})
            }
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "deflicker"
    CATEGORY = "SuperBeastsAI/Animation"

    def deflicker(self, images, context_length=5, brightness_threshold=0.05, blending_strength=0.5,
                  noise_reduction_strength=1.0, gradient_smoothing_strength=1, batch_size=10):
        num_frames = len(images)
        adjusted_tensor = []

        for i in range(0, num_frames, batch_size):
            batch_images = images[i:i+batch_size]

            # Convert batch tensor to a list of PIL images
            pil_images = [tensor2pil(image) for image in batch_images]

            adjusted_images = []

            for j in range(len(pil_images)):
                current_image = pil_images[j]
                context_start = max(0, i + j - context_length // 2)
                context_end = min(num_frames, i + j + context_length // 2 + 1)
                context_images = images[context_start:context_end]

                current_brightness = get_average_brightness(current_image)
                context_brightnesses = [get_average_brightness(tensor2pil(img)) for img in context_images]
                average_brightness = np.mean(context_brightnesses)

                if abs(current_brightness - average_brightness) > brightness_threshold:
                    brightness_factor = calculate_brightness_factor(average_brightness, current_brightness)
                    adjusted_image = adjust_brightness(current_image, brightness_factor)
                else:
                    adjusted_image = current_image

                # Apply noise reduction to the adjusted image
                denoised_image = apply_noise_reduction(adjusted_image, noise_reduction_strength)

                # Apply gradient smoothing to the denoised image
                smoothed_image = apply_gradient_smoothing(denoised_image, gradient_smoothing_strength)

                # Apply dithering to the smoothed image
                dithered_image = apply_dithering(smoothed_image)

                # Blend the dithered image with the original image using adaptive blending
                blending_alpha = min(1.0, blending_strength * (1.0 + abs(current_brightness - average_brightness)))
                blended_image = blend_images(current_image, dithered_image, blending_alpha)

                adjusted_images.append(blended_image)

            # Convert the adjusted PIL images back to a tensor
            adjusted_batch_tensor = torch.cat([pil2tensor(img) for img in adjusted_images], dim=0)
            adjusted_tensor.append(adjusted_batch_tensor)

        # Concatenate the adjusted batches along the first dimension
        adjusted_tensor = torch.cat(adjusted_tensor, dim=0)

        return (adjusted_tensor,)

```
