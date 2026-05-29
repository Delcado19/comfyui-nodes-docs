# Documentation  
- Class name: BiRefNet_Loader  
- Category: BiRefNet🌟  
- Output node: False  
- Repo Ref: https://github.com/moon7star9/ComfyUI_BiRefNet_Universal

The BiRefNet_Loader node is used to load the BiRefNet model, a deep learning model specifically designed for image segmentation and background removal. This node supports multiple pre-trained model versions, allowing users to choose the appropriate model for different use cases. The node automatically handles model downloading and loading, supports local caching, and all downloaded models are stored in the models/BiRefNet folder.

# Input types  
## Required  
- model_version  
    - The 'model_version' parameter allows users to select the BiRefNet model version to load. Different versions are optimized for different use cases and resolutions, including standard versions, high-resolution versions, lightweight versions, etc., with names corresponding to the model repositories on Hugging Face. Selection advice: Models with HR in the name perform inference at 2048x2048 resolution, resulting in higher edge clarity. For general matting, BiRefNet_HR is preferred for high-definition results, while BiRefNet may perform better for subject detection. Models with 'lite' in the name are lightweight versions, with the lite 2K model being more suitable for matting 2K landscape images. If the input image is small and the general model performs poorly, try the 512x512 model. Models with 'matting' in the name are better suited for matting transparent objects, veils, nets, hair, etc. Models with 'portrait' in the name are better for portrait matting. If subject localization results are poor, consider choosing models starting from DIS5K, as these models are named after their training datasets and tend toward binary matting, resulting in less smooth edge transitions. You can subsequently apply algorithms like vitmatte for further processing.
    - Comfy dtype: COMBO  
    - Python dtype: str  
- device  
    - The 'device' parameter specifies the hardware device on which the model runs. It can be set to 'auto' to let the system automatically select the most suitable device, or manually specify a particular device (such as 'cuda', 'cpu', 'mps', etc.).
    - Comfy dtype: COMBO  
    - Python dtype: str  

# Output types  
- BIREFNET_MODEL  
    - Outputs the loaded BiRefNet model instance, including the model itself, resolution settings, device information, and precision configuration. This output can be directly connected to the BiRefNet_Remove_Background node for use.
    - Comfy dtype: BIREFNET_MODEL  
    - Python dtype: dict  

# Usage tips  
- Infra type: GPU/CPU  
- On first use, model files are automatically downloaded and cached locally.
- It is recommended to use a GPU for better performance.
- When 'auto' device is selected, the node automatically detects and uses the best available hardware.
- On CUDA devices, half-precision (FP16) is automatically used to optimize performance and memory usage.

# Source code
[View source repository on GitHub](https://github.com/moon7star9/ComfyUI_BiRefNet_Universal)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
