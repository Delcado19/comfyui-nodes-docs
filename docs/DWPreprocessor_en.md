
# Documentation
- Class name: DWPreprocessor
- Category: ControlNet Preprocessors/Faces and Poses Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The DWPreprocessor node is specifically designed for data preprocessing in DWPose pose estimation tasks. It converts input data into a format suitable for pose estimation, improving the performance of pose estimation models by optimizing the structure and format of the input data.

# Input types
## Required
- image
    - Input image used for pose estimation.
    - Comfy dtype: IMAGE
    - Python dtype: np.ndarray
## Optional
- detect_hand
    - Enable or disable hand detection during pose estimation, affecting the comprehensiveness of pose analysis.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- detect_body
    - Enable or disable body detection, determining whether body keypoints are included in pose estimation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- detect_face
    - Controls whether face detection is included in pose estimation, affecting the level of detail for facial keypoints.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - Resolution for resizing the input image, affecting the level of detail in pose estimation.
    - Comfy dtype: INT
    - Python dtype: int
- bbox_detector
    - Specifies the bounding box detector model to use, affecting the initial detection stage of pose estimation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- pose_estimator
    - Determines the pose estimation model used, directly impacting the accuracy and performance of pose keypoint detection.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - Processed image after pose estimation, available for further analysis or visualization.
    - Comfy dtype: IMAGE
    - Python dtype: np.ndarray
- pose_keypoint
    - Detected pose keypoints, providing detailed positional information for various body parts.
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: List[np.ndarray]


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [PreviewImage](../../Comfy/Nodes/PreviewImage.md)
    - [ControlNetApplyAdvanced](../../Comfy/Nodes/ControlNetApplyAdvanced.md)
    - [ACN_AdvancedControlNetApply](../../ComfyUI-Advanced-ControlNet/Nodes/ACN_AdvancedControlNetApply.md)
    - [ControlNetApply](../../Comfy/Nodes/ControlNetApply.md)
    - [PreviewBridge](../../ComfyUI-Impact-Pack/Nodes/PreviewBridge.md)
    - [CR Multi-ControlNet Stack](../../ComfyUI_Comfyroll_CustomNodes/Nodes/CR Multi-ControlNet Stack.md)



## Source code
```python
class DWPose_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        input_types = create_node_input_types(
            detect_hand=(["enable", "disable"], {"default": "enable"}),
            detect_body=(["enable", "disable"], {"default": "enable"}),
            detect_face=(["enable", "disable"], {"default": "enable"})
        )
        input_types["optional"] = {
            **input_types["optional"],
            "bbox_detector": (
                ["yolox_l.torchscript.pt", "yolox_l.onnx", "yolo_nas_l_fp16.onnx", "yolo_nas_m_fp16.onnx", "yolo_nas_s_fp16.onnx"],
                {"default": "yolox_l.onnx"}
            ),
            "pose_estimator": (["dw-ll_ucoco_384_bs5.torchscript.pt", "dw-ll_ucoco_384.onnx", "dw-ll_ucoco.onnx"], {"default": "dw-ll_ucoco_384_bs5.torchscript.pt"})
        }
        return input_types

    RETURN_TYPES = ("IMAGE", "POSE_KEYPOINT")
    FUNCTION = "estimate_pose"

    CATEGORY = "ControlNet Preprocessors/Faces and Poses Estimators"

    def estimate_pose(self, image, detect_hand, detect_body, detect_face, resolution=512, bbox_detector="yolox_l.onnx", pose_estimator="dw-ll_ucoco_384.onnx", **kwargs):
        if bbox_detector == "yolox_l.onnx":
            yolo_repo = DWPOSE_MODEL_NAME
        elif "yolox" in bbox_detector:
            yolo_repo = "hr16/yolox-onnx"
        elif "yolo_nas" in bbox_detector:
            yolo_repo = "hr16/yolo-nas-fp16"
        else:
            raise NotImplementedError(f"Download mechanism for {bbox_detector}")

        if pose_estimator == "dw-ll_ucoco_384.onnx":
            pose_repo = DWPOSE_MODEL_NAME
        elif pose_estimator.endswith(".onnx"):
            pose_repo = "hr16/UnJIT-DWPose"
        elif pose_estimator.endswith(".torchscript.pt"):
            pose_repo = "hr16/DWPose-TorchScript-BatchSize5"
        else:
            raise NotImplementedError(f"Download mechanism for {pose_estimator}")

        model = DwposeDetector.from_pretrained(
            pose_repo,
            yolo_repo,
            det_filename=bbox_detector, pose_filename=pose_estimator,
            torchscript_device=model_management.get_torch_device()
        )
        detect_hand = detect_hand == "enable"
        detect_body = detect_body == "enable"
        detect_face = detect_face == "enable"
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
