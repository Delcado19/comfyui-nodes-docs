
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
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
