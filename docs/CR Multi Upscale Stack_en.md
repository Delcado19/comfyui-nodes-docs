# Documentation
- Class name: CR_MultiUpscaleStack
- Category: Comfyroll/Upscale
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_MultiUpscaleStack is a node designed to improve image quality and resolution through a series of upscaling models. It allows users to switch between and select different upscaling models, apply specific rescaling factors, and combine their effects to achieve better results. This node is essential for tasks requiring high-resolution output, such as printing or displaying on high-DPI screens.

# Input types
## Required
- switch_1
- The switch parameter determines whether the first upscaling model is activated in the stack. It is crucial because it controls the model's inclusion in the upscaling process, thereby affecting the quality of the final output.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- upscale_model_1
- Selects the first model to use in the upscaling stack. The model selection has a significant impact on the upscaling result, as different models may be optimized for different types of images or quality requirements.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- rescale_factor_1
- Defines the scaling factor for the first upscaling model. This parameter is critical because it determines the degree of upscaling, directly affecting the resolution and clarity of the resulting image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- switch_2
- The switch parameter for the second model in the stack. It plays a similar role to switch_1, allowing the second model to be conditionally applied based on user selection.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- upscale_model_2
- Specifies the second model to consider during the upscaling process. The selection can change the overall effect of the stack, especially when combined with other models.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- rescale_factor_2
- Sets the scaling factor for the second upscaling model. It works together with the model selection to fine-tune the upscaling process according to user needs.
    - Comfy dtype: FLOAT
    - Python dtype: float
- switch_3
- Controls whether the third upscaling model is included in the stack. This decision can be strategic, as it allows for selective image quality enhancement.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- upscale_model_3
- Identifies the third upscaling model to apply in the stack. The model's effectiveness may vary depending on its compatibility with the image and the expected results.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- rescale_factor_3
- Adjusts the scaling factor for the third upscaling model, allowing precise control over the upsampling intensity at the third level of the stack.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- upscale_stack
- An optional parameter that allows the user to input a pre-existing upscaling model stack with its factors. This can simplify the upscaling process by building upon a previous configuration.
    - Comfy dtype: UPSCALE_STACK
    - Python dtype: List[Tuple[str, float]]

# Output types
- UPSCALE_STACK
- The output is a structured list containing the activated and combined upscaling models along with their corresponding rescaling factors as processed by the node. This output is significant because it represents the final configuration of the upscaling stack.
    - Comfy dtype: UPSCALE_STACK
    - Python dtype: List[Tuple[str, float]]
- show_help
- Provides a URL link to documentation for further assistance and guidance on effectively using this node. This is especially useful for new users or when additional information is needed.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
