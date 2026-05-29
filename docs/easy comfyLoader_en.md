# Documentation
- Class name: comfyLoader
- Category: EasyUse/Loaders
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The `adv_pipeloader` method of the comfyLoader class simplifies loading and preparing models and data for advanced use cases. It integrates components such as VAE, CLIP, and LORA to create a comprehensive processing pipeline that facilitates generating and manipulating high-quality images based on user-provided prompts and preferences.

# Input types
## Required
- ckpt_name
    - ckpt_name is key to determining the specific model configuration to use in the pipeline. It influences the overall performance and output of the node by deciding the model's architecture and learned parameters.
    - Comfy dtype: COMBO[folder_paths.get_filename_list('checkpoints')]
    - Python dtype: Union[str, None]
- vae_name
    - The vae_name parameter is crucial for selecting the appropriate variational autoencoder model, which plays a significant role in generating and manipulating the latent representation of images.
    - Comfy dtype: COMBO[['Baked VAE'] + folder_paths.get_filename_list('vae')]
    - Python dtype: Union[str, None]
- clip_skip
    - The `clip_skip` parameter plays an important role in controlling the interaction with the CLIP model, influencing how the node leverages semantic information to enhance image generation.
    - Comfy dtype: INT
    - Python dtype: int
- lora_name
    - The lora_name parameter is essential for enabling model fine-tuning with LORA layers, refining the image generation process according to user-specific preferences.
    - Comfy dtype: COMBO[['None'] + folder_paths.get_filename_list('loras')]
    - Python dtype: Union[str, None]
- lora_model_strength
    - The `lora_model_strength` parameter adjusts the influence of LORA layers on the model output, directly affecting the fine-tuning process and the quality of generated images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_clip_strength
    - The `lora_clip_strength` parameter adjusts the strength of the integration between the CLIP model and LORA layers, which is crucial for achieving a balance between semantic accuracy and visual realism in generated images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resolution
    - The resolution parameter determines the size of the output image, significantly affecting the level of detail and computational resources required for image generation.
    - Comfy dtype: COMBO[resolution_strings]
    - Python dtype: Union[str, None]
- empty_latent_width
    - The `empty_latent_width` parameter sets the width of the latent space, which is crucial for determining the range of possible image variations that can be generated.
    - Comfy dtype: INT
    - Python dtype: int
- empty_latent_height
    - The `empty_latent_height` parameter defines the height of the latent space, playing a key role in the diversity of image outputs and the efficiency of the generation process.
    - Comfy dtype: INT
    - Python dtype: int
- positive
    - The `positive` parameter contains positive prompt text, which is crucial for guiding the model to generate images that align with desired aesthetics or thematic directions.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The `negative` parameter contains negative prompt text, which is crucial for guiding the model away from unwanted features or styles in the generated images.
    - Comfy dtype: STRING
    - Python dtype: str
- batch_size
    - The `batch_size` parameter determines the number of images processed simultaneously, affecting the throughput and computational efficiency of the image generation process.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- ui
    - UI output provides a user-friendly representation of wildcard prompts, which are important for visualizing the positive and negative influences applied to the image generation process.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, str]
- result
    - The result output is a comprehensive tuple containing the loaded model, VAE, CLIP, and other related data structures, which are essential for further image manipulation and analysis.
    - Comfy dtype: TUPLE
    - Python dtype: Tuple[Dict[str, Any], ModelPatcher, VAE, CLIP, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
