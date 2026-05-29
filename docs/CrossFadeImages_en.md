# Documentation
- Class name: CrossFadeImages
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The CrossFadeImages node is designed to seamlessly blend two sets of images using crossfade techniques. It applies a transition effect that smoothly interpolates between the starting and ending images, creating visually appealing morphing sequences. This node is particularly useful when you need to gradually change from one image to another, suitable for creating animated transitions or visual effects.

# Input types
## Required
- images_1
    - The first set of images that will gradually fade out during the transition. These images form the starting point of the crossfade effect and are crucial for the initial visual presentation.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- images_2
    - The second set of images that will gradually appear during the transition. These images represent the end state of the crossfade and are crucial for the final visual effect.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
## Optional
- interpolation
    - The interpolation type used for the crossfade effect. This parameter determines the rate of change between images and can significantly affect the visual dynamics of the transition.
    - Comfy dtype: COMBO['linear', 'ease_in', 'ease_out', 'ease_in_out', 'bounce', 'elastic', 'glitchy', 'exponential_ease_out']
    - Python dtype: str
- transition_start_index
    - The index at which the crossfade transition begins. This parameter allows controlling the starting point of the fade-in process within the image sequence.
    - Comfy dtype: INT
    - Python dtype: int
- transitioning_frames
    - The number of frames over which the crossfade transition occurs. This parameter defines the duration of the transition effect within the animation sequence.
    - Comfy dtype: INT
    - Python dtype: int
- start_level
    - The starting alpha level of the crossfade, which determines the initial opacity of images_2 relative to images_1. A value of 0.0 means images_1 will be fully opaque while images_2 will be fully transparent.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_level
    - The ending alpha level of the crossfade, which determines the final opacity of images_2 relative to images_1. A value of 1.0 means images_2 will be fully opaque while images_1 will be fully transparent.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- crossfade_images
    - The output of the node is an image sequence representing the crossfade transition. Each image in the sequence is a blend of the input images, with the blending degree determined by the specified alpha levels and easing function.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class CrossFadeImages:
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'crossfadeimages'
    CATEGORY = 'KJNodes/image'

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images_1': ('IMAGE',), 'images_2': ('IMAGE',), 'interpolation': (['linear', 'ease_in', 'ease_out', 'ease_in_out', 'bounce', 'elastic', 'glitchy', 'exponential_ease_out'],), 'transition_start_index': ('INT', {'default': 1, 'min': 0, 'max': 4096, 'step': 1}), 'transitioning_frames': ('INT', {'default': 1, 'min': 0, 'max': 4096, 'step': 1}), 'start_level': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'end_level': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}

    def crossfadeimages(self, images_1, images_2, transition_start_index, transitioning_frames, interpolation, start_level, end_level):

        def crossfade(images_1, images_2, alpha):
            crossfade = (1 - alpha) * images_1 + alpha * images_2
            return crossfade

        def ease_in(t):
            return t * t

        def ease_out(t):
            return 1 - (1 - t) * (1 - t)

        def ease_in_out(t):
            return 3 * t * t - 2 * t * t * t

        def bounce(t):
            if t < 0.5:
                return self.ease_out(t * 2) * 0.5
            else:
                return self.ease_in((t - 0.5) * 2) * 0.5 + 0.5

        def elastic(t):
            return math.sin(13 * math.pi / 2 * t) * math.pow(2, 10 * (t - 1))

        def glitchy(t):
            return t + 0.1 * math.sin(40 * t)

        def exponential_ease_out(t):
            return 1 - (1 - t) ** 4
        easing_functions = {'linear': lambda t: t, 'ease_in': ease_in, 'ease_out': ease_out, 'ease_in_out': ease_in_out, 'bounce': bounce, 'elastic': elastic, 'glitchy': glitchy, 'exponential_ease_out': exponential_ease_out}
        crossfade_images = []
        alphas = torch.linspace(start_level, end_level, transitioning_frames)
        for i in range(transitioning_frames):
            alpha = alphas[i]
            image1 = images_1[i + transition_start_index]
            image2 = images_2[i + transition_start_index]
            easing_function = easing_functions.get(interpolation)
            alpha = easing_function(alpha)
            crossfade_image = crossfade(image1, image2, alpha)
            crossfade_images.append(crossfade_image)
        crossfade_images = torch.stack(crossfade_images, dim=0)
        last_frame = crossfade_images[-1]
        remaining_frames = len(images_2) - (transition_start_index + transitioning_frames)
        for i in range(remaining_frames):
            alpha = alphas[-1]
            image1 = images_1[i + transition_start_index + transitioning_frames]
            image2 = images_2[i + transition_start_index + transitioning_frames]
            easing_function = easing_functions.get(interpolation)
            alpha = easing_function(alpha)
            crossfade_image = crossfade(image1, image2, alpha)
            crossfade_images = torch.cat([crossfade_images, crossfade_image.unsqueeze(0)], dim=0)
        beginning_images_1 = images_1[:transition_start_index]
        crossfade_images = torch.cat([beginning_images_1, crossfade_images], dim=0)
        return (crossfade_images,)
```