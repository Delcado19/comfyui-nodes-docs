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
```
class ApplyInstantID:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'instantid': ('INSTANTID',), 'insightface': ('FACEANALYSIS',), 'control_net': ('CONTROL_NET',), 'image': ('IMAGE',), 'model': ('MODEL',), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'weight': ('FLOAT', {'default': 0.8, 'min': 0.0, 'max': 5.0, 'step': 0.01}), 'start_at': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'end_at': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.001})}, 'optional': {'image_kps': ('IMAGE',), 'mask': ('MASK',)}}
    RETURN_TYPES = ('MODEL', 'CONDITIONING', 'CONDITIONING')
    RETURN_NAMES = ('MODEL', 'positive', 'negative')
    FUNCTION = 'apply_instantid'
    CATEGORY = 'InstantID'

    def apply_instantid(self, instantid, insightface, control_net, image, model, positive, negative, start_at, end_at, weight=0.8, ip_weight=None, cn_strength=None, noise=0.35, image_kps=None, mask=None):
        self.dtype = torch.float16 if comfy.model_management.should_use_fp16() else torch.float32
        self.device = comfy.model_management.get_torch_device()
        ip_weight = weight if ip_weight is None else ip_weight
        cn_strength = weight if cn_strength is None else cn_strength
        output_cross_attention_dim = instantid['ip_adapter']['1.to_k_ip.weight'].shape[1]
        is_sdxl = output_cross_attention_dim == 2048
        cross_attention_dim = 1280
        clip_extra_context_tokens = 16
        face_embed = extractFeatures(insightface, image)
        if face_embed is None:
            raise Exception('Reference Image: No face detected.')
        face_kps = extractFeatures(insightface, image_kps if image_kps is not None else image[0].unsqueeze(0), extract_kps=True)
        if face_kps is None:
            face_kps = torch.zeros_like(image) if image_kps is None else image_kps
            print(f'\x1b[33mWARNING: No face detected in the keypoints image!\x1b[0m')
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
        work_model = model.clone()
        sigma_start = work_model.model.model_sampling.percent_to_sigma(start_at)
        sigma_end = work_model.model.model_sampling.percent_to_sigma(end_at)
        if mask is not None:
            mask = mask.to(self.device)
        patch_kwargs = {'number': 0, 'weight': ip_weight, 'ipadapter': self.instantid, 'cond': image_prompt_embeds, 'uncond': uncond_image_prompt_embeds, 'mask': mask, 'sigma_start': sigma_start, 'sigma_end': sigma_end, 'weight_type': 'original'}
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
        if mask is not None and len(mask.shape) < 3:
            mask = mask.unsqueeze(0)
        cnets = {}
        cond_uncond = []
        is_cond = True
        for conditioning in [positive, negative]:
            c = []
            for t in conditioning:
                d = t[1].copy()
                prev_cnet = d.get('control', None)
                if prev_cnet in cnets:
                    c_net = cnets[prev_cnet]
                else:
                    c_net = control_net.copy().set_cond_hint(face_kps.movedim(-1, 1), cn_strength, (start_at, end_at))
                    c_net.set_previous_controlnet(prev_cnet)
                    cnets[prev_cnet] = c_net
                d['control'] = c_net
                d['control_apply_to_uncond'] = False
                d['cross_attn_controlnet'] = image_prompt_embeds.to(comfy.model_management.intermediate_device()) if is_cond else uncond_image_prompt_embeds.to(comfy.model_management.intermediate_device())
                if mask is not None and is_cond:
                    d['mask'] = mask
                    d['set_area_to_bounds'] = False
                n = [t[0], d]
                c.append(n)
            cond_uncond.append(c)
            is_cond = False
        return (work_model, cond_uncond[0], cond_uncond[1])
```