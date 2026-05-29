# Documentation
- Class name: SeargeModelSelector
- Category: UI.CATEGORY_UI_INPUTS
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

The SeargeModelSelector node simplifies the process of selecting and combining model checkpoints for further processing. It encapsulates the complexity of handling various checkpoint types, allowing users to focus on model analysis and application without worrying about underlying technical details.

# Input types
## Required
- base_checkpoint
    - The base_checkpoint parameter is critical because it specifies the base model checkpoint that serves as the starting point for subsequent operations. Its selection affects the overall performance and accuracy of downstream tasks.
    - Comfy dtype: UI.CHECKPOINTS()
    - Python dtype: Union[str, None]
- refiner_checkpoint
    - The refiner_checkpoint parameter is essential for enhancing the base model's performance. It introduces the possibility of refining model predictions, thereby improving the quality of the final output.
    - Comfy dtype: UI.CHECKPOINTS_WITH_NONE()
    - Python dtype: Union[str, None]
- vae_checkpoint
    - The vae_checkpoint parameter plays a key role in integrating a variational autoencoder into the workflow. It enables the incorporation of latent representations, which can be crucial for complex data processing tasks.
    - Comfy dtype: UI.VAE_WITH_EMBEDDED()
    - Python dtype: List[str]
## Optional
- data
    - The data parameter serves as a container for additional information that may be required during model selection. It supports the node's effective and efficient operation.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Output types
- data
    - The output data parameter contains the results of the model selection process, including the combined checkpoints. It is a key component for advancing to subsequent stages in the workflow, facilitating further analysis and application.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
