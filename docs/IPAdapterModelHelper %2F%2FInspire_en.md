# Documentation
- Class name: IPAdapterModelHelper
- Category: InspirePack/models
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The IPAdapterModelHelper node is a key component in the InspirePack suite, facilitating seamless integration and application of various models and presets. It skillfully manages the complexity of model loading and ensures compatibility, enabling users to leverage the power of different models with minimal friction. This node is designed to simplify the model usage process, providing a unified interface for accessing diverse functionalities.

# Input types
## Required
- model
    - The model parameter is critical to the node's operation, as it defines the core technology model to be used. It significantly influences the node's execution and the quality of the results produced, making it a fundamental aspect of the node's functionality.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The clip parameter plays an important role in the node's functionality by providing the context needed for image processing. It is essential for the node to generate accurate and relevant outputs based on input data.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- preset
    - The preset parameter allows users to select predefined settings, tuning the node's behavior for specific use cases. It is a key element for customizing the node's operation according to user needs.
    - Comfy dtype: COMBO[list(model_preset.keys())]
    - Python dtype: str
- lora_strength_model
    - The lora_strength_model parameter adjusts the influence of the LoRA model on the node's output. It is an important tuning factor that can significantly affect the final result, allowing fine-grained control over the node's behavior.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_strength_clip
    - The lora_strength_clip parameter fine-tunes the influence of the CLIP model on the node's processing. It is a critical parameter for users who need to control the balance between the CLIP model's influence and other factors.
    - Comfy dtype: FLOAT
    - Python dtype: float
- insightface_provider
    - The insightface_provider parameter specifies the backend used for the InsightFace model, which is essential for facial recognition tasks. This is an important choice that can affect the node's performance and compatibility with the user's system.
    - Comfy dtype: COMBO[['CPU', 'CUDA', 'ROCM']]
    - Python dtype: str
- cache_mode
    - The cache_mode parameter determines the node's caching strategy, which can improve performance by reducing redundant operations. It is an important consideration for optimizing the node's efficiency.
    - Comfy dtype: COMBO[['insightface only', 'clip_vision only', 'all', 'none']]
    - Python dtype: str
- unique_id
    - The unique_id parameter is used to track and identify the node within the system, which is particularly useful for debugging and managing multiple instances of the node.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- IPADAPTER_PIPE
    - The IPADAPTER_PIPE output is a composite structure that encapsulates processed data and models, providing a comprehensive pipeline for further analysis or utilization.
    - Comfy dtype: IPADAPTER_PIPE
    - Python dtype: Tuple[torch.nn.Module, torch.Tensor, torch.Tensor, Any, Callable[[torch.nn.Module], torch.nn.Module]]
- IPADAPTER
    - The IPADAPTER output represents the loaded IPAdapter model, ready for application in subsequent image processing tasks.
    - Comfy dtype: IPADAPTER
    - Python dtype: torch.nn.Module
- CLIP_VISION
    - The CLIP_VISION output provides the loaded CLIP model, which is essential for generating contextual embeddings from images.
    - Comfy dtype: CLIP_VISION
    - Python dtype: torch.Tensor
- INSIGHTFACE
    - The INSIGHTFACE output provides the InsightFace model, which is specifically used for facial recognition and analysis within the node's operation.
    - Comfy dtype: INSIGHTFACE
    - Python dtype: Any
- MODEL
    - The MODEL output refers to the main model that has been enhanced or modified by the node, available for further processing or direct application.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
    - The CLIP output represents processed CLIP data, which can be used for various downstream tasks involving image and text interactions.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- insightface_cache_key
    - The insightface_cache_key output is a unique identifier used for caching the InsightFace model, optimizing performance when the node is reused.
    - Comfy dtype: STRING
    - Python dtype: str
- clip_vision_cache_key
    - The clip_vision_cache_key output provides a unique identifier for caching the CLIP Vision model, helping improve the node's efficiency in repeated tasks.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
