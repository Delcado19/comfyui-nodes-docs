
# Documentation
- Class name: XY Input: LoRA Plot
- Category: Efficiency Nodes/XY Inputs
- Output node: False
- Repo Ref: https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes

This node is specifically designed to generate XY chart data for LoRA (Low-Rank Adaptation) parameters, helping to visualize the relationships and effects between different LoRA configurations. It can dynamically process various LoRA-related inputs, generating coordinated X and Y values for plotting, suitable for multiple LoRA parameters such as batch, weight, model strength, and crop strength.

# Input types
## Required
- input_mode
    - Specifies the input mode, determining which LoRA parameters (such as batch, weight, model strength, crop strength) are considered when generating the chart. This affects how the node processes and interprets the provided data.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lora_name
    - The name of the LoRA configuration being visualized, which is crucial for identifying and distinguishing various LoRA settings in the chart.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- model_strength
    - The applied model adaptation strength, relevant when visualizing the impact of model strength on LoRA effects.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_strength
    - The applied crop strength, relevant when evaluating the impact of crop strength on LoRA performance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- X_batch_count
    - Specifies the number of batches to consider for X-axis values, affecting the granularity of the chart.
    - Comfy dtype: INT
    - Python dtype: int
- X_batch_path
    - The file path for the X-axis batch data, crucial for locating and processing the specific LoRA data to be visualized.
    - Comfy dtype: STRING
    - Python dtype: str
- X_subdirectories
    - Indicates whether subdirectories should be included when searching for batch data, affecting the data range considered for the X-axis.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- X_batch_sort
    - Determines the sort order of the X-axis batch data, potentially affecting how the chart represents temporal or ordinal relationships.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- X_first_value
    - The starting value used to generate the X-axis model strength or crop strength range, setting the lower bound of the chart.
    - Comfy dtype: FLOAT
    - Python dtype: float
- X_last_value
    - The ending value used to generate the X-axis model strength or crop strength range, setting the upper bound of the chart.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Y_batch_count
    - Specifies the number of batches to consider for Y-axis values, affecting the granularity of the chart.
    - Comfy dtype: INT
    - Python dtype: int
- Y_first_value
    - The starting value used to generate the Y-axis model strength or crop strength range, setting the lower bound of the chart.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Y_last_value
    - The ending value used to generate the Y-axis model strength or crop strength range, setting the upper bound of the chart.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- lora_stack
    - An optional stack of LoRA configurations that can be included in the chart, allowing multiple LoRA settings to be visualized in a single chart.
    - Comfy dtype: LORA_STACK
    - Python dtype: list

# Output types
- X
    - The data represented on the X-axis, including the type and values derived from the specified LoRA parameters.
    - Comfy dtype: XY
    - Python dtype: tuple
- Y
    - The data represented on the Y-axis, including the type and values derived from the specified LoRA parameters.
    - Comfy dtype: XY
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
