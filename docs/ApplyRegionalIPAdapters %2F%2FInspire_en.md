# Documentation
- Class name: ApplyRegionalIPAdapters
- Category: InspirePack/Regional
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The ‘ApplyRegionalIPAdapters’ node is designed to integrate a set of regional IP adapters and apply them to a given model pipeline. It simplifies the process of enhancing model functionality by dynamically aggregating various adapters based on the specified region. The node aims to optimize model performance for specific regional characteristics, thereby improving the accuracy and relevance of model outputs.

# Input types
## Required
- ipadapter_pipe
    - The ‘ipadapter_pipe’ parameter is the key channel for passing the IP adapter integration pipeline to the node. It includes the necessary components such as the IP adapter itself, the model, and other auxiliary tools, which are essential for the node to effectively perform its regional adaptation function.
    - Comfy dtype: TUPLE
    - Python dtype: Tuple[IPAdapter, Model, ClipVision, InsightFace, LoraLoader]
## Optional
- regional_ipadapter1
    - The ‘regional_ipadapter1’ parameter allows customization of the IP adapter according to regional requirements. It provides flexibility to better suit specific regional environments, enhancing model capabilities and increasing the node’s adaptability and effectiveness.
    - Comfy dtype: REGIONAL_IPADAPTER
    - Python dtype: RegionalIPAdapter

# Output types
- MODEL
    - The output ‘MODEL’ represents the model that has been adapted with regional IP adapters. It signifies the completion of the node’s processing, after which the model can more proficiently handle region-specific tasks.
    - Comfy dtype: MODEL
    - Python dtype: Model

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
