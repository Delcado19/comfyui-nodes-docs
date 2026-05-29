# Documentation
- Class name: WAS_Diffusers_Hub_Model_Loader
- Category: WAS Suite/Loaders/Advanced
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Diffusers_Hub_Model_Loader node is designed to facilitate loading advanced machine learning models from the Hugging Face model hub. It simplifies the process of downloading and initializing models, CLIPs, and VAEs, allowing users to quickly integrate these components into their workflows. This node is essential for tasks requiring complex model capabilities, such as natural language processing and generative AI.

# Input types
## Required
- repo_id
    - The repo_id parameter is critical for identifying a specific model repository on the Hugging Face hub. It plays a key role in the node's execution by directing the download process to the correct source, ensuring accurate retrieval of the desired model.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- revision
    - The revision parameter allows specifying a particular version of the model in the repository. It is important for users who need a specific model iteration for their tasks, ensuring reproducibility and consistency in model performance.
    - Comfy dtype: STRING
    - Python dtype: Union[str, None]

# Output types
- model
    - The model output provides the loaded machine learning model, ready for inference or further processing. It is a core component of the node's functionality, giving users direct access to the model's predictive capabilities.
    - Comfy dtype: MODEL
    - Python dtype: Any
- clip
    - The clip output is a component typically used alongside the model for tasks involving text and image interactions. It is important for users leveraging this node for advanced natural language processing applications.
    - Comfy dtype: CLIP
    - Python dtype: Any
- vae
    - The vae output is a type of variational autoencoder, a neural network used for generative tasks. It is a valuable asset for users who wish to generate new data instances based on learned dataset distributions.
    - Comfy dtype: VAE
    - Python dtype: Any
- name_string
    - The name_string output returns the repository ID as a string, providing a human-readable identifier for the loaded model. It is useful for referencing and documentation purposes within workflows.
    - Comfy dtype: TEXT_TYPE
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
