
# Documentation
- Class name: AV_ControlNetEfficientStacker
- Category: Art Venture/Loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AV_ControlNetEfficientStacker node aims to simplify the integration and management of control networks in image processing workflows. By allowing dynamic selection based on predefined criteria, applying preprocessing steps, and adjusting control network strength and resolution, it achieves efficient stacking of control networks, thereby enhancing the flexibility and effectiveness of image processing tasks.

# Input types
## Required
- control_net_name
    - Specify the name of the control network to use, including options that automatically select based on model version. This parameter is crucial for determining the appropriate control network and image preprocessing requirements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- image
    - The input image to be processed. This parameter is essential as it serves as the basis for applying the control network transformation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- strength
    - Define the intensity of the control network's effect on the image, allowing fine‑tuned adjustments of image attributes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - Specify the starting percentage of the control network effect, allowing it to be applied to the image gradually.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - Specify the ending percentage of the control network effect, enabling precise control over the attenuation of the network's influence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- preprocessor
    - Specify the preprocessing method to apply to the image before the control network, ensuring the image is in the optimal format for operation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- cnet_stack
    - Optional control network stack. This allows multiple control networks to be layered for complex image transformations.
    - Comfy dtype: CONTROL_NET_STACK
    - Python dtype: Optional[List[Tuple[Any]]]
- control_net_override
    - Allow manual overriding of the selected control network, providing flexibility in control network selection.
    - Comfy dtype: STRING
    - Python dtype: str
- timestep_keyframe
    - Optionally specify keyframes for the control network, enabling temporal control over the image processing workflow.
    - Comfy dtype: TIMESTEP_KEYFRAME
    - Python dtype: Optional[str]
- resolution
    - Set the resolution for image processing, allowing control over the level of detail in the output image.
    - Comfy dtype: INT
    - Python dtype: int
- enabled
    - Flag to enable or disable control network processing, offering a simple way to bypass the application of the control network.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- CNET_STACK
    - Comfy dtype: CONTROL_NET_STACK
    - This output represents the processed control network stack, which can be used in subsequent image processing steps.
    - Python dtype: unknown


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class AVControlNetEfficientStacker:
    controlnets = folder_paths.get_filename_list("controlnet")
    preprocessors = list(control_net_preprocessors.keys())

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "control_net_name": (["None", "Auto: sd15", "Auto: sdxl", "Auto: sdxl_t2i"] + s.controlnets,),
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
                "cnet_stack": ("CONTROL_NET_STACK",),
                "control_net_override": ("STRING", {"default": "None"}),
                "timestep_keyframe": ("TIMESTEP_KEYFRAME",),
                "resolution": ("INT", {"default": 512, "min": 64, "max": 2048, "step": 64}),
                "enabled": ("BOOLEAN", {"default": True}),
            },
        }

    RETURN_TYPES = ("CONTROL_NET_STACK",)
    RETURN_NAMES = ("CNET_STACK",)
    FUNCTION = "control_net_stacker"
    CATEGORY = "Art Venture/Loaders"

    def control_net_stacker(
        self,
        control_net_name: str,
        image,
        strength,
        start_percent,
        end_percent,
        preprocessor,
        cnet_stack=None,
        control_net_override="None",
        timestep_keyframe=None,
        resolution=512,
        enabled=True,
    ):
        if not enabled:
            return (cnet_stack,)

        # If control_net_stack is None, initialize as an empty list
        if cnet_stack is None:
            cnet_stack = []

        if control_net_name.startswith("Auto: "):
            assert preprocessor != "None", "preprocessor must be set when using Auto mode"

            sd_version = control_net_name[len("Auto: ") :]
            control_net_name = detect_controlnet(preprocessor, sd_version)

        control_net = load_controlnet(control_net_name, control_net_override, timestep_keyframe=timestep_keyframe)

        # Extend the control_net_stack with the new tuple
        if control_net is not None:
            image = apply_preprocessor(image, preprocessor, resolution=resolution)
            cnet_stack.extend([(control_net, image, strength, start_percent, end_percent)])

        return (cnet_stack,)

```
