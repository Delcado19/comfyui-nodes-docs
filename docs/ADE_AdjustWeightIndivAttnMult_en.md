# Documentation
- Class name: WeightAdjustIndivAttnMultNode
- Category: Animate Diff 🎭🅐🅓/ad settings/weight adjust
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The WeightAdjustIndivAttnMultNode class is designed to individually adjust the weights of the attention mechanism in a neural network model. It allows fine-tuning the influence of positional encoding and attention components by multiplying them with specified factors. This node is essential for optimizing model performance by adjusting the attention process to meet specific task requirements.

# Input types
## Required
- pe_MULT
    - The pe_MULT parameter is crucial for scaling positional encoding weights. It directly affects the model's ability to capture the order of inputs, which is critical for tasks such as language translation or text generation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_MULT
    - The attn_MULT parameter adjusts the overall attention weights, influencing the model's focus on different parts of the input sequence. This is particularly useful for emphasizing or downplaying certain input features.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_q_MULT
    - The attn_q_MULT parameter specifically targets the query weights in the attention mechanism, allowing modification of how the model queries different elements of the input data.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_k_MULT
    - The attn_k_MULT parameter affects the key weights in the attention mechanism, which determines how the model aligns the input sequence with context.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_v_MULT
    - The attn_v_MULT parameter modifies the value weights in the attention mechanism, which is critical for the model to gauge the importance of different input elements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_out_weight_MULT
    - The attn_out_weight_MULT parameter scales the output weights of the attention mechanism, which is important for the final representation of the input sequence in the model.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_out_bias_MULT
    - The attn_out_bias_MULT parameter adjusts the bias term of the attention mechanism output, which helps fine-tune the model's predictions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- other_MULT
    - The other_MULT parameter provides a generic scaling factor for other weight components in the model that are not explicitly categorized.
    - Comfy dtype: FLOAT
    - Python dtype: float
- print_adjustment
    - The print_adjustment parameter determines whether the node outputs a log detailing the adjustments made to the weights. This is very helpful for debugging and understanding the impact of the adjustments.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- prev_weight_adjust
    - The prev_weight_adjust parameter allows providing a previous weight adjustment group, enabling the node to build upon existing adjustments or reset and start fresh.
    - Comfy dtype: WEIGHT_ADJUST
    - Python dtype: Union[AdjustGroup, None]

# Output types
- weight_adjust
    - The output of the node is a WEIGHT_ADJUST object, which encapsulates the adjustments made to the model weights. This object can be used to apply these adjustments to the model or to further refine them in subsequent nodes.
    - Comfy dtype: WEIGHT_ADJUST
    - Python dtype: AdjustGroup

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
