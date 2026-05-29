# Documentation
- Class name: EditDetailerPipeSDXL
- Category: text_processing
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

EditDetailerPipeSDXL is a node designed to enhance the specificity and detail of text output by integrating additional elements such as LoRA and wildcards. It plays a critical role in the text generation process, enabling the creation of more nuanced and detailed content.

# Input types
## Required
- detailer_pipe
    - The detailer_pipe parameter is essential for defining the base text processing pipeline that the node will operate on. It sets the foundation for text enhancement and is critical to the node's functionality.
    - Comfy dtype: DETAILER_PIPE
    - Python dtype: str
- wildcard
    - The wildcard parameter allows users to input dynamic text segments that can be replaced or manipulated during the text generation process. It plays a key role in customizing output to meet specific requirements.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- Select to add LoRA
    - The LoRA selection parameter allows adding a layer of refinement to the text, enhancing the model's ability to generate detailed and content-rich output. This is an optional feature that can significantly boost the node's capabilities.
    - Comfy dtype: COMBO[loras]
    - Python dtype: str
- Select to add Wildcard
    - This parameter provides a mechanism for introducing wildcards into text generation, offering flexibility and adaptability in output. It is an optional feature that can be tailored to different use cases.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- model
    - The model parameter specifies the machine learning model the node will use for text processing. This is an optional input that, with the correct model selection, can enhance the node's performance.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Output types
- refined_text
    - The refined_text output is the result of the node's operation, providing a detailed and enhanced version of the input text. It represents the culmination of the node's text processing capabilities.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
