# Documentation
- Class name: CacheBackendData
- Category: InspirePack/Backend
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

Such nodes manage the storage and retrieval of data in the backend cache system, facilitating efficient data access and optimization of workflow processes.

# Input types
## Required
- key
    - The key parameter is crucial for uniquely identifying data in the cache. It is used to index and retrieve related data, ensuring that the correct information is accessed and processed.
    - Comfy dtype: STRING
    - Python dtype: str
- tag
    - The tag parameter serves as a descriptive label for data, aiding in data classification and quick reference. It enhances organization within the cache and supports efficient data management.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- data
    - The data parameter represents the actual content to be cached. It is the foundation of node operations because it holds the value that will be stored and later accessed.
    - Comfy dtype: ANY
    - Python dtype: Any

# Output types
- data opt
    - The output provides the data of the original input, ensuring that the data flow is maintained throughout the process. It confirms that the data has been successfully stored and is available for future use.
    - Comfy dtype: ANY
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
