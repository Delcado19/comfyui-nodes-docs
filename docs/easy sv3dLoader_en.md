# Documentation
- Class name: sv3DLoader
- Category: EasyUse/Loaders
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The sv3DLoader node serves as an efficient interface for loading and processing 3D models and their associated data. It simplifies the process of initializing and managing model states, preparing images and latent vectors for further processing in the pipeline.

# Input types
## Required
- ckpt_name
    - The checkpoint name is critical for identifying the specific model state to load. It affects model initialization and output quality.
    - Comfy dtype: COMBO
    - Python dtype: str
- vae_name
    - The VAE name parameter is essential for selecting the appropriate variational autoencoder. It influences the encoding and decoding process, thereby affecting the fidelity of the final output.
    - Comfy dtype: COMBO
    - Python dtype: str
- init_image
    - The initialization image is crucial for setting the context and content direction of 3D model generation. It directly impacts visual elements and thematic coherence of the resulting model.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- empty_latent_width
    - This parameter defines the width of the latent space used for model generation. It is important because it affects the model's ability to capture detail and output diversity.
    - Comfy dtype: INT
    - Python dtype: int
- empty_latent_height
    - Similar to empty_latent_width, this parameter sets the height of the latent space, influencing the model's ability to generate high-resolution outputs.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - The batch size parameter is important for managing computational resources and determining the number of models processed simultaneously. It affects the overall efficiency and speed of the pipeline.
    - Comfy dtype: INT
    - Python dtype: int
- interp_easing
    - The interpolation easing method determines how the model transitions between different states. It influences the smoothness and continuity of the output sequence.
    - Comfy dtype: COMBO
    - Python dtype: str
- easing_mode
    - This parameter determines the type of easing to apply, whether azimuth, elevation, or custom, affecting the trajectory of the model's movement in space.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- scheduler
    - When provided, the scheduler parameter allows detailed control over easing points, enabling precise manipulation of the model's progression through latent space.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- pipe
    - The pipeline output is a comprehensive structure containing the loaded model, encoded images, and other associated data. It is essential for passing necessary information to subsequent processing steps in the pipeline.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- model
    - The model output provides the initialized and ready-to-use 3D model. It is the core component for further manipulation and generation of new content.
    - Comfy dtype: MODEL
    - Python dtype: ModelPatcher
