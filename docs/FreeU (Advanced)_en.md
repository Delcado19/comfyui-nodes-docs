# Documentation
- Class name: WAS_FreeU
- Category: _for_testing
- Output node: False
- Repo Ref: https://github.com/WASasquatch/FreeU_Advanced

The WAS_FreeU class contains a method designed to modify and enhance model behavior by applying patching techniques. The method, called 'patch', aims to improve model performance or adjust its output characteristics according to predefined parameters and patterns. The node's functionality focuses on manipulating the internal representations of the model, allowing for a more nuanced and targeted approach to model optimization.

# Input types
## Required
- model
    - The model parameter is required because it defines the underlying structure and weights to which the patching process will be applied. It is the primary input, whose characteristics and performance will be altered by the node's operations.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- target_block
    - The target_block parameter determines which part of the model the patching operation will focus on. It is crucial in determining the scope and impact of the modifications made by the node.
    - Comfy dtype: COMBO[output_block, middle_block, input_block, all]
    - Python dtype: str
- multiscale_mode
    - The multiscale_mode parameter affects the complexity and granularity of the patching process. It plays an important role in how the node adjusts its behavior to accommodate different scales of model features.
    - Comfy dtype: FLOAT
    - Python dtype: float
- multiscale_strength
    - This parameter controls the strength of multiscale patching. It is important because it directly affects the degree to which the node modifies model features at different scales.
    - Comfy dtype: FLOAT
    - Python dtype: float
- slice_b1
    - The slice_b1 parameter specifies the size of the first slice in the patching process. It is a key factor in determining the portion of the model that will be subject to modification.
    - Comfy dtype: INT
    - Python dtype: int
- slice_b2
    - This parameter defines the size of the second slice involved in patching. It works together with slice_b1 to establish the range of model features that the node will target.
    - Comfy dtype: INT
    - Python dtype: int
- b1
    - The b1 parameter is used to adjust the influence of the first slice during the patching process. It is important because it allows the node to control the degree of modification applied to model features.
    - Comfy dtype: FLOAT
    - Python dtype: float
- b2
    - This parameter is responsible for adjusting the influence of the second slice during the patching process. It is crucial in shaping how the node alters model features within the specified range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s1
    - The s1 parameter is essential for setting the scale of the first filtering operation. It determines how the node emphasizes or suppresses certain features of the model based on their importance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s2
    - This parameter determines the scale of the second filtering operation. It plays a key role in fine-tuning the node's ability to refine model features within the target range.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- b1_mode
    - The b1_mode parameter specifies the blending mode for the first slice. It is important for defining how the patching operation integrates modifications into the model's existing features.
    - Comfy dtype: COMBO[add, subtract, multiply, divide, average, max, min]
    - Python dtype: str
- b1_blend
    - This parameter adjusts the blending strength of the first slice. It is important because it allows the node to control the smoothness of the transition between original and modified features.
    - Comfy dtype: FLOAT
    - Python dtype: float
- b2_mode
    - The b2_mode parameter sets the blending mode for the second slice. It is crucial for determining how the node harmonizes the patched features with the rest of the model.
    - Comfy dtype: COMBO[add, subtract, multiply, divide, average, max, min]
    - Python dtype: str
- b2_blend
    - This parameter fine-tunes the blending strength of the second slice. It is crucial in ensuring the node seamlessly integrates modifications into the model's existing structure.
    - Comfy dtype: FLOAT
    - Python dtype: float
- threshold
    - The threshold parameter is used to define the region of interest for filtering operations. It is important for focusing the node's attention on specific features of the model.
    - Comfy dtype: INT
    - Python dtype: int
- use_override_scales
    - The use_override_scales parameter allows for custom scaling of the Fourier filter. It is important because it provides the node with flexibility to adjust the filtering process according to specific requirements.
    - Comfy dtype: COMBO[false, true]
    - Python dtype: str
- override_scales
    - This parameter provides a method to manually specify scale values for the Fourier filter. It is important for applying user-defined filtering criteria to the model's features.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- MODEL
    - The output is the modified model with the patching operations applied. It represents an enhanced or altered version of the input model, reflecting the changes made by the node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/FreeU_Advanced)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
