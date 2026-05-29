# Documentation
- Class name: MagicAnimate
- Category: ComfyUI Magic Animate
- Output node: False
- Repo Ref: https://github.com/thecooltechguy/ComfyUI-MagicAnimate

This node uses a generative model to create animated content based on an input image and a pose video. It aims to synthesize new frames by fusing the appearance of the input image with the motion captured in the pose video, producing a seamless animation that reflects the desired action and style.

# Input types
## Required
- magic_animate_model
    - The model parameter is critical because it defines the generative architecture used for animation. It encapsulates the pipeline, configuration, and various components required for the generation process, ensuring the node can produce the desired animated output.
    - Comfy dtype: MAGIC_ANIMATE_MODEL
    - Python dtype: Dict[str, Any]
- image
    - The image parameter serves as the visual foundation for the animation. It provides the appearance that will be animated according to the pose video. The quality and resolution of the image have a significant impact on the visual fidelity of the final animation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- pose_video
    - The pose video parameter determines the motion and sequence of the animation. It is essential for conveying the desired action and ensuring the fluidity of the animation. The frame rate and quality of the video directly affect the smoothness and realism of the animation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- seed
    - The seed parameter is crucial for ensuring the reproducibility and consistency of the generated animation. By setting a specific seed, the node can generate the same animation result under the same conditions, which is essential for iterative improvement and debugging.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- inference_steps
    - The inference steps parameter affects the depth of the generation process. More steps allow for more detailed and nuanced animation but may increase computational cost. This parameter is critical for balancing quality and performance.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
    - The output of this node is the generated animation, which is a series of frames combining the appearance of the input image with the motion of the pose video. This output is the crystallization of the generation process, representing the primary function and purpose of the node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class MagicAnimate:

    def __init__(self):
        self.generator = torch.Generator(device=torch.device('cuda:0'))

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'magic_animate_model': ('MAGIC_ANIMATE_MODEL',), 'image': ('IMAGE',), 'pose_video': ('IMAGE',), 'seed': ('INT', {'display': 'number'}), 'inference_steps': ('INT', {'default': 25, 'display': 'number'})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'generate'
    CATEGORY = 'ComfyUI Magic Animate'

    def resize_image_frame(self, image_tensor, size):
        if isinstance(image_tensor, np.ndarray):
            image_tensor = torch.from_numpy(image_tensor)
        image_tensor = rearrange(image_tensor, 'h w c -> c h w')
        image_tensor = ToPILImage()(image_tensor)
        image_tensor = image_tensor.resize((size, size))
        image_tensor = ToTensor()(image_tensor)
        image_tensor = rearrange(image_tensor, 'c h w -> h w c')
        return image_tensor

    def generate(self, magic_animate_model, image, pose_video, seed, inference_steps):
        num_actual_inference_steps = inference_steps
        pipeline = magic_animate_model['pipeline']
        config = magic_animate_model['config']
        size = config.size
        appearance_encoder = magic_animate_model['appearance_encoder']
        reference_control_writer = magic_animate_model['reference_control_writer']
        reference_control_reader = magic_animate_model['reference_control_reader']
        assert image.shape[0] == 1, 'Only one image input is supported'
        image = image[0]
        (H, W, C) = image.shape
        if H != size or W != size:
            image = self.resize_image_frame(image, size)
            (H, W, C) = image.shape
        image = image * 255
        prompt = ''
        n_prompt = ''
        control = pose_video.detach().cpu().numpy()
        print('control shape:', control.shape)
        if control.shape[1] != size or control.shape[2] != size:
            control = torch.stack([self.resize_image_frame(frame, size) for frame in control], dim=0)
        init_latents = None
        original_length = control.shape[0]
        if control.shape[0] % config.L > 0:
            control = np.pad(control, ((0, config.L - control.shape[0] % config.L), (0, 0), (0, 0), (0, 0)), mode='edge')
        control = control * 255
        self.generator.manual_seed(seed)
        dist_kwargs = {'rank': 0, 'world_size': 1, 'dist': False}
        sample = pipeline(prompt, negative_prompt=n_prompt, num_inference_steps=config.steps, guidance_scale=config.guidance_scale, width=W, height=H, video_length=len(control), controlnet_condition=control, init_latents=init_latents, generator=self.generator, num_actual_inference_steps=num_actual_inference_steps, appearance_encoder=appearance_encoder, reference_control_writer=reference_control_writer, reference_control_reader=reference_control_reader, source_image=image.detach().cpu().numpy(), **dist_kwargs).videos
        sample = sample[0, :, :original_length]
        sample = rearrange(sample, 'c f h w -> f h w c').detach().cpu()
        return (sample,)
```