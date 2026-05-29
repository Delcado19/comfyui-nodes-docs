# Documentation
- Class name: DemofusionFromSingleFile
- Category: tests
- Output node: False
- Repo Ref: https://github.com/deroberon/demofusion-comfyui

This node facilitates the execution of diffusion models for image generation, utilizing pre-trained checkpoints to synthesize new visual content based on text prompts. It emphasizes the node's role in creative AI applications, focusing on the generation process without delving into specific implementation details.

# Input types
## Required
- ckpt_name
    - The checkpoint name parameter is crucial for specifying the pre-trained model used for image generation. It guides the node to locate and load the appropriate model weights and configuration, which is essential for the subsequent generation process.
    - Comfy dtype: STRING
    - Python dtype: str
- positive
    - The positive parameter serves as a text prompt that guides the image generation process. Its importance lies in setting the thematic direction for the output, influencing the overall style and content of the synthesized image.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The negative parameter acts as an exclusionary filter for image generation, steering the output away from certain elements or themes. It refines the creative direction by specifying aspects to avoid in the final result.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - The width parameter determines the horizontal resolution of the generated image, affecting the overall detail and quality. It plays a key role in determining the proportions and dimensions of the output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the vertical resolution of the image, working with width to determine the canvas size of the generation process. It is a component of the final output dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- inference_steps
    - The inference steps parameter controls the number of iterations used in the diffusion process, directly affecting the complexity and refinement of the generated image. It is a key factor in achieving the desired level of detail.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter adjusts the model's configuration settings, fine-tuning the generation process to achieve specific visual effects. It influences the stylistic output and consistency of the generated content.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed parameter ensures reproducibility of results by initializing the random number generator with a fixed value. It is essential for consistent experimentation and result comparison across different runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output image is the culmination of the node's functionality, encapsulating the visual content generated based on the provided text prompts and model configuration. It is the primary result of the creative process, demonstrating the node's ability to synthesize new images.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: GPU

# Source code
```
class DemofusionFromSingleFile:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'ckpt_name': (folder_paths.get_filename_list('checkpoints'),), 'positive': ('STRING', {'multiline': True, 'default': ''}), 'negative': ('STRING', {'multiline': True, 'default': ''}), 'width': ('INT', {'default': 2048, 'min': 2048, 'max': 4096, 'step': 64, 'display': 'number'}), 'height': ('INT', {'default': 2048, 'min': 2048, 'max': 4096, 'step': 64, 'display': 'number'}), 'inference_steps': ('INT', {'default': 40, 'min': 1, 'max': 100, 'step': 1, 'display': 'number'}), 'cfg': ('FLOAT', {'default': 7.5, 'min': 1.0, 'max': 20.0, 'step': 0.5, 'round': 0.001, 'display': 'number'}), 'seed': ('INT', {'default': 522, 'display': 'number'})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'execute'
    CATEGORY = 'tests'

    def execute(self, ckpt_name, positive, negative, width, height, inference_steps, cfg, seed):
        ckpt_path = folder_paths.get_full_path('checkpoints', ckpt_name)
        pipe = DemoFusionSDXLStableDiffusionPipeline.from_single_file(ckpt_path, torch_dtype=torch.float16, use_safetensors=True)
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