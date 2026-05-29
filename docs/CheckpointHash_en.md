# Documentation
- Class name: CheckpointHash
- Category: Mikey/Loaders
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

CheckpointHash node is designed to generate and retrieve cryptographic hashes for specified checkpoint files. It ensures the integrity and uniqueness of checkpoints by hashing their contents. This node plays a key role in verifying the authenticity of checkpoints during the loading process.

# Input types
## Required
- ckpt_name
    - Checkpoint name is a key parameter used to identify the specific checkpoint file for which the hash will be generated. It is used to match the file in the checkpoint directory.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- extra_pnginfo
    - Additional information related to the PNG file format, possibly used for extra processing or metadata storage beyond checkpoints.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Any
- prompt
    - The prompt object is used to store and retrieve information related to checkpoints, such as unique identifiers and computed hashes, for later use in the workflow.
    - Comfy dtype: PROMPT
    - Python dtype: Dict[str, Dict[str, Any]]
- unique_id
    - Unique identifier of the checkpoint, which can be used to track and reference the checkpoint in the system.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- ckpt_hash
    - The cryptographic hash of the checkpoint file ensures its integrity and serves as a means of verification.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
