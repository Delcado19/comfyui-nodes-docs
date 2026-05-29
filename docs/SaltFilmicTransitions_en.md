
# Documentation
- Class name: SaltFilmicTransitions
- Category: SALT/Scheduling/Image
- Output node: False

The SaltFilmicTransitions node creates visually appealing transitions between two sets of images using various modes such as slide and circular expansion. It blends images seamlessly over a specified number of frames for dynamic visual storytelling, with optional mask blur scheduling to selectively control transition smoothness.

# Input types
## Required
- images_a
    - The first set of images to transition from. These serve as the starting point of the transition effect.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- images_b
    - The second set of images to transition to. These serve as the endpoint of the transition effect.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- mode
    - Specifies the transition style, such as slide direction or circular expansion, defining the visual effect used to blend the images.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- transition_frames
    - The number of frames over which the transition occurs, determining the duration and smoothness of the effect.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- mask_blur_schedule
    - An optional schedule controlling blur intensity during the transition, allowing finer visual adjustments to the transition effect.
    - Comfy dtype: LIST
    - Python dtype: List[float]

# Output types
- images
    - The resulting set of images after applying the transition effect, blended according to the specified mode and parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltFilmicTransitions:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images_a": ("IMAGE", ),
                "images_b": ("IMAGE", ),
                "mode": (["sipe_left", "swipe_right", "swipe_up", "swipe_down", "diagonal_tl_br", "diagonal_tr_bl", "diagonal_bl_tr", "diagonal_br_tl", "circle_expand", "circle_contract"],),
                "transition_frames": ("INT", {"min": 2, "max": 1024, "default": 10}),
            },
            "optional": {
                "mask_blur_schedule": ("LIST", ),
            }
        }
    
    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("images",)

    FUNCTION = "generate_transition"
    CATEGORY = "SALT/Scheduling/Image"

    def generate_transition(self, images_a, images_b, mode, transition_frames, mask_blur_schedule=[0]):
        mask_blur_schedule = [float(val) for val in mask_blur_schedule]
        img_list_a = [tensor2pil(img) for img in images_a]
        img_list_b = [tensor2pil(img) for img in images_b]
        transition = ImageBatchTransition(img_list_a, img_list_b, frames_per_transition=int(transition_frames), blur_radius=mask_blur_schedule, mode=mode)
        result_images = transition.create_transition()
        result_images = [pil2tensor(img) for img in result_images]
        return (torch.cat(result_images, dim=0), )

```
