# Documentation
- Class name: pipeIn
- Category: EasyUse/Pipe
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The pipeIn node serves as the central conduit of the data flow, facilitating the transition and transformation of information within the pipeline. It aims to simplify the data processing workflow by integrating various inputs and managing their routing within the system. The node’s primary function is to ensure that necessary components are effectively passed along, allowing subsequent operations to execute as intended.

# Input types
## Required
- pipe
- The pipe parameter is crucial because it represents the main source of data and instructions for the pipeIn node. It contains all necessary elements such as the model, conditional data, and other related information that determine the node’s operation and outcome.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
## Optional
- model
- The model parameter is essential because it defines the core algorithm or neural network architecture used in the pipeIn node’s processing. This is vital for the node’s correct functioning and for producing accurate results.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- pos
- Positive conditional data, called 'pos', plays a critical role in guiding the behavior of the pipeIn node. It provides the model with the necessary context to generate or process data as expected.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- neg
- Negative conditional data, or 'neg', is equally important because it sets boundaries for the model’s output. It helps the node refine its operation and ensures that results align with expectations.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- latent
- The latent parameter is key when handling unobserved or latent data. It allows the pipeIn node to incorporate hidden variables into its processing, which can significantly influence the final output.
    - Comfy dtype: LATENT
    - Python dtype: Any
- vae
- The vae parameter is essential for the node’s encoding and decoding functions. It represents the variational autoencoder model, which is necessary for tasks related to data compression and generation performed by the pipeIn node.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- clip
- The clip parameter is important when the pipeIn node needs to align generated data with specific context or content. It integrates the CLIP model, which is crucial for understanding and generating images or text that match a given description.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- image
- The image parameter is indispensable when the pipeIn node deals with visual data processing. It carries the visual information that the node will operate on or analyze to achieve the desired result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- xyplot
- The xyplot parameter defines the plotting settings for the pipeIn node. It is important for the visual representation and analysis of data, allowing the node to produce meaningful visualizations that aid in understanding data structure and trends.
    - Comfy dtype: XYPLOT
    - Python dtype: Any
- my_unique_id
- The my_unique_id parameter is the unique identifier for an instance of the pipeIn node. It is important for tracking and managing nodes in complex systems, ensuring that each instance can be monitored and controlled individually.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- pipe
- The output pipe is the refined and structured dataset processed by the pipeIn node. It encapsulates the results and any modifications made during the node’s execution, serving as the foundation for further operations or analysis within the pipeline.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
