# Documentation
- Class name: OOTDGenerate
- Category: OOTD
- Output node: False
- Repo Ref: https://github.com/AuroBit/ComfyUI-OOTDiffusion.git

This node synthesizes clothing based on input images and categories, using a diffusion model for creative fashion generation. It provides users with diverse, context‑relevant, stylistically consistent clothing options.

# Input types
## Required
- pipe
- The pipe parameter is critical; it encapsulates the diffusion model used to generate clothing. It forms the core of the node’s functionality and determines the quality and type of the generated garments.
    - Comfy dtype: MODEL
    - Python dtype: OOTDiffusion
- cloth_image
- The cloth_image parameter serves as the foundation for generating clothing. It is essential for the node to understand context and synthesize garments visually consistent with the provided image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- model_image
- The model_image parameter supplies a template of the person for the generated clothing. It is vital for maintaining structural integrity and realistic proportions with the human form.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- seed
- The seed parameter introduces randomness into the generation process, allowing multiple outcomes. It is crucial for users seeking unique, non‑repeating fashion options.
    - Comfy dtype: INT
    - Python dtype: int
- steps
- The steps parameter sets the number of iterations used in the diffusion process. It affects the detail and fineness of the final garment; more steps yield finer results.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
- The cfg parameter adjusts the image scaling used during generation, influencing the resolution and clarity of the clothing. It is a key factor for achieving high‑quality visual output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- category
- The category parameter specifies the type of clothing to generate, guiding the node to produce garments that match the selected fashion category. It ensures relevance and appropriateness of the output.
    - Comfy dtype: LIST
    - Python dtype: List[str]

# Output types
- image
- The image output displays the final generated clothing, showcasing a creative synthesis of fashion elements based on the input. It is the primary result of the node operation, representing the realized clothing concept.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_masked
- The image_masked output provides a version of the generated clothing with a specific fashion‑element mask applied. This output is important for users who need detailed control over the generated content, enabling further customization and manipulation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class OOTDGenerate:
    display_name = 'OOTDiffusion Generate'

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'pipe': ('MODEL',), 'cloth_image': ('IMAGE',), 'model_image': ('IMAGE',), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 2.0, 'min': 0.0, 'max': 14.0, 'step': 0.1, 'round': 0.01}), 'category': (list(_category_readable.keys()),)}}
    RETURN_TYPES = ('IMAGE', 'IMAGE')
    RETURN_NAMES = ('image', 'image_masked')
    FUNCTION = 'generate'
    CATEGORY = 'OOTD'

    def generate(self, pipe: OOTDiffusion, cloth_image, model_image, category, seed, steps, cfg):
        category = _category_readable[category]
        if pipe.model_type == 'hd' and category != 'upperbody':
            raise ValueError('Half body (hd) model type can only be used with upperbody category')
        model_image = model_image.squeeze(0)
        model_image = model_image.permute((2, 0, 1))
        model_image = to_pil_image(model_image)
        if model_image.size != (768, 1024):
            print(f'Inconsistent model_image size {model_image.size} != (768, 1024)')
        model_image = model_image.resize((768, 1024))
        cloth_image = cloth_image.squeeze(0)
        cloth_image = cloth_image.permute((2, 0, 1))
        cloth_image = to_pil_image(cloth_image)
        if cloth_image.size != (768, 1024):
            print(f'Inconsistent cloth_image size {cloth_image.size} != (768, 1024)')
        cloth_image = cloth_image.resize((768, 1024))
        (model_parse, _) = pipe.parsing_model(model_image.resize((384, 512)))
        keypoints = pipe.openpose_model(model_image.resize((384, 512)))
        (mask, mask_gray) = get_mask_location(pipe.model_type, _category_get_mask_input[category], model_parse, keypoints, width=384, height=512)
        mask = mask.resize((768, 1024), Image.NEAREST)
        mask_gray = mask_gray.resize((768, 1024), Image.NEAREST)
        masked_vton_img = Image.composite(mask_gray, model_image, mask)
        images = pipe(category=category, image_garm=cloth_image, image_vton=masked_vton_img, mask=mask, image_ori=model_image, num_samples=1, num_steps=steps, image_scale=cfg, seed=seed)
        output_image = to_tensor(images[0])
        output_image = output_image.permute((1, 2, 0)).unsqueeze(0)
        masked_vton_img = masked_vton_img.convert('RGB')
        masked_vton_img = to_tensor(masked_vton_img)
        masked_vton_img = masked_vton_img.permute((1, 2, 0)).unsqueeze(0)
        return (output_image, masked_vton_img)
```