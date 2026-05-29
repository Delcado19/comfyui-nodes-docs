
# Documentation
- Class name: OpenposePreprocessor
- Category: ControlNet Preprocessors/Faces and Poses Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The OpenPose preprocessor node aims to estimate human pose from images. It uses the OpenPose model to detect and annotate various keypoints of the body, face, and hands, providing comprehensive pose estimation.

# Input types
## Required
- image
    - Input image for pose estimation. This is the primary data operated on by the pose detection algorithm.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- detect_hand
    - Determines whether hand keypoints are detected during pose estimation. Enabling this option allows detailed hand pose analysis.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- detect_body
    - Controls body keypoint detection in pose estimation. Enabling this feature allows analysis of overall body pose and movement.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- detect_face
    - Specifies whether facial keypoints should be detected for detailed facial expression and orientation analysis in pose estimation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - Resolution to which the input image is resized before processing. Higher resolution may improve detection accuracy but increases computational load.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Output image with annotated keypoints, visually presenting the pose estimation results.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- pose_keypoint
    - Dictionary containing detected body, facial, and hand keypoints, supporting detailed pose analysis.
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: List[Dict[str, Any]]
- ui
    - Provides a JSON representation of the detected keypoints for further analysis or visualization of pose estimation results.


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [PreviewImage](../../Comfy/Nodes/PreviewImage.md)
    - [CR Multi-ControlNet Stack](../../ComfyUI_Comfyroll_CustomNodes/Nodes/CR Multi-ControlNet Stack.md)
    - [ControlNetApply](../../Comfy/Nodes/ControlNetApply.md)
    - [ImageScaleToTotalPixels](../../Comfy/Nodes/ImageScaleToTotalPixels.md)
    - Reroute
    - [VHS_VideoCombine](../../ComfyUI-VideoHelperSuite/Nodes/VHS_VideoCombine.md)
    - MagicAnimate



## Source code
```python
class OpenPose_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(
            detect_hand = (["enable", "disable"], {"default": "enable"}),
            detect_body = (["enable", "disable"], {"default": "enable"}),
            detect_face = (["enable", "disable"], {"default": "enable"})
        )
        
    RETURN_TYPES = ("IMAGE", "POSE_KEYPOINT")
    FUNCTION = "estimate_pose"

    CATEGORY = "ControlNet Preprocessors/Faces and Poses Estimators"

    def estimate_pose(self, image, detect_hand, detect_body, detect_face, resolution=512, **kwargs):
        from controlnet_aux.open_pose import OpenposeDetector

        detect_hand = detect_hand == "enable"
        detect_body = detect_body == "enable"
        detect_face = detect_face == "enable"

        model = OpenposeDetector.from_pretrained().to(model_management.get_torch_device())        
        self.openpose_dicts = []
        def func(image, **kwargs):
            pose_img, openpose_dict = model(image, **kwargs)
            self.openpose_dicts.append(openpose_dict)
            return pose_img
        
        out = common_annotator_call(func, image, include_hand=detect_hand, include_face=detect_face, include_body=detect_body, image_and_json=True, resolution=resolution)
        del model
        return {
            'ui': { "openpose_json": [json.dumps(self.openpose_dicts, indent=4)] },
            "result": (out, self.openpose_dicts)
        }

```
