# Documentation
- Class name: IPAdapterUnifiedLoader
- Category: ipadapter
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The IPAdapterUnifiedLoader node is designed to simplify the loading and management of various models required for image processing tasks. It centralizes the process of loading Clip Vision, IPAdapter, LoRA, and InsightFace models, ensuring the correct models are used according to the specified preset and provider. The node's functionality focuses on providing a unified interface for model loading, reducing redundancy and improving overall system efficiency.

# Input types
## Required
- model
    - The model parameter is critical to the node's operation, as it defines the base model to be used for processing. It influences the node's execution by determining the model architecture and functionality.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- preset
    - The preset parameter is required, as it determines the specific configuration of the model to be loaded. It influences the node's execution by selecting the appropriate model preset based on the user's requirements.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- lora_strength
    - The LoRA strength parameter is optional and is used to adjust the influence of the LoRA model on the base model. It plays a role in fine-tuning model performance for specific tasks.
    - Comfy dtype: FLOAT
    - Python dtype: float
- provider
    - The provider parameter specifies the execution provider for the InsightFace model. It is important for determining the hardware acceleration method used during model execution.
    - Comfy dtype: STRING
    - Python dtype: str
- ipadapter
    - The optional ipadapter parameter allows specifying a custom IPAdapter model file. It is used when the user needs to load a specific version or configuration of the IPAdapter model.
    - Comfy dtype: IPADAPTER
    - Python dtype: Dict[str, Any]

# Output types
- model
    - The model output represents the loaded and configured base model, ready for image processing tasks. It is the culmination of the node's functionality, providing the user with a model tailored to their specified requirements.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- ipadapter
    - The ipadapter output contains the loaded IPAdapter model, a critical component for certain image processing tasks. It provides the model with additional functionality and customization options.
    - Comfy dtype: IPADAPTER
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class IPAdapterUnifiedLoader:

    def __init__(self):
        self.lora = None
        self.clipvision = {'file': None, 'model': None}
        self.ipadapter = {'file': None, 'model': None}
        self.insightface = {'provider': None, 'model': None}

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'preset': (['LIGHT - SD1.5 only (low strength)', 'STANDARD (medium strength)', 'VIT-G (medium strength)', 'PLUS (high strength)', 'PLUS FACE (portraits)', 'FULL FACE - SD1.5 only (portraits stronger)'],)}, 'optional': {'ipadapter': ('IPADAPTER',)}}
    RETURN_TYPES = ('MODEL', 'IPADAPTER')
    RETURN_NAMES = ('model', 'ipadapter')
    FUNCTION = 'load_models'
    CATEGORY = 'ipadapter'

    def load_models(self, model, preset, lora_strength=0.0, provider='CPU', ipadapter=None):
        pipeline = {'clipvision': {'file': None, 'model': None}, 'ipadapter': {'file': None, 'model': None}, 'insightface': {'provider': None, 'model': None}}
        if ipadapter is not None:
            pipeline = ipadapter
        clipvision_file = get_clipvision_file(preset)
        if clipvision_file is None:
            raise Exception('ClipVision model not found.')
        if clipvision_file != self.clipvision['file']:
            if clipvision_file != pipeline['clipvision']['file']:
                self.clipvision['file'] = clipvision_file
                self.clipvision['model'] = load_clip_vision(clipvision_file)
                print(f'\x1b[33mINFO: Clip Vision model loaded from {clipvision_file}\x1b[0m')
            else:
                self.clipvision = pipeline['clipvision']
        is_sdxl = isinstance(model.model, (comfy.model_base.SDXL, comfy.model_base.SDXLRefiner, comfy.model_base.SDXL_instructpix2pix))
        (ipadapter_file, is_insightface, lora_pattern) = get_ipadapter_file(preset, is_sdxl)
        if ipadapter_file is None:
            raise Exception('IPAdapter model not found.')
        if ipadapter_file != self.ipadapter['file']:
            if pipeline['ipadapter']['file'] != ipadapter_file:
                self.ipadapter['file'] = ipadapter_file
                self.ipadapter['model'] = ipadapter_model_loader(ipadapter_file)
                print(f'\x1b[33mINFO: IPAdapter model loaded from {ipadapter_file}\x1b[0m')
            else:
                self.ipadapter = pipeline['ipadapter']
        if lora_pattern is not None:
            lora_file = get_lora_file(lora_pattern)
            lora_model = None
            if lora_file is None:
                raise Exception('LoRA model not found.')
            if self.lora is not None:
                if lora_file == self.lora['file']:
                    lora_model = self.lora['model']
                else:
                    self.lora = None
                    torch.cuda.empty_cache()
            if lora_model is None:
                lora_model = comfy.utils.load_torch_file(lora_file, safe_load=True)
                self.lora = {'file': lora_file, 'model': lora_model}
                print(f'\x1b[33mINFO: LoRA model loaded from {lora_file}\x1b[0m')
            if lora_strength > 0:
                (model, _) = load_lora_for_models(model, None, lora_model, lora_strength, 0)
        if is_insightface:
            if provider != self.insightface['provider']:
                if pipeline['insightface']['provider'] != provider:
                    self.insightface['provider'] = provider
                    self.insightface['model'] = insightface_loader(provider)
                    print(f'\x1b[33mINFO: InsightFace model loaded with {provider} provider\x1b[0m')
                else:
                    self.insightface = pipeline['insightface']
        return (model, {'clipvision': self.clipvision, 'ipadapter': self.ipadapter, 'insightface': self.insightface})
```