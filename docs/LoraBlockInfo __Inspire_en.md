
# Documentation
- Class name: LoraBlockInfo __Inspire
- Category: InspirePack/LoraBlockWeight
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LoraBlockInfo node is designed to extract and convey detailed information about specific LoRA (Low-Rank Adaptation) blocks within a model. It leverages LoRA technology to adjust model parameters for improved performance on specific tasks and provides insights into these modifications and their impact.

# Input types
## Required
- model
    - The model parameter represents the deep learning model to which LoRA adaptation is applied. It is essential for identifying specific blocks within the model that have been modified using LoRA technology.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The clip parameter is related to the CLIP model used alongside the main model, providing context for text and image understanding in LoRA adaptation.
    - Comfy dtype: CLIP
    - Python dtype: openai.CLIP
- lora_name
    - This parameter specifies the filename containing the LoRA adaptation to be loaded and analyzed. It is critical for locating and applying the correct LoRA modifications.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- block_info
    - A string containing detailed information about specific blocks within the model that have been modified using LoRA. This parameter is essential for extracting and presenting relevant LoRA adaptations.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
This node has no output types.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
