# Documentation
- Class name: CR_ConditioningMixer
- Category: Comfyroll/Essential/Core
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ConditioningMixer node is designed to mix or combine different conditioning inputs. It provides a method for merging or averaging conditioning data, which is essential for some machine learning applications where input conditions are critical to model performance. The node’s functionality is abstracted to ensure flexibility, allowing users to choose to combine, average, or concatenate conditioning inputs to achieve the desired result.

# Input types
## Required
- conditioning_1
    - The first conditioning input is essential for the node’s operation, as it represents one of the primary data sources that will be operated on or combined with another conditioning input. It plays a key role in determining the node’s final output.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]
- conditioning_2
    - The second conditioning input is another critical element of the node’s functionality. It is used together with the first conditioning input to create a blended or mixed output based on the selected mixing method.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]
- mix_method
    - The mixing method parameter defines how conditioning inputs are combined. It is a key determinant of the node’s operation, allowing different strategies such as combining, averaging, or concatenating inputs.
    - Comfy dtype: COMBO['Combine', 'Average', 'Concatenate']
    - Python dtype: str
## Optional
- average_strength
    - When the mixing method is set to 'Average', the average intensity parameter is used. It controls the blend ratio between the two conditioning inputs, influencing the final output according to the specified intensity.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- CONDITIONING
    - The output conditioning is the result of applying the chosen mixing method to the input conditioning. It contains the integrated or processed data ready for further use in a machine learning pipeline.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]
- show_help
    - The show_help output provides a URL link to the node documentation. It serves as a useful reference for users seeking more information on how to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
