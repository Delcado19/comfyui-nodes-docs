# Documentation
- Class name: svdLoader
- Category: EasyUse/Loaders
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The svdLoader node serves as a critical component for loading and processing model checkpoints, VAE, and CLIP models, facilitating the initialization and setup of complex generation pipelines. It simplifies the process of integrating various models into workflows, ensuring efficient and seamless data processing and transformation.

# Input types
## Required
- ckpt_name
    - The checkpoint name parameter is essential for specifying the model checkpoint to load, forming the foundation of the generation process. It determines the quality and characteristics of the generated output.
    - Comfy dtype: COMBO
    - Python dtype: str
- vae_name
    - The VAE name parameter is critical for selecting the appropriate variational autoencoder, which plays a key role in dimensionality reduction and latent space formation for the generative model.
    - Comfy dtype: COMBO
    - Python dtype: str
- clip_name
    - The CLIP name parameter is essential for selecting the correct CLIP model, responsible for providing text conditioning capabilities to the generation process.
    - Comfy dtype: COMBO
    - Python dtype: str
- init_image
    - The init_image parameter is critical as it provides the initial visual input as a reference for the generative model, significantly influencing the direction and quality of the generated content.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- resolution
    - The resolution parameter is essential in determining the size and proportions of the generated image, directly affecting the level of detail and clarity of the output.
    - Comfy dtype: COMBO
    - Python dtype: str
- empty_latent_width
    - The empty_latent_width parameter is important for defining the width of the latent space, affecting the diversity and variability of the generated images.
    - Comfy dtype: INT
    - Python dtype: int
- empty_latent_height
    - The empty_latent_height parameter is important for setting the height of the latent space, affecting the structural coherence and composition of the generated images.
    - Comfy dtype: INT
    - Python dtype: int
- video_frames
    - The video_frames parameter is critical for defining the number of frames in the video, directly affecting the duration and sequence of the generated video content.
    - Comfy dtype: INT
    - Python dtype: int
- motion_bucket_id
    - The motion_bucket_id parameter is critical for controlling motion and dynamics in the generated video frames, affecting the fluidity and naturalness of the motion.
    - Comfy dtype: INT
    - Python dtype: int
- fps
    - The fps parameter is essential in determining the frame rate of the generated video, directly affecting the smoothness and playback speed of the video content.
    - Comfy dtype: INT
    - Python dtype: int
- augmentation_level
    - The augmentation_level parameter is important for introducing random variations during image generation, enhancing the diversity and robustness of the generated output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- pipe
    - The pipe output is a comprehensive structure containing all necessary components for the generation pipeline, including the model, VAE, and CLIP, which are critical for subsequent processing and generation tasks.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- model
    - The model output represents the loaded generative model, serving as the core component for creating the final output based on input data and defined parameters.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- vae
    - The vae output is the variational autoencoder model, playing a key role in generating and manipulating the latent space, critical for the diversity and quality of the generated content.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
