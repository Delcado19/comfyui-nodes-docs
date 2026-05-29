# Documentation
- Class name: ApplyInstantIDAdvanced
- Category: ImageProcessing
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_InstantID.git

ApplyInstantIDAdvanced node uses a control network and modulation inputs to apply advanced image processing techniques, enhancing facial recognition capability.

# Input types
## Required
- instantid
- InstantID is essential for identifying and tracking individuals in image data, serving as the unique identifier for node processing.
    - Comfy dtype: INSTANTID
    - Python dtype: str
- insightface
- InsightFace provides the analytical framework needed for facial feature extraction and recognition, which is critical to the node's function.
    - Comfy dtype: FACEANALYSIS
    - Python dtype: str
- control_net
- The control network is crucial for guiding the node's facial analysis, ensuring accurate and efficient processing of facial features.
    - Comfy dtype: CONTROL_NET
    - Python dtype: str
- image
- Image input is vital to the node's operation, supplying visual data for facial recognition and enhancement.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- model
- Model parameters are essential for the node to apply advanced facial recognition algorithms and improve result accuracy.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
- Positive modulation input is key to refining the facial recognition process, ensuring the node outputs accurate and relevant results.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
- Negative modulation input helps filter out irrelevant or incorrect facial features, boosting the node's ability to produce precise results.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
## Optional
- ip_weight
- IP weight parameters affect the emphasis on InstantID during facial recognition, influencing overall accuracy and relevance of results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cn_strength
- Control net strength parameter adjusts the control net's impact on facial analysis, affecting the precision and effectiveness of node operation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_at
- start_at parameter defines the beginning of the facial feature analysis range, important for focusing the node's processing on specific image regions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
- end_at parameter specifies the end of the facial feature analysis range, ensuring the node's processing is limited to relevant parts of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise
- Noise parameter introduces controlled randomness into the facial recognition process, helping improve the robustness of node results.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output_image
- Output image is the result of the node's operation, showing enhanced facial features and improved recognition capability.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- output_results
- Output results include detailed information about the facial recognition process, including identified features and their corresponding confidence scores.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_InstantID)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
