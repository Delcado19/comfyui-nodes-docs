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
```
class SeargeCustomAfterVaeDecode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'custom_output': ('SRG_STAGE_OUTPUT',)}, 'optional': {}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('image',)
    FUNCTION = 'output'
    CATEGORY = UI.CATEGORY_MAGIC_CUSTOM_STAGES

    def output(self, custom_output):
        if custom_output is None:
            return (None,)
        vae_decoded = retrieve_parameter(Names.S_VAE_DECODED, custom_output)
        image = retrieve_parameter(Names.F_DECODED_IMAGE, vae_decoded)
        post_processed = retrieve_parameter(Names.F_POST_PROCESSED, vae_decoded)
        result = image if post_processed is None else post_processed
        return (result,)
```