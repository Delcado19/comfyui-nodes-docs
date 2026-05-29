
# Documentation
- Class name: LLMQueryEngineAdv
- Category: SALT/Language Toolkit/Querying
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LLMQueryEngineAdv node aims to enhance query capabilities by leveraging language models and embedding models to process and understand complex queries. It integrates advanced settings and post-processing functions to optimize search results based on similarity and relevance.

# Input types
## Required
- llm_model
    - Represents the language and embedding models used for query processing. Essential for understanding queries and generating responses.
    - Comfy dtype: LLM_MODEL
    - Python dtype: Dict[str, Any]
- llm_index
    - The index used for retrieving information. Essential for navigating data and extracting relevant responses.
    - Comfy dtype: LLM_INDEX
    - Python dtype: VectorStoreIndex | JSONQueryEngine
## Optional
- query
    - The user's input query, processed against indexed data to extract information or answer questions.
    - Comfy dtype: STRING
    - Python dtype: Optional[str]
- llm_message
    - A series of messages that can provide additional context or information for query processing.
    - Comfy dtype: LIST
    - Python dtype: Optional[List[ChatMessage]]
- top_k
    - Specifies the number of top results to retrieve, allowing control over the breadth of search results.
    - Comfy dtype: INT
    - Python dtype: int
- similarity_cutoff
    - A threshold for filtering results based on similarity scores, ensuring the relevance of returned information.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- results
    - The processed query results, returned in a structured format.
    - Comfy dtype: STRING
    - Python dtype: Tuple[str]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
