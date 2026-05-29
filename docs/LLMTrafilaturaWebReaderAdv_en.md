
# Documentation
- Class name: LLMTrafilaturaWebReaderAdv
- Category: SALT/Language Toolkit/Readers
- Output node: False
- Repo Ref: https://github.com/jbikker/ComfyUI-SALT

The LLMTrafilaturaWebReaderAdv node is an advanced web content extraction tool. It uses the Trafilatura library to efficiently parse and retrieve documents from a list of URLs. This node primarily focuses on validating URLs and extracting web content into a structured document format for subsequent processing or analysis.

# Input types
## Required
- urls
    - The urls parameter is a list of URLs from which the node will attempt to extract web content. This parameter is crucial for defining the information sources the node will process.
    - Comfy dtype: LIST
    - Python dtype: List[str]

# Output types
- documents
    - The documents output is the extracted web content structured as documents. This output is crucial for users who need to obtain processed and accessible information from the provided URLs.
    - Comfy dtype: DOCUMENT
    - Python dtype: Tuple[List[Dict[str, Any]],]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/jbikker/ComfyUI-SALT)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
