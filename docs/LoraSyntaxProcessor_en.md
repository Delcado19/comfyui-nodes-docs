# Documentation
- Class name: LoraSyntaxProcessor
- Category: Mikey/Lora
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The LoraSyntaxProcessor node is designed to process text input through a series of syntax transformations. It replaces placeholders with random values, searches for and replaces specific patterns with corresponding data from provided prompts, and loads external LoRA models to enhance the capabilities of the base model. This node plays a key role in generating dynamic and context-aware text output based on input parameters.

# Input types
## Required
- model
    - The model parameter is critical to the node's operation, as it represents the baseline model that will be enhanced or used by the node. It influences the node's execution by determining the model on which any subsequent transformations or processing will be performed.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The clip parameter is a key component in text processing, especially when dealing with visual and multimodal data. It is used to align text with visual representations and can influence the node's output by affecting the context in which the text is processed.
    - Comfy dtype: CLIP
    - Python dtype: CLIP model or related object
- text
    - The text parameter is the primary input to the node, containing the raw text that will undergo syntax processing. It is the foundation of the node's operation, as the entire transformation process revolves around this input.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - The seed parameter is used to initialize the random number generator, ensuring reproducible results when generating random values in the text. It plays an important role in maintaining consistency in the node's output.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- extra_pnginfo
    - The extra_pnginfo parameter provides additional context or metadata that can be used to customize text processing. It can influence the node's execution by providing extra information that may be relevant to certain transformations.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: dict or str
- prompt
    - The prompt parameter is used to guide text processing by providing specific instructions or data that the node will use to replace patterns in the text. It influences the node's execution by determining the specific transformations that will be applied to the input text.
    - Comfy dtype: PROMPT
    - Python dtype: dict or str

# Output types
- model
    - The model output represents the potentially enhanced model after applying any transformations or loading additional LoRA models. It marks the completion of the node's processing and is critical for subsequent tasks that depend on the updated model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The clip output is a processed or enhanced version of the input clip, which may have been modified according to the transformations applied by the node. It is important for tasks that require updated visual representations aligned with the processed text.
    - Comfy dtype: CLIP
    - Python dtype: CLIP model or related object
- text
    - The text output is the final processed text after all syntax transformations have been applied. It is the direct result of the node's operation and is essential for any downstream tasks that require text information.
    - Comfy dtype: STRING
    - Python dtype: str
- unprocessed_text
    - The unprocessed text output provides the original text input with any LoRA-related syntax removed. It is useful for scenarios where the raw text is needed alongside the processed text for comparison or further analysis.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
