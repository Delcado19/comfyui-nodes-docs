
# Documentation
- Class name: LLMTreeIndex
- Category: SALT/Language Toolkit/Indexing
- Output node: False

LLMTreeIndex nodes aim to build an index structure from a set of language model nodes for efficient querying and retrieval of information. It supports customization of the indexing process through parameters controlling tree depth and breadth, and provides options for including additional context to enable more refined indexing.

# Input types
## Required
- llm_model
    - Specifies the language model used for indexing, serving as the foundation for building the tree index.
    - Comfy dtype: LLM_MODEL
    - Python dtype: str
- llm_nodes
    - Defines the set of nodes to be indexed, representing the data structures that the tree index will organize and make searchable.
    - Comfy dtype: LLM_NODES
    - Python dtype: list

## Optional
- service_context
    - Optional context for tailoring the indexing process to specific service needs, improving the relevance of the index.
    - Comfy dtype: LLM_CONTEXT
    - Python dtype: str
- num_children
    - Determines the maximum number of child nodes each node in the tree can have, affecting the breadth of the tree.
    - Comfy dtype: INT
    - Python dtype: int
- build_tree
    - A flag controlling whether the tree structure should be built, allowing flexible generation of the index.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- llm_index
    - The generated index structure, optimized for efficient querying and retrieval within the specified language model context.
    - Comfy dtype: LLM_INDEX
    - Python dtype: TreeIndex


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMTreeIndex:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "llm_model": ("LLM_MODEL",),
                "llm_nodes": ("LLM_NODES",),
            },
            "optional": {
                "service_context": ("LLM_CONTEXT",),
                "num_children": ("INT", {"default": 10}),
                "build_tree": ("BOOLEAN", {"default": True}),
            },
        }

    RETURN_TYPES = ("LLM_INDEX",)
    RETURN_NAMES = ("llm_index",)

    FUNCTION = "index"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Indexing"

    def index(self, llm_model, llm_nodes, service_context=None, num_children=10, build_tree=True):
        index = TreeIndex(
            nodes=llm_nodes,
            num_children=num_children,
            build_tree=build_tree,
            use_async=False,
            show_progress=True,
            service_context=service_context,
        )
        return (index,)

```
