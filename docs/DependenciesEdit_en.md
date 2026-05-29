
# Documentation
- Class name: DependenciesEdit
- Category: Art Venture/Utils
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The DependenciesEdit node aims to modify and update the dependencies required for the art generation process. It allows customizing various components such as VAE models, checkpoints, CLIP models, etc., based on the provided inputs. By adjusting the underlying dependencies, this node plays a key role in tailoring the art generation pipeline to specific needs.

# Input types
## Required
- dependencies
    - The tuple containing the current set of dependencies, which this node will modify based on other input parameters. It is the core input that determines the starting point for any modifications.
    - Comfy dtype: DEPENDENCIES
    - Python dtype: Tuple

## Optional
- ckpt_name
    - Determines the checkpoint name for the model, which can be selected from available checkpoints or specified as a custom checkpoint.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- vae_name
    - Specifies the name of the VAE model to use, allowing selection from predefined options or custom models.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- clip
    - Defines the CLIP model to use, providing flexibility in choosing a model suitable for the task.
    - Comfy dtype: CLIP
    - Python dtype: Optional[str]
- clip_skip
    - Sets the number of layers to skip in the CLIP model, optimizing performance or accuracy as needed.
    - Comfy dtype: INT
    - Python dtype: int
- positive
    - The positive prompt used to influence the generation process, enhancing creative output.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The negative prompt used to steer generation away from undesired directions, optimizing the outcome.
    - Comfy dtype: STRING
    - Python dtype: str
- lora_stack
    - Specifies the LoRA stack to apply, allowing advanced model adaptation and fine-tuning.
    - Comfy dtype: LORA_STACK
    - Python dtype: Optional[Tuple]
- cnet_stack
    - Determines the ControlNet stack to use, enabling precise control over the generation process.
    - Comfy dtype: CONTROL_NET_STACK
    - Python dtype: Optional[Tuple]

# Output types
- dependencies
    - Reflects the modified set of dependencies after being updated based on the input parameters.
    - Comfy dtype: DEPENDENCIES
    - Python dtype: Tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class UtilDependenciesEdit:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "dependencies": ("DEPENDENCIES",),
            },
            "optional": {
                "ckpt_name": (
                    [
                        "Original",
                    ]
                    + folder_paths.get_filename_list("checkpoints"),
                ),
                "vae_name": (["Original", "Baked VAE"] + folder_paths.get_filename_list("vae"),),
                "clip": ("CLIP",),
                "clip_skip": (
                    "INT",
                    {"default": 0, "min": -24, "max": 0, "step": 1},
                ),
                "positive": ("STRING", {"default": "Original", "multiline": True}),
                "negative": ("STRING", {"default": "Original", "multiline": True}),
                "lora_stack": ("LORA_STACK",),
                "cnet_stack": ("CONTROL_NET_STACK",),
            },
        }

    RETURN_TYPES = ("DEPENDENCIES",)
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "edit_dependencies"

    def edit_dependencies(
        self,
        dependencies: Tuple,
        vae_name="Original",
        ckpt_name="Original",
        clip=None,
        clip_skip=0,
        positive="Original",
        negative="Original",
        lora_stack=None,
        cnet_stack=None,
    ):
        (
            _vae_name,
            _ckpt_name,
            _clip,
            _clip_skip,
            _positive_prompt,
            _negative_prompt,
            _lora_stack,
            _cnet_stack,
        ) = dependencies

        if vae_name != "Original":
            _vae_name = vae_name
        if ckpt_name != "Original":
            _ckpt_name = ckpt_name
        if clip is not None:
            _clip = clip
        if clip_skip < 0:
            _clip_skip = clip_skip
        if positive != "Original":
            _positive_prompt = positive
        if negative != "Original":
            _negative_prompt = negative
        if lora_stack is not None:
            _lora_stack = lora_stack
        if cnet_stack is not None:
            _cnet_stack = cnet_stack

        dependencies = (
            _vae_name,
            _ckpt_name,
            _clip,
            _clip_skip,
            _positive_prompt,
            _negative_prompt,
            _lora_stack,
            _cnet_stack,
        )

        print("Dependencies:", dependencies)

        return (dependencies,)

```