- interp_log
    - The interpolation log records the azimuth and elevation values used during model processing. It serves as a reference for understanding the model's progression through latent space.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class sv3DLoader(EasingBase):

    def __init__(self):
        super().__init__()

    @classmethod
    def INPUT_TYPES(cls):

        def get_file_list(filenames):
            return [file for file in filenames if file != 'put_models_here.txt' and 'sv3d' in file]
        return {'required': {'ckpt_name': (get_file_list(folder_paths.get_filename_list('checkpoints')),), 'vae_name': (['Baked VAE'] + folder_paths.get_filename_list('vae'),), 'init_image': ('IMAGE',), 'empty_latent_width': ('INT', {'default': 576, 'min': 16, 'max': MAX_RESOLUTION, 'step': 8}), 'empty_latent_height': ('INT', {'default': 576, 'min': 16, 'max': MAX_RESOLUTION, 'step': 8}), 'batch_size': ('INT', {'default': 21, 'min': 1, 'max': 4096}), 'interp_easing': (['linear', 'ease_in', 'ease_out', 'ease_in_out'], {'default': 'linear'}), 'easing_mode': (['azimuth', 'elevation', 'custom'], {'default': 'azimuth'})}, 'optional': {'scheduler': ('STRING', {'default': '', 'multiline': True})}, 'hidden': {'prompt': 'PROMPT', 'my_unique_id': 'UNIQUE_ID'}}
    RETURN_TYPES = ('PIPE_LINE', 'MODEL', 'STRING')
    RETURN_NAMES = ('pipe', 'model', 'interp_log')
    FUNCTION = 'adv_pipeloader'
    CATEGORY = 'EasyUse/Loaders'

    def adv_pipeloader(self, ckpt_name, vae_name, init_image, empty_latent_width, empty_latent_height, batch_size, interp_easing, easing_mode, scheduler='', prompt=None, my_unique_id=None):
        model: ModelPatcher | None = None
        vae: VAE | None = None
        clip: CLIP | None = None
        easyCache.update_loaded_objects(prompt)
        (model, clip, vae, clip_vision) = easyCache.load_checkpoint(ckpt_name, 'Default', True)
        output = clip_vision.encode_image(init_image)
        pooled = output.image_embeds.unsqueeze(0)
        pixels = comfy.utils.common_upscale(init_image.movedim(-1, 1), empty_latent_width, empty_latent_height, 'bilinear', 'center').movedim(1, -1)
        encode_pixels = pixels[:, :, :, :3]
        t = vae.encode(encode_pixels)
        azimuth_points = []
        elevation_points = []
        if easing_mode == 'azimuth':
            azimuth_points = [(0, 0), (batch_size - 1, 360)]
            elevation_points = [(0, 0)] * batch_size
        elif easing_mode == 'elevation':
            azimuth_points = [(0, 0)] * batch_size
            elevation_points = [(0, -90), (batch_size - 1, 90)]
        else:
            schedulers = scheduler.rstrip('\n')
            for line in schedulers.split('\n'):
                (frame_str, point_str) = line.split(':')
                point_str = point_str.strip()[1:-1]
                point = point_str.split(',')
                azimuth_point = point[0]
                elevation_point = point[1] if point[1] else 0.0
                frame = int(frame_str.strip())
                azimuth = float(azimuth_point)
                azimuth_points.append((frame, azimuth))
                elevation_val = float(elevation_point)
                elevation_points.append((frame, elevation_val))
            azimuth_points.sort(key=lambda x: x[0])
            elevation_points.sort(key=lambda x: x[0])
        next_point = 1
        next_elevation_point = 1
        elevations = []
        azimuths = []
        for i in range(batch_size):
            while next_point < len(azimuth_points) and i >= azimuth_points[next_point][0]:
                next_point += 1
            if next_point == len(azimuth_points):
                next_point -= 1
            prev_point = max(next_point - 1, 0)
            if azimuth_points[next_point][0] != azimuth_points[prev_point][0]:
                timing = (i - azimuth_points[prev_point][0]) / (azimuth_points[next_point][0] - azimuth_points[prev_point][0])
                interpolated_azimuth = self.ease(azimuth_points[prev_point][1], azimuth_points[next_point][1], self.easing(timing, interp_easing))
            else:
                interpolated_azimuth = azimuth_points[prev_point][1]
            next_elevation_point = 1
            while next_elevation_point < len(elevation_points) and i >= elevation_points[next_elevation_point][0]:
                next_elevation_point += 1
            if next_elevation_point == len(elevation_points):
                next_elevation_point -= 1
            prev_elevation_point = max(next_elevation_point - 1, 0)
            if elevation_points[next_elevation_point][0] != elevation_points[prev_elevation_point][0]:
                timing = (i - elevation_points[prev_elevation_point][0]) / (elevation_points[next_elevation_point][0] - elevation_points[prev_elevation_point][0])
                interpolated_elevation = self.ease(elevation_points[prev_point][1], elevation_points[next_point][1], self.easing(timing, interp_easing))
            else:
                interpolated_elevation = elevation_points[prev_elevation_point][1]
            azimuths.append(interpolated_azimuth)
            elevations.append(interpolated_elevation)
        log_node_info('easy sv3dLoader', 'azimuths:' + str(azimuths))
        log_node_info('easy sv3dLoader', 'elevations:' + str(elevations))
        log = 'azimuths:' + str(azimuths) + '\n\n' + 'elevations:' + str(elevations)
        positive = [[pooled, {'concat_latent_image': t, 'elevation': elevations, 'azimuth': azimuths}]]
        negative = [[torch.zeros_like(pooled), {'concat_latent_image': torch.zeros_like(t), 'elevation': elevations, 'azimuth': azimuths}]]
        latent = torch.zeros([batch_size, 4, empty_latent_height // 8, empty_latent_width // 8])
        samples = {'samples': latent}
        image = easySampler.pil2tensor(Image.new('RGB', (1, 1), (0, 0, 0)))
        pipe = {'model': model, 'positive': positive, 'negative': negative, 'vae': vae, 'clip': clip, 'samples': samples, 'images': image, 'seed': 0, 'loader_settings': {'ckpt_name': ckpt_name, 'vae_name': vae_name, 'positive': positive, 'positive_l': None, 'positive_g': None, 'positive_balance': None, 'negative': negative, 'negative_l': None, 'negative_g': None, 'negative_balance': None, 'empty_latent_width': empty_latent_width, 'empty_latent_height': empty_latent_height, 'batch_size': batch_size, 'seed': 0, 'empty_samples': samples}}
        return (pipe, model, log)
```