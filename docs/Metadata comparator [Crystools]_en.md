
# Documentation
- Class name: Metadata comparator [Crystools]
- Category: crystools 🪛/Metadata
- Output node: True
- Repo Ref: https://github.com/crystian/ComfyUI-Crystools

The CMetadataCompare node is designed to compare two sets of metadata to identify differences and similarities between them. It abstracts the complexity of metadata comparison, providing insights into how metadata evolves over time.

# Input types
## Required
- metadata_raw_old
    - The old metadata set to compare. It serves as the baseline for comparison, influencing the identification of changes.
    - Comfy dtype: METADATA_RAW
    - Python dtype: dict
- metadata_raw_new
    - The new metadata set to compare against the old metadata set. It plays a crucial role in highlighting updates or modifications.
    - Comfy dtype: METADATA_RAW
    - Python dtype: dict
- what
    - Specifies the type of comparison to perform, affecting the node's execution and the nature of the comparison results.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional

# Output types
- diff
    - The result of the comparison, detailing the differences and similarities between the two metadata sets.
    - Comfy dtype: JSON
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/crystian/ComfyUI-Crystools)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
