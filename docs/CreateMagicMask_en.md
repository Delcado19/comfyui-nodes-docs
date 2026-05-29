# Documentation
- Class name: CreateMagicMask
- Category: KJNodes/masking/generate
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The CreateMagicMask node generates a pair of masks with varying complexity and detail. It leverages procedural generation principles to produce visually compelling patterns suitable for applications ranging from visual effects to artwork. The node operates using a set of parameters that define the characteristics of the generated masks, such as frame count, transitions, depth, distortion, seed, and frame dimensions. The result is dynamic, customizable masks that can be inverted to produce diverse effects.

# Input types
## Required
- frames
    - The 'frames' parameter determines the total number of frames generated for the mask sequence. It is a key factor in defining the animation length and complexity. More frames yield smoother transitions and more intricate patterns, but increase computational load.
    - Comfy dtype: INT
    - Python dtype: int
- transitions
    - The 'transitions' parameter specifies the number of transitions within the mask sequence. Each transition introduces variation in the pattern, contributing to the overall visual dynamics. It affects the diversity and speed at which the mask appearance evolves over time.
    - Comfy dtype: INT
    - Python dtype: int
- depth
    - The 'depth' parameter controls the level of detail in the generated mask by specifying the number of transformations applied to the base coordinates. Greater depth values enhance pattern complexity, creating more nested and intricate structures.
    - Comfy dtype: INT
    - Python dtype: int
- distortion
    - The 'distortion' parameter influences the degree of irregularity in the mask pattern. It introduces variability into the generated shapes and forms, allowing a wide range of visual effects. Higher distortion values can lead to more abstract and unpredictable patterns.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The 'seed' parameter initializes the random number generator, ensuring reproducibility of the mask generation process. It is essential for obtaining consistent results when re-running the node with the same settings.
    - Comfy dtype: INT
    - Python dtype: int
- frame_width
    - The 'frame_width' parameter defines the width of each frame in the mask sequence. It plays a significant role in determining the resolution and scale of the visual output. Larger frame widths accommodate more detail but may require more memory and processing power.
    - Comfy dtype: INT
    - Python dtype: int
- frame_height
    - The 'frame_height' parameter sets the height of each frame in the mask sequence, complementing frame_width to establish the overall dimensions of the visual canvas. It is a key factor in presenting and framing the generated content.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask
    - The 'mask' output provides the generated mask sequence as a stack of frames, with each frame representing a stage in the mask evolution. It is a critical component for further processing or direct use in visual applications.
    - Comfy dtype: TORCH_TENSOR
    - Python dtype: torch.Tensor
- mask_inverted
    - The 'mask_inverted' output presents the inversion of the generated mask sequence, offering an alternative visual effect that can be used to create contrast or highlight different aspects of the content.
    - Comfy dtype: TORCH_TENSOR
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class CreateMagicMask:
    RETURN_TYPES = ('MASK', 'MASK')
    RETURN_NAMES = ('mask', 'mask_inverted')
    FUNCTION = 'createmagicmask'
    CATEGORY = 'KJNodes/masking/generate'

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'frames': ('INT', {'default': 16, 'min': 2, 'max': 4096, 'step': 1}), 'depth': ('INT', {'default': 12, 'min': 1, 'max': 500, 'step': 1}), 'distortion': ('FLOAT', {'default': 1.5, 'min': 0.0, 'max': 100.0, 'step': 0.01}), 'seed': ('INT', {'default': 123, 'min': 0, 'max': 99999999, 'step': 1}), 'transitions': ('INT', {'default': 1, 'min': 1, 'max': 20, 'step': 1}), 'frame_width': ('INT', {'default': 512, 'min': 16, 'max': 4096, 'step': 1}), 'frame_height': ('INT', {'default': 512, 'min': 16, 'max': 4096, 'step': 1})}}

    def createmagicmask(self, frames, transitions, depth, distortion, seed, frame_width, frame_height):
        from .magictex import coordinate_grid, random_transform, magic
        rng = np.random.default_rng(seed)
        out = []
        coords = coordinate_grid((frame_width, frame_height))
        frames_per_transition = frames // transitions
        base_params = {'coords': random_transform(coords, rng), 'depth': depth, 'distortion': distortion}
        for t in range(transitions):
            params1 = base_params.copy()
            params2 = base_params.copy()
            params1['coords'] = random_transform(coords, rng)
            params2['coords'] = random_transform(coords, rng)
            for i in range(frames_per_transition):
                alpha = i / frames_per_transition
                params = params1.copy()
                params['coords'] = (1 - alpha) * params1['coords'] + alpha * params2['coords']
                tex = magic(**params)
                dpi = frame_width / 10
                fig = plt.figure(figsize=(10, 10), dpi=dpi)
                ax = fig.add_subplot(111)
                plt.subplots_adjust(left=0, right=1, bottom=0, top=1)
                ax.get_yaxis().set_ticks([])
                ax.get_xaxis().set_ticks([])
                ax.imshow(tex, aspect='auto')
                fig.canvas.draw()
                img = np.array(fig.canvas.renderer._renderer)
                plt.close(fig)
                pil_img = Image.fromarray(img).convert('L')
                mask = torch.tensor(np.array(pil_img)) / 255.0
                out.append(mask)
        return (torch.stack(out, dim=0), 1.0 - torch.stack(out, dim=0))
```