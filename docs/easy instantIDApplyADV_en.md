# Documentation
- Class name: instantIDApplyAdvanced
- Category: EasyUse/Adapter
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node aims to improve the quality and specificity of output image processing by integrating various features and control functions. It generates refined results by applying complex image processing techniques, control networks, and combinations of conditional inputs.

# Input types
## Required
- pipe
    - The pipe parameter is critical to the node's operation, as it provides the foundational data structure for the image processing workflow. It contains all necessary information, including positive and negative conditional data.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict
- image
    - The image parameter is essential to the node, as it is the primary input for image processing tasks. It directly affects the output and the effectiveness of applied transformations.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- instantid_file
    - The instantid_file parameter is important, as it provides the necessary file related to the identity of the subject in the image. It is used to ensure the accuracy and relevance of image processing.
    - Comfy dtype: FILEPATH
    - Python dtype: List[str]
- insightface
    - The insightface parameter is important, as it determines the backend used for facial recognition and processing. It affects the node's ability to accurately identify and enhance facial features.
    - Comfy dtype: STRING
    - Python dtype: Union[str]
- control_net_name
    - The control_net_name parameter is critical, as it specifies the control network used to guide image processing. It ensures the output aligns with desired aesthetic or thematic constraints.
    - Comfy dtype: FILEPATH
    - Python dtype: List[str]
- cn_strength
    - The cn_strength parameter adjusts the influence of the control network on image processing. It plays a key role in achieving a balance between desired control and the natural appearance of the processed image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cn_soft_weights
    - The cn_soft_weights parameter determines the softness of the control applied by the control network. It affects the subtlety of changes made to the image, ensuring smooth and detailed transformations.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight
    - The weight parameter affects the overall intensity of the image processing effect. It is a key factor in controlling the degree of image enhancement or modification.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_at
    - The start_at parameter defines the starting point for applying the image processing effect. It is important to ensure changes are applied gradually and in a controlled manner.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - The end_at parameter specifies the point at which the image processing effect is fully applied. It is critical for determining the scope and extent of the transformation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise
    - The noise parameter introduces a degree of randomness into image processing, contributing to the diversity and unpredictability of results. It is essential for achieving a more natural, less uniform appearance.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- pipe
    - The pipe output is a modified version of the initial data structure, now containing the results of image processing. It is important because it encapsulates the node's contribution to the overall workflow.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict
- model
    - The model output represents the transformed image or the updated state of the image processing model. It is a direct reflection of the node's core functionality and the effectiveness of applied techniques.
    - Comfy dtype: MODEL
    - Python dtype: torch.Tensor
- positive
    - The positive output is a set of conditional data refined or adjusted by the node. It is important for providing feedback to subsequent stages of the pipeline, enhancing the coherence and consistency of the final output.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict
- negative
    - The negative output contains conditional data optimized or filtered by the node. It plays a key role in shaping the final output by ensuring unwanted elements are excluded.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
