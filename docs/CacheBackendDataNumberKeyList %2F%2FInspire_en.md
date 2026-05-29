# Documentation
- Class name: CacheBackendDataNumberKeyList
- Category: InspirePack/Backend
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

CacheBackendDataNumberKeyList node aims to efficiently manage and store data associated with numeric keys in backend systems. It serves as a critical component of the caching mechanism, ensuring rapid access to frequently used data without redundant retrieval processes.

# Input types
## Required
- key
    - “key” parameter is used to reference and access the numeric identifier of data stored in the cache. It plays a crucial role in the node's operation because it directly affects the efficiency and accuracy of data retrieval.
    - Comfy dtype: INT
    - Python dtype: int
- tag
    - “tag” parameter is a string that provides a brief description or label for data associated with a key. It helps organize and identify cached data, enhancing the node's overall functionality.
    - Comfy dtype: STRING
    - Python dtype: str
- data
    - “data” parameter represents the actual data to be cached. It is critical for the node's operation because it is the primary content that is stored and retrieved upon request.
    - Comfy dtype: any_typ
    - Python dtype: Any

# Output types
- data opt
    - “data opt” output provides the requested data from the cache, ensuring the node fulfills its purpose of efficient data retrieval and storage.
    - Comfy dtype: any_typ
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
