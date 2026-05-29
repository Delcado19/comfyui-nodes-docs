
# Documentation
- Class name: SmplifyMotionData
- Category: MotionDiff/smpl
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SmplifyMotionData node converts motion data into a format compatible with the SMPL model, optimizing the representation of human motion through an iterative process. This conversion enables the use of motion data in applications requiring 3D human models, such as animation and simulation.

# Input types
## Required
- motion_data
    - The input motion data to be converted. This data is essential for generating a 3D representation of human motion using the SMPL model.
    - Comfy dtype: MOTION_DATA
    - Python dtype: Dict[str, Union[np.ndarray, Dict[str, np.ndarray]]]
- num_smplify_iters
    - The number of iterations for the SMPLify algorithm, affecting the precision and detail of the motion conversion.
    - Comfy dtype: INT
    - Python dtype: int
- smplify_step_size
    - The step size for the SMPLify algorithm, influencing the convergence speed and accuracy of the motion representation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- smpl_model
    - The specific SMPL model used for motion conversion, determining the gender and body proportions of the generated 3D human model.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- smpl
    - The output includes the path to the SMPL model used, the SMPL model parameters representing the pose of the 3D human model in each frame, and metadata related to the conversion process.
    - Comfy dtype: SMPL
    - Python dtype: Tuple[str, torch.Tensor, Dict[str, torch.Tensor]]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
