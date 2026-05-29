# Documentation
- Class name: CR_RandomWeightLoRA
- Category: Comfyroll/LoRA
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_RandomWeightLoRA node aims to dynamically assign random weights to LoRA (Low-Rank Adaptation) layers in neural network models. It provides a mechanism to introduce variability and customization into model performance by adjusting the influence of specific LoRA layers. The node operates by generating a unique hash for a given parameter set, then uses that hash to determine whether new random weights should be assigned. This approach ensures that the model's output retains a degree of unpredictability while adapting to different input conditions.

# Input types
## Required
- stride
    - The stride parameter is essential for determining the step size of the node operation. It affects how often the node processes input data and can significantly influence the efficiency and outcome of the node's execution.
    - Comfy dtype: INT
    - Python dtype: int
- force_randomize_after_stride
    - This parameter indicates whether the node should force weight randomization after a certain number of strides. It is important for controlling randomness and ensuring the node does not fall into predictable patterns.
    - Comfy dtype: COMBO['Off', 'On']
    - Python dtype: str
- lora_name
    - The LoRA name parameter specifies which Low-Rank Adaptation layer the node will target. This selection is critical as it determines the specific layer whose weights will be randomized.
    - Comfy dtype: STRING
    - Python dtype: str
- switch
    - The switch parameter acts as a toggle to enable or disable the node's random weight assignment feature. It plays a key role in the node's functionality by controlling whether the randomization process is active.
    - Comfy dtype: COMBO['Off', 'On']
    - Python dtype: str
- weight_min
    - The weight_min parameter sets the lower bound for the range of random weights that can be assigned to the LoRA layer. It is essential for defining the range of the node's operation and influences the variability of the node's output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_max
    - The weight_max parameter sets the upper bound for the range of random weights. It works with weight_min to ensure allocated weights fall within the specified interval, thus controlling the node's behavior.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_weight
    - The clip_weight parameter is used to clip or limit the assigned weights to a specific value. It ensures that weights do not exceed a predefined threshold, which is crucial for maintaining the stability of the node's operation.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- lora_stack
    - The optional lora_stack parameter allows additional LoRA layers to be included in the node's processing. It provides a way to extend the node's capabilities and tailor its behavior to the specific requirements of the task at hand.
    - Comfy dtype: LORA_STACK
    - Python dtype: List[Tuple[str, float, float]]

# Output types
- lora_stack
    - The lora_stack output parameter represents the list of modified LoRA layers with assigned weights after the node execution. It is important because it conveys the final output of the node, reflecting the customization applied to the model.
    - Comfy dtype: LORA_STACK
    - Python dtype: List[Tuple[str, float, float]]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
