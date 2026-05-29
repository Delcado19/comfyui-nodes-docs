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
```
class InstantIDAttentionPatch:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'instantid': ('INSTANTID',), 'insightface': ('FACEANALYSIS',), 'image': ('IMAGE',), 'model': ('MODEL',), 'weight': ('FLOAT', {'default': 1.0, 'min': -1.0, 'max': 3.0, 'step': 0.01}), 'start_at': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'end_at': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'noise': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.1})}, 'optional': {'mask': ('MASK',)}}
    RETURN_TYPES = ('MODEL', 'FACE_EMBEDS')
    FUNCTION = 'patch_attention'
    CATEGORY = 'InstantID'

    def patch_attention(self, instantid, insightface, image, model, weight, start_at, end_at, noise=0.0, mask=None):
        self.dtype = torch.float16 if comfy.model_management.should_use_fp16() else torch.float32
        self.device = comfy.model_management.get_torch_device()
        output_cross_attention_dim = instantid['ip_adapter']['1.to_k_ip.weight'].shape[1]
        is_sdxl = output_cross_attention_dim == 2048
        cross_attention_dim = 1280
        clip_extra_context_tokens = 16
        face_embed = extractFeatures(insightface, image)
        if face_embed is None:
            raise Exception('Reference Image: No face detected.')
        clip_embed = face_embed
        if clip_embed.shape[0] > 1:
            clip_embed = torch.mean(clip_embed, dim=0).unsqueeze(0)
        if noise > 0:
            seed = int(torch.sum(clip_embed).item()) % 1000000007
            torch.manual_seed(seed)
            clip_embed_zeroed = noise * torch.rand_like(clip_embed)
        else:
            clip_embed_zeroed = torch.zeros_like(clip_embed)
        clip_embeddings_dim = face_embed.shape[-1]
        self.instantid = InstantID(instantid, cross_attention_dim=cross_attention_dim, output_cross_attention_dim=output_cross_attention_dim, clip_embeddings_dim=clip_embeddings_dim, clip_extra_context_tokens=clip_extra_context_tokens)
        self.instantid.to(self.device, dtype=self.dtype)
        (image_prompt_embeds, uncond_image_prompt_embeds) = self.instantid.get_image_embeds(clip_embed.to(self.device, dtype=self.dtype), clip_embed_zeroed.to(self.device, dtype=self.dtype))
        image_prompt_embeds = image_prompt_embeds.to(self.device, dtype=self.dtype)
        uncond_image_prompt_embeds = uncond_image_prompt_embeds.to(self.device, dtype=self.dtype)
        if weight == 0:
            return (model, {'cond': image_prompt_embeds, 'uncond': uncond_image_prompt_embeds})
        work_model = model.clone()
        sigma_start = work_model.model.model_sampling.percent_to_sigma(start_at)
        sigma_end = work_model.model.model_sampling.percent_to_sigma(end_at)
        if mask is not None:
            mask = mask.to(self.device)
        patch_kwargs = {'number': 0, 'weight': weight, 'ipadapter': self.instantid, 'cond': image_prompt_embeds, 'uncond': uncond_image_prompt_embeds, 'mask': mask, 'sigma_start': sigma_start, 'sigma_end': sigma_end, 'weight_type': 'original'}
        if not is_sdxl:
            for id in [1, 2, 4, 5, 7, 8]:
                _set_model_patch_replace(work_model, patch_kwargs, ('input', id))
                patch_kwargs['number'] += 1
            for id in [3, 4, 5, 6, 7, 8, 9, 10, 11]:
                _set_model_patch_replace(work_model, patch_kwargs, ('output', id))
                patch_kwargs['number'] += 1
            _set_model_patch_replace(work_model, patch_kwargs, ('middle', 0))
        else:
            for id in [4, 5, 7, 8]:
                block_indices = range(2) if id in [4, 5] else range(10)
                for index in block_indices:
                    _set_model_patch_replace(work_model, patch_kwargs, ('input', id, index))
                    patch_kwargs['number'] += 1
            for id in range(6):
                block_indices = range(2) if id in [3, 4, 5] else range(10)
                for index in block_indices:
                    _set_model_patch_replace(work_model, patch_kwargs, ('output', id, index))
                    patch_kwargs['number'] += 1
            for index in range(10):
                _set_model_patch_replace(work_model, patch_kwargs, ('middle', 0, index))
                patch_kwargs['number'] += 1
        return (work_model, {'cond': image_prompt_embeds, 'uncond': uncond_image_prompt_embeds})
```