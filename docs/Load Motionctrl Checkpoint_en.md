# Documentation
- Class name: MotionctrlLoader
- Category: motionctrl
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-MotionCtrl.git

The MotionctrlLoader class is designed to efficiently manage and load motion control checkpoints for advanced motion analysis and generation tasks. It abstracts the complexity of loading and initializing motion control models, providing users with a streamlined interface to leverage motion control capabilities.

# Input types
## Required
- ckpt_name
    - The checkpoint name is a critical parameter that specifies the model checkpoint to load. It is essential for determining the correct pre-trained model weights and architecture.
    - Comfy dtype: str
    - Python dtype: str
- frame_length
    - The frame length parameter determines the temporal scope of the motion control model. It is important for adapting the model to handle motion sequences of varying durations.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- model
    - The model output represents the loaded motion control model, which can be used for inference or further processing. It encapsulates the patterns and dynamics of motion necessary for motion sequence generation or analysis.
    - Comfy dtype: MOTIONCTRL
    - Python dtype: torch.nn.Module
- clip
    - The clip output is the embedder component of the motion control model, responsible for extracting features from motion sequences. It plays a crucial role in the model's ability to understand and process motion data.
    - Comfy dtype: EMBEDDER
    - Python dtype: torch.nn.Module
- vae
    - The vae output refers to the variational autoencoder portion of the motion control model, which plays a significant role in encoding and decoding motion data into a lower-dimensional latent space.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- ddim_sampler
    - The ddim_sampler output is the sampling mechanism for generating new motion sequences based on the loaded motion control model. It provides a method for creating diverse and realistic motion outputs.
    - Comfy dtype: SAMPLER
    - Python dtype: DDIMSampler

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-MotionCtrl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
