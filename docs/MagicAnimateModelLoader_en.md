# Documentation
- Class name: MagicAnimateModelLoader
- Category: ComfyUI Magic Animate
- Output node: False
- Repo Ref: https://github.com/thecooltechguy/ComfyUI-MagicAnimate

The MagicAnimateModelLoader class is responsible for managing and loading the components of the magic animation model. It serves as a centralized repository for the control network, appearance encoder, motion module, and other related modules. The load_model method aims to clear any existing models, load new configurations, and initialize model components for animation purposes.

# Input types
## Optional
- controlnet
    - The controlnet parameter specifies the checkpoint or path of the control network, which is a key part of the animation model. It is used to guide the generation process.
    - Comfy dtype: str
    - Python dtype: str
- appearance_encoder
    - The appearance_encoder parameter indicates the checkpoint or file path of the appearance encoder, which is responsible for encoding the input visual features.
    - Comfy dtype: str
    - Python dtype: str
- motion_module
    - The motion_module parameter points to the checkpoint or file path of the motion module, which is crucial for animating the input according to a given motion.
    - Comfy dtype: str
    - Python dtype: str
- device
    - The device parameter determines the computing device for model execution, typically 'cuda' for GPU acceleration or 'cpu'.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- MAGIC_ANIMATE_MODEL
    - The output is a dictionary containing the loaded models and configurations. It includes the VAE, text encoder, appearance encoder, tokenizer, UNet, control network, and animation pipeline.
    - Comfy dtype: dict
    - Python dtype: Dict[str, torch.nn.Module]

# Usage tips
- Infra type: GPU

# Source code
```
class MagicAnimateModelLoader:

    def __init__(self):
        self.models = {}

    @classmethod
    def INPUT_TYPES(s):
        magic_animate_checkpoints = folder_paths.get_filename_list('magic_animate')
        devices = []
        if True:
            devices.append('cuda')
        devices.append('cpu')
        return {'required': {'controlnet': (magic_animate_checkpoints, {'default': magic_animate_checkpoints[0]}), 'appearance_encoder': (magic_animate_checkpoints, {'default': magic_animate_checkpoints[0]}), 'motion_module': (magic_animate_checkpoints, {'default': magic_animate_checkpoints[0]}), 'device': (devices,)}}
    RETURN_TYPES = ('MAGIC_ANIMATE_MODEL',)
    FUNCTION = 'load_model'
    CATEGORY = 'ComfyUI Magic Animate'

    def load_model(self, controlnet, appearance_encoder, motion_module, device):
        if self.models:
            all_keys = list(self.models.keys())
            for key in all_keys:
                del self.models[key]
            self.models = {}
            gc.collect()
        current_dir = os.path.dirname(os.path.realpath(__file__))
        config = OmegaConf.load(os.path.join(current_dir, 'configs', 'prompts', 'animation.yaml'))
        inference_config = OmegaConf.load(os.path.join(current_dir, 'configs', 'inference', 'inference.yaml'))
        magic_animate_models_dir = folder_paths.get_folder_paths('magic_animate')[0]
        config.pretrained_model_path = os.path.join(magic_animate_models_dir, 'stable-diffusion-v1-5')
        config.pretrained_vae_path = os.path.join(magic_animate_models_dir, 'sd-vae-ft-mse')
        config.pretrained_appearance_encoder_path = os.path.join(magic_animate_models_dir, os.path.dirname(appearance_encoder))
        config.pretrained_controlnet_path = os.path.join(magic_animate_models_dir, os.path.dirname(controlnet))
        motion_module = os.path.join(magic_animate_models_dir, motion_module)
        config.motion_module = motion_module
        tokenizer = CLIPTokenizer.from_pretrained(config.pretrained_model_path, subfolder='tokenizer')
        text_encoder = CLIPTextModel.from_pretrained(config.pretrained_model_path, subfolder='text_encoder')
        if config.pretrained_unet_path:
            unet = UNet3DConditionModel.from_pretrained_2d(config.pretrained_unet_path, unet_additional_kwargs=OmegaConf.to_container(inference_config.unet_additional_kwargs))
        else:
            unet = UNet3DConditionModel.from_pretrained_2d(config.pretrained_model_path, subfolder='unet', unet_additional_kwargs=OmegaConf.to_container(inference_config.unet_additional_kwargs))
        appearance_encoder = AppearanceEncoderModel.from_pretrained(config.pretrained_appearance_encoder_path).to(device)
        reference_control_writer = ReferenceAttentionControl(appearance_encoder, do_classifier_free_guidance=True, mode='write', fusion_blocks=config.fusion_blocks)
        reference_control_reader = ReferenceAttentionControl(unet, do_classifier_free_guidance=True, mode='read', fusion_blocks=config.fusion_blocks)
        vae = AutoencoderKL.from_pretrained(config.pretrained_vae_path)
        controlnet = ControlNetModel.from_pretrained(config.pretrained_controlnet_path)
        vae.to(torch.float16)
        unet.to(torch.float16)
        text_encoder.to(torch.float16)
        appearance_encoder.to(torch.float16)
        controlnet.to(torch.float16)
        pipeline = AnimationPipeline(vae=vae, text_encoder=text_encoder, tokenizer=tokenizer, unet=unet, controlnet=controlnet, scheduler=DDIMScheduler(**OmegaConf.to_container(inference_config.noise_scheduler_kwargs)))
        motion_module_state_dict = torch.load(motion_module, map_location='cpu')
        motion_module_state_dict = motion_module_state_dict['state_dict'] if 'state_dict' in motion_module_state_dict else motion_module_state_dict
        try:
            state_dict = OrderedDict()
            for key in motion_module_state_dict.keys():
                if key.startswith('module.'):
                    _key = key.split('module.')[-1]
                    state_dict[_key] = motion_module_state_dict[key]
                else:
                    state_dict[key] = motion_module_state_dict[key]
            motion_module_state_dict = state_dict
            del state_dict
            (missing, unexpected) = pipeline.unet.load_state_dict(motion_module_state_dict, strict=False)
            assert len(unexpected) == 0
        except:
            _tmp_ = OrderedDict()
            for key in motion_module_state_dict.keys():
                if 'motion_modules' in key:
                    if key.startswith('unet.'):
                        _key = key.split('unet.')[-1]
                        _tmp_[_key] = motion_module_state_dict[key]
                    else:
                        _tmp_[key] = motion_module_state_dict[key]
            (missing, unexpected) = unet.load_state_dict(_tmp_, strict=False)
            assert len(unexpected) == 0
            del _tmp_
        del motion_module_state_dict
        pipeline.to(device)
        self.models['vae'] = vae
        self.models['text_encoder'] = text_encoder
        self.models['appearance_encoder'] = appearance_encoder
        self.models['tokenizer'] = tokenizer
        self.models['unet'] = unet
        self.models['controlnet'] = controlnet
        self.models['pipeline'] = pipeline
        self.models['config'] = config
        self.models['reference_control_writer'] = reference_control_writer
        self.models['reference_control_reader'] = reference_control_reader
        return (self.models,)
```