# Documentation
- Class name: SEGS_Classify
- Category: ImpactPack/HuggingFace
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SEGS_Classify node is designed to classify image segments using a pre-trained transformer model. It processes segments, evaluates whether they meet a certain condition based on scores from the classifier, and filters the segments into two categories: those that meet the condition and those that do not. This node plays a key role in segment-based image analysis, enabling classification of image content based on complex criteria.

# Input types
## Required
- classifier
    - The classifier parameter is critical to the node's operation, as it defines the pre-trained model used to classify segments. The effectiveness of classification directly depends on the quality and applicability of the classifier.
    - Comfy dtype: TRANSFORMERS_CLASSIFIER
    - Python dtype: transformers.pipeline
- segs
    - The segs parameter holds the image segments that need to be classified. This is a fundamental input, as all processing by the node revolves around these segments.
    - Comfy dtype: SEGS
    - Python dtype: List[Segment]
- preset_expr
    - The preset_expr parameter allows the user to select a predefined expression for classification or choose a manual expression. It determines the condition that will be used to classify the segments.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- manual_expr
    - When preset_expr is set to 'Manual expr', this parameter is used to input a custom expression for classifying segments. It provides flexibility for users to define their own classification criteria.
    - Comfy dtype: STRING
    - Python dtype: str
- ref_image_opt
    - The optional ref_image_opt parameter provides a reference image that can be used to crop segments if the segment's cropped_image attribute is unavailable. It enhances the node's functionality by providing an alternative source for segment images when needed.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Output types
- filtered_SEGS
    - The filtered_SEGS output contains the segments that meet the user-specified classification condition. It is a key result of the node's operation, representing the content filtered based on the classification criteria.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[Segment, List[Segment]]
- remained_SEGS
    - The remained_SEGS output includes the segments that do not meet the classification condition. It is a complementary result to filtered_SEGS, providing insight into segments that were not classified according to the specified criteria.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[Segment, List[Segment]]

# Usage tips
- Infra type: GPU

# Source code
```
class SEGS_Classify:

    @classmethod
    def INPUT_TYPES(s):
        global preset_classify_expr
        return {'required': {'classifier': ('TRANSFORMERS_CLASSIFIER',), 'segs': ('SEGS',), 'preset_expr': (preset_classify_expr + ['Manual expr'],), 'manual_expr': ('STRING', {'multiline': False})}, 'optional': {'ref_image_opt': ('IMAGE',)}}
    RETURN_TYPES = ('SEGS', 'SEGS')
    RETURN_NAMES = ('filtered_SEGS', 'remained_SEGS')
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/HuggingFace'

    @staticmethod
    def lookup_classified_label_score(score_infos, label):
        global symbolic_label_map
        if label.startswith('#'):
            if label not in symbolic_label_map:
                return None
            else:
                label = symbolic_label_map[label]
        else:
            label = {label}
        for x in score_infos:
            if x['label'] in label:
                return x['score']
        return None

    def doit(self, classifier, segs, preset_expr, manual_expr, ref_image_opt=None):
        if preset_expr == 'Manual expr':
            expr_str = manual_expr
        else:
            expr_str = preset_expr
        match = re.match(classify_expr_pattern, expr_str)
        if match is None:
            return ((segs[0], []), segs)
        a = match.group(1)
        op = match.group(2)
        b = match.group(3)
        a_is_lab = not is_numeric_string(a)
        b_is_lab = not is_numeric_string(b)
        classified = []
        remained_SEGS = []
        for seg in segs[1]:
            cropped_image = None
            if seg.cropped_image is not None:
                cropped_image = seg.cropped_image
            elif ref_image_opt is not None:
                cropped_image = crop_image(ref_image_opt, seg.crop_region)
            if cropped_image is not None:
                cropped_image = to_pil(cropped_image)
                res = classifier(cropped_image)
                classified.append((seg, res))
            else:
                remained_SEGS.append(seg)
        filtered_SEGS = []
        for (seg, res) in classified:
            if a_is_lab:
                avalue = SEGS_Classify.lookup_classified_label_score(res, a)
            else:
                avalue = a
            if b_is_lab:
                bvalue = SEGS_Classify.lookup_classified_label_score(res, b)
            else:
                bvalue = b
            if avalue is None or bvalue is None:
                remained_SEGS.append(seg)
                continue
            avalue = float(avalue)
            bvalue = float(bvalue)
            if op == '>':
                cond = avalue > bvalue
            elif op == '<':
                cond = avalue < bvalue
            elif op == '>=':
                cond = avalue >= bvalue
            elif op == '<=':
                cond = avalue <= bvalue
            else:
                cond = avalue == bvalue
            if cond:
                filtered_SEGS.append(seg)
            else:
                remained_SEGS.append(seg)
        return ((segs[0], filtered_SEGS), (segs[0], remained_SEGS))
```