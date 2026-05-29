# Documentation
- Class name: FaceRestoreCFWithModel
- Category: facerestore_cf
- Output node: False
- Repo Ref: https://github.com/mav-rik/facerestore_cf

This node aims to enhance and restore facial image quality using advanced deep learning models. It processes input images through face detection, alignment, and restoration techniques to improve overall clarity and detail. The primary goal is to generate high-quality facial images suitable for various applications such as photo enhancement, authentication, and social media sharing.

# Input types
## Required
- facerestore_model
    - Specifies the deep learning model used for face restoration. It is critical to the node's operation, as it determines the capabilities of the specific model and the quality of the restoration output.
    - Comfy dtype: string
    - Python dtype: str
- image
    - The input image to which the face restoration process will be applied. It is the primary data input that directly affects the output quality and restoration effectiveness.
    - Comfy dtype: image
    - Python dtype: PIL.Image or numpy.ndarray
- facedetection
    - Selects the face detection model used to identify and locate faces in the input image. The choice of model affects the accuracy and reliability of face detection, which in turn impacts the subsequent restoration process.
    - Comfy dtype: combo
    - Python dtype: str
## Optional
- codeformer_fidelity
    - Adjusts the fidelity of the restoration process, where higher values indicate closer adherence to original image details. This parameter allows fine-tuning the balance between quality and computational efficiency.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- image
    - The output is the restored face image processed to improve its quality and clarity. It is the primary result of the node's operation, representing the final outcome of the restoration process.
    - Comfy dtype: image
    - Python dtype: PIL.Image or numpy.ndarray

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/mav-rik/facerestore_cf)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
