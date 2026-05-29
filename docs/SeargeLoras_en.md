# Documentation
- Class name: SeargeLoras
- Category: UI_INPUTS
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node is designed to process and manage lora signals, integrating their strengths and configurations into a structured data format.

# Input types
## Required
- lora_1
    - The first lora parameter is crucial for defining the initial signal in the lora stack, affecting the overall structure and output of the node.
    - Comfy dtype: LORAS_WITH_NONE()
    - Python dtype: Union[str, None]
- lora_1_strength
    - The strength of the first lora signal is very important because it determines the signal's influence in the stack, contributing to the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_2
    - The second lora parameter further refines the signal stack, adding extra complexity and nuance to the node's operation.
    - Comfy dtype: LORAS_WITH_NONE()
    - Python dtype: Union[str, None]
- lora_2_strength
    - The strength of the second lora signal is critical because it adjusts the relative weight of the signal, affecting the node's final processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_3
    - The third lora parameter contributes to the diversity of the signal stack, enhancing the node's adaptability and versatility.
    - Comfy dtype: LORAS_WITH_NONE()
    - Python dtype: Union[str, None]
- lora_3_strength
    - The strength of the third lora signal is important because it fine-tunes the signal's contribution to the stack, refining the node's output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_4
    - The fourth lora parameter adds depth to the signal stack, affecting the node's comprehensive analysis and synthesis capabilities.
    - Comfy dtype: LORAS_WITH_NONE()
    - Python dtype: Union[str, None]
- lora_4_strength
    - The strength of the fourth lora signal is crucial because it adjusts the signal's prominence in the stack, shaping the node's overall performance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_5
    - The fifth lora parameter is indispensable to the signal stack, providing rich information that enhances the node's processing capability.
    - Comfy dtype: LORAS_WITH_NONE()
    - Python dtype: Union[str, None]
- lora_5_strength
    - The strength of the fifth lora signal is important because it helps fine-tune the signal's role in the stack, affecting the node's comprehensive output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- data
    - The output data stream is the result of node processing, encapsulating the structured lora stack and its associated strengths.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
