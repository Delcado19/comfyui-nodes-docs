# Documentation
- Class name: PlasmaNoise
- Category: image/noise
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

The PlasmaNoise node is designed to generate plasma-like noise patterns. It creates a base image using a fractal noise algorithm, then adjusts color channels and clamping values to produce visually rich and diverse output. This node is particularly useful for creating textures or backgrounds with a natural, organic feel.

# Input types
## Required
- width
    - The width parameter defines the width of the generated image. It is critical for determining the overall size of the output and affects the detail and resolution of the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the height of the generated image. It works together with the width to determine the aspect ratio and overall size of the image.
    - Comfy dtype: INT
    - Python dtype: int
- turbulence
    - The turbulence parameter controls the level of detail in the noise pattern. Higher values produce more complex and varied noise, while lower values produce smoother and more uniform patterns.
    - Comfy dtype: FLOAT
    - Python dtype: float
- value_min
    - The value_min parameter allows setting a minimum value for the noise pattern, which can be used to adjust overall brightness or create specific visual effects.
    - Comfy dtype: INT
    - Python dtype: int
- value_max
    - The value_max parameter sets the maximum value for the noise pattern, which can be used to control contrast or achieve desired aesthetic effects.
    - Comfy dtype: INT
    - Python dtype: int
- red_min
    - The red_min parameter specifies the minimum value for the red channel, allowing fine-tuning of color balance and saturation within the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- red_max
    - The red_max parameter determines the maximum value for the red channel, allowing control over the intensity and vibrancy of red tones in the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- green_min
    - The green_min parameter sets the minimum value for the green channel, which is important for achieving the desired color composition and harmony within the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- green_max
    - The green_max parameter controls the maximum value for the green channel, influencing the overall hue of the noise pattern and the prominence of green within it.
    - Comfy dtype: INT
    - Python dtype: int
- blue_min
    - The blue_min parameter defines the minimum value for the blue channel, which can be adjusted to create specific color moods or enhance certain visual aspects of the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- blue_max
    - The blue_max parameter sets the maximum value for the blue channel, which is critical for defining the depth and richness of blue tones in the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed parameter is used to initialize the random number generator, ensuring reproducible results when using the same seed value. This is particularly useful for generating consistent noise patterns across multiple instances.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The IMAGE output provides the plasma noise pattern generated as an image. It is the final result of the node's processing, representing the ultimate visual outcome of the noise generation algorithm.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
```
class PlasmaNoise:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'width': ('INT', {'default': 512, 'min': 128, 'max': 8192, 'step': 8}), 'height': ('INT', {'default': 512, 'min': 128, 'max': 8192, 'step': 8}), 'turbulence': ('FLOAT', {'default': 2.75, 'min': 0.5, 'max': 32, 'step': 0.01}), 'value_min': ('INT', {'default': -1, 'min': -1, 'max': 255, 'step': 1}), 'value_max': ('INT', {'default': -1, 'min': -1, 'max': 255, 'step': 1}), 'red_min': ('INT', {'default': -1, 'min': -1, 'max': 255, 'step': 1}), 'red_max': ('INT', {'default': -1, 'min': -1, 'max': 255, 'step': 1}), 'green_min': ('INT', {'default': -1, 'min': -1, 'max': 255, 'step': 1}), 'green_max': ('INT', {'default': -1, 'min': -1, 'max': 255, 'step': 1}), 'blue_min': ('INT', {'default': -1, 'min': -1, 'max': 255, 'step': 1}), 'blue_max': ('INT', {'default': -1, 'min': -1, 'max': 255, 'step': 1}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'generate_plasma'
    CATEGORY = 'image/noise'

    def generate_plasma(self, width, height, turbulence, value_min, value_max, red_min, red_max, green_min, green_max, blue_min, blue_max, seed):
        w = width
        h = height
        aw = copy.deepcopy(w)
        ah = copy.deepcopy(h)
        outimage = Image.new('RGB', (aw, ah))
        if w >= h:
            h = w
        else:
            w = h
        clamp_v_min = value_min
        clamp_v_max = value_max
        clamp_r_min = red_min
        clamp_r_max = red_max
        clamp_g_min = green_min
        clamp_g_max = green_max
        clamp_b_min = blue_min
        clamp_b_max = blue_max
        roughness = turbulence
        pixmap = []
        random.seed(seed)

        def adjust(xa, ya, x, y, xb, yb):
            if pixmap[x][y] == 0:
                d = math.fabs(xa - xb) + math.fabs(ya - yb)
                v = (pixmap[xa][ya] + pixmap[xb][yb]) / 2.0 + (random.random() - 0.555) * d * roughness
                c = int(math.fabs(v + random.randint(-48, 48)))
                if c < 0:
                    c = 0
                elif c > 255:
                    c = 255
                pixmap[x][y] = c

        def subdivide(x1, y1, x2, y2):
            if not (x2 - x1 < 2.0 and y2 - y1 < 2.0):
                x = int((x1 + x2) / 2.0)
                y = int((y1 + y2) / 2.0)
                adjust(x1, y1, x, y1, x2, y1)
                adjust(x2, y1, x2, y, x2, y2)
                adjust(x1, y2, x, y2, x2, y2)
                adjust(x1, y1, x1, y, x1, y2)
                if pixmap[x][y] == 0:
                    v = int((pixmap[x1][y1] + pixmap[x2][y1] + pixmap[x2][y2] + pixmap[x1][y2]) / 4.0)
                    pixmap[x][y] = v
                subdivide(x1, y1, x, y)
                subdivide(x, y1, x2, y)
                subdivide(x, y, x2, y2)
                subdivide(x1, y, x, y2)
        pbar = comfy.utils.ProgressBar(4)
        step = 0
        pixmap = [[0 for i in range(h)] for j in range(w)]
        pixmap[0][0] = random.randint(0, 255)
        pixmap[w - 1][0] = random.randint(0, 255)
        pixmap[w - 1][h - 1] = random.randint(0, 255)
        pixmap[0][h - 1] = random.randint(0, 255)
        subdivide(0, 0, w - 1, h - 1)
        r = copy.deepcopy(pixmap)
        step += 1
        pbar.update_absolute(step, 4)
        pixmap = [[0 for i in range(h)] for j in range(w)]
        pixmap[0][0] = random.randint(0, 255)
        pixmap[w - 1][0] = random.randint(0, 255)
        pixmap[w - 1][h - 1] = random.randint(0, 255)
        pixmap[0][h - 1] = random.randint(0, 255)
        subdivide(0, 0, w - 1, h - 1)
        g = copy.deepcopy(pixmap)
        step += 1
        pbar.update_absolute(step, 4)
        pixmap = [[0 for i in range(h)] for j in range(w)]
        pixmap[0][0] = random.randint(0, 255)
        pixmap[w - 1][0] = random.randint(0, 255)
        pixmap[w - 1][h - 1] = random.randint(0, 255)
        pixmap[0][h - 1] = random.randint(0, 255)
        subdivide(0, 0, w - 1, h - 1)
        b = copy.deepcopy(pixmap)
        step += 1
        pbar.update_absolute(step, 4)
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
        for y in range(ah):
            for x in range(aw):
                nr = int(remap(r[x][y], 0, 255, lr, mr))
                ng = int(remap(g[x][y], 0, 255, lg, mg))
                nb = int(remap(b[x][y], 0, 255, lb, mb))
                outimage.putpixel((x, y), (nr, ng, nb))
        step += 1
        pbar.update_absolute(step, 4)
        return conv_pil_tensor(outimage)
```