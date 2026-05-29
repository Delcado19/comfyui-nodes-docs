# Documentation
- Class name: RandNoise
- Category: image/noise
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

The RandNoise node is designed to generate random noise images. It operates by creating an image of specified dimensions and applying random colors within a user-defined range to each pixel. The node's functionality centers on generating noise patterns, which can be used for various image processing tasks such as data augmentation or noise filtering.

# Input types
## Required
- width
    - The width parameter specifies the width of the generated noise image. It is critical as it determines the horizontal resolution of the output image, affecting the overall size of the image and the level of detail in the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the vertical dimension of the noise image. It is important for establishing the vertical resolution and, together with the width, defines the overall size of the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- value_min
    - The value_min parameter allows setting the minimum value for noise intensity. It affects the lower bound of random color values assigned to each pixel, thereby influencing the overall brightness of the noise image.
    - Comfy dtype: INT
    - Python dtype: int
- value_max
    - The value_max parameter sets the upper limit of noise intensity. It works together with value_min to define the range of random values that can be assigned to each pixel, forming the dynamic range of the noise.
    - Comfy dtype: INT
    - Python dtype: int
- red_min
    - The red_min parameter specifies the minimum value for the red channel in the noise image. It is important for controlling the color intensity of red in the noise and contributes to the final color composition of the image.
    - Comfy dtype: INT
    - Python dtype: int
- red_max
    - The red_max parameter sets the maximum value for the red channel. Together with red_min, it determines the range of red color values in the noise, affecting the overall hue of the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- green_min
    - The green_min parameter establishes the minimum value for the green channel. It plays a role in determining the intensity of green color in the noise, influencing the color balance of the image.
    - Comfy dtype: INT
    - Python dtype: int
- green_max
    - The green_max parameter defines the maximum value for the green channel. Together with green_min, it sets the range of green channel color values, which affects the vibrancy of green in the noise image.
    - Comfy dtype: INT
    - Python dtype: int
- blue_min
    - The blue_min parameter sets the minimum value for the blue channel in the noise image. It is critical for controlling the intensity of blue color and contributes to the final color scheme of the generated noise.
    - Comfy dtype: INT
    - Python dtype: int
- blue_max
    - The blue_max parameter specifies the maximum value for the blue channel. Together with blue_min, it determines the range of blue color values in the noise, affecting the overall color composition of the image.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed parameter is used to initialize the random number generator, ensuring reproducibility of the noise pattern. It is important when the same noise image needs to be generated across different runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The output of the RandNoise node is an image containing random noise. This image can be used for various purposes, such as adding noisy data to machine learning, testing image processing algorithms, or creating visual effects.
    - Comfy dtype: IMAGE
    - Python dtype: Tuple[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class RandNoise:

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
                nr = random.randint(lr, mr)
                ng = random.randint(lg, mg)
                nb = random.randint(lb, mb)
                outimage.putpixel((x, y), (nr, ng, nb))
            step += 1
            pbar.update_absolute(step, ah)
        return conv_pil_tensor(outimage)
```