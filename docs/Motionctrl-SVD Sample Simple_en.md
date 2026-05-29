# Documentation
- Class name: MotionctrlSVDSampleSimple
- Category: motionctrl
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-MotionCtrl-SVD.git

The MotionctrlSVDSampleSimple node is designed to process and generate motion sequences from input images and camera data. It leverages the model's inference capabilities to create a series of frames representing motion, enhancing the visual representation of dynamic scenes. This node abstracts the complexity of motion generation, providing users with a high-level interface to explore and visualize motion dynamics.

# Input types
## Required
- model
    - The model parameter is critical for the node's operation, as it defines the underlying motion control mechanism used to generate motion sequences. Without a specified model, the node cannot perform its intended function of creating dynamic visual content.
    - Comfy dtype: MOTIONCTRLSVD
    - Python dtype: torch.nn.Module
- camera
    - The camera parameter is essential, as it provides camera pose data used to simulate the camera's perspective and orientation in the generated motion sequences. This data affects the realism and accuracy of the motion representation.
    - Comfy dtype: STRING
    - Python dtype: str
- image
    - The image parameter is a key input to the node, serving as the visual context for generating motion sequences. It sets the scene and provides the model with the necessary visual cues to create a coherent and contextually relevant motion sequence.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- resize_mode
    - The adjustment mode parameter is important, as it determines how input images are resized to fit the model's requirements. This adjustment ensures the image is suitable for processing, which is critical for accurate motion sequence generation.
    - Comfy dtype: RESIZE_MODE
    - Python dtype: str
- seed
    - The seed parameter is critical for the node, as it ensures reproducibility of the motion sequence generation process. By setting the seed, users can obtain consistent results across different runs, which is essential for testing and debugging purposes.
    - Comfy dtype: INT
    - Python dtype: int
- fps_id
    - The fps_id parameter is important, as it determines the frames per second of the generated motion sequence. This directly affects the smoothness and fluidity of the generated motion sequence, significantly impacting the final video's viewing experience.
    - Comfy dtype: INT
    - Python dtype: int
- frame_length
    - The frame_length parameter defines the number of frames to generate in the motion sequence. It is a key factor in determining the duration and scope of the motion the node will produce.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
    - The output parameter represents the generated motion sequence, a series of images depicting motion inferred from the input data. This output is important as it is the direct result of the node's functionality, providing a visual representation of motion dynamics.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: GPU

# Source code
```
class MotionctrlSVDSampleSimple:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'model': ('MOTIONCTRLSVD',), 'camera': ('STRING', {'multiline': True, 'default': '[[1,0,0,0,0,1,0,0,0,0,1,0.2]]'}), 'image': ('IMAGE',), 'resize_mode': (RESIZE_MODE,), 'seed': ('INT', {'default': 1234}), 'fps_id': ('INT', {'default': 6, 'min': 5, 'max': 30}), 'frame_length': ('INT', {'default': 14})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'run_inference'
    CATEGORY = 'motionctrl'

    def run_inference(self, model, camera, image, resize_mode, seed, fps_id, frame_length):
        global device
        RT = process_camera(camera, frame_length).reshape(-1, 12)
        image = 255.0 * image[0].cpu().numpy()
        image = Image.fromarray(np.clip(image, 0, 255).astype(np.uint8))
        image = process_input_image(image, resize_mode)
        return motionctrl_sample(model=model, image=image, RT=RT, num_frames=frame_length, fps_id=fps_id, decoding_t=1, seed=seed, sample_num=1, device=device)
```