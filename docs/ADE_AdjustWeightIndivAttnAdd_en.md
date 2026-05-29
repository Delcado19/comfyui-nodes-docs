# Documentation
- Class name: WeightAdjustIndivAttnAddNode
- Category: Animate Diff 🎭🅐🅓/ad settings/weight adjust
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The WeightAdjustIndivAttnAddNode class is designed to adjust the weights of various attention mechanisms in neural network models. It provides a method to fine-tune attention parameters such as query (q), key (k), and value (v) vectors, as well as output weights and biases. This node allows modifying these parameters according to specific use cases or experimental requirements to customize model behavior.

# Input types
## Required
- pe_ADD
    - The pe_ADD parameter is used to adjust the positional encoding weights of the model. It plays a crucial role in how the model interprets sequence order, which can significantly affect the model's performance on tasks sensitive to the order of input data.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_ADD
    - The attn_ADD parameter allows adjusting general attention weights within the model. This helps to emphasize or de-emphasize certain aspects of the input data, thereby affecting the model's focus and potentially enhancing its ability to capture relevant information.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_q_ADD
    - The attn_q_ADD parameter specifically targets the query weights of the attention mechanism. By fine-tuning this parameter, the model can be guided to focus more on certain input features, which is particularly useful for tasks that require deep understanding of input context.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_k_ADD
    - The attn_k_ADD parameter is responsible for adjusting the key weights of the attention mechanism. Modifying this parameter can change the model's ability to align with relevant parts of the input data, which is crucial for tasks that depend on accurate context alignment.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_v_ADD
    - The attn_v_ADD parameter affects the value weights within the attention mechanism. It is important for determining the contribution of each input element to the final output, which is crucial for tasks that require precise representation of input data.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_out_weight_ADD
    - The attn_out_weight_ADD parameter is used to adjust the output weights of the attention mechanism. This helps to refine the model's output, making it closer to the desired results, which is particularly important for tasks requiring high precision in the output layer.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_out_bias_ADD
    - The attn_out_bias_ADD parameter allows adjusting the output bias within the attention mechanism. This is useful for adjusting the model's predictions to better match expected results, especially for tasks that require precise output adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float
- other_ADD
    - The other_ADD parameter provides general adjustments for other unspecified weights within the model. It can be used to make broad adjustments to model behavior that don't fall into specific categories of other parameters.
    - Comfy dtype: FLOAT
    - Python dtype: float
- print_adjustment
    - The print_adjustment parameter is a boolean flag that enables detailed logging of weight adjustments when set to True. This is helpful for debugging and understanding how adjustments affect model parameters.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- prev_weight_adjust
    - The prev_weight_adjust parameter is an optional previous weight adjustment group that can be applied to the model. This allows continuing a series of adjustments or applying a predefined set of adjustments.
    - Comfy dtype: WEIGHT_ADJUST
    - Python dtype: Union[AdjustGroup, None]

# Output types
- weight_adjust
    - The weight_adjust output provides the result of applying the various attention adjustments to the model. It contains the combined impact of all input parameters on the model weights, providing a structured representation of the adjusted weights.
    - Comfy dtype: WEIGHT_ADJUST
    - Python dtype: AdjustGroup

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
