
# Documentation
- Class name: ELLATextEncode
- Category: ella/conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ELLATextEncode node encodes text input using the ELLA model with additional processing through the T5 text embedder. It generates conditional embeddings suitable for further processing or generation tasks, leveraging both ELLA and T5 model capabilities to enhance the text encoding process.

# Input types
## Required
- text
    - The 'text' input is the primary text data for encoding. It plays a key role in determining the output embeddings, serving as direct input to the T5 text embedder, subsequently processed by the ELLA model.
    - Comfy dtype: STRING
    - Python dtype: str
- sigma
    - The 'sigma' parameter specifies the timestep for the ELLA model, affecting the temporal aspect of the encoding process. It determines how the ELLA model interprets conditions over time, thereby influencing the final embeddings.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ella
    - The 'ella' input provides the ELLA model components required for the text encoding process, including the ELLA model itself and the T5 text embedder. It is essential for enabling the node to perform its encoding function.
    - Comfy dtype: ELLA
    - Python dtype: dict

# Output types
- conditioning
    - The output is a conditional embedding tailored for further generation tasks. It includes embeddings from the ELLA model with additional information such as pooled output, designed to enhance downstream processing.
    - Comfy dtype: CONDITIONING
    - Python dtype: list


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
