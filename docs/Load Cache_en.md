# Documentation
- Class name: WAS_Load_Cache
- Category: WAS Suite/IO
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

WAS_Load_Cache node aims to efficiently manage loading cached data from specified paths, such as latent vectors, images, and conditioning data. It ensures that data is loaded only when a cache file exists at the given path, providing an important data retrieval mechanism for the WAS Suite's workflow.

# Input types
## Required
- latent_path
    - latent_path parameter specifies the file path for the latent data cache. Its presence is crucial because it guides the node to the correct location to load latent data, which is essential for subsequent processing steps in the WAS Suite.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- image_path
    - image_path parameter is used to indicate the location of the image data cache. This is an optional parameter, and when provided, allows the node to load and use image data from the specified path, enhancing the overall system functionality.
    - Comfy dtype: STRING
    - Python dtype: Optional[str]
- conditioning_path
    - conditioning_path parameter points to the file path where the conditioning data cache is stored. This optional parameter is important when the node needs to load conditioning data to influence the generation or processing of other data within the WAS Suite.
    - Comfy dtype: STRING
    - Python dtype: Optional[str]

# Output types
- LATENT
    - LATENT output provides the latent data loaded from the specified cache path. It is a key component for models in the WAS Suite that require latent representations for their operations.
    - Comfy dtype: LATENT
    - Python dtype: Union[torch.Tensor, None]
- IMAGE
    - IMAGE output contains the loaded image data, which can be used for visualization or further analysis within the WAS Suite. It is an optional output that appears only when the corresponding image_path input is provided and the image data is loaded successfully.
    - Comfy dtype: IMAGE
    - Python dtype: Union[PIL.Image, None]
- CONDITIONING
    - CONDITIONING output provides the loaded conditioning data, which is crucial for certain model operations within the WAS Suite. It allows customization and fine-tuning of model behavior based on conditioning inputs.
    - Comfy dtype: CONDITIONING
    - Python dtype: Union[torch.Tensor, None]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
