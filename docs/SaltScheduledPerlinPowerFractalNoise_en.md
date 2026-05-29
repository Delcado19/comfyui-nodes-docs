
# Documentation
- Class name: SaltScheduledPerlinPowerFractalNoise
- Category: SALT/Scheduling/Image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is designed to generate complex and visually appealing noise patterns using the Perlin noise algorithm. It skillfully schedules and modifies Perlin noise parameters to produce dynamic, fractal-like visual effects over time or across frames, applicable for audio visualization or other graphical applications.

# Input types
## Required
- batch_size
    - Specifies the number of noise patterns generated in a single batch, affecting the node's output volume and parallel processing efficiency.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - Determines the width of the generated noise patterns, directly affecting the output's spatial resolution and aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Sets the height of the generated noise patterns, affecting the output's spatial resolution and aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int

## Optional
- scale_schedule
    - A schedule for adjusting the scale of noise patterns across different frames or instances, allowing dynamic changes in the visual complexity and detail of the noise.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- octaves_schedule
    - Controls the number of octaves used in the noise generation process, affecting the level of detail and overall complexity of the resulting patterns.
    - Comfy dtype: LIST
    - Python dtype: List[int]
- persistence_schedule
    - Adjusts the persistence parameter across frames, affecting the amplitude of noise octaves, thereby influencing the visual contrast of the patterns.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- lacunarity_schedule
    - Modifies the lacunarity parameter over time, affecting the frequency of noise details, contributing to the fractal-like appearance of the output.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- exponent_schedule
    - A schedule for the exponent parameter, affecting the intensity and contrast of noise patterns, allowing subtle adjustments to the visual output.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- seed_schedule
    - Determines the seed value for noise generation, ensuring variability and uniqueness of patterns produced across different instances or frames.
    - Comfy dtype: LIST
    - Python dtype: List[int]
- clamp_min_schedule
    - Sets the minimum clamp value for the noise output, enabling control of the lower bound of noise intensity, ensuring consistency in the visual range of the patterns.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- clamp_max_schedule
    - Defines the maximum clamp value for the noise output, allowing control of the upper bound of noise intensity, ensuring consistency in the visual range of the patterns.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- device
    - Specifies the computing device (CPU or GPU) for executing the noise generation process, affecting performance and efficiency.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- images
    - The generated noise patterns as a tensor, available for further processing or visualization.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- batch_size
    - The number of generated noise patterns, corresponding to the input batch size.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltScheduledPerlinPowerFractalNoise:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "batch_size": ("INT", {"min": 1, "max": 4096}),
                "width": ("INT", {"default": 256, "min": 64, "max": MAX_RESOLUTION}),
                "height": ("INT", {"default": 256, "min": 64, "max": MAX_RESOLUTION}),
            },
            "optional": {
                "scale_schedule": ("LIST",),
                "octaves_schedule": ("LIST",),
                "persistence_schedule": ("LIST",),
                "lacunarity_schedule": ("LIST",),
                "exponent_schedule": ("LIST",),
                "seed_schedule": ("LIST",),
                "clamp_min_schedule": ("LIST",),
                "clamp_max_schedule": ("LIST",),
                "device": (["cuda", "cpu"],),
            }
        }
    
    RETURN_TYPES = ("IMAGE", "INT")
    RETURN_NAMES = ("images", "batch_size")

    FUNCTION = "generate"
    CATEGORY = "SALT/Scheduling/Image"

    def generate(self, batch_size, width, height, scale_schedule=[1.0], octaves_schedule=[4], persistence_schedule=[0.5], lacunarity_schedule=[2.0], exponent_schedule=[1.0], seed_schedule=[0], clamp_min_schedule=[-0.5], clamp_max_schedule=[1.5], device="cuda"):
        octaves_schedule = [int(octave) for octave in octaves_schedule]
        ppfn = PerlinPowerFractalNoise(
            width, height, 
            scale=scale_schedule, 
            octaves=octaves_schedule, 
            persistence=persistence_schedule, 
            lacunarity=lacunarity_schedule, 
            exponent=exponent_schedule, 
            seeds=seed_schedule, 
            clamp_min=clamp_min_schedule, 
            clamp_max=clamp_max_schedule, 
            batch_size=batch_size, 
            device=device
        )
        noise_tensor = ppfn.forward()
        return (noise_tensor, batch_size)

```
