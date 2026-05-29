# Documentation
- Class name: FaceEmbedDistance
- Category: FaceAnalysis
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_FaceAnalysis.git

The FaceEmbedDistance node aims to analyze and compare facial features using Euclidean and cosine distance metrics. It processes input images and reference images to determine similarity, facilitating facial recognition and verification. The main goal of this node is to enhance facial recognition tasks by providing a comprehensive analysis of facial embeddings.

# Input types
## Required
- analysis_models
    - This parameter contains the models required for face detection and embedding extraction, and is essential for the node to perform facial analysis functions.
    - Comfy dtype: DICTIONARY
    - Python dtype: Dict[str, Any]
- reference
    - Reference images are crucial for comparison with input images. They serve as a baseline for calculating distances and identifying matches, significantly impacting the node's ability to analyze facial similarity.
    - Comfy dtype: LIST
    - Python dtype: List[PIL.Image.Image]
- image
    - These are the images to be analyzed and compared with the reference images. The quality and relevance of these images directly affect the node's output and its effectiveness in facial recognition.
    - Comfy dtype: LIST
    - Python dtype: List[PIL.Image.Image]
## Optional
- filter_thresh_eucl
    - The Euclidean distance threshold is used to filter out images that are too dissimilar. It plays a key role in controlling the strictness of the facial similarity assessment.
    - Comfy dtype: FLOAT
    - Python dtype: float
- filter_thresh_cos
    - The cosine distance threshold is used together with the Euclidean threshold to refine the facial similarity assessment, focusing on the directionality of facial embeddings rather than just their magnitude.
    - Comfy dtype: FLOAT
    - Python dtype: float
- generate_image_overlay
    - When this option is enabled, it generates an overlay on the input image showing the distance metrics, thus providing a visual representation of the facial analysis results.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- IMAGE
    - The output images, which may include overlays, represent the analyzed input images. They are essential for visual verification and further analysis.
    - Comfy dtype: LIST
    - Python dtype: List[PIL.Image.Image]
- euclidean
    - This output provides Euclidean distance values, quantifying the degree of difference between the reference image and input images, aiding in the assessment of facial similarity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cosine
    - The cosine distance values provide a measure of directional differences between facial embeddings, complementing the Euclidean distance for a more nuanced facial similarity assessment.
    - Comfy dtype: FLOAT
    - Python dtype: float
- csv
    - The CSV output contains structured records of facial analysis, including distance metrics, which can be used for further statistical analysis and reporting.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_FaceAnalysis)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
