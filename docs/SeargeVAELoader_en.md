# Documentation
- Class name: SeargeVAELoader
- Category: Searge/_deprecated_/Files
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node aims to conveniently load VAE (Variational Autoencoder) models, providing a simplified interface for accessing and using these machine learning models in workflows. It abstracts the complexity of model retrieval, ensuring VAE models can be seamlessly integrated into the system without requiring detailed knowledge of the underlying storage and loading mechanisms.

# Input types
## Required
- vae_name
    - The 'vae_name' parameter is essential for specifying the unique identifier of the VAE model to load. It serves as the key to locate and retrieve the corresponding model from the storage system, and its correct use ensures accurate and efficient loading of the intended VAE model.
    - Comfy dtype: COMBO['VAE_NAME']
    - Python dtype: str

# Output types
- VAE
    - The output VAE represents the loaded Variational Autoencoder model, which can subsequently be used for various tasks such as data generation, feature extraction, etc. It is a sign of a successful model loading process and is critical for further operations in the workflow.
    - Comfy dtype: VAE
    - Python dtype: nodes.VAE

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
