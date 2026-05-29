
# Documentation
- Class name: LLMPostProcessDocuments
- Category: SALT/Language Toolkit/Tools
- Output node: False

The LLMPostProcessDocuments node is designed to refine and filter a collection of documents based on specified keywords. It allows inclusion of documents containing specific required keywords while excluding those with specified unwanted keywords, effectively tailoring the document set according to user-defined criteria.

# Input types
## Required
- document
    - Represents the collection of documents to be processed. It is the primary data the node operates on, determining which documents to retain based on the presence or absence of specified keywords.
    - Comfy dtype: DOCUMENT
    - Python dtype: List[Document]

## Optional
- required_keywords
    - A comma-separated list of keywords that documents must contain to be included in the output. This parameter filters documents down to relevant ones matching specific criteria.
    - Comfy dtype: STRING
    - Python dtype: str
- exclude_keywords
    - A comma-separated list of keywords; documents containing these keywords will be excluded from the output. This parameter helps remove documents with unwanted content.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- documents
    - The processed document collection, containing only documents that match the required keywords and do not contain any excluded keywords.
    - Comfy dtype: DOCUMENT
    - Python dtype: List[Document]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMPostProcessDocuments:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "document": ("DOCUMENT",),
            },
            "optional": {
                "required_keywords": ("STRING", {}),
                "exclude_keywords": ("STRING", {}),
            },
        }

    RETURN_TYPES = ("DOCUMENT",)
    RETURN_NAMES = ("documents",)

    FUNCTION = "process_documents"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Tools"

    def process_documents(self, document, required_keywords=[], exclude_keywords=[]):

        if required_keywords.strip():
            required = [ext.strip() for ext in required_keywords.split(",") if ext.strip()]
        else:
            required = None

        if exclude_keywords.strip():
            excluded = [pattern.strip() for pattern in exclude_keywords.split(",") if pattern.strip()]
        else:
            excluded = None

        if required or excluded:
            document = [doc for doc in document if not set(required).isdisjoint(doc.keywords) and set(excluded).isdisjoint(doc.keywords)]

        return (document,)

```
