
# Documentation
- Class name: SaltScheduledVoronoiNoise
- Category: SALT/Scheduling/Image
- Output node: False

The SaltScheduledVoronoiNoise node is used to generate visual patterns based on Voronoi noise. It allows scheduling various parameters over time, such as scale, detail, and randomness, enabling dynamic and evolving visual effects that can be customized based on audio or other time-varying inputs.

# Input types
## Required
- batch_size
    - Specifies the number of patterns generated in one execution, allowing batch processing of noise generation.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - Determines the width of the generated noise pattern, affecting spatial resolution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Sets the height of the generated noise pattern, affecting vertical resolution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- distance_metric
    - Defines the metric used to calculate distances in the Voronoi diagram, affecting the shape and distribution of cells.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- x_schedule
    - Schedule for the x-axis position, enabling dynamic movement or variation of the noise pattern over time.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- y_schedule
    - Schedule for the y-axis position, allowing the noise pattern to move or vary vertically over time.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- scale_schedule
    - Controls the scale of the noise pattern at different points in time, achieving zoom effects.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- detail_schedule
    - Adjusts the detail level of the noise pattern over time, affecting complexity and texture.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- randomness_schedule
    - Modifies the randomness of the noise pattern over time, allowing changes in the unpredictability of the pattern.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- seed_schedule
    - Schedule for the seed value, enabling different noise patterns to be generated at different times.
    - Comfy dtype: LIST
    - Python dtype: List[int]
- device
    - Specifies the computing device (CPU or GPU) for executing the noise generation process, affecting performance and capability.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- images
    - The generated Voronoi noise pattern, output as an image batch.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- batch_size
    - The number of generated patterns, confirming the processed batch size.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltScheduledVoronoiNoise:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "batch_size": ("INT", {"min": 1, "max": 4096}),
                "width": ("INT", {"default": 64, "min": 64, "max": MAX_RESOLUTION}),
                "height": ("INT", {"default": 64, "min": 64, "max": MAX_RESOLUTION}),
            }, 
            "optional": {
                "distance_metric": (["euclidean", "manhattan", "chebyshev", "minkowski"],),
                "x_schedule": ("LIST",),
                "y_schedule": ("LIST",),
                "scale_schedule": ("LIST",),
                "detail_schedule": ("LIST",),
                "randomness_schedule": ("LIST",),
                "seed_schedule": ("LIST", ),
                "device": (["cuda", "cpu"],),
            }
        }
    
    RETURN_TYPES = ("IMAGE", "INT")
    RETURN_NAMES = ("images", "batch_size")

    FUNCTION = "generate"
    CATEGORY = "SALT/Scheduling/Image"

    def generate(self, batch_size, width, height, distance_metric="euclidean", x_schedule=[0], y_schedule=[0], z_schedule=[0], scale_schedule=[1.0], detail_schedule=[100], randomness_schedule=[1], seed_schedule=[0], device="cuda"):
        voronoi = VoronoiNoise(width=width, height=height, scale=scale_schedule, detail=detail_schedule, seed=seed_schedule, 
                            X=x_schedule, Y=y_schedule, 
                            randomness=randomness_schedule, distance_metric=distance_metric, batch_size=batch_size, device=device)
        voronoi = voronoi.to(device)
        tensors = voronoi()
        return(tensors, batch_size)

```
