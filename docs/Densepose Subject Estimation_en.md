# Documentation
- Class name: DenseposeSubjectEstimation
- Category: util
- Output node: False
- Repo Ref: https://github.com/esheep/esheep_custom_nodes.git

The DenseposeSubjectEstimation node aims to process and analyze poses in input images, selecting the most relevant poses based on specified criteria through a series of filters. It contributes to advanced pose estimation tasks by refining input data into a more focused set of poses that meet the required subject and physique requirements.

# Input types
## Required
- openpose_image
    - The openpose_image parameter is critical as it serves as the visual input for pose detection. It is the foundation for the node's analysis, determining the presence and visibility of body parts, which subsequently influences pose selection.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- subject
    - The parameter defines specific subject criteria used to filter poses. It plays a key role in narrowing down poses relevant to the subject of interest, thereby enhancing the node's ability to provide targeted results.
    - Comfy dtype: STRING
    - Python dtype: str
- densepose_select_every_nth
    - The densepose_select_every_nth parameter is an optional integer that determines the frequency of selecting poses from the filtered set. It provides a mechanism to control output pose density, allowing a balance between detail and computational efficiency.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- DENSEPOSE
    - The DENSEPOSE output represents the final selected poses in the input image after refinement through a series of subject and physique-based filters. It marks the culmination of the node's analysis and is the primary output for further use or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- DENSEPOSE_NAME
    - The DENSEPOSE_NAME output provides identifiers or names for the selected poses, offering a text reference that can be used for documentation, labeling, or additional processing outside the node's primary functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/esheep/esheep_custom_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
