
# Documentation
- Class name: easy stableDiffusion3API
- Category: EasyUse/API
- Output node: False

This node utilizes the Stable Diffusion model to generate images, allowing users to specify positive and negative prompts, select model variants, define aspect ratios, and adjust parameters such as seed and denoising strength for customized image creation.

# Input types
## Required
- positive
    - Positive prompts guide image generation toward desired themes or elements by specifying what to include, influencing the model's output.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - Negative prompts guide image generation away from certain themes or elements, helping avoid undesired aspects in the model's output.
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - Specify which Stable Diffusion model variant to use, allowing selection between standard and turbo modes.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- aspect_ratio
    - Determine the aspect ratio of generated images, offering a range of predefined ratios to suit various needs.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- seed
    - Set the seed for the random number generator, enabling reproducible results across image generations.
    - Comfy dtype: INT
    - Python dtype: int
- denoise
    - Adjust the denoising strength applied to generated images, ranging from 0 (no denoising) to 1 (full denoising), affecting clarity and detail.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- optional_image
    - Optional image input for tasks such as image-to-image translation or image enhancement, extending the node's functionality.
    - Comfy dtype: IMAGE
    - Python dtype: Image

# Output types
- image
    - Output the result of the image generation process, reflecting the visual representation of input prompts and parameters.
    - Comfy dtype: IMAGE
    - Python dtype: Image
- ui
    - Provide a UI component to display generated images or related information.


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class stableDiffusion3API:

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "positive": ("STRING", {"default": "", "placeholder": "Positive", "multiline": True}),
                "negative": ("STRING", {"default": "", "placeholder": "Negative", "multiline": True}),
                "model": (["sd3", "sd3-turbo"],),
                "aspect_ratio": (['16:9', '1:1', '21:9', '2:3', '3:2', '4:5', '5:4', '9:16', '9:21'],),
                "seed": ("INT", {"default": 0, "min": 0, "max": 4294967294}),
                "denoise": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0}),
            },
            "optional": {
                "optional_image": ("IMAGE",),
            },
            "hidden": {
                "unique_id": "UNIQUE_ID",
                "extra_pnginfo": "EXTRA_PNGINFO",
            },
        }

    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("image",)

    FUNCTION = "generate"
    OUTPUT_NODE = False

    CATEGORY = "EasyUse/API"

    def generate(self, positive, negative, model, aspect_ratio, seed, denoise, optional_image=None, unique_id=None, extra_pnginfo=None):
        mode = 'text-to-image'
        if optional_image is not None:
            mode = 'image-to-image'
        output_image = stableAPI.generate_sd3_image(positive, negative, aspect_ratio, seed=seed, mode=mode, model=model, strength=denoise, image=optional_image)
        return (output_image,)

```
