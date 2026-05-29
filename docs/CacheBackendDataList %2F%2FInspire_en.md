# Documentation
- Class name: CacheBackendDataList
- Category: InspirePack/Backend
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node manages data retrieval and storage in the backend system, facilitating efficient data access and organization.

# Input types
## Required
- key
    - The key parameter is crucial for identifying specific data entries in the cache. It serves as a unique identifier, allowing the node to accurately retrieve or store relevant data.
    - Comfy dtype: STRING
    - Python dtype: str
- tag
    - The tag parameter provides a means to categorize and describe data in the cache. It aids in data organization and filtering, improving the system's overall efficiency.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- data
    - The data parameter represents the actual content to be stored or retrieved from the cache. It is a versatile field that can contain various types of information depending on the use case.
    - Comfy dtype: ANY
    - Python dtype: Any

# Output types
- data
    - Output data represents the information retrieved from the cache. It is the primary result of the node's operation, demonstrating the node's effectiveness in managing and providing access to stored data.
    - Comfy dtype: ANY
    - Python dtype: Any
- opt
    - The opt parameter, as part of the output, may contain additional options or metadata related to the retrieved data. It supplements the main data output, providing further context or utility.
    - Comfy dtype: ANY
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
