# Documentation
- Class name: SEGSPicker
- Category: ImpactPack/Util
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SEGSPicker node is designed to process and select segments from a series of segmentations. It receives a list of selections, which are indices corresponding to the segments to be selected, along with a set of segments. If a fallback image is provided, the node scales the segments to match the fallback image, applies masks to the cropped images, and then returns a new set of selected segments based on the selections. It plays a key role in simplifying the segment selection process and ensuring the output meets the specific requirements of the application.

# Input types
## Required
- picks
    - The 'picks' parameter is a string containing a comma-separated list of indices representing the segments to be selected. It is critical to the node's functionality, as it determines which segments from the input set will be processed and returned as output.
    - Comfy dtype: STRING
    - Python dtype: str
- segs
    - The 'segs' parameter is the collection of segment objects that the node will process. This is a required input, as the node's purpose is to manipulate and select these segments based on different selections.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]
## Optional
- fallback_image_opt
    - The 'fallback_image_opt' parameter is an optional image; if provided, the node will use it to scale the segments. It can influence the node's output by ensuring the segments are appropriately sized for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- unique_id
    - The 'unique_id' parameter is a hidden field used internally by the node to track and manage segments. It does not directly affect the node's execution but is important for maintaining data integrity.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- segs
    - The 'segs' output parameter represents the new set of selected segments generated based on the selections received by the node. It is the final result of the node's processing and is important as it represents the final output for further use or analysis.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[List[SEG], List[SEG]]

# Usage tips
- Infra type: CPU

# Source code
```
class SEGSPicker:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'picks': ('STRING', {'multiline': True, 'dynamicPrompts': False, 'pysssss.autocomplete': False}), 'segs': ('SEGS',)}, 'optional': {'fallback_image_opt': ('IMAGE',)}, 'hidden': {'unique_id': 'UNIQUE_ID'}}
    RETURN_TYPES = ('SEGS',)
    OUTPUT_NODE = True
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, picks, segs, fallback_image_opt=None, unique_id=None):
        if fallback_image_opt is not None:
            segs = core.segs_scale_match(segs, fallback_image_opt.shape)
        cands = []
        for seg in segs[1]:
            if seg.cropped_image is not None:
                cropped_image = seg.cropped_image
            elif fallback_image_opt is not None:
                cropped_image = crop_image(fallback_image_opt, seg.crop_region)
            else:
                cropped_image = empty_pil_tensor()
            mask_array = seg.cropped_mask.copy()
            mask_array[mask_array < 0.3] = 0.3
            mask_array = mask_array[None, ..., None]
            cropped_image = cropped_image * mask_array
            cands.append(cropped_image)
        impact.impact_server.segs_picker_map[unique_id] = cands
        pick_ids = set()
        for pick in picks.split(','):
            try:
                pick_ids.add(int(pick) - 1)
            except Exception:
                pass
        new_segs = []
        for i in pick_ids:
            if 0 <= i < len(segs[1]):
                new_segs.append(segs[1][i])
        return ((segs[0], new_segs),)
```