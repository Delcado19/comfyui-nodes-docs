# Documentation
- Class name: SimpleDetectorForAnimateDiff
- Category: ImpactPack/Detector
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SimpleDetectorForAnimateDiff node is designed to detect and process animation differences across a sequence of images. It utilizes bounding box detection and an optional semantic segmentation model to identify and segment regions of interest. The node can handle multiple operation modes, including using a single frame as reference, combining neighboring frames, or independently segmenting each frame. It emphasizes detecting significant changes and creating masks to isolate these changes for further analysis.

# Input types
## Required
- bbox_detector
    - The `bbox_detector` parameter is crucial for the initial detection of bounding boxes in image frames. It lays the foundation for subsequent analysis and segmentation processes. The effectiveness of `bbox_detector` directly impacts the accuracy of later steps, making it a critical component in the node's operation.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: torch.nn.Module
- image_frames
    - The `image_frames` parameter is essential as it represents the input data for the node. It contains the sequence of images that the node will analyze to detect animation differences. The quality and resolution of `image_frames` directly affect the node's ability to detect and accurately segment changes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- bbox_threshold
    - The `bbox_threshold` parameter defines the confidence level for bounding box detection. It is a critical factor in determining which bounding boxes are considered for further processing. Adjusting this threshold can significantly impact the node's detection capability and subsequent segmentation results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bbox_dilation
    - The `bbox_dilation` parameter is used to expand the size of detected bounding boxes. This expansion is important to ensure the segmentation process captures the entire region of interest, especially when bounding boxes are close to object edges or near each other.
    - Comfy dtype: INT
    - Python dtype: int
- crop_factor
    - The `crop_factor` parameter is important as it determines the extent to which the image is cropped around the detected region. This helps focus the analysis on the most relevant parts of the image and reduces noise from surrounding areas.
    - Comfy dtype: FLOAT
    - Python dtype: float
- drop_size
    - The `drop_size` parameter determines the size of regions discarded during the segmentation process. It plays a crucial role in fine-tuning the segmentation mask to ensure it accurately represents the region of interest without unnecessary details.
    - Comfy dtype: INT
    - Python dtype: int
- sub_threshold
    - The `sub_threshold` parameter is important for fine-tuning the segmentation process. It helps determine the level of detail captured in the segmentation mask, balancing precision and inclusion of relevant information.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sub_dilation
    - The `sub_dilation` parameter is used to control the expansion of the segmentation mask. It is a key factor in ensuring the mask fully encapsulates the region of interest, accounting for any potential inaccuracies in the initial detection.
    - Comfy dtype: INT
    - Python dtype: int
- sub_bbox_expansion
    - The `sub_bbox_expansion` parameter allows expansion of bounding boxes used in the segmentation process. This is particularly useful for capturing regions that may be slightly larger than initially detected, ensuring more comprehensive segmentation.
    - Comfy dtype: INT
    - Python dtype: int
- sam_mask_hint_threshold
    - The `sam_mask_hint_threshold` parameter is used with SAM (Semantic Annotation Model) to refine the segmentation mask. It helps control the level of detail in the mask, ensuring the mask closely matches the desired region of interest.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- SEGS
    - The output SEGS (Semantic Annotation Segments) parameter represents the result of the node's analysis. It contains the segmented regions of interest identified in the input image frames. These segments are critical for further processing and analysis, such as tracking changes or identifying specific features in animations.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]

# Usage tips
- Infra type: GPU

