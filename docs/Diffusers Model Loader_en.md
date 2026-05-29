# Documentation
- Class name: WAS_Diffusers_Loader
- Category: WAS Suite/Loaders/Advanced
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The method `load_checkpoint` is designed to load and manage pretrained models from a specified directory. It intelligently traverses the file system to locate and load the required models, ensuring that necessary components such as VAE and CLIP are available if needed. This method is critical for initializing the model infrastructure within the application, providing seamless integration of model components for downstream tasks.

# Input types
## Required
- model_path
    - The parameter `model_path` is essential for identifying the specific model to load within the file system. It directs the node to the correct location, enabling the model's data and structure to be retrieved and utilized. This parameter is crucial for the node's execution, as it determines the source of the model to be used in subsequent operations.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- output_vae
    - The parameter `output_vae` determines whether the model's Variational Autoencoder (VAE) component should be loaded alongside the main model. This decision can impact the node's functionality, particularly if downstream tasks require the generative capabilities of the VAE. Therefore, including or excluding the VAE can be a strategic choice depending on the specific needs of the application.
    - Comfy dtype: bool
    - Python dtype: bool
- output_clip
    - The parameter `output_clip` controls the loading of the CLIP component, which is typically used for image-text matching tasks. Enabling or disabling this parameter based on the application's requirements can affect the node's ability to perform such tasks. It is an important consideration to ensure the node aligns with the broader objectives of the project.
    - Comfy dtype: bool
    - Python dtype: bool

# Output types
- MODEL
    - The output `MODEL` represents the core structure of the loaded model and is the primary component for executing machine learning tasks. It encapsulates the model's architecture and learned parameters, making it a fundamental output for any subsequent model-based operations in the system.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- CLIP
    - When present, the `CLIP` output provides an interface for image-text matching capabilities. It is an optional component that can be loaded based on the application's needs, offering additional capabilities for tasks involving associating images with textual descriptions.
    - Comfy dtype: Optional[torch.nn.Module]
    - Python dtype: Optional[torch.nn.Module]
- VAE
    - The output `VAE` is the Variational Autoencoder portion of the model, responsible for the generative aspects of the model. It is an optional output that can be included based on whether the application's tasks require generative capabilities.
    - Comfy dtype: Optional[torch.nn.Module]
    - Python dtype: Optional[torch.nn.Module]
- NAME_STRING
    - The output `NAME_STRING` provides the base name of the loaded model, which is useful for logging, identification, or referencing within the application. It serves as a human-readable label that can help track and manage the usage of the model.
    - Comfy dtype: str
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Diffusers_Loader:

    @classmethod
    def INPUT_TYPES(cls):
        paths = []
        for search_path in comfy_paths.get_folder_paths('diffusers'):
            if os.path.exists(search_path):
                paths += next(os.walk(search_path))[1]
        return {'required': {'model_path': (paths,)}}
    RETURN_TYPES = ('MODEL', 'CLIP', 'VAE', TEXT_TYPE)
    RETURN_NAMES = ('MODEL', 'CLIP', 'VAE', 'NAME_STRING')
    FUNCTION = 'load_checkpoint'
    CATEGORY = 'WAS Suite/Loaders/Advanced'

    def load_checkpoint(self, model_path, output_vae=True, output_clip=True):
        for search_path in comfy_paths.get_folder_paths('diffusers'):
            if os.path.exists(search_path):
                paths = next(os.walk(search_path))[1]
                if model_path in paths:
                    model_path = os.path.join(search_path, model_path)
                    break
        out = comfy.diffusers_convert.load_diffusers(model_path, fp16=comfy.model_management.should_use_fp16(), output_vae=output_vae, output_clip=output_clip, embedding_directory=comfy_paths.get_folder_paths('embeddings'))
        return (out[0], out[1], out[2], os.path.basename(model_path))
```