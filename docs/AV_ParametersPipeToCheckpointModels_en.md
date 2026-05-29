
# Documentation
- Class name: `AV_ParametersPipeToCheckpointModels`
- Category: `Art Venture/Parameters`
- Output node: `False`

The AV_ParametersPipeToCheckpointModels node is designed to convert a set of parameters encapsulated in a pipeline structure into specific model checkpoint names and configurations. It serves as a bridge between abstract parameter definitions and concrete model instantiation, facilitating dynamic selection and configuration of models based on the provided parameters.

# Input types
## Required
- pipe
    - The pipe parameter acts as a container for model-related parameters, including checkpoint name, VAE name, and upsampler name. It plays a crucial role in determining which specific model and configuration to instantiate based on the encapsulated parameters.
    - Comfy dtype: PIPE
    - Python dtype: Dict

# Output types
- pipe
    - Returns the updated pipe structure, now including the names and configurations of the model checkpoint, VAE, and upsampler parsed from the input parameters.
    - Comfy dtype: PIPE
    - Python dtype: Dict
- ckpt_name
    - The primary checkpoint model name derived from the input parameters.
    - Comfy dtype: CHECKPOINT_NAME
    - Python dtype: str
- secondary_ckpt_name
    - The secondary checkpoint model name derived from the input parameters.
    - Comfy dtype: CHECKPOINT_NAME
    - Python dtype: str
- vae_name
    - The VAE model name derived from the input parameters.
    - Comfy dtype: VAE_NAME
    - Python dtype: str
- upscaler_name
    - The primary upsampler model name derived from the input parameters.
    - Comfy dtype: UPSCALER_NAME
    - Python dtype: str
- secondary_upscaler_name
    - The secondary upsampler model name derived from the input parameters.
    - Comfy dtype: UPSCALER_NAME
    - Python dtype: str
- lora_1_name
    - The first Lora model name derived from the input parameters.
    - Comfy dtype: LORA_NAME
    - Python dtype: str
- lora_2_name
    - The second Lora model name derived from the input parameters.
    - Comfy dtype: LORA_NAME
    - Python dtype: str
- lora_3_name
    - The third Lora model name derived from the input parameters.
    - Comfy dtype: LORA_NAME
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class AVParametersPipeToCheckpointModels:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "pipe": ("PIPE",),
            },
        }

    RETURN_TYPES = (
        "PIPE",
        "CHECKPOINT_NAME",
        "CHECKPOINT_NAME",
        "VAE_NAME",
        "UPSCALER_NAME",
        "UPSCALER_NAME",
        "LORA_NAME",
        "LORA_NAME",
        "LORA_NAME",
    )
    RETURN_NAMES = (
        "pipe",
        "ckpt_name",
        "secondary_ckpt_name",
        "vae_name",
        "upscaler_name",
        "secondary_upscaler_name",
        "lora_1_name",
        "lora_2_name",
        "lora_3_name",
    )
    CATEGORY = "Art Venture/Parameters"
    FUNCTION = "parameter_pipe_to_checkpoint_models"

    def parameter_pipe_to_checkpoint_models(self, pipe: Dict = {}):
        ckpt_name = pipe.get("ckpt_name", None)
        secondary_ckpt_name = pipe.get("secondary_ckpt_name", None)
        vae_name = pipe.get("vae_name", None)
        upscaler_name = pipe.get("upscaler_name", None)
        secondary_upscaler_name = pipe.get("secondary_upscaler_name", None)
        lora_1_name = pipe.get("lora_1_name", None)
        lora_2_name = pipe.get("lora_2_name", None)
        lora_3_name = pipe.get("lora_3_name", None)

        return (
            pipe,
            ckpt_name,
            secondary_ckpt_name,
            vae_name,
            upscaler_name,
            secondary_upscaler_name,
            lora_1_name,
            lora_2_name,
            lora_3_name,
        )

```
