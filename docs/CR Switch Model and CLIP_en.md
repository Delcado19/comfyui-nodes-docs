# Documentation
- Class name: CR_ModelAndCLIPInputSwitch
- Category: Comfyroll/Utils/Logic
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_ModelAndCLIPInputSwitch is a node used for selecting between two sets of models and CLIP inputs based on binary input. It functions as a decision node, allowing users to choose between two different models and their corresponding CLIP representations. This node is essential in scenarios where conditional logic is needed to determine which model and CLIP to use in subsequent processing steps.

# Input types
## Required
- Input
    - The 'Input' parameter is a key binary selector that determines which set of models and CLIP inputs the node will use. It directly impacts the node's decision process, enabling condition-based input routing according to its value.
    - Comfy dtype: INT
    - Python dtype: int
- model1
    - The 'model1' parameter represents the first model input used when the 'Input' parameter is set to 1. It plays an important role in the node's operation, as it defines the model to be processed when the first condition is met.
    - Comfy dtype: MODEL
    - Python dtype: Any
- clip1
    - The 'clip1' parameter corresponds to the CLIP input associated with the first model. It is crucial for node execution, as it provides the CLIP representation needed when the first model is selected.
    - Comfy dtype: CLIP
    - Python dtype: Any
- model2
    - The 'model2' parameter represents the second model input used when the 'Input' parameter is set to 2. It is vital to the node's functionality, as it determines the model to be processed when the second condition is satisfied.
    - Comfy dtype: MODEL
    - Python dtype: Any
- clip2
    - The 'clip2' parameter is the CLIP input paired with the second model. It is an indispensable part of the node's functionality, as it provides the CLIP representation needed when the second model is selected.
    - Comfy dtype: CLIP
    - Python dtype: Any

# Output types
- MODEL
    - The 'MODEL' output provides the selected model according to the 'Input' parameter. It is a key component of the node's output, ensuring the appropriate model is forwarded for further processing.
    - Comfy dtype: MODEL
    - Python dtype: Any
- CLIP
    - The 'CLIP' output provides the CLIP representation corresponding to the selected model. It plays an important role in ensuring comprehensive node output, including both the model and its associated CLIP.
    - Comfy dtype: CLIP
    - Python dtype: Any
- show_help
    - The 'show_help' output provides a URL link to the node documentation page, enabling users to easily access additional information and guidance on how to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
