# Documentation
- Class name: DragNUWARunMotionBrush
- Category: DragNUWA
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

This node infers motion from brush input and applies it to a static image to simulate dynamic effects, aiming to enhance the visual representation of motion in the image. By integrating user-provided motion data, it enables the creation of dynamic or interactive visual content.

# Input types
## Required
- model
    - Model parameters are critical for the node's operation, as they define the underlying architecture and parameters used to process the image and apply motion effects.
    - Comfy dtype: DragNUWA
    - Python dtype: DragNUWA
- image
    - The image parameter is required, as it provides the base visual content that the node will operate on to simulate motion. Its properties directly affect the output quality and the effectiveness of the motion simulation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- motion_brush
    - The motion_brush parameter is essential for the node's functionality, as it provides the motion data to be applied to the image. Its structure and content directly influence the final motion effect.
    - Comfy dtype: MotionBrush
    - Python dtype: MotionBrush
- inference_batch_size
    - This parameter optimizes the node's processing by controlling the batch size during inference, affecting the computational efficiency and speed of the motion simulation.
    - Comfy dtype: INT
    - Python dtype: int
- motion_bucket_id
    - The motion_bucket_id parameter is important, as it identifies the specific motion data in the motion bucket to be used for simulation, guiding the node in creating the desired visual result.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
    - The output of this node is an enhanced image or sequence of images that visually represent the motion effects applied to the input image, demonstrating the node's ability to simulate dynamic visual content.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: GPU

# Source code
```
class DragNUWARunMotionBrush:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'model': ('DragNUWA',), 'image': ('IMAGE',), 'motion_brush': ('MotionBrush',), 'inference_batch_size': ('INT', {'default': 1, 'min': 1, 'max': 1}), 'motion_bucket_id': ('INT', {'default': 4, 'min': 1, 'max': 100})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'run_inference'
    CATEGORY = 'DragNUWA'

    def run_inference(self, model, image, motion_brush, inference_batch_size, motion_bucket_id):
        image = 255.0 * image[0].cpu().numpy()
        image_pil = Image.fromarray(np.clip(image, 0, 255).astype(np.uint8))
        (raw_w, raw_h) = image_pil.size
        resize_ratio = max(model.width / raw_w, model.height / raw_h)
        image_pil = image_pil.resize((int(raw_w * resize_ratio), int(raw_h * resize_ratio)), Image.BILINEAR)
        image_pil = transforms.CenterCrop((model.height, model.width))(image_pil.convert('RGB'))
        return model.run_brush(image_pil, motion_brush, inference_batch_size, motion_bucket_id)
```