# Documentation
- Class name: BrownNoise
- Category: image/noise
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

The BrownNoise node generates images with brown noise, a type of visual noise that simulates natural variation. It helps create random yet harmonious visual effects, useful for purposes such as visual effects or data augmentation in image processing tasks.

# Input types
## Required
- width
    - The width parameter defines the width of the generated noise image. It is crucial for determining the output image size, thus affecting the overall visual effect.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the height of the noise image. It works with width to determine the overall image size, influencing the final presentation.
    - Comfy dtype: INT
    - Python dtype: int
- value_min
    - The value_min parameter allows setting the minimum intensity of the noise. It provides control over the lower bound of noise values, affecting the overall darkness of the image.
    - Comfy dtype: INT
    - Python dtype: int
- value_max
    - The value_max parameter sets the upper limit of noise intensity. It is important for controlling the brightness and range of noise values in the image.
    - Comfy dtype: INT
    - Python dtype: int
- red_min
    - The red_min parameter specifies the minimum intensity of the red channel in the noise. It influences color balance, biasing the output image toward red tones.
    - Comfy dtype: INT
    - Python dtype: int
- red_max
    - The red_max parameter determines the maximum intensity of the red channel. It is essential for setting the upper bound of red tones in the noise image.
    - Comfy dtype: INT
    - Python dtype: int
- green_min
    - The green_min parameter sets the lower bound of green channel intensity. It affects color composition by allowing more or less green in the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- green_max
    - The green_max parameter defines the upper bound of green channel intensity. It controls the presence of green tones in the noise image.
    - Comfy dtype: INT
    - Python dtype: int
- blue_min
    - The blue_min parameter establishes the minimum value for the blue channel noise. It is key for fine‑tuning blue shadows in the noise image.
    - Comfy dtype: INT
    - Python dtype: int
- blue_max
    - The blue_max parameter sets the maximum value for the blue channel noise. It is important for the overall level of blue saturation in the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed parameter initializes the random number generator, ensuring reproducibility of the noise pattern. It is crucial for obtaining consistent results across runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The IMAGE output provides the generated brown noise image. It is important because it is the primary result of the node operation, containing the visual noise effect.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
```
class BrownNoise:

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
                nr = clamp(int(np.power(np.power(random.randint(lr, mr) / 255, 1 / 3), 1 / 3) * 255), 0, 255)
                ng = clamp(int(np.power(np.power(random.randint(lg, mg) / 255, 1 / 3), 1 / 3) * 255), 0, 255)
                nb = clamp(int(np.power(np.power(random.randint(lb, mb) / 255, 1 / 3), 1 / 3) * 255), 0, 255)
                outimage.putpixel((x, y), (nr, ng, nb))
            step += 1
            pbar.update_absolute(step, ah)
        return conv_pil_tensor(outimage)
```