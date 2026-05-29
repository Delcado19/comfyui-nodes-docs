# Documentation
- Class name: GreyNoise
- Category: image/noise
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

The GreyNoise class generates noise images on demand and provides customizable parameters to support various image processing tasks and noise analysis.

# Input types
## Required
- width
- Width determines the horizontal dimension of the generated noise image and significantly affects the overall canvas for noise generation.
    - Comfy dtype: INT
    - Python dtype: int
- height
- Height sets the vertical dimension of the noise image, which is crucial for defining the image's structure and layout.
    - Comfy dtype: INT
    - Python dtype: int
- seed
- Seed initializes the random number generator, ensuring repeatable noise patterns for consistent experimental results.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- value_min
- Minimum value sets the lower bound of noise intensity, affecting the smallest possible noise level in the image.
    - Comfy dtype: INT
    - Python dtype: int
- value_max
- Maximum value sets the upper bound of noise intensity, controlling the maximum noise level to achieve the desired visual effect.
    - Comfy dtype: INT
    - Python dtype: int
- red_min
- Minimum red specifies the lower bound for the red channel, influencing the overall tone and color distribution in the noise image.
    - Comfy dtype: INT
    - Python dtype: int
- red_max
- Maximum red defines the upper bound for the red channel, establishing the color range limit and contributing to the final appearance.
    - Comfy dtype: INT
    - Python dtype: int
- green_min
- Minimum green sets the lower bound for the green channel, affecting mid-tone hues and overall color balance.
    - Comfy dtype: INT
    - Python dtype: int
- green_max
- Maximum green sets the upper bound for the green channel, controlling the upper limit of mid-tone hues.
    - Comfy dtype: INT
    - Python dtype: int
- blue_min
- Minimum blue specifies the lower bound for the blue channel, influencing the overall coolness or warmth of the noise image.
    - Comfy dtype: INT
    - Python dtype: int
- blue_max
- Maximum blue defines the upper bound for the blue channel, determining the upper limit of coolness or warmth in the final image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
- Output is a noise image reflecting the input parameters, serving as a visual representation of the on-demand generated noise.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
```
class GreyNoise:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'width': ('INT', {'default': 512, 'min': 128, 'max': 8192, 'step': 8}), 'height': ('INT', {'default': 512, 'min': 128, 'max': 8192, 'step': 8}), 'value_min': ('INT', {'default': -1, 'min': -1, 'max': 255, 'step': 1}), 'value_max': ('INT', {'default': -1, 'min': -1, 'max': 255, 'step': 1}), 'red_min': ('INT', {'default': -1, 'min': -1, 'max': 255, 'step': 1}), 'red_max': ('INT', {'default': -1, 'min': -1, 'max': 255, 'step': 1}), 'green_min': ('INT', {'default': -1, 'min': -1, 'max': 255, 'step': 1}), 'green_max': ('INT', {'default': -1, 'min': -1, 'max': 255, 'step': 1}), 'blue_min': ('INT', {'default': -1, 'min': -1, 'max': 255, 'step': 1}), 'blue_max': ('INT', {'default': -1, 'min': -1, 'max': 255, 'step': 1}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'generate_noise'
    CATEGORY = 'image/noise'

    def generate_noise(self, width, height, value_min, value_max, red_min, red_max, green_min, green_max, blue_min, blue_max, seed):
        w = width
        h = height
        aw = copy.deepcopy(w)
        ah = copy.deepcopy(h)
        outimage = Image.new('RGB', (aw, ah))
        random.seed(seed)
        clamp_v_min = value_min
        clamp_v_max = value_max
        clamp_r_min = red_min
        clamp_r_max = red_max
        clamp_g_min = green_min
        clamp_g_max = green_max
        clamp_b_min = blue_min
        clamp_b_max = blue_max
        lv = 0
        mv = 0
        if clamp_v_min == -1:
            lv = 0
        else:
            lv = clamp_v_min
        if clamp_v_max == -1:
            mv = 255
        else:
            mv = clamp_v_max
        lr = 0
        mr = 0
        if clamp_r_min == -1:
            lr = lv
        else:
            lr = clamp_r_min
        if clamp_r_max == -1:
            mr = mv
        else:
            mr = clamp_r_max
        lg = 0
        mg = 0
        if clamp_g_min == -1:
            lg = lv
        else:
            lg = clamp_g_min
        if clamp_g_max == -1:
            mg = mv
        else:
            mg = clamp_g_max
        lb = 0
        mb = 0
        if clamp_b_min == -1:
            lb = lv
        else:
            lb = clamp_b_min
        if clamp_b_max == -1:
            mb = mv
        else:
            mb = clamp_b_max
        pbar = comfy.utils.ProgressBar(ah)
        step = 0
        for y in range(ah):
            for x in range(aw):
                nv = random.randint(lv, mv)
                nr = int(remap(nv, lv, mv, lr, mr))
                ng = int(remap(nv, lv, mv, lg, mg))
                nb = int(remap(nv, lv, mv, lb, mb))
                outimage.putpixel((x, y), (nr, ng, nb))
            step += 1
            pbar.update_absolute(step, ah)
        return conv_pil_tensor(outimage)
```