
# Documentation
- Class name: `LLMSummaryIndex`
- Category: `SALT/Language Toolkit/Indexing`
- Output node: `False`

The LLMSummaryIndex node is designed to summarize documents using a language model. It processes and condenses input documents through a summarization model, aiming to capture key information in a concise format.

# Input types
## Required
- **`llm_model`**
    - Specifies the language model used for summarization, which plays a critical role in the quality and style of the generated summary.
    - Comfy dtype: `LLM_MODEL`
    - Python dtype: `Dict[str, Any]`
- **`document`**
    - Represents the input documents that need to be summarized. The quality of the input directly affects the effectiveness of the summary.
    - Comfy dtype: `DOCUMENT`
    - Python dtype: `List[Document]`
## Optional
- **`optional_llm_context`**
    - Provides additional context or parameters to the language model, allowing customization of the summary output.
    - Comfy dtype: `LLM_CONTEXT`
    - Python dtype: `Dict[str, Any] or None`

# Output types
- **`llm_index`**
    - The summarized output of the documents, providing a structured and easy-to-understand summary representation.
    - Comfy dtype: `LLM_INDEX`
    - Python dtype: `SummaryIndex`


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class LLMSummaryIndex:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "llm_model": ("LLM_MODEL",),
                "document": ("DOCUMENT",),
            },
            "optional": {
                "optional_llm_context": ("LLM_CONTEXT",),
            },
        }

    RETURN_TYPES = ("LLM_INDEX",)
    RETURN_NAMES = ("llm_index",)

    FUNCTION = "index"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Indexing"

    def index(self, llm_model, document, optional_llm_context=None):

        embed_model = llm_model.get("embed_model", None)
        
        if not embed_model:
            raise ValueError("Unable to determine LLM Embedding Model")

        splitter = SentenceSplitter(chunk_size=1024, chunk_overlap=0)
        tokenizer = MockTokenizer(max_tokens=1024, char_per_token=1)

        documents = []
        for doc in document:
            print(doc)
            metadata = {}
            text = doc.text
            if doc.metadata:
                metadata = doc.metadata
                token_count = tokenizer.count(metadata)
                if token_count > 1024:
                    metadata = tokenizer.truncate(metadata)
            documents.append(Document(text=text, extra_info=metadata))

        index = SummaryIndex.from_documents(
            documents, 
            embed_model=embed_model, 
            service_context=optional_llm_context or None,
            transformations=[splitter]
            )
        return (index,)

```
