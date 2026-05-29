# Documentation
- Class name: SeargeCustomAfterVaeDecode
- Category: UI.CATEGORY_MAGIC_CUSTOM_STAGES
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node aims to generate the final image by decoding and post-processing the output of a Variational Autoencoder (VAE). It encapsulates the logic required to convert the VAE's latent space representation into a visual output, improving the efficiency and effectiveness of the overall workflow.

# Input types
## Required
- custom_output
    - The custom_output parameter is critical because it serves as the input to the VAE decoding process. It is the output from the previous stage and contains the necessary information required for the node to perform its function.
    - Comfy dtype: SRG_STAGE_OUTPUT
    - Python dtype: Dict[str, Any]

# Output types
- image
    - The output image is the result of VAE decoding and post-processing. It represents the final visual product after the node completes its operation and is essential for further analysis or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
