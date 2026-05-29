# Documentation
- Class name: BatchCreativeInterpolationNode
- Category: Steerable-Motion
- Output node: False
- Repo Ref: https://github.com/banodoco/steerable-motion

BatchCreativeInterpolationNode is designed to perform creative interpolation on a batch of images. It utilizes various parameters to control the distribution of frames, keyframe influence, and intensity values during the interpolation process. This node is particularly suitable for generating smooth transitions between different image states, and it offers a high degree of control over the final output, making it suitable for a wide range of creative applications.

# Input types
## Required
- positive
    - The positive condition image is a key input that influences the direction and style of the interpolation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- negative
    - The negative condition image is used to restrict or guide the interpolation, steering it in the opposite direction of the positive image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- images
    - The input images to be interpolated. This parameter is crucial as it defines what will be transformed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- model
    - The model used for the interpolation process. Essential for generating coherent transitions.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- ipadapter
    - The IPA adapter is used to apply specific transformations or styles to the images during interpolation.
    - Comfy dtype: IPADAPTER
    - Python dtype: dict
- clip_vision
    - The CLIP Vision model is used to analyze and process images in a way that supports interpolation.
    - Comfy dtype: CLIP_VISION
    - Python dtype: torch.nn.Module
- type_of_frame_distribution
    - Determines the frame distribution method for interpolation, which can be linear or use dynamic values.
    - Comfy dtype: COMBO[linear, dynamic]
    - Python dtype: str
- type_of_key_frame_influence
    - Specifies whether the influence of keyframes is linear or follows a dynamic pattern.
    - Comfy dtype: COMBO[linear, dynamic]
    - Python dtype: str
- type_of_strength_distribution
    - Indicates the type of intensity distribution for interpolation, which can be linear or dynamic.
    - Comfy dtype: COMBO[linear, dynamic]
    - Python dtype: str
## Optional
- linear_frame_distribution_value
    - The value used for linear frame distribution. Only relevant when the frame distribution type is set to 'linear'.
    - Comfy dtype: INT
    - Python dtype: int
- dynamic_frame_distribution_values
    - A comma-separated string of values defining dynamic frame distribution. Required if the frame distribution type is 'dynamic'.
    - Comfy dtype: STRING
    - Python dtype: str
- linear_key_frame_influence_value
    - The value determining the linear influence of keyframes. Applicable if the keyframe influence type is 'linear'.
    - Comfy dtype: STRING
    - Python dtype: str
- dynamic_key_frame_influence_values
    - A string representing dynamic influence values for keyframes, used when the keyframe influence type is 'dynamic'.
    - Comfy dtype: STRING
    - Python dtype: str
- linear_strength_value
    - The linear intensity value used for interpolation if a linear intensity distribution is selected.
    - Comfy dtype: STRING
    - Python dtype: str
- dynamic_strength_values
    - A comma-separated string of values defining the dynamic intensity distribution of frames.
    - Comfy dtype: STRING
    - Python dtype: str
- buffer
    - The buffer value adds padding to keyframe positions, affecting the range of interpolation.
    - Comfy dtype: INT
    - Python dtype: int
- high_detail_mode
    - When enabled, high-detail mode adjusts IPA settings for more detailed and refined interpolation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- base_ipa_advanced_settings
    - Advanced settings for basic IPA application, allowing fine-tuning of the interpolation process.
    - Comfy dtype: ADVANCED_IPA_SETTINGS
    - Python dtype: dict
- detail_ipa_advanced_settings
    - Advanced settings for detailed IPA application, used when high-detail mode is active.
    - Comfy dtype: ADVANCED_IPA_SETTINGS
    - Python dtype: dict

# Output types
- GRAPH
    - The GRAPH output visualizes the weight comparisons applied during interpolation, providing insight into how different frames are affected.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- POSITIVE
    - The POSITIVE output reflects the positive conditions used in interpolation, capturing the guiding direction of the process.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- NEGATIVE
    - The NEGATIVE output represents the negative conditions, which restrict the interpolation in the desired manner.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- MODEL
    - The MODEL output is the modified model after interpolation, containing the creative transformations applied to the input images.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- KEYFRAME_POSITIONS
    - The KEYFRAME_POSITIONS output provides a sparse indexing method for interpolation, detailing the positions of keyframes.
    - Comfy dtype: SPARSE_METHOD
    - Python dtype: SparseIndexMethodImport
- BATCH_SIZE
    - The BATCH_SIZE output indicates the batch size processed during interpolation, reflecting the number of images transformed.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/banodoco/steerable-motion)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
