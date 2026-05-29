# Documentation
- Class name: HF_TransformersClassifierProvider
- Category: ImpactPack/HuggingFace
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The HF_TransformersClassifierProvider node facilitates creating and using text classifiers with models from the Hugging Face Transformers library. It abstracts model selection and device allocation complexity, letting users focus on the classification task. Its primary function is simplifying the process of obtaining a classifier ready for immediate use on a given text dataset.

# Input types
## Required
- preset_repo_id
    - The preset_repo_id parameter is essential for identifying a preconfigured model repository from the Hugging Face Model Hub. It simplifies model selection by providing a set of predefined options. This parameter plays a critical role in determining the base model the classifier will be built on, directly impacting classification performance.
    - Comfy dtype: STRING
    - Python dtype: Union[str, List[str]]
- device_mode
    - The device_mode parameter determines the compute device used for model inference. It offers options for automatic device selection with GPU preference when available, or explicit CPU selection. This parameter matters because it affects the speed and efficiency of the classification process, especially for large models or datasets.
    - Comfy dtype: STRING
    - Python dtype: Literal['AUTO', 'Prefer GPU', 'CPU']
## Optional
- manual_repo_id
    - When preset_repo_id is set to 'Manual repo id', the manual_repo_id parameter allows specifying a custom model repository ID. This provides flexibility for users who want to use models beyond the predefined options, enabling the node to adapt to a wider range of classification tasks.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- TRANSFORMERS_CLASSIFIER
    - The TRANSFORMERS_CLASSIFIER output provides a pretrained model from the Hugging Face Transformers library for text classification tasks. It encapsulates the model's inference capabilities, allowing seamless integration into downstream applications.
    - Comfy dtype: TRANSFORMERS_CLASSIFIER
    - Python dtype: Any

# Usage tips
- Infra type: GPU

# Source code
```
class HF_TransformersClassifierProvider:

    @classmethod
    def INPUT_TYPES(s):
        global hf_transformer_model_urls
        return {'required': {'preset_repo_id': (hf_transformer_model_urls + ['Manual repo id'],), 'manual_repo_id': ('STRING', {'multiline': False}), 'device_mode': (['AUTO', 'Prefer GPU', 'CPU'],)}}
    RETURN_TYPES = ('TRANSFORMERS_CLASSIFIER',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/HuggingFace'

    def doit(self, preset_repo_id, manual_repo_id, device_mode):
        from transformers import pipeline
        if preset_repo_id == 'Manual repo id':
            url = manual_repo_id
        else:
            url = preset_repo_id
        if device_mode != 'CPU':
            device = comfy.model_management.get_torch_device()
        else:
            device = 'cpu'
        classifier = pipeline(model=url, device=device)
        return (classifier,)
```