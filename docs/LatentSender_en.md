# Documentation
- Class name: LatentSender
- Category: ImpactPack/Util
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The LatentSender node is designed to process and manage latent data, converting it into a format suitable for further use or storage. It plays a critical role in workflows, ensuring latent information is properly handled and prepared for downstream tasks.

# Input types
## Required
- samples
    - The 'samples' parameter is essential, as it contains the latent data the node operates on. It is the primary input that determines the node's processing and output generation.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
## Optional
- filename_prefix
    - The 'filename_prefix' parameter specifies the prefix for output files, which is important for organizing and identifying saved latent data files.
    - Comfy dtype: STRING
    - Python dtype: str
- link_id
    - The 'link_id' parameter is used to associate latent data with a specific link or process, which is critical for tracking and managing data across different stages.
    - Comfy dtype: INT
    - Python dtype: int
- preview_method
    - The 'preview_method' parameter determines how latent data is previewed before saving. It affects the visual representation of the data and can influence user understanding and interaction.
    - Comfy dtype: COMBO['Latent2RGB-SDXL', 'Latent2RGB-SD15', 'TAESDXL', 'TAESD15']
    - Python dtype: str
- prompt
    - The 'prompt' parameter provides additional context or instructions that can be used to guide latent data processing within the node.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The 'extra_pnginfo' parameter allows additional metadata to be included with the latent data, enriching the information associated with the output files.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]

# Output types
- ui
    - The 'ui' output provides user interface elements that can be used to display or interact with the results of the node's operations.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
