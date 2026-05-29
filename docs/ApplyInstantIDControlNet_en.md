# Documentation
- Class name: ApplyInstantIDControlNet
- Category: InstantID
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_InstantID.git

The node applies a control network to modify facial features in the image based on given embeddings and keypoint information. It adjusts facial appearance according to specified positive and negative conditioning inputs, allowing fine-tuning of expressions and structure.

# Input types
## Required
- face_embeds
    - This parameter contains facial embeddings, essential for the node's operation because they provide the foundational representation of the face to be manipulated.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]
- control_net
    - The control network is crucial for applying changes to facial features. It uses the conditioning inputs as a guide for modification.
    - Comfy dtype: CONTROL_NET
    - Python dtype: torch.nn.Module
- image_kps
    - Image keypoint information is vital as it supplies spatial context for facial features, ensuring precise adjustments according to the control network.
    - Comfy dtype: IMAGE
    - Python dtype: np.ndarray
- positive
    - Positive conditioning input serves as a reference for the desired facial features, guiding the node to achieve the intended appearance.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- negative
    - Negative conditioning input contrasts with the positive input, helping to avoid unwanted features and improve adjustment accuracy.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- strength
    - The strength parameter determines how strongly the control network influences facial features, allowing subtle or pronounced changes based on the input value.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_at
    - This parameter defines the starting point of the control network's influence, enabling the node to apply changes gradually or from the outset.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - The endpoint parameter specifies when to stop the control network's adjustments, ensuring controlled transitions in facial feature modifications.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- mask
    - When a mask parameter is provided, it enables targeted adjustments by specifying image regions where changes should be applied or excluded.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- positive
    - The output positive parameter represents the modified facial features based on the positive conditioning input, reflecting the node's adjustments.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- negative
    - The output negative parameter shows the changes made from the negative conditioning input, demonstrating the node's ability to refine facial features while avoiding undesired traits.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_InstantID)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
