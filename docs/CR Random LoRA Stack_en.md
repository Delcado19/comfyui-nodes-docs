# Documentation
- Class name: CR_RandomLoRAStack
- Category: Comfyroll/LoRA
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_RandomLoRAStack node is designed to randomly stack LoRA (Low-Rank Adaptation) modules onto a base model. It intelligently handles the selection and application of LoRA modules based on specified weights, chances, and exclusivity settings, ensuring diverse and controllable enhancement of model capabilities.

# Input types
## Required
- exclusive_mode
    - Exclusive mode determines whether only one LoRA can be applied at a time. When set to 'On', it enforces mutual exclusivity, ensuring the node's operation is non-redundant and focused.
    - Comfy dtype: COMBO['Off', 'On']
    - Python dtype: str
- stride
    - Step size defines the interval at which the node re-evaluates the LoRA stack. It is crucial for controlling the frequency of LoRA application, thereby affecting the overall performance of the node.
    - Comfy dtype: INT
    - Python dtype: int
- force_randomize_after_stride
    - When enabled, this parameter causes the node to randomize LoRA selection after a certain number of steps, adding an element of unpredictability to the node's operation.
    - Comfy dtype: COMBO['Off', 'On']
    - Python dtype: str
- lora_name_1
    - The first LoRA module to be considered for stacking. Its selection can significantly alter the node's functionality, introducing new features or modifying existing ones.
    - Comfy dtype: STRING
    - Python dtype: str
- chance_1
    - The probability of applying the first LoRA module. It plays a key role in the randomness of the node's operation, allowing a degree of controlled unpredictability.
    - Comfy dtype: FLOAT
    - Python dtype: float
- model_weight_1
    - The weight assigned to the first LoRA module, influencing the extent of its impact on the node's final output. It is a critical factor in fine-tuning the node's behavior.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_weight_1
    - The clip weight for the first LoRA module, which can help control the strength of the LoRA's influence on the node's output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- switch_1
    - A switch determining whether the first LoRA module is active. It is a simple and effective method for toggling the inclusion of the LoRA module in the node's operation.
    - Comfy dtype: COMBO['Off', 'On']
    - Python dtype: str
## Optional
- lora_name_2
    - The second LoRA module that can be considered for stacking, providing additional options for enhancing the node's capabilities.
    - Comfy dtype: STRING
    - Python dtype: str
- chance_2
    - The probability associated with the second LoRA module, further contributing to the node's random behavior.
    - Comfy dtype: FLOAT
    - Python dtype: float
- model_weight_2
    - The weight for the second LoRA module, allowing fine-grained control over its contribution to the node's output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_weight_2
    - The clip weight for the second LoRA module, providing a mechanism to adjust its influence on the node's results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- switch_2
    - The switch for the second LoRA module, allowing flexible control over its activation during the node's process.
    - Comfy dtype: COMBO['Off', 'On']
    - Python dtype: str
- lora_name_3
    - The third LoRA module option for stacking, providing further diversity in the node's potential functionality.
    - Comfy dtype: STRING
    - Python dtype: str
- chance_3
    - The probability for the third LoRA module, adding another layer of randomness to the node's operation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- model_weight_3
    - The weight assigned to the third LoRA module, influencing its effect on the node's output in the stack.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_weight_3
    - The clip weight for the third LoRA module, allowing fine-grained control over its impact on the node's final result.
    - Comfy dtype: FLOAT
    - Python dtype: float
- switch_3
    - The switch for the third LoRA module, providing the option to include or exclude it in the node's operation.
    - Comfy dtype: COMBO['Off', 'On']
    - Python dtype: str
- lora_stack
    - An optional stack of LoRA modules that can be pre-applied to the node. This allows customization and preset LoRA stacking before further randomization.
    - Comfy dtype: LORA_STACK
    - Python dtype: List[Tuple[str, float, float]]

# Output types
- lora_stack
    - The output is a stack of LoRA modules that have been randomly selected and weighted based on the input parameters. This stack plays a key role in modifying the behavior of the base model according to the node's configuration.
    - Comfy dtype: LORA_STACK
    - Python dtype: List[Tuple[str, float, float]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