# Source code
```
class SimpleDetectorForAnimateDiff:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'bbox_detector': ('BBOX_DETECTOR',), 'image_frames': ('IMAGE',), 'bbox_threshold': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'bbox_dilation': ('INT', {'default': 0, 'min': -255, 'max': 255, 'step': 1}), 'crop_factor': ('FLOAT', {'default': 3.0, 'min': 1.0, 'max': 100, 'step': 0.1}), 'drop_size': ('INT', {'min': 1, 'max': MAX_RESOLUTION, 'step': 1, 'default': 10}), 'sub_threshold': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'sub_dilation': ('INT', {'default': 0, 'min': -255, 'max': 255, 'step': 1}), 'sub_bbox_expansion': ('INT', {'default': 0, 'min': 0, 'max': 1000, 'step': 1}), 'sam_mask_hint_threshold': ('FLOAT', {'default': 0.7, 'min': 0.0, 'max': 1.0, 'step': 0.01})}, 'optional': {'masking_mode': (['Pivot SEGS', 'Combine neighboring frames', "Don't combine"],), 'segs_pivot': (['Combined mask', '1st frame mask'],), 'sam_model_opt': ('SAM_MODEL',), 'segm_detector_opt': ('SEGM_DETECTOR',)}}
    RETURN_TYPES = ('SEGS',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Detector'

    @staticmethod
    def detect(bbox_detector, image_frames, bbox_threshold, bbox_dilation, crop_factor, drop_size, sub_threshold, sub_dilation, sub_bbox_expansion, sam_mask_hint_threshold, masking_mode='Pivot SEGS', segs_pivot='Combined mask', sam_model_opt=None, segm_detector_opt=None):
        h = image_frames.shape[1]
        w = image_frames.shape[2]
        segs_by_frames = []
        for image in image_frames:
            image = image.unsqueeze(0)
            segs = bbox_detector.detect(image, bbox_threshold, bbox_dilation, crop_factor, drop_size)
            if sam_model_opt is not None:
                mask = core.make_sam_mask(sam_model_opt, segs, image, 'center-1', sub_dilation, sub_threshold, sub_bbox_expansion, sam_mask_hint_threshold, False)
                segs = core.segs_bitwise_and_mask(segs, mask)
            elif segm_detector_opt is not None:
                segm_segs = segm_detector_opt.detect(image, sub_threshold, sub_dilation, crop_factor, drop_size)
                mask = core.segs_to_combined_mask(segm_segs)
                segs = core.segs_bitwise_and_mask(segs, mask)
            segs_by_frames.append(segs)

        def get_masked_frames():
            masks_by_frame = []
            for (i, segs) in enumerate(segs_by_frames):
                masks_in_frame = segs_nodes.SEGSToMaskList().doit(segs)[0]
                current_frame_mask = (masks_in_frame[0] * 255).to(torch.uint8)
                for mask in masks_in_frame[1:]:
                    current_frame_mask |= (mask * 255).to(torch.uint8)
                current_frame_mask = (current_frame_mask / 255.0).to(torch.float32)
                current_frame_mask = utils.to_binary_mask(current_frame_mask, 0.1)[0]
                masks_by_frame.append(current_frame_mask)
            return masks_by_frame

        def get_empty_mask():
            return torch.zeros((h, w), dtype=torch.float32, device='cpu')

        def get_neighboring_mask_at(i, masks_by_frame):
            prv = masks_by_frame[i - 1] if i > 1 else get_empty_mask()
            cur = masks_by_frame[i]
            nxt = masks_by_frame[i - 1] if i > 1 else get_empty_mask()
            prv = prv if prv is not None else get_empty_mask()
            cur = cur.clone() if cur is not None else get_empty_mask()
            nxt = nxt if nxt is not None else get_empty_mask()
            return (prv, cur, nxt)

        def get_merged_neighboring_mask(masks_by_frame):
            if len(masks_by_frame) <= 1:
                return masks_by_frame
            result = []
            for i in range(0, len(masks_by_frame)):
                (prv, cur, nxt) = get_neighboring_mask_at(i, masks_by_frame)
                cur = (cur * 255).to(torch.uint8)
                cur |= (prv * 255).to(torch.uint8)
                cur |= (nxt * 255).to(torch.uint8)
                cur = (cur / 255.0).to(torch.float32)
                cur = utils.to_binary_mask(cur, 0.1)[0]
                result.append(cur)
            return result

        def get_whole_merged_mask():
            all_masks = []
            for segs in segs_by_frames:
                all_masks += segs_nodes.SEGSToMaskList().doit(segs)[0]
            merged_mask = (all_masks[0] * 255).to(torch.uint8)
            for mask in all_masks[1:]:
                merged_mask |= (mask * 255).to(torch.uint8)
            merged_mask = (merged_mask / 255.0).to(torch.float32)
            merged_mask = utils.to_binary_mask(merged_mask, 0.1)[0]
            return merged_mask

        def get_pivot_segs():
            if segs_pivot == '1st frame mask':
                return segs_by_frames[0][1]
            else:
                merged_mask = get_whole_merged_mask()
                return segs_nodes.MaskToSEGS().doit(merged_mask, False, crop_factor, False, drop_size, contour_fill=True)[0]

        def get_merged_neighboring_segs():
            pivot_segs = get_pivot_segs()
            masks_by_frame = get_masked_frames()
            masks_by_frame = get_merged_neighboring_mask(masks_by_frame)
            new_segs = []
            for seg in pivot_segs[1]:
                cropped_mask = torch.zeros(seg.cropped_mask.shape, dtype=torch.float32, device='cpu').unsqueeze(0)
                pivot_mask = torch.from_numpy(seg.cropped_mask)
                (x1, y1, x2, y2) = seg.crop_region
                for mask in masks_by_frame:
                    cropped_mask_at_frame = (mask[y1:y2, x1:x2] * pivot_mask).unsqueeze(0)
                    cropped_mask = torch.cat((cropped_mask, cropped_mask_at_frame), dim=0)
                if len(cropped_mask) > 1:
                    cropped_mask = cropped_mask[1:]
                new_seg = SEG(seg.cropped_image, cropped_mask, seg.confidence, seg.crop_region, seg.bbox, seg.label, seg.control_net_wrapper)
                new_segs.append(new_seg)
            return (pivot_segs[0], new_segs)

        def get_separated_segs():
            pivot_segs = get_pivot_segs()
            masks_by_frame = get_masked_frames()
            new_segs = []
            for seg in pivot_segs[1]:
                cropped_mask = torch.zeros(seg.cropped_mask.shape, dtype=torch.float32, device='cpu').unsqueeze(0)
                (x1, y1, x2, y2) = seg.crop_region
                for mask in masks_by_frame:
                    cropped_mask_at_frame = mask[y1:y2, x1:x2]
                    cropped_mask = torch.cat((cropped_mask, cropped_mask_at_frame), dim=0)
                new_seg = SEG(seg.cropped_image, cropped_mask, seg.confidence, seg.crop_region, seg.bbox, seg.label, seg.control_net_wrapper)
                new_segs.append(new_seg)
            return (pivot_segs[0], new_segs)
        if masking_mode == 'Pivot SEGS':
            return (get_pivot_segs(),)
        elif masking_mode == 'Combine neighboring frames':
            return (get_merged_neighboring_segs(),)
        else:
            return (get_separated_segs(),)

    def doit(self, bbox_detector, image_frames, bbox_threshold, bbox_dilation, crop_factor, drop_size, sub_threshold, sub_dilation, sub_bbox_expansion, sam_mask_hint_threshold, masking_mode='Pivot SEGS', segs_pivot='Combined mask', sam_model_opt=None, segm_detector_opt=None):
        return SimpleDetectorForAnimateDiff.detect(bbox_detector, image_frames, bbox_threshold, bbox_dilation, crop_factor, drop_size, sub_threshold, sub_dilation, sub_bbox_expansion, sam_mask_hint_threshold, masking_mode, segs_pivot, sam_model_opt, segm_detector_opt)
```