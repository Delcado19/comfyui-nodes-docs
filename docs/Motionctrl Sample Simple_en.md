# Documentation
- Class name: MotionctrlSampleSimple
- Category: motionctrl
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-MotionCtrl.git

The MotionctrlSampleSimple node is designed to generate and control motion sequences using a series of models and sampling techniques. It leverages the capabilities of a motion control model to create coherent and realistic motion trajectories. The node excels at handling various inputs, including embeddings and noise shapes, to produce image sequences representing motion.

# Input types
## Required
- model
    - The model parameter is critical for the node's operation, as it defines the motion control model that will be used to generate motion sequences. This is a key component that enables the node to generate accurate and realistic motion trajectories.
    - Comfy dtype: MOTIONCTRL
    - Python dtype: torch.nn.Module
- steps
    - The steps parameter determines the number of steps to use during the sampling process. It affects the granularity of the motion sequence and may influence the quality of the generated motion.
    - Comfy dtype: INT
    - Python dtype: int
- context_overlap
    - The context_overlap parameter specifies the amount of overlap between context frames and generated frames. This is important for creating smooth transitions and ensuring the coherence of the motion sequence.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The output of the MotionctrlSampleSimple node is an image sequence representing the generated motion. This sequence is the result of the node's processing, reflecting the input parameters and the capabilities of the underlying motion control model.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-MotionCtrl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
