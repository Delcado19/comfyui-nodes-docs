# Documentation
- Class name: PromptExtractor
- Category: InspirePack/Prompt
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The PromptExtractor node analyzes image files and extracts relevant prompt information, which can be used to generate creative prompts or guide workflows. It processes image metadata to identify required inputs and outputs, and builds a textual representation of the prompt structure.

# Input types
## Required
- image
    - Image parameters are critical because they are the primary input for the node's analysis. The expected image files reside in the input directory and have a valid format.
    - Comfy dtype: COMBO[sorted_files]
    - Python dtype: str
- positive_id
    - The positive_id parameter is essential for identifying the positive aspects of a prompt. It helps filter relevant information from the extracted prompt data, contributing to the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_id
    - The negative_id parameter specifies the negative aspects of a prompt. It functions to exclude certain information from the final output, ensuring relevance and accuracy of the extracted data.
    - Comfy dtype: STRING
    - Python dtype: str
- info
    - The info parameter contains metadata about the image, which is crucial for the node to understand the context and structure of the prompt. It is vital for accurately extracting and representing prompt information.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- unique_id
    - The unique_id parameter is the identifier for the node's operation, aiding in tracking and managing the node's execution within the workflow.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- positive
    - Positive output represents extracted information that matches the positive_id parameter, contributing to the creative process by providing constructive aspects of the prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - Negative output captures extracted information that matches the negative_id parameter, helping refine the creative process by excluding unwanted aspects of the prompt.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
