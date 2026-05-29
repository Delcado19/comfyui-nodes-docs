# Documentation
- Class name: MotionctrlCond
- Category: motionctrl
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-MotionCtrl.git

The MotionctrlCond node is designed to manage and process motion control conditions in dynamic systems. It accepts various inputs such as model configuration, text prompts, camera settings, and trajectory data to generate a comprehensive set of motion controls. The node ensures smooth motion aligned with the provided content, handling camera and object motion inference modes. It outputs conditioning signals, trajectory features, and other relevant motion parameters that are crucial for subsequent steps in the motion control pipeline.

# Input types
## Required
- model
    - The model parameter is critical to the node as it defines the underlying motion control model that the node will use to generate motion control. This is a required input that directly affects the node's ability to process and produce accurate motion control output.
    - Comfy dtype: MOTIONCTRL
    - Python dtype: nn.Module
- prompt
    - The prompt parameter allows the user to input descriptive text to guide motion control behavior. It is important because it provides context for the model to generate motion consistent with the described scene.
    - Comfy dtype: STRING
    - Python dtype: str
- camera
    - The camera parameter specifies camera settings in a multi-frame environment. It is crucial for the node to correctly align the camera's viewpoint with the motion being controlled to ensure consistent visual output.
    - Comfy dtype: STRING
    - Python dtype: str
- traj
    - The trajectory parameter outlines the path that the motion control should follow. It is a key input that determines the sequence of motion and is indispensable for the node to produce the desired motion pattern.
    - Comfy dtype: STRING
    - Python dtype: str
- infer_mode
    - The inference mode parameter determines how the node handles motion and camera control. It provides flexibility in the node's operation, allowing it to adapt to different inference requirements.
    - Comfy dtype: MODE
    - Python dtype: str
- context_overlap
    - The context overlap parameter is used to define the overlap range for camera and trajectory alignment. It affects how the node integrates previous context into the current motion control sequence.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- positive
    - The positive conditioning output provides a set of signals that direct motion control towards the desired outcome based on the input prompt and settings.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative
    - The negative conditioning output is used to counteract or suppress certain unwanted motion features, ensuring motion aligns with the expected context.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- traj_list
    - The trajectory list output enumerates the sequence of motion control points that define the motion path. It is important for visualizing and executing the planned motion.
    - Comfy dtype: TRAJ_LIST
    - Python dtype: List[torch.Tensor]
- rt_list
    - The RT list output contains a list of camera rotation and translation parameters corresponding to each frame in the motion sequence.
    - Comfy dtype: RT_LIST
    - Python dtype: List[np.ndarray]
- traj
    - The trajectory feature output represents the processed motion control data that encapsulates the motion characteristics of each frame.
    - Comfy dtype: TRAJ_FEATURES
    - Python dtype: torch.Tensor
- rt
    - The RT output provides the final camera rotation and translation parameters aligned with the motion control of the current frame.
    - Comfy dtype: RT
    - Python dtype: torch.Tensor
- noise_shape
    - The noise shape output defines the dimensions of noise applied to the motion control system, which is essential for certain types of simulation or training processes that inject noise.
    - Comfy dtype: NOISE_SHAPE
    - Python dtype: Tuple[int, int, int, int, int]
- context_overlap
    - The context overlap output indicates the amount of previous motion control context considered when generating the current sequence.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-MotionCtrl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
