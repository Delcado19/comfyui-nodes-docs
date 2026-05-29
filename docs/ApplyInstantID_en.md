# Documentation
- Class name: ApplyInstantID
- Category: InstantID
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_InstantID.git

The ApplyInstantID node aims to integrate facial recognition and image processing functions, utilizing advanced machine learning models to improve the quality and relevance of the input image. It applies a series of transformations to the input image and conditions the model based on specific facial features, ultimately improving the accuracy and details of the output.

# Input types
## Required
- instantid
    - The instantid parameter is crucial for the operation of the node, as it provides the necessary facial recognition data and model structure required for processing. Without it, the node cannot perform its intended facial analysis and enhancement tasks.
    - Comfy dtype: INSTANTID
    - Python dtype: Dict[str, Any]
- insightface
    - The insightface parameter is essential for the node, as it contains the facial analysis model used to extract and process facial features from the input image. This parameter directly affects the accuracy and quality of facial feature detection.
    - Comfy dtype: FACEANALYSIS
    - Python dtype: Any
- control_net
    - The control_net parameter is a key component of the node, allowing it to manage and adjust the conditioning process applied to the model. It helps fine-tune the output to meet specific requirements and improve the overall performance of facial feature enhancement.
    - Comfy dtype: CONTROL_NET
    - Python dtype: Any
- image
    - The image parameter is fundamental to the node's functionality, serving as the input for facial feature extraction and enhancement. The quality and resolution of the image directly affect the effectiveness of facial recognition and the final output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or numpy.ndarray
- model
    - The model parameter is the core of the node's operation, providing the underlying machine learning model for performing facial feature analysis and enhancement. The choice and quality of the model significantly affect the node's performance and output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
    - The positive parameter plays a crucial role in the node's operation by providing positive conditioning data to guide the enhancement process. It helps refine facial features and ensures the output aligns with desired characteristics.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]
- negative
    - The negative parameter is equally important as the positive parameter, providing negative conditioning data to help the node avoid unwanted features in the output. It contributes to the precision of the facial feature enhancement process.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]
## Optional
- weight
    - The weight parameter affects the conditioning strength applied to the model, influencing the prominence of desired features in the final output. It provides a way to control the balance between input conditioning and the model's inherent capabilities.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_at
    - The start_at parameter defines the starting point of the conditioning process, determining when the facial feature enhancement begins. It is crucial for controlling the timing and sequence of feature enhancement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - The end_at parameter sets the end point of the conditioning process, determining when the facial feature enhancement ends. It works together with start_at to ensure a controlled and precise interval for facial feature enhancement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- image_kps
    - The image_kps parameter provides keypoint data of facial features, used to guide the model in accurately locating and enhancing specific facial elements. It helps improve the precision and accuracy of facial feature enhancement.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or numpy.ndarray
- mask
    - The mask parameter is used to apply specific limitations or focused areas to the facial feature enhancement process. It allows targeted adjustments and improvements, ensuring that enhancement is only applied to the desired regions of the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- MODEL
    - The output model is an enhanced machine learning model that has been conditioned with input data to improve the accuracy and quality of facial feature extraction. It represents the result of the node's processing, ready for further use or analysis.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
    - The positive output represents the successfully enhanced and conditioned positive facial features, which can serve as a reference or input for subsequent processes. It is a key part of the node's output, indicating that facial feature enhancement has been successfully applied.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]
- negative
    - The negative output includes the adjusted conditioned negative facial features to prevent unwanted features from appearing in the final output. It reflects the node's ability to refine and control the output to meet specific requirements.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_InstantID)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
