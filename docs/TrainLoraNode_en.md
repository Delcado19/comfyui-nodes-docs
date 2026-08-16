# Documentation
- Class name: TrainLoraNode
- Category: model/training
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Train LoRA is a ComfyUI node registered by `comfy_extras.nodes_train`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model to train the LoRA on.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- latents
    - The Latents to use for training, serve as dataset/input of the model.
    - Comfy dtype: LATENT
    - Python dtype: dict
- positive
    - The positive conditioning to use for training.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- batch_size
    - The batch size to use for training.
    - Comfy dtype: INT
    - Python dtype: int
- grad_accumulation_steps
    - The number of gradient accumulation steps to use for training.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The number of steps to train the LoRA for.
    - Comfy dtype: INT
    - Python dtype: int
- learning_rate
    - The learning rate to use for training.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rank
    - The rank of the LoRA layers.
    - Comfy dtype: INT
    - Python dtype: int
- optimizer
    - The optimizer to use for training.
    - Comfy dtype: COMBO
    - Python dtype: object
- loss_function
    - The loss function to use for training.
    - Comfy dtype: COMBO
    - Python dtype: object
- seed
    - The seed to use for training (used in generator for LoRA weight initialization and noise sampling)
    - Comfy dtype: INT
    - Python dtype: int
- training_dtype
    - The dtype to use for training. 'none' preserves the model's native compute dtype instead of overriding it. For fp16 models, GradScaler is automatically enabled.
    - Comfy dtype: COMBO
    - Python dtype: object
- lora_dtype
    - The dtype to use for lora.
    - Comfy dtype: COMBO
    - Python dtype: object
- quantized_backward
    - When using training_dtype 'none' and training on quantized model, doing backward with quantized matmul when enabled.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- algorithm
    - The algorithm to use for training.
    - Comfy dtype: COMBO
    - Python dtype: object
- gradient_checkpointing
    - Use gradient checkpointing for training.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- checkpoint_depth
    - Depth level for gradient checkpointing.
    - Comfy dtype: INT
    - Python dtype: int
- offloading
    - Offload model weights to CPU during training to save GPU memory.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- existing_lora
    - The existing LoRA to append to. Set to None for new LoRA.
    - Comfy dtype: COMBO
    - Python dtype: object
- bucket_mode
    - Enable resolution bucket mode. When enabled, expects pre-bucketed latents from ResolutionBucket node.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- bypass_mode
    - Enable bypass mode for training. When enabled, adapters are applied via forward hooks instead of weight modification. Useful for quantized models where weights cannot be directly modified.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- lora
    - LoRA weights
    - Comfy dtype: LORA_MODEL
    - Python dtype: object
- loss_map
    - Loss history
    - Comfy dtype: LOSS_MAP
    - Python dtype: object
- steps
    - Total training steps
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
