
# Documentation
- Class name: FacialPartColoringFromPoseKps
- Category: ControlNet Preprocessors/Pose Keypoint Postprocess
- Output node: False

This node aims to color specific facial parts in pose keypoint data to achieve visual differentiation and analysis of facial features. It uses facial keypoints to draw or fill colors for specified parts, supporting custom part colors and rendering modes.

# Input types
## Required
- pose_kps
    - Pose keypoint data, containing various facial and body keypoint positions for one or more individuals. This data is essential for determining which facial parts need coloring.
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: List[Dict]
- mode
    - The rendering mode for specified facial parts, which can be points or filled polygons, affecting the visual presentation of colored keypoints.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- skin
    - The color for the specified skin facial part.
    - Comfy dtype: STRING
    - Python dtype: str
- left_eye
    - The color for the specified left eye facial part.
    - Comfy dtype: STRING
    - Python dtype: str
- right_eye
    - The color for the specified right eye facial part.
    - Comfy dtype: STRING
    - Python dtype: str
- nose
    - The color for the specified nose facial part.
    - Comfy dtype: STRING
    - Python dtype: str
- upper_lip
    - The color for the specified upper lip facial part.
    - Comfy dtype: STRING
    - Python dtype: str
- inner_mouth
    - The color for the specified inner mouth facial part.
    - Comfy dtype: STRING
    - Python dtype: str
- lower_lip
    - The color for the specified lower lip facial part.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The image after coloring the facial parts according to the provided specifications.
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
            facial_kps = rearrange(np.array(person["face_keypoints_2d"]), "(n c) -> n c", n=n, c=3)[:, :2]
            if is_normalized(facial_kps):
                facial_kps *= (width, height)
            facial_kps = facial_kps.astype(np.int32)
            part_color = ImageColor.getrgb(facial_part_colors[part_name])[:3]
            part_contours = facial_kps[FACIAL_PART_RANGES[part_name], :]
            if mode == "point":
                for pt in part_contours:
                    cv2.circle(canvas, pt, radius=2, color=part_color, thickness=-1)
            else:
                cv2.fillPoly(canvas, pts=[part_contours], color=part_color)
        return canvas

```
