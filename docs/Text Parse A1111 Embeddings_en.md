# Documentation
- Class name: WAS_Text_Parse_Embeddings_By_Name
- Category: WAS Suite/Text/Parse
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

`text_parse_embeddings` method parses and replaces text with corresponding embeddings. It identifies specific patterns in the input text that match embedding file names and replaces them with a predefined format containing the word 'embedding' followed by the file name. This process is essential for preparing text data for further processing or analysis using embedding-based models.

# Input types
## Required
- text
- The `text` parameter is crucial because it provides the raw text data that the node will process. It is the input for the node to perform pattern matching and replacement to embed appropriate references to embedding files.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- parsed_text
- The `parsed_text` output contains the modified text with properly formatted embedding references. It is the result of the node's operation and is important for any subsequent steps that require embedding data.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
