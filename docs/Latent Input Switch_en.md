# Documentation
- Class name: WAS_Latent_Input_Switch
- Category: WAS Suite/Logic
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The 'latent_input_switch' method of the WAS_Latent_Input_Switch node is designed to conditionally select one of two latent representations based on a boolean flag. It acts as a logical switch to direct the flow of latent data in a neural network pipeline, enabling flexible manipulation of inputs for different model architectures.

# Input types
## Required
- latent_a
    - The parameter 'latent_a' represents one of the latent representations to be conditionally selected. It plays a critical role in the node's operation, as it determines the output when the boolean flag is true, thereby influencing subsequent processing steps.
    - Comfy dtype: LATENT
    - Python dtype: Union[torch.Tensor, np.ndarray]
- latent_b
    - The parameter 'latent_b' is the other latent representation, selected when the boolean flag is false. It is essential to the node's functionality, as it determines the output under the specified condition, guiding subsequent neural network operations.
    - Comfy dtype: LATENT
    - Python dtype: Union[torch.Tensor, np.ndarray]
## Optional
- boolean
    - The parameter 'boolean' serves as the control signal for the node's decision process. Its importance lies in directly influencing which latent representation is selected, thereby affecting the overall behavior of the neural network.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- latent_output
    - 'latent_output' represents the latent representation selected according to the boolean flag provided to the node. It is the final result of the node's operation and is critical for further processing in the neural network.
    - Comfy dtype: LATENT
    - Python dtype: Union[torch.Tensor, np.ndarray]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
