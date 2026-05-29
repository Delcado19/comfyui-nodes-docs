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
```python  
class BiRefNet_Loader:  
    def __init__(self):  
        self.loaded_model = None  
        
    @classmethod  
    def INPUT_TYPES(cls):  
        return {  
            "required": {  
                "model_version": (list(MODEL_VERSIONS.keys()), {"default": "BiRefNet_HR"}),  
                "device": (["auto", "cuda", "cpu", "mps", "xpu", "meta"], {"default": "auto"})  
            }  
        }  

    RETURN_TYPES = ("BIREFNET_MODEL",)  
    RETURN_NAMES = ("model",)  
    FUNCTION = "load_model"  
    CATEGORY = "BiRefNet🌟"  

    

    def load_model(self, model_version, device):  
        device = get_device_by_name(device)  
        model_name, resolution = MODEL_VERSIONS[model_version]  
        local_model_path = get_model_path(model_name)  
        
        # 首先尝试加载本地模型  
        try:  
            if os.path.exists(local_model_path):  
                print(f"\033[92mLoading local model from: {local_model_path}\033[0m")  
                model = AutoModelForImageSegmentation.from_pretrained(  
                    local_model_path,  
                    trust_remote_code=True  
                )  
            else:  
                print(f"\033[93mLocal model not found, downloading from HuggingFace: {model_name}\033[0m")  
                model = AutoModelForImageSegmentation.from_pretrained(  
                    f"ZhengPeng7/{model_name}",  
                    trust_remote_code=True,  
                    cache_dir=local_model_path  
                )  
        except Exception as e:  
            print(f"\033[91mError loading local model: {str(e)}\033[0m")  
            print("\033[93mFallback to downloading from HuggingFace\033[0m")  
            try:  
                model = AutoModelForImageSegmentation.from_pretrained(  
                    f"ZhengPeng7/{model_name}",  
                    trust_remote_code=True,  
                    cache_dir=local_model_path  
                )  
            except Exception as download_error:  
                raise RuntimeError(f"Failed to load model both locally and from HuggingFace: {str(download_error)}")  

        model.to(device)  
        model.eval()  
        if device == "cuda":  
            model.half()  

        return ({  
            "model": model,  
            "resolution": resolution,  
            "device": device,  
            "half_precision": (device == "cuda")  
        },)  
