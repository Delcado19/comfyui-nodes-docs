# Documentation
- Class name: WAS_Diffusers_Hub_Model_Loader
- Category: WAS Suite/Loaders/Advanced
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Diffusers_Hub_Model_Loader node is designed to facilitate loading advanced machine learning models from the Hugging Face model hub. It simplifies the process of downloading and initializing models, CLIPs, and VAEs, allowing users to quickly integrate these components into their workflows. This node is essential for tasks requiring complex model capabilities, such as natural language processing and generative AI.

# Input types
## Required
- repo_id
    - The repo_id parameter is critical for identifying a specific model repository on the Hugging Face hub. It plays a key role in the node's execution by directing the download process to the correct source, ensuring accurate retrieval of the desired model.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- revision
    - The revision parameter allows specifying a particular version of the model in the repository. It is important for users who need a specific model iteration for their tasks, ensuring reproducibility and consistency in model performance.
    - Comfy dtype: STRING
    - Python dtype: Union[str, None]

# Output types
- model
    - The model output provides the loaded machine learning model, ready for inference or further processing. It is a core component of the node's functionality, giving users direct access to the model's predictive capabilities.
    - Comfy dtype: MODEL
    - Python dtype: Any
- clip
    - The clip output is a component typically used alongside the model for tasks involving text and image interactions. It is important for users leveraging this node for advanced natural language processing applications.
    - Comfy dtype: CLIP
    - Python dtype: Any
- vae
    - The vae output is a type of variational autoencoder, a neural network used for generative tasks. It is a valuable asset for users who wish to generate new data instances based on learned dataset distributions.
    - Comfy dtype: VAE
    - Python dtype: Any
- name_string
    - The name_string output returns the repository ID as a string, providing a human-readable identifier for the loaded model. It is useful for referencing and documentation purposes within workflows.
    - Comfy dtype: TEXT_TYPE
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Diffusers_Hub_Model_Loader:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'repo_id': ('STRING', {'multiline': False}), 'revision': ('STRING', {'default': 'None', 'multiline': False})}}
    RETURN_TYPES = ('MODEL', 'CLIP', 'VAE', TEXT_TYPE)
    RETURN_NAMES = ('MODEL', 'CLIP', 'VAE', 'NAME_STRING')
    FUNCTION = 'load_hub_checkpoint'
    CATEGORY = 'WAS Suite/Loaders/Advanced'

    def load_hub_checkpoint(self, repo_id=None, revision=None):
        if revision in ['', 'None', 'none', None]:
            revision = None
        model_path = comfy_paths.get_folder_paths('diffusers')[0]
        self.download_diffusers_model(repo_id, model_path, revision)
        diffusersLoader = nodes.DiffusersLoader()
        (model, clip, vae) = diffusersLoader.load_checkpoint(os.path.join(model_path, repo_id))
        return (model, clip, vae, repo_id)

    def download_diffusers_model(self, repo_id, local_dir, revision=None):
        if 'huggingface-hub' not in packages():
            install_package('huggingface_hub')
        from huggingface_hub import snapshot_download
        model_path = os.path.join(local_dir, repo_id)
        ignore_patterns = ['*.ckpt', '*.safetensors', '*.onnx']
        snapshot_download(repo_id=repo_id, repo_type='model', local_dir=model_path, revision=revision, use_auth_token=False, ignore_patterns=ignore_patterns)
```