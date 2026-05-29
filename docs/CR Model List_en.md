# Documentation
- Class name: CR_ModelList
- Category: Comfyroll/Animation/Legacy
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ModelList node is designed to manage and compile a list of models, where each model is associated with a checkpoint file and an alias. It facilitates the organization and retrieval of model checkpoints for further processing or animation tasks. This node plays a key role in model management by allowing users to specify multiple checkpoints and their corresponding aliases, thereby improving workflow efficiency.

# Input types
## Required
- ckpt_name1
    - The ckpt_name1 parameter is essential for identifying the first checkpoint file associated with the model. It is a critical component of the node's operation, as it directly affects the selection and organization of model checkpoints in the list.
    - Comfy dtype: STRING
    - Python dtype: str
- alias1
    - alias1 serves as an alternative name or identifier for the first checkpoint, allowing easier reference and management within the model list. It enhances the node's functionality by providing a user-friendly naming convention for checkpoints.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- ckpt_name2
    - The ckpt_name2 parameter is optional and can be used to specify a second checkpoint file in the model list. It extends the node's capabilities by allowing additional checkpoints to be included during the model management process.
    - Comfy dtype: STRING
    - Python dtype: str
- alias2
    - alias2 is an optional parameter that provides an alternative name for the second checkpoint, enhancing the node's flexibility and user-friendliness by offering customizable naming options for checkpoints.
    - Comfy dtype: STRING
    - Python dtype: str
- model_list
    - The model_list parameter is optional and allows users to input a pre-existing model list. This parameter enhances the node's adaptability by enabling external model lists to be integrated into the node's operation.
    - Comfy dtype: MODEL_LIST
    - Python dtype: List[Tuple[str, str]]

# Output types
- MODEL_LIST
    - The MODEL_LIST output parameter represents the compiled model list, including the associated checkpoints and aliases. It is a significant output as it encompasses the node's primary function of organizing and managing model checkpoints.
    - Comfy dtype: MODEL_LIST
    - Python dtype: List[Tuple[str, str]]
- show_text
    - The show_text output parameter provides a text representation of the model list, which is useful for display or logging purposes. It reflects the node's ability to generate a human-readable summary of model checkpoints.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
