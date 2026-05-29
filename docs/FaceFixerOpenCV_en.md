# Documentation
- Class name: FaceFixerOpenCV
- Category: Mikey/Utils
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The FaceFixerOpenCV node aims to enhance and correct facial features in images using a series of face detection and image processing techniques. It utilizes OpenCV for face detection and applies advanced algorithms to refine and blend faces, ensuring that the corrected faces integrate seamlessly into the original image.

# Input types
## Required
- image
    - Input image is the object on which face correction operations will be performed. It serves as the foundation for all subsequent processing and analysis within the node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- base_model
    - Base model is used for feature extraction and processing within the node. It plays a critical role in determining the quality and accuracy of facial feature enhancement.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- vae
    - Variational Autoencoder (VAE) is used for encoding and decoding facial features. It is essential in the feature transformation and reconstruction processes within the node.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- positive_cond_base
    - Positive conditioning base, used to guide the facial feature enhancement process toward the desired outcome.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative_cond_base
    - Negative conditioning base, used to suppress certain facial features or characteristics during the enhancement process.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
## Optional
- seed
    - Random seed for random elements in the facial feature enhancement process. It ensures reproducibility of results.
    - Comfy dtype: INT
    - Python dtype: int
- face_img_resolution
    - Resolution for processing facial images. It affects the level of detail and computational load.
    - Comfy dtype: INT
    - Python dtype: int
- padding
    - Amount of padding applied to detected faces before processing. It helps preserve facial details at the edges.
    - Comfy dtype: INT
    - Python dtype: int
- scale_factor
    - Scaling factor used during face detection to adjust the size of the detection window.
    - Comfy dtype: FLOAT
    - Python dtype: float
- min_neighbors
    - Minimum number of neighbors required to retain a detected face. This is a parameter of the face detection algorithm.
    - Comfy dtype: INT
    - Python dtype: int
- denoise
    - Denoising level applied to reconstructed facial features. It balances detail preservation and noise reduction.
    - Comfy dtype: FLOAT
    - Python dtype: float
- classifier
    - Classifier type used for face detection. It determines the algorithm and model applied to detect faces in the image.
    - Comfy dtype: STRING
    - Python dtype: str
- sampler_name
    - Sampler name used during VAE decoding. It affects the randomness and diversity of generated samples.
    - Comfy dtype: STRING
    - Python dtype: str
- scheduler
    - Scheduler used to control sampling progress during VAE decoding. It affects the interpolation and progression of sampling steps.
    - Comfy dtype: STRING
    - Python dtype: str
- cfg
    - Configuration parameters during the VAE sampling process. It fine-tunes the behavior of the sampling algorithm.
    - Comfy dtype: FLOAT
    - Python dtype: float
- steps
    - Number of steps in the VAE sampling process. It determines the duration and thoroughness of sampling.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Output image with enhanced and corrected facial features. It is the result of node processing, representing the final state of the input image after facial enhancement.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
