# Documentation
- Class name: WildcardAndLoraSyntaxProcessor
- Category: Mikey/Lora
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The WildcardAndLoraSyntaxProcessor node handles and processes complex text input by replacing wildcards and Lora syntax with specific values or files. It enhances workflow flexibility and customization by enabling dynamic content generation based on predefined patterns and external files.

# Input types
## Required
- model
- The model parameter is essential for node operation because it represents the core model the node will use. This required input directly affects the node’s ability to function properly.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
- The clip parameter is required and works in tandem with the model parameter. It provides additional context or data the model may need, playing a vital role in node execution.
    - Comfy dtype: CLIP
    - Python dtype: CLIP model instance
- text
- The text parameter is a key input because it contains the raw text to be processed. It may include special syntax for wildcards and Lora references, which the node will interpret and replace.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
- The seed parameter is important for the node’s randomization process. It ensures that random elements in the text are generated reproducibly, which is crucial for consistent results across runs.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- extra_pnginfo
- The extra_pnginfo parameter is optional but can provide additional information to further customize node behavior. It may contain metadata or other relevant data to enhance processing.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: str or dict
- prompt
- The prompt parameter is optional and can guide the node’s processing by providing specific instructions or context. It can influence decision making when handling complex text.
    - Comfy dtype: PROMPT
    - Python dtype: str or dict

# Output types
- model
- The node’s model output represents the processed model, updated or modified according to the node’s operations. It marks the completion of text processing and is ready for further use or analysis.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
- The clip output is the processed version of the input clip, reflecting any changes made during node execution. This result may be used in later workflow stages.
    - Comfy dtype: CLIP
    - Python dtype: CLIP model instance
- text
- The text output is the final processed text after all wildcards and Lora syntax have been replaced. It is the node’s primary output and the result of its core function.
    - Comfy dtype: STRING
    - Python dtype: str
- unprocessed_text
- The unprocessed text output provides the node’s original text input, unchanged by node operations. It serves as a reference for comparison or further analysis.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
