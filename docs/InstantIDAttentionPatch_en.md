# Documentation
- Class name: InstantIDAttentionPatch
- Category: InstantID
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_InstantID.git

InstantIDAttentionPatch is a class designed to enhance the attention mechanism in neural network models, specifically tailored for image processing tasks. It integrates with the InstantID model to improve the model's ability to focus on relevant features in images, thereby enhancing the quality of output embeddings. This node abstracts the complexity of attention patching and emphasizes the overall enhancement of the model's feature detection and representation capabilities.

# Input types
## Required
- instantid
    - The instantid parameter is critical because it provides the foundational model architecture required for attention patch operations. It serves as the basis for applying attention mechanisms and feature enhancement, directly affecting the node's effectiveness in refining model outputs.
    - Comfy dtype: INSTANTID
    - Python dtype: dict
- insightface
    - The insightface parameter is essential to the node because it provides the facial analysis component, which is critical for image data processing. It enables the node to accurately detect and analyze facial features, a key aspect of image processing tasks.
    - Comfy dtype: FACEANALYSIS
    - Python dtype: object
- image
    - The image parameter is essential to the node's operation because it introduces the raw image data to be processed. The quality and resolution of the image directly affect the node's ability to extract and leverage relevant features, thereby influencing the overall performance of image processing tasks.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- model
    - The model parameter is the neural network model that the node will enhance by applying attention patches. It is a critical component because it determines the foundation upon which the node builds its feature enhancement and attention mechanisms.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- weight
    - The weight parameter is a floating-point value used to adjust the influence of the attention patch on the model output. It is important because it allows fine-tuning of the model's focus on specific features, directly affecting the quality and relevance of extracted features.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_at
    - The start_at parameter defines the initial point at which the attention patch begins to exert its influence. It is important because it sets the starting conditions for the feature enhancement process, affecting how the model initially focuses on the input image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - The end_at parameter specifies the final point at which the attention patch ceases its influence. It is important because it determines the ending conditions for feature enhancement, affecting the model's sustained focus on the input image.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- noise
    - The noise parameter introduces a degree of randomness into the attention patch operation, which helps diversify the model's feature extraction. It enhances the model's robustness and creativity by introducing variability in feature representation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask
    - When the mask parameter is provided, it allows selective application of the attention patch to specific regions of the image. It influences the node's operation by determining which image regions are prioritized or ignored during the feature enhancement process.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- model
    - The output model is the enhanced neural network after applying the attention patch. It represents the result of the node's efforts to refine and focus the model's feature extraction capabilities, providing a more accurate and detailed representation of the input image.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- FACE_EMBEDS
    - The FACE_EMBEDS output consists of facial embeddings extracted from the input image, enhanced through the attention patch. These embeddings capture essential characteristics of facial data, providing a rich and detailed representation that can be used for further analysis or comparison.
    - Comfy dtype: FACE_EMBEDS
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_InstantID)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
