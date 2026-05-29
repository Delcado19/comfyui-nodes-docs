# Documentation
- Class name: FromBasicPipe
- Category: ImpactPack/Pipe
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the FromBasicPipe node serves as a critical conduit in the data processing pipeline, responsible for extracting and organizing core elements such as models, clips, and Variational Autoencoders (VAEs). It ensures that necessary data structures are efficiently retrieved and prepared for seamless integration of different data components within the workflow.

# Input types
## Required
- basic_pipe
    - The 'basic_pipe' parameter is essential to the 'doit' method, as it contains the foundational data structure required for node operations. It acts as a conduit through which model, clip, and VAE components are channeled, highlighting its critical role in enabling the node to function effectively.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[Any, Any, Any, Any, Any]

# Output types
- model
    - The 'model' output represents a critical component in the node's data processing framework, representing the machine learning model essential to node functionality. It plays a significant role in shaping the node's overall contribution to the workflow, emphasizing its importance in the data pipeline.
    - Comfy dtype: MODEL
    - Python dtype: Any
- clip
    - The 'clip' output represents a data segment crucial to node operations. It is used to extract and manipulate specific portions of information, underscoring its importance in the node's ability to effectively process and manage data.
    - Comfy dtype: CLIP
    - Python dtype: Any
- vae
    - The 'vae' output represents the presence of a Variational Autoencoder within the node architecture, a critical component for encoding and decoding data representations. Its inclusion is essential to the node's ability to transform and interpret complex data structures.
    - Comfy dtype: VAE
    - Python dtype: Any
- positive
    - The 'positive' output indicates a conditional factor used to guide the node's processing logic. It plays a significant role in steering the node toward generating desired outcomes, highlighting its strategic importance in node operations.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- negative
    - The 'negative' output represents an opposing conditional factor critical to the node's decision-making process. It is essential in defining the boundaries of node operations and ensuring the node's execution aligns with intended objectives.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
