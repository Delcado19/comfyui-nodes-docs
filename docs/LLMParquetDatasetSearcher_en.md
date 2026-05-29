
# Documentation
- Class name: LLMParquetDatasetSearcher
- Category: SALT/Language Toolkit/Tools/Dataset
- Output node: False

This node is designed to perform advanced search operations on large datasets stored in Parquet format. It leverages a language model to interpret and execute complex queries, applying filters, relevance scoring, and parallel processing to efficiently retrieve and rank results based on query intent.

# Input types
## Required
- file_type
    - Specifies the file type to search, such as parquet, text, json, yaml, csv, or excel, determining the method of data extraction and processing.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- path_or_url
    - The location of the file to search, which can be a local file path or URL, providing access to the dataset for the search operation.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional
- search_term
    - The query or keyword to search for within the dataset, guiding the search and filtering process.
    - Comfy dtype: STRING
    - Python dtype: str
- exclude_terms
    - Terms to exclude from search results, allowing for more refined and relevant results.
    - Comfy dtype: STRING
    - Python dtype: str
- columns
    - Specific columns in the dataset to search, enabling targeted searches and improving efficiency.
    - Comfy dtype: STRING
    - Python dtype: str
- case_sensitive
    - Determines whether the search is case-sensitive, affecting the matching process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- max_results
    - The maximum number of search results to return, controlling the scope of the search output.
    - Comfy dtype: INT
    - Python dtype: int
- term_relevancy_threshold
    - The threshold for relevance scoring, filtering results based on their relevance to the search terms.
    - Comfy dtype: FLOAT
    - Python dtype: float
- use_relevancy
    - Indicates whether relevance scoring should be applied to search results, improving result quality.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- min_length
    - The minimum length of search results, filtering out results that do not meet this criterion.
    - Comfy dtype: INT
    - Python dtype: int
- max_length
    - The maximum length of search results, ensuring results fall within the specified size range.
    - Comfy dtype: INT
    - Python dtype: int
- max_dynamic_retries
    - The number of dynamic adjustment retries to perform if no results are found, increasing the chance of finding relevant data.
    - Comfy dtype: INT
    - Python dtype: int
- clean_content
    - Specifies whether content should be cleaned or preprocessed before searching, affecting the accuracy of results.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- excel_sheet_position
    - For excel files, specifies the worksheet to search, allowing targeted data extraction in multi-sheet documents.
    - Comfy dtype: INT
    - Python dtype: int
- recache
    - Determines whether data should be re-cached, potentially improving performance for repeated searches.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- condense_documents
    - Indicates whether search results should be compressed, potentially reducing the amount of data returned.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - The seed value for random operations in the search, ensuring reproducibility of results.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- results
    - Comfy dtype: STRING
    - The primary output containing search results, including relevant data entries.
    - Python dtype: str
- results_list
    - Comfy dtype: LIST
    - A list format of search results, providing an alternative representation.
    - Python dtype: list
- documents
    - Comfy dtype: DOCUMENT
    - A structured document derived from search results, potentially including metadata and additional context.
    - Python dtype: list


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMParquetDatasetSearcher:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "file_type": (["parquet", "text", "json", "yaml", "csv", "excel"],),
                "path_or_url": ("STRING", {"placeholder": "Path to file or URL"}),
            },
            "optional": {
                "search_term": ("STRING", {"placeholder": "Enter search term"}),
                "exclude_terms": ("STRING", {"placeholder": "Terms to exclude, comma-separated"}),
                "columns": ("STRING", {"default": "*"}),
                "case_sensitive": ("BOOLEAN", {"default": False}),
                "max_results": ("INT", {"default": 10, "min": 1}),
                "term_relevancy_threshold": ("FLOAT", {"min": 0.0, "max": 1.0, "default": 0.25, "step": 0.01}),
                "use_relevancy": ("BOOLEAN", {"default": False}),
                #"num_threads": ("INT", {"default": 2}),
                "min_length": ("INT", {"min": 0, "max": 1023, "default": 0}),
                "max_length": ("INT", {"min": 3, "max": 1024, "default": 128}),
                "max_dynamic_retries": ("INT", {"default": 3}),
                "clean_content": ("BOOLEAN", {"default": False}),
                "excel_sheet_position": ("INT", {"min": 0, "default": "0"}),
                "recache": ("BOOLEAN", {"default": False}),
                "condense_documents": ("BOOLEAN", {"default": True}),
                "seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
            }
        }

    RETURN_TYPES = ("STRING", "LIST", "DOCUMENT")
    RETURN_NAMES = ("results", "results_list", "documents")
    OUTPUT_IS_LIST = (True, False, False)

    FUNCTION = "search_dataset"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Tools/Dataset"

    def search_dataset(self, path_or_url, file_type, search_term="", exclude_terms="", columns="*", case_sensitive=False, max_results=10,
                       term_relevancy_threshold=None, use_relevancy=False, num_threads=2, min_length=0, max_length=-1, max_dynamic_retries=0,
                       clean_content=False, seed=None, excel_sheet_position="0", condense_documents=True, recache=False):
        
        # Validate path or download file and return path
        path = resolve_path(path_or_url)

        reader = ParquetReader1D()
        if file_type == "parquet":
            reader.from_parquet(path)
        elif file_type == "text":
            reader.from_text(path, recache=recache)
        elif file_type == "json":
            reader.from_json(path, recache=recache)
        elif file_type == "yaml":
            reader.from_yaml(path, recache=recache)
        elif file_type == "csv":
            reader.from_csv(path, recache=recache)
        elif file_type == "excel":
            reader.from_excel(path, sheet_name=excel_sheet_position, recache=recache)

        results = reader.search(
            search_term=search_term,
            exclude_terms=exclude_terms,
            columns=[col.strip() for col in columns.split(',') if col] if columns else ["*"],
            max_results=max_results,
            case_sensitive=case_sensitive,
            term_relevancy_score=term_relevancy_threshold,
            num_threads=num_threads,
            min_length=min_length,
            max_length=max_length,
            max_dynamic_retries=max_dynamic_retries,
            parse_content=clean_content,
            seed=min(seed, 99999999),
            use_relevancy=use_relevancy
        )

        from pprint import pprint
        pprint(results, indent=4)

        results_list = []
        results_text = "Prompts:\n\n"
        documents = []
        for result in results:
            results_list.append(list(result.values())[0])
            if not condense_documents:
                documents.append(Document(text=list(result.values())[0], extra_info={}))
            else:
                results_text += str(list(result.values())[0]) + "\n\n"
        if condense_documents:
            documents = [Document(text=results_text, extra_info={})]

        return (results_list, results_list, documents,)

```
