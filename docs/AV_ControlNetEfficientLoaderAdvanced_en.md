
# Documentation
- Class name: AV_ControlNetEfficientLoaderAdvanced
- Category: Art Venture/Loaders
- Output node: False

The AV_ControlNetEfficientLoaderAdvanced node is an advanced version of the ControlNet loader, designed to efficiently load and apply ControlNet configurations for enhanced image processing and generation tasks. It extends the functionality of the basic loader, providing more complex control and optimization options for handling and applying ControlNet models.

# Input types
## Required
- control_net_name
    - Specifies the name of the ControlNet to load. This parameter is crucial for identifying the ControlNet model to apply, directly affecting the outcome of the image processing or generation process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- positive
    - The positive conditioning input for the ControlNet, representing the desired attributes or features to enhance or preserve in the image.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict]]
- negative
    - The negative conditioning input for the ControlNet, representing the attributes or features to diminish or remove in the image.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict]]
- image
    - The image to be processed by the ControlNet, serving as the foundation for applying conditioning effects.
    - Comfy dtype: IMAGE
    - Python dtype: Any
- strength
    - Determines the strength of the ControlNet's influence on the image, allowing fine-tuned control over the processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - Specifies the starting percentage for effect application, enabling phased or progressive application of the ControlNet.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - Specifies the ending percentage for effect application, allowing controlled termination of the ControlNet influence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- preprocessor
    - Selects the processor for preprocessing the image before applying the ControlNet, affecting the final result.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Optional
- control_net_override
    - Allows overriding the selected ControlNet model. This parameter provides the flexibility to dynamically choose different ControlNet models, potentially enhancing the node's adaptability to various scenarios.
    - Comfy dtype: STRING
    - Python dtype: str
- timestep_keyframe
    - Defines the specific timestep or keyframe for ControlNet application. This parameter enables precise timing control over the ControlNet effect, allowing more targeted and effective image processing.
    - Comfy dtype: TIMESTEP_KEYFRAME
    - Python dtype: Optional[str]
- resolution
    - Defines the resolution of the image to be processed, affecting the detail and quality of the ControlNet application.
    - Comfy dtype: INT
    - Python dtype: int
- enabled
    - Enables or disables the application of the ControlNet, providing a mechanism to bypass processing when necessary.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- positive
    - The modified positive conditioning after ControlNet application, reflecting the enhanced or preserved attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict]]
- negative
    - The modified negative conditioning after ControlNet application, reflecting the diminished or removed attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class AVControlNetEfficientLoaderAdvanced(ControlNetApplyAdvanced):
    controlnets = folder_paths.get_filename_list("controlnet")
    preprocessors = list(control_net_preprocessors.keys())

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "control_net_name": (["None"] + s.controlnets,),
                "positive": ("CONDITIONING",),
                "negative": ("CONDITIONING",),
                "image": ("IMAGE",),
                "strength": (
                    "FLOAT",
                    {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.01},
                ),
                "start_percent": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.001}),
                "end_percent": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.001}),
                "preprocessor": (["None"] + s.preprocessors,),
            },
            "optional": {
                "control_net_override": ("STRING", {"default": "None"}),
                "timestep_keyframe": ("TIMESTEP_KEYFRAME",),
                "resolution": ("INT", {"default": 512, "min": 64, "max": 2048, "step": 64}),
                "enabled": ("BOOLEAN", {"default": True}),
            },
        }

    RETURN_TYPES = ("CONDITIONING", "CONDITIONING")
    RETURN_NAMES = ("positive", "negative")
    FUNCTION = "load_controlnet"
    CATEGORY = "Art Venture/Loaders"

    def load_controlnet(
        self,
        control_net_name,
        positive,
        negative,
        image,
        strength,
        start_percent,
        end_percent,
        preprocessor,
        control_net_override="None",
        timestep_keyframe=None,
        resolution=512,
        enabled=True,
    ):
        if not enabled:
            return (positive, negative)

        control_net = load_controlnet(control_net_name, control_net_override, timestep_keyframe=timestep_keyframe)
        if control_net is None:
            return (positive, negative)

        image = apply_preprocessor(image, preprocessor, resolution=resolution)

        return super().apply_controlnet(positive, negative, control_net, image, strength, start_percent, end_percent)

```
