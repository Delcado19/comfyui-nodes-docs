# Documentation
- Class name: ShowTextForGPT
- Category: ♾️Mixlab/GPT
- Output node: True
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The ShowTextForGPT node processes and outputs text data. It accepts various text inputs and writes them to an output file, ensuring each string is properly handled and stored. This node is essential for tasks requiring text generation and subsequent file management, providing a streamlined workflow for text processing.

# Input types
## Required
- text
- The `text` parameter is critical because it represents the data the node will process. It is the primary input that determines the content and nature of the output. Without this input, the node has no data to process, making it a key component for node execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- output_dir
- The `output_dir` parameter specifies where the processed text will be saved, affecting the organization and accessibility of output files and allowing better management and retrieval of results. This parameter is optional, but when used it enhances the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- ui.text
- The `ui.text` output parameter represents the processed text data. It directly reflects the input, demonstrating the node's ability to effectively process and output text. This output is important for visualizing results in the user interface.
    - Comfy dtype: STRING
    - Python dtype: str
- result
- The `result` output parameter is a collection of the processed text data, indicating successful completion of the node's operation. This output is crucial because it provides evidence of the node's functionality and the effectiveness of text processing.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
