# Documentation
- Class name: FaceDetailer
- Category: face_detailer
- Output node: False
- Repo Ref: https://github.com/friendlymilo/DZ-FaceDetailer.git

FaceDetailer is a node designed to enhance facial features in images using advanced machine learning models and image processing techniques. It focuses on refining facial details by applying masking and denoising operations, aiming to improve the quality and clarity of facial data.

# Input types
## Required
- model
    - The model parameter is critical for the FaceDetailer node, as it determines the machine learning architecture used for facial detail enhancement. This is essential for the node's proper function and for producing accurate facial feature enhancements.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- seed
    - The seed parameter is important for the FaceDetailer node because it introduces randomness in the facial feature enhancement process. It ensures the node can generate a variety of facial details, contributing to the diversity of the output.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter affects the number of iterations the FaceDetailer node performs during the facial enhancement process. It influences the level of detail and refinement achieved in the final output, with more steps potentially leading to higher-quality enhancements.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter is a configuration value used to adjust the intensity of the facial feature enhancement process. It plays a significant role in determining the node's output, with higher values potentially resulting in more pronounced facial details.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter is critical for the FaceDetailer node because it selects the sampling method used to generate facial details. It influences the diversity and randomness of facial features, contributing to the uniqueness of the node's output.
    - Comfy dtype: COMBO
    - Python dtype: str
- scheduler
    - The scheduler parameter is critical for the FaceDetailer node because it manages the flow of the enhancement process. It affects how the node applies facial feature enhancement over time, ensuring smooth and efficient transitions.
    - Comfy dtype: COMBO
    - Python dtype: str
- positive
    - The positive parameter serves as a guide for the FaceDetailer node to determine which facial features to enhance. It plays a key role in shaping the final output, ensuring desired features are emphasized and improved.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - The negative parameter is used by the FaceDetailer node to identify facial features that should be reduced or de-emphasized. It contributes to the overall facial detail enhancement by ensuring unwanted features are diminished.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- latent_image
    - The latent_image parameter is critical for the FaceDetailer node because it provides the initial data for facial feature enhancement. It is the foundation upon which the node builds and refines facial details, directly affecting the quality of the output.
    - Comfy dtype: LATENT
    - Python dtype: dict
- denoise
    - The denoise parameter is important for the FaceDetailer node because it controls the level of noise reduction applied during the facial enhancement process. It helps achieve clearer and more refined facial detail output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- vae
    - The vae parameter is critical for the FaceDetailer node because it represents the variational autoencoder model used to decode and generate facial images. It is a key component enabling the node to produce high-quality facial detail enhancements.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- mask_blur
    - The mask_blur parameter is important for the FaceDetailer node because it determines the degree of blur applied to the facial mask. It affects the smoothness and precision of the mask, which in turn influences the quality of facial detail enhancement.
    - Comfy dtype: INT
    - Python dtype: int
- mask_type
    - The mask_type parameter is critical for the FaceDetailer node because it specifies the type of mask used for facial feature enhancement. It directly impacts the effectiveness and accuracy of the facial detail enhancement process.
    - Comfy dtype: MASK_TYPE
    - Python dtype: str
- mask_control
    - The mask_control parameter is critical for the FaceDetailer node because it manages the manipulation of the facial mask. It influences the final appearance of the mask, which in turn affects the quality of facial feature enhancement.
    - Comfy dtype: MASK_CONTROL
    - Python dtype: str
- dilate_mask_value
    - The dilate_mask_value parameter is important for the FaceDetailer node because it defines the degree of mask dilation applied to the facial mask. It affects the size and shape of the masked facial area, which is crucial for precise facial feature enhancement.
    - Comfy dtype: INT
    - Python dtype: int
- erode_mask_value
    - The erode_mask_value parameter is important for the FaceDetailer node because it sets the degree of mask erosion applied to the facial mask. It affects the definition and boundaries of the masked facial features, contributing to the accuracy of facial detail enhancement.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent
    - The latent parameter represents the refined and enhanced facial features extracted by the FaceDetailer node. This is a critical output that encapsulates detailed facial information, ready for further use or analysis.
    - Comfy dtype: LATENT
    - Python dtype: dict
- mask
    - The mask parameter is an output of the FaceDetailer node, providing the facial mask used during the enhancement process. It is an important component for any subsequent facial feature operations or analysis.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/friendlymilo/DZ-FaceDetailer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
