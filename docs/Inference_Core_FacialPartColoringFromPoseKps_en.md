
# Documentation
- Class name: Inference_Core_FacialPartColoringFromPoseKps
- Category: ControlNet Preprocessors/Pose Keypoint Postprocess
- Output node: False

This node aims to color specific facial parts in pose keypoint data, allowing custom colors for each facial part. It processes pose keypoint frames and visually enhances and distinguishes different facial regions based on provided keypoint data and color specifications.

# Input types
## Required
- pose_kps
    - Pose keypoint data containing position information for various facial parts. It is the primary input for generating colored facial keypoints.
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: List[Dict]
- mode
    - Specifies the drawing mode for keypoints, allowing point-based or polygon-based rendering of facial parts.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- skin
    - Specifies the color for skin facial parts, affecting the visual representation of skin regions in the output.
    - Comfy dtype: STRING
    - Python dtype: str
- left_eye
    - Specifies the color for the left eye, affecting the visualization of the left eye in the output.
    - Comfy dtype: STRING
    - Python dtype: str
- right_eye
    - Specifies the color for the right eye, affecting the visualization of the right eye in the output.
    - Comfy dtype: STRING
    - Python dtype: str
- nose
    - Specifies the color for the nose, affecting the visualization of the nose in the output.
    - Comfy dtype: STRING
    - Python dtype: str
- upper_lip
    - Specifies the color for the upper lip, affecting the visualization of the upper lip in the output.
    - Comfy dtype: STRING
    - Python dtype: str
- inner_mouth
    - Specifies the color for the inner mouth, affecting the visualization of the inner mouth in the output.
    - Comfy dtype: STRING
    - Python dtype: str
- lower_lip
    - Specifies the color for the lower lip, affecting the visualization of the lower lip in the output.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The output is a tensor representation of the pose frame with facial parts colored according to the specified colors.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class FacialPartColoringFromPoseKps:
    @classmethod
    def INPUT_TYPES(s):
        input_types = {
            "required": {"pose_kps": ("POSE_KEYPOINT",), "mode": (["point", "polygon"], {"default": "polygon"})}
        }
        for facial_part in FACIAL_PARTS: 
            input_types["required"][facial_part] = ("STRING", {"default": LAPA_COLORS[facial_part], "multiline": False})
        return input_types
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "colorize"
    CATEGORY = "ControlNet Preprocessors/Pose Keypoint Postprocess"
    def colorize(self, pose_kps, mode, **facial_part_colors):
        pose_frames = pose_kps
        np_frames = [self.draw_kps(pose_frame, mode, **facial_part_colors) for pose_frame in pose_frames]
        np_frames = np.stack(np_frames, axis=0)
        return (torch.from_numpy(np_frames).float() / 255.,)
            
    def draw_kps(self, pose_frame, mode, **facial_part_colors):
        width, height = pose_frame["canvas_width"], pose_frame["canvas_height"]
        canvas = np.zeros((height, width, 3), dtype=np.uint8)
        for person, part_name in itertools.product(pose_frame["people"], FACIAL_PARTS):
            n = len(person["face_keypoints_2d"]) // 3
            facial_kps = rearrange(np.array(person["face_keypoints_2d"]), "(n c) -> n c", n=n, c=3)[:, :2] * (width, height)
            facial_kps = facial_kps.astype(np.int32)
            part_color = ImageColor.getrgb(facial_part_colors[part_name])[:3]
            if mode == "circle":
                start, end = FACIAL_PART_RANGES[part_name]
                part_contours = facial_kps[start:end+1]
                for pt in part_contours:
                    cv2.circle(canvas, pt, radius=2, color=part_color, thickness=-1)
                continue

            if part_name not in ["upper_lip", "inner_mouth", "lower_lip"]:
                start, end = FACIAL_PART_RANGES[part_name]
                part_contours = facial_kps[start:end+1]
                if part_name == "skin":
                    part_contours[17:] = part_contours[17:][::-1]
            else:
                part_contours = facial_kps[FACIAL_PART_RANGES[part_name], :]
            cv2.fillPoly(canvas, pts=[part_contours], color=part_color)
        return canvas

```
