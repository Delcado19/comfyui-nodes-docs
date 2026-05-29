# Documentation
- Class name: LayerMask: SegformerB2ClothesUltra
- Display name: LayerMask: Segformer B2 Clothes Ultra
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Generates a masked image isolating specific clothing and accessory regions on a person using the Segformer B2 Clothes segmentation model. Outputs both the segmented image and the corresponding mask for the selected body parts and garment categories.

# Input types
## Required
- image
    - Source image to segment clothing and body-part regions from.
    - Comfy dtype: IMAGE
- face
    - Whether to include the face region in the segmentation mask.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- hair
    - Whether to include hair in the segmentation mask.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- hat
    - Whether to include hats in the segmentation mask.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- sunglass
    - Whether to include sunglasses in the segmentation mask.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- left_arm
    - Whether to include the left arm in the segmentation mask.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- right_arm
    - Whether to include the right arm in the segmentation mask.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- left_leg
    - Whether to include the left leg in the segmentation mask.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- right_leg
    - Whether to include the right leg in the segmentation mask.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- upper_clothes
    - Whether to include upper-body clothing in the segmentation mask.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- skirt
    - Whether to include skirts in the segmentation mask.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- pants
    - Whether to include pants in the segmentation mask.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- dress
    - Whether to include dresses in the segmentation mask.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- belt
    - Whether to include belts in the segmentation mask.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- shoe
    - Whether to include shoes in the segmentation mask.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- bag
    - Whether to include bags in the segmentation mask.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- scarf
    - Whether to include scarves in the segmentation mask.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- detail_method
    - Method used for refining mask edge details.
    - Comfy dtype: COMBO
    - Options: `VITMatte`, `VITMatte(local)`, `vitmatte-base-composition-1k`, `PyMatting`, `GuidedFilter`
- detail_erode
    - Erosion kernel size applied to refine mask edges.
    - Comfy dtype: INT
    - Default: `12`
- detail_dilate
    - Dilation kernel size applied to refine mask edges.
    - Comfy dtype: INT
    - Default: `6`
- black_point
    - Lower threshold for mask binarization.
    - Comfy dtype: FLOAT
    - Default: `0.15`
- white_point
    - Upper threshold for mask binarization.
    - Comfy dtype: FLOAT
    - Default: `0.99`
- process_detail
    - Whether to apply detail refinement to the output mask.
    - Comfy dtype: BOOLEAN
    - Default: `true`
- device
    - Computation device used for inference.
    - Comfy dtype: COMBO
    - Options: `cuda`, `cpu`
- max_megapixels
    - Maximum image resolution in megapixels before downscaling.
    - Comfy dtype: FLOAT
    - Default: `2`

# Output types
- image
    - Input image cropped or filtered to the selected segmentation regions.
    - Comfy dtype: IMAGE
- mask
    - Binary mask of the selected clothing and body-part categories.
    - Comfy dtype: MASK

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
