# Documentation
- Class name: MakeBasicPipe
- Category: InspirePack/Prompt
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The MakeBasicPipe node is designed to simplify and manipulate text prompts for generative models. It processes both positive and negative prompts, integrating advanced encoding techniques to refine input data for model generation. The node abstracts the complexity of prompt construction, focusing on improving the quality and relevance of input data to enhance generative output.

# Input types
## Required
- ckpt_name
    - The checkpoint name is critical for identifying the specific model state used in the generation process. This is a required parameter that guides the node in locating and using the appropriate model weights and configuration.
    - Comfy dtype: STRING
    - Python dtype: str
- positive_wildcard_text
    - This parameter holds the positive wildcard text, serving as a guide to direct the generative model toward producing desired results. Its strategic use can significantly influence the quality of generated text.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_wildcard_text
    - The negative wildcard text provides the model with a framework for avoiding unwanted outputs. It is an essential component for steering the generative process in the intended direction.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- basic_pipe
    - The output represents a structured pipeline including the model, encoder, and processed prompts, ready for the generation process. It encapsulates the node's functionality in preparing data for effective model utilization.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[torch.nn.Module, CLIP, VAE, str]
- cache_key
    - This output is a unique identifier for cached checkpoint and prompt data, which can be used for subsequent retrieval and processing. It is critical for maintaining consistency and efficiency in generative workflows.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
