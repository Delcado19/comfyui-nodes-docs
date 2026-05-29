# Documentation
- Class name: LoraBlockInfo
- Category: InspirePack/LoraBlockWeight
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node class encapsulates the process of extracting and organizing information from a Lora model, a key component for understanding the model's structure and functionality. It provides a comprehensive overview of the different types of blocks in the model, such as input blocks, intermediate blocks, output blocks, and text blocks, along with their respective counts and associations. This advanced capability facilitates analysis and optimization of the model's architecture.

# Input types
## Required
- model
    - The model parameter is essential, as it provides the foundation for the node to perform analysis. It is the primary data source the node uses to extract and organize block information.
    - Comfy dtype: MODEL
    - Python dtype: Any
- clip
    - The clip parameter is critical for refining the model's block information. It helps accurately map keys and enhances the overall extraction process.
    - Comfy dtype: CLIP
    - Python dtype: Any
- lora_name
    - The lora_name parameter specifies the Lora model to analyze. It is a key input that directs the node to the correct data source for block extraction.
    - Comfy dtype: STRING
    - Python dtype: str
- unique_id
    - The unique_id parameter is essential for tracking the node's execution. It ensures each node instance can be uniquely identified, enabling precise feedback and error handling.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str
## Optional
- block_info
    - The block_info parameter serves as a user-provided text input that can supply additional context or specifications for the block extraction process. It supplements the automated analysis with human insight.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
