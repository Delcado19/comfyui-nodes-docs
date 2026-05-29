
# Documentation
- Class name: LLMVectorStoreIndexAdv
- Category: SALT/Language Toolkit/Indexing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LLMVectorStoreIndexAdv node aims to optimize vector storage and indexing operations in large language models. It employs advanced techniques to manage vector data, aiming to improve the efficiency of retrieval and storage processes in a scalable manner.

# Input types
## Required
- llm_model
    - Specifies the large language model used to generate embeddings, playing a key role in the indexing process by determining the vector representation of text.
    - Comfy dtype: LLM_MODEL
    - Python dtype: dict
- document
    - Input documents to be indexed, where each document's text and optional metadata are processed and converted into vector embeddings.
    - Comfy dtype: DOCUMENT
    - Python dtype: Sequence[Document]

## Optional
- chunk_size
    - Defines the chunk size for text processing, affecting how documents are split and indexed.
    - Comfy dtype: COMBO[INT]
    - Python dtype: int
- chunk_overlap
    - Specifies the overlap between consecutive text chunks, affecting the continuity and coverage of the indexing process.
    - Comfy dtype: INT
    - Python dtype: int
- optional_llm_context
    - Optional context parameter, allowing customization of the indexing process based on the specific needs or configuration of the large language model.
    - Comfy dtype: LLM_CONTEXT
    - Python dtype: dict

# Output types
- llm_index
    - The output is an index object that efficiently stores and retrieves vector embeddings, representing the processed documents.
    - Comfy dtype: LLM_INDEX
    - Python dtype: VectorStoreIndex


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
