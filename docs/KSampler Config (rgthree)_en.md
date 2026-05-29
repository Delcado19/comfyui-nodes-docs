
# Documentation
- Class name: KSampler Config (rgthree)
- Category: rgthree
- Output node: False

The KSampler Config node is a component in the rgthree framework, dedicated to configuring sampling parameters in the image generation process. It focuses on sampling steps, refinement options, and the selection of samplers and schedulers. This node abstracts the complex configuration of various parameters during sampling, enabling users to more easily customize their image generation workflow.

# Input types
## Required
- steps_total
- Specify the total number of steps in the sampling process, allowing users to control the depth of generation.
    - Comfy dtype: INT
    - Python dtype: int
- refiner_step
- Determine the step at which refinement begins, giving users finer control over image refinement.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
- Control the conditioning factor, affecting guidance and quality of the generated image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
- Choose a specific sampler used during generation, providing flexibility in sampling strategy selection.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
- Select a scheduler that controls the sampling process, allowing different pacing and progression strategies.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- STEPS
- Total number of steps configured for the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- REFINER_STEP
- Step at which refinement begins during sampling.
    - Comfy dtype: INT
    - Python dtype: int
- CFG
- Conditioning factor set for guiding image generation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- SAMPLER
- Name of the sampler chosen for the generation process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- SCHEDULER
- Scheduler selected to control the progress of the sampling process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RgthreeKSamplerConfig:
  """Some basic config stuff I started using for SDXL, but useful in other spots too."""

  NAME = get_name('KSampler Config')
  CATEGORY = get_category()

  @classmethod
  def INPUT_TYPES(cls):  # pylint: disable = invalid-name, missing-function-docstring
    return {
      "required": {
        "steps_total": ("INT", {
          "default": 30,
          "min": 1,
          "max": MAX_RESOLUTION,
          "step": 1,
        }),
        "refiner_step": ("INT", {
          "default": 24,
          "min": 1,
          "max": MAX_RESOLUTION,
          "step": 1,
        }),
        "cfg": ("FLOAT", {
          "default": 8.0,
          "min": 0.0,
          "max": 100.0,
          "step": 0.5,
        }),
        "sampler_name": (comfy.samplers.KSampler.SAMPLERS,),
        "scheduler": (comfy.samplers.KSampler.SCHEDULERS,),
        #"refiner_ascore_pos": ("FLOAT", {"default": 6.0, "min": 0.0, "max": 1000.0, "step": 0.01}),
        #"refiner_ascore_neg": ("FLOAT", {"default": 6.0, "min": 0.0, "max": 1000.0, "step": 0.01}),
      },
    }

  RETURN_TYPES = ("INT", "INT", "FLOAT", comfy.samplers.KSampler.SAMPLERS,
                  comfy.samplers.KSampler.SCHEDULERS)
  RETURN_NAMES = ("STEPS", "REFINER_STEP", "CFG", "SAMPLER", "SCHEDULER")
  FUNCTION = "main"

  def main(self, steps_total, refiner_step, cfg, sampler_name, scheduler):
    """main"""
    return (
      steps_total,
      refiner_step,
      cfg,
      sampler_name,
      scheduler,
    )

```
