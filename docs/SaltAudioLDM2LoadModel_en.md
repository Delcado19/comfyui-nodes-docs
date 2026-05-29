
# Documentation
- Class name: SaltAudioLDM2LoadModel
- Category: SALT/Audio/AudioLDM2
- Output node: False

This node aims to load a specific audio model from a predefined model set. It helps initialize an audio model optimized for audio latent diffusion tasks, ensuring the model is ready for further audio processing or generation tasks.

# Input types
## Required
- model
    - Specify the model to load, selected from a predefined list of audio latent diffusion models. This selection determines the specific audio processing capabilities and characteristics of the loaded model.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- device
    - Determine the computing device ('cuda' or 'cpu') for loading the model, affecting performance and efficiency.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- audioldm2_model
    - Loaded audio latent diffusion model, available for audio processing or generation tasks.
    - Comfy dtype: AUDIOLDM_MODEL
    - Python dtype: AudioLDM2Pipeline


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltAudioLDM2LoadModel:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "model": (["cvssp/audioldm2", "cvssp/audioldm2-large", "cvssp/audioldm2-music"], ),
            },
            "optional": {
                "device": (["cuda", "cpu"], ),
            },
        }
    
    RETURN_TYPES = ("AUDIOLDM_MODEL", )
    RETURN_NAMES = ("audioldm2_model", )

    FUNCTION = "load_model"
    CATEGORY = "SALT/Audio/AudioLDM2"

    def load_model(self, model, device="cuda"):
        models = folder_paths.models_dir
        audioldm2_models = os.path.join(models, "AudioLDM2")
        return (AudioLDM2Pipeline.from_pretrained(model, cache_dir=audioldm2_models, torch_dtype=torch.float16).to(device), )

```
