
# Documentation
- Class name: FL_AudioPreview
- Category: 🏵️Fill Nodes
- Output node: True
- Repo Ref: https://github.com/FilipLe/filips-comfyui-nodes

The FL_AudioPreview node is designed to play audio clips, allowing users to preview audio data within a workflow. The node supports both mono and stereo audio formats and can handle audio data provided as PyTorch tensors or NumPy arrays.

# Input types
## Required
- audio_segment
    - This is a tuple containing the audio data and its sample rate. This input is essential for determining the audio content to be played and its playback speed.
    - Comfy dtype: AUDIO
    - Python dtype: Tuple[Union[torch.Tensor, np.ndarray], int]

# Output types
This node has no output types.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/FilipLe/filips-comfyui-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
