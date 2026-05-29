
# Documentation
- Class name: LLMInputToDocuments
- Category: SALT/Language Toolkit/Documents
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LLMInputToDocuments node converts input data into a structured document format. It integrates additional information and supports input concatenation, enhancing the document creation process. This node plays a key role in processing and organizing text data, laying the groundwork for subsequent language model processing or document analysis.

# Input types
## Required
- input_data
    - This is the primary data to be converted into document format, serving as the core content of the document creation process. It can be various forms of text data, which the node structures into a document format suitable for further processing.
    - Comfy dtype: *
    - Python dtype: str
## Optional
- extra_info
    - This is an optional JSON-formatted string used to include metadata in the document. Through this parameter, additional context or information can be added to the document, enriching its content and usability.
    - Comfy dtype: STRING
    - Python dtype: str
- concat_input
    - This is a boolean flag that indicates whether to concatenate the input data into a single document or treat each input as a separate document. This option affects the structure and granularity of the final generated documents.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- documents
    - The output is the converted structured document or collection of documents. These documents contain the input data content, potentially enriched with optional metadata, and adjusted according to the concatenation setting. This output provides a structured foundation for subsequent text analysis or processing.
    - Comfy dtype: DOCUMENT
    - Python dtype: Tuple[List[Document]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
