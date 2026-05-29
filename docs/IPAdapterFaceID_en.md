# Documentation
- Class name: IPAdapterFaceID
- Category: ipadapter/faceid
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The IPAdapterFaceID node is designed to integrate and process facial recognition data in the imaging pipeline. It utilizes advanced models to improve the accuracy of facial recognition tasks, ensuring that the system can reliably identify individuals from images.

# Input types
## Required
- model
    - The model parameter is crucial for the node's operation as it defines the machine learning model used for facial recognition. It is the backbone of the facial recognition process, enabling the node to analyze and process facial features.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- ipadapter
    - The ipadapter parameter is required because it provides the node with the necessary interface to communicate with other components in the system, facilitating the exchange of facial recognition data.
    - Comfy dtype: IPADAPTER
    - Python dtype: str
- image
    - The image input is essential for the node's functionality, providing the visual data for the facial recognition model to analyze. It is the raw material that the node processes to extract facial features for recognition.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- weight
    - The weight parameter allows adjusting the influence of facial recognition results on the overall outcome. It is a tuning factor that can be modified to achieve a balance between accuracy and performance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_faceidv2
    - The weight_faceidv2 parameter is used to fine-tune the contribution of the FaceID version 2 model in the facial recognition process. It allows customization of the model's impact on the final recognition result.
    - Comfy dtype: FLOAT
    - Python dtype: float
- combine_embeds
    - The combine_embeds parameter determines how different embeddings are combined in the facial recognition process. It is a key factor in fusing facial feature data to enhance recognition capabilities.
    - Comfy dtype: COMBO[concat, add, subtract, average, norm average]
    - Python dtype: str
- start_at
    - The start_at parameter specifies the starting point of the facial feature extraction process. It is used to control the segment of the image used for facial recognition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - The end_at parameter marks the end point of the facial feature extraction process. Together with start_at, it defines the image range used for analysis.
    - Comfy dtype: FLOAT
    - Python dtype: float
- embeds_scaling
    - The embeds_scaling parameter is responsible for scaling the embeddings used in facial recognition. It adjusts the size of the feature vectors to optimize the recognition process.
    - Comfy dtype: COMBO[V only, K+V, K+V w/ C penalty, K+mean(V) w/ C penalty]
    - Python dtype: str

# Output types
- face_id_output
    - The face_id_output provides the final facial recognition result after processing the input image through the model. It is the culmination of the node's analysis, representing the outcome of the recognition task.
    - Comfy dtype: OUTPUT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
