# Documentation
- Class name: PinkNoise
- Category: image/noise
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

The PinkNoise node is designed to generate images with a noise pattern that simulates the pink noise spectrum based on specified dimensions and color ranges. This node is particularly suitable for creating visual content with natural, non-uniform pixel intensity distributions, applicable in various scenarios such as image processing, computer graphics, and machine learning data augmentation.

# Input types
## Required
- width
    - Width determines the horizontal dimension of the output image, which is crucial for defining the canvas on which the noise pattern will be generated. It directly affects the overall size and resolution of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height sets the vertical dimension of the output image, working together with the width parameter to determine the resolution and overall size of the image. It is an important factor in determining the scale of the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - Seed value is used to initialize the random number generator, ensuring that the noise pattern is reproducible and consistent across different runs of the node. This parameter is essential for maintaining the reliability and predictability of the noise generation process.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- value_min
    - Value minimum sets the lower bound for the intensity values of the generated noise, allowing control over the minimum brightness or darkness of the noise pattern. This parameter affects the overall visual appearance of the noise and helps achieve the desired aesthetic or effect.
    - Comfy dtype: INT
    - Python dtype: int
- value_max
    - Value maximum sets the upper bound for the intensity values of the noise, ensuring that the noise pattern does not exceed a certain brightness level. This parameter is crucial in achieving a balanced and controlled noise distribution.
    - Comfy dtype: INT
    - Python dtype: int
- red_min
    - Red minimum specifies the minimum allowed value for the red channel in the noise pattern, allowing fine-tuning of the color spectrum and ensuring that the generated noise meets specific color requirements.
    - Comfy dtype: INT
    - Python dtype: int
- red_max
    - Red maximum sets the maximum value for the red channel, controlling the upper limit of red hues in the noise pattern and contributing to overall color balance.
    - Comfy dtype: INT
    - Python dtype: int
- green_min
    - Green minimum defines the minimum value for the green channel in the noise, allowing precise control over the green component and ensuring the final image matches the desired color configuration.
    - Comfy dtype: INT
    - Python dtype: int
- green_max
    - Green maximum sets the maximum value for the green channel, ensuring that green hues in the noise pattern do not exceed a certain threshold and contributing to overall color harmony.
    - Comfy dtype: INT
    - Python dtype: int
- blue_min
    - Blue minimum sets the minimum value for the blue channel, allowing users to control the presence of blue in the noise pattern and achieve specific visual effects.
    - Comfy dtype: INT
    - Python dtype: int
- blue_max
    - Blue maximum defines the maximum value for the blue channel, ensuring that blue hues in the noise pattern are within the desired range and contributing to the overall color scheme.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - Output is an image with a pink noise pattern generated according to the specified parameters. This image can be used as a texture, background, or input for further processing in various applications.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
```
class PinkNoise:

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
                nr = clamp(int(np.power(random.randint(lr, mr) / 255, 1 / 3) * 255), 0, 255)
                ng = clamp(int(np.power(random.randint(lg, mg) / 255, 1 / 3) * 255), 0, 255)
                nb = clamp(int(np.power(random.randint(lb, mb) / 255, 1 / 3) * 255), 0, 255)
                outimage.putpixel((x, y), (nr, ng, nb))
            step += 1
            pbar.update_absolute(step, ah)
        return conv_pil_tensor(outimage)
```