```
class svdLoader:

    @classmethod
    def INPUT_TYPES(cls):
        resolution_strings = [f'{width} x {height}' for (width, height) in BASE_RESOLUTIONS]

        def get_file_list(filenames):
            return [file for file in filenames if file != 'put_models_here.txt' and 'svd' in file.lower()]
        return {'required': {'ckpt_name': (list(['svd.safetensors', 'svd_xt.safetensors', 'svd_image_decoder.safetensors', 'svd_xt_image_decoder.safetensors', 'svd-fp16.safetensors', 'svd_xt-fp16.safetensors', 'svd_image_decoder-fp16.safetensors', 'svd_xt_image_decoder-fp16.safetensors', 'svd_xt_1_1.safetensors']),), 'vae_name': (['Baked VAE'] + folder_paths.get_filename_list('vae'),), 'clip_name': (['None'] + folder_paths.get_filename_list('clip'),), 'init_image': ('IMAGE',), 'resolution': (resolution_strings, {'default': '1024 x 576'}), 'empty_latent_width': ('INT', {'default': 256, 'min': 16, 'max': MAX_RESOLUTION, 'step': 8}), 'empty_latent_height': ('INT', {'default': 256, 'min': 16, 'max': MAX_RESOLUTION, 'step': 8}), 'video_frames': ('INT', {'default': 14, 'min': 1, 'max': 4096}), 'motion_bucket_id': ('INT', {'default': 127, 'min': 1, 'max': 1023}), 'fps': ('INT', {'default': 6, 'min': 1, 'max': 1024}), 'augmentation_level': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 10.0, 'step': 0.01})}, 'optional': {'optional_positive': ('STRING', {'default': '', 'multiline': True}), 'optional_negative': ('STRING', {'default': '', 'multiline': True})}, 'hidden': {'prompt': 'PROMPT', 'my_unique_id': 'UNIQUE_ID'}}
    RETURN_TYPES = ('PIPE_LINE', 'MODEL', 'VAE')
    RETURN_NAMES = ('pipe', 'model', 'vae')
    FUNCTION = 'adv_pipeloader'
    CATEGORY = 'EasyUse/Loaders'

    def adv_pipeloader(self, ckpt_name, vae_name, clip_name, init_image, resolution, empty_latent_width, empty_latent_height, video_frames, motion_bucket_id, fps, augmentation_level, optional_positive=None, optional_negative=None, prompt=None, my_unique_id=None):
        model: ModelPatcher | None = None
        vae: VAE | None = None
        clip: CLIP | None = None
        clip_vision = None
        if resolution != '自定义 x 自定义':
            try:
                (width, height) = map(int, resolution.split(' x '))
                empty_latent_width = width
                empty_latent_height = height
            except ValueError:
                raise ValueError('Invalid base_resolution format.')
        easyCache.update_loaded_objects(prompt)
        (model, clip, vae, clip_vision) = easyCache.load_checkpoint(ckpt_name, 'Default', True)
        output = clip_vision.encode_image(init_image)
        pooled = output.image_embeds.unsqueeze(0)
        pixels = comfy.utils.common_upscale(init_image.movedim(-1, 1), empty_latent_width, empty_latent_height, 'bilinear', 'center').movedim(1, -1)
        encode_pixels = pixels[:, :, :, :3]
        if augmentation_level > 0:
            encode_pixels += torch.randn_like(pixels) * augmentation_level
        t = vae.encode(encode_pixels)
        positive = [[pooled, {'motion_bucket_id': motion_bucket_id, 'fps': fps, 'augmentation_level': augmentation_level, 'concat_latent_image': t}]]
        negative = [[torch.zeros_like(pooled), {'motion_bucket_id': motion_bucket_id, 'fps': fps, 'augmentation_level': augmentation_level, 'concat_latent_image': torch.zeros_like(t)}]]
        if optional_positive is not None and optional_positive != '':
            if clip_name == 'None':
                raise Exception('You need choose a open_clip model when positive is not empty')
            clip = easyCache.load_clip(clip_name)
            (positive_embeddings_final,) = CLIPTextEncode().encode(clip, optional_positive)
            (positive,) = ConditioningConcat().concat(positive, positive_embeddings_final)
        if optional_negative is not None and optional_negative != '':
            if clip_name == 'None':
                raise Exception('You need choose a open_clip model when negative is not empty')
            (negative_embeddings_final,) = CLIPTextEncode().encode(clip, optional_negative)
            (negative,) = ConditioningConcat().concat(negative, negative_embeddings_final)
        latent = torch.zeros([video_frames, 4, empty_latent_height // 8, empty_latent_width // 8])
        samples = {'samples': latent}
        image = easySampler.pil2tensor(Image.new('RGB', (1, 1), (0, 0, 0)))
        pipe = {'model': model, 'positive': positive, 'negative': negative, 'vae': vae, 'clip': clip, 'samples': samples, 'images': image, 'seed': 0, 'loader_settings': {'ckpt_name': ckpt_name, 'vae_name': vae_name, 'positive': positive, 'positive_l': None, 'positive_g': None, 'positive_balance': None, 'negative': negative, 'negative_l': None, 'negative_g': None, 'negative_balance': None, 'empty_latent_width': empty_latent_width, 'empty_latent_height': empty_latent_height, 'batch_size': 1, 'seed': 0, 'empty_samples': samples}}
        return (pipe, model, vae)
```