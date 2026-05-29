# Documentation
- Class name: CLIPSave
- Category: advanced/model_merging
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The CLIPSave node is designed to efficiently save the state of a CLIP model to a file, allowing preservation and future reuse of the model's learned parameters. It simplifies the model serialization process, ensuring the model's state can be captured and stored in a compact and standardized format.

# Input types
## Required
- clip
    - The 'clip' parameter is essential for the node's operation, as it represents the CLIP model to be saved. This is a fundamental input that enables the node to access the model's state for serialization.
    - Comfy dtype: CLIP
    - Python dtype: CLIP model instance
- filename_prefix
    - The 'filename_prefix' parameter determines the beginning of the saved file name, which is crucial for identifying and organizing saved model files. It plays an important role in the node's functionality, providing a naming convention for the output file.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- prompt
    - The optional 'prompt' parameter can be used to include additional context or description in the saved model. It enhances the node's functionality by allowing metadata to be associated with the model, which is useful for later reference or annotation purposes.
    - Comfy dtype: PROMPT
    - Python dtype: Any
- extra_pnginfo
    - The 'extra_pnginfo' parameter allows saving additional information along with the model. This is particularly useful for storing auxiliary data that complements the model's primary functionality, thereby enriching the node's capabilities.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]

# Output types
- output
    - The output of the CLIPSave node is an empty dictionary, indicating the completion of the save operation. It signifies that the model's state has been successfully serialized and stored, ready for future use.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
