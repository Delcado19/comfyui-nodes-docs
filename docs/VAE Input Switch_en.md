# Documentation
- Class name: WAS_VAE_Input_Switch
- Category: WAS Suite/Logic
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `vae_switch` method in the `WAS_VAE_Input_Switch` node is designed to conditionally select one of two Variational Autoencoder (VAE) instances based on a boolean flag. It acts as a logic switch, directing the processing flow to one of the provided VAEs, enabling flexible and conditional processing within the workflow.

# Input types
## Required
- vae_a
    - The parameter `vae_a` represents the first Variational Autoencoder (VAE) instance that may be selected by the switch. This is a critical component, as the node's decision process depends on whether this VAE or the other one will be used in subsequent operations.
    - Comfy dtype: VAE
    - Python dtype: comfy.sd.VAE
- vae_b
    - The parameter `vae_b` represents the second Variational Autoencoder (VAE) instance for the switch, serving as the alternative option. Its inclusion allows a secondary execution path in the node's functionality, providing diversity in processing options.
    - Comfy dtype: VAE
    - Python dtype: comfy.sd.VAE
## Optional
- boolean
    - The parameter `boolean` serves as the control signal for the switch, determining whether `vae_a` or `vae_b` will be the node's output. Its value directly influences the node's decision process, directing the output to one of the VAE instances.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- selected_vae
    - The output `selected_vae` represents the Variational Autoencoder (VAE) instance chosen by the switch based on the boolean condition. It is significant because it represents the result of the node's conditional logic and serves as the starting point for any subsequent processing.
    - Comfy dtype: VAE
    - Python dtype: comfy.sd.VAE

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
