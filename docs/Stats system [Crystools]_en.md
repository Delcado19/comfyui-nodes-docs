
# Documentation
- Class name: Stats system [Crystools]
- Category: crystools 🪛/Utils
- Output node: False

This node aims to collect and record system statistics, providing insights into the current state of system hardware resources such as CPU usage, memory utilization, etc. It serves as a diagnostic tool for monitoring and debugging system performance.

# Input types
## Required
- latent
    - The 'latent' input acts as a passthrough parameter, allowing the node to return system statistics while keeping it unchanged. This feature is useful when integrating system monitoring without disrupting the data flow in the pipeline.
    - Comfy dtype: LATENT
    - Python dtype: tuple

# Output types
- latent
    - The 'latent' output parameter returns the original 'latent' input, allowing the node to seamlessly integrate into data processing pipelines without altering the data flow.
    - Comfy dtype: LATENT
    - Python dtype: tuple
- ui
    - The 'ui' output parameter provides a user interface element displaying the recorded system statistics, offering a convenient way to visualize the current state of the system.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CUtilsStatSystem:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "latent": ("LATENT",),
            }
        }

    CATEGORY = CATEGORY.MAIN.value + CATEGORY.UTILS.value
    RETURN_TYPES = ("LATENT",)
    RETURN_NAMES = ("latent",)

    FUNCTION = "execute"

    def execute(self, latent):
        log = "Samples Passthrough:\n"
        for stat in get_system_stats():
            log += stat + "\n"

        logger.debug(log)

        return {"ui": {"text": [log]}, "result": (latent,)}

```