```
class IPAdapterModelHelper:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'clip': ('CLIP',), 'preset': (list(model_preset.keys()),), 'lora_strength_model': ('FLOAT', {'default': 1.0, 'min': -20.0, 'max': 20.0, 'step': 0.01}), 'lora_strength_clip': ('FLOAT', {'default': 1.0, 'min': -20.0, 'max': 20.0, 'step': 0.01}), 'insightface_provider': (['CPU', 'CUDA', 'ROCM'],), 'cache_mode': (['insightface only', 'clip_vision only', 'all', 'none'], {'default': 'insightface only'})}, 'hidden': {'unique_id': 'UNIQUE_ID'}}
    RETURN_TYPES = ('IPADAPTER_PIPE', 'IPADAPTER', 'CLIP_VISION', 'INSIGHTFACE', 'MODEL', 'CLIP', 'STRING', 'STRING')
    RETURN_NAMES = ('IPADAPTER_PIPE', 'IPADAPTER', 'CLIP_VISION', 'INSIGHTFACE', 'MODEL', 'CLIP', 'insightface_cache_key', 'clip_vision_cache_key')
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/models'

    def doit(self, model, clip, preset, lora_strength_model, lora_strength_clip, insightface_provider, cache_mode='none', unique_id=None):
        if 'IPAdapterApply' not in nodes.NODE_CLASS_MAPPINGS:
            utils.try_install_custom_node('https://github.com/cubiq/ComfyUI_IPAdapter_plus', "To use 'IPAdapterModelHelper' node, 'ComfyUI IPAdapter Plus' extension is required.")
            raise Exception(f"[ERROR] To use IPAdapterModelHelper, you need to install 'ComfyUI IPAdapter Plus'")
        is_sdxl_preset = 'SDXL' in preset
        is_sdxl_model = isinstance(clip.tokenizer, sdxl_clip.SDXLTokenizer)
        if is_sdxl_preset != is_sdxl_model:
            server.PromptServer.instance.send_sync('inspire-node-output-label', {'node_id': unique_id, 'output_idx': 1, 'label': 'IPADAPTER (fail)'})
            server.PromptServer.instance.send_sync('inspire-node-output-label', {'node_id': unique_id, 'output_idx': 2, 'label': 'CLIP_VISION (fail)'})
            server.PromptServer.instance.send_sync('inspire-node-output-label', {'node_id': unique_id, 'output_idx': 3, 'label': 'INSIGHTFACE (fail)'})
            server.PromptServer.instance.send_sync('inspire-node-output-label', {'node_id': unique_id, 'output_idx': 4, 'label': 'MODEL (fail)'})
            server.PromptServer.instance.send_sync('inspire-node-output-label', {'node_id': unique_id, 'output_idx': 5, 'label': 'CLIP (fail)'})
            print(f'[ERROR] IPAdapterModelHelper: You cannot mix SDXL and SD1.5 in the checkpoint and IPAdapter.')
            raise Exception('[ERROR] You cannot mix SDXL and SD1.5 in the checkpoint and IPAdapter.')
        (ipadapter, clipvision, lora, is_insightface) = model_preset[preset]
        (ipadapter, ok1) = lookup_model('ipadapter', ipadapter)
        (clipvision, ok2) = lookup_model('clip_vision', clipvision)
        (lora, ok3) = lookup_model('loras', lora)
        if ok1 == 'OK':
            ok1 = 'IPADAPTER'
        else:
            ok1 = f'IPADAPTER ({ok1})'
        if ok2 == 'OK':
            ok2 = 'CLIP_VISION'
        else:
            ok2 = f'CLIP_VISION ({ok2})'
        server.PromptServer.instance.send_sync('inspire-node-output-label', {'node_id': unique_id, 'output_idx': 1, 'label': ok1})
        server.PromptServer.instance.send_sync('inspire-node-output-label', {'node_id': unique_id, 'output_idx': 2, 'label': ok2})
        if ok3 == 'FAIL':
            server.PromptServer.instance.send_sync('inspire-node-output-label', {'node_id': unique_id, 'output_idx': 4, 'label': 'MODEL (fail)'})
            server.PromptServer.instance.send_sync('inspire-node-output-label', {'node_id': unique_id, 'output_idx': 5, 'label': 'CLIP (fail)'})
        else:
            server.PromptServer.instance.send_sync('inspire-node-output-label', {'node_id': unique_id, 'output_idx': 4, 'label': 'MODEL'})
            server.PromptServer.instance.send_sync('inspire-node-output-label', {'node_id': unique_id, 'output_idx': 5, 'label': 'CLIP'})
        if ok1 == 'FAIL' or ok2 == 'FAIL' or ok3 == 'FAIL':
            raise Exception('ERROR: Failed to load several models in IPAdapterModelHelper.')
        if ipadapter is not None:
            ipadapter = nodes.NODE_CLASS_MAPPINGS['IPAdapterModelLoader']().load_ipadapter_model(ipadapter_file=ipadapter)[0]
        ccache_key = ''
        if clipvision is not None:
            if cache_mode in ['clip_vision only', 'all']:
                ccache_key = clipvision
                if ccache_key not in backend_support.cache:
                    backend_support.cache[ccache_key] = (False, nodes.CLIPVisionLoader().load_clip(clip_name=clipvision)[0])
                clipvision = backend_support.cache[ccache_key][1]
            else:
                clipvision = nodes.CLIPVisionLoader().load_clip(clip_name=clipvision)[0]
        if lora is not None:
            (model, clip) = nodes.LoraLoader().load_lora(model=model, clip=clip, lora_name=lora, strength_model=lora_strength_model, strength_clip=lora_strength_clip)

            def f(x):
                return nodes.LoraLoader().load_lora(model=x, clip=clip, lora_name=lora, strength_model=lora_strength_model, strength_clip=lora_strength_clip)
            lora_loader = f
        else:

            def f(x):
                return x
            lora_loader = f
        icache_key = ''
        if is_insightface:
            if cache_mode in ['insightface only', 'all']:
                icache_key = 'insightface-' + insightface_provider
                if icache_key not in backend_support.cache:
                    backend_support.cache[icache_key] = (False, nodes.NODE_CLASS_MAPPINGS['InsightFaceLoader']().load_insight_face(insightface_provider)[0])
                insightface = backend_support.cache[icache_key][1]
            else:
                insightface = nodes.NODE_CLASS_MAPPINGS['InsightFaceLoader']().load_insight_face(insightface_provider)[0]
            server.PromptServer.instance.send_sync('inspire-node-output-label', {'node_id': unique_id, 'output_idx': 3, 'label': 'INSIGHTFACE'})
        else:
            insightface = None
            server.PromptServer.instance.send_sync('inspire-node-output-label', {'node_id': unique_id, 'output_idx': 3, 'label': 'INSIGHTFACE (N/A)'})
        pipe = (ipadapter, model, clipvision, insightface, lora_loader)
        return (pipe, ipadapter, clipvision, insightface, model, clip, icache_key, ccache_key)
```