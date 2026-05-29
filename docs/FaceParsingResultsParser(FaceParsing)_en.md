# Documentation
- Class name: FaceParsingResultsParser
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

This node class encapsulates the logic for parsing and interpreting facial parsing results, capable of extracting various facial attributes from input data. It is a core component in the facial analysis task pipeline, focusing on the segmentation and recognition of different facial features.

# Input types
## Required
- result
    - The result parameter is critical as it contains the raw facial parsing data that the node will process. It is the primary input that determines the accuracy of subsequent operations and facial feature extraction.
    - Comfy dtype: FACE_PARSING_RESULT
    - Python dtype: torch.Tensor
## Optional
- background
    - This parameter controls whether background segmentation is considered during parsing. Including or excluding the background can significantly affect the overall composition of the facial mask and the clarity of facial features.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- skin
    - The skin parameter is essential for identifying skin regions in facial areas. It plays a crucial role in isolating skin for further analysis or processing, such as skin condition assessment.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- nose
    - By enabling or disabling the nose parameter, the node can focus on the nasal region, which is important for feature-based facial recognition or beauty effects.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- eye_g
    - The eye_g parameter is used to include or exclude the general eye region, which is important for tasks like gaze tracking or glasses recommendation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- r_eye
    - The r_eye parameter allows specific inclusion or exclusion of the right eye, which is crucial for detailed facial expression analysis or asymmetry detection.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- l_eye
    - Similarly, the l_eye parameter is used to specifically include or exclude the left eye, playing a similar role to the right eye parameter in facial analysis.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- r_brow
    - The r_brow parameter is used for the right eyebrow region, which is important for understanding facial expressions and emotion analysis.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- l_brow
    - The l_brow parameter corresponds to the left eyebrow region, playing a similar role to the right eyebrow in conveying facial expressions and emotions.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- r_ear
    - The r_ear parameter is used for the right ear region, which may be important for some audio-visual applications or hearing aid integration.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- l_ear
    - The l_ear parameter corresponds to the left ear region, playing a similar role to the right ear in audio-visual applications.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mouth
    - The mouth parameter is essential for identifying the mouth region, which is important for tasks like lip reading or speech recognition.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- u_lip
    - The u_lip parameter focuses on the upper lip region, which is important for detailed facial expression analysis and beauty-related applications.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- l_lip
    - The l_lip parameter is used for the lower lip region, playing a similar role to the upper lip in facial expression analysis.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- hair
    - The hair parameter is used to include or exclude the hair region, which may be important for style analysis or hair-related product recommendations.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- hat
    - The hat parameter allows specific inclusion or exclusion of the hat region, which is important for fashion analysis or accessory recommendations.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- ear_r
    - The ear_r parameter is used for the right ear region, which may be important for hearing aid integration or ear health monitoring.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- neck_l
    - The neck_l parameter corresponds to the left neck region, which may be important in posture analysis or clothing fit recommendations.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- neck
    - The neck parameter is used for the neck region, which is important in tasks like posture analysis and contributes to overall body language interpretation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- cloth
    - The cloth parameter is used to include or exclude clothing regions, which is important for fashion analysis or virtual try-on.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- MASK
    - The output mask is a binary representation that segments and identifies various facial features based on input parameters. It is a key output for further facial analysis and can be used in various applications such as facial expression recognition, beauty analysis, etc.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class FaceParsingResultsParser:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'result': ('FACE_PARSING_RESULT', {}), 'background': ('BOOLEAN', {'default': False}), 'skin': ('BOOLEAN', {'default': True}), 'nose': ('BOOLEAN', {'default': True}), 'eye_g': ('BOOLEAN', {'default': True}), 'r_eye': ('BOOLEAN', {'default': True}), 'l_eye': ('BOOLEAN', {'default': True}), 'r_brow': ('BOOLEAN', {'default': True}), 'l_brow': ('BOOLEAN', {'default': True}), 'r_ear': ('BOOLEAN', {'default': True}), 'l_ear': ('BOOLEAN', {'default': True}), 'mouth': ('BOOLEAN', {'default': True}), 'u_lip': ('BOOLEAN', {'default': True}), 'l_lip': ('BOOLEAN', {'default': True}), 'hair': ('BOOLEAN', {'default': True}), 'hat': ('BOOLEAN', {'default': True}), 'ear_r': ('BOOLEAN', {'default': True}), 'neck_l': ('BOOLEAN', {'default': True}), 'neck': ('BOOLEAN', {'default': True}), 'cloth': ('BOOLEAN', {'default': True})}}
    RETURN_TYPES = ('MASK',)
    FUNCTION = 'main'
    CATEGORY = 'face_parsing'

    def main(self, result: Tensor, background: bool, skin: bool, nose: bool, eye_g: bool, r_eye: bool, l_eye: bool, r_brow: bool, l_brow: bool, r_ear: bool, l_ear: bool, mouth: bool, u_lip: bool, l_lip: bool, hair: bool, hat: bool, ear_r: bool, neck_l: bool, neck: bool, cloth: bool):
        masks = []
        for item in result:
            mask = torch.zeros(item.shape, dtype=torch.uint8)
            if background:
                mask = mask | torch.where(item == 0, 1, 0)
            if skin:
                mask = mask | torch.where(item == 1, 1, 0)
            if nose:
                mask = mask | torch.where(item == 2, 1, 0)
            if eye_g:
                mask = mask | torch.where(item == 3, 1, 0)
            if r_eye:
                mask = mask | torch.where(item == 4, 1, 0)
            if l_eye:
                mask = mask | torch.where(item == 5, 1, 0)
            if r_brow:
                mask = mask | torch.where(item == 6, 1, 0)
            if l_brow:
                mask = mask | torch.where(item == 7, 1, 0)
            if r_ear:
                mask = mask | torch.where(item == 8, 1, 0)
            if l_ear:
                mask = mask | torch.where(item == 9, 1, 0)
            if mouth:
                mask = mask | torch.where(item == 10, 1, 0)
            if u_lip:
                mask = mask | torch.where(item == 11, 1, 0)
            if l_lip:
                mask = mask | torch.where(item == 12, 1, 0)
            if hair:
                mask = mask | torch.where(item == 13, 1, 0)
            if hat:
                mask = mask | torch.where(item == 14, 1, 0)
            if ear_r:
                mask = mask | torch.where(item == 15, 1, 0)
            if neck_l:
                mask = mask | torch.where(item == 16, 1, 0)
            if neck:
                mask = mask | torch.where(item == 17, 1, 0)
            if cloth:
                mask = mask | torch.where(item == 18, 1, 0)
            masks.append(mask.float())
        final = torch.cat(masks, dim=0).unsqueeze(0)
        return (final,)
```