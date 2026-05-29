# Documentation
- Class name: Demofusion
- Category: tests
- Output node: False
- Repo Ref: https://github.com/deroberon/demofusion-comfyui

This node performs image generation using a pre-trained diffusion model, combining text prompts to guide the creative process and generating high-resolution output.

# Input types
## Required
- ckpt_name
    - The checkpoint name is crucial for selecting the pre-trained model for image generation. It instructs the node to access the specified model architecture and weights.
    - Comfy dtype: STRING
    - Python dtype: str
- positive
    - The positive prompt acts as guiding text, enhancing desired features in the generated image, directing the output towards specific visual elements.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The negative prompt helps exclude unwanted elements from the generated image, making the output more aligned with the expected creative vision.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - Width determines the horizontal resolution of the generated image, affecting the overall detail and quality of the output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height determines the vertical resolution of the generated image, affecting the scale and aspect ratio of the final product.
    - Comfy dtype: INT
    - Python dtype: int
- inference_steps
    - Inference steps define the number of iterations the model executes to refine the image, directly affecting the level of detail and clarity of the final result.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The configuration parameter (or cfg) adjusts the model's guidance scale, controlling the strength of the text prompt's influence on image generation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed provides a value for random number generation, ensuring reproducibility of results when the same seed is used across different runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The output is a high-resolution image that embodies the creative direction provided by the text prompt, representing the peak of the diffusion model's generation capability.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: GPU

# Source code
```
class Demofusion:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'ckpt_name': ('STRING', {'multiline': False, 'default': 'stabilityai/stable-diffusion-xl-base-1.0'}), 'positive': ('STRING', {'multiline': True, 'default': ''}), 'negative': ('STRING', {'multiline': True, 'default': ''}), 'width': ('INT', {'default': 2048, 'min': 2048, 'max': 4096, 'step': 64, 'display': 'number'}), 'height': ('INT', {'default': 2048, 'min': 2048, 'max': 4096, 'step': 64, 'display': 'number'}), 'inference_steps': ('INT', {'default': 40, 'min': 1, 'max': 100, 'step': 1, 'display': 'number'}), 'cfg': ('FLOAT', {'default': 7.5, 'min': 1.0, 'max': 20.0, 'step': 0.5, 'round': 0.001, 'display': 'number'}), 'seed': ('INT', {'default': 522, 'display': 'number'})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'execute'
    CATEGORY = 'tests'

    def execute(self, ckpt_name, positive, negative, width, height, inference_steps, cfg, seed):
        pipe = DemoFusionSDXLStableDiffusionPipeline.from_pretrained(ckpt_name, torch_dtype=torch.float16)
        pipe = pipe.to('cuda')
        generator = torch.Generator(device='cuda')
        generator = generator.manual_seed(seed)
        images = pipe(str(positive), negative_prompt=str(negative), height=height, width=width, view_batch_size=4, stride=64, num_inference_steps=inference_steps, guidance_scale=cfg, cosine_scale_1=3, cosine_scale_2=1, cosine_scale_3=1, sigma=0.8, multi_decoder=True, show_image=False)
        image = images[len(images) - 1]
        image = image.convert('RGB')
        image = np.array(image).astype(np.float32) / 255.0
        image = torch.from_numpy(image)[None,]
        return (image,)
```