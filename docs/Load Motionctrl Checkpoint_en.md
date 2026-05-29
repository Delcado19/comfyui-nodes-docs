# Documentation
- Class name: MotionctrlLoader
- Category: motionctrl
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-MotionCtrl.git

The MotionctrlLoader class is designed to efficiently manage and load motion control checkpoints for advanced motion analysis and generation tasks. It abstracts the complexity of loading and initializing motion control models, providing users with a streamlined interface to leverage motion control capabilities.

# Input types
## Required
- ckpt_name
    - The checkpoint name is a critical parameter that specifies the model checkpoint to load. It is essential for determining the correct pre-trained model weights and architecture.
    - Comfy dtype: str
    - Python dtype: str
- frame_length
    - The frame length parameter determines the temporal scope of the motion control model. It is important for adapting the model to handle motion sequences of varying durations.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- model
    - The model output represents the loaded motion control model, which can be used for inference or further processing. It encapsulates the patterns and dynamics of motion necessary for motion sequence generation or analysis.
    - Comfy dtype: MOTIONCTRL
    - Python dtype: torch.nn.Module
- clip
    - The clip output is the embedder component of the motion control model, responsible for extracting features from motion sequences. It plays a crucial role in the model's ability to understand and process motion data.
    - Comfy dtype: EMBEDDER
    - Python dtype: torch.nn.Module
- vae
    - The vae output refers to the variational autoencoder portion of the motion control model, which plays a significant role in encoding and decoding motion data into a lower-dimensional latent space.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- ddim_sampler
    - The ddim_sampler output is the sampling mechanism for generating new motion sequences based on the loaded motion control model. It provides a method for creating diverse and realistic motion outputs.
    - Comfy dtype: SAMPLER
    - Python dtype: DDIMSampler

# Usage tips
- Infra type: GPU

# Source code
```
class MotionctrlLoader:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'ckpt_name': (['motionctrl.pth'], {'default': 'motionctrl.pth'}), 'frame_length': ('INT', {'default': 16})}}
    RETURN_TYPES = ('MOTIONCTRL', 'EMBEDDER', 'VAE', 'SAMPLER')
    RETURN_NAMES = ('model', 'clip', 'vae', 'ddim_sampler')
    FUNCTION = 'load_checkpoint'
    CATEGORY = 'motionctrl'

    def load_checkpoint(self, ckpt_name, frame_length):
        gpu_num = 1
        gpu_no = 0
        ckpt_path = folder_paths.get_full_path('checkpoints', ckpt_name)
        comfy_path = os.path.dirname(folder_paths.__file__)
        config_path = os.path.join(comfy_path, 'custom_nodes/ComfyUI-MotionCtrl/configs/inference/config_both.yaml')
        args = {'ckpt_path': f'{ckpt_path}', 'adapter_ckpt': None, 'base': f'{config_path}', 'condtype': 'both', 'prompt_dir': None, 'n_samples': 1, 'ddim_steps': 50, 'ddim_eta': 1.0, 'bs': 1, 'height': 256, 'width': 256, 'unconditional_guidance_scale': 1.0, 'unconditional_guidance_scale_temporal': None, 'seed': 1234, 'cond_T': 800}
        config = OmegaConf.load(args['base'])
        OmegaConf.update(config, 'model.params.unet_config.params.temporal_length', frame_length)
        model_config = config.pop('model', OmegaConf.create())
        model = instantiate_from_config(model_config)
        model = model.cuda(gpu_no)
        assert os.path.exists(args['ckpt_path']), f"Error: checkpoint {args['ckpt_path']} Not Found!"
        print(f"Loading checkpoint from {args['ckpt_path']}")
        model = load_model_checkpoint(model, args['ckpt_path'], args['adapter_ckpt'])
        model.eval()
        ddim_sampler = DDIMSampler(model)
        return (model, model.cond_stage_model, model.first_stage_model, ddim_sampler)
```