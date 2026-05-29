# Documentation
- Class name: ipadapterApplyEncoder
- Category: EasyUse/Adapter
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The ipadapterApplyEncoder node aims to efficiently process and adapt image data for encoding purposes within the model. It facilitates the integration of multiple image inputs and presets, applying the selected encoding method to generate embedding vectors for further analysis or model training.

# Input types
## Required
- model
    - The model parameter is crucial as it defines the core of the encoding process. It is the machine learning model that will process the input image and generate embedding vectors according to the selected preset and encoding method.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_management.Model
- image1
    - The image input is essential for the node to perform its encoding function. It provides the raw data that the model will process to extract meaningful features and generate embedding vectors.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or numpy.ndarray
- preset
    - The preset parameter influences the encoding process by determining the specific settings and parameters of the model to be used. It adjusts the node's operation according to predefined configurations to achieve the desired results.
    - Comfy dtype: COMBO
    - Python dtype: str
- num_embeds
    - The embedding count parameter is important as it determines the number of image embedding vectors to be generated. This directly affects the complexity and depth of the encoding process.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- combine_method
    - The merge method parameter decides how individual embedding vectors are aggregated. By applying operations such as concatenation, addition, or averaging, it can significantly alter the resulting embedding vectors.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- model
    - The output model is an updated version of the input model, now equipped with the processed embedding vectors. It serves as a foundation for subsequent operations or can be used as a base for downstream tasks.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_management.Model
- ipadapter
    - The ipadapter output is the encoded portion of the node's operation, encapsulating the processed embedding vectors. It is an important intermediate result that can be further analyzed or used in other parts of the system.
    - Comfy dtype: IPADAPTER
    - Python dtype: comfy_ipadapter.ipadapter.IPADAPTER
- pos_embed
    - The positive embeddings represent the encoded features of input images that align with the desired results. They play an important role in guiding the model's learning process and improving its predictions.
    - Comfy dtype: EMBEDS
    - Python dtype: List[torch.Tensor]
- neg_embed
    - The negative embeddings correspond to input images that do not meet the desired criteria. They help the model distinguish between relevant and irrelevant features, improving its ability to make accurate judgments.
    - Comfy dtype: EMBEDS
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
