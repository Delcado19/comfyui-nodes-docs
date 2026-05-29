# Documentation
- Class name: pipeOut
- Category: EasyUse/Pipe
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The pipeOut node is designed to simplify the output process of the pipeline, ensuring that results are efficiently managed and organized. It serves as a central hub for handling various data types, facilitating the transition from processing to analysis or storage. By managing the final stage of the data flow, this node maintains the integrity and accessibility of the output.

# Input types
## Required
- pipe
    - The 'pipe' parameter is critical, representing the pipeline from which data is extracted and managed. It is the node's primary source of information, determining the type and structure of the output.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
## Optional
- my_unique_id
    - The 'my_unique_id' parameter serves as an identifier for tracking and associating specific outputs with unique requests or processes. It aids in the organization and retrieval of data within the system.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- pipe
    - The 'pipe' output is a comprehensive collection of processed data, containing all results from the pipeline. It is the culmination of the node's functionality, providing a structured and well-organized dataset for further use.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- model
    - The 'model' output represents the machine learning or neural network model used in the pipeline. It is a key component for understanding the foundation of the processed data and the methods employed.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- pos
    - The 'pos' output consists of positive conditioning data, used to guide and refine the model's predictions. It plays a critical role in the generation process, ensuring that the output aligns with desired results.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Any]
- neg
    - The 'neg' output contains negative conditioning data, used to contrast and filter out undesired results from the model's predictions. It is an essential part of maintaining the quality and relevance of the output.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Any]
- latent
    - The 'latent' output represents intermediate representations or embeddings derived from the model. These latent features are crucial for understanding the underlying structure of the data and can be used for further analysis or processing.
    - Comfy dtype: LATENT
    - Python dtype: List[torch.Tensor]
- vae
    - The 'vae' output refers to the variational autoencoder component in the pipeline, responsible for generating new data points from the learned latent space. It is a key innovation for creating novel and diverse outputs.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- clip
    - The 'clip' output comes from the CLIP model, used for multimodal understanding and generation. It enhances the node's capabilities by providing context and meaning to the output.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- image
    - The 'image' output consists of visual data, the direct result of the model's processing. Its importance lies in providing a tangible and visual representation of the data, allowing for immediate interpretation and analysis.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image.Image]
- seed
    - The 'seed' output is a numerical value used to ensure reproducibility and consistency in the generation process. It is essential for debugging and maintaining the reliability of the output.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
