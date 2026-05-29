# Documentation
- Class name: MotionctrlSample
- Category: motionctrl
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-MotionCtrl.git

The MotionctrlSample class aims to facilitate the generation of dynamic visual content by integrating motion control into the rendering process. It leverages advanced algorithms to interpret user-defined camera and trajectory inputs, enabling the creation of complex motion sequences with realistic animations. This node abstracts the complexity of motion simulation, allowing users to focus on creative expression rather than underlying technical details.

# Input types
## Required
- prompt
    - The prompt parameter serves as the creative input for the MotionctrlSample node, guiding the overall theme and style of the generated content. It is essential for setting the context in which motion simulation occurs, directly influencing the narrative and visual elements produced during rendering.
    - Comfy dtype: STRING
    - Python dtype: str
- camera
    - The camera parameter defines the perspective and viewpoint from which the motion sequence is captured. It plays a critical role in shaping the spatial-temporal relationships and depth perception within the rendered scene, thereby significantly impacting the final visual output.
    - Comfy dtype: STRING
    - Python dtype: str
- traj
    - The trajectory parameter outlines the paths and movements of objects within the scene, forming the foundation of motion simulation. It is crucial for guiding the dynamics of the animation and the interaction of elements, ensuring coherence and fluidity in motion representation.
    - Comfy dtype: STRING
    - Python dtype: str
- frame_length
    - The frame length parameter specifies the duration of the animation sequence, directly affecting the detail and complexity of the motion trajectory. Longer frame lengths allow for more intricate motion patterns and smoother transitions, while shorter frame lengths may result in simpler or more abrupt movements.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The step count parameter determines the number of intermediate frames generated during the motion simulation process, which influences the smoothness and quality of the animation. A higher step count yields finer motion trajectories, while a lower step count may lead to insufficient detail or disjointed animation.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed parameter is used to initialize the random number generator, ensuring that motion simulation results are reproducible and consistent. This is an important aspect for debugging and comparing different simulation runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
    - The output of the MotionctrlSample node is a dynamic visual representation, in the form of an image or image sequence, encapsulating the results of the motion simulation. It reflects the combined effect of the input parameters, showcasing the creativity and complexity of the generated motion content.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-MotionCtrl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
