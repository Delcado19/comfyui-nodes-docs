
# Documentation
- Class name: LLMSemanticSplitterNodeParser
- Category: SALT/Language Toolkit/Parsing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LLMSemanticSplitterNodeParser node is designed to perform semantic analysis and parsing of documents using a specified language model. It can optionally perform sentence splitting, metadata inclusion, and relationship analysis between adjacent elements. By leveraging deep learning models to identify and organize semantic components, this node aims to enhance text understanding and structured processing.

# Input types
## Required
- document
    - The main text document to be parsed. It is the core input for semantic analysis and structured processing.
    - Comfy dtype: DOCUMENT
    - Python dtype: str
- llm_embed_model
    - The language model used for generating embeddings, critical to the semantic parsing process.
    - Comfy dtype: LLM_EMBED_MODEL
    - Python dtype: object
## Optional
- buffer_size
    - Determines the size of the processing buffer, affecting the granularity of parsing and potentially impacting performance.
    - Comfy dtype: INT
    - Python dtype: int
- sentence_splitter
    - An optional sentence splitting model or method used to improve the accuracy of semantic parsing.
    - Comfy dtype: LLM_SENTENCE_SPLITTER
    - Python dtype: object
- include_metadata
    - Whether to include metadata during the parsing process, used to enrich the semantic understanding of the document.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- include_prev_next_rel
    - Whether to analyze and include relationships between adjacent elements, used to gain deeper insight into the document structure.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- llm_node_parser
    - The result of the semantic parsing process, whose structure reflects the semantic components and relationships identified in the document.
    - Comfy dtype: LLM_NODE_PARSER
    - Python dtype: object


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
